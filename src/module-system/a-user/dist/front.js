window["a-user"]=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:l}}n.d(e,"a",function(){return r})},function(t,e){t.exports=window.Vue},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("430cac1a",r,!0,{})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return p});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},f=null,d="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,i){l=n,f=i||{};var a=r(t,e);return v(a),function(e){for(var n=[],i=0;i<a.length;i++){var s=a[i];(u=o[s.id]).refs--,n.push(u)}e?v(a=r(t,e)):a=[];for(i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete o[u.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(g(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(m){var i=u++;r=s||(s=h()),e=_.bind(null,r,i,!1),n=_.bind(null,r,i,!0)}else r=h(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;r&&t.setAttribute("media",r);f.ssrId&&t.setAttribute(d,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var b,A=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function _(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=A(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e,n){"use strict";n.r(e);var r;n(6);e.default={install:function(t,e){return r?console.error("already installed."):(r=t,e({routes:n(8).default,store:n(13).default(r),config:n(14).default,locales:n(15).default,components:n(17).default}))}}},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("33072546",r,!0,{})},function(t,e,n){(t.exports=n(3)(!0)).push([t.i,"\n","",{version:3,sources:[],names:[],mappings:"",file:"module.css"}])},function(t,e,n){"use strict";function r(t){return n(9)("./".concat(t,".vue")).default}n.r(e),e.default=[{path:"user/mine",component:r("user/mine")},{path:"user/edit",component:r("user/edit")},{path:"user/agent",component:r("user/agent")},{path:"user/functions",component:r("user/functions")},{path:"user/account",component:r("user/account")},{path:"user/authentications",component:r("user/authentications")},{path:"my/atoms",component:r("my/atoms")},{path:"public/profile",component:r("public/profile")}]},function(t,e,n){var r={"./my/atoms.vue":10,"./public/profile.vue":22,"./user/account.vue":19,"./user/agent.vue":24,"./user/authentications.vue":23,"./user/edit.vue":18,"./user/functions.vue":21,"./user/mine.vue":20};function i(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=9},function(t,e,n){"use strict";n.r(e);var r=n(0),i=Object(r.a)({},void 0,void 0,!1,null,null,null);e.default=i.exports},function(t,e,n){"use strict";var r=n(2);n.n(r).a},function(t,e,n){(t.exports=n(3)(!0)).push([t.i,".me[data-v-7d330b25] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background-color: #F4F4F4;\n  color: dimgray;\n  padding-left: 24px;\n}\n.me div[data-v-7d330b25] {\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n}\n.me .name[data-v-7d330b25] {\n  font-size: 20px;\n}\n.me .status[data-v-7d330b25] {\n  font-size: 16px;\n}\n.me .login[data-v-7d330b25] {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n}\n","",{version:3,sources:["/Users/wind/Documents/data/cabloy/egg-born-demo/src/module/a-user/front/src/pages/user/mine.vue?vue&type=style&index=0&id=7d330b25&lang=less&scoped=true&","mine.vue"],names:[],mappings:"AAyFA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,yBAAA;EACA,cAAA;EACA,kBAAA;ACxFF;ADiFA;EAUI,aAAA;EACA,mBAAA;EACA,mBAAA;ACxFJ;AD4EA;EAgBI,eAAA;ACzFJ;ADyEA;EAoBI,eAAA;AC1FJ;ADsEA;EAwBI,kBAAA;EACA,YAAA;EACA,WAAA;AC3FJ",file:"mine.vue?vue&type=style&index=0&id=7d330b25&lang=less&scoped=true&",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.me {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background-color: #F4F4F4;\n  color: dimgray;\n  padding-left: 24px;\n\n  div {\n    display: flex;\n    align-items: center;\n    padding-right: 12px;\n  }\n\n  .name {\n    font-size: 20px;\n  }\n\n  .status {\n    font-size: 16px;\n  }\n\n  .login {\n    position: absolute;\n    bottom: 12px;\n    right: 12px;\n  }\n}\n\n",".me {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background-color: #F4F4F4;\n  color: dimgray;\n  padding-left: 24px;\n}\n.me div {\n  display: flex;\n  align-items: center;\n  padding-right: 12px;\n}\n.me .name {\n  font-size: 20px;\n}\n.me .status {\n  font-size: 16px;\n}\n.me .login {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n}\n"]}])},function(t,e,n){"use strict";n.r(e),e.default=function(t){return{state:{},getters:{},mutations:{},actions:{}}}},function(t,e,n){"use strict";n.r(e),e.default={agent:{disabled:!1}}},function(t,e,n){"use strict";n.r(e),e.default={"zh-cn":n(16).default}},function(t,e,n){"use strict";n.r(e),e.default={"Not LoggedIn":"未登录","Sign In":"现在登录","Log Out":"退出登录",Info:"信息",Settings:"设置",Username:"用户名",Realname:"真实姓名",Email:"电子邮箱",Mobile:"手机号",Motto:"箴言",Locale:"本地化",Agent:"代理","Agent by":"被代理","Specify agent":"指定代理","No agents":"没有代理",Remove:"移除","Please specify the mobile":"请指定手机号",Functions:"功能",Account:"账户","Change password":"修改密码",Change:"修改",Confirm:"确认",Verify:"验证",Authentications:"认证",Enabled:"已启用",Enable:"启用",Disable:"禁用"}},function(t,e,n){"use strict";n.r(e),e.default={}},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o={components:{},data:function(){return{user:i.a.prototype.$utils.extend({},this.$store.state.auth.user.agent),configAccount:null}},computed:{emailConfirmButtonText:function(){return!this.user.email||this.user.emailConfirmed?this.$text("Change"):this.$text("Confirm")},mobileVerifyButtonText:function(){return!this.user.mobile||this.user.mobileVerified?this.$text("Change"):this.$text("Verify")}},created:function(){var t=this.$meta.config.modules["a-base"];this.configAccount=t.account},methods:{onFormSubmit:function(){this.$refs.buttonSubmit.onClick()},onPerformSave:function(t){return this.$refs.validate.perform(t)},onPerformValidate:function(t){var e=this;return this.$api.post("user/save",{data:this.user}).then(function(){e.$store.state.auth.user.agent=e.user,e.$f7router.back()})}}},a=n(0),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.$text("Info"),"eb-back-link":"Back"}},[n("f7-nav-right",[n("eb-link",{ref:"buttonSubmit",attrs:{iconMaterial:"save",onPerform:t.onPerformSave}})],1)],1),t._v(" "),n("eb-validate",{ref:"validate",attrs:{auto:!1,data:t.user,params:{module:"a-base",validator:"user"},onPerform:t.onPerformValidate}},[n("eb-list",{attrs:{form:"","no-hairlines-md":""},on:{submit:function(e){return e.preventDefault(),t.onFormSubmit(e)}}},[n("eb-list-item-validate",{attrs:{dataKey:"userName"}}),t._v(" "),n("eb-list-item-validate",{attrs:{dataKey:"realName"}}),t._v(" "),n("f7-list-item",{attrs:{divider:""}}),t._v(" "),n("eb-list-item",{attrs:{title:t.$text("Email")}},[n("div",{attrs:{slot:"after"},slot:"after"},[n("span",[t._v(t._s(t.user.email))]),t._v(" "),t.configAccount.url.emailConfirm?n("eb-link",{attrs:{"eb-href":t.configAccount.url.emailConfirm}},[t._v("\n            "+t._s(t.emailConfirmButtonText)+"\n          ")]):t._e()],1)]),t._v(" "),n("eb-list-item",{attrs:{title:t.$text("Mobile")}},[n("div",{attrs:{slot:"after"},slot:"after"},[n("span",[t._v(t._s(t.user.mobile))]),t._v(" "),t.configAccount.url.mobileVerify?n("eb-link",{attrs:{"eb-href":t.configAccount.url.mobileVerify}},[t._v("\n            "+t._s(t.mobileVerifyButtonText)+"\n          ")]):t._e()],1)]),t._v(" "),n("f7-list-item",{attrs:{divider:""}}),t._v(" "),n("eb-list-item-validate",{attrs:{dataKey:"motto"}}),t._v(" "),n("eb-list-item-validate",{attrs:{dataKey:"locale"}})],1)],1)],1)},[],!1,null,"ea3aee88",null);e.default=s.exports},function(t,e,n){"use strict";n.r(e);var r={data:function(){return{configAccount:null}},created:function(){var t=this.$meta.config.modules["a-base"];this.configAccount=t.account},methods:{}},i=n(0),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.$text("Account"),"eb-back-link":"Back"}}),t._v(" "),n("f7-list",[n("eb-list-item",{attrs:{title:t.$text("Info"),link:"#","eb-href":"user/edit"}}),t._v(" "),t.configAccount.url.passwordChange?n("eb-list-item",{attrs:{link:"#",title:t.$text("Change password"),"eb-href":t.configAccount.url.passwordChange}}):t._e(),t._v(" "),n("f7-list-item",{attrs:{divider:""}}),t._v(" "),n("eb-list-item",{attrs:{title:t.$text("Authentications"),link:"#","eb-href":"user/authentications"}}),t._v(" "),t.$config.agent.disabled?t._e():[n("f7-list-item",{attrs:{divider:""}}),t._v(" "),n("eb-list-item",{attrs:{title:t.$text("Agent"),link:"#","eb-href":"user/agent"}})]],2)],1)},[],!1,null,null,null);e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r={components:{},data:function(){return{}},computed:{loggedIn:function(){return this.$store.state.auth.loggedIn},user:function(){return this.$store.state.auth.user},userName:function(){var t=this.user.op.userName;return this.user.op.id!==this.user.agent.id&&(t="".concat(t,"(").concat(this.$text("Agent"),")")),t},userAvatar:function(){var t=this.user.op.avatar;return t||(t=this.$meta.config.modules["a-base"].user.avatar.default),this.$meta.util.combineImageUrl(t,48)}},created:function(){},methods:{onPerformLogin:function(){this.$meta.vueLayout.openLogin()},onPerformLogout:function(){var t=this;this.$view.dialog.confirm().then(function(){return t.$api.post("/a/base/auth/logout").then(function(){t.$meta.vueApp.reload({echo:!0})})})},onClickAvatar:function(){var t=this;this.user.agent.anonymous||(this.user.op.id,this.user.agent.id),this.$view.navigate("/a/file/file/upload",{context:{params:{mode:1},callback:function(e,n){if(200===e)return t.$api.post("user/saveAvatar",{data:{avatar:n.downloadUrl}}).then(function(){t.$store.state.auth.user.agent.avatar=n.downloadUrl,t.$store.state.auth.user.op.avatar=n.downloadUrl})}}})}}},i=(n(11),n(0)),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.$text("Mine"),"eb-back-link":"Back"}}),t._v(" "),n("div",{staticClass:"me"},[n("div",[n("img",{staticClass:"avatar avatar48",staticStyle:{cursor:"pointer"},attrs:{src:t.userAvatar},on:{click:t.onClickAvatar}})]),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(t.userName))]),t._v(" "),t.loggedIn?t._e():n("div",{staticClass:"status"},[t._v(t._s(t.$text("Not LoggedIn")))]),t._v(" "),n("div",{staticClass:"login"},[t.loggedIn?t._e():n("eb-link",{attrs:{onPerform:t.onPerformLogin}},[t._v(t._s(t.$text("Sign In")))]),t._v(" "),t.loggedIn?n("eb-link",{attrs:{onPerform:t.onPerformLogout}},[t._v(t._s(t.$text("Log Out")))]):t._e()],1)]),t._v(" "),n("f7-list",[t.user.agent.anonymous?t._e():n("eb-list-item",{attrs:{title:t.$text("Account"),link:"#","eb-href":"user/account"}}),t._v(" "),n("eb-list-item",{attrs:{title:t.$text("Functions"),link:"#","eb-href":"user/functions"}}),t._v(" "),t.user.agent.anonymous?t._e():n("eb-list-item",{attrs:{title:t.$text("Settings"),link:"#","eb-href":"/a/settings/user/list"}})],1)],1)},[],!1,null,"7d330b25",null);e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=n(1),i={mixins:[n.n(r).a.prototype.$meta.module.get("a-base").options.components.ebModules],data:function(){return{items:null}},computed:{itemGroups:function(){return this.modulesAll?Object.keys(this.items):[]}},created:function(){var t=this;return this.$api.post("user/functions").then(function(e){t.items=e})},methods:{getGroupFunctions:function(t){return Object.values(this.items[t])},onItemClick:function(t,e){return this.$meta.util.performAction({ctx:this,action:e,item:e})}}},o=n(0),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.$text("Functions"),"eb-back-link":"Back"}}),t._v(" "),t.items?n("f7-list",t._l(t.itemGroups,function(e){return n("f7-list-group",{key:e},[n("f7-list-item",{attrs:{title:t.getModule(e).titleLocale,"group-title":""}}),t._v(" "),t._l(t.getGroupFunctions(e),function(e){return n("eb-list-item",{key:e.name,attrs:{link:"#",context:e,onPerform:t.onItemClick,title:e.titleLocale}})})],2)}),1):t._e()],1)},[],!1,null,null,null);e.default=a.exports},function(t,e,n){"use strict";n.r(e);n(1);var r={data:function(){return{}},created:function(){},methods:{}},i=n(0),o=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("eb-page")},[],!1,null,"800ca444",null);e.default=o.exports},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o={mixins:[i.a.prototype.$meta.module.get("a-base").options.components.ebModules],data:function(){return{items:null}},computed:{ready:function(){return this.modulesAll&&this.items},countEnabled:function(){return this.items.filter(function(t){return t.authId}).length}},created:function(){var t=this;return this.$api.post("user/authentications").then(function(e){t.items=e})},methods:{onPerformDisable:function(t,e){var n=this;return this.$view.dialog.confirm().then(function(){return n.$api.post("user/authenticationDisable",{authId:e.authId}).then(function(){var t=n.items.findIndex(function(t){return t.providerId===e.providerId});return e.authId=null,i.a.set(n.items,t,e),!0})})},onPerformEnable:function(t,e){var n=this;return this.$view.dialog.confirm().then(function(){var t=n.getModule(e.module).info,r="/api/".concat(t.url,"/passport/").concat(t.relativeName,"/").concat(e.providerName,"?state=associate");n.$meta.vueApp.toLogin({url:r,hash:"/a/user/user/authentications"})})}}},a=n(0),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.$text("Authentications"),"eb-back-link":"Back"}}),t._v(" "),t.ready?n("f7-list",t._l(t.items,function(e){return n("eb-list-item",{key:e.providerId,attrs:{title:e.meta.titleLocale}},[n("div",{attrs:{slot:"after"},slot:"after"},[e.authId?n("f7-badge",[t._v(t._s(t.$text("Enabled")))]):t._e(),t._v(" "),e.authId?t._e():n("eb-link",{attrs:{context:e,onPerform:t.onPerformEnable}},[t._v(t._s(t.$text("Enable")))]),t._v(" "),e.authId&&t.countEnabled>1?n("eb-link",{attrs:{context:e,onPerform:t.onPerformDisable}},[t._v(t._s(t.$text("Disable")))]):t._e()],1)])}),1):t._e()],1)},[],!1,null,null,null);e.default=s.exports},function(t,e,n){"use strict";n.r(e);n(1);var r={components:{},data:function(){return{user:this.$store.state.auth.user,agent:null,agentsBy:null}},created:function(){var t=this;this.$api.post("user/agent").then(function(e){t.agent=e}),this.$api.post("user/agentsBy").then(function(e){t.agentsBy=e})},methods:{onSelectUser:function(){var t=this;this.$view.dialog.prompt(this.$text("Please specify the mobile")).then(function(e){e&&t.$api.post("user/userByMobile",{mobile:1}).then(function(n){n?t.$view.dialog.confirm("".concat(e,"<br>").concat(n.userName)).then(function(){t.$api.post("user/addAgent",{userIdAgent:n.id}).then(function(){t.agent=n})}):t.$view.dialog.alert(t.$text("Not found"))})})},onPerformRemoveAgent:function(t){var e=this;return this.$view.dialog.confirm().then(function(){return e.$api.post("user/removeAgent",{userIdAgent:e.agent.id}).then(function(){e.agent=null})})},onPerformSwitch:function(t,e){var n=this;return this.$view.dialog.confirm().then(function(){return n.$api.post("user/switchAgent",{userIdAgent:e.id}).then(function(){n.$meta.vueApp.reload({echo:!0})})})},onPerformSwitchOff:function(t,e){var n=this;return this.$view.dialog.confirm().then(function(){return n.$api.post("user/switchOffAgent").then(function(){n.$meta.vueApp.reload({echo:!0})})})}}},i=n(0),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.$text("Agent"),"eb-back-link":"Back"}}),t._v(" "),n("f7-list",[n("eb-list-item",{attrs:{title:t.$text("Agent"),"group-title":""}}),t._v(" "),t.agentsBy&&0!==t.agentsBy.length?t._e():n("eb-list-item",{attrs:{title:t.$text("No agents")}}),t._v(" "),t.agentsBy&&t.agentsBy.length>0?t._l(t.agentsBy,function(e){return n("eb-list-item",{key:e.id,attrs:{radio:"",disabled:"",checked:t.user.op.id===e.id,title:e.userName}},[n("div",{attrs:{slot:"after"},slot:"after"},[t.user.op.id===e.id?n("eb-link",{attrs:{context:e,onPerform:t.onPerformSwitchOff}},[t._v(t._s(t.$text("Switch off")))]):n("eb-link",{attrs:{context:e,onPerform:t.onPerformSwitch}},[t._v(t._s(t.$text("Switch")))])],1)])}):t._e(),t._v(" "),n("eb-list-item",{attrs:{title:t.$text("Agent by"),"group-title":""}}),t._v(" "),t.agent?n("eb-list-item",{attrs:{title:t.agent.userName}},[n("div",{attrs:{slot:"after"},slot:"after"},[n("eb-link",{attrs:{onPerform:t.onPerformRemoveAgent}},[t._v(t._s(t.$text("Remove")))])],1)]):t._e(),t._v(" "),t.agent?t._e():n("f7-list-item",{attrs:{title:t.$text("Specify agent"),link:"#"},on:{click:t.onSelectUser}})],2)],1)},[],!1,null,"2d6b67f6",null);e.default=o.exports}]);