import{Y as u,Z as C,q as U,T as B}from"./index.0d4f5749.js";import{i as g,k as i,m as c,o as d,c as l,t as h,u as p,C as E}from"../app.b200646e.js";const N={class:"epic-event-view"},M={key:0},T=g({__name:"eventView",setup(V){const v=i("pageSchema"),a=i("designer"),m=u.getComponent("EActionEditor"),f=u.getComponentConfings(),o=c(()=>a.state.checkedNode),b=c(()=>{var s,r;var t,e;const n=[{title:"\u751F\u547D\u5468\u671F",events:[{type:"vnodeBeforeMount",describe:"beforeMount"},{type:"vnodeMounted",describe:"mounted"},{type:"vnodeBeforeUpdate",describe:"beforeUpdate"},{type:"vnodeUpdated",describe:"updated"},{type:"vnodeBeforeUnmount",describe:"beforeUnmount"},{type:"vnodeUnmounted",describe:"unmounted"},{type:"vnodeErrorCaptured",describe:"errorCaptured"}]}],k=(r=(e=f[(s=(t=a.state.checkedNode)==null?void 0:t.type)!=null?s:""])==null?void 0:e.config.event)!=null?r:[];return n.unshift({title:"\u7EC4\u4EF6\u4E8B\u4EF6",events:k}),n});function y(t,e){U(t,e,o.value),B.push(v.schemas,"\u7F16\u8F91\u7EC4\u4EF6\u5C5E\u6027")}return(t,e)=>(d(),l("aside",N,[o.value?(d(),l("div",M,[(d(),h(p(m),{key:o.value.id,"event-list":b.value,"model-value":p(C)("on",o.value),"onUpdate:modelValue":e[0]||(e[0]=n=>y(n,"on"))},null,8,["event-list","model-value"]))])):E("",!0)]))}});export{T as default};
