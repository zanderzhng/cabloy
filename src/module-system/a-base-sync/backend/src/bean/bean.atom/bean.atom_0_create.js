const require3 = require('require3');
const mparse = require3('egg-born-mparse').default;

module.exports = ctx => {
  // const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Atom {
    // create
    async create({ atomClass, atomStage, roleIdOwner, item, options, createOptions, user }) {
      options = options || {};
      if (createOptions) {
        options.createOptions = createOptions;
      }
      // atomClass
      atomClass = await ctx.bean.atomClass.get(atomClass);
      const atomClassBase = await ctx.bean.atomClass.atomClass(atomClass);
      // atomSimple
      const atomSimple = Number(Boolean(atomClassBase.simple));
      // item
      item = item || {};
      if (!atomClassBase.itemOnly) {
        item.atomStage = atomStage !== undefined ? atomStage : atomSimple;
        item.roleIdOwner = roleIdOwner;
      }
      // atom bean
      const _moduleInfo = mparse.parseInfo(atomClass.module);
      const beanFullName = `${_moduleInfo.relativeName}.atom.${atomClassBase.bean}`;
      const res = await ctx.meta.util.executeBean({
        beanModule: _moduleInfo.relativeName,
        beanFullName,
        context: { atomClass, item, options, user },
        fn: 'create',
      });
      const { atomId, itemId } = res;
      // save itemId
      if (!atomClassBase.itemOnly) {
        await this._update({
          atom: { id: atomId, itemId },
          user,
        });
      }
      // notify
      if (!atomClassBase.itemOnly) {
        this._notifyDraftsDrafting(null, atomClass);
      }
      // ok
      const key = { atomId, itemId };
      const returnAtom = options.returnAtom;
      if (!returnAtom) return key;
      // read
      item = await this.read({ key, atomClass, user });
      return { key, atom: item };
    }

    async _add({
      atomClass,
      atom: {
        atomStage = 0,
        itemId,
        atomName,
        roleIdOwner = 0,
        atomStatic = 0,
        atomStaticKey = null,
        atomRevision = 0,
        atomLanguage = null,
        atomCategoryId = 0,
        atomTags = null,
        allowComment = 1,
        atomSimple = 0,
      },
      user,
    }) {
      const atomClassId = atomClass.id;
      const res = await this.modelAtom.insert({
        atomStage,
        itemId,
        atomClassId,
        atomName,
        atomStatic,
        atomStaticKey,
        atomRevision,
        atomLanguage,
        atomCategoryId,
        atomTags,
        atomSimple,
        allowComment,
        userIdCreated: user.id,
        userIdUpdated: user.id,
        roleIdOwner,
      });
      return res.insertId;
    }

    async createDelayGetItem({ atomClass, roleIdOwner, item, options, user }) {
      // create
      const { key, atom } = await ctx.bean.atom.create({ atomClass, roleIdOwner, item, options, user });
      // delete
      await ctx.bean.atom.delete({ key, atomClass, user });
      // ok
      return atom;
    }
  }

  return Atom;
};
