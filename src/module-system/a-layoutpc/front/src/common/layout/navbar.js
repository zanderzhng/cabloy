export default {
  methods: {
    navbar_findViewDom(ctx) {
      const $el = ctx.$$(ctx.$el);
      return $el.parents('.eb-layout-view');
    },
    navbar_findViewInfo(ctx) {
      const $view = this.navbar_findViewDom(ctx);
      const groupId = $view.parents('.eb-layout-group').data('groupId');
      const viewId = $view.attr('id');
      const viewPopup = $view.is('.eb-layout-popup-view');
      const viewTile = $view.is('.eb-layout-group-view');
      const viewIndex = parseInt($view.data('index'));
      return {
        $view,
        groupId,
        viewId,
        viewPopup,
        viewTile,
        viewIndex,
      };
    },
    backLink(ctx) {
      let backLink = false;
      const routeDiff = this.$meta.util.viewRouterDid(ctx.$view) ? 2 : 1;
      if (!this.$meta.util.historyUrlEmpty(ctx.$f7router.history[ctx.$f7router.history.length - routeDiff])) {
        backLink = true;
      } else {
        const viewInfo = this.navbar_findViewInfo(ctx);
        if (viewInfo.viewTile && viewInfo.viewIndex > 0) {
          backLink = true;
        }
      }
      return backLink;
    },
    closeLink(ctx) {
      const viewInfo = this.navbar_findViewInfo(ctx);
      return viewInfo.viewPopup;
    },
    sizeLink(ctx) {
      const viewInfo = this.navbar_findViewInfo(ctx);
      if (!viewInfo.viewPopup) return false;
      const group = this.groupsInstance.getGroupInstance(viewInfo.groupId);

      return 'restore';
    },
    onCloseClick(ctx) {
      console.log('onCloseClick');
    },
    onSizeClick(ctx) {
      console.log('onSizeClick');
    },
  },
};
