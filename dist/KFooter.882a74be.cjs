"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),d=require("./index.89664b5e.cjs");require("./revoke.800898d2.cjs");const i={class:"k-footer"},u={class:"left"},m={key:0},p=["onClick","onMouseenter"],k=e.createElementVNode("div",{class:"right"},[e.createElementVNode("div",{class:"author"}," kcz "),e.createElementVNode("div",{class:"package-name"}," k-designer ")],-1),_=e.defineComponent({__name:"KFooter",setup(f){const t=e.inject("designer");function a(o){t.setCheckedNode(o)}return(o,r)=>(e.openBlock(),e.createElementBlock("header",i,[e.createElementVNode("div",u,[e.createElementVNode("div",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(t).state.matched,(n,s)=>{var c;return e.openBlock(),e.createElementBlock("span",{key:s},[s!==0?(e.openBlock(),e.createElementBlock("span",m," > ")):e.createCommentVNode("",!0),e.createElementVNode("span",{class:"node-item",onClick:l=>a(n),onMouseenter:e.withModifiers(l=>e.unref(t).setHoverNode(n),["stop"]),onMouseleave:r[0]||(r[0]=e.withModifiers(l=>e.unref(t).setHoverNode(null),["stop"]))},e.toDisplayString((c=e.unref(d.pluginManager).getComponentConfingByType(n.type))==null?void 0:c.defaultSchema.label),41,p)])}),128))])]),k]))}});exports.default=_;