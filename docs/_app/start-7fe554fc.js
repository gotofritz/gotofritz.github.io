var ie = Object.defineProperty,
  ne = Object.defineProperties;
var ae = Object.getOwnPropertyDescriptors;
var B = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty,
  W = Object.prototype.propertyIsEnumerable;
var G = (i, e, t) =>
    e in i
      ? ie(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  A = (i, e) => {
    for (var t in e || (e = {})) M.call(e, t) && G(i, t, e[t]);
    if (B) for (var t of B(e)) W.call(e, t) && G(i, t, e[t]);
    return i;
  },
  Y = (i, e) => ne(i, ae(e));
var X = (i, e) => {
  var t = {};
  for (var r in i) M.call(i, r) && e.indexOf(r) < 0 && (t[r] = i[r]);
  if (i != null && B)
    for (var r of B(i)) e.indexOf(r) < 0 && W.call(i, r) && (t[r] = i[r]);
  return t;
};
import {
  S as oe,
  i as le,
  s as ce,
  e as fe,
  c as ue,
  a as he,
  d as y,
  b as K,
  f as k,
  t as de,
  g as _e,
  h as pe,
  j as ge,
  k as g,
  l as me,
  m as T,
  n as m,
  o as N,
  p as w,
  q as we,
  r as be,
  u as ve,
  v as E,
  w as I,
  x as R,
  y as O,
  z as C,
  A as L,
  B as V,
  C as z,
  D as F,
} from "./chunks/vendor-b6749e9b.js";
import { _ as D } from "./chunks/preload-helper-ec9aa979.js";
function ye(i) {
  let e, t, r;
  const l = [i[1] || {}];
  var n = i[0][0];
  function o(s) {
    let a = {};
    for (let c = 0; c < l.length; c += 1) a = V(a, l[c]);
    return { props: a };
  }
  return (
    n && (e = new n(o())),
    {
      c() {
        e && E(e.$$.fragment), (t = g());
      },
      l(s) {
        e && I(e.$$.fragment, s), (t = g());
      },
      m(s, a) {
        e && R(e, s, a), k(s, t, a), (r = !0);
      },
      p(s, a) {
        const c = a & 2 ? O(l, [C(s[1] || {})]) : {};
        if (n !== (n = s[0][0])) {
          if (e) {
            T();
            const f = e;
            m(f.$$.fragment, 1, 0, () => {
              L(f, 1);
            }),
              N();
          }
          n
            ? ((e = new n(o())),
              E(e.$$.fragment),
              w(e.$$.fragment, 1),
              R(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(c);
      },
      i(s) {
        r || (e && w(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && m(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && y(t), e && L(e, s);
      },
    }
  );
}
function $e(i) {
  let e, t, r;
  const l = [i[1] || {}];
  var n = i[0][0];
  function o(s) {
    let a = { $$slots: { default: [Le] }, $$scope: { ctx: s } };
    for (let c = 0; c < l.length; c += 1) a = V(a, l[c]);
    return { props: a };
  }
  return (
    n && (e = new n(o(i))),
    {
      c() {
        e && E(e.$$.fragment), (t = g());
      },
      l(s) {
        e && I(e.$$.fragment, s), (t = g());
      },
      m(s, a) {
        e && R(e, s, a), k(s, t, a), (r = !0);
      },
      p(s, a) {
        const c = a & 2 ? O(l, [C(s[1] || {})]) : {};
        if (
          (a & 525 && (c.$$scope = { dirty: a, ctx: s }), n !== (n = s[0][0]))
        ) {
          if (e) {
            T();
            const f = e;
            m(f.$$.fragment, 1, 0, () => {
              L(f, 1);
            }),
              N();
          }
          n
            ? ((e = new n(o(s))),
              E(e.$$.fragment),
              w(e.$$.fragment, 1),
              R(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(c);
      },
      i(s) {
        r || (e && w(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && m(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && y(t), e && L(e, s);
      },
    }
  );
}
function ke(i) {
  let e, t, r;
  const l = [i[2] || {}];
  var n = i[0][1];
  function o(s) {
    let a = {};
    for (let c = 0; c < l.length; c += 1) a = V(a, l[c]);
    return { props: a };
  }
  return (
    n && (e = new n(o())),
    {
      c() {
        e && E(e.$$.fragment), (t = g());
      },
      l(s) {
        e && I(e.$$.fragment, s), (t = g());
      },
      m(s, a) {
        e && R(e, s, a), k(s, t, a), (r = !0);
      },
      p(s, a) {
        const c = a & 4 ? O(l, [C(s[2] || {})]) : {};
        if (n !== (n = s[0][1])) {
          if (e) {
            T();
            const f = e;
            m(f.$$.fragment, 1, 0, () => {
              L(f, 1);
            }),
              N();
          }
          n
            ? ((e = new n(o())),
              E(e.$$.fragment),
              w(e.$$.fragment, 1),
              R(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(c);
      },
      i(s) {
        r || (e && w(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && m(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && y(t), e && L(e, s);
      },
    }
  );
}
function Ee(i) {
  let e, t, r;
  const l = [i[2] || {}];
  var n = i[0][1];
  function o(s) {
    let a = { $$slots: { default: [Re] }, $$scope: { ctx: s } };
    for (let c = 0; c < l.length; c += 1) a = V(a, l[c]);
    return { props: a };
  }
  return (
    n && (e = new n(o(i))),
    {
      c() {
        e && E(e.$$.fragment), (t = g());
      },
      l(s) {
        e && I(e.$$.fragment, s), (t = g());
      },
      m(s, a) {
        e && R(e, s, a), k(s, t, a), (r = !0);
      },
      p(s, a) {
        const c = a & 4 ? O(l, [C(s[2] || {})]) : {};
        if (
          (a & 521 && (c.$$scope = { dirty: a, ctx: s }), n !== (n = s[0][1]))
        ) {
          if (e) {
            T();
            const f = e;
            m(f.$$.fragment, 1, 0, () => {
              L(f, 1);
            }),
              N();
          }
          n
            ? ((e = new n(o(s))),
              E(e.$$.fragment),
              w(e.$$.fragment, 1),
              R(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(c);
      },
      i(s) {
        r || (e && w(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && m(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && y(t), e && L(e, s);
      },
    }
  );
}
function Re(i) {
  let e, t, r;
  const l = [i[3] || {}];
  var n = i[0][2];
  function o(s) {
    let a = {};
    for (let c = 0; c < l.length; c += 1) a = V(a, l[c]);
    return { props: a };
  }
  return (
    n && (e = new n(o())),
    {
      c() {
        e && E(e.$$.fragment), (t = g());
      },
      l(s) {
        e && I(e.$$.fragment, s), (t = g());
      },
      m(s, a) {
        e && R(e, s, a), k(s, t, a), (r = !0);
      },
      p(s, a) {
        const c = a & 8 ? O(l, [C(s[3] || {})]) : {};
        if (n !== (n = s[0][2])) {
          if (e) {
            T();
            const f = e;
            m(f.$$.fragment, 1, 0, () => {
              L(f, 1);
            }),
              N();
          }
          n
            ? ((e = new n(o())),
              E(e.$$.fragment),
              w(e.$$.fragment, 1),
              R(e, t.parentNode, t))
            : (e = null);
        } else n && e.$set(c);
      },
      i(s) {
        r || (e && w(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && m(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && y(t), e && L(e, s);
      },
    }
  );
}
function Le(i) {
  let e, t, r, l;
  const n = [Ee, ke],
    o = [];
  function s(a, c) {
    return a[0][2] ? 0 : 1;
  }
  return (
    (e = s(i)),
    (t = o[e] = n[e](i)),
    {
      c() {
        t.c(), (r = g());
      },
      l(a) {
        t.l(a), (r = g());
      },
      m(a, c) {
        o[e].m(a, c), k(a, r, c), (l = !0);
      },
      p(a, c) {
        let f = e;
        (e = s(a)),
          e === f
            ? o[e].p(a, c)
            : (T(),
              m(o[f], 1, 1, () => {
                o[f] = null;
              }),
              N(),
              (t = o[e]),
              t ? t.p(a, c) : ((t = o[e] = n[e](a)), t.c()),
              w(t, 1),
              t.m(r.parentNode, r));
      },
      i(a) {
        l || (w(t), (l = !0));
      },
      o(a) {
        m(t), (l = !1);
      },
      d(a) {
        o[e].d(a), a && y(r);
      },
    }
  );
}
function H(i) {
  let e,
    t = i[5] && Q(i);
  return {
    c() {
      (e = fe("div")), t && t.c(), this.h();
    },
    l(r) {
      e = ue(r, "DIV", {
        id: !0,
        "aria-live": !0,
        "aria-atomic": !0,
        class: !0,
      });
      var l = he(e);
      t && t.l(l), l.forEach(y), this.h();
    },
    h() {
      K(e, "id", "svelte-announcer"),
        K(e, "aria-live", "assertive"),
        K(e, "aria-atomic", "true"),
        K(e, "class", "svelte-1j55zn5");
    },
    m(r, l) {
      k(r, e, l), t && t.m(e, null);
    },
    p(r, l) {
      r[5]
        ? t
          ? t.p(r, l)
          : ((t = Q(r)), t.c(), t.m(e, null))
        : t && (t.d(1), (t = null));
    },
    d(r) {
      r && y(e), t && t.d();
    },
  };
}
function Q(i) {
  let e;
  return {
    c() {
      e = de(i[6]);
    },
    l(t) {
      e = _e(t, i[6]);
    },
    m(t, r) {
      k(t, e, r);
    },
    p(t, r) {
      r & 64 && pe(e, t[6]);
    },
    d(t) {
      t && y(e);
    },
  };
}
function Se(i) {
  let e, t, r, l, n;
  const o = [$e, ye],
    s = [];
  function a(f, h) {
    return f[0][1] ? 0 : 1;
  }
  (e = a(i)), (t = s[e] = o[e](i));
  let c = i[4] && H(i);
  return {
    c() {
      t.c(), (r = ge()), c && c.c(), (l = g());
    },
    l(f) {
      t.l(f), (r = me(f)), c && c.l(f), (l = g());
    },
    m(f, h) {
      s[e].m(f, h), k(f, r, h), c && c.m(f, h), k(f, l, h), (n = !0);
    },
    p(f, [h]) {
      let u = e;
      (e = a(f)),
        e === u
          ? s[e].p(f, h)
          : (T(),
            m(s[u], 1, 1, () => {
              s[u] = null;
            }),
            N(),
            (t = s[e]),
            t ? t.p(f, h) : ((t = s[e] = o[e](f)), t.c()),
            w(t, 1),
            t.m(r.parentNode, r)),
        f[4]
          ? c
            ? c.p(f, h)
            : ((c = H(f)), c.c(), c.m(l.parentNode, l))
          : c && (c.d(1), (c = null));
    },
    i(f) {
      n || (w(t), (n = !0));
    },
    o(f) {
      m(t), (n = !1);
    },
    d(f) {
      s[e].d(f), f && y(r), c && c.d(f), f && y(l);
    },
  };
}
function Ue(i, e, t) {
  let { stores: r } = e,
    { page: l } = e,
    { components: n } = e,
    { props_0: o = null } = e,
    { props_1: s = null } = e,
    { props_2: a = null } = e;
  we("__svelte__", r), be(r.page.notify);
  let c = !1,
    f = !1,
    h = null;
  return (
    ve(() => {
      const u = r.page.subscribe(() => {
        c && (t(5, (f = !0)), t(6, (h = document.title || "untitled page")));
      });
      return t(4, (c = !0)), u;
    }),
    (i.$$set = (u) => {
      "stores" in u && t(7, (r = u.stores)),
        "page" in u && t(8, (l = u.page)),
        "components" in u && t(0, (n = u.components)),
        "props_0" in u && t(1, (o = u.props_0)),
        "props_1" in u && t(2, (s = u.props_1)),
        "props_2" in u && t(3, (a = u.props_2));
    }),
    (i.$$.update = () => {
      i.$$.dirty & 384 && r.page.set(l);
    }),
    [n, o, s, a, c, f, h, r, l]
  );
}
class Ae extends oe {
  constructor(e) {
    super();
    le(this, e, Ue, Se, ce, {
      stores: 7,
      page: 8,
      components: 0,
      props_0: 1,
      props_1: 2,
      props_2: 3,
    });
  }
}
const $ = [
    () =>
      D(() => import("./pages/__layout.svelte-9b6258e8.js"), [
        "pages/__layout.svelte-9b6258e8.js",
        "assets/pages/__layout.svelte-a659396d.css",
        "chunks/vendor-b6749e9b.js",
        "chunks/info-e0f8f29b.js",
      ]),
    () =>
      D(() => import("./error.svelte-bee21140.js"), [
        "error.svelte-bee21140.js",
        "chunks/vendor-b6749e9b.js",
      ]),
    () =>
      D(() => import("./pages/index.svelte-d342d5a9.js"), [
        "pages/index.svelte-d342d5a9.js",
        "chunks/vendor-b6749e9b.js",
        "chunks/PostPreview-b8364d34.js",
        "assets/PostPreview-27457bd9.css",
        "chunks/info-e0f8f29b.js",
      ]),
    () =>
      D(() => import("./pages/blog/_slug_.svelte-076bd140.js"), [
        "pages/blog/_slug_.svelte-076bd140.js",
        "assets/pages/blog/_slug_.svelte-22927b1b.css",
        "chunks/preload-helper-ec9aa979.js",
        "chunks/vendor-b6749e9b.js",
        "chunks/PostPreview-b8364d34.js",
        "assets/PostPreview-27457bd9.css",
        "chunks/info-e0f8f29b.js",
        "chunks/ArrowLeftIcon-b097d77f.js",
      ]),
    () =>
      D(() => import("./pages/blog/_...page_.svelte-5f12d862.js"), [
        "pages/blog/_...page_.svelte-5f12d862.js",
        "chunks/vendor-b6749e9b.js",
        "chunks/ArrowLeftIcon-b097d77f.js",
        "chunks/PostPreview-b8364d34.js",
        "assets/PostPreview-27457bd9.css",
        "chunks/info-e0f8f29b.js",
      ]),
  ],
  Z = decodeURIComponent,
  je = [
    [/^\/$/, [$[0], $[2]], [$[1]]],
    ,
    ,
    ,
    [
      /^\/posts\/([^/]+?)\/?$/,
      [$[0], $[3]],
      [$[1]],
      (i) => ({ slug: Z(i[1]) }),
    ],
    [
      /^\/posts(?:\/(.*))?\/?$/,
      [$[0], $[4]],
      [$[1]],
      (i) => ({ page: Z(i[1] || "") }),
    ],
  ],
  Te = [$[0](), $[1]()];
function Ne(i) {
  let e = i.baseURI;
  if (!e) {
    const t = i.getElementsByTagName("base");
    e = t.length ? t[0].href : i.URL;
  }
  return e;
}
let x = "";
function Pe(i) {
  (x = i.base), i.assets;
}
function J() {
  return { x: pageXOffset, y: pageYOffset };
}
function ee(i) {
  return i
    .composedPath()
    .find((t) => t instanceof Node && t.nodeName.toUpperCase() === "A");
}
function te(i) {
  return i instanceof SVGAElement
    ? new URL(i.href.baseVal, document.baseURI)
    : new URL(i.href);
}
class Ie {
  constructor({ base: e, routes: t, trailing_slash: r, renderer: l }) {
    (this.base = e),
      (this.routes = t),
      (this.trailing_slash = r),
      (this.navigating = 0),
      (this.renderer = l),
      (l.router = this),
      (this.enabled = !0),
      document.body.setAttribute("tabindex", "-1"),
      history.replaceState(history.state || {}, "", location.href);
  }
  init_listeners() {
    "scrollRestoration" in history && (history.scrollRestoration = "manual"),
      addEventListener("beforeunload", () => {
        history.scrollRestoration = "auto";
      }),
      addEventListener("load", () => {
        history.scrollRestoration = "manual";
      });
    let e;
    addEventListener("scroll", () => {
      clearTimeout(e),
        (e = setTimeout(() => {
          const n = Y(A({}, history.state || {}), { "sveltekit:scroll": J() });
          history.replaceState(n, document.title, window.location.href);
        }, 200));
    });
    const t = (n) => {
      const o = ee(n);
      o &&
        o.href &&
        o.hasAttribute("sveltekit:prefetch") &&
        this.prefetch(te(o));
    };
    let r;
    const l = (n) => {
      clearTimeout(r),
        (r = setTimeout(() => {
          var o;
          (o = n.target) == null ||
            o.dispatchEvent(
              new CustomEvent("sveltekit:trigger_prefetch", { bubbles: !0 }),
            );
        }, 20));
    };
    addEventListener("touchstart", t),
      addEventListener("mousemove", l),
      addEventListener("sveltekit:trigger_prefetch", t),
      addEventListener("click", (n) => {
        if (
          !this.enabled ||
          n.button ||
          n.which !== 1 ||
          n.metaKey ||
          n.ctrlKey ||
          n.shiftKey ||
          n.altKey ||
          n.defaultPrevented
        )
          return;
        const o = ee(n);
        if (!o || !o.href) return;
        const s = te(o);
        if (s.toString() === location.href) {
          location.hash || n.preventDefault();
          return;
        }
        const c = (o.getAttribute("rel") || "").split(/\s+/);
        if (
          o.hasAttribute("download") ||
          (c && c.includes("external")) ||
          (o instanceof SVGAElement ? o.target.baseVal : o.target) ||
          !this.owns(s)
        )
          return;
        if (s.href.split("#")[0] === location.href.split("#")[0]) {
          setTimeout(() => history.pushState({}, "", s.href));
          return;
        }
        history.pushState({}, "", s.href);
        const f = o.hasAttribute("sveltekit:noscroll");
        this._navigate(s, f ? J() : null, !1, [], s.hash), n.preventDefault();
      }),
      addEventListener("popstate", (n) => {
        if (n.state && this.enabled) {
          const o = new URL(location.href);
          this._navigate(o, n.state["sveltekit:scroll"], !1, []);
        }
      });
  }
  owns(e) {
    return e.origin === location.origin && e.pathname.startsWith(this.base);
  }
  parse(e) {
    if (this.owns(e)) {
      const t = decodeURI(e.pathname.slice(this.base.length) || "/");
      return {
        id: e.pathname + e.search,
        routes: this.routes.filter(([r]) => r.test(t)),
        url: e,
        path: t,
      };
    }
  }
  async goto(
    e,
    {
      noscroll: t = !1,
      replaceState: r = !1,
      keepfocus: l = !1,
      state: n = {},
    } = {},
    o,
  ) {
    const s = new URL(e, Ne(document));
    return this.enabled && this.owns(s)
      ? (history[r ? "replaceState" : "pushState"](n, "", e),
        this._navigate(s, t ? J() : null, l, o, s.hash))
      : ((location.href = s.href), new Promise(() => {}));
  }
  enable() {
    this.enabled = !0;
  }
  disable() {
    this.enabled = !1;
  }
  async prefetch(e) {
    const t = this.parse(e);
    if (!t)
      throw new Error(
        "Attempted to prefetch a URL that does not belong to this app",
      );
    return this.renderer.load(t);
  }
  async _navigate(e, t, r, l, n) {
    const o = this.parse(e);
    if (!o)
      throw new Error(
        "Attempted to navigate to a URL that does not belong to this app",
      );
    this.navigating ||
      dispatchEvent(new CustomEvent("sveltekit:navigation-start")),
      this.navigating++;
    let { pathname: s } = e;
    this.trailing_slash === "never"
      ? s !== "/" && s.endsWith("/") && (s = s.slice(0, -1))
      : this.trailing_slash === "always" &&
        !e.pathname.split("/").pop().includes(".") &&
        !s.endsWith("/") &&
        (s += "/"),
      (o.url = new URL(e.origin + s + e.search + e.hash)),
      history.replaceState({}, "", o.url),
      await this.renderer.handle_navigation(o, l, !1, {
        hash: n,
        scroll: t,
        keepfocus: r,
      }),
      this.navigating--,
      this.navigating ||
        dispatchEvent(new CustomEvent("sveltekit:navigation-end"));
  }
}
function se(i) {
  return i instanceof Error || (i && i.name && i.message)
    ? i
    : new Error(JSON.stringify(i));
}
function Oe(i) {
  let e = 5381,
    t = i.length;
  if (typeof i == "string") for (; t; ) e = (e * 33) ^ i.charCodeAt(--t);
  else for (; t; ) e = (e * 33) ^ i[--t];
  return (e >>> 0).toString(36);
}
function Ce(i) {
  const e = i.status && i.status >= 400 && i.status <= 599 && !i.redirect;
  if (i.error || e) {
    const t = i.status;
    if (!i.error && e) return { status: t || 500, error: new Error() };
    const r = typeof i.error == "string" ? new Error(i.error) : i.error;
    return r instanceof Error
      ? !t || t < 400 || t > 599
        ? (console.warn(
            '"error" returned from load() without a valid status code \u2014 defaulting to 500',
          ),
          { status: 500, error: r })
        : { status: t, error: r }
      : {
          status: 500,
          error: new Error(
            `"error" property returned from load() must be a string or instance of Error, received type "${typeof r}"`,
          ),
        };
  }
  if (i.redirect) {
    if (!i.status || Math.floor(i.status / 100) !== 3)
      return {
        status: 500,
        error: new Error(
          '"redirect" property returned from load() must be accompanied by a 3xx status code',
        ),
      };
    if (typeof i.redirect != "string")
      return {
        status: 500,
        error: new Error(
          '"redirect" property returned from load() must be a string',
        ),
      };
  }
  if (i.context)
    throw new Error(
      'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.',
    );
  return i;
}
function re(i) {
  const e = z(i);
  let t = !0;
  function r() {
    (t = !0), e.update((o) => o);
  }
  function l(o) {
    (t = !1), e.set(o);
  }
  function n(o) {
    let s;
    return e.subscribe((a) => {
      (s === void 0 || (t && a !== s)) && o((s = a));
    });
  }
  return { notify: r, set: l, subscribe: n };
}
function Ve(i, e) {
  const t = typeof i == "string" ? i : i.url;
  let r = `script[data-type="svelte-data"][data-url=${JSON.stringify(t)}]`;
  e && typeof e.body == "string" && (r += `[data-body="${Oe(e.body)}"]`);
  const l = document.querySelector(r);
  if (l && l.textContent) {
    const n = JSON.parse(l.textContent),
      { body: o } = n,
      s = X(n, ["body"]);
    return Promise.resolve(new Response(o, s));
  }
  return fetch(i, e);
}
class De {
  constructor({ Root: e, fallback: t, target: r, session: l }) {
    (this.Root = e),
      (this.fallback = t),
      this.router,
      (this.target = r),
      (this.started = !1),
      (this.session_id = 1),
      (this.invalid = new Set()),
      (this.invalidating = null),
      (this.autoscroll = !0),
      (this.updating = !1),
      (this.current = { url: null, session_id: 0, branch: [] }),
      (this.cache = new Map()),
      (this.loading = { id: null, promise: null }),
      (this.stores = {
        url: re({}),
        page: re({}),
        navigating: z(null),
        session: z(l),
      }),
      (this.$session = null),
      (this.root = null);
    let n = !1;
    this.stores.session.subscribe(async (o) => {
      if (((this.$session = o), !n || !this.router)) return;
      this.session_id += 1;
      const s = this.router.parse(new URL(location.href));
      s && this.update(s, [], !0);
    }),
      (n = !0);
  }
  disable_scroll_handling() {
    (this.updating || !this.started) && (this.autoscroll = !1);
  }
  async start({ status: e, error: t, nodes: r, url: l, params: n }) {
    const o = [];
    let s = {},
      a,
      c;
    try {
      for (let f = 0; f < r.length; f += 1) {
        const h = f === r.length - 1,
          u = await this._load_node({
            module: await r[f],
            url: l,
            params: n,
            stuff: s,
            status: h ? e : void 0,
            error: h ? t : void 0,
          });
        if ((o.push(u), u && u.loaded))
          if (u.loaded.error) {
            if (t) throw u.loaded.error;
            c = { status: u.loaded.status, error: u.loaded.error, url: l };
          } else u.loaded.stuff && (s = A(A({}, s), u.loaded.stuff));
      }
      a = c
        ? await this._load_error(c)
        : await this._get_navigation_result_from_branch({
            url: l,
            params: n,
            branch: o,
            status: e,
            error: t,
          });
    } catch (f) {
      if (t) throw f;
      a = await this._load_error({ status: 500, error: se(f), url: l });
    }
    if (a.redirect) {
      location.href = new URL(a.redirect, location.href).href;
      return;
    }
    this._init(a);
  }
  async handle_navigation(e, t, r, l) {
    this.started &&
      this.stores.navigating.set({ from: this.current.url, to: e.url }),
      await this.update(e, t, r, l);
  }
  async update(e, t, r, l) {
    var a;
    const n = (this.token = {});
    let o = await this._get_navigation_result(e, r);
    if (n !== this.token) return;
    if ((this.invalid.clear(), o.redirect))
      if (t.length > 10 || t.includes(e.url.pathname))
        o = await this._load_error({
          status: 500,
          error: new Error("Redirect loop"),
          url: e.url,
        });
      else {
        this.router
          ? this.router.goto(o.redirect, { replaceState: !0 }, [
              ...t,
              e.url.pathname,
            ])
          : (location.href = new URL(o.redirect, location.href).href);
        return;
      }
    if (
      ((this.updating = !0),
      this.started
        ? ((this.current = o.state),
          this.root.$set(o.props),
          this.stores.navigating.set(null))
        : this._init(o),
      l)
    ) {
      const { hash: c, scroll: f, keepfocus: h } = l;
      if (
        (h ||
          ((a = getSelection()) == null || a.removeAllRanges(),
          document.body.focus()),
        await F(),
        this.autoscroll)
      ) {
        const u = c && document.getElementById(c.slice(1));
        f ? scrollTo(f.x, f.y) : u ? u.scrollIntoView() : scrollTo(0, 0);
      }
    } else await F();
    if (
      ((this.loading.promise = null),
      (this.loading.id = null),
      (this.autoscroll = !0),
      (this.updating = !1),
      !this.router)
    )
      return;
    const s = o.state.branch[o.state.branch.length - 1];
    s && s.module.router === !1 ? this.router.disable() : this.router.enable();
  }
  load(e) {
    return (
      (this.loading.promise = this._get_navigation_result(e, !1)),
      (this.loading.id = e.id),
      this.loading.promise
    );
  }
  invalidate(e) {
    return (
      this.invalid.add(e),
      this.invalidating ||
        (this.invalidating = Promise.resolve().then(async () => {
          const t = this.router && this.router.parse(new URL(location.href));
          t && (await this.update(t, [], !0)), (this.invalidating = null);
        })),
      this.invalidating
    );
  }
  _init(e) {
    this.current = e.state;
    const t = document.querySelector("style[data-svelte]");
    t && t.remove(),
      (this.root = new this.Root({
        target: this.target,
        props: A({ stores: this.stores }, e.props),
        hydrate: !0,
      })),
      (this.started = !0);
  }
  async _get_navigation_result(e, t) {
    if (this.loading.id === e.id && this.loading.promise)
      return this.loading.promise;
    for (let r = 0; r < e.routes.length; r += 1) {
      const l = e.routes[r];
      let n = r + 1;
      for (; n < e.routes.length; ) {
        const s = e.routes[n];
        if (s[0].toString() === l[0].toString())
          s[1].forEach((a) => a()), (n += 1);
        else break;
      }
      const o = await this._load({ route: l, info: e }, t);
      if (o) return o;
    }
    return await this._load_error({
      status: 404,
      error: new Error(`Not found: ${e.url.pathname}`),
      url: e.url,
    });
  }
  async _get_navigation_result_from_branch({
    url: e,
    params: t,
    branch: r,
    status: l,
    error: n,
  }) {
    const o = r.filter(Boolean),
      s = o.find((h) => h.loaded && h.loaded.redirect),
      a = {
        redirect: s && s.loaded ? s.loaded.redirect : void 0,
        state: { url: e, params: t, branch: r, session_id: this.session_id },
        props: { components: o.map((h) => h.module.default) },
      };
    for (let h = 0; h < o.length; h += 1) {
      const u = o[h].loaded;
      a.props[`props_${h}`] = u ? await u.props : null;
    }
    if (!this.current.url || e.href !== this.current.url.href) {
      a.props.page = { url: e, params: t, status: l, error: n };
      const h = (u, p) => {
        Object.defineProperty(a.props.page, u, {
          get: () => {
            throw new Error(`$page.${u} has been replaced by $page.url.${p}`);
          },
        });
      };
      h("origin", "origin"), h("path", "pathname"), h("query", "searchParams");
    }
    const c = o[o.length - 1],
      f = c.loaded && c.loaded.maxage;
    if (f) {
      const h = e.pathname + e.search;
      let u = !1;
      const p = () => {
          this.cache.get(h) === a && this.cache.delete(h), S(), clearTimeout(j);
        },
        j = setTimeout(p, f * 1e3),
        S = this.stores.session.subscribe(() => {
          u && p();
        });
      (u = !0), this.cache.set(h, a);
    }
    return a;
  }
  async _load_node({
    status: e,
    error: t,
    module: r,
    url: l,
    params: n,
    stuff: o,
  }) {
    const s = {
        module: r,
        uses: {
          params: new Set(),
          url: !1,
          session: !1,
          stuff: !1,
          dependencies: [],
        },
        loaded: null,
        stuff: o,
      },
      a = {};
    for (const f in n)
      Object.defineProperty(a, f, {
        get() {
          return s.uses.params.add(f), n[f];
        },
        enumerable: !0,
      });
    const c = this.$session;
    if (r.load) {
      const { started: f } = this,
        h = {
          params: a,
          get url() {
            return (s.uses.url = !0), l;
          },
          get session() {
            return (s.uses.session = !0), c;
          },
          get stuff() {
            return (s.uses.stuff = !0), A({}, o);
          },
          fetch(p, j) {
            const S = typeof p == "string" ? p : p.url,
              { href: U } = new URL(S, l);
            return s.uses.dependencies.push(U), f ? fetch(p, j) : Ve(p, j);
          },
        };
      t && ((h.status = e), (h.error = t));
      const u = await r.load.call(null, h);
      if (!u) return;
      (s.loaded = Ce(u)), s.loaded.stuff && (s.stuff = s.loaded.stuff);
    }
    return s;
  }
  async _load({ route: e, info: { url: t, path: r } }, l) {
    const n = t.pathname + t.search;
    if (!l) {
      const d = this.cache.get(n);
      if (d) return d;
    }
    const [o, s, a, c] = e,
      f = c ? c(o.exec(r)) : {},
      h = this.current.url && {
        url: n !== this.current.url.pathname + this.current.url.search,
        params: Object.keys(f).filter((d) => this.current.params[d] !== f[d]),
        session: this.session_id !== this.current.session_id,
      };
    let u = [],
      p = {},
      j = !1,
      S = 200,
      U;
    s.forEach((d) => d());
    e: for (let d = 0; d < s.length; d += 1) {
      let _;
      try {
        if (!s[d]) continue;
        const b = await s[d](),
          v = this.current.branch[d];
        if (
          !v ||
          b !== v.module ||
          (h.url && v.uses.url) ||
          h.params.some((P) => v.uses.params.has(P)) ||
          (h.session && v.uses.session) ||
          v.uses.dependencies.some((P) => this.invalid.has(P)) ||
          (j && v.uses.stuff)
        ) {
          _ = await this._load_node({ module: b, url: t, params: f, stuff: p });
          const P = d === s.length - 1;
          if (_ && _.loaded) {
            if (
              (_.loaded.error && ((S = _.loaded.status), (U = _.loaded.error)),
              _.loaded.redirect)
            )
              return {
                redirect: _.loaded.redirect,
                props: {},
                state: this.current,
              };
            _.loaded.stuff && (j = !0);
          } else if (P && b.load) return;
        } else _ = v;
      } catch (b) {
        (S = 500), (U = se(b));
      }
      if (U) {
        for (; d--; )
          if (a[d]) {
            let b,
              v,
              q = d;
            for (; !(v = u[q]); ) q -= 1;
            try {
              if (
                ((b = await this._load_node({
                  status: S,
                  error: U,
                  module: await a[d](),
                  url: t,
                  params: f,
                  stuff: v.stuff,
                })),
                b && b.loaded && b.loaded.error)
              )
                continue;
              u = u.slice(0, q + 1).concat(b);
              break e;
            } catch {
              continue;
            }
          }
        return await this._load_error({ status: S, error: U, url: t });
      } else
        _ && _.loaded && _.loaded.stuff && (p = A(A({}, p), _.loaded.stuff)),
          u.push(_);
    }
    return await this._get_navigation_result_from_branch({
      url: t,
      params: f,
      branch: u,
      status: S,
      error: U,
    });
  }
  async _load_error({ status: e, error: t, url: r }) {
    const l = {},
      n = await this._load_node({
        module: await this.fallback[0],
        url: r,
        params: l,
        stuff: {},
      }),
      o = [
        n,
        await this._load_node({
          status: e,
          error: t,
          module: await this.fallback[1],
          url: r,
          params: l,
          stuff: (n && n.loaded && n.loaded.stuff) || {},
        }),
      ];
    return await this._get_navigation_result_from_branch({
      url: r,
      params: l,
      branch: o,
      status: e,
      error: t,
    });
  }
}
async function ze({
  paths: i,
  target: e,
  session: t,
  route: r,
  spa: l,
  trailing_slash: n,
  hydrate: o,
}) {
  const s = new De({ Root: Ae, fallback: Te, target: e, session: t }),
    a = r
      ? new Ie({ base: i.base, routes: je, trailing_slash: n, renderer: s })
      : null;
  Pe(i),
    o && (await s.start(o)),
    a &&
      (l && a.goto(location.href, { replaceState: !0 }, []),
      a.init_listeners()),
    dispatchEvent(new CustomEvent("sveltekit:start"));
}
export { ze as start };
