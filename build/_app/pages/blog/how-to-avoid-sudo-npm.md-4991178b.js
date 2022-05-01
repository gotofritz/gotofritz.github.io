import{S as D,i as F,s as N,D as O,x as G,y as J,z as K,A as Q,B as L,r as V,p as W,C as Z,L as U,e as m,t as v,k as b,c as d,a as f,h as k,d as a,m as j,b as X,g as l,F as _,n as ee}from"../../chunks/index-889cf753.js";import{P as se}from"../../chunks/_post-5ef2f492.js";import"../../chunks/Header-15607706.js";function oe(w){let s,r,i,p,o,n,u,q=`<code class="language-bash"><span class="token comment"># this should solve the problem</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R MY_USER_NAME /usr/local

<span class="token comment"># this may also help</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> -R <span class="token number">777</span> ~/.npm</code>`,x,y,P,E,h,z=`<code class="language-bash"><span class="token comment"># if someone has checked in a version</span>
<span class="token comment"># of package.json with the wrong permissions</span>
<span class="token function">chmod</span> -775 package.json</code>`,$,c,S,g,I,M;return{c(){s=m("h2"),r=v("On your dev machine"),i=b(),p=m("p"),o=v("If you are the typical js developer who works on OS X, all you need to do is just change the owner of the node binaries"),n=b(),u=m("pre"),x=b(),y=m("p"),P=v("If you are working on projects and someone has already checked in a package.json run with sudo, you need to make sure the whole team changes the permissions of at the same time"),E=b(),h=m("pre"),$=b(),c=m("p"),S=v("Unix purists will find this hacky; and rightly so. The "),g=m("em"),I=v("proper"),M=v(" way of doing is to create a group for everyone who should be allowed to run npm, even if it\u2019s just you. However for a simple dev machine that is good enough."),this.h()},l(e){s=d(e,"H2",{});var t=f(s);r=k(t,"On your dev machine"),t.forEach(a),i=j(e),p=d(e,"P",{});var R=f(p);o=k(R,"If you are the typical js developer who works on OS X, all you need to do is just change the owner of the node binaries"),R.forEach(a),n=j(e),u=d(e,"PRE",{class:!0});var B=f(u);B.forEach(a),x=j(e),y=d(e,"P",{});var T=f(y);P=k(T,"If you are working on projects and someone has already checked in a package.json run with sudo, you need to make sure the whole team changes the permissions of at the same time"),T.forEach(a),E=j(e),h=d(e,"PRE",{class:!0});var C=f(h);C.forEach(a),$=j(e),c=d(e,"P",{});var H=f(c);S=k(H,"Unix purists will find this hacky; and rightly so. The "),g=d(H,"EM",{});var A=f(g);I=k(A,"proper"),A.forEach(a),M=k(H," way of doing is to create a group for everyone who should be allowed to run npm, even if it\u2019s just you. However for a simple dev machine that is good enough."),H.forEach(a),this.h()},h(){X(u,"class","language-bash"),X(h,"class","language-bash")},m(e,t){l(e,s,t),_(s,r),l(e,i,t),l(e,p,t),_(p,o),l(e,n,t),l(e,u,t),u.innerHTML=q,l(e,x,t),l(e,y,t),_(y,P),l(e,E,t),l(e,h,t),h.innerHTML=z,l(e,$,t),l(e,c,t),_(c,S),_(c,g),_(g,I),_(c,M)},p:ee,d(e){e&&a(s),e&&a(i),e&&a(p),e&&a(n),e&&a(u),e&&a(x),e&&a(y),e&&a(E),e&&a(h),e&&a($),e&&a(c)}}}function ae(w){let s,r;const i=[w[0],Y];let p={$$slots:{default:[oe]},$$scope:{ctx:w}};for(let o=0;o<i.length;o+=1)p=O(p,i[o]);return s=new se({props:p}),{c(){G(s.$$.fragment)},l(o){J(s.$$.fragment,o)},m(o,n){K(s,o,n),r=!0},p(o,[n]){const u=n&1?Q(i,[n&1&&L(o[0]),n&0&&L(Y)]):{};n&2&&(u.$$scope={dirty:n,ctx:o}),s.$set(u)},i(o){r||(V(s.$$.fragment,o),r=!0)},o(o){W(s.$$.fragment,o),r=!1},d(o){Z(s,o)}}}const Y={title:"How To Avoid sudo npm",date:"2015-12-14 22:12",excerpt:"You know the story. You try to do <code>npm install hipster-package</code> on OS X and you get a whole load of errors; the easy way out is to just use <code>sudo npm install</code>. Everyone, however, keep saying how that is bad idea. But how do you make npm work without sudo? It&#39;s quite simple actually",published:!0,prev:"pretty-printing-xml",next:"stop-chrome-navigating-back-when-swiping-horizontally",tags:["js","os x"]};function te(w,s,r){return w.$$set=i=>{r(0,s=O(O({},s),U(i)))},s=U(s),[s]}class ie extends D{constructor(s){super(),F(this,s,te,ae,N,{})}}export{ie as default,Y as metadata};
