"use strict";const i=require("./useConfigInject.9ebe03f9.cjs"),h=require("./index.1449581b.cjs"),q=require("./_vue_commonjs-external.db6f8c6f.cjs");var s={},f;function j(){if(f)return s;f=1;var o=i.interopRequireDefault.exports;Object.defineProperty(s,"__esModule",{value:!0}),s.cloneElement=d,s.cloneVNodes=_,s.deepCloneElement=l;var m=o(h._typeof.exports),g=o(i.requireObjectSpread2()),c=i.requirePropsUtil(),p=q.require$$1,v=o(i.requireWarning());function d(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=e;if(Array.isArray(e)&&(r=(0,c.filterEmpty)(e)[0]),!r)return null;var t=(0,p.cloneVNode)(r,n,a);return t.props=u?(0,g.default)((0,g.default)({},t.props),n):t.props,(0,v.default)((0,m.default)(t.props.class)!=="object","class must be string"),t}function _(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return e.map(function(a){return d(a,n,u)})}function l(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(Array.isArray(e))return e.map(function(t){return l(t,n,u,a)});var r=d(e,n,u,a);return Array.isArray(r.children)&&(r.children=l(r.children)),r}return s}exports.requireVnode=j;