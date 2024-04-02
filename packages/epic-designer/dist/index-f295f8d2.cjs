"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),v=require("./index-fd05cfbe.cjs"),x=e.defineComponent({__name:"index",props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(p,{emit:r}){const i=v.pluginManager.getComponent("input"),d=v.pluginManager.getComponent("select"),s=p,m=r,u=e.ref(null),t=e.ref("px"),c=[{label:"px",value:"px"},{label:"%",value:"%"},{label:"vw",value:"vw"},{label:"vh",value:"vh"},{label:"rem",value:"rem"},{label:"em",value:"em"},{label:"pt",value:"pt"}];e.watch(()=>s.modelValue,o=>{const l=parseFloat(o);if(isNaN(l))return u.value=null,!1;const a=/^(\d+(\.\d+)?)(px|%|vw|vh|rem|em|pt){1}$/,n=o.trim().match(a);u.value=(n==null?void 0:n[1])??null,t.value=(n==null?void 0:n[3])??""},{immediate:!0}),e.watch(()=>t.value+u.value,()=>{f()});function f(){e.nextTick(()=>m("update:modelValue",u.value?u.value+t.value:void 0))}return(o,l)=>(e.openBlock(),e.createBlock(e.unref(i),{class:"epic-input-size",modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=a=>u.value=a),value:u.value,"onUpdate:value":l[3]||(l[3]=a=>u.value=a),type:"number",min:"0",placeholder:"请输入"},{suffix:e.withCtx(()=>[e.createVNode(e.unref(d),{value:t.value,"onUpdate:value":l[0]||(l[0]=a=>t.value=a),modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=a=>t.value=a),style:{width:"68px"},options:c},null,8,["value","modelValue"])]),_:1},8,["modelValue","value"]))}});exports.default=x;
