import{M as d,j as i,e as u}from"./index.4abc0d1b.js";import{s as m}from"./plugin-vue_export-helper-dad06003.1d61e2b9.js";import{g as f,r as p,l as N,w as k,$ as v,o as g,c as h,e as _,u as n}from"../app.db33cb3d.js";const y={class:"epic-sound-code"},E=f({__name:"index",setup(w){const c=d.getComponent("monacoEditor"),s=p(null),a=N("designer");let o={};k(()=>a.state.checkedNode,e=>{var t;i(o,v(e))||(t=s.value)==null||t.setValue(JSON.stringify(e,null,2))},{deep:!0});const l=JSON.stringify(a.state.checkedNode,null,2);function r(e){if(!a.state.checkedNode)return!1;o=JSON.parse(e),u(a.state.checkedNode,o)}return(e,t)=>(g(),h("div",y,[_(n(c),{ref_key:"monacoEditorRef",ref:s,class:"editor","model-value":n(l),"onUpdate:modelValue":r},null,8,["model-value"])]))}}),O=m(E,[["__scopeId","data-v-aa433531"]]);export{O as default};