import{F as r,I as i,l as u}from"./index-3519e374.9c71cf1c.js";import{s as m}from"./plugin-vue_export-helper-dad06003.1d61e2b9.js";import{e as f,r as p,j as N,w as k,a0 as h,o as v,c as _,d as g,u as n}from"../app.9ec52d9f.js";const y={class:"epic-sound-code"},E=f({__name:"index",setup(w){const c=r.getComponent("monacoEditor"),s=p(null),a=N("designer");let o={};k(()=>a.state.checkedNode,e=>{var t;i(o,h(e))||(t=s.value)==null||t.setValue(JSON.stringify(e,null,2))},{deep:!0});const d=JSON.stringify(a.state.checkedNode,null,2);function l(e){if(!a.state.checkedNode)return!1;o=JSON.parse(e),u(a.state.checkedNode,o)}return(e,t)=>(v(),_("div",y,[g(n(c),{ref_key:"monacoEditorRef",ref:s,class:"editor","model-value":n(d),"onUpdate:modelValue":l},null,8,["model-value"])]))}}),J=m(E,[["__scopeId","data-v-aa433531"]]);export{J as default};