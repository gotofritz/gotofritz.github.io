import {
  S as te,
  i as se,
  s as le,
  e as j,
  v as E,
  j as L,
  c as I,
  a as y,
  w as V,
  l as A,
  d as g,
  b as B,
  f as w,
  x as N,
  G as D,
  p as m,
  n as $,
  A as S,
  N as oe,
  o as U,
  O as ne,
  t as J,
  g as O,
  m as C,
  L as q,
  F as R,
  H as z,
  I as K,
  J as M,
} from "../../chunks/vendor-b6749e9b.js";
import { A as re } from "../../chunks/ArrowLeftIcon-b097d77f.js";
import { P as ae, B as Q } from "../../chunks/PostPreview-b8364d34.js";
import { n as T } from "../../chunks/info-e0f8f29b.js";
const ie = (n) => ({}),
  W = (n) => ({ slot: "icon-start" }),
  ce = (n) => ({}),
  X = (n) => ({ slot: "icon-end" });
function Y(n, t, s) {
  const e = n.slice();
  return (e[6] = t[s]), e;
}
function Z(n) {
  let t, s, e, l;
  return (
    (s = new ae({ props: { post: n[6] } })),
    {
      c() {
        (t = j("div")), E(s.$$.fragment), (e = L()), this.h();
      },
      l(o) {
        t = I(o, "DIV", { class: !0 });
        var a = y(t);
        V(s.$$.fragment, a), (e = A(a)), a.forEach(g), this.h();
      },
      h() {
        B(t, "class", "py-8 first:pt-0");
      },
      m(o, a) {
        w(o, t, a), N(s, t, null), D(t, e), (l = !0);
      },
      p(o, a) {
        const c = {};
        a & 1 && (c.post = o[6]), s.$set(c);
      },
      i(o) {
        l || (m(s.$$.fragment, o), (l = !0));
      },
      o(o) {
        $(s.$$.fragment, o), (l = !1);
      },
      d(o) {
        o && g(t), S(s);
      },
    }
  );
}
function fe(n) {
  let t;
  return {
    c() {
      t = j("div");
    },
    l(s) {
      (t = I(s, "DIV", {})), y(t).forEach(g);
    },
    m(s, e) {
      w(s, t, e);
    },
    p: q,
    i: q,
    o: q,
    d(s) {
      s && g(t);
    },
  };
}
function ue(n) {
  let t, s;
  return (
    (t = new Q({
      props: {
        raised: !1,
        href: `/blog/page/${n[1] - 1}`,
        $$slots: { "icon-end": [me], "icon-start": [de], default: [_e] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        E(t.$$.fragment);
      },
      l(e) {
        V(t.$$.fragment, e);
      },
      m(e, l) {
        N(t, e, l), (s = !0);
      },
      p(e, l) {
        const o = {};
        l & 2 && (o.href = `/blog/page/${e[1] - 1}`),
          l & 32 && (o.$$scope = { dirty: l, ctx: e }),
          t.$set(o);
      },
      i(e) {
        s || (m(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        $(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        S(t, e);
      },
    }
  );
}
function _e(n) {
  let t;
  return {
    c() {
      t = J("Previous");
    },
    l(s) {
      t = O(s, "Previous");
    },
    m(s, e) {
      w(s, t, e);
    },
    d(s) {
      s && g(t);
    },
  };
}
function pe(n) {
  let t, s;
  return (
    (t = new re({ props: { class: "h-5 w-5" } })),
    {
      c() {
        E(t.$$.fragment);
      },
      l(e) {
        V(t.$$.fragment, e);
      },
      m(e, l) {
        N(t, e, l), (s = !0);
      },
      p: q,
      i(e) {
        s || (m(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        $(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        S(t, e);
      },
    }
  );
}
function de(n) {
  let t;
  const s = n[4].default,
    e = R(s, n, n[5], W),
    l = e || pe();
  return {
    c() {
      l && l.c();
    },
    l(o) {
      l && l.l(o);
    },
    m(o, a) {
      l && l.m(o, a), (t = !0);
    },
    p(o, a) {
      e &&
        e.p &&
        (!t || a & 32) &&
        z(e, s, o, o[5], t ? M(s, o[5], a, ie) : K(o[5]), W);
    },
    i(o) {
      t || (m(l, o), (t = !0));
    },
    o(o) {
      $(l, o), (t = !1);
    },
    d(o) {
      l && l.d(o);
    },
  };
}
function me(n) {
  let t;
  const s = n[4].default,
    e = R(s, n, n[5], X);
  return {
    c() {
      e && e.c();
    },
    l(l) {
      e && e.l(l);
    },
    m(l, o) {
      e && e.m(l, o), (t = !0);
    },
    p(l, o) {
      e &&
        e.p &&
        (!t || o & 32) &&
        z(e, s, l, l[5], t ? M(s, l[5], o, ce) : K(l[5]), X);
    },
    i(l) {
      t || (m(e, l), (t = !0));
    },
    o(l) {
      $(e, l), (t = !1);
    },
    d(l) {
      e && e.d(l);
    },
  };
}
function x(n) {
  let t, s;
  return (
    (t = new Q({
      props: {
        raised: !1,
        href: `/blog/page/${n[1] + 1}`,
        $$slots: { default: [he] },
        $$scope: { ctx: n },
      },
    })),
    {
      c() {
        E(t.$$.fragment);
      },
      l(e) {
        V(t.$$.fragment, e);
      },
      m(e, l) {
        N(t, e, l), (s = !0);
      },
      p(e, l) {
        const o = {};
        l & 2 && (o.href = `/blog/page/${e[1] + 1}`),
          l & 32 && (o.$$scope = { dirty: l, ctx: e }),
          t.$set(o);
      },
      i(e) {
        s || (m(t.$$.fragment, e), (s = !0));
      },
      o(e) {
        $(t.$$.fragment, e), (s = !1);
      },
      d(e) {
        S(t, e);
      },
    }
  );
}
function he(n) {
  let t;
  return {
    c() {
      t = J("Next");
    },
    l(s) {
      t = O(s, "Next");
    },
    m(s, e) {
      w(s, t, e);
    },
    d(s) {
      s && g(t);
    },
  };
}
function ge(n) {
  let t, s, e, l, o, a, c, p, d, P;
  document.title = t = "" + (T + " | Posts");
  let b = n[0],
    i = [];
  for (let r = 0; r < b.length; r += 1) i[r] = Z(Y(n, b, r));
  const ee = (r) =>
      $(i[r], 1, 1, () => {
        i[r] = null;
      }),
    G = [ue, fe],
    v = [];
  function H(r, u) {
    return r[3] ? 1 : 0;
  }
  (c = H(n)), (p = v[c] = G[c](n));
  let f = n[2] && x(n);
  return {
    c() {
      (s = L()), (e = j("div")), (l = j("div"));
      for (let r = 0; r < i.length; r += 1) i[r].c();
      (o = L()), (a = j("div")), p.c(), (d = L()), f && f.c(), this.h();
    },
    l(r) {
      oe('[data-svelte="svelte-1j9di4b"]', document.head).forEach(g),
        (s = A(r)),
        (e = I(r, "DIV", { class: !0 }));
      var h = y(e);
      l = I(h, "DIV", { class: !0 });
      var _ = y(l);
      for (let F = 0; F < i.length; F += 1) i[F].l(_);
      _.forEach(g), (o = A(h)), (a = I(h, "DIV", { class: !0 }));
      var k = y(a);
      p.l(k), (d = A(k)), f && f.l(k), k.forEach(g), h.forEach(g), this.h();
    },
    h() {
      B(
        l,
        "class",
        "flex-grow divide-y divide-slate-300 dark:divide-slate-700",
      ),
        B(
          a,
          "class",
          "flex visible items-center justify-between pt-8 opacity-70",
        ),
        B(e, "class", "flex flex-col flex-grow");
    },
    m(r, u) {
      w(r, s, u), w(r, e, u), D(e, l);
      for (let h = 0; h < i.length; h += 1) i[h].m(l, null);
      D(e, o), D(e, a), v[c].m(a, null), D(a, d), f && f.m(a, null), (P = !0);
    },
    p(r, [u]) {
      if (
        ((!P || u & 0) &&
          t !== (t = "" + (T + " | Posts")) &&
          (document.title = t),
        u & 1)
      ) {
        b = r[0];
        let _;
        for (_ = 0; _ < b.length; _ += 1) {
          const k = Y(r, b, _);
          i[_]
            ? (i[_].p(k, u), m(i[_], 1))
            : ((i[_] = Z(k)), i[_].c(), m(i[_], 1), i[_].m(l, null));
        }
        for (C(), _ = b.length; _ < i.length; _ += 1) ee(_);
        U();
      }
      let h = c;
      (c = H(r)),
        c === h
          ? v[c].p(r, u)
          : (C(),
            $(v[h], 1, 1, () => {
              v[h] = null;
            }),
            U(),
            (p = v[c]),
            p ? p.p(r, u) : ((p = v[c] = G[c](r)), p.c()),
            m(p, 1),
            p.m(a, d)),
        r[2]
          ? f
            ? (f.p(r, u), u & 4 && m(f, 1))
            : ((f = x(r)), f.c(), m(f, 1), f.m(a, null))
          : f &&
            (C(),
            $(f, 1, 1, () => {
              f = null;
            }),
            U());
    },
    i(r) {
      if (!P) {
        for (let u = 0; u < b.length; u += 1) m(i[u]);
        m(p), m(f), (P = !0);
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1) $(i[u]);
      $(p), $(f), (P = !1);
    },
    d(r) {
      r && g(s), r && g(e), ne(i, r), v[c].d(), f && f.d();
    },
  };
}
const Pe = !0,
  je = async ({ fetch: n, params: t }) => {
    let s = 1,
      e = 10;
    if (t.page)
      try {
        s = parseInt(t.page.split("page/").pop());
      } catch (a) {
        console.error(a);
      }
    const l = new URLSearchParams();
    l.set("page", s), l.set("limit", e);
    const o = await n(`/posts.json?${l.toString()}`).then((a) => a.json());
    return o.length == 0 && s > 1
      ? { redirect: "/posts", status: 302 }
      : { props: { posts: o, page: s, limit: e } };
  };
function $e(n, t, s) {
  let e,
    l,
    { $$slots: o = {}, $$scope: a } = t,
    { posts: c } = t,
    { page: p } = t;
  return (
    (n.$$set = (d) => {
      "posts" in d && s(0, (c = d.posts)),
        "page" in d && s(1, (p = d.page)),
        "$$scope" in d && s(5, (a = d.$$scope));
    }),
    (n.$$.update = () => {
      var d;
      n.$$.dirty & 2 && s(3, (e = p === 1)),
        n.$$.dirty & 1 &&
          s(2, (l = (d = c[c.length - 1]) == null ? void 0 : d.previous));
    }),
    [c, p, l, e, o, a]
  );
}
class Ie extends te {
  constructor(t) {
    super();
    se(this, t, $e, ge, le, { posts: 0, page: 1 });
  }
}
export { Ie as default, je as load, Pe as prerender };