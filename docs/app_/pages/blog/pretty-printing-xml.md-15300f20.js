import{S as ce,i as de,s as _e,D as Q,x as he,y as ye,z as ve,A as xe,B as le,r as Te,p as Ee,C as be,L as oe,e as i,t as f,k as v,c as n,a as p,h as m,d as t,m as x,b as $,g as o,F as r,n as we}from"../../chunks/index-5f3bee99.js";import{P as Pe}from"../../chunks/_post-1d61ba86.js";import"../../chunks/Header-5bd94491.js";function ke(P){let a,c,d,_,l,u,h,ie=`<code class="language-bash"><span class="token operator">></span> brew <span class="token function">install</span> tidy
</code>`,g,k,X,j,y,A,S,q,W,M,z,D,E,ne=`<code class="language-bash"><span class="token operator">></span> tidy -xml -i input.xml <span class="token operator">></span> pretty_printed.xml
</code>`,F,T,B,b,G,J,V,w,pe=`<code class="language-bash"><span class="token operator">></span> tidy -xml --uppercase-tags y  -i input.xml
</code>`,I,C,K,O,H,N;return{c(){a=i("h2"),c=f("What is tidy?"),d=v(),_=i("p"),l=f("It\u2019s a very unslick util for tidying up HTML markup which gets the job done. To install it on OS X, simply do"),u=v(),h=i("pre"),g=v(),k=i("h2"),X=f("Tidy usage"),j=v(),y=i("p"),A=f("To pretty print "),S=i("code"),q=f("input.xml"),W=f(" and save the output to "),M=i("code"),z=f("pretty_printed.xml"),D=v(),E=i("pre"),F=v(),T=i("p"),B=f("There are several "),b=i("a"),G=f("command line options"),J=f(". For example, to change the case of tabs to uppercase:"),V=v(),w=i("pre"),I=v(),C=i("h2"),K=f("Visual Studio Code"),O=v(),H=i("p"),N=f("To install it on VSCode, just search for \u201CTidy\u201D in the Extension Panel. Then you can use from the command panel (CMD-SHIFT-P) by simply typing \u201Ctidy\u201D"),this.h()},l(e){a=n(e,"H2",{});var s=p(a);c=m(s,"What is tidy?"),s.forEach(t),d=x(e),_=n(e,"P",{});var U=p(_);l=m(U,"It\u2019s a very unslick util for tidying up HTML markup which gets the job done. To install it on OS X, simply do"),U.forEach(t),u=x(e),h=n(e,"PRE",{class:!0});var ue=p(h);ue.forEach(t),g=x(e),k=n(e,"H2",{});var Y=p(k);X=m(Y,"Tidy usage"),Y.forEach(t),j=x(e),y=n(e,"P",{});var L=p(y);A=m(L,"To pretty print "),S=n(L,"CODE",{});var Z=p(S);q=m(Z,"input.xml"),Z.forEach(t),W=m(L," and save the output to "),M=n(L,"CODE",{});var ee=p(M);z=m(ee,"pretty_printed.xml"),ee.forEach(t),L.forEach(t),D=x(e),E=n(e,"PRE",{class:!0});var fe=p(E);fe.forEach(t),F=x(e),T=n(e,"P",{});var R=p(T);B=m(R,"There are several "),b=n(R,"A",{href:!0,rel:!0});var te=p(b);G=m(te,"command line options"),te.forEach(t),J=m(R,". For example, to change the case of tabs to uppercase:"),R.forEach(t),V=x(e),w=n(e,"PRE",{class:!0});var me=p(w);me.forEach(t),I=x(e),C=n(e,"H2",{});var ae=p(C);K=m(ae,"Visual Studio Code"),ae.forEach(t),O=x(e),H=n(e,"P",{});var se=p(H);N=m(se,"To install it on VSCode, just search for \u201CTidy\u201D in the Extension Panel. Then you can use from the command panel (CMD-SHIFT-P) by simply typing \u201Ctidy\u201D"),se.forEach(t),this.h()},h(){$(h,"class","language-bash"),$(E,"class","language-bash"),$(b,"href","http://tidy.sourceforge.net/docs/quickref.html#break-before-br"),$(b,"rel","nofollow"),$(w,"class","language-bash")},m(e,s){o(e,a,s),r(a,c),o(e,d,s),o(e,_,s),r(_,l),o(e,u,s),o(e,h,s),h.innerHTML=ie,o(e,g,s),o(e,k,s),r(k,X),o(e,j,s),o(e,y,s),r(y,A),r(y,S),r(S,q),r(y,W),r(y,M),r(M,z),o(e,D,s),o(e,E,s),E.innerHTML=ne,o(e,F,s),o(e,T,s),r(T,B),r(T,b),r(b,G),r(T,J),o(e,V,s),o(e,w,s),w.innerHTML=pe,o(e,I,s),o(e,C,s),r(C,K),o(e,O,s),o(e,H,s),r(H,N)},p:we,d(e){e&&t(a),e&&t(d),e&&t(_),e&&t(u),e&&t(h),e&&t(g),e&&t(k),e&&t(j),e&&t(y),e&&t(D),e&&t(E),e&&t(F),e&&t(T),e&&t(V),e&&t(w),e&&t(I),e&&t(C),e&&t(O),e&&t(H)}}}function Ce(P){let a,c;const d=[P[0],re];let _={$$slots:{default:[ke]},$$scope:{ctx:P}};for(let l=0;l<d.length;l+=1)_=Q(_,d[l]);return a=new Pe({props:_}),{c(){he(a.$$.fragment)},l(l){ye(a.$$.fragment,l)},m(l,u){ve(a,l,u),c=!0},p(l,[u]){const h=u&1?xe(d,[u&1&&le(l[0]),u&0&&le(re)]):{};u&2&&(h.$$scope={dirty:u,ctx:l}),a.$set(h)},i(l){c||(Te(a.$$.fragment,l),c=!0)},o(l){Ee(a.$$.fragment,l),c=!1},d(l){be(a,l)}}}const re={title:"Pretty printing XML",date:"2015-10-21 00:38",excerpt:'<a href="http://www.w3.org/People/Raggett/tidy/">tidy</a> is a command line tool for formatting XML and HTML. Also available as a <a href="http://www.html-tidy.org/">Visual Studio Code Extension</a>',published:!0,prev:"os-x-software-update-from-command-line",next:"how-to-avoid-sudo-npm",tags:["html","tools","xml"]};function He(P,a,c){return P.$$set=d=>{c(0,a=Q(Q({},a),oe(d)))},a=oe(a),[a]}class $e extends ce{constructor(a){super(),de(this,a,He,Ce,_e,{})}}export{$e as default,re as metadata};
