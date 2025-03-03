module.exports = app => {
  const schemas = {};
  // roleRight
  schemas.roleRight = {
    type: 'object',
    properties: {
      // AuthorizationObjective
      __groupAuthorizationObjective: {
        ebType: 'group-flatten',
        ebTitle: 'AuthorizationObjective',
      },
      atomClassIdTarget: {
        type: 'object',
        ebType: 'atomClassId',
        ebTitle: 'Atom Class',
        notEmpty: true,
        ebParams: {
          target: '_self',
          check: {
            enableRight: true,
          },
          mapper: {
            module: 'moduleTarget',
            atomClassName: 'atomClassNameTarget',
          },
        },
      },
      action: {
        type: 'number',
        ebType: 'component',
        ebTitle: 'Atom Action',
        ebRender: {
          module: 'a-baseadmin',
          name: 'renderRoleRightAction',
        },
      },
    },
  };
  // role right search
  schemas.roleRightSearch = {
    type: 'object',
    properties: {
      // todo:
    },
  };
  return schemas;
};
