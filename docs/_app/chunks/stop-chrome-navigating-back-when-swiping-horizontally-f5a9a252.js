import{S as D,i as K,s as Q,e as o,t as w,j as _,c as l,a as n,d as a,g,l as v,b as i,f as r,F as s,J as O}from"./vendor-e04e0de5.js";function U(I){let p,h,E,N,C,c,B,f,F,H,x,y,L,k,u,d,S,j,A,b,G,T,m,J=`<code class="language-bash">$ defaults <span class="token function">write</span> com.google.Chrome.plist AppleEnableSwipeNavigateWithScrolls -bool FALSE
$ defaults <span class="token function">write</span> com.google.Chromium.plist AppleEnableSwipeNavigateWithScrolls -bool FALSE
$ defaults <span class="token function">write</span> com.google.ChromeCanary.plist AppleEnableSwipeNavigateWithScrolls -bool FALSE</code>`;return{c(){p=o("h2"),h=o("a"),E=o("span"),N=w("The El Capitan way"),C=_(),c=o("p"),B=w("Since OS X 10.11 (El Capitan) the setting is system wide, and Chrome respects that as you can see in this "),f=o("a"),F=w("Chrome bug report"),H=w("."),x=_(),y=o("p"),L=w("To change it, go in System Preferences > Trackpad > More Gestures and untick \u201CSwipe Between Pages\u201D."),k=_(),u=o("h2"),d=o("a"),S=o("span"),j=w("The old, pre-El Capitan way"),A=_(),b=o("p"),G=w("Before El Capitan Chrome had its own setting, which you could change by typing the following commands in Terminal"),T=_(),m=o("pre"),this.h()},l(e){p=l(e,"H2",{id:!0});var t=n(p);h=l(t,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var W=n(h);E=l(W,"SPAN",{class:!0}),n(E).forEach(a),W.forEach(a),N=g(t,"The El Capitan way"),t.forEach(a),C=v(e),c=l(e,"P",{});var P=n(c);B=g(P,"Since OS X 10.11 (El Capitan) the setting is system wide, and Chrome respects that as you can see in this "),f=l(P,"A",{href:!0,rel:!0});var X=n(f);F=g(X,"Chrome bug report"),X.forEach(a),H=g(P,"."),P.forEach(a),x=v(e),y=l(e,"P",{});var $=n(y);L=g($,"To change it, go in System Preferences > Trackpad > More Gestures and untick \u201CSwipe Between Pages\u201D."),$.forEach(a),k=v(e),u=l(e,"H2",{id:!0});var M=n(u);d=l(M,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var z=n(d);S=l(z,"SPAN",{class:!0}),n(S).forEach(a),z.forEach(a),j=g(M,"The old, pre-El Capitan way"),M.forEach(a),A=v(e),b=l(e,"P",{});var q=n(b);G=g(q,"Before El Capitan Chrome had its own setting, which you could change by typing the following commands in Terminal"),q.forEach(a),T=v(e),m=l(e,"PRE",{class:!0});var R=n(m);R.forEach(a),this.h()},h(){i(E,"class","icon icon-link"),i(h,"aria-hidden","true"),i(h,"tabindex","-1"),i(h,"href","#the-el-capitan-way"),i(p,"id","the-el-capitan-way"),i(f,"href","https://bugs.chromium.org/p/chromium/issues/detail?id=682508"),i(f,"rel","nofollow"),i(S,"class","icon icon-link"),i(d,"aria-hidden","true"),i(d,"tabindex","-1"),i(d,"href","#the-old-pre-el-capitan-way"),i(u,"id","the-old-pre-el-capitan-way"),i(m,"class","language-bash")},m(e,t){r(e,p,t),s(p,h),s(h,E),s(p,N),r(e,C,t),r(e,c,t),s(c,B),s(c,f),s(f,F),s(c,H),r(e,x,t),r(e,y,t),s(y,L),r(e,k,t),r(e,u,t),s(u,d),s(d,S),s(u,j),r(e,A,t),r(e,b,t),s(b,G),r(e,T,t),r(e,m,t),m.innerHTML=J},p:O,i:O,o:O,d(e){e&&a(p),e&&a(C),e&&a(c),e&&a(x),e&&a(y),e&&a(k),e&&a(u),e&&a(A),e&&a(b),e&&a(T),e&&a(m)}}}const Y={title:"Stop Chrome navigating back when swiping horizontally",date:"2016-01-09 02:07",excerpt:"If you try to use Google Chrome on a small window on a laptop, perhaps because you are comparing two web pages side by side, swiping left or right doesn't move the page around, but it jumps to the previous or next page. Here's how to prevent that on OS X.",published:!0,tags:["chrome","os x"],prev:"how-to-avoid-sudo-npm",next:"backing-up-hard-disk-os-x"};class Z extends D{constructor(p){super();K(this,p,null,U,Q,{})}}export{Z as default,Y as metadata};
