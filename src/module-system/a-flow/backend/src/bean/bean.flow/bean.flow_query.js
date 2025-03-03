module.exports = ctx => {
  // const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Flow {
    async count({ options, user }) {
      return await this.select({ options, user, count: 1 });
    }

    async select({ options, user, pageForce = true, count = 0 }) {
      const items = await this._list({ options, user, pageForce, count });
      for (const item of items) {
        if (item.flowNodeNameCurrent) {
          item.flowNodeNameCurrentLocale = ctx.text(item.flowNodeNameCurrent);
        }
        if (item.flowRemark) {
          item.flowRemarkLocale = ctx.text(item.flowRemark);
        }
      }
      return items;
    }

    async get({ flowId, history, user }) {
      // check workflowFormal
      const res = await this._checkWorkflowFormal({ flowId, user });
      if (res) {
        user = { id: 0 };
      }
      // where
      const where = {};
      if (history) {
        where['a.flowId'] = flowId;
      } else {
        where['a.id'] = flowId;
      }
      const flows = await this.select({
        options: {
          where,
          mode: history ? 'history' : 'flowing',
        },
        user,
      });
      return flows[0];
    }

    // mode: mine/others/flowing/history
    async _list({ options: { where, orders, page, mode }, user, pageForce = true, count = 0 }) {
      page = ctx.bean.util.page(page, pageForce);
      const sql = this.sqlProcedure.selectFlows({
        iid: ctx.instance.id,
        userIdWho: user ? user.id : 0,
        where,
        orders,
        page,
        count,
        mode,
      });
      const res = await ctx.model.query(sql);
      return count ? res[0]._count : res;
    }

    async _checkWorkflowFormal({ flowId, user }) {
      const flowItem = await ctx.bean.flow.modelFlowHistory.get({ flowId });
      const atomId = flowItem.flowAtomId;
      if (!atomId) return null;
      return await ctx.bean.atom.checkRightAction({
        atom: { id: atomId },
        action: 'workflowFormal',
        user,
      });
    }
  }

  return Flow;
};
