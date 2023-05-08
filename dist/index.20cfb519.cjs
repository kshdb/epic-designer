"use strict";const x=require("./useConfigInject.9ebe03f9.cjs"),Oe=require("./index.1449581b.cjs"),ue=require("./_vue_commonjs-external.db6f8c6f.cjs"),bt=require("./DownOutlined.bdb1117f.cjs"),Ue=require("./classCallCheck.f96486aa.cjs"),Nt=require("./isMobile.176ccb1d.cjs"),yt=require("./raf.3a81eca4.cjs"),ht=require("./KeyCode.b3009ec3.cjs"),St=require("./FormItemContext.6a7c252d.cjs"),_t=require("./vnode.d03298dd.cjs"),It=require("./omit.290ed8c8.cjs");function qt(r,s){for(var i=0;i<s.length;i++){const f=s[i];if(typeof f!="string"&&!Array.isArray(f)){for(const m in f)if(m!=="default"&&!(m in r)){const b=Object.getOwnPropertyDescriptor(f,m);b&&Object.defineProperty(r,m,b.get?b:{enumerable:!0,get:()=>f[m]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var ne={},De={},Ne={},Ae;function Dt(){if(Ae)return Ne;Ae=1,Object.defineProperty(Ne,"__esModule",{value:!0});var r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};return Ne.default=r,Ne}var je;function wt(){return je||(je=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=ue.require$$1,i=m(Dt()),f=m(x.requireAntdIcon());function m(p){return p&&p.__esModule?p:{default:p}}function b(p){for(var g=1;g<arguments.length;g++){var u=arguments[g]!=null?Object(arguments[g]):{},n=Object.keys(u);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(u).filter(function(t){return Object.getOwnPropertyDescriptor(u,t).enumerable}))),n.forEach(function(t){d(p,t,u[t])})}return p}function d(p,g,u){return g in p?Object.defineProperty(p,g,{value:u,enumerable:!0,configurable:!0,writable:!0}):p[g]=u,p}var l=function(g,u){var n=b({},g,u.attrs);return(0,s.createVNode)(f.default,b({},n,{icon:i.default}),null)};l.displayName="UpOutlined",l.inheritAttrs=!1;var v=l;r.default=v}(De)),De}var ee={},L={},Y={},ye={},ke;function Ye(){if(ke)return ye;ke=1,Object.defineProperty(ye,"__esModule",{value:!0}),ye.supportBigInt=r;function r(){return typeof BigInt=="function"}return ye}var We;function Je(){if(We)return Y;We=1,Object.defineProperty(Y,"__esModule",{value:!0}),Y.getNumberPrecision=f,Y.isE=i,Y.num2str=m,Y.trimNumber=s,Y.validateNumber=b;var r=Ye();function s(d){var l=d.trim(),v=l.startsWith("-");v&&(l=l.slice(1)),l=l.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),l.startsWith(".")&&(l="0".concat(l));var p=l||"0",g=p.split("."),u=g[0]||"0",n=g[1]||"0";u==="0"&&n==="0"&&(v=!1);var t=v?"-":"";return{negative:v,negativeStr:t,trimStr:p,integerStr:u,decimalStr:n,fullStr:"".concat(t).concat(p)}}function i(d){var l=String(d);return!Number.isNaN(Number(l))&&l.includes("e")}function f(d){var l=String(d);if(i(d)){var v=Number(l.slice(l.indexOf("e-")+2)),p=l.match(/\.(\d+)/);return p!=null&&p[1]&&(v+=p[1].length),v}return l.includes(".")&&b(l)?l.length-l.indexOf(".")-1:0}function m(d){var l=String(d);if(i(d)){if(d>Number.MAX_SAFE_INTEGER)return String((0,r.supportBigInt)()?BigInt(d).toString():Number.MAX_SAFE_INTEGER);if(d<Number.MIN_SAFE_INTEGER)return String((0,r.supportBigInt)()?BigInt(d).toString():Number.MIN_SAFE_INTEGER);l=d.toFixed(f(l))}return s(l).fullStr}function b(d){return typeof d=="number"?!Number.isNaN(d):d?/^\s*-?\d+(\.\d+)?\s*$/.test(d)||/^\s*-?\d+\.\s*$/.test(d)||/^\s*-?\.\d+\s*$/.test(d):!1}return Y}var Te;function xt(){if(Te)return L;Te=1;var r=x.interopRequireDefault.exports;Object.defineProperty(L,"__esModule",{value:!0}),L.NumberDecimal=L.BigIntDecimal=void 0,L.default=p,L.toFixed=g;var s=r(Ue.requireClassCallCheck()),i=r(Ue.requireCreateClass()),f=r(x.requireDefineProperty()),m=Je(),b=Ye();function d(u){return!u&&u!==0&&!Number.isNaN(u)||!String(u).trim()}var l=function(){function u(n){if((0,s.default)(this,u),(0,f.default)(this,"origin",""),d(n)){this.empty=!0;return}this.origin=String(n),this.number=Number(n)}return(0,i.default)(u,[{key:"negate",value:function(){return new u(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new u(t);var S=Number(t);if(Number.isNaN(S))return this;var q=this.number+S;if(q>Number.MAX_SAFE_INTEGER)return new u(Number.MAX_SAFE_INTEGER);if(q<Number.MIN_SAFE_INTEGER)return new u(Number.MIN_SAFE_INTEGER);var C=Math.max((0,m.getNumberPrecision)(this.number),(0,m.getNumberPrecision)(S));return new u(q.toFixed(C))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":(0,m.num2str)(this.number):this.origin}}]),u}();L.NumberDecimal=l;var v=function(){function u(n){if((0,s.default)(this,u),(0,f.default)(this,"origin",""),d(n)){this.empty=!0;return}if(this.origin=String(n),n==="-"||Number.isNaN(n)){this.nan=!0;return}var t=n;if((0,m.isE)(t)&&(t=Number(t)),t=typeof t=="string"?t:(0,m.num2str)(t),(0,m.validateNumber)(t)){var S=(0,m.trimNumber)(t);this.negative=S.negative;var q=S.trimStr.split(".");this.integer=BigInt(q[0]);var C=q[1]||"0";this.decimal=BigInt(C),this.decimalLen=C.length}else this.nan=!0}return(0,i.default)(u,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var S="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(S)}},{key:"negate",value:function(){var t=new u(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new u(t);var S=new u(t);if(S.isInvalidate())return this;var q=Math.max(this.getDecimalStr().length,S.getDecimalStr().length),C=this.alignDecimal(q),$=S.alignDecimal(q),E=(C+$).toString(),M=(0,m.trimNumber)(E),_=M.negativeStr,I=M.trimStr,y="".concat(_).concat(I.padStart(q+1,"0"));return new u("".concat(y.slice(0,-q),".").concat(y.slice(-q)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":(0,m.trimNumber)("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),u}();L.BigIntDecimal=v;function p(u){return(0,b.supportBigInt)()?new v(u):new l(u)}function g(u,n,t){var S=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(u==="")return"";var q=(0,m.trimNumber)(u),C=q.negativeStr,$=q.integerStr,E=q.decimalStr,M="".concat(n).concat(E),_="".concat(C).concat($);if(t>=0){var I=Number(E[t]);if(I>=5&&!S){var y=p(u).add("".concat(C,"0.").concat("0".repeat(t)).concat(10-I));return g(y.toString(),n,t,S)}return t===0?_:"".concat(_).concat(n).concat(E.padEnd(t,"0").slice(0,t))}return M===".0"?_:"".concat(_).concat(M)}return L}var de={},He;function Ct(){if(He)return de;He=1;var r=x.interopRequireDefault.exports;Object.defineProperty(de,"__esModule",{value:!0}),de.default=void 0;var s=ue.require$$1,i=r(x.requireObjectSpread2()),f=r(x.requireDefineProperty()),m=r(Nt.requireIsMobile()),b=r(x.requireClassNames()),d=200,l=600,v=(0,s.defineComponent)({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(g,u){var n=u.slots,t=u.emit,S=(0,s.ref)(),q=function(E,M){E.preventDefault(),t("step",M);function _(){t("step",M),S.value=setTimeout(_,d)}S.value=setTimeout(_,l)},C=function(){clearTimeout(S.value)};return(0,s.onBeforeUnmount)(function(){C()}),function(){if((0,m.default)())return null;var $=g.prefixCls,E=g.upDisabled,M=g.downDisabled,_="".concat($,"-handler"),I=(0,b.default)(_,"".concat(_,"-up"),(0,f.default)({},"".concat(_,"-up-disabled"),E)),y=(0,b.default)(_,"".concat(_,"-down"),(0,f.default)({},"".concat(_,"-down-disabled"),M)),a={unselectable:"on",role:"button",onMouseup:C,onMouseleave:C},N=n.upNode,O=n.downNode;return(0,s.createVNode)("div",{class:"".concat(_,"-wrap")},[(0,s.createVNode)("span",(0,i.default)((0,i.default)({},a),{},{onMousedown:function(P){q(P,!0)},"aria-label":"Increase Value","aria-disabled":E,class:I}),[(N==null?void 0:N())||(0,s.createVNode)("span",{unselectable:"on",class:"".concat($,"-handler-up-inner")},null)]),(0,s.createVNode)("span",(0,i.default)((0,i.default)({},a),{},{onMousedown:function(P){q(P,!1)},"aria-label":"Decrease Value","aria-disabled":M,class:y}),[(O==null?void 0:O())||(0,s.createVNode)("span",{unselectable:"on",class:"".concat($,"-handler-down-inner")},null)])])}}});return de.default=v,de}var he={},ze;function Ot(){if(ze)return he;ze=1,Object.defineProperty(he,"__esModule",{value:!0}),he.default=i;var r=x.requireWarning$1(),s=ue.require$$1;function i(f,m){var b=(0,s.ref)(null);function d(){try{var v=f.value,p=v.selectionStart,g=v.selectionEnd,u=v.value,n=u.substring(0,p),t=u.substring(g);b.value={start:p,end:g,value:u,beforeTxt:n,afterTxt:t}}catch{}}function l(){if(f.value&&b.value&&m.value)try{var v=f.value.value,p=b.value,g=p.beforeTxt,u=p.afterTxt,n=p.start,t=v.length;if(v.endsWith(u))t=v.length-b.value.afterTxt.length;else if(v.startsWith(g))t=g.length;else{var S=g[n-1],q=v.indexOf(S,n-1);q!==-1&&(t=q+1)}f.value.setSelectionRange(t,t)}catch(C){(0,r.warning)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(C.message))}}return[d,l]}return he}var fe={},Ge;function Pt(){if(Ge)return fe;Ge=1;var r=x.interopRequireDefault.exports;Object.defineProperty(fe,"__esModule",{value:!0}),fe.default=void 0;var s=r(yt.requireRaf()),i=ue.require$$1,f=function(){var b=(0,i.ref)(0),d=function(){s.default.cancel(b.value)};return(0,i.onBeforeUnmount)(function(){d()}),function(l){d(),b.value=(0,s.default)(function(){l()})}};return fe.default=f,fe}var Ke;function Mt(){if(Ke)return ee;Ke=1;var r=x.interopRequireDefault.exports,s=Oe._typeof.exports;Object.defineProperty(ee,"__esModule",{value:!0}),ee.inputNumberProps=ee.default=void 0;var i=ue.require$$1,f=r(x.requireDefineProperty()),m=r(x.requireObjectWithoutProperties()),b=r(x.requireSlicedToArray()),d=r(Oe._typeof.exports),l=r(x.requireObjectSpread2()),v=$(xt()),p=r(Ct()),g=Je(),u=r(Ot()),n=r(Pt()),t=r(ht.requireKeyCode()),S=r(x.requireClassNames()),q=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"];function C(y){if(typeof WeakMap!="function")return null;var a=new WeakMap,N=new WeakMap;return(C=function(U){return U?N:a})(y)}function $(y,a){if(!a&&y&&y.__esModule)return y;if(y===null||s(y)!=="object"&&typeof y!="function")return{default:y};var N=C(a);if(N&&N.has(y))return N.get(y);var O={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in y)if(P!=="default"&&Object.prototype.hasOwnProperty.call(y,P)){var W=U?Object.getOwnPropertyDescriptor(y,P):null;W&&(W.get||W.set)?Object.defineProperty(O,P,W):O[P]=y[P]}return O.default=y,N&&N.set(y,O),O}var E=function(a,N){return a||N.isEmpty()?N.toString():N.toNumber()},M=function(a){var N=(0,v.default)(a);return N.isInvalidate()?null:N},_=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};ee.inputNumberProps=_;var I=(0,i.defineComponent)({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:(0,l.default)((0,l.default)({},_()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(a,N){var O=N.attrs,U=N.slots,P=N.emit,W=N.expose,z=(0,i.ref)(),G=(0,i.ref)(!1),T=(0,i.ref)(!1),K=(0,i.ref)(!1),D=(0,i.ref)((0,v.default)(a.value));function ce(c){a.value===void 0&&(D.value=c)}var ie=function(e,h){if(!h)return a.precision>=0?a.precision:Math.max((0,g.getNumberPrecision)(e),(0,g.getNumberPrecision)(a.step))},le=function(e){var h=String(e);if(a.parser)return a.parser(h);var o=h;return a.decimalSeparator&&(o=o.replace(a.decimalSeparator,".")),o.replace(/[^\w.-]+/g,"")},H=(0,i.ref)(""),w=function(e,h){if(a.formatter)return a.formatter(e,{userTyping:h,input:String(H.value)});var o=typeof e=="number"?(0,g.num2str)(e):e;if(!h){var R=ie(o,h);if((0,g.validateNumber)(o)&&(a.decimalSeparator||R>=0)){var F=a.decimalSeparator||".";o=(0,v.toFixed)(o,F,R)}}return o},te=function(){var c=a.value;return D.value.isInvalidate()&&["string","number"].includes((0,d.default)(c))?Number.isNaN(c)?"":c:w(D.value.toString(),!1)}();H.value=te;function J(c,e){H.value=w(c.isInvalidate()?c.toString(!1):c.toString(!e),e)}var A=(0,i.computed)(function(){return M(a.max)}),X=(0,i.computed)(function(){return M(a.min)}),j=(0,i.computed)(function(){return!A.value||!D.value||D.value.isInvalidate()?!1:A.value.lessEquals(D.value)}),ve=(0,i.computed)(function(){return!X.value||!D.value||D.value.isInvalidate()?!1:D.value.lessEquals(X.value)}),Q=(0,u.default)(z,G),re=(0,b.default)(Q,2),pe=re[0],Ie=re[1],me=function(e){return A.value&&!e.lessEquals(A.value)?A.value:X.value&&!X.value.lessEquals(e)?X.value:null},ge=function(e){return!me(e)},oe=function(e,h){var o=e,R=ge(o)||o.isEmpty();if(!o.isEmpty()&&!h&&(o=me(o)||o,R=!0),!a.readonly&&!a.disabled&&R){var F=o.toString(),Z=ie(F,h);if(Z>=0&&(o=(0,v.default)((0,v.toFixed)(F,".",Z))),!o.equals(D.value)){var se;ce(o),(se=a.onChange)===null||se===void 0||se.call(a,o.isEmpty()?null:E(a.stringMode,o)),a.value===void 0&&J(o,h)}return o}return D.value},be=(0,n.default)(),Pe=function c(e){var h;if(pe(),H.value=e,!K.value){var o=le(e),R=(0,v.default)(o);R.isNaN()||oe(R,!0)}(h=a.onInput)===null||h===void 0||h.call(a,e),be(function(){var F=e;a.parser||(F=e.replace(/。/g,".")),F!==e&&c(F)})},at=function(){K.value=!0},nt=function(){K.value=!1,Pe(z.value.value)},Me=function(e){Pe(e.target.value)},Ee=function(e){var h,o;if(!(e&&j.value||!e&&ve.value)){T.value=!1;var R=(0,v.default)(a.step);e||(R=R.negate());var F=(D.value||(0,v.default)(0)).add(R.toString()),Z=oe(F,!1);(h=a.onStep)===null||h===void 0||h.call(a,E(a.stringMode,Z),{offset:a.step,type:e?"up":"down"}),(o=z.value)===null||o===void 0||o.focus()}},Ve=function(e){var h=(0,v.default)(le(H.value)),o=h;h.isNaN()?o=D.value:o=oe(h,e),a.value!==void 0?J(D.value,!1):o.isNaN()||J(o,!1)},ut=function(e){var h=e.which;if(T.value=!0,h===t.default.ENTER){var o;K.value||(T.value=!1),Ve(!1),(o=a.onPressEnter)===null||o===void 0||o.call(a,e)}a.keyboard!==!1&&!K.value&&[t.default.UP,t.default.DOWN].includes(h)&&(Ee(t.default.UP===h),e.preventDefault())},it=function(){T.value=!1},lt=function(e){Ve(!1),G.value=!1,T.value=!1,P("blur",e)};return(0,i.watch)(function(){return a.precision},function(){D.value.isInvalidate()||J(D.value,!1)},{flush:"post"}),(0,i.watch)(function(){return a.value},function(){var c=(0,v.default)(a.value);D.value=c;var e=(0,v.default)(le(H.value));(!c.equals(e)||!T.value||a.formatter)&&J(c,T.value)},{flush:"post"}),(0,i.watch)(H,function(){a.formatter&&Ie()},{flush:"post"}),(0,i.watch)(function(){return a.disabled},function(c){c&&(G.value=!1)}),W({focus:function(){var e;(e=z.value)===null||e===void 0||e.focus()},blur:function(){var e;(e=z.value)===null||e===void 0||e.blur()}}),function(){var c,e=(0,l.default)((0,l.default)({},O),a),h=e.prefixCls,o=h===void 0?"rc-input-number":h,R=e.min,F=e.max,Z=e.step,se=Z===void 0?1:Z;e.defaultValue,e.value;var Re=e.disabled,Be=e.readonly;e.keyboard;var $e=e.controls,ot=$e===void 0?!0:$e,st=e.autofocus;e.stringMode,e.parser,e.formatter,e.precision,e.decimalSeparator,e.onChange,e.onInput,e.onPressEnter,e.onStep;var dt=e.lazy,ft=e.class,ct=e.style,vt=(0,m.default)(e,q),pt=U.upHandler,mt=U.downHandler,Fe="".concat(o,"-input"),qe={};return dt?qe.onChange=Me:qe.onInput=Me,(0,i.createVNode)("div",{class:(0,S.default)(o,ft,(c={},(0,f.default)(c,"".concat(o,"-focused"),G.value),(0,f.default)(c,"".concat(o,"-disabled"),Re),(0,f.default)(c,"".concat(o,"-readonly"),Be),(0,f.default)(c,"".concat(o,"-not-a-number"),D.value.isNaN()),(0,f.default)(c,"".concat(o,"-out-of-range"),!D.value.isInvalidate()&&!ge(D.value)),c)),style:ct,onKeydown:ut,onKeyup:it},[ot&&(0,i.createVNode)(p.default,{prefixCls:o,upDisabled:j.value,downDisabled:ve.value,onStep:Ee},{upNode:pt,downNode:mt}),(0,i.createVNode)("div",{class:"".concat(Fe,"-wrap")},[(0,i.createVNode)("input",(0,l.default)((0,l.default)((0,l.default)({autofocus:st,autocomplete:"off",role:"spinbutton","aria-valuemin":R,"aria-valuemax":F,"aria-valuenow":D.value.isInvalidate()?null:D.value.toString(),step:se},vt),{},{ref:z,class:Fe,value:H.value,disabled:Re,readonly:Be,onFocus:function(gt){G.value=!0,P("focus",gt)}},qe),{},{onBlur:lt,onCompositionstart:at,onCompositionend:nt}),null)])])}}});return ee.default=I,ee}var Se={},Le;function Et(){if(Le)return Se;Le=1,Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=r;function r(s){return s!=null}return Se}var k=x.interopRequireDefault.exports,Vt=Oe._typeof.exports;Object.defineProperty(ne,"__esModule",{value:!0});var Qe=ne.inputNumberProps=rt=ne.default=void 0,B=ue.require$$1,Rt=k(x.require_extends()),V=k(x.requireDefineProperty()),Bt=k(x.requireObjectWithoutProperties()),ae=k(x.requireObjectSpread2()),_e=k(x.requireClassNames()),$t=k(wt()),Ft=k(bt.requireDownOutlined()),Ze=Tt(Mt()),Ut=St.requireFormItemContext(),At=k(x.requireUseConfigInject()),jt=_t.requireVnode(),kt=k(It.requireOmit()),we=k(x.requireVueTypes()),xe=k(Et()),Wt=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"];function et(r){if(typeof WeakMap!="function")return null;var s=new WeakMap,i=new WeakMap;return(et=function(m){return m?i:s})(r)}function Tt(r,s){if(!s&&r&&r.__esModule)return r;if(r===null||Vt(r)!=="object"&&typeof r!="function")return{default:r};var i=et(s);if(i&&i.has(r))return i.get(r);var f={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var b in r)if(b!=="default"&&Object.prototype.hasOwnProperty.call(r,b)){var d=m?Object.getOwnPropertyDescriptor(r,b):null;d&&(d.get||d.set)?Object.defineProperty(f,b,d):f[b]=r[b]}return f.default=r,i&&i.set(r,f),f}var Xe=(0,Ze.inputNumberProps)(),tt=function(){return(0,ae.default)((0,ae.default)({},Xe),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:we.default.any,addonAfter:we.default.any,prefix:we.default.any,"onUpdate:value":Xe.onChange,valueModifiers:Object})};Qe=ne.inputNumberProps=tt;var Ce=(0,B.defineComponent)({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:tt(),slots:["addonBefore","addonAfter","prefix"],setup:function(s,i){var f=i.emit,m=i.expose,b=i.attrs,d=i.slots,l=(0,Ut.useInjectFormItemContext)(),v=(0,At.default)("input-number",s),p=v.prefixCls,g=v.size,u=v.direction,n=(0,B.ref)(s.value===void 0?s.defaultValue:s.value),t=(0,B.ref)(!1);(0,B.watch)(function(){return s.value},function(){n.value=s.value});var S=(0,B.ref)(null),q=function(){var I;(I=S.value)===null||I===void 0||I.focus()},C=function(){var I;(I=S.value)===null||I===void 0||I.blur()};m({focus:q,blur:C});var $=function(I){s.value===void 0&&(n.value=I),f("update:value",I),f("change",I),l.onFieldChange()},E=function(I){t.value=!1,f("blur",I),l.onFieldBlur()},M=function(I){t.value=!0,f("focus",I)};return function(){var _,I,y,a,N=(0,ae.default)((0,ae.default)({},b),s),O=N.class,U=N.bordered,P=N.readonly,W=N.style,z=N.addonBefore,G=z===void 0?(_=d.addonBefore)===null||_===void 0?void 0:_.call(d):z,T=N.addonAfter,K=T===void 0?(I=d.addonAfter)===null||I===void 0?void 0:I.call(d):T,D=N.prefix,ce=D===void 0?(y=d.prefix)===null||y===void 0?void 0:y.call(d):D,ie=N.valueModifiers,le=ie===void 0?{}:ie,H=(0,Bt.default)(N,Wt),w=p.value,te=g.value,J=(0,_e.default)((a={},(0,V.default)(a,"".concat(w,"-lg"),te==="large"),(0,V.default)(a,"".concat(w,"-sm"),te==="small"),(0,V.default)(a,"".concat(w,"-rtl"),u.value==="rtl"),(0,V.default)(a,"".concat(w,"-readonly"),P),(0,V.default)(a,"".concat(w,"-borderless"),!U),a),O),A=(0,B.createVNode)(Ze.default,(0,ae.default)((0,ae.default)({},(0,kt.default)(H,["size","defaultValue"])),{},{ref:S,lazy:!!le.lazy,value:n.value,class:J,prefixCls:w,readonly:P,onChange:$,onBlur:E,onFocus:M}),{upHandler:function(){return(0,B.createVNode)($t.default,{class:"".concat(w,"-handler-up-inner")},null)},downHandler:function(){return(0,B.createVNode)(Ft.default,{class:"".concat(w,"-handler-down-inner")},null)}}),X=(0,xe.default)(G)||(0,xe.default)(K);if((0,xe.default)(ce)){var j,ve=(0,_e.default)("".concat(w,"-affix-wrapper"),(j={},(0,V.default)(j,"".concat(w,"-affix-wrapper-focused"),t.value),(0,V.default)(j,"".concat(w,"-affix-wrapper-disabled"),s.disabled),(0,V.default)(j,"".concat(w,"-affix-wrapper-rtl"),u.value==="rtl"),(0,V.default)(j,"".concat(w,"-affix-wrapper-readonly"),P),(0,V.default)(j,"".concat(w,"-affix-wrapper-borderless"),!U),(0,V.default)(j,"".concat(O),!X&&O),j));A=(0,B.createVNode)("div",{class:ve,style:W,onMouseup:function(){return S.value.focus()}},[(0,B.createVNode)("span",{class:"".concat(w,"-prefix")},[ce]),A])}if(X){var Q,re="".concat(w,"-group"),pe="".concat(re,"-addon"),Ie=G?(0,B.createVNode)("div",{class:pe},[G]):null,me=K?(0,B.createVNode)("div",{class:pe},[K]):null,ge=(0,_e.default)("".concat(w,"-wrapper"),re,(0,V.default)({},"".concat(re,"-rtl"),u.value==="rtl")),oe=(0,_e.default)("".concat(w,"-group-wrapper"),(Q={},(0,V.default)(Q,"".concat(w,"-group-wrapper-sm"),te==="small"),(0,V.default)(Q,"".concat(w,"-group-wrapper-lg"),te==="large"),(0,V.default)(Q,"".concat(w,"-group-wrapper-rtl"),u.value==="rtl"),Q),O);A=(0,B.createVNode)("div",{class:oe,style:W},[(0,B.createVNode)("div",{class:ge},[Ie,A,me])])}return(0,jt.cloneElement)(A,{style:W})}}}),Ht=(0,Rt.default)(Ce,{install:function(s){return s.component(Ce.name,Ce),s}}),rt=ne.default=Ht;const zt=qt({__proto__:null,get inputNumberProps(){return Qe},get default(){return rt}},[ne]);exports.index=zt;