import{q as p}from"./index.92ed74e6.63b58c62.js";import"../guide_components_k-designer.md.7bfd4eea.js";import{f as i,E as l,B as o}from"../app.b39b64a1.js";import"./constants.7f69fb4e.5347f8e9.js";const u=i({props:{record:{type:Object,require:!0},children:{type:Array}},setup(e,{attrs:s,slots:t}){return()=>{const r={...e.record,title:e.record.label},d=r.children;return delete r.children,l(p,r,{default:()=>o(t,"edit-node",{},()=>d.map(n=>o(t,"node",{record:n})))})}}});export{u as default};