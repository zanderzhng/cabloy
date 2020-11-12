const { app, mockUrl, assert } = require('egg-born-mock')(__dirname);

describe.only('flow.set01_atomAssigneesConfirmationReject', () => {

  // atomClass info
  const atomClassModule = 'test-flow';
  const atomClassName = 'purchaseOrder';

  let flowId;
  let taskAssignees;

  it.only('atomAssigneesConfirmation', async () => {
    app.mockSession({});

    // login as root
    await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
      data: {
        auth: 'root',
        password: '123456',
      },
    });

    // create
    let result = await app.httpRequest().post(mockUrl('/a/base/atom/create')).send({
      atomClass: { module: atomClassModule, atomClassName, atomClassIdParent: 0 },
    });
    assert(result.body.code === 0);
    const keyDraft = result.body.data;

    // submit
    result = await app.httpRequest().post(mockUrl('/a/base/atom/writeSubmit')).send({
      key: keyDraft,
      item: {
        atomName: 'atomAssigneesConfirmationReject-test',
        flowDefKey: 'set01_atomAssigneesConfirmation',
      },
    });
    assert(result.body.code === 0);
    // hold
    flowId = result.body.data.flow.id;

    // select task
    result = await app.httpRequest().post(mockUrl('/a/flownode/task/select')).send({
      options: {
        where: {
          'a.flowId': flowId,
          'a.flowTaskStatus': 0,
        },
        history: 0,
      },
    });
    assert(result.body.code === 0);
    const flowTask = result.body.data.list[0];
    assert(!!flowTask);

    // assigneesConfirmation
    result = await app.httpRequest().post(mockUrl('/a/flownode/task/assigneesConfirmation')).send({
      flowTaskId: flowTask.id,
      handle: {
        status: 2,
      },
    });
    assert(result.body.code === 0);

  });

  it('atomAssigneesConfirmation_claim_bidding', async () => {
    app.mockSession({});

    // choose the first assignee
    const taskAssignee = taskAssignees.users[0];

    // login as root
    await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
      data: {
        auth: taskAssignee.userName,
        password: '123456',
      },
    });

    // select task
    let result = await app.httpRequest().post(mockUrl('/a/flownode/task/select')).send({
      options: {
        where: {
          'a.flowId': flowId,
          'a.flowTaskStatus': 0,
        },
        history: 0,
      },
    });
    assert(result.body.code === 0);
    const flowTask = result.body.data.list[0];
    assert(!!flowTask);

    // claim
    result = await app.httpRequest().post(mockUrl('/a/flownode/task/claim')).send({
      flowTaskId: flowTask.id,
    });
    assert(result.body.code === 0);

    // complete
    result = await app.httpRequest().post(mockUrl('/a/flownode/task/complete')).send({
      flowTaskId: flowTask.id,
      handle: {
        status: 1,
        remark: 'Nice Work!',
      },
      formAtom: {
        atomName: 'assigneesConfirmation-test!!',
        description: 'modified by userTask',
        flowDefKey: 'would not been modified',
      },
    });
    assert(result.body.code === 0);

  });

  it('atomAssigneesConfirmation_clear', async () => {
    app.mockSession({});

    // login as root
    await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
      data: {
        auth: 'root',
        password: '123456',
      },
    });

    // select
    let result = await app.httpRequest().post(mockUrl('/a/base/atom/select')).send({
      atomClass: { module: atomClassModule, atomClassName, atomClassIdParent: 0 },
      options: {
        where: {
          atomFlowId: flowId,
        },
        stage: 'archive',
      },
    });
    assert(result.body.code === 0);
    const archive = result.body.data.list[0];
    const keyArchive = { atomId: archive.atomId };

    // delete
    result = await app.httpRequest().post(mockUrl('/a/base/atom/delete')).send({
      key: keyArchive,
    });
    assert(result.body.code === 0);
  });

});
