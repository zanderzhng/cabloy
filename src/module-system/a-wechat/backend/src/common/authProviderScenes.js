const _scenes = {
  wechat: {
    scene: 'wechat', authProvider: 'wechat', title: 'Wechat Public', client: 'wechat', configKey: 'public', scope: 'snsapi_userinfo',
  },
  wechatweb: {
    scene: 'wechatweb', authProvider: 'wechatweb', title: 'Wechat Web', client: 'wechatweb', configKey: 'web', scope: 'snsapi_login',
  },
  wechatmini: {
    scene: 'wechatmini', authProvider: 'wechatmini', title: 'Wechat Miniprogram', scope: 'snsapi_userinfo',
  },
};

function _upperCaseFirstChar(str) {
  if (!str) return '';
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

module.exports = {
  scenes: _scenes,
  getScene(scene) {
    if (scene.indexOf('wechatmini') > -1) {
      const sceneShort = scene.substr('wechatmini'.length);
      // wechatmini
      const base = _scenes.wechatmini;
      return {
        scene,
        authProvider: scene,
        title: `${base.title} - ${_upperCaseFirstChar(sceneShort)}`,
      };
    }
    // else
    return _scenes[scene];
  },
};
