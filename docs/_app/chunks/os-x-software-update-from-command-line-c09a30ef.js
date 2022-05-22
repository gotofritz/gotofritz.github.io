import{S as $e,i as ea,s as aa,e as o,k as u,t as p,c as l,a as n,d as a,m as c,h as i,b as f,g as r,I as t,E as Te}from"./index-e78f36eb.js";function ta(Be){let h,Ke=`<code class="language-bash"><span class="token operator">></span> <span class="token function">sudo</span> softwareupdate -i -r
Password:
Software Update Tool
Copyright <span class="token number">2002</span>-2012 Apple Inc.

Finding available software

Downloaded OS X Update
Installing OS X Update
Done.</code>`,Y,P,te,B,d,g,se,M,oe,A,le,C,ne,F,re,U,pe,L,ie,X,de,K,v,k,H,ue,N,T,ce,q,b,Ne=`<code class="language-bash"><span class="token operator">></span> softwareupdate -l
Software Update Tool
Copyright <span class="token number">2002</span>-2012 Apple Inc.

Finding available software
Software Update found the following new or updated software:
    * MacBookAirEFIUpdate2.4-2.4
        MacBook Air EFI Firmware Update <span class="token punctuation">(</span><span class="token number">2.4</span><span class="token punctuation">)</span>, 3817K <span class="token punctuation">[</span>recommended<span class="token punctuation">]</span> <span class="token punctuation">[</span>restart<span class="token punctuation">]</span>
    * ProAppsQTCodecs-1.0
        ProApps QuickTime codecs <span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span>, 968K <span class="token punctuation">[</span>recommended<span class="token punctuation">]</span>
    * JavaForOSX-1.0
        Java <span class="token keyword">for</span> OS X <span class="token number">2012</span>-005 <span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span>, 65288K <span class="token punctuation">[</span>recommended<span class="token punctuation">]</span>
</code>`,Q,x,fe,W,y,qe='<code class="language-bash"><span class="token operator">></span> <span class="token function">sudo</span> softwareupdate -i JavaForOSX-1.0</code>',z,_,me,I,he,we,G,D,Qe=`<code class="language-bash"><span class="token operator">></span> softwareupdate --ignore JavaForOSX-1.0
<span class="token operator">></span> <span class="token function">sudo</span> softwareupdate -i -a</code>`,V,m,ve,R,ke,_e,j,Ee,be,Z,S,We='<code class="language-bash"><span class="token operator">></span> softwareupdate --reset-ignored</code>',$,E,ye,J,De,Se;return{c(){h=o("pre"),Y=u(),P=o("p"),te=p("Which breaks down as"),B=u(),d=o("dl"),g=o("dt"),se=p("sudo"),M=o("dd"),oe=p("needs to run as admin (you will have to enter a password after you type return)"),A=o("dt"),le=p("softwareupdate"),C=o("dd"),ne=p("this is the command line utility that does the job"),F=o("dt"),re=p("-i"),U=o("dd"),pe=p("install - you can specify what to install, all, or just..."),L=o("dt"),ie=p("-r"),X=o("dd"),de=p("...the recommended updates"),K=p(`
This is all there is to it.
`),v=o("h2"),k=o("a"),H=o("span"),ue=p("Slightly more complex usage of softwareupdate"),N=u(),T=o("p"),ce=p("You can ask for a list of available software before you install:"),q=u(),b=o("pre"),Q=u(),x=o("p"),fe=p("You can then install individual packages by simply naming them"),W=u(),y=o("pre"),z=u(),_=o("p"),me=p("Or you can ignore some packages and then install everything else ("),I=o("code"),he=p("-a, all"),we=p(")"),G=u(),D=o("pre"),V=u(),m=o("p"),ve=p("Note that the \u2013ignore flag will persist until it is reset with "),R=o("code"),ke=p("--reset-ignored"),_e=p(" (which clears "),j=o("em"),Ee=p("all"),be=p(" flags)"),Z=u(),S=o("pre"),$=u(),E=o("p"),ye=p("More options can be viewed with "),J=o("code"),De=p("softwareupdate -h"),Se=p(" or `man softwareupdate"),this.h()},l(e){h=l(e,"PRE",{class:!0});var s=n(h);s.forEach(a),Y=c(e),P=l(e,"P",{});var xe=n(P);te=i(xe,"Which breaks down as"),xe.forEach(a),B=c(e),d=l(e,"DL",{class:!0});var w=n(d);g=l(w,"DT",{});var Oe=n(g);se=i(Oe,"sudo"),Oe.forEach(a),M=l(w,"DD",{});var ge=n(M);oe=i(ge,"needs to run as admin (you will have to enter a password after you type return)"),ge.forEach(a),A=l(w,"DT",{});var Me=n(A);le=i(Me,"softwareupdate"),Me.forEach(a),C=l(w,"DD",{});var Ae=n(C);ne=i(Ae,"this is the command line utility that does the job"),Ae.forEach(a),F=l(w,"DT",{});var Ce=n(F);re=i(Ce,"-i"),Ce.forEach(a),U=l(w,"DD",{});var Fe=n(U);pe=i(Fe,"install - you can specify what to install, all, or just..."),Fe.forEach(a),L=l(w,"DT",{});var Ue=n(L);ie=i(Ue,"-r"),Ue.forEach(a),X=l(w,"DD",{});var Le=n(X);de=i(Le,"...the recommended updates"),Le.forEach(a),w.forEach(a),K=i(e,`
This is all there is to it.
`),v=l(e,"H2",{id:!0});var Pe=n(v);k=l(Pe,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Xe=n(k);H=l(Xe,"SPAN",{class:!0}),n(H).forEach(a),Xe.forEach(a),ue=i(Pe,"Slightly more complex usage of softwareupdate"),Pe.forEach(a),N=c(e),T=l(e,"P",{});var He=n(T);ce=i(He,"You can ask for a list of available software before you install:"),He.forEach(a),q=c(e),b=l(e,"PRE",{class:!0});var ze=n(b);ze.forEach(a),Q=c(e),x=l(e,"P",{});var Ie=n(x);fe=i(Ie,"You can then install individual packages by simply naming them"),Ie.forEach(a),W=c(e),y=l(e,"PRE",{class:!0});var Ge=n(y);Ge.forEach(a),z=c(e),_=l(e,"P",{});var ee=n(_);me=i(ee,"Or you can ignore some packages and then install everything else ("),I=l(ee,"CODE",{});var Re=n(I);he=i(Re,"-a, all"),Re.forEach(a),we=i(ee,")"),ee.forEach(a),G=c(e),D=l(e,"PRE",{class:!0});var Ve=n(D);Ve.forEach(a),V=c(e),m=l(e,"P",{});var O=n(m);ve=i(O,"Note that the \u2013ignore flag will persist until it is reset with "),R=l(O,"CODE",{});var je=n(R);ke=i(je,"--reset-ignored"),je.forEach(a),_e=i(O," (which clears "),j=l(O,"EM",{});var Je=n(j);Ee=i(Je,"all"),Je.forEach(a),be=i(O," flags)"),O.forEach(a),Z=c(e),S=l(e,"PRE",{class:!0});var Ze=n(S);Ze.forEach(a),$=c(e),E=l(e,"P",{});var ae=n(E);ye=i(ae,"More options can be viewed with "),J=l(ae,"CODE",{});var Ye=n(J);De=i(Ye,"softwareupdate -h"),Ye.forEach(a),Se=i(ae," or `man softwareupdate"),ae.forEach(a),this.h()},h(){f(h,"class","language-bash"),f(d,"class","code-breakdown"),f(H,"class","icon icon-link"),f(k,"aria-hidden","true"),f(k,"tabindex","-1"),f(k,"href","#slightly-more-complex-usage-of-softwareupdate"),f(v,"id","slightly-more-complex-usage-of-softwareupdate"),f(b,"class","language-bash"),f(y,"class","language-bash"),f(D,"class","language-bash"),f(S,"class","language-bash")},m(e,s){r(e,h,s),h.innerHTML=Ke,r(e,Y,s),r(e,P,s),t(P,te),r(e,B,s),r(e,d,s),t(d,g),t(g,se),t(d,M),t(M,oe),t(d,A),t(A,le),t(d,C),t(C,ne),t(d,F),t(F,re),t(d,U),t(U,pe),t(d,L),t(L,ie),t(d,X),t(X,de),r(e,K,s),r(e,v,s),t(v,k),t(k,H),t(v,ue),r(e,N,s),r(e,T,s),t(T,ce),r(e,q,s),r(e,b,s),b.innerHTML=Ne,r(e,Q,s),r(e,x,s),t(x,fe),r(e,W,s),r(e,y,s),y.innerHTML=qe,r(e,z,s),r(e,_,s),t(_,me),t(_,I),t(I,he),t(_,we),r(e,G,s),r(e,D,s),D.innerHTML=Qe,r(e,V,s),r(e,m,s),t(m,ve),t(m,R),t(R,ke),t(m,_e),t(m,j),t(j,Ee),t(m,be),r(e,Z,s),r(e,S,s),S.innerHTML=We,r(e,$,s),r(e,E,s),t(E,ye),t(E,J),t(J,De),t(E,Se)},p:Te,i:Te,o:Te,d(e){e&&a(h),e&&a(Y),e&&a(P),e&&a(B),e&&a(d),e&&a(K),e&&a(v),e&&a(N),e&&a(T),e&&a(q),e&&a(b),e&&a(Q),e&&a(x),e&&a(W),e&&a(y),e&&a(z),e&&a(_),e&&a(G),e&&a(D),e&&a(V),e&&a(m),e&&a(Z),e&&a(S),e&&a($),e&&a(E)}}}const oa={title:"OS X Software Update from the Command Line",date:"2015-08-25 00:41",excerpt:"Software updates can be quite tedious - you have to click a lot of buttons, then get into the Apple Store etc. But you can avoid all that by running it from the command line.",draft:!1,tags:["os x"]};class la extends $e{constructor(h){super(),ea(this,h,null,ta,aa,{})}}export{la as default,oa as metadata};
