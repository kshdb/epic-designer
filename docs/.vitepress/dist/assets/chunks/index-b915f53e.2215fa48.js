import{B as l,cn as i,cj as u}from"./index.7434e67a.js";import{s as m}from"./plugin-vue_export-helper-dad06003.1d61e2b9.js";import{i as f,r as p,k,w as N,aa as v,o as h,c as _,e as g,u as s}from"../app.40ba1749.js";const y={class:"epic-sound-code"},C=f({__name:"index",setup(E){const c=l.getComponent("monacoEditor"),n=p(null),a=k("designer");let o={};N(()=>a.state.checkedNode,e=>{var t;i(o,v(e))||(t=n.value)==null||t.setValue(JSON.stringify(e,null,2))},{deep:!0});const r=JSON.stringify(a.state.checkedNode,null,2);function d(e){if(!a.state.checkedNode)return!1;o=JSON.parse(e),u(a.state.checkedNode,o)}return(e,t)=>(h(),_("div",y,[g(s(c),{ref_key:"monacoEditorRef",ref:n,class:"editor","model-value":s(r),"onUpdate:modelValue":d},null,8,["model-value"])]))}}),J=m(C,[["__scopeId","data-v-aa433531"]]);export{J as default};