"use strict";const f=require("./useConfigInject.9ebe03f9.cjs"),y=require("./ResizeObserver.es.5be1142e.cjs"),D=require("./_vue_commonjs-external.db6f8c6f.cjs");var o={},p;function P(){if(p)return o;p=1;var a=f.interopRequireDefault.exports;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var g=a(f.requireObjectSpread2()),q=a(f.require_extends()),j=a(y.require$$3),e=D.require$$1,C=f.requirePropsUtil(),w=(0,e.defineComponent)({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup:function(u,x){var b=x.slots,s=(0,e.reactive)({width:0,height:0,offsetHeight:0,offsetWidth:0}),O=null,r=null,d=function(){r&&(r.disconnect(),r=null)},H=function(l){var t=u.onResize,n=l[0].target,_=n.getBoundingClientRect(),M=_.width,$=_.height,c=n.offsetWidth,h=n.offsetHeight,R=Math.floor(M),z=Math.floor($);if(s.width!==R||s.height!==z||s.offsetWidth!==c||s.offsetHeight!==h){var m={width:R,height:z,offsetWidth:c,offsetHeight:h};(0,q.default)(s,m),t&&Promise.resolve().then(function(){t((0,g.default)((0,g.default)({},m),{},{offsetWidth:c,offsetHeight:h}),n)})}},W=(0,e.getCurrentInstance)(),v=function(){var l=u.disabled;if(l){d();return}var t=(0,C.findDOMNode)(W),n=t!==O;n&&(d(),O=t),!r&&t&&(r=new j.default(H),r.observe(t))};return(0,e.onMounted)(function(){v()}),(0,e.onUpdated)(function(){v()}),(0,e.onUnmounted)(function(){d()}),(0,e.watch)(function(){return u.disabled},function(){v()},{flush:"post"}),function(){var i;return(i=b.default)===null||i===void 0?void 0:i.call(b)[0]}}});return o.default=w,o}exports.requireVcResizeObserver=P;