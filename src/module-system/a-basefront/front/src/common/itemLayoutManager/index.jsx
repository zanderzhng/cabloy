import Vue from 'vue';
import Base from './base.jsx';
import Page from './page.jsx';
import Layout from './layout.jsx';
import Info from './info.jsx';
import Event from './event.jsx';
import Item from './item.jsx';
import Subnavbar from './subnavbar.jsx';
import Actions from './actions.jsx';
import Validate from './validate.jsx';
import Share from './share.jsx';
const ebLayoutManagerBase = Vue.prototype.$meta.module.get('a-base').options.mixins.ebLayoutManagerBase;
const ebAtomClasses = Vue.prototype.$meta.module.get('a-base').options.mixins.ebAtomClasses;
const ebAtomActions = Vue.prototype.$meta.module.get('a-base').options.mixins.ebAtomActions;
const ebPageDirty = Vue.prototype.$meta.module.get('a-components').options.mixins.ebPageDirty;

// container: {
//   mode,  // edit/view
//   atomId,
//   itemId,
//   layout,
//   atomClass,
//   options, // .atomMain
//   params
// },

export default {
  mixins: [
    ebLayoutManagerBase, //
    ebAtomClasses,
    ebAtomActions,
    ebPageDirty,
    Base,
    Page,
    Layout,
    Info,
    Event,
    Item,
    Subnavbar,
    Actions,
    Validate,
    Share,
  ],
  data() {
    return {};
  },
  created() {
    this.index_load();
  },
  methods: {
    async index_load() {
      await this.base_init();
      let res = await this.base_loadAtomClass();
      if (!res) return;
      await this.layout_prepareConfigLayout();
      res = await this.base_loadItem();
      if (!res) return;
      await this.share_updateLink();
      this.base.ready = true;
    },
  },
};
