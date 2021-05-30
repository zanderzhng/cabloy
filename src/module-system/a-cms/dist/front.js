(()=>{var t={682:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={parseAtomClass:function(t){var e=t&&t.module,n=t&&t.atomClassName;return e&&n?{module:e,atomClassName:n}:{module:"a-cms",atomClassName:"article"}},combineAtomClass:function(t,e){var n="module=".concat(t.module,"&atomClassName=").concat(t.atomClassName);if(!e)return n;var a=e.indexOf("?");return-1===a?"".concat(e,"?").concat(n):a===e.length-1?"".concat(e).concat(n):"".concat(e,"&").concat(n)}}},919:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var a=n(682);function o(t,e,n,a,o,r,i){try{var s=t[r](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,o)}const r={renderArticleContent:{props:{context:{type:Object}},data:function(){return{}},computed:{atomClass:function(){var t=this.context.parcel;return{module:t.data.module,atomClassName:t.data.atomClassName}}},created:function(){},methods:{save:function(){return this.context.validate.perform(null,{action:"save"})},combineAtomClass:function(t){return a.Z.combineAtomClass(this.atomClass,t)},onChooseEditContent:function(){var t=this,e=this.context,n=e.parcel,a=e.validate,o=this.combineAtomClass("/a/cms/article/contentEdit");this.$view.navigate(o,{target:a.readOnly?"_self":void 0,context:{params:{ctx:this,item:n.data,readOnly:a.readOnly},callback:function(e,n){200===e&&t.context.setValue(n.content)}}})}},render:function(){var t=arguments[0],e=this.context.dataPath,n=this.context.getTitle();return t("eb-list-item-choose",{attrs:{link:"#",dataPath:e,title:n},props:{onChoose:this.onChooseEditContent}})}},itemLayoutBlockMobileMain:{meta:{global:!1},props:{layoutManager:{type:Object},layout:{type:Object},blockConfig:{type:Object}},data:function(){return{articleUrl:null}},created:function(){this._getArticleUrl()},beforeDestroy:function(){},methods:{onSize:function(t){this.$$(this.$refs.iframe).css({height:"".concat(t.height,"px"),width:"".concat(t.width,"px")})},_getArticleUrl:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==e.blockConfig.iframe&&"edit"!==e.layoutManager.container.mode){t.next=3;break}return e.articleUrl="",t.abrupt("return");case 3:return t.prev=3,t.next=6,e.$api.post("render/getArticleUrl",{key:{atomId:e.layoutManager.container.atomId},options:{returnWaitingPath:!0}});case 6:n=t.sent,a=n&&n.url,e.articleUrl=a?e.$meta.util.combineQueries(a,{__cms_iframe_random:(new Date).getTime()}):"",t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),e.articleUrl="";case 14:case"end":return t.stop()}}),t,null,[[3,11]])})),function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function s(t){o(i,a,r,s,c,"next",t)}function c(t){o(i,a,r,s,c,"throw",t)}s(void 0)}))})()},_renderIFrame:function(){var t=this.$createElement,e=this.layoutManager.subnavbar.enable;return t("eb-box",{on:{size:this.onSize},attrs:{header:!0,subnavbar:e},class:"eb-box-iframe"},[t("iframe",{ref:"iframe",attrs:{src:this.articleUrl,seamless:!0}})])}},render:function(){return null===this.articleUrl?null:""===this.articleUrl?this.layoutManager.validate_render():this._renderIFrame()}}}},788:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={atoms:{article:{render:{list:{info:{orders:[{name:"sticky",title:"Sticky",by:"desc"},{name:"sorting",title:"Sorting",by:"asc"}]}},item:{layouts:{mobile:{blocks:{main:{component:{module:"a-cms",name:"itemLayoutBlockMobileMain"}}}},pc:{blocks:{main:{component:{module:"a-cms",name:"itemLayoutBlockMobileMain"}}}}}}}}}}},933:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={ArticleCover:"Article Cover"}},978:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={Article:"文章",Articles:"文章",Post:"发表",ArticleCover:"文章封面","Language Configuration":"语言配置","Site Configuration":"站点配置","Time Used":"用时","What to write":"写点什么","Build Language":"构建语言","Build All Languages":"构建所有语言"}},137:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const a={"en-us":n(933).Z,"zh-cn":n(978).Z}},644:(t,e,n)=>{"use strict";function a(t){return n(142)("./".concat(t,".vue")).default}n.d(e,{Z:()=>o});const o=[{path:"config/atomClasses",component:a("config/atomClasses")},{path:"config/list",component:a("config/list")},{path:"config/site",component:a("config/site")},{path:"config/siteBase",component:a("config/siteBase")},{path:"config/language",component:a("config/language")},{path:"config/languagePreview",component:a("config/languagePreview")},{path:"article/contentEdit",component:a("article/contentEdit")},{path:"article/post",component:a("article/post")},{path:"article/edit",component:a("article/edit")},{path:"block/edit",component:a("block/blockEdit")}]},81:(t,e,n)=>{"use strict";function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return{state:{configSiteBase:{},configSite:{},languages:{}},getters:{},mutations:{setConfigSiteBase:function(t,e){var n=e.atomClass,a=e.configSiteBase,i="".concat(n.module,":").concat(n.atomClassName);t.configSiteBase=o(o({},t.configSiteBase),{},r({},i,a))},setConfigSite:function(t,e){var n=e.atomClass,a=e.configSite,i="".concat(n.module,":").concat(n.atomClassName);t.configSite=o(o({},t.configSite),{},r({},i,a))},setLanguages:function(t,e){var n=e.atomClass,a=e.languages,i="".concat(n.module,":").concat(n.atomClassName);t.languages=o(o({},t.languages),{},r({},i,a))}},actions:{getConfigSiteBase:function(e,n){var a=e.state,o=e.commit,r=n.atomClass;return new Promise((function(e,n){var i="".concat(r.module,":").concat(r.atomClassName),s=a.configSiteBase[i];if(s)return e(s);t.prototype.$meta.api.post("/a/cms/site/getConfigSiteBase",{atomClass:r}).then((function(t){var n=t.data||{};o("setConfigSiteBase",{atomClass:r,configSiteBase:n}),e(n)})).catch((function(t){return n(t)}))}))},getConfigSite:function(e,n){var a=e.state,o=e.commit,r=n.atomClass;return new Promise((function(e,n){var i="".concat(r.module,":").concat(r.atomClassName),s=a.configSite[i];if(s)return e(s);t.prototype.$meta.api.post("/a/cms/site/getConfigSite",{atomClass:r}).then((function(t){var n=t.data||{};o("setConfigSite",{atomClass:r,configSite:n}),e(n)})).catch((function(t){return n(t)}))}))},getLanguages:function(e,n){var a=e.state,o=e.commit,r=n.atomClass;return new Promise((function(e,n){var i="".concat(r.module,":").concat(r.atomClassName),s=a.languages[i];if(s)return e(s);t.prototype.$meta.api.post("/a/cms/site/getLanguages",{atomClass:r}).then((function(t){var n=t||[];o("setLanguages",{atomClass:r,languages:n}),e(n)})).catch((function(t){return n(t)}))}))}}}}n.d(e,{Z:()=>i})},891:(t,e,n)=>{var a=n(233),o=n(361)(a);o.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),t.exports=o},361:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,a){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);a&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},233:t=>{"use strict";function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}t.exports=function(t){var n,a,o=(a=4,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{a||null==s.return||s.return()}finally{if(o)throw r}}return n}}(n,a)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(t,n):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[1],i=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(c," */"),u=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[r].concat(u).concat([l]).join("\n")}return[r].join("\n")}},706:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>c});var a=n(5),o=n.n(a),r=n(682);function i(t,e,n,a,o,r,i){try{var s=t[r](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,o)}const s={meta:{size:"large"},mixins:[o().prototype.$meta.module.get("a-components").options.mixins.ebPageContext],data:function(){return{atomClass:r.Z.parseAtomClass(this.$f7route.query),dirty:!1,module:null}},computed:{title:function(){return"".concat(this.dirty?"* ":"").concat(this.item.atomName)},readOnly:function(){return this.contextParams.readOnly},item:function(){return this.contextParams.item},editable:function(){return!this.readOnly},language:function(){return"zh-cn"===this.$meta.util.getLocale()?"zh-CN":"en"},subfield:function(){return this.editable&&"small"!==this.$view.size},defaultOpen:function(){return this.editable?"":"preview"},toolbarsFlag:function(){return this.editable},navigation:function(){return!this.editable},toolbars:function(){return{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,audiolink:!1,code:!0,table:!0,block:!0,undo:!0,redo:!0,trash:!0,navigation:!0,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0}}},created:function(){var t=this;this.$meta.module.use("a-mavoneditor",(function(e){t.module=e}))},methods:{combineAtomClass:function(t){return r.Z.combineAtomClass(this.atomClass,t)},onChange:function(t){this.readOnly||this.item.content!==t&&(this.dirty=!0,this.contextCallback(200,{content:t}))},onSave:function(){var t=this;this.onPerformSave().then((function(e){t.$view.toast.show({text:e})})).catch((function(e){t.$view.toast.show({text:e.message})}))},onPerformSave:function(){var t=this;return this.contextParams.ctx.save().then((function(){return t.dirty=!1,t.$text("Saved")}))},onPerformPreview:function(){var t=this;return this.readOnly?this._preview():this.onPerformSave().then((function(){return t._preview()}))},_preview:function(){var t=this;return this.$api.post("render/getArticleUrl",{atomClass:this.atomClass,key:{atomId:this.item.atomId},options:{returnWaitingPath:!0}}).then((function(e){e&&window.open(e.url,"cms_article_".concat(t.atomClass.module,"_").concat(t.item.atomId))}))},onImageUpload:function(){return this.onUpload(1,this.item.atomId)},onAudioUpload:function(){return this.onUpload(3,this.item.atomId)},onUpload:function(t,e){var n=this;return new Promise((function(a,o){n.$view.navigate("/a/file/file/upload",{context:{params:{mode:t,atomId:e},callback:function(t,e){200===t&&a({text:e.realName,addr:e.downloadUrl}),!1===t&&o()}}})}))},onBlockAdd:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.__blockSelect();case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,e.__blockEdit(n,e.item.atomId);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function s(t){i(r,a,o,s,c,"next",t)}function c(t){i(r,a,o,s,c,"throw",t)}s(void 0)}))})()},__blockSelect:function(){var t=this;return new Promise((function(e){var n;t.$view.navigate("/a/basefront/resource/select?resourceType=a-cms:block",{context:{params:{multiple:!1},callback:function(t,a){200===t?n=a.data:e(n)}}})}))},__blockEdit:function(t,e){var n=this;return new Promise((function(a,o){n.$view.navigate("/a/cms/block/edit",{context:{params:{block:t,atomId:e},callback:function(t,e){200===t&&a(e),!1===t&&o()}}})}))}}},c=(0,n(792).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.title,"eb-back-link":"Back"}},[n("f7-nav-right",[t.readOnly?t._e():n("eb-link",{attrs:{iconMaterial:"save",onPerform:t.onPerformSave}}),t._v(" "),t.$device.desktop?n("eb-link",{attrs:{iconMaterial:"visibility",onPerform:t.onPerformPreview}}):t._e()],1)],1),t._v(" "),t.module?[n("eb-box",[n("mavon-editor",{ref:"editor",attrs:{value:t.item.content,onImageUpload:t.onImageUpload,onAudioUpload:t.onAudioUpload,onBlockAdd:t.onBlockAdd,language:t.language,subfield:t.subfield,editable:t.editable,defaultOpen:t.defaultOpen,toolbarsFlag:t.toolbarsFlag,navigation:t.navigation,toolbars:t.toolbars},on:{change:t.onChange,save:t.onSave}})],1)]:t._e()],2)}),[],!1,null,"e0fde982",null).exports},871:(t,e,n)=>{"use strict";function a(t,e,n,a,o,r,i){try{var s=t[r](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,o)}n.r(e),n.d(e,{default:()=>r});const o={meta:{size:"medium"},data:function(){return{}},created:function(){},methods:{onPageAfterIn:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=JSON.parse(e.$f7route.query.item),a={actionModule:"a-base",actionComponent:"action",name:"write",navigateOptions:{target:"_self",reloadCurrent:!0}},t.next=5,e.$meta.util.performAction({ctx:e,action:a,item:n});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.$view.toast.show({text:t.t0.message});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function s(t){a(i,o,r,s,c,"next",t)}function c(t){a(i,o,r,s,c,"throw",t)}s(void 0)}))})()}}},r=(0,n(792).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",{on:{"page:afterin":t.onPageAfterIn}},[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:t.$text("Edit"),"eb-back-link":"Back"}}),t._v(" "),n("f7-block",{staticClass:"text-align-center"},[n("f7-preloader")],1)],1)}),[],!1,null,null,null).exports},256:(t,e,n)=>{"use strict";function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e,n,a,o,r,i){try{var s=t[r](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,o)}n.r(e),n.d(e,{default:()=>c});const s={meta:{size:"medium"},data:function(){return{}},created:function(){},methods:{onPageAfterIn:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=JSON.parse(e.$f7route.query.item),t.next=4,e.$api.post("/a/base/atom/create",{atomClass:{module:n.module,atomClassName:n.atomClassName},item:n});case 4:return a=t.sent,n=o(o({},n),{},{atomId:a.atomId,itemId:a.itemId}),r={actionModule:"a-base",actionComponent:"action",name:"write",navigateOptions:{target:"_self",reloadCurrent:!0}},t.next=9,e.$meta.util.performAction({ctx:e,action:r,item:n});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e.$view.toast.show({text:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})),function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function s(t){i(r,a,o,s,c,"next",t)}function c(t){i(r,a,o,s,c,"throw",t)}s(void 0)}))})()}}},c=(0,n(792).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",{on:{"page:afterin":t.onPageAfterIn}},[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:t.$text("Post"),"eb-back-link":"Back"}}),t._v(" "),n("f7-block",{staticClass:"text-align-center"},[n("f7-preloader")],1)],1)}),[],!1,null,null,null).exports},939:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var a=n(5);const o={mixins:[n.n(a)().prototype.$meta.module.get("a-components").options.mixins.ebPageContext],data:function(){return{item:null}},computed:{title:function(){return"".concat(this.$text("Block"),": ").concat(this.block.atomNameLocale)},block:function(){return this.contextParams.block},atomId:function(){return this.contextParams.atomId},resourceConfig:function(){return JSON.parse(this.block.resourceConfig)},host:function(){return{atomId:this.atomId}},validateParams:function(){return{module:this.resourceConfig.validator.module,validator:this.resourceConfig.validator.validator}}},created:function(){this.item=this.resourceConfig.default},methods:{onPerformValidate:function(){var t=this,e=this.block.atomStaticKey;return this.$api.post("site/blockSave",{blockName:e,item:this.item}).then((function(n){t.contextCallback(200,{name:e,content:n}),t.$f7router.back()}))},onPerformDone:function(){return this.$refs.validate.perform()},onSubmit:function(){return this.onPerformDone()}}},r=(0,n(792).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:t.title,"eb-back-link":"Back"}},[n("f7-nav-right",[n("eb-link",{attrs:{iconMaterial:"done",onPerform:t.onPerformDone}})],1)],1),t._v(" "),t.item?n("eb-validate",{ref:"validate",attrs:{readOnly:!1,auto:"",data:t.item,params:t.validateParams,host:t.host,onPerform:t.onPerformValidate},on:{submit:t.onSubmit}}):t._e()],1)}),[],!1,null,"db63e516",null).exports},411:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var a=n(5),o=n.n(a);const r={meta:{global:!1},mixins:[o().prototype.$meta.module.get("a-base").options.mixins.ebModules,o().prototype.$meta.module.get("a-base").options.mixins.ebAtomClasses],props:{role:{type:Object}},data:function(){return{}},computed:{ready:function(){return this.modulesAll&&this.atomClassesAll},items:function(){var t=[];for(var e in this.atomClassesAll){var n=this.atomClassesAll[e],a=Object.keys(n).length;for(var o in n){var r=n[o];if(r.cms){var i="".concat(e,".").concat(o),s=this.getModule(e).titleLocale;"a-cms"===e?s="".concat(s,":").concat(this.$text("General")):a>1&&(s="".concat(s,":").concat(r.titleLocale)),t.push({key:i,moduleName:e,atomClassName:o,title:s})}}}return t}},methods:{}},i=(0,n(792).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:t.$text("CMS"),"eb-back-link":"Back"}}),t._v(" "),t.ready?n("f7-list",t._l(t.items,(function(t){return n("eb-list-item",{key:t.key,attrs:{title:t.title,link:"#","eb-href":"/a/cms/config/list?module="+t.moduleName+"&atomClassName="+t.atomClassName+"&title="+encodeURIComponent(t.title)}})})),1):t._e()],1)}),[],!1,null,null,null).exports},734:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var a=n(682);const o={data:function(){return{atomClass:a.Z.parseAtomClass(this.$f7route.query),language:this.$f7route.query.language,content:"{}"}},computed:{title:function(){var t=this.$text("Language");return"".concat(t,": ").concat(this.language)}},created:function(){var t=this;this.$api.post("site/getConfigLanguage",{atomClass:this.atomClass,language:this.language}).then((function(e){e.data?t.content=JSON5.stringify(e.data,null,2):t.content="{}"}))},methods:{combineAtomClass:function(t){return a.Z.combineAtomClass(this.atomClass,t)},onSize:function(t){this.$$(this.$refs.textarea).css({height:"".concat(t.height-20,"px"),width:"".concat(t.width-20,"px")})},onInput:function(t){this.content=t.target.value},onPerformSave:function(){var t=this,e=JSON5.parse(this.content);return this.$api.post("site/setConfigLanguage",{atomClass:this.atomClass,language:this.language,data:e}).then((function(){return t.$emit("preview"),!0}))},onPerformPreview:function(){var t=this.combineAtomClass("/a/cms/config/languagePreview?language=".concat(this.language));this.$view.navigate(t,{context:{params:{source:this}}})}}},r=(0,n(792).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.title,"eb-back-link":"Back"}},[n("f7-nav-right",[n("eb-link",{attrs:{iconMaterial:"save",onPerform:t.onPerformSave}}),t._v(" "),n("eb-link",{attrs:{iconMaterial:"visibility",onPerform:t.onPerformPreview}})],1)],1),t._v(" "),n("eb-box",{on:{size:t.onSize}},[n("textarea",{ref:"textarea",staticClass:"json-textarea json-textarea-margin",attrs:{type:"textarea"},domProps:{value:t.content},on:{input:t.onInput}})])],1)}),[],!1,null,"468aa567",null).exports},325:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var a=n(5),o=n.n(a),r=n(682);const i={mixins:[o().prototype.$meta.module.get("a-components").options.mixins.ebPageContext],data:function(){return{atomClass:r.Z.parseAtomClass(this.$f7route.query),language:this.$f7route.query.language,content:"{}"}},computed:{params:function(){return this.contextParams},source:function(){return this.contextParams&&this.contextParams.source}},created:function(){this.onLoad()},mounted:function(){this.source&&this.source.$on("preview",this.onPreview)},beforeDestroy:function(){this.source&&this.source.$off("preview",this.onPreview)},methods:{combineAtomClass:function(t){return r.Z.combineAtomClass(this.atomClass,t)},onPreview:function(){this.onLoad()},onLoad:function(){var t=this;this.$api.post("site/getConfigLanguagePreview",{atomClass:this.atomClass,language:this.language}).then((function(e){e.data?t.content=JSON5.stringify(e.data,null,2):t.content="{}"}))},onSize:function(t){this.$$(this.$refs.textarea).css({height:"".concat(t.height-20,"px"),width:"".concat(t.width-20,"px")})}}},s=(0,n(792).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.$text("Preview"),"eb-back-link":"Back"}}),t._v(" "),n("eb-box",{on:{size:t.onSize}},[n("textarea",{ref:"textarea",staticClass:"json-textarea json-textarea-margin",attrs:{type:"textarea",readonly:"readonly"},domProps:{value:t.content}})])],1)}),[],!1,null,"e60ca436",null).exports},429:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var a=n(5),o=n.n(a),r=n(682);const i={mixins:[o().prototype.$meta.module.get("a-base").options.mixins.ebModules,o().prototype.$meta.module.get("a-base").options.mixins.ebAtomClasses],data:function(){return{title:this.$f7route.query.title,atomClass:r.Z.parseAtomClass(this.$f7route.query),stats:null,languageEnable:!0}},computed:{ready:function(){return this.modulesAll&&this.atomClassesAll&&this.languages},languages:function(){var t="".concat(this.atomClass.module,":").concat(this.atomClass.atomClassName);return this.$local.state.languages[t]},languages2:function(){return this.languageEnable?this.languages:[{title:"",value:""}]},atomClassBase:function(){return this.getAtomClass(this.atomClass)}},watch:{languages:function(t){this.onLanguagesChanged(t)}},created:function(){var t=this;this.$local.dispatch("getLanguages",{atomClass:this.atomClass}).then((function(e){t.onLanguagesChanged(e)}))},methods:{onRefresh:function(t){t(),this.getStats(this.languages2)},onLanguagesChanged:function(t){t&&(this.languageEnable=t.length>0,this.getStats(this.languages2))},combineAtomClass:function(t){return r.Z.combineAtomClass(this.atomClass,t)},onPerformBuild:function(){var t=this;return this.$view.dialog.confirm().then((function(){return t.$api.post("site/buildLanguages",{atomClass:t.atomClass}).then((function(e){var n=e.progressId;t.$view.dialog.progressbar({progressId:n,title:t.$text(t.languageEnable?"Build All Languages":"Build")})}))}))},onPerformBuildLanguage:function(t,e){var n=this;return this.$view.dialog.confirm().then((function(){return n.$api.post("site/buildLanguage",{atomClass:n.atomClass,language:e.value}).then((function(t){var a=t.progressId;n.$view.dialog.progressbar({progressId:a,title:"".concat(n.$text("Build")," ").concat(e.title)})}))}))},onPerformPreview:function(t,e){var n=this,a=e&&e.value;return this.$api.post("site/getUrl",{atomClass:this.atomClass,language:a,path:"index.html"}).then((function(t){window.open(t,"cms_site_".concat(n.atomClass.module,"_").concat(n.atomClass.atomClassName,"_").concat(a||"default"))}))},combineLinkArticles:function(t){var e={};return this.languageEnable&&(e.language=t),this.combineAtomClass("/a/basefront/atom/list?options=".concat(encodeURIComponent(JSON.stringify(e))))},combineLinkComments:function(t){var e={};return this.languageEnable&&(e["a.atomLanguage"]=t),this.combineAtomClass("/a/basefront/comment/all?where=".concat(encodeURIComponent(JSON.stringify(e))))},combineLinkCategoriesTags:function(t,e){return this.languageEnable&&(e="".concat(e,"?language=").concat(t.value,"&languageTitle=").concat(t.title)),this.combineAtomClass(e)},getStats:function(t){var e=this;t?this.$api.post("site/getStats",{atomClass:this.atomClass,languages:t.map((function(t){return t.value}))}).then((function(t){e.stats=t})):this.stats=null},getStat:function(t,e){if(!this.stats)return"--";var n=this.stats[t];return n?n[e]:"--"}}},s=(0,n(792).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",{attrs:{ptr:""},on:{"ptr:refresh":t.onRefresh}},[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:t.title,"eb-back-link":"Back"}}),t._v(" "),t.ready?n("div",[n("f7-list",[n("eb-list-item",{attrs:{title:t.$text("Site")}},[n("div",{attrs:{slot:"after"},slot:"after"},[n("eb-link",{attrs:{iconMaterial:"settings","eb-href":t.combineAtomClass("config/site")}},[t._v(t._s(t.$text("Config")))]),t._v(" "),n("eb-link",{attrs:{iconMaterial:"build",onPerform:t.onPerformBuild}},[t._v(t._s(t.$text("Build")))]),t._v(" "),t.$device.desktop&&!t.languageEnable?n("eb-link",{attrs:{iconMaterial:"visibility",onPerform:t.onPerformPreview}},[t._v(t._s(t.$text("Preview")))]):t._e()],1)]),t._v(" "),t.languageEnable?n("f7-list-group",[n("f7-list-item",{attrs:{title:t.$text("Languages"),"group-title":""}})],1):t._e()],1),t._v(" "),t._l(t.languages2,(function(e){return n("div",{key:e.value},[t.languageEnable?n("f7-block-title",{attrs:{medium:""}},[t._v(t._s(e.title))]):t._e(),t._v(" "),n("f7-card",[n("f7-card-content",[n("f7-row",[n("f7-col",{staticClass:"flex-direction-column text-align-center"},[n("div",[n("eb-link",{attrs:{"eb-href":t.combineLinkArticles(e.value)}},[t._v(t._s(t.atomClassBase.titleLocale))])],1),t._v(" "),n("div",[t._v(t._s(t.getStat(e.value,"atoms")))])]),t._v(" "),n("f7-col",{staticClass:"flex-direction-column text-align-center"},[n("div",[n("eb-link",{attrs:{"eb-href":t.combineLinkComments(e.value)}},[t._v(t._s(t.$text("Comment")))])],1),t._v(" "),n("div",[t._v(t._s(t.getStat(e.value,"comments")))])]),t._v(" "),t.atomClassBase.category?n("f7-col",{staticClass:"flex-direction-column text-align-center"},[n("div",[n("eb-link",{attrs:{"eb-href":t.combineLinkCategoriesTags(e,"/a/baseadmin/category/tree")}},[t._v(t._s(t.$text("Category")))])],1),t._v(" "),n("div",[t._v(t._s(t.getStat(e.value,"categories")))])]):t._e(),t._v(" "),t.atomClassBase.tag?n("f7-col",{staticClass:"flex-direction-column text-align-center"},[n("div",[n("eb-link",{attrs:{"eb-href":t.combineLinkCategoriesTags(e,"/a/baseadmin/tag/list")}},[t._v(t._s(t.$text("Tag")))])],1),t._v(" "),n("div",[t._v(t._s(t.getStat(e.value,"tags")))])]):t._e()],1)],1),t._v(" "),t.languageEnable?n("f7-card-footer",[n("eb-link",{attrs:{iconMaterial:"settings","eb-href":t.combineAtomClass("config/language?language="+e.value)}},[t._v(t._s(t.$text("Config")))]),t._v(" "),n("eb-link",{attrs:{iconMaterial:"build",context:e,onPerform:t.onPerformBuildLanguage}},[t._v(t._s(t.$text("Build")))]),t._v(" "),t.$device.desktop?n("eb-link",{attrs:{iconMaterial:"visibility",context:e,onPerform:t.onPerformPreview}},[t._v(t._s(t.$text("Preview")))]):t._e()],1):t._e()],1)],1)}))],2):t._e()],1)}),[],!1,null,null,null).exports},992:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var a=n(682);const o={data:function(){return{atomClass:a.Z.parseAtomClass(this.$f7route.query),content:"{}"}},created:function(){var t=this;this.$local.dispatch("getConfigSite",{atomClass:this.atomClass}).then((function(e){t.content=e?JSON5.stringify(e,null,2):"{}"}))},methods:{combineAtomClass:function(t){return a.Z.combineAtomClass(this.atomClass,t)},onSize:function(t){this.$$(this.$refs.textarea).css({height:"".concat(t.height-20,"px"),width:"".concat(t.width-20,"px")})},onInput:function(t){this.content=t.target.value},onPerformSave:function(){var t=this,e=JSON5.parse(this.content);return this.$api.post("site/setConfigSite",{atomClass:this.atomClass,data:e}).then((function(){return t.$local.commit("setConfigSite",{atomClass:t.atomClass,configSite:e}),t.$local.commit("setLanguages",{atomClass:t.atomClass,languages:null}),t.$local.dispatch("getLanguages",{atomClass:t.atomClass}),!0}))}}},r=(0,n(792).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.$text("Site Configuration"),"eb-back-link":"Back"}},[n("f7-nav-right",[n("eb-link",{attrs:{iconMaterial:"save",onPerform:t.onPerformSave}}),t._v(" "),n("eb-link",{attrs:{iconMaterial:"info","eb-href":t.combineAtomClass("config/siteBase")}})],1)],1),t._v(" "),n("eb-box",{on:{size:t.onSize}},[n("textarea",{ref:"textarea",staticClass:"json-textarea json-textarea-margin",attrs:{type:"textarea"},domProps:{value:t.content},on:{input:t.onInput}})])],1)}),[],!1,null,null,null).exports},205:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var a=n(682);const o={data:function(){return{atomClass:a.Z.parseAtomClass(this.$f7route.query),content:"{}"}},created:function(){var t=this;this.$local.dispatch("getConfigSiteBase",{atomClass:this.atomClass}).then((function(e){t.content=e?JSON5.stringify(e,null,2):"{}"}))},methods:{onSize:function(t){this.$$(this.$refs.textarea).css({height:"".concat(t.height-20,"px"),width:"".concat(t.width-20,"px")})}}},r=(0,n(792).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("eb-page",[n("eb-navbar",{attrs:{title:t.$text("Default"),"eb-back-link":"Back"}}),t._v(" "),n("eb-box",{on:{size:t.onSize}},[n("textarea",{ref:"textarea",staticClass:"json-textarea json-textarea-margin",attrs:{type:"textarea",readonly:"readonly"},domProps:{value:t.content}})])],1)}),[],!1,null,null,null).exports},792:(t,e,n)=>{"use strict";function a(t,e,n,a,o,r,i,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>a})},824:(t,e,n)=>{var a=n(891);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,n(159).Z)("53f1812b",a,!0,{})},159:(t,e,n)=>{"use strict";function a(t,e){for(var n=[],a={},o=0;o<e.length;o++){var r=e[o],i=r[0],s={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};a[i]?a[i].parts.push(s):n.push(a[i]={id:i,parts:[s]})}return n}n.d(e,{Z:()=>g});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},m=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(t,e,n,o){l=n,m=o||{};var i=a(t,e);return h(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o];(c=r[s.id]).refs--,n.push(c)}for(e?h(i=a(t,e)):i=[],o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete r[c.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],a=r[n.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(v(n.parts[o]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(v(n.parts[o]));r[n.id]={id:n.id,refs:1,parts:i}}}}function p(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function v(t){var e,n,a=document.querySelector("style["+f+'~="'+t.id+'"]');if(a){if(l)return u;a.parentNode.removeChild(a)}if(d){var o=c++;a=s||(s=p()),e=y.bind(null,a,o,!1),n=y.bind(null,a,o,!0)}else a=p(),e=x.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}var b,C=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function y(t,e,n,a){var o=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=C(e,o);else{var r=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}function x(t,e){var n=e.css,a=e.media,o=e.sourceMap;if(a&&t.setAttribute("media",a),m.ssrId&&t.setAttribute(f,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},142:(t,e,n)=>{var a={"./article/contentEdit.vue":706,"./article/edit.vue":871,"./article/post.vue":256,"./block/blockEdit.vue":939,"./config/atomClasses.vue":411,"./config/language.vue":734,"./config/languagePreview.vue":325,"./config/list.vue":429,"./config/site.vue":992,"./config/siteBase.vue":205};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id=142},5:t=>{"use strict";t.exports=window.Vue}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={id:a,exports:{}};return t[a](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};(()=>{"use strict";var t;n.r(a),n.d(a,{default:()=>e}),n(824);const e={install:function(e,a){return t?console.error("already installed."):(t=e,a({routes:n(644).Z,store:n(81).Z(t),config:n(788).Z,locales:n(137).Z,components:n(919).Z}))}}})(),window["a-cms"]=a})();
//# sourceMappingURL=front.js.map