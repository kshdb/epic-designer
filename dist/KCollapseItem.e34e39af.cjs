"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),c=require("./useElementPlus.721bc6f7.cjs");require("./isEqual.d1a2291f.cjs");require("./index.fd46c3da.cjs");const o=e.defineComponent({props:{record:{type:Object,require:!0},children:{type:Array}},setup(t,{attrs:u,slots:d}){return()=>{const r={...t.record,title:t.record.label},l=r.children;return delete r.children,e.h(c.ElCollapseItem,r,{default:()=>e.renderSlot(d,"edit-node",{},()=>l.map(n=>e.renderSlot(d,"node",{record:n})))})}}});exports.default=o;