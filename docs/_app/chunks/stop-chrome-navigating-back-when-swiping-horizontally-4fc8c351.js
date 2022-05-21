import{S as J,i as R,s as D,e as l,t as f,j as _,c as r,a as n,g as m,d as t,l as b,b as d,f as o,F as s,J as G}from"./vendor-e04e0de5.js";function K(z){let i,w,A,v,p,P,h,B,F,S,g,H,C,c,y,L,k,E,j,T,u,q=`<code class="language-bash">$ defaults <span class="token function">write</span> com.google.Chrome.plist AppleEnableSwipeNavigateWithScrolls -bool FALSE
$ defaults <span class="token function">write</span> com.google.Chromium.plist AppleEnableSwipeNavigateWithScrolls -bool FALSE
$ defaults <span class="token function">write</span> com.google.ChromeCanary.plist AppleEnableSwipeNavigateWithScrolls -bool FALSE</code>`;return{c(){i=l("h2"),w=l("a"),A=f("The El Capitan way"),v=_(),p=l("p"),P=f("Since OS X 10.11 (El Capitan) the setting is system wide, and Chrome respects that as you can see in this "),h=l("a"),B=f("Chrome bug report"),F=f("."),S=_(),g=l("p"),H=f("To change it, go in System Preferences > Trackpad > More Gestures and untick \u201CSwipe Between Pages\u201D."),C=_(),c=l("h2"),y=l("a"),L=f("The old, pre-El Capitan way"),k=_(),E=l("p"),j=f("Before El Capitan Chrome had its own setting, which you could change by typing the following commands in Terminal"),T=_(),u=l("pre"),this.h()},l(e){i=r(e,"H2",{id:!0});var a=n(i);w=r(a,"A",{href:!0});var M=n(w);A=m(M,"The El Capitan way"),M.forEach(t),a.forEach(t),v=b(e),p=r(e,"P",{});var x=n(p);P=m(x,"Since OS X 10.11 (El Capitan) the setting is system wide, and Chrome respects that as you can see in this "),h=r(x,"A",{href:!0,rel:!0});var N=n(h);B=m(N,"Chrome bug report"),N.forEach(t),F=m(x,"."),x.forEach(t),S=b(e),g=r(e,"P",{});var O=n(g);H=m(O,"To change it, go in System Preferences > Trackpad > More Gestures and untick \u201CSwipe Between Pages\u201D."),O.forEach(t),C=b(e),c=r(e,"H2",{id:!0});var W=n(c);y=r(W,"A",{href:!0});var X=n(y);L=m(X,"The old, pre-El Capitan way"),X.forEach(t),W.forEach(t),k=b(e),E=r(e,"P",{});var $=n(E);j=m($,"Before El Capitan Chrome had its own setting, which you could change by typing the following commands in Terminal"),$.forEach(t),T=b(e),u=r(e,"PRE",{class:!0});var I=n(u);I.forEach(t),this.h()},h(){d(w,"href","#the-el-capitan-way"),d(i,"id","the-el-capitan-way"),d(h,"href","https://bugs.chromium.org/p/chromium/issues/detail?id=682508"),d(h,"rel","nofollow"),d(y,"href","#the-old-pre-el-capitan-way"),d(c,"id","the-old-pre-el-capitan-way"),d(u,"class","language-bash")},m(e,a){o(e,i,a),s(i,w),s(w,A),o(e,v,a),o(e,p,a),s(p,P),s(p,h),s(h,B),s(p,F),o(e,S,a),o(e,g,a),s(g,H),o(e,C,a),o(e,c,a),s(c,y),s(y,L),o(e,k,a),o(e,E,a),s(E,j),o(e,T,a),o(e,u,a),u.innerHTML=q},p:G,i:G,o:G,d(e){e&&t(i),e&&t(v),e&&t(p),e&&t(S),e&&t(g),e&&t(C),e&&t(c),e&&t(k),e&&t(E),e&&t(T),e&&t(u)}}}const U={title:"Stop Chrome navigating back when swiping horizontally",date:"2016-01-09 02:07",excerpt:"If you try to use Google Chrome on a small window on a laptop, perhaps because you are comparing two web pages side by side, swiping left or right doesn't move the page around, but it jumps to the previous or next page. Here's how to prevent that on OS X.",published:!0,tags:["chrome","os x"],prev:"how-to-avoid-sudo-npm",next:"backing-up-hard-disk-os-x"};class V extends J{constructor(i){super();R(this,i,null,K,D,{})}}export{V as default,U as metadata};
