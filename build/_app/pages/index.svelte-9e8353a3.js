import{S as L,i as Q,s as U,x as I,y as O,z as R,A as V,B as W,r as x,p as A,C as J,e as $,k as j,t as q,l as T,M as X,c as S,d as m,m as H,a as b,h as M,b as g,F as f,g as w,q as Y,G as Z,D as ee,o as te}from"../chunks/index-889cf753.js";import{H as se}from"../chunks/Header-15607706.js";import{P as ae}from"../chunks/PostSummary-e6cc4d31.js";function D(i,n,o){const l=i.slice();return l[1]=n[o],l}function G(i){let n,o;const l=[i[1]];let c={};for(let t=0;t<l.length;t+=1)c=ee(c,l[t]);return n=new ae({props:c}),{c(){I(n.$$.fragment)},l(t){O(n.$$.fragment,t)},m(t,u){R(n,t,u),o=!0},p(t,u){const v=u&1?V(l,[W(t[1])]):{};n.$set(v)},i(t){o||(x(n.$$.fragment,t),o=!0)},o(t){A(n.$$.fragment,t),o=!1},d(t){J(n,t)}}}function ne(i){let n,o,l,c,t,u,v,B,p,C,h,k,z,d,E;l=new se({props:{isHome:!0}});let _=i[0],a=[];for(let e=0;e<_.length;e+=1)a[e]=G(D(i,_,e));const K=e=>A(a[e],1,1,()=>{a[e]=null});return{c(){n=$("meta"),o=j(),I(l.$$.fragment),c=j(),t=$("section"),u=$("h1"),v=q("Fritz Stelluto is an engineering manager in Berlin"),B=j(),p=$("h2"),C=q("Currently leading the Smart Signage team at "),h=$("a"),k=q("Advertima"),z=j();for(let e=0;e<a.length;e+=1)a[e].c();d=T(),this.h()},l(e){const r=X('[data-svelte="svelte-c8iz09"]',document.head);n=S(r,"META",{name:!0,content:!0}),r.forEach(m),o=H(e),O(l.$$.fragment,e),c=H(e),t=S(e,"SECTION",{class:!0});var s=b(t);u=S(s,"H1",{class:!0});var y=b(u);v=M(y,"Fritz Stelluto is an engineering manager in Berlin"),y.forEach(m),B=H(s),p=S(s,"H2",{class:!0});var F=b(p);C=M(F,"Currently leading the Smart Signage team at "),h=S(F,"A",{href:!0});var N=b(h);k=M(N,"Advertima"),N.forEach(m),F.forEach(m),s.forEach(m),z=H(e);for(let P=0;P<a.length;P+=1)a[P].l(e);d=T(),this.h()},h(){document.title="gotofritz || fritz stelluto",g(n,"name","description"),g(n,"content","Fritz Stelluto has been a developer and engineering manager in the digital industry since the 90s. He lives in Berlin."),g(u,"class","svelte-u0wjhf"),g(h,"href","https://www.advertima.com/"),g(p,"class","svelte-u0wjhf"),g(t,"class","intro svelte-u0wjhf")},m(e,r){f(document.head,n),w(e,o,r),R(l,e,r),w(e,c,r),w(e,t,r),f(t,u),f(u,v),f(t,B),f(t,p),f(p,C),f(p,h),f(h,k),w(e,z,r);for(let s=0;s<a.length;s+=1)a[s].m(e,r);w(e,d,r),E=!0},p(e,[r]){if(r&1){_=e[0];let s;for(s=0;s<_.length;s+=1){const y=D(e,_,s);a[s]?(a[s].p(y,r),x(a[s],1)):(a[s]=G(y),a[s].c(),x(a[s],1),a[s].m(d.parentNode,d))}for(te(),s=_.length;s<a.length;s+=1)K(s);Y()}},i(e){if(!E){x(l.$$.fragment,e);for(let r=0;r<_.length;r+=1)x(a[r]);E=!0}},o(e){A(l.$$.fragment,e),a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)A(a[r]);E=!1},d(e){m(n),e&&m(o),J(l,e),e&&m(c),e&&m(t),e&&m(z),Z(a,e),e&&m(d)}}}const ce=async({fetch:i})=>({props:{posts:await(await i("/api/posts.json")).json()}});function re(i,n,o){let{posts:l}=n;return i.$$set=c=>{"posts"in c&&o(0,l=c.posts)},[l]}class me extends L{constructor(n){super(),Q(this,n,re,ne,U,{posts:0})}}export{me as default,ce as load};
