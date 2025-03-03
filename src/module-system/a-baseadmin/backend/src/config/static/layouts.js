const layoutAtomItemRole = require('./layout/layoutAtomItemRole.js');
const layoutAtomListRole = require('./layout/layoutAtomListRole.js');
const layoutAtomListRoleRight = require('./layout/layoutAtomListRoleRight.js');
const layoutAtomItemUser = require('./layout/layoutAtomItemUser.js');
const layoutAtomListUser = require('./layout/layoutAtomListUser.js');
const layoutAtomListResource = require('./layout/layoutAtomListResource.js');

module.exports = app => {
  const layouts = [
    layoutAtomItemRole(app), //
    layoutAtomListRole(app),
    layoutAtomListRoleRight(app),
    layoutAtomItemUser(app),
    layoutAtomListUser(app),
    layoutAtomListResource(app),
  ];
  return layouts;
};
