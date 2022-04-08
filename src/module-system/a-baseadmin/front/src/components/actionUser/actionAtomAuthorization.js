export default {
  methods: {
    async _onActionAtomAuthorization() {
      const { ctx, action, item } = this.$props;
      // atomAuthorization
      // open
      const url = ctx.$meta.util.replaceTemplate(
        '/a/baseadmin/user/atomRights?userAtomId={{atomId}}&userId={{itemId}}',
        item
      );
      let navigateOptions = action.navigateOptions;
      if (ctx.$pageRoute.path === '/a/basefront/atom/item') {
        navigateOptions = { target: '_self' };
      }
      ctx.$view.navigate(url, navigateOptions);
    },
  },
};
