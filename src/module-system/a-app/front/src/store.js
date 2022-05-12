const __appKeyDefault = 'a-app:appDefault';
const __appKeyBase = 'a-app:appBase';
const __atomClassApp = {
  module: 'a-app',
  atomClassName: 'app',
};

export default function (Vue) {
  const query = Vue.prototype.$utils.parseUrlQuery();

  Vue.prototype.$meta.eventHub.$on('auth:login', data => {
    Vue.prototype.$meta.store.commit('a/app/clearUserInfo', data);
  });

  return {
    state: {
      // user
      currentInner: {
        appKey: null,
        appLanguage: null,
      },
      appItemsAll: null,
      layoutConfig: null,
      // global
      appItems: {},
    },
    getters: {
      current(state) {
        // appKey
        const appKey = state.currentInner.appKey;
        // appLanguage
        const appLanguage = state.currentInner.appLanguage;
        // userStatus/layout
        const { userStatus, layout } = __getUserStatusAndLayout({ Vue });
        // ok
        return {
          appKey,
          appLanguage,
          userStatus,
          layout,
        };
      },
      appItemCurrent(state, getters) {
        return state.appItems[getters.current.appKey];
      },
      presetConfigCurrent(state, getters) {
        const appItem = getters.appItemCurrent;
        if (!appItem) return null;
        // preset config
        return __getPresetConfig({ appItem, current: getters.current });
      },
    },
    mutations: {
      clearUserInfo(state) {
        // clear
        // maybe fallback to appDefault from appSystem
        if (state.currentInner.appKey === __appKeyDefault) {
          state.currentInner.appKey = null;
        }
        state.appItemsAll = null;
        //
        state.layoutConfig = null;
      },
      setCurrent(state, { appKey, appLanguage }) {
        if (!appKey && !appLanguage) return;
        if (appKey) state.currentInner.appKey = appKey;
        if (appLanguage) state.currentInner.appLanguage = appLanguage;
        // layout config
        const layoutConfig = state.layoutConfig;
        if (!layoutConfig) throw new Error('app current not inited');
        const layoutConfigKey = __getLayoutConfigKey({ Vue });
        const layoutConfigValue = layoutConfig[layoutConfigKey] || {};
        const layoutConfigValueApp = layoutConfigValue.appKey;
        const layoutConfigValueLanguage = layoutConfigValue.appLanguage;
        if (
          layoutConfigValueApp !== state.currentInner.appKey ||
          layoutConfigValueLanguage !== state.currentInner.appLanguage
        ) {
          Vue.prototype.$meta.store.commit('a/base/setLayoutConfigKey', {
            module: 'a-basefront',
            key: layoutConfigKey,
            value: { appKey: state.currentInner.appKey, appLanguage: state.currentInner.appLanguage },
          });
        }
      },
      setAppItem(state, { appKey, appItem }) {
        state.appItems = {
          ...state.appItems,
          [appKey]: appItem,
        };
      },
      setAppItemsAll(state, { appItems }) {
        state.appItemsAll = appItems;
      },
      setLayoutConfig(state, { layoutConfig }) {
        state.layoutConfig = layoutConfig;
      },
    },
    actions: {
      async getLayoutConfig({ state, commit }) {
        if (state.layoutConfig) return state.layoutConfig;
        const layoutConfig = await Vue.prototype.$meta.store.dispatch('a/base/getLayoutConfig', 'a-basefront');
        commit('setLayoutConfig', { layoutConfig });
        return layoutConfig;
      },
      async getCurrent({ state, getters, commit, dispatch }) {
        if (state.currentInner.appKey) {
          // has inited
          return getters.current;
        }
        // layout config
        const layoutConfig = await dispatch('getLayoutConfig');
        const layoutConfigKey = __getLayoutConfigKey({ Vue });
        const layoutConfigValue = layoutConfig[layoutConfigKey] || {};
        const layoutConfigValueApp = layoutConfigValue.appKey;
        const layoutConfigValueLanguage = layoutConfigValue.appLanguage;
        // current
        const appKey = query.appKey || layoutConfigValueApp || __appKeyDefault;
        const appLanguage = query.appLanguage || layoutConfigValueLanguage || Vue.prototype.$meta.util.getLocale();
        commit('setCurrent', { appKey, appLanguage });
        return getters.current;
      },
      async getPresetConfigCurrent({ state, getters, commit, dispatch }) {
        // force init current
        await dispatch('getCurrent');
        // force appItem exists
        const appItem = await dispatch('getAppItemCurrent');
        if (!appItem) {
          // fallback to appDefault
          commit('setCurrent', { appKey: __appKeyDefault });
          await dispatch('getAppItemCurrent');
        }
        // current
        return getters.presetConfigCurrent;
      },
      async getPresetConfigDefault({ state, dispatch }) {
        return await dispatch('getPresetConfig', { appKey: __appKeyDefault });
      },
      async getAppItemCurrent({ state, getters, dispatch }) {
        return await dispatch('getAppItem', { appKey: getters.current.appKey });
      },
      async getPresetConfig({ state, getters, dispatch }, { appKey }) {
        // force appItem exists
        const appItem = await dispatch('getAppItem', { appKey });
        if (!appItem) return null; // maybe no access right
        return __getPresetConfig({ appItem, current: getters.current });
      },
      async getAppItem({ state, commit, dispatch }, { appKey }) {
        let appItem = state.appItems[appKey];
        if (appItem) return appItem;
        appItem = await __fetchAppItem({ Vue, appKey });
        if (!appItem) return null; // maybe no access right
        appItem.content = appItem.content ? JSON.parse(appItem.content) : null;
        // get base app
        if (appKey !== __appKeyBase) {
          const appItemBase = await dispatch('getAppItem', { appKey: __appKeyBase });
          appItem.content = Vue.prototype.$meta.util.extend({}, appItemBase.content, appItem.content);
        }
        commit('setAppItem', { appKey, appItem });
        return appItem;
      },
      async getAppItemsAll({ state, commit }) {
        if (state.appItemsAll) return state.appItemsAll;
        const res = await Vue.prototype.$meta.api.post('/a/base/resource/select', {
          atomClass: __atomClassApp,
          options: {
            orders: [
              ['f.appSorting', 'asc'],
              ['f.createdAt', 'asc'],
            ],
          },
        });
        const appItems = res.list;
        commit('setAppItemsAll', { appItems });
        return appItems;
      },
    },
  };
}

function __getUserStatusAndLayout({ Vue }) {
  // userStatus
  const user = Vue.prototype.$meta.store.state.auth.user;
  const userOp = user && user.op;
  const userStatus = !userOp || userOp.anonymous ? 'anonymous' : 'authenticated';
  // layout
  const layout = Vue.prototype.$meta.vueApp.layout;
  // ok
  return { userStatus, layout };
}

function __getLayoutConfigKey({ Vue }) {
  const { userStatus, layout } = __getUserStatusAndLayout({ Vue });
  return `apps.current.${userStatus}.${layout}`;
}

function __getPresetConfig({ appItem, current }) {
  const presetConfig = appItem.content.presets[current.userStatus][current.layout];
  return presetConfig[current.appLanguage] || presetConfig;
}

async function __fetchAppItem({ Vue, appKey }) {
  try {
    const appItem = await Vue.prototype.$meta.api.post('/a/base/resource/read', {
      atomStaticKey: appKey,
      options: {
        //  locale: false, // should return locale info
      },
    });
    return appItem;
  } catch (err) {
    if (err.code === 401 || err.code === 403) {
      return null;
    }
    throw err;
  }
}
