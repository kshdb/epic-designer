import{b as y,d as E}from"./index.2d2a777d.js";import{E as V}from"./index.01187670.js";import{i as w,r as o,w as n,m as C,W as t,H as j}from"../app.b200646e.js";import"./index-bff0902e.b584476c.js";import"./index.c4658a99.js";import"./isEqual.b6b3e710.js";import"./use-global-config.54b6a351.js";import"./debounce.e446b4c7.js";const L=w({props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(p,{emit:m,attrs:d}){const a=o([]),r=o(""),i=o(!1),s=e=>{i.value=e};n(a,e=>{m("update:modelValue",e)}),n(()=>p.modelValue,e=>{if(e!=null&&e.length>0&&a.value!=null){if(a.value===e)return;a.value.length=0,a.value.push(...e)}},{deep:!0,immediate:!0});const c=(e,l)=>{j(()=>{a.value=l})},g=(e,l,u)=>{console.log(u)},f=(e,l,u)=>{E.error("\u4E0A\u4F20\u5931\u8D25"),console.error(e)},v=e=>{},h=C(()=>({...d,"file-list":a.value,"list-type":"picture-card",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",onBeforeUpload:v,onChange:c,onSuccess:g,onError:f,onPreview:x})),x=e=>{e.url&&(r.value=e.url,s(!0))};return()=>t("div",{class:"epic-upload-image"},{default:()=>[t(y,h.value,{default:()=>[t("div",{style:{"text-align":"center"}},{default:()=>[t("span",{class:"iconfont epic-icon-shangchuan1 text-md",style:{"margin-right":"2px"}}),t("div",{class:"ant-upload-text"},{default:()=>"\u70B9\u51FB\u4E0A\u4F20"})]})]}),(()=>{if(i.value)return t(V,{urlList:[r.value],onClose:()=>{s(!1)}})})()]})}});export{L as default};