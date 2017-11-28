const { assert, app, mock, mm } = require('egg-mock/bootstrap');

before(function(done) {
  app.messenger.once('egg-ready', () => {
    app.meta.runSchedule('egg-born-module-a-version:versionCheck').then(done);
  });
  // app.on(app.meta.constants['egg-born-module-a-version'].event.checkReady, done);
});

module.exports = function(dirname) {

  return {
    assert,
    app,
    mock,
    mm,
    mockUrl(url) {
      const prefix = app.meta.mockUtil.parseUrlFromPackage(dirname);
      return url ? `${prefix}/${url}` : `${prefix}/`;
    },
  };

};
