/*! 
 Build based on gin-vue-admin 
 Time : 1658215646000 */
var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,u=(e,l,a)=>new Promise(((t,o)=>{var u=e=>{try{s(a.next(e))}catch(l){o(l)}},r=e=>{try{s(a.throw(e))}catch(l){o(l)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(u,r);s((a=a.apply(e,l)).next())}));import{s as r,u as s,r as n,b as d,o as i,c as p,d as m,e as c,w as v,f as g,F as f,z as y,h,i as b,q as V,t as _}from"../gva/gin-vue-admin-index.1658215646000.js";import{t as w}from"./gin-vue-admin-stringFun.1658215646000.js";const k=e=>r({url:"/sysHotels/createSysHotels",method:"post",data:e}),C={class:"gva-search-box"},x=h("查询"),z=h("重置"),H={class:"gva-table-box"},U={class:"gva-btn-list"},S=h("新增"),I=m("p",null,"确定要删除吗？",-1),D={style:{"text-align":"right","margin-top":"8px"}},j=h("取消"),q=h("确定"),O=h("删除"),T=h("详情"),A=h("编辑"),P=h("删除"),F={class:"gva-pagination"},L=m("div",{style:{margin:"15px 0"}},null,-1),B={key:0,class:"dialog-footer"},E=h("取 消"),K=h("确 定"),R={name:"HotelList"},$=Object.assign(R,{setup(e){const R=s(),$=n([]),G=n(null),J=n({name:"",platform:[],manager:"",settlementType:"",transferAccount:"",signatory:"",phone:"",mark:""}),M=n({name:[{required:!0,message:"请输入酒店名称",trigger:"blur"}],platform:[{required:!0,message:"请选择登陆平台",trigger:"blur"}],manager:[{required:!0,message:"请输入经理姓名",trigger:"blur"}],settlementType:[{required:!0,message:"请输入结算方式",trigger:"blur"}],transferAccount:[{required:!0,message:"请输入转款账户",trigger:"blur"}],signatory:[{required:!0,message:"请输入签约人",trigger:"blur"}],phone:[{required:!0,message:"请输入催单电话",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"手机号码有误",trigger:"blur"}]}),N=n(["携程","飞猪","美团"]),Q=e=>{console.log(e)},W=n(1),X=n(0),Y=n(10),Z=n([]),ee=n({}),le=n(!1),ae=()=>{ee.value={},re()},te=()=>{W.value=1,Y.value=10,re()},oe=e=>{Y.value=e,re()},ue=e=>{W.value=e,re()},re=()=>u(this,null,(function*(){const e=yield(u=((e,u)=>{for(var r in u||(u={}))a.call(u,r)&&o(e,r,u[r]);if(l)for(var r of l(u))t.call(u,r)&&o(e,r,u[r]);return e})({page:W.value,pageSize:Y.value},ee.value),r({url:"/sysHotels/getSysHotelsList",method:"get",params:u}));var u;0===e.code&&(Z.value=e.data.list,X.value=e.data.total,W.value=e.data.page,Y.value=e.data.pageSize)}));re();const se=n(!1),ne=n(""),de=e=>u(this,null,(function*(){const l=yield(a={ID:e.ID},r({url:"/sysHotels/findSysHotels",method:"get",params:a}));var a;ne.value="update",0===l.code&&(J.value=l.data.resysHotels,se.value=!0,le.value=!0)})),ie=e=>u(this,null,(function*(){yield R.push({name:"hotelRoomCost",params:{id:e.ID,name:e.name}})})),pe=()=>{G.value.resetFields(),J.value={name:"",platform:[],manager:"",settlementType:"",transferAccount:"",signatory:"",phone:"",mark:""},se.value=!1},me=e=>u(this,null,(function*(){e.visible=!1;var l;0===(yield(l={ID:e.ID},r({url:"/sysHotels/deleteSysHotels",method:"delete",data:l}))).code&&(b({type:"success",message:"删除成功"}),1===Z.value.length&&W.value>1&&W.value--,re())})),ce=({prop:e,order:l})=>{e&&("ID"===e&&(e="id"),ee.value.orderKey=w(e),ee.value.desc="descending"===l),re()},ve=e=>{$.value=e},ge=n(!1),fe=()=>u(this,null,(function*(){const e=$.value.map((e=>e.ID)),l=yield(a={ids:e},r({url:"/sysHotels/deleteSysHotelsByIds",method:"delete",data:a}));var a;0===l.code&&(b({type:"success",message:l.msg}),Z.value.length===e.length&&W.value>1&&W.value--,ge.value=!1,re())})),ye=()=>u(this,null,(function*(){G.value.validate((e=>u(this,null,(function*(){if(e){let e;switch(ne.value){case"create":default:e=yield k(J.value);break;case"update":e=yield(l=J.value,r({url:"/sysHotels/updateSysHotels",method:"post",data:l}))}0===e.code&&(pe(),re())}var l}))))})),he=()=>{ne.value="create",se.value=!0,le.value=!0};return(e,l)=>{const a=d("el-input"),t=d("el-form-item"),o=d("el-button"),u=d("el-form"),r=d("el-popover"),s=d("el-table-column"),n=d("el-table"),b=d("el-pagination"),w=d("el-checkbox"),k=d("el-checkbox-group"),R=d("el-dialog");return i(),p("div",null,[m("div",C,[c(u,{ref:"searchForm",inline:!0,model:ee.value},{default:v((()=>[c(t,{label:"酒店名称"},{default:v((()=>[c(a,{modelValue:ee.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>ee.value.name=e),placeholder:"酒店名称"},null,8,["modelValue"])])),_:1}),c(t,{label:"经理电话"},{default:v((()=>[c(a,{modelValue:ee.value.phone,"onUpdate:modelValue":l[1]||(l[1]=e=>ee.value.phone=e),placeholder:"经理电话"},null,8,["modelValue"])])),_:1}),c(t,{label:"签约人"},{default:v((()=>[c(a,{modelValue:ee.value.signatory,"onUpdate:modelValue":l[2]||(l[2]=e=>ee.value.signatory=e),placeholder:"签约人"},null,8,["modelValue"])])),_:1}),c(t,null,{default:v((()=>[c(o,{size:"small",type:"primary",icon:"search",onClick:te},{default:v((()=>[x])),_:1}),c(o,{size:"small",icon:"refresh",onClick:ae},{default:v((()=>[z])),_:1})])),_:1})])),_:1},8,["model"])]),m("div",H,[m("div",U,[c(o,{size:"small",type:"primary",icon:"plus",onClick:he},{default:v((()=>[S])),_:1}),c(r,{visible:ge.value,"onUpdate:visible":l[5]||(l[5]=e=>ge.value=e),placement:"top",width:"160"},{reference:v((()=>[c(o,{icon:"delete",size:"small",disabled:!$.value.length,style:{"margin-left":"10px"},onClick:l[4]||(l[4]=e=>ge.value=!0)},{default:v((()=>[O])),_:1},8,["disabled"])])),default:v((()=>[I,m("div",D,[c(o,{size:"small",type:"text",onClick:l[3]||(l[3]=e=>ge.value=!1)},{default:v((()=>[j])),_:1}),c(o,{size:"small",type:"primary",onClick:fe},{default:v((()=>[q])),_:1})])])),_:1},8,["visible"])]),c(n,{ref:"multipleTable",data:Z.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSortChange:ce,onSelectionChange:ve},{default:v((()=>[c(s,{type:"selection",width:"55"}),c(s,{align:"left",label:"id","min-width":"60",prop:"ID"}),c(s,{label:"酒店名称",prop:"name",width:"180"}),c(s,{label:"签约人",prop:"signatory",width:"120"}),c(s,{label:"上架平台",prop:"platform",width:"120"}),c(s,{label:"酒店经理姓名",prop:"manager",width:"120"}),c(s,{label:"电话",prop:"phone",width:"120"}),c(s,{label:"按钮组","min-width":"160"},{default:v((e=>[c(o,{icon:"document",size:"small",type:"text",onClick:l=>ie(e.row)},{default:v((()=>[T])),_:2},1032,["onClick"]),c(o,{icon:"edit",size:"small",type:"text",onClick:l=>de(e.row)},{default:v((()=>[A])),_:2},1032,["onClick"]),c(o,{icon:"delete",size:"small",type:"text",onClick:l=>me(e.row)},{default:v((()=>[P])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),m("div",F,[c(b,{"current-page":W.value,"page-size":Y.value,"page-sizes":[10,30,50,100],total:X.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:ue,onSizeChange:oe},null,8,["current-page","page-size","total"])])]),c(R,{modelValue:se.value,"onUpdate:modelValue":l[14]||(l[14]=e=>se.value=e),"before-close":pe,title:"新增酒店"},{footer:v((()=>[le.value?(i(),p("div",B,[c(o,{onClick:pe},{default:v((()=>[E])),_:1}),c(o,{type:"primary",onClick:ye},{default:v((()=>[K])),_:1})])):g("",!0)])),default:v((()=>[c(u,{ref_key:"formData",ref:G,model:J.value,rules:M.value,size:"medium","label-width":"100px","label-position":"left"},{default:v((()=>[c(t,{label:"酒店名称",prop:"name"},{default:v((()=>[c(a,{modelValue:J.value.name,"onUpdate:modelValue":l[6]||(l[6]=e=>J.value.name=e),placeholder:"请输入酒店名",maxlength:20,"show-word-limit":"",clearable:"",style:{width:"85%"}},null,8,["modelValue"])])),_:1}),c(t,{label:"登陆平台",prop:"platform"},{default:v((()=>[L,c(k,{modelValue:J.value.platform,"onUpdate:modelValue":l[7]||(l[7]=e=>J.value.platform=e),onChange:Q},{default:v((()=>[(i(!0),p(f,null,y(N.value,(e=>(i(),V(w,{key:e,label:e},{default:v((()=>[h(_(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(t,{label:"经理姓名",prop:"manager"},{default:v((()=>[c(a,{modelValue:J.value.manager,"onUpdate:modelValue":l[8]||(l[8]=e=>J.value.manager=e),placeholder:"请输入经理姓名",clearable:"",style:{width:"85%"}},null,8,["modelValue"])])),_:1}),c(t,{label:"结算方式",prop:"settlementType"},{default:v((()=>[c(a,{modelValue:J.value.settlementType,"onUpdate:modelValue":l[9]||(l[9]=e=>J.value.settlementType=e),placeholder:"请输入结算方式",clearable:"",style:{width:"85%"}},null,8,["modelValue"])])),_:1}),c(t,{label:"转款账户",prop:"transferAccount"},{default:v((()=>[c(a,{modelValue:J.value.transferAccount,"onUpdate:modelValue":l[10]||(l[10]=e=>J.value.transferAccount=e),placeholder:"请输入转款账户",clearable:"",style:{width:"85%"}},null,8,["modelValue"])])),_:1}),c(t,{label:"签约人",prop:"signatory"},{default:v((()=>[c(a,{modelValue:J.value.signatory,"onUpdate:modelValue":l[11]||(l[11]=e=>J.value.signatory=e),placeholder:"请输入签约人",clearable:"",style:{width:"85%"}},null,8,["modelValue"])])),_:1}),c(t,{label:"催单电话",prop:"phone"},{default:v((()=>[c(a,{modelValue:J.value.phone,"onUpdate:modelValue":l[12]||(l[12]=e=>J.value.phone=e),placeholder:"请输入催单电话",clearable:"",style:{width:"85%"}},null,8,["modelValue"])])),_:1}),c(t,{label:"备注",prop:"mark"},{default:v((()=>[c(a,{modelValue:J.value.mark,"onUpdate:modelValue":l[13]||(l[13]=e=>J.value.mark=e),placeholder:"请输入备注",clearable:"",style:{width:"85%"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}});export{$ as default};
