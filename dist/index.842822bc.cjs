"use strict";const f=require("./useConfigInject.9ebe03f9.cjs"),Z=require("./_vue_commonjs-external.db6f8c6f.cjs"),xe=require("./index.3479ef5a.cjs");var U={},X={},z={},ce;function pe(){if(ce)return z;ce=1,Object.defineProperty(z,"__esModule",{value:!0}),z.useInjectOverflowContext=z.OverflowContextProvider=void 0;var r=Z.require$$1,e=Symbol("OverflowContextProviderKey"),a=(0,r.defineComponent)({compatConfig:{MODE:3},name:"OverflowContextProvider",inheritAttrs:!1,props:{value:{type:Object}},setup:function(w,m){var C=m.slots;return(0,r.provide)(e,(0,r.computed)(function(){return w.value})),function(){var v;return(v=C.default)===null||v===void 0?void 0:v.call(C)}}});z.OverflowContextProvider=a;var _=function(){return(0,r.inject)(e,(0,r.computed)(function(){return null}))};return z.useInjectOverflowContext=_,z}var H={},me;function we(){if(me)return H;me=1;var r=f.interopRequireDefault.exports;Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var e=Z.require$$1,a=r(f.requireObjectSpread2()),_=r(f.requireObjectWithoutProperties()),h=r(xe.requireVcResizeObserver()),w=r(f.requireClassNames()),m=r(f.requireVueTypes()),C=["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","display","order","component"],v=void 0,k=(0,e.defineComponent)({compatConfig:{MODE:3},name:"Item",props:{prefixCls:String,item:m.default.any,renderItem:Function,responsive:Boolean,itemKey:{type:[String,Number]},registerSize:Function,display:Boolean,order:Number,component:m.default.any,invalidate:Boolean},setup:function(i,M){var R=M.slots,D=M.expose,d=(0,e.computed)(function(){return i.responsive&&!i.display}),g=(0,e.ref)();D({itemNodeRef:g});function x(t){i.registerSize(i.itemKey,t)}return(0,e.onUnmounted)(function(){x(null)}),function(){var t,N=i.prefixCls,O=i.invalidate,E=i.item,S=i.renderItem,q=i.responsive;i.registerSize,i.itemKey,i.display;var I=i.order,c=i.component,b=c===void 0?"div":c,F=(0,_.default)(i,C),j=(t=R.default)===null||t===void 0?void 0:t.call(R),P=S&&E!==v?S(E):j,p;O||(p={opacity:d.value?0:1,height:d.value?0:v,overflowY:d.value?"hidden":v,order:q?I:v,pointerEvents:d.value?"none":v,position:d.value?"absolute":v});var K={};return d.value&&(K["aria-hidden"]=!0),(0,e.createVNode)(h.default,{disabled:!q,onResize:function(B){var W=B.offsetWidth;x(W)}},{default:function(){return(0,e.createVNode)(b,(0,a.default)((0,a.default)((0,a.default)({class:(0,w.default)(!O&&N),style:p},K),F),{},{ref:g}),{default:function(){return[P]}})}})}}});return H.default=k,H}var Y={},ye;function Ee(){if(ye)return Y;ye=1;var r=f.interopRequireDefault.exports;Object.defineProperty(Y,"__esModule",{value:!0}),Y.default=void 0;var e=Z.require$$1,a=r(f.requireObjectSpread2()),_=r(f.requireObjectWithoutProperties()),h=r(f.requireClassNames()),w=r(f.requireVueTypes()),m=pe(),C=r(we()),v=["component"],k=["className"],J=["class"],i=(0,e.defineComponent)({compatConfig:{MODE:3},name:"RawItem",inheritAttrs:!1,props:{component:w.default.any,title:w.default.any,id:String,onMouseenter:{type:Function},onMouseleave:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onFocus:{type:Function}},setup:function(R,D){var d=D.slots,g=D.attrs,x=(0,m.useInjectOverflowContext)();return function(){if(!x.value){var t,N=R.component,O=N===void 0?"div":N,E=(0,_.default)(R,v);return(0,e.createVNode)(O,(0,a.default)((0,a.default)({},E),g),{default:function(){return[(t=d.default)===null||t===void 0?void 0:t.call(d)]}})}var S=x.value,q=S.className,I=(0,_.default)(S,k),c=g.class,b=(0,_.default)(g,J);return(0,e.createVNode)(m.OverflowContextProvider,{value:null},{default:function(){return[(0,e.createVNode)(C.default,(0,a.default)((0,a.default)((0,a.default)({class:(0,h.default)(q,c)},I),b),R),d)]}})}}});return Y.default=i,Y}var _e;function Fe(){if(_e)return X;_e=1;var r=f.interopRequireDefault.exports;Object.defineProperty(X,"__esModule",{value:!0}),X.default=void 0;var e=Z.require$$1,a=r(f.requireObjectSpread2()),_=r(f.requireObjectWithoutProperties()),h=r(xe.requireVcResizeObserver()),w=r(f.requireClassNames()),m=r(f.requireVueTypes()),C=pe(),v=r(we()),k=r(Ee()),J=["class","style"],i="responsive",M="invalidate";function R(x){return"+ ".concat(x.length," ...")}var D=function(){return{id:String,prefixCls:String,data:Array,itemKey:[String,Number,Function],itemWidth:{type:Number,default:10},renderItem:Function,renderRawItem:Function,maxCount:[Number,String],renderRest:Function,renderRawRest:Function,suffix:m.default.any,component:String,itemComponent:m.default.any,onVisibleChange:Function,ssr:String,onMousedown:Function}},d=(0,e.defineComponent)({name:"Overflow",inheritAttrs:!1,props:D(),emits:["visibleChange"],setup:function(t,N){var O=N.attrs,E=N.emit,S=N.slots,q=(0,e.computed)(function(){return t.ssr==="full"}),I=(0,e.ref)(null),c=(0,e.computed)(function(){return I.value||0}),b=(0,e.ref)(new Map),F=(0,e.ref)(0),j=(0,e.ref)(0),P=(0,e.ref)(0),p=(0,e.ref)(null),K=(0,e.ref)(null),V=(0,e.computed)(function(){return K.value===null&&q.value?Number.MAX_SAFE_INTEGER:K.value||0}),B=(0,e.ref)(!1),W=(0,e.computed)(function(){return"".concat(t.prefixCls,"-item")}),ne=(0,e.computed)(function(){return Math.max(F.value,j.value)}),A=(0,e.computed)(function(){return!!(t.data.length&&t.maxCount===i)}),ie=(0,e.computed)(function(){return t.maxCount===M}),Re=(0,e.computed)(function(){return A.value||typeof t.maxCount=="number"&&t.data.length>t.maxCount}),$=(0,e.computed)(function(){var n=t.data;return A.value?I.value===null&&q.value?n=t.data:n=t.data.slice(0,Math.min(t.data.length,c.value/t.itemWidth)):typeof t.maxCount=="number"&&(n=t.data.slice(0,t.maxCount)),n}),ee=(0,e.computed)(function(){return A.value?t.data.slice(V.value+1):t.data.slice($.value.length)}),te=function(u,l){var o;return typeof t.itemKey=="function"?t.itemKey(u):(o=t.itemKey&&(u==null?void 0:u[t.itemKey]))!==null&&o!==void 0?o:l},ge=(0,e.computed)(function(){return t.renderItem||function(n){return n}}),Q=function(u,l){K.value=u,l||(B.value=u<t.data.length-1,E("visibleChange",u))},Ne=function(u,l){I.value=l.clientWidth},le=function(u,l){var o=new Map(b.value);l===null?o.delete(u):o.set(u,l),b.value=o},Oe=function(u,l){F.value=j.value,j.value=l},Se=function(u,l){P.value=l},re=function(u){return b.value.get(te($.value[u],u))};return(0,e.watch)([c,b,j,P,function(){return t.itemKey},$],function(){if(c.value&&ne.value&&$.value){var n=P.value,u=$.value.length,l=u-1;if(!u){Q(0),p.value=null;return}for(var o=0;o<u;o+=1){var G=re(o);if(G===void 0){Q(o-1,!0);break}if(n+=G,l===0&&n<=c.value||o===l-1&&n+re(l)<=c.value){Q(l),p.value=null;break}else if(n+ne.value>c.value){Q(o-1),p.value=n-G-P.value+j.value;break}}t.suffix&&re(0)+P.value>c.value&&(p.value=null)}}),function(){var n=B.value&&!!ee.value.length,u=t.itemComponent,l=t.renderRawItem,o=t.renderRawRest,G=t.renderRest,oe=t.prefixCls,be=oe===void 0?"rc-overflow":oe,ve=t.suffix,fe=t.component,he=fe===void 0?"div":fe,qe=t.id,Ie=t.onMousedown,je=O.class,Pe=O.style,Ve=(0,_.default)(O,J),de={};p.value!==null&&A.value&&(de={position:"absolute",left:"".concat(p.value,"px"),top:0});var L={prefixCls:W.value,responsive:A.value,component:u,invalidate:ie.value},ze=l?function(y,s){var T=te(y,s);return(0,e.createVNode)(C.OverflowContextProvider,{key:T,value:(0,a.default)((0,a.default)({},L),{},{order:s,item:y,itemKey:T,registerSize:le,display:s<=V.value})},{default:function(){return[l(y,s)]}})}:function(y,s){var T=te(y,s);return(0,e.createVNode)(v.default,(0,a.default)((0,a.default)({},L),{},{order:s,key:T,item:y,renderItem:ge.value,itemKey:T,registerSize:le,display:s<=V.value}),null)},ae=function(){return null},se={order:n?V.value:Number.MAX_SAFE_INTEGER,className:"".concat(W.value," ").concat(W.value,"-rest"),registerSize:Oe,display:n};if(o)o&&(ae=function(){return(0,e.createVNode)(C.OverflowContextProvider,{value:(0,a.default)((0,a.default)({},L),se)},{default:function(){return[o(ee.value)]}})});else{var ue=G||R;ae=function(){return(0,e.createVNode)(v.default,(0,a.default)((0,a.default)({},L),se),{default:function(){return typeof ue=="function"?ue(ee.value):ue}})}}var Me=function(){var s;return(0,e.createVNode)(he,(0,a.default)({id:qe,class:(0,w.default)(!ie.value&&be,je),style:Pe,onMousedown:Ie},Ve),{default:function(){return[$.value.map(ze),Re.value?ae():null,ve&&(0,e.createVNode)(v.default,(0,a.default)((0,a.default)({},L),{},{order:V.value,class:"".concat(W.value,"-suffix"),registerSize:Se,display:!0,style:de}),{default:function(){return ve}}),(s=S.default)===null||s===void 0?void 0:s.call(S)]}})};return(0,e.createVNode)(h.default,{disabled:!A.value,onResize:Ne},{default:Me})}}});d.Item=k.default,d.RESPONSIVE=i,d.INVALIDATE=M;var g=d;return X.default=g,X}var Ce;function Ke(){if(Ce)return U;Ce=1;var r=f.interopRequireDefault.exports;Object.defineProperty(U,"__esModule",{value:!0}),U.default=void 0;var e=r(Fe()),a=e.default;return U.default=a,U}exports.requireVcOverflow=Ke;