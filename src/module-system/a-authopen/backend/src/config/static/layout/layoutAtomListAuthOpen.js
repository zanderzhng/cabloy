module.exports = app => {
  // const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  const content = {
    layouts: {
      table: {
        blocks: {
          items: {
            columns: [
              {
                dataIndex: 'atomName',
                title: 'Atom Name',
                align: 'left',
                component: {
                  module: 'a-baselayout',
                  name: 'listLayoutTableCellAtomName',
                },
              },
              {
                dataIndex: 'description',
                title: 'Description',
                align: 'left',
              },
              {
                dataIndex: 'userIdCreated',
                title: 'Creator',
                align: 'left',
                component: {
                  module: 'a-baserender',
                  name: 'renderTableCellUserName',
                },
              },
              {
                dataIndex: 'atomCreatedAt',
                title: 'Created Time',
                align: 'left',
              },
              {
                dataIndex: 'atomUpdatedAt',
                title: 'Modification Time',
                align: 'left',
              },
            ],
          },
        },
      },
    },
  };
  const layout = {
    atomName: 'Open Auth',
    atomStaticKey: 'layoutAtomListAuthOpen',
    atomRevision: 1,
    description: '',
    layoutTypeCode: 3,
    content: JSON.stringify(content),
    resourceRoles: 'root',
  };
  return layout;
};
