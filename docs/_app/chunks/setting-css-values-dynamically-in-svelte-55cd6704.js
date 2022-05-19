import{S as B,i as G,s as K,e as i,t as o,j as C,c as u,a as r,g as l,d as s,l as _,b as z,f as c,F as t,I as L}from"./vendor-f15b48c1.js";function N(D){let e,x,h,E,A,f,k,Y=`<code class="language-html"><span class="token comment">&lt;!-- App.svelte--></span>
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,y,p,J,S,j,M,v,T,H,w,g,F=`<code class="language-html"><span class="token comment">&lt;!-- AnotherComponent.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> gridArea<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">div</span> <span class="token punctuation">&#123;</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--grid-area<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">--grid-area:</span> <span class="token punctuation">&#123;</span>gridArea<span class="token punctuation">&#125;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Welcome to my homepage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,b,d,I;return{c(){e=i("p"),x=o("CSS-in-JS is not universally popular. In fact many developers, expecially CSS experts, absolutely detest it, as the CSS gets lost in a sea of JS. Although in Svelte CSS "),h=i("em"),E=o("is"),A=o(" parsed and rendered by JS, the framework actually tries to keep the two separate. You cannot plug JS values into CSS; the following will not work"),f=C(),k=i("pre"),y=C(),p=i("p"),J=o("This looks a bit drastic. What if you "),S=i("em"),j=o("need"),M=o(" to pass some CSS values down the component tree? Well it\u2019s doable - you just need to use CSS variables, and use the HTML section of your .svelte file as a sort of "),v=i("em"),T=o("free trade zone"),H=o(" where JS and CSS can talk to each other"),w=C(),g=i("pre"),b=C(),d=i("p"),I=o("So the component gets the value injected into a JS variable, which is then copied into a CSS variable in one of the HTML elements\u2019 style attributes. Doesn\u2019t matter which one, apparently. It\u2019s a bit of a roundabout way, and it\u2019s not clear how conflicts are dealt with, but it keeps the CSS nice and neat, which is a good thing."),this.h()},l(a){e=u(a,"P",{});var n=r(e);x=l(n,"CSS-in-JS is not universally popular. In fact many developers, expecially CSS experts, absolutely detest it, as the CSS gets lost in a sea of JS. Although in Svelte CSS "),h=u(n,"EM",{});var W=r(h);E=l(W,"is"),W.forEach(s),A=l(n," parsed and rendered by JS, the framework actually tries to keep the two separate. You cannot plug JS values into CSS; the following will not work"),n.forEach(s),f=_(a),k=u(a,"PRE",{class:!0});var O=r(k);O.forEach(s),y=_(a),p=u(a,"P",{});var m=r(p);J=l(m,"This looks a bit drastic. What if you "),S=u(m,"EM",{});var q=r(S);j=l(q,"need"),q.forEach(s),M=l(m," to pass some CSS values down the component tree? Well it\u2019s doable - you just need to use CSS variables, and use the HTML section of your .svelte file as a sort of "),v=u(m,"EM",{});var P=r(v);T=l(P,"free trade zone"),P.forEach(s),H=l(m," where JS and CSS can talk to each other"),m.forEach(s),w=_(a),g=u(a,"PRE",{class:!0});var Z=r(g);Z.forEach(s),b=_(a),d=u(a,"P",{});var R=r(d);I=l(R,"So the component gets the value injected into a JS variable, which is then copied into a CSS variable in one of the HTML elements\u2019 style attributes. Doesn\u2019t matter which one, apparently. It\u2019s a bit of a roundabout way, and it\u2019s not clear how conflicts are dealt with, but it keeps the CSS nice and neat, which is a good thing."),R.forEach(s),this.h()},h(){z(k,"class","language-html"),z(g,"class","language-html")},m(a,n){c(a,e,n),t(e,x),t(e,h),t(h,E),t(e,A),c(a,f,n),c(a,k,n),k.innerHTML=Y,c(a,y,n),c(a,p,n),t(p,J),t(p,S),t(S,j),t(p,M),t(p,v),t(v,T),t(p,H),c(a,w,n),c(a,g,n),g.innerHTML=F,c(a,b,n),c(a,d,n),t(d,I)},p:L,i:L,o:L,d(a){a&&s(e),a&&s(f),a&&s(k),a&&s(y),a&&s(p),a&&s(w),a&&s(g),a&&s(b),a&&s(d)}}}const U={excerpt:"If you are used to React's Styled Components, assigning CSS values dynamically in Svelte can be baffling at first.",date:"2020-04-09T00:00:00.000Z",published:!0,archived:!1,prev:"countdown-clock-state-machine-requestanimationframe-vanilla-js",next:"setting-up-a-logitech-vertical-mx-mouse-osx",title:"Setting CSS values dynamically in Svelte",permalink:"/blog/setting-css-values-dynamically-in-svelte",tags:["svelte"]};class V extends B{constructor(e){super();G(this,e,null,N,K,{})}}export{V as default,U as metadata};
