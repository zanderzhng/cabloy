module.exports = app => {
  class MessageController extends app.Controller {
    // options
    //   where, orders
    async group() {
      const options = this.ctx.request.body.options;
      const items = await this.ctx.service.message.group({
        options,
        user: this.ctx.state.user.op,
      });
      this.ctx.success(items);
    }
  }
  return MessageController;
};
