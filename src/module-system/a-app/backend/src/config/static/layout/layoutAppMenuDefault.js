module.exports = app => {
  // const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  const content = {
    info: {
      layout: {
        viewSize: {
          small: 'boxGrid9',
          medium: 'boxGrid9',
          large: 'boxGrid9',
        },
      },
    },
    layouts: {
      base: {
        blocks: {},
      },
      boxGrid9: {
        title: 'LayoutBoxGrid9',
        component: {
          module: 'a-baselayout',
          name: 'baseLayoutList',
        },
        providerOptions: {
          providerName: 'all',
          autoInit: true,
        },
        blocks: {
          items: {
            component: {
              module: 'a-app',
              name: 'appListLayoutBlockBoxGrid9Items',
            },
          },
        },
      },
    },
  };
  const layout = {
    atomName: 'Default',
    atomStaticKey: 'layoutAppMenuDefault',
    atomRevision: 2,
    description: '',
    layoutTypeCode: 13,
    content: JSON.stringify(content),
    resourceRoles: 'root',
  };
  return layout;
};
