"use strict";const e=require("vue"),l=require("./useElementPlus.721bc6f7.cjs"),E=require("./index.6f23f7c6.cjs"),B=Symbol("buttonGroupContextKey"),z=(t,c)=>{l.useDeprecated({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},e.computed(()=>t.type==="text"));const r=e.inject(B,void 0),s=l.useGlobalConfig("button"),{form:a}=l.useFormItem(),o=l.useFormSize(e.computed(()=>r==null?void 0:r.size)),u=l.useFormDisabled(),b=e.ref(),p=e.useSlots(),d=e.computed(()=>t.type||(r==null?void 0:r.type)||""),v=e.computed(()=>{var i,f,k;return(k=(f=t.autoInsertSpace)!=null?f:(i=s.value)==null?void 0:i.autoInsertSpace)!=null?k:!1}),g=e.computed(()=>{var i;const f=(i=p.default)==null?void 0:i.call(p);if(v.value&&(f==null?void 0:f.length)===1){const k=f[0];if((k==null?void 0:k.type)===e.Text){const N=k.children;return/^\p{Unified_Ideograph}{2}$/u.test(N.trim())}}return!1});return{_disabled:u,_size:o,_type:d,_ref:b,shouldAddSpace:g,handleClick:i=>{t.nativeType==="reset"&&(a==null||a.resetFields()),c("click",i)}}},C=["default","primary","success","warning","info","danger","text",""],S=["button","submit","reset"],y=l.buildProps({size:l.useSizeProp,disabled:Boolean,type:{type:String,values:C,default:""},icon:{type:l.iconPropType},nativeType:{type:String,values:S,default:"button"},loading:Boolean,loadingIcon:{type:l.iconPropType,default:()=>l.loading_default},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),h={click:t=>t instanceof MouseEvent};function m(t,c=20){return t.mix("#141414",c).toString()}function $(t){const c=l.useFormDisabled(),r=l.useNamespace("button");return e.computed(()=>{let s={};const a=t.color;if(a){const o=new E.TinyColor(a),u=t.dark?o.tint(20).toString():m(o,20);if(t.plain)s=r.cssVarBlock({"bg-color":t.dark?m(o,90):o.tint(90).toString(),"text-color":a,"border-color":t.dark?m(o,50):o.tint(50).toString(),"hover-text-color":`var(${r.cssVarName("color-white")})`,"hover-bg-color":a,"hover-border-color":a,"active-bg-color":u,"active-text-color":`var(${r.cssVarName("color-white")})`,"active-border-color":u}),c.value&&(s[r.cssVarBlockName("disabled-bg-color")]=t.dark?m(o,90):o.tint(90).toString(),s[r.cssVarBlockName("disabled-text-color")]=t.dark?m(o,50):o.tint(50).toString(),s[r.cssVarBlockName("disabled-border-color")]=t.dark?m(o,80):o.tint(80).toString());else{const b=t.dark?m(o,30):o.tint(30).toString(),p=o.isDark()?`var(${r.cssVarName("color-white")})`:`var(${r.cssVarName("color-black")})`;if(s=r.cssVarBlock({"bg-color":a,"text-color":p,"border-color":a,"hover-bg-color":b,"hover-text-color":p,"hover-border-color":b,"active-bg-color":u,"active-border-color":u}),c.value){const d=t.dark?m(o,50):o.tint(50).toString();s[r.cssVarBlockName("disabled-bg-color")]=d,s[r.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${r.cssVarName("color-white")})`,s[r.cssVarBlockName("disabled-border-color")]=d}}}return s})}const V=["aria-disabled","disabled","autofocus","type"],w=e.defineComponent({name:"ElButton"}),I=e.defineComponent({...w,props:y,emits:h,setup(t,{expose:c,emit:r}){const s=t,a=$(s),o=l.useNamespace("button"),{_ref:u,_size:b,_type:p,_disabled:d,shouldAddSpace:v,handleClick:g}=z(s,r);return c({ref:u,size:b,type:p,disabled:d,shouldAddSpace:v}),(n,i)=>(e.openBlock(),e.createElementBlock("button",{ref_key:"_ref",ref:u,class:e.normalizeClass([e.unref(o).b(),e.unref(o).m(e.unref(p)),e.unref(o).m(e.unref(b)),e.unref(o).is("disabled",e.unref(d)),e.unref(o).is("loading",n.loading),e.unref(o).is("plain",n.plain),e.unref(o).is("round",n.round),e.unref(o).is("circle",n.circle),e.unref(o).is("text",n.text),e.unref(o).is("link",n.link),e.unref(o).is("has-bg",n.bg)]),"aria-disabled":e.unref(d)||n.loading,disabled:e.unref(d)||n.loading,autofocus:n.autofocus,type:n.nativeType,style:e.normalizeStyle(e.unref(a)),onClick:i[0]||(i[0]=(...f)=>e.unref(g)&&e.unref(g)(...f))},[n.loading?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[n.$slots.loading?e.renderSlot(n.$slots,"loading",{key:0}):(e.openBlock(),e.createBlock(e.unref(l.ElIcon),{key:1,class:e.normalizeClass(e.unref(o).is("loading"))},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.loadingIcon)))]),_:1},8,["class"]))],64)):n.icon||n.$slots.icon?(e.openBlock(),e.createBlock(e.unref(l.ElIcon),{key:1},{default:e.withCtx(()=>[n.icon?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.icon),{key:0})):e.renderSlot(n.$slots,"icon",{key:1})]),_:3})):e.createCommentVNode("v-if",!0),n.$slots.default?(e.openBlock(),e.createElementBlock("span",{key:2,class:e.normalizeClass({[e.unref(o).em("text","expand")]:e.unref(v)})},[e.renderSlot(n.$slots,"default")],2)):e.createCommentVNode("v-if",!0)],14,V))}});var T=l._export_sfc(I,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const G={size:y.size,type:y.type},P=e.defineComponent({name:"ElButtonGroup"}),x=e.defineComponent({...P,props:G,setup(t){const c=t;e.provide(B,e.reactive({size:e.toRef(c,"size"),type:e.toRef(c,"type")}));const r=l.useNamespace("button");return(s,a)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(`${e.unref(r).b("group")}`)},[e.renderSlot(s.$slots,"default")],2))}});var _=l._export_sfc(x,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const D=l.withInstall(T,{ButtonGroup:_}),F=l.withNoopInstall(_);exports.ElButton=D;exports.ElButtonGroup=F;exports.buttonEmits=h;exports.buttonGroupContextKey=B;exports.buttonNativeTypes=S;exports.buttonProps=y;exports.buttonTypes=C;