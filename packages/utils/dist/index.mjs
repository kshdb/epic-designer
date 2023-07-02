var N = Object.defineProperty;
var G = (t, e, n) => e in t ? N(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var m = (t, e, n) => (G(t, typeof e != "symbol" ? e + "" : e, n), n);
import { defineAsyncComponent as I, ref as p, effectScope as B, getCurrentScope as x, onScopeDispose as k, unref as K, watch as A } from "vue";
function b(t = 10) {
  return Number(
    `${Math.random().toString().substring(3, t)}${Date.now()}`
  ).toString(36);
}
function oe(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function S(t, e = /* @__PURE__ */ new WeakMap()) {
  if (typeof t != "object" || t === null)
    return t;
  if (e.has(t))
    return e.get(t);
  if (Array.isArray(t)) {
    const r = t.map((o) => S(o, e));
    return e.set(t, r), r;
  }
  const n = {};
  return e.set(t, n), Object.keys(t).forEach((r) => {
    n[r] = S(t[r], e);
  }), n;
}
function J(t, e) {
  for (const [n, r] of Object.entries(e)) {
    const o = t == null ? void 0 : t[n];
    o && r && typeof o == "object" && typeof r == "object" ? J(o, r) : t[n] = r;
  }
  Object.keys(t).reverse().forEach((n) => {
    e.hasOwnProperty(n) || (Array.isArray(e) ? t.splice(n, 1) : delete t[n]);
  });
}
function se(t, e, n = /* @__PURE__ */ new WeakMap()) {
  const r = (o) => {
    if (Array.isArray(o))
      return o.map(r);
    if (typeof o == "object" && o !== null) {
      if (n.has(o))
        return "[Circular]";
      n.set(o, !0);
      const s = Object.keys(o).sort(), i = {};
      return s.forEach((u) => {
        i[u] = r(o[u]);
      }), n.delete(o), i;
    } else
      return o;
  };
  return JSON.stringify(r(t)) === JSON.stringify(r(e));
}
const v = (t, e) => I({
  loader: t,
  loadingComponent: e,
  delay: 80
});
function ue(t, e) {
  var r;
  const n = [{ type: "root", children: t }];
  for (; n.length > 0; ) {
    const o = n.pop(), s = o == null ? void 0 : o.children;
    if (s != null)
      for (let i = 0; i < s.length; i++) {
        if (s[i].id === e)
          return {
            list: (r = o == null ? void 0 : o.children) != null ? r : [],
            schema: s[i],
            index: i
          };
        n.push(...s);
      }
  }
  throw new Error(`\u6CA1\u6709\u67E5\u8BE2\u5230id\u4E3A${e}\u7684\u8282\u70B9`);
}
function ie(t, e) {
  const n = [];
  let r = !1;
  function o(s) {
    if (n.push(s), s.id === e && (r = !0), !r && s.children != null && s.children.length > 0)
      for (let i = 0; i < s.children.length && (o(s.children[i]), !r); i++)
        ;
    r || n.pop();
  }
  return t.forEach(o), r || console.error(`\u6CA1\u6709\u67E5\u8BE2\u5230id\u4E3A${e}\u7684\u8282\u70B9`), n;
}
function ae(t, e) {
  const n = t.split(".");
  let r = e;
  for (let o = 0; o < n.length; o++)
    if (r = r[n[o]], r == null && r !== !1 && r !== 0)
      return;
  return r;
}
function le(t, e, n) {
  const r = e.split(".");
  let o = n;
  r.forEach((s, i) => {
    var u;
    if (i === r.length - 1) {
      o[s] = t;
      return;
    }
    o = (u = o[s]) != null ? u : o[s] = {};
  });
}
class T {
  constructor() {
    m(this, "components", {});
    m(this, "componentConfigs", {});
    m(this, "schemaGroup", []);
    m(this, "schemaGroupList", p([]));
    m(this, "viewsContainers", {
      activitybars: [],
      rightSidebars: []
    });
    m(this, "publicMethods", {
      test: {
        describe: "\u6D4B\u8BD5\u51FD\u6570",
        methodName: "test",
        method: () => {
          alert("\u6D4B\u8BD5\u51FD\u6570\u5F39\u51FA");
        }
      }
    });
  }
  component(e, n) {
    typeof n == "function" && (n = v(n)), this.components[e] = n;
  }
  registerComponent(e) {
    this.component(
      e.defaultSchema.type,
      e.component
    ), this.componentConfigs[e.defaultSchema.type] = e;
  }
  getComponents() {
    return this.components;
  }
  getComponent(e) {
    return this.components[e];
  }
  registerActivitybar(e) {
    typeof e.component == "function" && (e.component = v(e.component));
    const n = this.viewsContainers.activitybars.findIndex((r) => r.id === e.id);
    n !== -1 ? this.viewsContainers.activitybars[n] = e : this.viewsContainers.activitybars.push(e);
  }
  getActivitybars() {
    return this.viewsContainers.activitybars;
  }
  registerRightSidebar(e) {
    typeof e.component == "function" && (e.component = v(e.component));
    const n = this.viewsContainers.rightSidebars.findIndex((r) => r.id === e.id);
    n !== -1 ? this.viewsContainers.rightSidebars[n] = e : this.viewsContainers.rightSidebars.push(e);
  }
  getRightSidebars() {
    return this.viewsContainers.rightSidebars;
  }
  getComponentConfings() {
    return this.componentConfigs;
  }
  getComponentConfingByType(e) {
    return this.componentConfigs[e];
  }
  setSchemaGroup(e) {
    this.schemaGroup = e, this.computedSchemaGroupList();
  }
  addSchemaGroup(e) {
    this.schemaGroup.push(e), this.computedSchemaGroupList();
  }
  computedSchemaGroupList() {
    const e = this.schemaGroup.map((n) => {
      const r = n.list.map((o) => {
        var i;
        const s = (i = this.componentConfigs[o]) == null ? void 0 : i.defaultSchema;
        return s == null ? (console.warn(`${o} \u7EC4\u4EF6\u672A\u6CE8\u518C\u5230pluginManager\u4E2D`), !1) : {
          ...s,
          id: b()
        };
      }).filter((o) => o);
      return {
        ...n,
        list: r
      };
    });
    this.schemaGroupList.value = e;
  }
  getSchemaByGroup() {
    return this.schemaGroupList;
  }
  addPublicMethod(e) {
    this.publicMethods[e.methodName] = e;
  }
}
const U = new T();
function ce() {
  const t = p({}), e = p({});
  function n(a) {
    return t.value[a];
  }
  function r(a, c) {
    t.value[a] = c;
  }
  function o(a) {
    delete t.value[a];
  }
  function s(a) {
    const c = Object.entries(U.publicMethods).reduce(
      (l, [f, d]) => (l[f] = d.method, l),
      {}
    );
    new Function(`${a}`).bind({
      getComponent: n,
      defineExpose: i,
      ...c
    })();
  }
  function i(a) {
    a != null && (e.value = a);
  }
  function u(a, ...c) {
    a == null || a.forEach((l) => {
      var d, h;
      const f = l.componentId != null && n(l.componentId);
      if (Boolean(f) && typeof f[l.methodName] == "function") {
        f[l.methodName](...c);
        return;
      }
      (h = (d = e.value)[l.methodName]) == null || h.call(d, ...c);
    });
  }
  return {
    componentInstances: t,
    funcs: e,
    getComponentInstance: n,
    addComponentInstance: r,
    removeComponentInstance: o,
    setMethods: s,
    doActions: u
  };
}
function V() {
  const t = p([]), e = p([]), n = p(null);
  let r = 0;
  function o(u, a = "\u63D2\u5165\u7EC4\u4EF6") {
    const c = Date.now();
    r + 150 > c || (r = c, n.value != null && (t.value.push(n.value), e.value.splice(0, e.value.length)), n.value = {
      type: a,
      record: JSON.stringify(u)
    }, t.value.length > 20 && t.value.unshift());
  }
  function s() {
    if (t.value.length === 0)
      return !1;
    const u = t.value.pop();
    return n.value != null && e.value.push(n.value), n.value = u, JSON.parse(u.record);
  }
  function i() {
    if (e.value.length === 0)
      return !1;
    const u = e.value.pop();
    return n.value != null && t.value.push(n.value), n.value = u, JSON.parse(u.record);
  }
  return {
    recordList: t,
    undoList: e,
    currentRecord: n,
    push: o,
    undo: s,
    redo: i
  };
}
const fe = V();
function D(t) {
  return x() ? (k(t), !0) : !1;
}
function O(t) {
  let e = 0, n, r;
  const o = () => {
    e -= 1, r && e <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...s) => (e += 1, n || (r = B(!0), n = r.run(() => t(...s))), D(o), n);
}
function C(t) {
  return typeof t == "function" ? t() : K(t);
}
const W = typeof window < "u", z = () => {
};
function F(t) {
  var e;
  const n = C(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const P = W ? window : void 0;
function R(...t) {
  let e, n, r, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, o] = t, e = P) : [e, n, r, o] = t, !e)
    return z;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], i = () => {
    s.forEach((l) => l()), s.length = 0;
  }, u = (l, f, d, h) => (l.addEventListener(f, d, h), () => l.removeEventListener(f, d, h)), a = A(
    () => [F(e), C(o)],
    ([l, f]) => {
      i(), l && s.push(
        ...n.flatMap((d) => r.map((h) => u(l, d, h, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), i();
  };
  return D(c), c;
}
var Y = Object.defineProperty, X = Object.defineProperties, Z = Object.getOwnPropertyDescriptors, w = Object.getOwnPropertySymbols, q = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable, E = (t, e, n) => e in t ? Y(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, _ = (t, e) => {
  for (var n in e || (e = {}))
    q.call(e, n) && E(t, n, e[n]);
  if (w)
    for (var n of w(e))
      H.call(e, n) && E(t, n, e[n]);
  return t;
}, $ = (t, e) => X(t, Z(e));
function Q(t) {
  return typeof t == "function" ? t : typeof t == "string" ? (e) => e.key === t : Array.isArray(t) ? (e) => t.includes(e.key) : () => !0;
}
function L(...t) {
  let e, n, r = {};
  t.length === 3 ? (e = t[0], n = t[1], r = t[2]) : t.length === 2 ? typeof t[1] == "object" ? (e = !0, n = t[0], r = t[1]) : (e = t[0], n = t[1]) : (e = !0, n = t[0]);
  const {
    target: o = P,
    eventName: s = "keydown",
    passive: i = !1,
    dedupe: u = !1
  } = r, a = Q(e);
  return R(o, s, (l) => {
    l.repeat && C(u) || a(l) && n(l);
  }, i);
}
function y(t, e, n = {}) {
  return L(t, e, $(_({}, n), { eventName: "keydown" }));
}
function g(t, e, n = {}) {
  return L(t, e, $(_({}, n), { eventName: "keyup" }));
}
function j() {
  const t = p(!1), e = p(!1), n = p(!1);
  return y(" ", (r) => {
    r.preventDefault(), t.value = !0;
  }), g(" ", () => {
    t.value = !1;
  }), y("Shift", (r) => {
    r.preventDefault(), e.value = !0;
  }), g("Shift", () => {
    e.value = !1;
  }), y("Control", (r) => {
    r.preventDefault(), n.value = !0;
  }), g("Control", () => {
    n.value = !1;
  }), { pressSpace: t, pressShift: e, pressCtrl: n };
}
function ee() {
  return {
    canvasScale: p(1)
  };
}
const te = O(ee), M = O(j);
function pe(t) {
  const { pressSpace: e } = M();
  let n = 0, r = 0;
  function o(u) {
    var a;
    n = u.x, r = u.y, (a = u.dataTransfer) == null || a.setDragImage(document.createElement("div"), 0, 0);
  }
  function s(u) {
    if (u.preventDefault(), !u.x || !u.y || !e.value)
      return;
    const a = u.x - n, c = u.y - r;
    n = u.x, r = u.y, t.value && (t.value.scrollTop -= c, t.value.scrollLeft -= a);
  }
  function i() {
    e.value = !1;
  }
  return { handleElementDragStart: o, handleElementDrag: s, handleElementDragEnd: i };
}
function de(t) {
  const { pressCtrl: e } = M(), { canvasScale: n } = te();
  function r(o) {
    if (!e.value)
      return;
    o.preventDefault();
    let s = 0;
    o.deltaY < 0 ? s = n.value + 0.05 : s = n.value - 0.05, !(s > 2 || s < 0.2) && (n.value = s);
  }
  return A(() => n.value, (o) => {
    t.value && (t.value.style.transform = `scale(${o})`);
  }), { handleZoom: r, canvasScale: n };
}
export {
  T as PluginManager,
  oe as capitalizeFirstLetter,
  S as deepClone,
  J as deepCompareAndModify,
  se as deepEqual,
  ue as findSchemaById,
  ae as getAttributeValue,
  ie as getMatchedById,
  b as getUUID,
  v as loadAsyncComponent,
  U as pluginManager,
  fe as revoke,
  le as setAttributeValue,
  pe as useElementDrag,
  de as useElementZoom,
  ce as usePageManager,
  M as useShareKeyPress,
  te as useShareStore,
  ee as useStore
};