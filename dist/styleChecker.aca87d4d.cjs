"use strict";const p=require("./useConfigInject.9ebe03f9.cjs");var t={},f;function y(){if(f)return t;f=1;var s=p.interopRequireDefault.exports;Object.defineProperty(t,"__esModule",{value:!0}),t.detectFlexGapSupported=t.default=t.canUseDocElement=void 0,t.isStyleSupport=a;var d=s(p.requireCanUseDom()),l=function(){return(0,d.default)()&&window.document.documentElement};t.canUseDocElement=l;var c=function(e){if((0,d.default)()&&window.document.documentElement){var o=Array.isArray(e)?e:[e],n=window.document.documentElement;return o.some(function(i){return i in n.style})}return!1},m=function(e,o){if(!c(e))return!1;var n=document.createElement("div"),i=n.style[e];return n.style[e]=o,n.style[e]!==i};function a(r,e){return!Array.isArray(r)&&e!==void 0?m(r,e):c(r)}var u,v=function(){if(!l())return!1;if(u!==void 0)return u;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),u=e.scrollHeight===1,document.body.removeChild(e),u};t.detectFlexGapSupported=v;var S=a;return t.default=S,t}exports.requireStyleChecker=y;