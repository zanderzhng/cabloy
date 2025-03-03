const constant = require('../../base/constants.js');

module.exports = function (app) {
  return {
    initialize() {
      // checkAppReady
      app.meta.checkAppReady = async function () {
        return new Promise((resolve, reject) => {
          // check once
          if (app.meta.__versionReady) {
            resolve();
          }
          if (app.meta.__versionReadyError) {
            reject(app.meta.__versionReadyError);
          }
          // listen
          app.on(constant.event.appReady, () => {
            resolve();
          });
          app.on(constant.event.appReadyError, err => {
            reject(err);
          });
        });
      };
    },
    async execute() {
      try {
        // version ready
        await _versionReady(app);
        // record
        app.meta.__versionReady = true;
        // event: appReady
        app.emit(constant.event.appReady);
        // event to agent
        app.meta.messenger.callAgent({
          name: 'appReady',
          data: { pid: process.pid },
        });
      } catch (err) {
        // record
        app.meta.__versionReadyError = err;
        // event: appReadyError
        app.emit(constant.event.appReadyError, err);
        // throw exception
        throw err;
      }
    },
  };
};

async function _versionReady(app) {
  // clear keys
  if (app.meta.isTest) {
    await _clearRedisKeys(app.redis.get('limiter'), `b_${app.name}:*`);
    await _clearRedisKeys(app.redis.get('queue'), `bull_${app.name}:*`);
    // broadcast channel has subscribed
    // await _clearRedisKeys(app.redis.get('broadcast'), `broadcast_${app.name}:*`);
    await _clearRedisKeys(app.redis.get('cache'), `cache_${app.name}:*`);
    await _clearRedisKeys(app.redis.get('io'), `io_${app.name}:*`);
    await _clearRedisKeys(app.redis.get('auth'), `auth_${app.name}:*`);
    await _clearRedisKeys(app.redis.get('summer'), `summer_${app.name}:*`);
    // redlock
    for (const clientName of app.config.queue.redlock.clients) {
      await _clearRedisKeys(app.redis.get(clientName), `redlock_${app.name}:*`);
    }
  }

  // run startups: not after
  for (const startup of app.meta.startupsArray) {
    if (!startup.config.disable && !startup.config.instance && startup.config.after !== true) {
      console.log(`---- startup: ${startup.key}, pid: ${process.pid}`);
      await app.meta._runStartup({ module: startup.module, name: startup.name });
    }
  }

  // appReady
  app.meta.appReady = true;
  app.meta.appReadyInstances = {};

  // run startups: after
  for (const startup of app.meta.startupsArray) {
    if (!startup.config.disable && !startup.config.instance && startup.config.after === true) {
      console.log(`---- startup: ${startup.key}, pid: ${process.pid}`);
      await app.meta._runStartup({ module: startup.module, name: startup.name });
    }
  }

  // version init
  if (app.meta.isTest || app.meta.isLocal) {
    // subdomain
    const subdomain = '';
    // init
    await app.meta.util.executeBean({
      subdomain,
      beanModule: 'a-instance',
      beanFullName: 'instance',
      context: { subdomain },
      fn: 'instanceStartup',
    });
  }

  // version test
  if (app.meta.isTest) {
    // subdomain
    const subdomain = '';
    // test
    await app.meta.util.executeBean({
      subdomain,
      beanModule: 'a-version',
      beanFullName: 'a-version.local.version',
      context: subdomain,
      fn: '__instanceTest',
    });
  }
}

async function _clearRedisKeys(redis, pattern) {
  if (!redis) return;
  const keyPrefix = redis.options.keyPrefix;
  const keys = await redis.keys(pattern);
  const keysDel = [];
  for (const fullKey of keys) {
    const key = keyPrefix ? fullKey.substr(keyPrefix.length) : fullKey;
    keysDel.push(key);
  }
  if (keysDel.length > 0) {
    await redis.del(keysDel);
  }
}
