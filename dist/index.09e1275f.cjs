"use strict";const e=require("vue"),o=require("./useElementPlus.721bc6f7.cjs"),E=o.buildProps({size:o.useSizeProp,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),B=o.buildProps({...E,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),g={[o.UPDATE_MODEL_EVENT]:a=>o.isString(a)||o.isNumber(a)||o.isBoolean(a),[o.CHANGE_EVENT]:a=>o.isString(a)||o.isNumber(a)||o.isBoolean(a)},y=Symbol("radioGroupKey"),R=(a,m)=>{const t=e.ref(),l=e.inject(y,void 0),d=e.computed(()=>!!l),c=e.computed({get(){return d.value?l.modelValue:a.modelValue},set(i){d.value?l.changeEvent(i):m&&m(o.UPDATE_MODEL_EVENT,i),t.value.checked=a.modelValue===a.label}}),u=o.useFormSize(e.computed(()=>l==null?void 0:l.size)),f=o.useFormDisabled(e.computed(()=>l==null?void 0:l.disabled)),r=e.ref(!1),p=e.computed(()=>f.value||d.value&&c.value!==a.label?-1:0);return{radioRef:t,isGroup:d,radioGroup:l,focus:r,size:u,disabled:f,tabIndex:p,modelValue:c}},k=["value","name","disabled"],z=e.defineComponent({name:"ElRadio"}),P=e.defineComponent({...z,props:B,emits:g,setup(a,{emit:m}){const t=a,l=o.useNamespace("radio"),{radioRef:d,radioGroup:c,focus:u,size:f,disabled:r,modelValue:p}=R(t,m);function i(){e.nextTick(()=>m("change",p.value))}return(n,s)=>{var b;return e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass([e.unref(l).b(),e.unref(l).is("disabled",e.unref(r)),e.unref(l).is("focus",e.unref(u)),e.unref(l).is("bordered",n.border),e.unref(l).is("checked",e.unref(p)===n.label),e.unref(l).m(e.unref(f))])},[e.createElementVNode("span",{class:e.normalizeClass([e.unref(l).e("input"),e.unref(l).is("disabled",e.unref(r)),e.unref(l).is("checked",e.unref(p)===n.label)])},[e.withDirectives(e.createElementVNode("input",{ref_key:"radioRef",ref:d,"onUpdate:modelValue":s[0]||(s[0]=v=>e.isRef(p)?p.value=v:null),class:e.normalizeClass(e.unref(l).e("original")),value:n.label,name:n.name||((b=e.unref(c))==null?void 0:b.name),disabled:e.unref(r),type:"radio",onFocus:s[1]||(s[1]=v=>u.value=!0),onBlur:s[2]||(s[2]=v=>u.value=!1),onChange:i},null,42,k),[[e.vModelRadio,e.unref(p)]]),e.createElementVNode("span",{class:e.normalizeClass(e.unref(l).e("inner"))},null,2)],2),e.createElementVNode("span",{class:e.normalizeClass(e.unref(l).e("label")),onKeydown:s[3]||(s[3]=e.withModifiers(()=>{},["stop"]))},[e.renderSlot(n.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(n.label),1)])],34)],2)}}});var G=o._export_sfc(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const S=o.buildProps({...E,name:{type:String,default:""}}),I=["value","name","disabled"],h=e.defineComponent({name:"ElRadioButton"}),w=e.defineComponent({...h,props:S,setup(a){const m=a,t=o.useNamespace("radio"),{radioRef:l,focus:d,size:c,disabled:u,modelValue:f,radioGroup:r}=R(m),p=e.computed(()=>({backgroundColor:(r==null?void 0:r.fill)||"",borderColor:(r==null?void 0:r.fill)||"",boxShadow:r!=null&&r.fill?`-1px 0 0 0 ${r.fill}`:"",color:(r==null?void 0:r.textColor)||""}));return(i,n)=>{var s;return e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass([e.unref(t).b("button"),e.unref(t).is("active",e.unref(f)===i.label),e.unref(t).is("disabled",e.unref(u)),e.unref(t).is("focus",e.unref(d)),e.unref(t).bm("button",e.unref(c))])},[e.withDirectives(e.createElementVNode("input",{ref_key:"radioRef",ref:l,"onUpdate:modelValue":n[0]||(n[0]=b=>e.isRef(f)?f.value=b:null),class:e.normalizeClass(e.unref(t).be("button","original-radio")),value:i.label,type:"radio",name:i.name||((s=e.unref(r))==null?void 0:s.name),disabled:e.unref(u),onFocus:n[1]||(n[1]=b=>d.value=!0),onBlur:n[2]||(n[2]=b=>d.value=!1)},null,42,I),[[e.vModelRadio,e.unref(f)]]),e.createElementVNode("span",{class:e.normalizeClass(e.unref(t).be("button","inner")),style:e.normalizeStyle(e.unref(f)===i.label?e.unref(p):{}),onKeydown:n[3]||(n[3]=e.withModifiers(()=>{},["stop"]))},[e.renderSlot(i.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(i.label),1)])],38)],2)}}});var C=o._export_sfc(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const N=o.buildProps({id:{type:String,default:void 0},size:o.useSizeProp,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),V=g,$=["id","aria-label","aria-labelledby"],D=e.defineComponent({name:"ElRadioGroup"}),T=e.defineComponent({...D,props:N,emits:V,setup(a,{emit:m}){const t=a,l=o.useNamespace("radio"),d=o.useId(),c=e.ref(),{formItem:u}=o.useFormItem(),{inputId:f,isLabeledByFormItem:r}=o.useFormItemInputId(t,{formItemContext:u}),p=n=>{m(o.UPDATE_MODEL_EVENT,n),e.nextTick(()=>m("change",n))};e.onMounted(()=>{const n=c.value.querySelectorAll("[type=radio]"),s=n[0];!Array.from(n).some(b=>b.checked)&&s&&(s.tabIndex=0)});const i=e.computed(()=>t.name||d.value);return e.provide(y,e.reactive({...e.toRefs(t),changeEvent:p,name:i})),e.watch(()=>t.modelValue,()=>{t.validateEvent&&(u==null||u.validate("change").catch(n=>o.debugWarn(n)))}),(n,s)=>(e.openBlock(),e.createElementBlock("div",{id:e.unref(f),ref_key:"radioGroupRef",ref:c,class:e.normalizeClass(e.unref(l).b("group")),role:"radiogroup","aria-label":e.unref(r)?void 0:n.label||"radio-group","aria-labelledby":e.unref(r)?e.unref(u).labelId:void 0},[e.renderSlot(n.$slots,"default")],10,$))}});var _=o._export_sfc(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const M=o.withInstall(G,{RadioButton:C,RadioGroup:_}),F=o.withNoopInstall(_),A=o.withNoopInstall(C);exports.ElRadio=M;exports.ElRadioButton=A;exports.ElRadioGroup=F;exports.radioButtonProps=S;exports.radioEmits=g;exports.radioGroupEmits=V;exports.radioGroupKey=y;exports.radioGroupProps=N;exports.radioProps=B;exports.radioPropsBase=E;