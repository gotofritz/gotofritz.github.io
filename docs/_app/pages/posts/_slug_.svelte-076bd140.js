var xe = Object.defineProperty,
  et = Object.defineProperties;
var tt = Object.getOwnPropertyDescriptors;
var De = Object.getOwnPropertySymbols;
var nt = Object.prototype.hasOwnProperty,
  st = Object.prototype.propertyIsEnumerable;
var He = (n, e, t) =>
    e in n
      ? xe(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (n[e] = t),
  Ve = (n, e) => {
    for (var t in e || (e = {})) nt.call(e, t) && He(n, t, e[t]);
    if (De) for (var t of De(e)) st.call(e, t) && He(n, t, e[t]);
    return n;
  },
  je = (n, e) => et(n, tt(e));
import { _ as Se } from "../../chunks/preload-helper-ec9aa979.js";
import {
  Z as lt,
  S as Fe,
  i as Le,
  s as qe,
  e as g,
  t as q,
  j as H,
  c as b,
  a as k,
  g as C,
  d as f,
  l as V,
  b as c,
  V as Ce,
  f as M,
  G as p,
  h as he,
  E as ot,
  L as x,
  O as at,
  u as rt,
  _ as it,
  X as Ne,
  Y as pe,
  n as P,
  o as ve,
  p as T,
  v as G,
  w as ee,
  x as J,
  A as X,
  k as Re,
  N as ct,
  $ as ut,
  F as Oe,
  H as Be,
  I as Ue,
  J as Ye,
  m as ge,
} from "../../chunks/vendor-b6749e9b.js";
import { B as ft, P as ze } from "../../chunks/PostPreview-b8364d34.js";
import { n as mt, w as Ge } from "../../chunks/info-e0f8f29b.js";
import { A as dt } from "../../chunks/ArrowLeftIcon-b097d77f.js";
const _t = () => {
    const n = lt("__svelte__");
    return {
      page: { subscribe: n.page.subscribe },
      navigating: { subscribe: n.navigating.subscribe },
      get preloading() {
        return (
          console.error(
            "stores.preloading is deprecated; use stores.navigating instead",
          ),
          { subscribe: n.navigating.subscribe }
        );
      },
      session: n.session,
    };
  },
  Je = {
    subscribe(n) {
      return _t().page.subscribe(n);
    },
  };
const { window: ht } = it;
function Xe(n, e, t) {
  const o = n.slice();
  return (o[6] = e[t]), o;
}
function Ze(n) {
  let e,
    t,
    o = n[6].title + "",
    s,
    r,
    u,
    h;
  return {
    c() {
      (e = g("li")), (t = g("a")), (s = q(o)), (u = H()), this.h();
    },
    l(a) {
      e = b(a, "LI", { class: !0, style: !0 });
      var l = k(e);
      t = b(l, "A", { class: !0, href: !0 });
      var _ = k(t);
      (s = C(_, o)), _.forEach(f), (u = V(l)), l.forEach(f), this.h();
    },
    h() {
      var a;
      c(t, "class", "!no-underline"),
        c(t, "href", (r = `#${n[6].node.id}`)),
        c(
          e,
          "class",
          "heading list-none my-2 !pl-0 text-base text-slate-400 hover:text-slate-900 dark:text-slate-500 hover:dark:text-slate-100 transition-colors svelte-15xs064",
        ),
        c(e, "style", (h = `--depth: ${n[6].depth}`)),
        Ce(e, "active", ((a = n[0]) == null ? void 0 : a.node) === n[6].node);
    },
    m(a, l) {
      M(a, e, l), p(e, t), p(t, s), p(e, u);
    },
    p(a, l) {
      var _;
      l & 2 && o !== (o = a[6].title + "") && he(s, o),
        l & 2 && r !== (r = `#${a[6].node.id}`) && c(t, "href", r),
        l & 2 && h !== (h = `--depth: ${a[6].depth}`) && c(e, "style", h),
        l & 3 &&
          Ce(e, "active", ((_ = a[0]) == null ? void 0 : _.node) === a[6].node);
    },
    d(a) {
      a && f(e);
    },
  };
}
function pt(n) {
  let e,
    t,
    o,
    s,
    r,
    u,
    h = n[1],
    a = [];
  for (let l = 0; l < h.length; l += 1) a[l] = Ze(Xe(n, h, l));
  return {
    c() {
      (e = g("h6")), (t = q("Sections")), (o = H()), (s = g("ul"));
      for (let l = 0; l < a.length; l += 1) a[l].c();
      this.h();
    },
    l(l) {
      e = b(l, "H6", { id: !0, class: !0 });
      var _ = k(e);
      (t = C(_, "Sections")),
        _.forEach(f),
        (o = V(l)),
        (s = b(l, "UL", { class: !0 }));
      var i = k(s);
      for (let d = 0; d < a.length; d += 1) a[d].l(i);
      i.forEach(f), this.h();
    },
    h() {
      c(e, "id", "__sections"),
        c(
          e,
          "class",
          "uppercase text-slate-400/75 dark:text-slate-600 font-bold text-sm",
        ),
        c(s, "class", "mt-2 !pl-0");
    },
    m(l, _) {
      M(l, e, _), p(e, t), M(l, o, _), M(l, s, _);
      for (let i = 0; i < a.length; i += 1) a[i].m(s, null);
      r || ((u = ot(ht, "scroll", n[2])), (r = !0));
    },
    p(l, [_]) {
      if (_ & 3) {
        h = l[1];
        let i;
        for (i = 0; i < h.length; i += 1) {
          const d = Xe(l, h, i);
          a[i] ? a[i].p(d, _) : ((a[i] = Ze(d)), a[i].c(), a[i].m(s, null));
        }
        for (; i < a.length; i += 1) a[i].d(1);
        a.length = h.length;
      }
    },
    i: x,
    o: x,
    d(l) {
      l && f(e), l && f(o), l && f(s), at(a, l), (r = !1), u();
    },
  };
}
function vt(n, e, t) {
  let { allowedHeadings: o = ["h1", "h2", "h3", "h4", "h5", "h6"] } = e,
    { activeHeading: s = null } = e,
    r,
    u = [];
  function h() {
    const l = [
        ...document.querySelectorAll(
          `article :where(${o.join(", ")}):not(#__sections)`,
        ),
      ],
      _ = l.map((d) => Number(d.nodeName[1])),
      i = Math.min(..._);
    t(
      1,
      (u = l.map((d, w) => ({ title: d.innerText, depth: _[w] - i, node: d }))),
    ),
      s === null && t(0, (s = u[0]));
  }
  rt(() => {
    h(), a();
  }),
    typeof window != "undefined" &&
      Je.subscribe(() => {
        h(), a();
      });
  function a() {
    r = window.scrollY;
    const l =
      u.findIndex((d) => d.node.offsetTop + d.node.clientHeight > r) - 1;
    t(0, (s = u[l]));
    const _ = document.body.scrollHeight;
    (r + window.innerHeight) / _ > 0.999 && t(0, (s = u[u.length - 1]));
  }
  return (
    (n.$$set = (l) => {
      "allowedHeadings" in l && t(3, (o = l.allowedHeadings)),
        "activeHeading" in l && t(0, (s = l.activeHeading));
    }),
    [s, u, a, o]
  );
}
class gt extends Fe {
  constructor(e) {
    super();
    Le(this, e, vt, pt, qe, { allowedHeadings: 3, activeHeading: 0 });
  }
}
function bt(n) {
  switch (n) {
    case "../../../blog/lorem-ipsum.md":
      return Se(() => import("../../chunks/lorem-ipsum-17b84bbe.js"), [
        "chunks/lorem-ipsum-17b84bbe.js",
        "chunks/vendor-b6749e9b.js",
      ]);
    default:
      return new Promise(function (e, t) {
        (typeof queueMicrotask == "function"
          ? queueMicrotask
          : setTimeout)(t.bind(null, new Error("Unknown variable dynamic import: " + n)));
      });
  }
}
function wt(n) {
  switch (n) {
    case "../../../blog/getting-started/index.md":
      return Se(() => import("../../chunks/index-50988308.js"), [
        "chunks/index-50988308.js",
        "chunks/vendor-b6749e9b.js",
      ]);
    default:
      return new Promise(function (e, t) {
        (typeof queueMicrotask == "function"
          ? queueMicrotask
          : setTimeout)(t.bind(null, new Error("Unknown variable dynamic import: " + n)));
      });
  }
}
const Et = (n) => ({}),
  $e = (n) => ({ slot: "icon-start" }),
  kt = (n) => ({}),
  Ke = (n) => ({ slot: "icon-end" });
function yt(n) {
  let e;
  return {
    c() {
      e = q("Back to Posts");
    },
    l(t) {
      e = C(t, "Back to Posts");
    },
    m(t, o) {
      M(t, e, o);
    },
    d(t) {
      t && f(e);
    },
  };
}
function It(n) {
  let e, t;
  return (
    (e = new dt({ props: { class: "h-5 w-5" } })),
    {
      c() {
        G(e.$$.fragment);
      },
      l(o) {
        ee(e.$$.fragment, o);
      },
      m(o, s) {
        J(e, o, s), (t = !0);
      },
      p: x,
      i(o) {
        t || (T(e.$$.fragment, o), (t = !0));
      },
      o(o) {
        P(e.$$.fragment, o), (t = !1);
      },
      d(o) {
        X(e, o);
      },
    }
  );
}
function Mt(n) {
  let e;
  const t = n[11].default,
    o = Oe(t, n, n[12], $e),
    s = o || It();
  return {
    c() {
      s && s.c();
    },
    l(r) {
      s && s.l(r);
    },
    m(r, u) {
      s && s.m(r, u), (e = !0);
    },
    p(r, u) {
      o &&
        o.p &&
        (!e || u & 4096) &&
        Be(o, t, r, r[12], e ? Ye(t, r[12], u, Et) : Ue(r[12]), $e);
    },
    i(r) {
      e || (T(s, r), (e = !0));
    },
    o(r) {
      P(s, r), (e = !1);
    },
    d(r) {
      s && s.d(r);
    },
  };
}
function Tt(n) {
  let e;
  const t = n[11].default,
    o = Oe(t, n, n[12], Ke);
  return {
    c() {
      o && o.c();
    },
    l(s) {
      o && o.l(s);
    },
    m(s, r) {
      o && o.m(s, r), (e = !0);
    },
    p(s, r) {
      o &&
        o.p &&
        (!e || r & 4096) &&
        Be(o, t, s, s[12], e ? Ye(t, s[12], r, kt) : Ue(s[12]), Ke);
    },
    i(s) {
      e || (T(o, s), (e = !0));
    },
    o(s) {
      P(o, s), (e = !1);
    },
    d(s) {
      o && o.d(s);
    },
  };
}
function Qe(n) {
  let e, t, o, s, r, u, h;
  const a = [Pt, At],
    l = [];
  function _(d, w) {
    return d[6] ? 0 : 1;
  }
  (s = _(n)), (r = l[s] = a[s](n));
  let i = n[5] && We(n);
  return {
    c() {
      (e = g("hr")),
        (t = H()),
        (o = g("div")),
        r.c(),
        (u = H()),
        i && i.c(),
        this.h();
    },
    l(d) {
      (e = b(d, "HR", {})), (t = V(d)), (o = b(d, "DIV", { class: !0 }));
      var w = k(o);
      r.l(w), (u = V(w)), i && i.l(w), w.forEach(f), this.h();
    },
    h() {
      c(o, "class", "grid gap-8 grid-cols-1 sm:grid-cols-2");
    },
    m(d, w) {
      M(d, e, w),
        M(d, t, w),
        M(d, o, w),
        l[s].m(o, null),
        p(o, u),
        i && i.m(o, null),
        (h = !0);
    },
    p(d, w) {
      let D = s;
      (s = _(d)),
        s === D
          ? l[s].p(d, w)
          : (ge(),
            P(l[D], 1, 1, () => {
              l[D] = null;
            }),
            ve(),
            (r = l[s]),
            r ? r.p(d, w) : ((r = l[s] = a[s](d)), r.c()),
            T(r, 1),
            r.m(o, u)),
        d[5]
          ? i
            ? (i.p(d, w), w & 32 && T(i, 1))
            : ((i = We(d)), i.c(), T(i, 1), i.m(o, null))
          : i &&
            (ge(),
            P(i, 1, 1, () => {
              i = null;
            }),
            ve());
    },
    i(d) {
      h || (T(r), T(i), (h = !0));
    },
    o(d) {
      P(r), P(i), (h = !1);
    },
    d(d) {
      d && f(e), d && f(t), d && f(o), l[s].d(), i && i.d();
    },
  };
}
function At(n) {
  let e;
  return {
    c() {
      e = g("div");
    },
    l(t) {
      (e = b(t, "DIV", {})), k(e).forEach(f);
    },
    m(t, o) {
      M(t, e, o);
    },
    p: x,
    i: x,
    o: x,
    d(t) {
      t && f(e);
    },
  };
}
function Pt(n) {
  let e, t, o, s, r, u, h;
  return (
    (u = new ze({ props: { post: n[6], small: !0 } })),
    {
      c() {
        (e = g("div")),
          (t = g("h6")),
          (o = q("Previous Post")),
          (s = H()),
          (r = g("div")),
          G(u.$$.fragment),
          this.h();
      },
      l(a) {
        e = b(a, "DIV", { class: !0 });
        var l = k(e);
        t = b(l, "H6", { class: !0 });
        var _ = k(t);
        (o = C(_, "Previous Post")),
          _.forEach(f),
          (s = V(l)),
          (r = b(l, "DIV", { class: !0 }));
        var i = k(r);
        ee(u.$$.fragment, i), i.forEach(f), l.forEach(f), this.h();
      },
      h() {
        c(t, "class", "not-prose post-preview-label svelte-1dho23n"),
          c(r, "class", "flex-1 post-preview svelte-1dho23n"),
          c(e, "class", "flex flex-col");
      },
      m(a, l) {
        M(a, e, l), p(e, t), p(t, o), p(e, s), p(e, r), J(u, r, null), (h = !0);
      },
      p(a, l) {
        const _ = {};
        l & 64 && (_.post = a[6]), u.$set(_);
      },
      i(a) {
        h || (T(u.$$.fragment, a), (h = !0));
      },
      o(a) {
        P(u.$$.fragment, a), (h = !1);
      },
      d(a) {
        a && f(e), X(u);
      },
    }
  );
}
function We(n) {
  let e, t, o, s, r, u, h;
  return (
    (u = new ze({ props: { post: n[5], small: !0 } })),
    {
      c() {
        (e = g("div")),
          (t = g("h6")),
          (o = q("Next Post")),
          (s = H()),
          (r = g("div")),
          G(u.$$.fragment),
          this.h();
      },
      l(a) {
        e = b(a, "DIV", { class: !0 });
        var l = k(e);
        t = b(l, "H6", { class: !0 });
        var _ = k(t);
        (o = C(_, "Next Post")),
          _.forEach(f),
          (s = V(l)),
          (r = b(l, "DIV", { class: !0 }));
        var i = k(r);
        ee(u.$$.fragment, i), i.forEach(f), l.forEach(f), this.h();
      },
      h() {
        c(
          t,
          "class",
          "not-prose post-preview-label flex justify-end svelte-1dho23n",
        ),
          c(r, "class", "flex-1 post-preview svelte-1dho23n"),
          c(e, "class", "flex flex-col");
      },
      m(a, l) {
        M(a, e, l), p(e, t), p(t, o), p(e, s), p(e, r), J(u, r, null), (h = !0);
      },
      p(a, l) {
        const _ = {};
        l & 32 && (_.post = a[5]), u.$set(_);
      },
      i(a) {
        h || (T(u.$$.fragment, a), (h = !0));
      },
      o(a) {
        P(u.$$.fragment, a), (h = !1);
      },
      d(a) {
        a && f(e), X(u);
      },
    }
  );
}
function Dt(n) {
  let e,
    t,
    o,
    s,
    r,
    u,
    h,
    a,
    l,
    _,
    i,
    d,
    w,
    D,
    S,
    E,
    Z,
    le,
    j,
    $,
    N,
    oe,
    ae,
    be,
    R,
    B,
    te = Ne(new Date(pe(n[2])), "MMMM d, yyyy") + "",
    re,
    ie,
    we,
    ne,
    ce,
    Ee,
    F,
    y,
    ue,
    U,
    K,
    Y,
    fe,
    z,
    O,
    me,
    Q,
    A;
  document.title = e = n[1];
  var W = n[0];
  function ke(m) {
    return {};
  }
  W && (y = new W(ke())),
    (Y = new gt({
      props: { allowedHeadings: ["h2", "h3", "h4", "h5", "h6"] },
    })),
    (O = new ft({
      props: {
        href: "/posts",
        $$slots: { "icon-end": [Tt], "icon-start": [Mt], default: [yt] },
        $$scope: { ctx: n },
      },
    }));
  let I = (n[6] || n[5]) && Qe(n);
  return {
    c() {
      (t = g("meta")),
        (s = g("meta")),
        (r = g("meta")),
        (u = g("meta")),
        (h = g("meta")),
        (a = g("meta")),
        (_ = g("meta")),
        (i = g("meta")),
        (d = g("meta")),
        (w = g("meta")),
        (D = g("meta")),
        (S = g("meta")),
        (Z = g("meta")),
        (le = H()),
        (j = g("article")),
        ($ = g("h1")),
        (N = g("a")),
        (oe = q(n[1])),
        (be = H()),
        (R = g("div")),
        (B = g("time")),
        (re = q(te)),
        (we = q(`
    \u2022
    `)),
        (ne = g("span")),
        (ce = q(n[4])),
        (Ee = H()),
        (F = g("div")),
        y && G(y.$$.fragment),
        (ue = H()),
        (U = g("div")),
        (K = g("div")),
        G(Y.$$.fragment),
        (fe = H()),
        (z = g("div")),
        G(O.$$.fragment),
        (me = H()),
        I && I.c(),
        (Q = Re()),
        this.h();
    },
    l(m) {
      const v = ct('[data-svelte="svelte-xeigh5"]', document.head);
      (t = b(v, "META", { name: !0, content: !0 })),
        (s = b(v, "META", { name: !0, content: !0 })),
        (r = b(v, "META", { property: !0, content: !0 })),
        (u = b(v, "META", { property: !0, content: !0 })),
        (h = b(v, "META", { property: !0, content: !0 })),
        (a = b(v, "META", { property: !0, content: !0 })),
        (_ = b(v, "META", { property: !0, content: !0 })),
        (i = b(v, "META", { name: !0, content: !0 })),
        (d = b(v, "META", { property: !0, content: !0 })),
        (w = b(v, "META", { property: !0, content: !0 })),
        (D = b(v, "META", { name: !0, content: !0 })),
        (S = b(v, "META", { name: !0, content: !0 })),
        (Z = b(v, "META", { name: !0, content: !0 })),
        v.forEach(f),
        (le = V(m)),
        (j = b(m, "ARTICLE", { class: !0 }));
      var L = k(j);
      $ = b(L, "H1", { class: !0 });
      var se = k($);
      N = b(se, "A", { class: !0, href: !0 });
      var ye = k(N);
      (oe = C(ye, n[1])),
        ye.forEach(f),
        se.forEach(f),
        (be = V(L)),
        (R = b(L, "DIV", { class: !0 }));
      var de = k(R);
      B = b(de, "TIME", { datetime: !0 });
      var Ie = k(B);
      (re = C(Ie, te)),
        Ie.forEach(f),
        (we = C(
          de,
          `
    \u2022
    `,
        )),
        (ne = b(de, "SPAN", {}));
      var Me = k(ne);
      (ce = C(Me, n[4])),
        Me.forEach(f),
        de.forEach(f),
        (Ee = V(L)),
        (F = b(L, "DIV", { class: !0 }));
      var _e = k(F);
      y && ee(y.$$.fragment, _e),
        (ue = V(_e)),
        (U = b(_e, "DIV", { class: !0, "aria-label": !0 }));
      var Te = k(U);
      K = b(Te, "DIV", { class: !0 });
      var Ae = k(K);
      ee(Y.$$.fragment, Ae),
        Ae.forEach(f),
        Te.forEach(f),
        _e.forEach(f),
        L.forEach(f),
        (fe = V(m)),
        (z = b(m, "DIV", { class: !0 }));
      var Pe = k(z);
      ee(O.$$.fragment, Pe),
        Pe.forEach(f),
        (me = V(m)),
        I && I.l(m),
        (Q = Re()),
        this.h();
    },
    h() {
      c(t, "name", "description"),
        c(t, "content", (o = n[3].text)),
        c(s, "name", "author"),
        c(s, "content", mt),
        c(r, "property", "og:url"),
        c(r, "content", n[9]),
        c(u, "property", "og:type"),
        c(u, "content", "website"),
        c(h, "property", "og:title"),
        c(h, "content", n[1]),
        c(a, "property", "og:description"),
        c(a, "content", (l = n[3].text)),
        c(_, "property", "og:image"),
        c(_, "content", n[8]),
        c(i, "name", "twitter:card"),
        c(i, "content", "summary_large_image"),
        c(d, "property", "twitter:domain"),
        c(d, "content", Ge),
        c(w, "property", "twitter:url"),
        c(w, "content", n[9]),
        c(D, "name", "twitter:title"),
        c(D, "content", n[1]),
        c(S, "name", "twitter:description"),
        c(S, "content", (E = n[3].text)),
        c(Z, "name", "twitter:image"),
        c(Z, "content", n[8]),
        c(N, "class", "!font-medium"),
        c(N, "href", (ae = n[7].url.pathname)),
        c($, "class", "!mt-0 !mb-2"),
        c(B, "datetime", (ie = new Date(pe(n[2])).toISOString())),
        c(R, "class", "opacity-70"),
        c(K, "class", "fixed z-10 px-4 py-2 ml-8 top-[4.5rem]"),
        c(U, "class", "hidden xl:block absolute not-prose left-[100%]"),
        c(U, "aria-label", "Table of Contents"),
        c(F, "class", "relative"),
        c(j, "class", "relative"),
        c(z, "class", "pt-12 flex justify-between");
    },
    m(m, v) {
      p(document.head, t),
        p(document.head, s),
        p(document.head, r),
        p(document.head, u),
        p(document.head, h),
        p(document.head, a),
        p(document.head, _),
        p(document.head, i),
        p(document.head, d),
        p(document.head, w),
        p(document.head, D),
        p(document.head, S),
        p(document.head, Z),
        M(m, le, v),
        M(m, j, v),
        p(j, $),
        p($, N),
        p(N, oe),
        p(j, be),
        p(j, R),
        p(R, B),
        p(B, re),
        p(R, we),
        p(R, ne),
        p(ne, ce),
        p(j, Ee),
        p(j, F),
        y && J(y, F, null),
        p(F, ue),
        p(F, U),
        p(U, K),
        J(Y, K, null),
        M(m, fe, v),
        M(m, z, v),
        J(O, z, null),
        M(m, me, v),
        I && I.m(m, v),
        M(m, Q, v),
        (A = !0);
    },
    p(m, [v]) {
      if (
        ((!A || v & 2) && e !== (e = m[1]) && (document.title = e),
        (!A || (v & 8 && o !== (o = m[3].text))) && c(t, "content", o),
        (!A || v & 2) && c(h, "content", m[1]),
        (!A || (v & 8 && l !== (l = m[3].text))) && c(a, "content", l),
        (!A || v & 2) && c(D, "content", m[1]),
        (!A || (v & 8 && E !== (E = m[3].text))) && c(S, "content", E),
        (!A || v & 2) && he(oe, m[1]),
        (!A || (v & 128 && ae !== (ae = m[7].url.pathname))) &&
          c(N, "href", ae),
        (!A || v & 4) &&
          te !== (te = Ne(new Date(pe(m[2])), "MMMM d, yyyy") + "") &&
          he(re, te),
        (!A || (v & 4 && ie !== (ie = new Date(pe(m[2])).toISOString()))) &&
          c(B, "datetime", ie),
        (!A || v & 16) && he(ce, m[4]),
        W !== (W = m[0]))
      ) {
        if (y) {
          ge();
          const se = y;
          P(se.$$.fragment, 1, 0, () => {
            X(se, 1);
          }),
            ve();
        }
        W
          ? ((y = new W(ke())),
            G(y.$$.fragment),
            T(y.$$.fragment, 1),
            J(y, F, ue))
          : (y = null);
      }
      const L = {};
      v & 4096 && (L.$$scope = { dirty: v, ctx: m }),
        O.$set(L),
        m[6] || m[5]
          ? I
            ? (I.p(m, v), v & 96 && T(I, 1))
            : ((I = Qe(m)), I.c(), T(I, 1), I.m(Q.parentNode, Q))
          : I &&
            (ge(),
            P(I, 1, 1, () => {
              I = null;
            }),
            ve());
    },
    i(m) {
      A ||
        (y && T(y.$$.fragment, m),
        T(Y.$$.fragment, m),
        T(O.$$.fragment, m),
        T(I),
        (A = !0));
    },
    o(m) {
      y && P(y.$$.fragment, m),
        P(Y.$$.fragment, m),
        P(O.$$.fragment, m),
        P(I),
        (A = !1);
    },
    d(m) {
      f(t),
        f(s),
        f(r),
        f(u),
        f(h),
        f(a),
        f(_),
        f(i),
        f(d),
        f(w),
        f(D),
        f(S),
        f(Z),
        m && f(le),
        m && f(j),
        y && X(y),
        X(Y),
        m && f(fe),
        m && f(z),
        X(O),
        m && f(me),
        I && I.d(m),
        m && f(Q);
    },
  };
}
async function Ct({ params: n, fetch: e }) {
  const { slug: t } = n,
    s = (await e("/posts.json").then((u) => u.json())).find(
      (u) => t === u.slug,
    );
  if (!s) return { status: 404, error: "Post not found" };
  const r = s.isIndexFile
    ? await wt(`../../../blog/${s.slug}/index.md`)
    : await bt(`../../../blog/${s.slug}.md`);
  return { props: je(Ve({}, s), { component: r.default }) };
}
function Ht(n, e, t) {
  let o;
  ut(n, Je, (E) => t(7, (o = E)));
  let { $$slots: s = {}, $$scope: r } = e,
    { component: u } = e,
    { title: h } = e,
    { date: a } = e,
    { preview: l } = e,
    { readingTime: _ } = e,
    { slug: i } = e,
    { next: d } = e,
    { previous: w } = e;
  const D = `https://og-image.vercel.app/**${encodeURIComponent(
      h,
    )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`,
    S = `${Ge}/${i}`;
  return (
    (n.$$set = (E) => {
      "component" in E && t(0, (u = E.component)),
        "title" in E && t(1, (h = E.title)),
        "date" in E && t(2, (a = E.date)),
        "preview" in E && t(3, (l = E.preview)),
        "readingTime" in E && t(4, (_ = E.readingTime)),
        "slug" in E && t(10, (i = E.slug)),
        "next" in E && t(5, (d = E.next)),
        "previous" in E && t(6, (w = E.previous)),
        "$$scope" in E && t(12, (r = E.$$scope));
    }),
    [u, h, a, l, _, d, w, o, D, S, i, s, r]
  );
}
class Nt extends Fe {
  constructor(e) {
    super();
    Le(this, e, Ht, Dt, qe, {
      component: 0,
      title: 1,
      date: 2,
      preview: 3,
      readingTime: 4,
      slug: 10,
      next: 5,
      previous: 6,
    });
  }
}
export { Nt as default, Ct as load };
