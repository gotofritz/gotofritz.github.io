import{S as C,i as H,s as x,e as v,t as w,k as D,c as p,a as E,h as S,m as P,d as f,b as m,g as k,I as h,j as A,E as N,w as O,x as R,y as W,q as V,o as j,B as F,V as G,M as J,p as K,W as L,n as Q}from"../../chunks/index-e78f36eb.js";/* empty css                                                          */import{s as U}from"../../chunks/searching-82c59f1e.js";import"../../chunks/index-2d870a8f.js";function X(l){let t,s,a,o;return{c(){t=v("div"),s=w(l[0]),a=D(),o=w(l[1]),this.h()},l(e){t=p(e,"DIV",{class:!0});var i=E(t);s=S(i,l[0]),a=P(i),o=S(i,l[1]),i.forEach(f),this.h()},h(){m(t,"class","font-summary")},m(e,i){k(e,t,i),h(t,s),h(t,a),h(t,o)},p(e,[i]){i&1&&A(s,e[0]),i&2&&A(o,e[1])},i:N,o:N,d(e){e&&f(t)}}}function Y(l,t,s){let{count:a=0}=t,{posts:o=a===1?"post":"posts"}=t;return l.$$set=e=>{"count"in e&&s(0,a=e.count),"posts"in e&&s(1,o=e.posts)},[a,o]}class Z extends C{constructor(t){super(),H(this,t,Y,X,x,{count:0,posts:1})}}function tt(l){let t,s,a,o,e,i,_,y,b,I,d,r;return d=new Z({props:{count:l[1]}}),{c(){t=v("div"),s=v("div"),a=v("h3"),o=v("a"),e=w(l[0]),_=D(),y=v("span"),b=D(),I=v("div"),O(d.$$.fragment),this.h()},l(g){t=p(g,"DIV",{class:!0});var n=E(t);s=p(n,"DIV",{class:!0});var u=E(s);a=p(u,"H3",{class:!0});var c=E(a);o=p(c,"A",{href:!0});var $=E(o);e=S($,l[0]),$.forEach(f),_=P(c),y=p(c,"SPAN",{class:!0}),E(y).forEach(f),c.forEach(f),u.forEach(f),b=P(n),I=p(n,"DIV",{class:!0});var T=E(I);R(d.$$.fragment,T),T.forEach(f),n.forEach(f),this.h()},h(){m(o,"href",i=`/tags/${l[0]}`),m(y,"class","font-normal"),m(a,"class","!mt-0 !mb-2 font-display text-3xl svelte-1a35dix"),m(s,"class","title"),m(I,"class","opacity-70 ml-12"),m(t,"class","mb-8")},m(g,n){k(g,t,n),h(t,s),h(s,a),h(a,o),h(o,e),h(a,_),h(a,y),h(t,b),h(t,I),W(d,I,null),r=!0},p(g,[n]){(!r||n&1)&&A(e,g[0]),(!r||n&1&&i!==(i=`/tags/${g[0]}`))&&m(o,"href",i);const u={};n&2&&(u.count=g[1]),d.$set(u)},i(g){r||(V(d.$$.fragment,g),r=!0)},o(g){j(d.$$.fragment,g),r=!1},d(g){g&&f(t),F(d)}}}function et(l,t,s){let{tag:a}=t,{count:o}=t;return l.$$set=e=>{"tag"in e&&s(0,a=e.tag),"count"in e&&s(1,o=e.count)},[a,o]}class st extends C{constructor(t){super(),H(this,t,et,tt,x,{tag:0,count:1})}}function z(l,t,s){const a=l.slice();return a[2]=t[s],a}function M(l){let t,s,a,o;return s=new st({props:{tag:l[2].tag,count:l[2].count}}),{c(){t=v("div"),O(s.$$.fragment),a=D(),this.h()},l(e){t=p(e,"DIV",{class:!0});var i=E(t);R(s.$$.fragment,i),a=P(i),i.forEach(f),this.h()},h(){m(t,"class","flex")},m(e,i){k(e,t,i),W(s,t,null),h(t,a),o=!0},p(e,i){const _={};i&1&&(_.tag=e[2].tag),i&1&&(_.count=e[2].count),s.$set(_)},i(e){o||(V(s.$$.fragment,e),o=!0)},o(e){j(s.$$.fragment,e),o=!1},d(e){e&&f(t),F(s)}}}function at(l){let t,s,a,o,e,i,_,y,b,I,d=l[0],r=[];for(let n=0;n<d.length;n+=1)r[n]=M(z(l,d,n));const g=n=>j(r[n],1,1,()=>{r[n]=null});return{c(){t=D(),s=v("div"),a=v("header"),o=v("h1"),e=w("tags"),i=D(),_=v("section");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){G('[data-svelte="svelte-vpbg9d"]',document.head).forEach(f),t=P(n),s=p(n,"DIV",{class:!0});var c=E(s);a=p(c,"HEADER",{class:!0});var $=E(a);o=p($,"H1",{class:!0});var T=E(o);e=S(T,"tags"),T.forEach(f),$.forEach(f),i=P(c),_=p(c,"SECTION",{class:!0});var B=E(_);for(let q=0;q<r.length;q+=1)r[q].l(B);B.forEach(f),c.forEach(f),this.h()},h(){document.title="all tags",m(o,"class","font-display text-6xl mb-16"),m(a,"class","mt-4"),m(_,"class","posts pr-8"),m(s,"class","gotofritz-grid home grid")},m(n,u){k(n,t,u),k(n,s,u),h(s,a),h(a,o),h(o,e),h(s,i),h(s,_);for(let c=0;c<r.length;c+=1)r[c].m(_,null);y=!0,b||(I=J(s,"click",l[1]),b=!0)},p(n,[u]){if(u&1){d=n[0];let c;for(c=0;c<d.length;c+=1){const $=z(n,d,c);r[c]?(r[c].p($,u),V(r[c],1)):(r[c]=M($),r[c].c(),V(r[c],1),r[c].m(_,null))}for(Q(),c=d.length;c<r.length;c+=1)g(c);K()}},i(n){if(!y){for(let u=0;u<d.length;u+=1)V(r[u]);y=!0}},o(n){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)j(r[u]);y=!1},d(n){n&&f(t),n&&f(s),L(r,n),b=!1,I()}}}const it=!0,ut=async({fetch:l,params:t})=>({props:{currentTag:t.tag,recentPosts:await l("/posts.json?allTags=true").then(a=>a.json())}});function nt(l,t,s){let{recentPosts:a}=t;const o=()=>{U.set(!1)};return l.$$set=e=>{"recentPosts"in e&&s(0,a=e.recentPosts)},[a,o]}class ft extends C{constructor(t){super(),H(this,t,nt,at,x,{recentPosts:0})}}export{ft as default,ut as load,it as prerender};
