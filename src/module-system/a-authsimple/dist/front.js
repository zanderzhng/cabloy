module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_vue_vue_type_style_index_0_id_c55bbdf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_vue_vue_type_style_index_0_id_c55bbdf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_vue_vue_type_style_index_0_id_c55bbdf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_vue_vue_type_style_index_0_id_c55bbdf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function load(name) {
  return __webpack_require__(9)("./" + name + '.vue').default;
}

/* harmony default export */ __webpack_exports__["default"] = ([{ path: 'signup', component: load('signup') }, { path: 'reset', component: load('reset') }]);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./reset.vue": 20,
	"./signup.vue": 19
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_vue_vue_type_style_index_0_id_2409a37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_vue_vue_type_style_index_0_id_2409a37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_vue_vue_type_style_index_0_id_2409a37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_vue_vue_type_style_index_0_id_2409a37a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_ea0d59da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_ea0d59da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_ea0d59da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_ea0d59da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = (function (Vue) {

  return {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
  };
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  test: false
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'zh-cn': __webpack_require__(17).default
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'Find password': '找回密码',
  'Sign up': '注册',
  'Sign in': '登录',
  'Your username/mobile/email': '您的用户名/手机号/邮箱',
  'Your password': '您的密码',
  'Remember me': '记住我',
  Username: '用户名',
  Realname: '真实姓名',
  Email: '电子邮箱',
  Mobile: '手机号',
  Password: '密码',
  'Password again': '重复密码',
  'Reset password': '重置密码',
  'Old password': '旧密码',
  'New password': '新密码',
  'New password again': '重复新密码',
  OK: '确定',
  'Test Account': '测试账号'
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/components/signin.vue?vue&type=template&id=c55bbdf2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('f7-card',[_c('f7-card-content',[_c('eb-validate',{ref:"validate",attrs:{"onPerform":_vm.onPerformValidate}},[_c('f7-list',{attrs:{"form":"","no-hairlines-md":""}},[_c('f7-list-item',[_c('f7-icon',{attrs:{"slot":"media","material":"person_outline"},slot:"media"}),_vm._v(" "),_c('f7-label',{attrs:{"floating":""}},[_vm._v(_vm._s(_vm.$text('Your username/mobile/email')))]),_vm._v(" "),_c('eb-input',{attrs:{"type":"text","placeholder":_vm.$text('Your username/mobile/email'),"clear-button":"","dataPath":"auth"},model:{value:(_vm.auth),callback:function ($$v) {_vm.auth=$$v},expression:"auth"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-icon',{attrs:{"slot":"media","material":"lock_outline"},slot:"media"}),_vm._v(" "),_c('f7-label',{attrs:{"floating":""}},[_vm._v(_vm._s(_vm.$text('Your password')))]),_vm._v(" "),_c('eb-input',{attrs:{"type":"password","placeholder":_vm.$text('Your password'),"clear-button":"","dataPath":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-icon',{attrs:{"slot":"media"},slot:"media"}),_vm._v(" "),_c('span',{staticClass:"text-color-gray"},[_vm._v(_vm._s(_vm.$text('Remember me')))]),_vm._v(" "),_c('eb-toggle',{attrs:{"dataPath":"rememberMe"},model:{value:(_vm.rememberMe),callback:function ($$v) {_vm.rememberMe=$$v},expression:"rememberMe"}})],1)],1)],1),_vm._v(" "),_c('f7-list',[_c('eb-list-button',{attrs:{"onPerform":_vm.signIn}},[_vm._v(_vm._s(_vm.$text('Sign in')))])],1)],1),_vm._v(" "),_c('f7-card-footer',[_c('div'),_vm._v(" "),_c('eb-link',{staticClass:"text-smaller",attrs:{"eb-href":"/a/authsimple/signup","eb-target":"_self"}},[_vm._v(_vm._s(_vm.$text('Sign up')))])],1)],1),_vm._v(" "),(_vm.$config.test)?_c('f7-card',[_c('f7-card-header',[_vm._v(_vm._s(_vm.$text('Test Account')))]),_vm._v(" "),_c('f7-card-content',[_vm._v("demo@cabloy.org : 123456")])],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./front/src/components/signin.vue?vue&type=template&id=c55bbdf2&scoped=true&

// CONCATENATED MODULE: /Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/babel-loader/lib!/Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/components/signin.vue?vue&type=script&lang=js&


/* harmony default export */ var signinvue_type_script_lang_js_ = ({
  meta: {
    global: false
  },
  data: function data() {
    return {
      auth: null,
      password: null,
      rememberMe: false
    };
  },

  methods: {
    onPerformValidate: function onPerformValidate() {
      var _this = this;

      return this.$api.post('passport/a-authsimple/authsimple', {
        auth: this.auth,
        password: this.password,
        rememberMe: this.rememberMe
      }).then(function () {
        _this.$meta.vueApp.reload({ echo: true });
      });
    },
    signIn: function signIn() {
      return this.$refs.validate.perform();
    }
  }
});
// CONCATENATED MODULE: ./front/src/components/signin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_signinvue_type_script_lang_js_ = (signinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./front/src/components/signin.vue?vue&type=style&index=0&id=c55bbdf2&scoped=true&lang=css&
var signinvue_type_style_index_0_id_c55bbdf2_scoped_true_lang_css_ = __webpack_require__(4);

// EXTERNAL MODULE: /Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./front/src/components/signin.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_signinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c55bbdf2",
  null
  
)

component.options.__file = "signin.vue"
/* harmony default export */ var signin = (component.exports);
// EXTERNAL MODULE: ./front/src/assets/css/module.css
var css_module = __webpack_require__(6);

// CONCATENATED MODULE: ./front/src/main.js



var Vue = void 0;

function install(_Vue, cb) {
  if (Vue) return console.error('already installed.');

  Vue = _Vue;

  return cb({
    routes: __webpack_require__(8).default,
    store: __webpack_require__(14).default(Vue),
    config: __webpack_require__(15).default,
    locales: __webpack_require__(16).default,
    components: {
      signin: signin
    }
  });
}

/* harmony default export */ var main = __webpack_exports__["default"] = ({
  install: install
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/signup.vue?vue&type=template&id=ea0d59da&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('eb-page',[_c('eb-navbar',{attrs:{"title":_vm.$text('Sign up'),"eb-back-link":"Back"}}),_vm._v(" "),_c('f7-block',[_c('eb-validate',{ref:"validate",attrs:{"auto":"","data":_vm.data,"params":{validator: 'signup'},"onPerform":_vm.onPerformValidate}}),_vm._v(" "),_c('eb-button',{attrs:{"onPerform":_vm.signUp}},[_vm._v(_vm._s(_vm.$text('Sign up')))])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./front/src/pages/signup.vue?vue&type=template&id=ea0d59da&scoped=true&

// CONCATENATED MODULE: /Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/babel-loader/lib!/Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/signup.vue?vue&type=script&lang=js&


/* harmony default export */ var signupvue_type_script_lang_js_ = ({
  meta: {
    global: false
  },
  data: function data() {
    return {
      data: {
        userName: null,
        realName: null,
        email: null,
        mobile: null,
        password: null,
        passwordAgain: null
      }
    };
  },

  methods: {
    onPerformValidate: function onPerformValidate() {
      var _this = this;

      return this.$api.post('auth/signup', {
        data: this.data
      }).then(function () {
        return _this.$api.post('passport/a-authsimple/authsimple', {
          auth: _this.data.email || _this.data.mobile,
          password: _this.data.password,
          rememberMe: false
        }).then(function () {
          _this.$meta.vueApp.reload({ echo: true });
        });
      });
    },
    signUp: function signUp() {
      return this.$refs.validate.perform();
    }
  }
});
// CONCATENATED MODULE: ./front/src/pages/signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signupvue_type_script_lang_js_ = (signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./front/src/pages/signup.vue?vue&type=style&index=0&id=ea0d59da&scoped=true&lang=css&
var signupvue_type_style_index_0_id_ea0d59da_scoped_true_lang_css_ = __webpack_require__(12);

// EXTERNAL MODULE: /Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./front/src/pages/signup.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ea0d59da",
  null
  
)

component.options.__file = "signup.vue"
/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/reset.vue?vue&type=template&id=2409a37a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('eb-page',[_c('eb-navbar',{attrs:{"title":_vm.$text('Reset password'),"eb-back-link":"Back"}}),_vm._v(" "),_c('f7-block',[_c('eb-validate',{ref:"validate",attrs:{"auto":"","data":_vm.data,"params":{validator: 'reset'},"onPerform":_vm.onPerformValidate}}),_vm._v(" "),(!_vm.$config.test)?_c('eb-button',{attrs:{"onPerform":_vm.onPerformOk}},[_vm._v(_vm._s(_vm.$text('OK')))]):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./front/src/pages/reset.vue?vue&type=template&id=2409a37a&scoped=true&

// CONCATENATED MODULE: /Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/babel-loader/lib!/Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib??vue-loader-options!./front/src/pages/reset.vue?vue&type=script&lang=js&


/* harmony default export */ var resetvue_type_script_lang_js_ = ({
  meta: {
    global: false
  },
  data: function data() {
    return {
      data: {
        passwordOld: null,
        passwordNew: null,
        passwordNewAgain: null
      }
    };
  },

  methods: {
    onPerformValidate: function onPerformValidate() {
      var _this = this;

      return this.$api.post('auth/reset', {
        data: this.data
      }).then(function () {
        _this.$f7router.back();
      });
    },
    onPerformOk: function onPerformOk() {
      return this.$refs.validate.perform();
    }
  }
});
// CONCATENATED MODULE: ./front/src/pages/reset.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_resetvue_type_script_lang_js_ = (resetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./front/src/pages/reset.vue?vue&type=style&index=0&id=2409a37a&scoped=true&lang=css&
var resetvue_type_style_index_0_id_2409a37a_scoped_true_lang_css_ = __webpack_require__(10);

// EXTERNAL MODULE: /Users/wind/Documents/data/cabloy/egg-born-demo/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./front/src/pages/reset.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_resetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2409a37a",
  null
  
)

component.options.__file = "reset.vue"
/* harmony default export */ var pages_reset = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);
//# sourceMappingURL=front.js.map