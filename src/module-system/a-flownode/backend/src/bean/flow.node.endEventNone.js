module.exports = ctx => {
  class FlowNode extends ctx.app.meta.FlowNodeBase {
    constructor(options) {
      super(ctx, options);
    }

    async onNodeLeave() {
      await super.onNodeLeave();
      // end
      await this.flowInstance._endFlow({
        flowHandleStatus: 1,
        flowRemark: null,
        // should not handle atom
        // atom: {
        //   close: true,
        // },
      });
      // also true
      return true;
    }
  }

  return FlowNode;
};
