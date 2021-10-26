(()=>{var e={129:e=>{e.exports=e=>({})},169:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}e.exports=e=>{class o extends e.meta.AtomBase{async create(e){let{atomClass:t,item:o,user:n}=e;const a=await super.create({atomClass:t,item:o,user:n}),r=await this.ctx.model.product.insert({atomId:a.atomId});return{atomId:a.atomId,itemId:r.insertId}}async read(e){let{atomClass:t,options:o,key:n,user:a}=e;const r=await super.read({atomClass:t,options:o,key:n,user:a});return r?(this._getMeta(r),r):null}async select(e){let{atomClass:o,options:n,items:a,user:r}=e;await super.select({atomClass:o,options:n,items:a,user:r});var s,i=function(e,o){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e))||o&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){d=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(d)throw s}}}}(a);try{for(i.s();!(s=i.n()).done;){const e=s.value;this._getMeta(e)}}catch(e){i.e(e)}finally{i.f()}}async write(e){let{atomClass:t,target:o,key:n,item:a,options:r,user:s}=e;await super.write({atomClass:t,target:o,key:n,item:a,options:r,user:s});const i=await this.ctx.model.product.prepareData(a);i.id=n.itemId,await this.ctx.model.product.update(i)}async delete(e){let{atomClass:t,key:o,user:n}=e;await super.delete({atomClass:t,key:o,user:n}),await this.ctx.model.product.delete({id:o.itemId})}_getMeta(e){const t=[],o=(e.productPrice/100).toFixed(2);t.push(o);const n={summary:e.productCode,flags:t};e._meta=n}}return o}},434:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}e.exports=e=>{class o extends e.meta.AtomBase{async create(e){let{atomClass:t,item:o,user:n}=e;const a=await super.create({atomClass:t,item:o,user:n}),r=await this.ctx.model.purchaseOrder.insert({atomId:a.atomId});return{atomId:a.atomId,itemId:r.insertId}}async read(e){let{atomClass:t,options:o,key:n,user:a}=e;const r=await super.read({atomClass:t,options:o,key:n,user:a});return r?(this._getMeta(r),r):null}async select(e){let{atomClass:o,options:n,items:a,user:r}=e;await super.select({atomClass:o,options:n,items:a,user:r});var s,i=function(e,o){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e))||o&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){d=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(d)throw s}}}}(a);try{for(i.s();!(s=i.n()).done;){const e=s.value;this._getMeta(e)}}catch(e){i.e(e)}finally{i.f()}}async write(e){let{atomClass:t,target:o,key:n,item:a,options:r,user:s}=e;await super.write({atomClass:t,target:o,key:n,item:a,options:r,user:s});const i=await this.ctx.model.purchaseOrder.prepareData(a);i.id=n.itemId;const d=await this.ctx.bean.detail.select({atomKey:n,pageForce:!1});i.detailsCount=d.length,i.detailsAmount=d.reduce(((e,t)=>e+t.amount),0),await this.ctx.model.purchaseOrder.update(i)}async delete(e){let{atomClass:t,key:o,user:n}=e;await super.delete({atomClass:t,key:o,user:n}),await this.ctx.model.purchaseOrder.delete({id:o.itemId})}_getMeta(e){const t=[];e.detailsCount>0&&t.push(e.detailsCount);const o=(e.detailsAmount/100).toFixed(2);t.push(o);const n={flags:t};e._meta=n}}return o}},624:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}e.exports=e=>{class o extends e.meta.DetailBase{async create(e){let{atomKey:t,detailClass:o,item:n,user:a}=e;const r=await super.create({atomKey:t,detailClass:o,item:n,user:a}),s=await this.ctx.model.purchaseOrderDetail.insert({atomId:t.atomId,detailId:r.detailId});return{detailId:r.detailId,detailItemId:s.insertId}}async read(e){let{detailClass:t,options:o,key:n,user:a}=e;const r=await super.read({detailClass:t,options:o,key:n,user:a});return r?(this._getMeta(r),r):null}async select(e){let{atomKey:o,detailClass:n,options:a,items:r,user:s}=e;await super.select({atomKey:o,detailClass:n,options:a,items:r,user:s});var i,d=function(e,o){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e))||o&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){d=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(d)throw s}}}}(r);try{for(d.s();!(i=d.n()).done;){const e=i.value;this._getMeta(e)}}catch(e){d.e(e)}finally{d.f()}}async write(e){let{detailClass:t,target:o,key:n,item:a,options:r,user:s}=e;await super.write({detailClass:t,target:o,key:n,item:a,options:r,user:s});const i=await this.ctx.model.purchaseOrderDetail.prepareData(a);i.id=n.detailItemId,i.amount=i.price*i.quantity,await this.ctx.model.purchaseOrderDetail.update(i)}async delete(e){let{detailClass:t,target:o,key:n,user:a}=e;await super.delete({detailClass:t,target:o,key:n,user:a}),await this.ctx.model.purchaseOrderDetail.delete({id:n.detailItemId})}_getMeta(e){const t=[];e.quantity>1&&t.push(e.quantity);const o=(e.amount/100).toFixed(2);t.push(o);const n={summary:e.detailCode,flags:t};e._meta=n}}return o}},758:e=>{e.exports=e=>{class t extends e.app.meta.FlowServiceBase{async execute(t){const{flowDefId:o,parameter:n,node:a}=t.parameter;await e.bean.flow.startById({flowDefId:o,flowVars:n,flowUserId:1,startEventId:a.id})}}return t}},428:e=>{e.exports=e=>{class t extends e.app.meta.FlowServiceBase{async execute(e){const t=e.parameter;return e.contextNode.vars.set("echo",t),t}}return t}},223:e=>{e.exports=e=>{class t extends e.meta.BeanBase{async update(e){if(1===e.version){const e="\n          CREATE TABLE testFlowPurchaseOrder (\n            id int(11) NOT NULL AUTO_INCREMENT,\n            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n            deleted int(11) DEFAULT '0',\n            iid int(11) DEFAULT '0',\n            atomId int(11) DEFAULT '0',\n            description varchar(255) DEFAULT NULL,\n            _flowDefKey varchar(255) DEFAULT NULL,\n            PRIMARY KEY (id)\n          )\n        ";await this.ctx.model.query(e)}if(2===e.version){let e="\n          CREATE TABLE testFlowProduct (\n            id int(11) NOT NULL AUTO_INCREMENT,\n            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n            deleted int(11) DEFAULT '0',\n            iid int(11) DEFAULT '0',\n            atomId int(11) DEFAULT '0',\n            productCode varchar(50) DEFAULT NULL,\n            productPrice int(11) DEFAULT '0',\n            PRIMARY KEY (id)\n          )\n        ";await this.ctx.model.query(e),e="\n          CREATE TABLE testFlowPurchaseOrderDetail (\n            id int(11) NOT NULL AUTO_INCREMENT,\n            createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\n            updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n            deleted int(11) DEFAULT '0',\n            iid int(11) DEFAULT '0',\n            atomId int(11) DEFAULT '0',\n            detailId int(11) DEFAULT '0',\n            price int(11) DEFAULT '0',\n            quantity int(11) DEFAULT '0',\n            amount int(11) DEFAULT '0',\n            PRIMARY KEY (id)\n          )\n        ",await this.ctx.model.query(e),e="\n          ALTER TABLE testFlowPurchaseOrder\n            ADD COLUMN detailsCount int(11) DEFAULT '0',\n            ADD COLUMN detailsAmount int(11) DEFAULT '0'\n        ",await this.ctx.model.query(e)}}async init(e){if(1===e.version){const e=[{roleName:"authenticated",action:"create"},{roleName:"authenticated",action:"read",scopeNames:0},{roleName:"authenticated",action:"write",scopeNames:0},{roleName:"authenticated",action:"delete",scopeNames:0},{roleName:"authenticated",action:"clone",scopeNames:0},{roleName:"authenticated",action:"deleteBulk"},{roleName:"authenticated",action:"exportBulk"},{roleName:"system",action:"read",scopeNames:"authenticated"}];await this.ctx.bean.role.addRoleRightBatch({atomClassName:"purchaseOrder",roleRights:e})}if(2===e.version){const e=[{roleName:"authenticated",action:"create"},{roleName:"authenticated",action:"read",scopeNames:0},{roleName:"authenticated",action:"write",scopeNames:0},{roleName:"authenticated",action:"delete",scopeNames:0},{roleName:"authenticated",action:"clone",scopeNames:0},{roleName:"authenticated",action:"deleteBulk"},{roleName:"authenticated",action:"exportBulk"},{roleName:"system",action:"read",scopeNames:"authenticated"}];await this.ctx.bean.role.addRoleRightBatch({atomClassName:"product",roleRights:e})}}async test(){}}return t}},313:(e,t,o)=>{const n=o(223),a=o(434),r=o(169),s=o(624),i=o(428),d=o(758);e.exports=e=>({"version.manager":{mode:"app",bean:n},"atom.purchaseOrder":{mode:"app",bean:a},"atom.product":{mode:"app",bean:r},"detail.purchaseOrder":{mode:"app",bean:s},"flow.service.test":{title:"Test",mode:"ctx",bean:i},"flow.service.startEventTimer":{title:"StartTestFlow",mode:"ctx",bean:d}})},817:e=>{e.exports=e=>({})},971:e=>{e.exports={}},724:e=>{e.exports={StartTestFlow:"Start Test Flow"}},995:e=>{e.exports={Product:"产品","Create Product":"新建产品","Product List":"产品列表","Purchase Order":"采购订单","Create Purchase Order":"新建采购订单","Purchase Order List":"采购订单列表","Product Code Exists":"产品编码已存在","WorkFlow Test":"工作流测试",Test_Set00_Simple:"测试_分组00_简单流程",StartTestFlow:"启动测试工作流"}},266:(e,t,o)=>{e.exports={"en-us":o(724),"zh-cn":o(995)}},796:e=>{e.exports=e=>({atomName:"Test_Set00_Activity_None",atomStaticKey:"set00_activityNone",atomRevision:0,description:"",content:JSON.stringify({process:{nodes:[{id:"startEvent_1",name:"Start",type:"startEventNone"},{id:"activity_1",name:"ActivityNone",type:"activityNone"},{id:"endEvent_1",name:"End",type:"endEventNone"}],edges:[{id:"edge_1",source:"startEvent_1",target:"activity_1"},{id:"edge_2",source:"activity_1",target:"endEvent_1"}]}})})},172:(e,t,o)=>{const n=o(295);e.exports=e=>{const t=e.meta.mockUtil.parseInfoFromPackage(__dirname),o={listener:n,process:{nodes:[{id:"startEvent_1",name:"Start",type:"startEventNone"},{id:"activity_1",name:"ActivityService",type:"activityService",options:{bean:{module:t.relativeName,name:"test"},parameterExpression:"context.vars.get(`echo`)"}},{id:"activity_2",name:"ActivityNone",type:"activityNone"},{id:"endEvent_1",name:"End",type:"endEventNone"}],edges:[{id:"edge_1",source:"startEvent_1",target:"activity_1"},{id:"edge_2",source:"activity_1",target:"activity_2"},{id:"edge_3",source:"activity_2",target:"endEvent_1"}]}};return{atomName:"Test_Set00_Activity_Service",atomStaticKey:"set00_activityService",atomRevision:0,description:"",content:JSON.stringify(o)}}},771:(e,t,o)=>{const n=o(770);e.exports=e=>{const t={listener:n,process:{nodes:[{id:"startEvent_1",name:"Start",type:"startEventNone"},{id:"endEvent_1",name:"End",type:"endEventNone"},{id:"endEvent_2",name:"End",type:"endEventNone"}],edges:[{id:"edge_1",name:"x=1",source:"startEvent_1",target:"endEvent_1",options:{conditionExpression:"context.vars.get('x')===1"}},{id:"edge_2",name:"x=2",source:"startEvent_1",target:"endEvent_2",options:{conditionExpression:"\n              contextNode.vars.get('x')===2\n            "}}]}};return{atomName:"Test_Set00_Edge_Sequence",atomStaticKey:"set00_edgeSequence",atomRevision:1,description:"",content:JSON.stringify(t)}}},332:(e,t,o)=>{const n=o(526);e.exports=e=>{const t={listener:n,process:{nodes:[{id:"startEvent_1",name:"Start",type:"startEventNone"},{id:"endEvent_1",name:"End",type:"endEventNone"}],edges:[{id:"edge_1",source:"startEvent_1",target:"endEvent_1"}]}};return{atomName:"Test_Set00_Simple",atomStaticKey:"set00_simple",atomRevision:0,description:"",content:JSON.stringify(t)}}},630:e=>{e.exports=e=>{const t={listener:null,process:{nodes:[{id:"startEvent_1",name:"Drafting",type:"startEventAtom",options:{atom:{module:e.meta.mockUtil.parseInfoFromPackage(__dirname).relativeName,atomClassName:"purchaseOrder"},conditionExpression:"atom._flowDefKey==='set01_atomAssigneesConfirmation'"}},{id:"activity_1",name:"Review",type:"activityUserTask",options:{assignees:{roles:"family"},confirmation:!0,bidding:!0,allowForward:!0,allowSubstitute:!0}},{id:"endEvent_1",name:"End",type:"endEventAtom"}],edges:[{id:"edge_1",source:"startEvent_1",target:"activity_1"},{id:"edge_2",source:"activity_1",target:"endEvent_1"}]}};return{atomName:"Test_Set01_Atom_AssigneesConfirmation",atomStaticKey:"set01_atomAssigneesConfirmation",atomRevision:1,description:"",content:JSON.stringify(t)}}},227:(e,t,o)=>{const n=o(12);e.exports=e=>{const t=e.meta.mockUtil.parseInfoFromPackage(__dirname),o={listener:n,process:{nodes:[{id:"startEvent_1",name:"Drafting",type:"startEventAtom",options:{atom:{module:t.relativeName,atomClassName:"purchaseOrder"},conditionExpression:"atom._flowDefKey==='set01_atomUserTask'"}},{id:"activity_1",name:"Review",type:"activityUserTask",options:{assignees:{vars:"flowUser"},confirmation:!1,bidding:!1,completionCondition:{},allowForward:!0,allowSubstitute:!0,schema:{write:["atomName",{name:"description",property:{type:"string",ebType:"text",ebTitle:"Description"}}]}}},{id:"endEvent_1",name:"End",type:"endEventAtom"}],edges:[{id:"edge_1",source:"startEvent_1",target:"activity_1"},{id:"edge_2",source:"activity_1",target:"endEvent_1"}]}};return{atomName:"Test_Set01_Atom_UserTask",atomStaticKey:"set01_atomUserTask",atomRevision:1,description:"",content:JSON.stringify(o)}}},280:(e,t,o)=>{const n=o(463);e.exports=e=>{const t=e.meta.mockUtil.parseInfoFromPackage(__dirname),o={listener:n,process:{nodes:[{id:"startEvent_1",name:"Drafting",type:"startEventAtom",options:{atom:{module:t.relativeName,atomClassName:"purchaseOrder"},conditionExpression:"atom._flowDefKey==='set01_startEventAtom'"}},{id:"activity_1",name:"ActivityNone",type:"activityNone"},{id:"endEvent_1",name:"End",type:"endEventAtom"}],edges:[{id:"edge_1",source:"startEvent_1",target:"activity_1"},{id:"edge_2",source:"activity_1",target:"endEvent_1"}]}};return{atomName:"Test_Set01_StartEvent_Atom",atomStaticKey:"set01_startEventAtom",atomRevision:0,description:"",content:JSON.stringify(o)}}},878:e=>{e.exports=e=>{const t={listener:null,process:{nodes:[{id:"startEvent_1",name:"Drafting",type:"startEventAtom",options:{atom:{module:e.meta.mockUtil.parseInfoFromPackage(__dirname).relativeName,atomClassName:"purchaseOrder"},conditionExpression:"atom._flowDefKey==='set02_behaviorOvertime'"}},{id:"activity_1",name:"Review",type:"activityUserTask",options:{assignees:{vars:"flowUser"}},behaviors:[{id:"behavior_1",name:"Overtime",type:"overtime",options:{cancelActivity:!0,timeDuration:3e3}}]},{id:"endEvent_1",name:"End",type:"endEventAtom"}],edges:[{id:"edge_1",source:"startEvent_1",target:"activity_1"},{id:"edge_2",source:"activity_1",target:"endEvent_1"},{id:"edge_3",source:"activity_1",target:"startEvent_1",behavior:"behavior_1"}]}};return{atomName:"Test_Set02_BehaviorOvertime",atomStaticKey:"set02_behaviorOvertime",atomRevision:0,description:"",content:JSON.stringify(t)}}},238:(e,t,o)=>{const n=o(332),a=o(771),r=o(796),s=o(172),i=o(280),d=o(227),c=o(630),l=o(878);e.exports=e=>[n(e),a(e),r(e),s(e),i(e),d(e),c(e),l(e)]},584:e=>{e.exports=e=>[{atomName:"Apple",atomStaticKey:"apple",atomRevision:0,productCode:"test-001",productPrice:1200},{atomName:"Pear",atomStaticKey:"pear",atomRevision:0,productCode:"test-002",productPrice:1e3},{atomName:"Banana",atomStaticKey:"banana",atomRevision:0,productCode:"test-003",productPrice:1300}]},1:e=>{e.exports=e=>{const t=e.meta.mockUtil.parseInfoFromPackage(__dirname);return[{atomName:"Create Purchase Order",atomStaticKey:"createPurchaseOrder",atomRevision:0,atomCategoryId:"a-base:menu.Create",resourceType:"a-base:menu",resourceConfig:JSON.stringify({module:t.relativeName,atomClassName:"purchaseOrder",atomAction:"create"}),resourceRoles:"authenticated"},{atomName:"Purchase Order List",atomStaticKey:"listPurchaseOrder",atomRevision:0,atomCategoryId:"a-base:menu.List",resourceType:"a-base:menu",resourceConfig:JSON.stringify({module:t.relativeName,atomClassName:"purchaseOrder",atomAction:"read"}),resourceRoles:"authenticated"},{atomName:"Create Product",atomStaticKey:"createProduct",atomRevision:0,atomCategoryId:"a-base:menu.Create",resourceType:"a-base:menu",resourceConfig:JSON.stringify({module:t.relativeName,atomClassName:"product",atomAction:"create"}),resourceRoles:"authenticated"},{atomName:"Product List",atomStaticKey:"listProduct",atomRevision:0,atomCategoryId:"a-base:menu.List",resourceType:"a-base:menu",resourceConfig:JSON.stringify({module:t.relativeName,atomClassName:"product",atomAction:"read"}),resourceRoles:"authenticated"}]}},623:e=>{e.exports=e=>{const t={};return t.productCode={async:!0,type:"string",errors:!0,compile:function(){return async function(t){if(!t)return!0;const o=this;if(!o.meta||!o.meta.validateHost)return!0;const n=o.meta.validateHost.key.atomId,a=await o.model.queryOne("\n          select a.id from aAtom a\n            left join testFlowProduct b on a.id=b.atomId\n              where a.atomStage=0 and a.iid=? and a.deleted=0 and b.productCode=?\n          ",[o.instance.id,t]);if(a&&a.id!==n){const t=[{keyword:"x-productCode",params:[],message:o.text("Product Code Exists")}];throw new e.meta.ajv.ValidationError(t)}return!0}}},t}},908:e=>{e.exports=e=>({product:{type:"object",properties:{atomName:{type:"string",ebType:"text",ebTitle:"Product Name",notEmpty:!0},productCode:{type:"string",ebType:"text",ebTitle:"Product Code",notEmpty:!0,"x-productCode":!0},productPrice:{type:"number",ebType:"text",ebTitle:"Product Price",ebCurrency:!0}}},productSearch:{type:"object",properties:{productCode:{type:"string",ebType:"text",ebTitle:"Product Code"}}}})},261:e=>{e.exports=e=>{const t=e.meta.mockUtil.parseInfoFromPackage(__dirname),o={};return o.purchaseOrder={type:"object",properties:{__groupBasicInfo:{ebType:"group-flatten",ebTitle:"Basic Info"},atomName:{type:"string",ebType:"text",ebTitle:"Name",notEmpty:!0},description:{type:"string",ebType:"text",ebTitle:"Description"},_flowDefKey:{type:"string",ebType:"select",ebTitle:"Flow Definition",ebOptionsBlankAuto:!0,ebOptions:[{title:"Test_Set01_StartEvent_Atom",value:"set01_startEventAtom"},{title:"Test_Set01_Atom_UserTask",value:"set01_atomUserTask"},{title:"Test_Set01_Atom_AssigneesConfirmation",value:"set01_atomAssigneesConfirmation"}],notEmpty:!0},__groupStats:{ebType:"group-flatten",ebTitle:"Details Stats"},detailsCount:{type:"number",ebType:"detailsStat",ebTitle:"Quantity",ebParams:{detailClass:{module:t.relativeName,detailClassName:"default"},expression:"details.length"},ebReadOnly:!0},detailsAmount:{type:"number",ebType:"detailsStat",ebTitle:"Amount",ebParams:{detailClass:{module:t.relativeName,detailClassName:"default"},expression:"details.reduce(function(a,b){return a+b.amount;},0)"},ebAutoSubmit:!0,ebCurrency:!0,ebReadOnly:!0},__groupDetails:{ebType:"group-flatten",ebTitle:"Details",ebGroupWhole:!0,ebParams:{titleHidden:!0}},details:{ebType:"details",ebTitle:"Details",ebParams:{detailClass:{module:t.relativeName,detailClassName:"default"}},ebDisplay:{expression:"!!_flowDefKey",dependencies:["_flowDefKey"]}}}},o.purchaseOrderSearch={type:"object",properties:{description:{type:"string",ebType:"text",ebTitle:"Description"}}},o}},809:e=>{e.exports=e=>{const t={},o={expression:"!!detailCodeId",dependencies:["detailCodeId"]};return t.purchaseOrderDetail={type:"object",properties:{detailCodeId:{type:"number"},detailCode:{type:"string",ebType:"atom",ebTitle:"Product Code",ebParams:{target:"_self",atomClass:{module:"test-flow",atomClassName:"product"},selectOptions:{},atomId:"detailCodeId",mapper:{detailCodeId:"atomId",detailCode:"productCode",detailName:"atomName",price:"productPrice"}},notEmpty:!0},detailName:{type:"string",ebType:"text",ebTitle:"Product Name",notEmpty:!0,ebDisplay:o},price:{type:"number",ebType:"text",ebTitle:"Price",ebCurrency:!0,ebDisplay:o},quantity:{type:"number",ebType:"text",ebTitle:"Quantity",ebDisplay:o},amount:{type:"number",ebType:"text",ebTitle:"Amount",ebComputed:{expression:"price * quantity",dependencies:"price,quantity"},ebCurrency:!0,ebReadOnly:!0,ebDisplay:o}}},t}},326:(e,t,o)=>{const n=o(908),a=o(261),r=o(809);e.exports=e=>{const t={};return Object.assign(t,n(e)),Object.assign(t,a(e)),Object.assign(t,r(e)),t}},712:e=>{e.exports=e=>{class t extends e.Controller{async start(){const e=await this.ctx.bean.flow.startByKey({flowDefKey:this.ctx.request.body.flowDefKey,flowVars:this.ctx.request.body.flowVars,flowUserId:this.ctx.state.user.op.id});this.ctx.success({flowId:e.context._flowId})}}return t}},691:(e,t,o)=>{const n=o(712);e.exports=e=>({flow:n})},312:(e,t,o)=>{const n=o(817),a=o(266),r=o(971);e.exports=e=>{const t=o(129)(e),s=o(313)(e),i=o(788)(e),d=o(691)(e),c=o(481)(e),l=o(700)(e),m=o(730)(e);return{aops:t,beans:s,routes:i,controllers:d,services:c,models:l,config:n,locales:a,errors:r,meta:m}}},730:(e,t,o)=>{const n=o(638)("extend2");e.exports=e=>{const t={},a=o(623)(e),r=o(326)(e),s=o(238)(e),i=o(1)(e),d=o(584)(e);return n(!0,t,{base:{atoms:{purchaseOrder:{info:{bean:"purchaseOrder",title:"Purchase Order",tableName:"testFlowPurchaseOrder",details:["default"]},actions:{},validator:"purchaseOrder",search:{validator:"purchaseOrderSearch"}},product:{info:{bean:"product",title:"Product",tableName:"testFlowProduct"},actions:{},validator:"product",search:{validator:"productSearch"}}},statics:{"a-flow.flowDef":{items:s},"a-base.resource":{items:i},"test-flow.product":{items:d}}},detail:{details:{default:{info:{bean:"purchaseOrder",title:"Details",tableName:"testFlowPurchaseOrderDetail"},actions:{},validator:"purchaseOrderDetail"}}},validation:{validators:{purchaseOrder:{schemas:"purchaseOrder"},purchaseOrderSearch:{schemas:"purchaseOrderSearch"},product:{schemas:"product"},productSearch:{schemas:"productSearch"},purchaseOrderDetail:{schemas:"purchaseOrderDetail"}},keywords:{"x-productCode":a.productCode},schemas:r},index:{indexes:{testFlowProduct:"createdAt,updatedAt,atomId,productCode",testFlowPurchaseOrder:"createdAt,updatedAt,atomId",testFlowPurchaseOrderDetail:"createdAt,updatedAt,atomId,detailId"}}}),t}},54:e=>{e.exports=e=>{class t extends e.meta.Model{constructor(e){super(e,{table:"testFlowProduct",options:{disableDeleted:!1}})}}return t}},503:e=>{e.exports=e=>{class t extends e.meta.Model{constructor(e){super(e,{table:"testFlowPurchaseOrder",options:{disableDeleted:!1}})}}return t}},65:e=>{e.exports=e=>{class t extends e.meta.Model{constructor(e){super(e,{table:"testFlowPurchaseOrderDetail",options:{disableDeleted:!1}})}}return t}},700:(e,t,o)=>{const n=o(54),a=o(503),r=o(65);e.exports=e=>({product:n,purchaseOrder:a,purchaseOrderDetail:r})},788:e=>{e.exports=e=>{let t=[];return t=t.concat([{method:"post",path:"flow/start",controller:"flow",middlewares:"test"}]),t}},481:e=>{e.exports=e=>({})},295:e=>{e.exports="\nclass Listener {\n  constructor(context) {\n    this.context = context;\n  }\n\n  async onNodeBegin(contextNode) {\n    if (contextNode._nodeDef.id === 'activity_1') {\n      this.context.vars.set('echo', 'hello');\n    }\n  }\n\n  async onNodeDoing(contextNode) {\n    if (contextNode._nodeDef.id === 'activity_2') {\n      // execute activity service\n      const res = await contextNode.utils.executeService({\n        bean: {\n          module: 'test-flow',\n          name: 'test',\n        },\n        parameter: 'hello world',\n      });\n      assert.equal(res, 'hello world');\n    }\n  }\n\n  async onNodeEnd(contextNode) {\n    if (contextNode._nodeDef.id === 'activity_1') {\n      const echo = contextNode.vars.get('echo');\n      assert.equal(echo, 'hello');\n    }\n  }\n}\n"},770:e=>{e.exports="\nclass Listener {\n  constructor(context) {\n    this.context = context;\n  }\n\n  async onNodeEnter(contextNode) {\n    const x = this.context.vars.get('x');\n    if (contextNode._nodeDef.id === 'startEvent_1') {\n      // nodeVars\n      contextNode.vars.set('x', x);\n    }\n    if (contextNode._nodeDef.id === 'endEvent_1') {\n      // assert\n      assert.equal(x, '1');\n    }\n    if (contextNode._nodeDef.id === 'endEvent_2') {\n      // assert\n      assert.equal(x, '2');\n    }\n  }\n}\n"},526:e=>{e.exports="\nclass Listener {\n  constructor(context) {\n    this.context = context;\n  }\n\n  async onFlowStart(options) {\n    console.log('onFlowStart: ', options.startEventId);\n    // flowVars\n    const xyz = this.context.vars.get('x.y.z');\n    assert.equal(xyz, undefined);\n    this.context.vars.set('x.y.z', 'flow');\n  }\n\n  async onFlowEnd(options) {\n    console.log('onFlowEnd: ', options && options.flowRemark);\n    // flowVars\n    const xyz = this.context.vars.get('x.y.z');\n    assert.equal(xyz, 'flow');\n  }\n\n  async onNodeEnter(contextNode) {\n    console.log('onNodeEnter: ', contextNode._nodeDef.id);\n    // nodeVars\n    const xyz = contextNode.vars.get('x.y.z');\n    assert.equal(xyz, undefined);\n    contextNode.vars.set('x.y.z', contextNode._nodeDef.id);\n  }\n\n  async onNodeBegin(contextNode) {\n    console.log('onNodeBegin: ', contextNode._nodeDef.id);\n  }\n\n  async onNodeDoing(contextNode) {\n    console.log('onNodeDoing: ', contextNode._nodeDef.id);\n  }\n\n  async onNodeEnd(contextNode) {\n    console.log('onNodeEnd: ', contextNode._nodeDef.id);\n  }\n\n  async onNodeLeave(contextNode) {\n    console.log('onNodeLeave: ', contextNode._nodeDef.id);\n    // nodeVars\n    const xyz = contextNode.vars.get('x.y.z');\n    assert.equal(xyz, contextNode._nodeDef.id);\n  }\n\n  async onEdgeEnter(contextEdge, contextNode) {\n    console.log('onEdgeEnter: ', contextEdge._edgeDef.id, ' from node: ', contextNode._nodeDef.id);\n  }\n\n  async onEdgeTake(contextEdge, contextNode) {\n    console.log('onEdgeTake: ', contextEdge._edgeDef.id, ' from node: ', contextNode._nodeDef.id);\n  }\n\n  async onEdgeLeave(contextEdge, contextNode) {\n    console.log('onEdgeLeave: ', contextEdge._edgeDef.id, ' from node: ', contextNode._nodeDef.id);\n  }\n\n  getNodeDefOptions(contextNode /* { options }*/) {\n    console.log('getNodeDefOptions: ', contextNode._nodeDef.id);\n  }\n}\n"},12:e=>{e.exports="\nclass Listener {\n  constructor(context) {\n    this.context = context;\n  }\n\n  async onNodeEnter(contextNode) {\n    if (contextNode._nodeDef.id === 'startEvent_1') {\n      const _flowDefKey = this.context.atom._flowDefKey;\n      assert.equal(_flowDefKey, 'set01_atomUserTask');\n    }\n  }\n\n  async onTaskCreated(contextTask, contextNode) {\n    console.log('onTaskCreated: ', contextTask._flowTaskId, ' of node: ', contextNode._nodeDef.id);\n  }\n\n  async onTaskClaimed(contextTask, contextNode) {\n    console.log('onTaskClaimed: ', contextTask._flowTaskId, ' of node: ', contextNode._nodeDef.id);\n  }\n\n  async onTaskCompleted(contextTask, contextNode) {\n    console.log('onTaskCompleted: ', contextTask._flowTaskId, ' of node: ', contextNode._nodeDef.id);\n    console.log(\n      'handleStatus: %d, handleRemark: %s',\n      contextTask._flowTask.handleStatus,\n      contextTask._flowTask.handleRemark\n    );\n  }\n\n  async getSchemaRead(contextTask, contextNode /* { schemaBase, schema }*/) {\n    console.log('getSchemaRead: ', contextTask._flowTaskId, ' of node: ', contextNode._nodeDef.id);\n  }\n\n  async getSchemaWrite(contextTask, contextNode /* { schemaBase, schema }*/) {\n    console.log('getSchemaWrite: ', contextTask._flowTaskId, ' of node: ', contextNode._nodeDef.id);\n  }\n\n  getNodeDefOptions(contextNode /* { options }*/) {\n    console.log('getNodeDefOptions: ', contextNode._nodeDef.id);\n  }\n}\n"},463:e=>{e.exports="\nclass Listener {\n  constructor(context) {\n    this.context = context;\n  }\n\n  async onNodeEnter(contextNode) {\n    if (contextNode._nodeDef.id === 'startEvent_1') {\n      const _flowDefKey = this.context.atom._flowDefKey;\n      assert.equal(_flowDefKey, 'set01_startEventAtom');\n    }\n  }\n}\n"},638:e=>{"use strict";e.exports=require("require3")}},t={},o=function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}(312);module.exports=o})();