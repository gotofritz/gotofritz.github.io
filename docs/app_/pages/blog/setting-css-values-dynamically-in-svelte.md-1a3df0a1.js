import{S as K,i as N,s as Q,D as H,x as U,y as V,z as X,A as aa,B as D,r as sa,p as na,C as ta,L as R,e as g,t as r,k as E,c as m,a as f,h as k,d as t,m as J,b as Y,g as d,F as o,n as ea}from"../../chunks/index-5f3bee99.js";import{P as pa}from"../../chunks/_post-1d61ba86.js";import"../../chunks/Header-5bd94491.js";function oa(S){let s,c,l,h,n,p,i,F=`<code class="language-html"><span class="token comment">&lt;!-- App.svelte--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">div</span> <span class="token punctuation">&#123;</span>
    <span class="token property">grid-template-cols</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span>
    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> <span class="token string">'nav main'</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>OneComponent</span> <span class="token attr-name">gridArea</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;nav&#125;</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AnotherComponent</span> <span class="token attr-name">gridArea</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;main&#125;</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- AnotherComponent.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> gridArea<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">div</span> <span class="token punctuation">&#123;</span> <span class="token selector">grid-area:</span> <span class="token punctuation">&#123;</span>gridArea<span class="token punctuation">&#125;</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  Welcome to my homepage
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,b,u,M,w,T,$,C,j,L,x,v,O=`<code class="language-html"><span class="token comment">&lt;!-- AnotherComponent.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> gridArea<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">div</span> <span class="token punctuation">&#123;</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--grid-area<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">--grid-area:</span> <span class="token punctuation">&#123;</span>gridArea<span class="token punctuation">&#125;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Welcome to my homepage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,A,y,P;return{c(){s=g("p"),c=r("CSS-in-JS is not universally popular. In fact many developers, expecially CSS experts, absolutely detest it, as the CSS gets lost in a sea of JS. Although in Svelte CSS "),l=g("em"),h=r("is"),n=r(" parsed and rendered by JS, the framework actually tries to keep the two separate. You cannot plug JS values into CSS; the following will not work"),p=E(),i=g("pre"),b=E(),u=g("p"),M=r("This looks a bit drastic. What if you "),w=g("em"),T=r("need"),$=r(" to pass some CSS values down the component tree? Well it\u2019s doable - you just need to use CSS variables, and use the HTML section of your .svelte file as a sort of "),C=g("em"),j=r("free trade zone"),L=r(" where JS and CSS can talk to each other"),x=E(),v=g("pre"),A=E(),y=g("p"),P=r("So the component gets the value injected into a JS variable, which is then copied into a CSS variable in one of the HTML elements\u2019 style attributes. Doesn\u2019t matter which one, apparently. It\u2019s a bit of a roundabout way, and it\u2019s not clear how conflicts are dealt with, but it keeps the CSS nice and neat, which is a good thing."),this.h()},l(a){s=m(a,"P",{});var e=f(s);c=k(e,"CSS-in-JS is not universally popular. In fact many developers, expecially CSS experts, absolutely detest it, as the CSS gets lost in a sea of JS. Although in Svelte CSS "),l=m(e,"EM",{});var W=f(l);h=k(W,"is"),W.forEach(t),n=k(e," parsed and rendered by JS, the framework actually tries to keep the two separate. You cannot plug JS values into CSS; the following will not work"),e.forEach(t),p=J(a),i=m(a,"PRE",{class:!0});var Z=f(i);Z.forEach(t),b=J(a),u=m(a,"P",{});var _=f(u);M=k(_,"This looks a bit drastic. What if you "),w=m(_,"EM",{});var q=f(w);T=k(q,"need"),q.forEach(t),$=k(_," to pass some CSS values down the component tree? Well it\u2019s doable - you just need to use CSS variables, and use the HTML section of your .svelte file as a sort of "),C=m(_,"EM",{});var I=f(C);j=k(I,"free trade zone"),I.forEach(t),L=k(_," where JS and CSS can talk to each other"),_.forEach(t),x=J(a),v=m(a,"PRE",{class:!0});var G=f(v);G.forEach(t),A=J(a),y=m(a,"P",{});var z=f(y);P=k(z,"So the component gets the value injected into a JS variable, which is then copied into a CSS variable in one of the HTML elements\u2019 style attributes. Doesn\u2019t matter which one, apparently. It\u2019s a bit of a roundabout way, and it\u2019s not clear how conflicts are dealt with, but it keeps the CSS nice and neat, which is a good thing."),z.forEach(t),this.h()},h(){Y(i,"class","language-html"),Y(v,"class","language-html")},m(a,e){d(a,s,e),o(s,c),o(s,l),o(l,h),o(s,n),d(a,p,e),d(a,i,e),i.innerHTML=F,d(a,b,e),d(a,u,e),o(u,M),o(u,w),o(w,T),o(u,$),o(u,C),o(C,j),o(u,L),d(a,x,e),d(a,v,e),v.innerHTML=O,d(a,A,e),d(a,y,e),o(y,P)},p:ea,d(a){a&&t(s),a&&t(p),a&&t(i),a&&t(b),a&&t(u),a&&t(x),a&&t(v),a&&t(A),a&&t(y)}}}function la(S){let s,c;const l=[S[0],B];let h={$$slots:{default:[oa]},$$scope:{ctx:S}};for(let n=0;n<l.length;n+=1)h=H(h,l[n]);return s=new pa({props:h}),{c(){U(s.$$.fragment)},l(n){V(s.$$.fragment,n)},m(n,p){X(s,n,p),c=!0},p(n,[p]){const i=p&1?aa(l,[p&1&&D(n[0]),p&0&&D(B)]):{};p&2&&(i.$$scope={dirty:p,ctx:n}),s.$set(i)},i(n){c||(sa(s.$$.fragment,n),c=!0)},o(n){na(s.$$.fragment,n),c=!1},d(n){ta(s,n)}}}const B={excerpt:"If you are used to React's Styled Components, assigning CSS values dynamically in Svelte can be baffling at first.",date:"2020-04-09T00:00:00.000Z",published:!0,archived:!1,prev:"countdown-clock-state-machine-requestanimationframe-vanilla-js",next:"setting-up-a-logitech-vertical-mx-mouse-osx",title:"Setting CSS values dynamically in Svelte",permalink:"/blog/setting-css-values-dynamically-in-svelte",tags:["svelte"]};function ca(S,s,c){return S.$$set=l=>{c(0,s=H(H({},s),R(l)))},s=R(s),[s]}class ka extends K{constructor(s){super(),N(this,s,ca,la,Q,{})}}export{ka as default,B as metadata};
