import{S as F,i as J,s as D,e as n,t as y,j as _,c as i,a as l,d as o,g as w,l as g,b as d,f as a,F as r,J as A}from"./vendor-e04e0de5.js";function G(L){let t,p,v,P,b,m,I,j,u,N=`<code class="language-bash"><span class="token comment"># this should solve the problem</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R MY_USER_NAME /usr/local

<span class="token comment"># this may also help</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> -R <span class="token number">777</span> ~/.npm</code>`,E,f,M,x,c,z=`<code class="language-bash"><span class="token comment"># if someone has checked in a version</span>
<span class="token comment"># of package.json with the wrong permissions</span>
<span class="token function">chmod</span> -775 package.json</code>`,H,h,O,k,R,T;return{c(){t=n("h2"),p=n("a"),v=n("span"),P=y("On your dev machine"),b=_(),m=n("p"),I=y("If you are the typical js developer who works on OS X, all you need to do is just change the owner of the node binaries"),j=_(),u=n("pre"),E=_(),f=n("p"),M=y("If you are working on projects and someone has already checked in a package.json run with sudo, you need to make sure the whole team changes the permissions of at the same time"),x=_(),c=n("pre"),H=_(),h=n("p"),O=y("Unix purists will find this hacky; and rightly so. The "),k=n("em"),R=y("proper"),T=y(" way of doing is to create a group for everyone who should be allowed to run npm, even if it\u2019s just you. However for a simple dev machine that is good enough."),this.h()},l(e){t=i(e,"H2",{id:!0});var s=l(t);p=i(s,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var U=l(p);v=i(U,"SPAN",{class:!0}),l(v).forEach(o),U.forEach(o),P=w(s,"On your dev machine"),s.forEach(o),b=g(e),m=i(e,"P",{});var X=l(m);I=w(X,"If you are the typical js developer who works on OS X, all you need to do is just change the owner of the node binaries"),X.forEach(o),j=g(e),u=i(e,"PRE",{class:!0});var B=l(u);B.forEach(o),E=g(e),f=i(e,"P",{});var Y=l(f);M=w(Y,"If you are working on projects and someone has already checked in a package.json run with sudo, you need to make sure the whole team changes the permissions of at the same time"),Y.forEach(o),x=g(e),c=i(e,"PRE",{class:!0});var C=l(c);C.forEach(o),H=g(e),h=i(e,"P",{});var S=l(h);O=w(S,"Unix purists will find this hacky; and rightly so. The "),k=i(S,"EM",{});var q=l(k);R=w(q,"proper"),q.forEach(o),T=w(S," way of doing is to create a group for everyone who should be allowed to run npm, even if it\u2019s just you. However for a simple dev machine that is good enough."),S.forEach(o),this.h()},h(){d(v,"class","icon icon-link"),d(p,"aria-hidden","true"),d(p,"tabindex","-1"),d(p,"href","#on-your-dev-machine"),d(t,"id","on-your-dev-machine"),d(u,"class","language-bash"),d(c,"class","language-bash")},m(e,s){a(e,t,s),r(t,p),r(p,v),r(t,P),a(e,b,s),a(e,m,s),r(m,I),a(e,j,s),a(e,u,s),u.innerHTML=N,a(e,E,s),a(e,f,s),r(f,M),a(e,x,s),a(e,c,s),c.innerHTML=z,a(e,H,s),a(e,h,s),r(h,O),r(h,k),r(k,R),r(h,T)},p:A,i:A,o:A,d(e){e&&o(t),e&&o(b),e&&o(m),e&&o(j),e&&o(u),e&&o(E),e&&o(f),e&&o(x),e&&o(c),e&&o(H),e&&o(h)}}}const Q={title:"How To Avoid sudo npm",date:"2015-12-14 22:12",excerpt:"You know the story. You try to do <code>npm install hipster-package</code> on OS X and you get a whole load of errors; the easy way out is to just use <code>sudo npm install</code>. Everyone, however, keep saying how that is bad idea. But how do you make npm work without sudo? It&#39;s quite simple actually",published:!0,prev:"pretty-printing-xml",next:"stop-chrome-navigating-back-when-swiping-horizontally",tags:["js","os x"]};class V extends F{constructor(t){super();J(this,t,null,G,D,{})}}export{V as default,Q as metadata};
