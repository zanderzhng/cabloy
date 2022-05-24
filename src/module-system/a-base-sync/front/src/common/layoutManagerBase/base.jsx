export default {
  data() {
    return {
      base: {
        ready: false,
        notfound: false,
      },
    };
  },
  computed: {
    base_user() {
      return this.$store.state.auth.user.op;
    },
  },
  methods: {
    async base_init() {
      // layoutConfig
      await this.layout_initLayoutConfig();
      // base_onInit
      if (this.base_onInit) {
        await this.base_onInit();
      }
    },
    base_performActionResource(event, resource, navigateOptions) {
      const resourceConfig = JSON.parse(resource.resourceConfig);
      // special for action
      let action;
      let item;
      if (resourceConfig.atomAction === 'create') {
        //
        action = this.getAction({
          module: resourceConfig.module,
          atomClassName: resourceConfig.atomClassName,
          name: resourceConfig.atomAction,
        });
        item = {
          module: resourceConfig.module,
          atomClassName: resourceConfig.atomClassName,
        };
      } else if (resourceConfig.atomAction === 'read') {
        if (!resourceConfig.actionComponent && !resourceConfig.actionPath) {
          resourceConfig.actionPath = '/a/basefront/atom/list?module={{module}}&atomClassName={{atomClassName}}';
        }
        action = resourceConfig;
        item = {
          module: resourceConfig.module,
          atomClassName: resourceConfig.atomClassName,
        };
      } else {
        action = resourceConfig;
      }
      action = this.$utils.extend({}, action, { targetEl: event.currentTarget, navigateOptions });
      return this.$meta.util.performAction({ ctx: this, action, item });
    },
  },
};
