export default {
  methods: {
    async _onActionWrite() {
      const { ctx, action, item } = this.$props;
      const key = { atomId: item.atomId, itemId: item.itemId };
      // atomClass
      const atomClass = {
        module: item.module,
        atomClassName: item.atomClassName,
      };
      // atomClassBase
      const atomClassBase = await ctx.$store.dispatch('a/base/getAtomClassBase', { atomClass });
      // dataOptions
      const dataOptions = action.dataOptions || {};
      if (dataOptions.createDelay) {
        // create delay
        await this._onActionWrite_createDelay({ ctx, action, item, atomClass, dataOptions });
      } else {
        // general
        if (atomClassBase.itemOnly) {
          await this._onActionWrite_itemOnly({ ctx, action, key, atomClass, dataOptions });
        } else {
          await this._onActionWrite_normal({ ctx, action, key, atomClass, dataOptions });
        }
      }
    },
    _onActionWrite_navigateOptions({ ctx, action, dataOptions }) {
      return Object.assign({}, action.navigateOptions, {
        context: {
          params: { atomMain: dataOptions.atomMain },
        },
      });
    },
    async _onActionWrite_createDelay({ ctx, action, atomClass, dataOptions }) {
      // params
      const params = {
        createDelay: {
          dataOptions,
        },
      };
      // queries
      const queries = {
        mode: 'edit',
        module: atomClass.module,
        atomClassName: atomClass.atomClassName,
        params: JSON.stringify(params),
      };
      // navigate
      const url = ctx.$meta.util.combineQueries('/a/basefront/atom/item', queries);
      const navigateOptions = this._onActionWrite_navigateOptions({ ctx, action, dataOptions });
      ctx.$view.navigate(url, navigateOptions);
    },
    async _onActionWrite_itemOnly({ ctx, action, key, atomClass, dataOptions }) {
      // queries
      const queries = {
        mode: 'edit',
        atomId: key.atomId,
        itemId: key.atomId,
        module: atomClass.module,
        atomClassName: atomClass.atomClassName,
      };
      // navigate
      const url = ctx.$meta.util.combineQueries('/a/basefront/atom/item', queries);
      const navigateOptions = this._onActionWrite_navigateOptions({ ctx, action, dataOptions });
      ctx.$view.navigate(url, navigateOptions);
    },
    async _onActionWrite_normal({ ctx, action, key, atomClass, dataOptions }) {
      // openDraft
      const data = await ctx.$api.post('/a/base/atom/openDraft', { key, atomClass });
      const dataRes = data.draft || data.formal;
      const keyWrite = dataRes.key;
      const atomWrite = dataRes.atom;
      const changed = data.changed;
      // emit
      if (changed) {
        ctx.$meta.eventHub.$emit('atom:action', {
          key: keyWrite,
          atomClass,
          action: { name: 'create' },
          atom: atomWrite,
        });
      }
      // queries
      const queries = {
        mode: 'edit',
        atomId: atomWrite.atomId,
        itemId: atomWrite.itemId,
        module: atomClass.module,
        atomClassName: atomClass.atomClassName,
      };
      // navigate
      const url = ctx.$meta.util.combineQueries('/a/basefront/atom/item', queries);
      const navigateOptions = this._onActionWrite_navigateOptions({ ctx, action, dataOptions });
      ctx.$view.navigate(url, navigateOptions);
      // event: neednot check atomStage
      // if (item.atomStage > 0) {
      //   ctx.$meta.eventHub.$emit('atom:actions', { key, atomClass });
      // }
      if (changed) {
        ctx.$meta.eventHub.$emit('atom:actions', { key, atomClass });
      }
    },
  },
};
