import{E as c}from"./index.7077cecc.js";import{i as s,B as t,W as h}from"../app.b200646e.js";import"./index-bff0902e.b584476c.js";const b=s({props:{componentSchema:{type:Object,required:!0,default:()=>({})}},setup(n,{attrs:i,slots:e}){return()=>{var d,m;var a;const o={...n.componentSchema,header:(d=(a=n.componentSchema)==null?void 0:a.label)!=null?d:""},l=(m=o.children)!=null?m:[];delete o.children;let r=null;return l.length?r=()=>l.map(p=>t(e,"node",{componentSchema:p})):r=()=>[t(e,"default")],h(c,o,{default:()=>t(e,"edit-node",{},r),header:()=>t(e,"header")})}}});export{b as default};
