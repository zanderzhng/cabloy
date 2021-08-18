module.exports = app => {
  const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  return {
    systemRoles: ['root', 'anonymous', 'authenticated', 'template', 'system', 'registered', 'activated', 'superuser', 'organization', 'internal', 'external'],
    atom: {
      stage: {
        draft: 0,
        formal: 1,
        history: 2,
      },
      action: {
        create: 1,
        read: 2,
        write: 3,
        delete: 4,
        clone: 5,
        enable: 6,
        disable: 7,
        // report: 8,
        // layout: 9,

        authorize: 25,

        deleteBulk: 35,
        exportBulk: 36,
        // importBulk: 37,
        // reportBulk: 38,
        layoutBulk: 45,

        save: 51,
        submit: 52,
        history: 53,
        formal: 54,
        draft: 55,
        workflow: 56,
        custom: 100, // custom action start from custom
      },
      actionMeta: {
        create: {
          title: 'Create',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          bulk: true,
          select: false,
          icon: { material: 'add' },
        },
        read: {
          title: 'View',
          actionModule: moduleInfo.relativeName,
          actionPath: '/a/basefront/atom/item?mode=view&atomId={{atomId}}&itemId={{itemId}}',
          enableOnStatic: true,
          enableOnOpened: true,
          icon: { material: 'visibility' },
        },
        write: {
          title: 'Edit',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          enableOnStatic: false,
          enableOnOpened: false,
          icon: { material: 'edit' },
        },
        delete: {
          title: 'Delete',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          enableOnStatic: false,
          enableOnOpened: false,
          icon: { material: 'delete' },
        },
        clone: {
          title: 'Clone',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          enableOnStatic: true,
          enableOnOpened: true,
          icon: { material: 'content_copy' },
        },
        enable: {
          title: 'Enable',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          enableOnStatic: true,
          enableOnOpened: true,
          stage: 'formal',
          icon: { material: 'play_arrow' },
        },
        disable: {
          title: 'Disable',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          enableOnStatic: true,
          enableOnOpened: true,
          stage: 'formal',
          icon: { material: 'stop' },
        },
        authorize: {
          title: 'Authorize',
          actionModule: moduleInfo.relativeName,
          actionPath: '/a/basefront/resource/authorize?atomId={{atomId}}&itemId={{itemId}}',
          enableOnStatic: true,
          enableOnOpened: true,
          stage: 'formal',
          icon: { material: 'groups' },
        },
        deleteBulk: {
          title: 'Delete',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'actionBulk',
          bulk: true,
          select: true,
          icon: { material: 'delete' },
        },
        exportBulk: {
          title: 'Export',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'actionBulk',
          bulk: true,
          select: null,
          icon: { material: 'cloud_download' },
        },
        layoutBulk: {
          title: 'Layout',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'actionBulk',
          bulk: true,
          select: null,
          icon: { material: 'view_list' },
        },
        save: {
          title: 'Save',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          authorize: false,
          icon: { material: 'save' },
        },
        submit: {
          title: 'Submit',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          authorize: false,
          icon: { material: 'done' },
        },
        history: {
          title: 'History',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          authorize: false,
          icon: { material: 'change_history' },
        },
        formal: {
          title: 'Formal',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          authorize: false,
          icon: { material: 'all_inbox' },
        },
        draft: {
          title: 'Draft',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          authorize: false,
          icon: { material: 'content_paste' },
        },
        workflow: {
          title: 'WorkFlow',
          actionModule: moduleInfo.relativeName,
          actionComponent: 'action',
          authorize: false,
          icon: { material: 'account_tree' },
        },
        custom: {
          title: 'Custom',
        },
      },
    },
  };
};
