const actions = {
  viewAtom: {
    basic: true,
    title: 'View',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
    icon: { material: 'visibility' },
  },
  handleTask: {
    basic: true,
    title: 'Handle',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
    icon: { material: 'play_arrow' },
  },
  cancelFlow: {
    basic: true,
    title: 'Cancel Flow',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
    icon: { material: 'stop' },
  },
  assigneesConfirmation: {
    basic: true,
    title: 'Confirmation',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
    icon: { material: 'group' },
  },
  recall: {
    basic: true,
    title: 'Recall',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
    icon: { material: 'undo' },
  },
  appendHandleRemark: {
    basic: false,
    title: 'AppendHandleRemark',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
    icon: { material: 'info' },
  },
  forward: {
    basic: false,
    title: 'TaskActionTitleForward',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
  },
  forwardRecall: {
    basic: false,
    title: 'TaskActionTitleForwardRecall',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
  },
  substitute: {
    basic: false,
    title: 'TaskActionTitleSubstitute',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
  },
  substituteRecall: {
    basic: false,
    title: 'TaskActionTitleSubstituteRecall',
    actionModule: 'a-flowtask',
    actionComponent: 'action',
  },
};
export default actions;
