"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),u=require("./index.89664b5e.cjs");require("./revoke.800898d2.cjs");const d={key:0,class:"k-right-sidebar"},m={class:"actions-container"},k=["title","onClick"],_={class:"sidebar-content"},p=e.defineComponent({__name:"KRightSidebar",setup(h){var a;const r=u.pluginManager.getRightSidebars(),t=e.ref(0),n=e.shallowRef(null);n.value=(a=r[0])==null?void 0:a.component;function i(s,o){if(t.value===o)return!1;n.value=s.component,t.value=o}return(s,o)=>e.unref(n)?(e.openBlock(),e.createElementBlock("div",d,[e.createElementVNode("ul",m,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r),(l,c)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(["action-item",{checked:t.value===c}]),title:l.title,key:c,onClick:v=>i(l,c)},e.toDisplayString(l.title),11,k))),128))]),e.createElementVNode("div",_,[e.createElementVNode("aside",{class:e.normalizeClass({hide:t.value===null})},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(n))))],2)])])):e.createCommentVNode("",!0)}});exports.default=p;