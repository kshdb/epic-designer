import{ba as w}from"./index.52d9511d.js";import{i as D,r as p,k as _,j,p as B,b as E,m as d,o as f,c as v,e as F,v as O,B as h,y as P,u as $,C as L,F as M,E as N}from"../app.c1700df1.js";const V={key:0,class:"form-main",style:{height:"100%"}},z=D({__name:"form",props:{componentSchema:{type:Object,require:!0,default:()=>({})}},setup(y,{expose:b}){const a=p(null),r=_("forms",{}),S=p(!0),l=j({});B("formData",l);const n=y;function s(){return l}function m(e){Object.assign(l,e)}function g(){var e;return(e=a.value)==null?void 0:e.validate()}E(async()=>{var u,i;var e,t,o,c;if(((e=n.componentSchema)==null?void 0:e.type)==="form"&&r.value&&a.value){const k=(i=(u=(o=(t=n.componentSchema)==null?void 0:t.componentProps)==null?void 0:o.name)!=null?u:(c=n.componentSchema)==null?void 0:c.name)!=null?i:"default";return r.value[k]=a.value,a.value.getData=s,a.value.setData=m,!1}});const C=d(()=>{const e=n.componentSchema.componentProps;let t=e.labelCol,o=e.wrapperCol;return e.labelLayout==="fixed"&&(t={style:`width:${e.labelWidth}px`},o={style:"width:auto;flex:1"}),{...e,labelCol:t,wrapperCol:o}}),x=d(()=>{var e;return(e=n.componentSchema.children)!=null?e:[]});return b({form:a,getData:s,setData:m,validate:g}),(e,t)=>S.value?(f(),v("div",V,[F($(w),P({ref_key:"form",ref:a,model:l},C.value,{style:{height:"100%"}}),{default:O(()=>[h(e.$slots,"edit-node",{},()=>[(f(!0),v(M,null,N(x.value,o=>h(e.$slots,"node",{componentSchema:o})),256))])]),_:3},16,["model"])])):L("",!0)}});export{z as default};