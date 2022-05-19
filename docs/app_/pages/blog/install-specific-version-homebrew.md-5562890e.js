import{S as ts,i as as,s as ns,D as Pe,x as ls,y as rs,z as ps,A as is,B as Je,r as cs,p as us,C as fs,L as Ue,e as r,t as a,k as m,c as p,a as i,h as n,d as s,m as v,b as d,g as l,F as o,n as ms}from"../../chunks/index-5f3bee99.js";import{P as vs}from"../../chunks/_post-1d61ba86.js";import"../../chunks/Header-5bd94491.js";function hs(A){let c,k,w,f,u,h,P,ne,y,le,re,E,pe,ie,K,g,ce,S,ue,fe,N,O,me,W,T,ve,X,C,Ve=`<code class="language-bash"><span class="token operator">></span> brew uninstall svn
<span class="token operator">></span> <span class="token function">sudo</span> <span class="token function">mv</span> /usr/bin/svn /usr/bin/svn1.6</code>`,J,$,he,U,L,be,Q,I,Ye=`<code class="language-bash"><span class="token operator">></span> brew search subversion
subversion
homebrew/versions/subversion16  homebrew/versions/subversion17</code>`,V,b,de,B,ke,we,R,_e,ye,G,Ee,ge,z,Se,Y,M,He,Z,D,Ze=`<code class="language-bash"><span class="token operator">></span> brew tap homebrew/versions
Cloning into <span class="token string">'/usr/local/Library/Taps/homebrew-versions'</span><span class="token punctuation">..</span>.
remote: Counting objects: <span class="token number">1022</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">566</span>/566<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">1022</span> <span class="token punctuation">(</span>delta <span class="token number">585</span><span class="token punctuation">)</span>, reused <span class="token number">873</span> <span class="token punctuation">(</span>delta <span class="token number">456</span><span class="token punctuation">)</span>
Receiving objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">1022</span>/1022<span class="token punctuation">)</span>, <span class="token number">250.05</span> KiB <span class="token operator">|</span> <span class="token number">428</span> KiB/s, done.
Resolving deltas: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">585</span>/585<span class="token punctuation">)</span>, done.
Tapped <span class="token number">98</span> formula

<span class="token operator">></span> brew <span class="token function">install</span> subversion17
<span class="token operator">==</span><span class="token operator">></span> Downloading http://www.apache.org/dyn/closer.cgi?path<span class="token operator">=</span>subversion/subversion-1.7.10.tar.bz2
Already downloaded: /Library/Caches/Homebrew/subversion17-1.7.10.tar.bz2
<span class="token operator">==</span><span class="token operator">></span> ./configure --prefix<span class="token operator">=</span>/usr/local/Cellar/subversion17/1.7.10 --with-apr<span class="token operator">=</span>/usr/bin --with-ssl --with-zlib<span class="token operator">=</span>/usr --with-sqlite<span class="token operator">=</span>/usr/local/opt/sqlite --with-serf<span class="token operator">=</span>/usr/local/opt/serf --disable-neon-version-check --disable-mod-activation --disable-nls --without-apache-libexecdir --without-berkel
<span class="token operator">==</span><span class="token operator">></span> <span class="token function">make</span>
<span class="token operator">==</span><span class="token operator">></span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token operator">==</span><span class="token operator">></span> <span class="token function">make</span> tools
<span class="token operator">==</span><span class="token operator">></span> <span class="token function">make</span> install-tools
<span class="token operator">==</span><span class="token operator">></span> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
<span class="token operator">==</span><span class="token operator">></span> Summary
/usr/local/Cellar/subversion17/1.7.10: <span class="token number">106</span> files, <span class="token number">7</span>.7M, built <span class="token keyword">in</span> <span class="token number">3.1</span> minutes</code>`,ee,H,xe,F,Ce,Ie,se,j,De,oe,q,Ae;return{c(){c=r("h2"),k=a("Why?"),w=m(),f=r("p"),u=a("I couldn\u2019t connect to my company\u2019s repository using the latest 1.8.0 - svn failed with the message "),h=r("code"),P=a("svn: E120171: Error running context: An error occurred during SSL communication"),ne=a(". A quick "),y=r("a"),le=a("DuckDuckGo"),re=a(" (gosh that\u2019s a mouthful) took me to "),E=r("a"),pe=a("some mail group where Subversion developers bicker among themselves"),ie=a(", but no solution. So I went down to a known stabler version."),K=m(),g=r("p"),ce=a("All the information here comes from "),S=r("a"),ue=a("this SO answer"),fe=a("."),N=m(),O=r("h2"),me=a("Uninstall the previous version"),W=m(),T=r("p"),ve=a("Make sure you don\u2019t have an old version of the package installed:"),X=m(),C=r("pre"),J=m(),$=r("p"),he=a("In the case of svn, I also needed to remove the version that comes by default with OS X, as Homebrew is not able to unlink the two."),U=m(),L=r("h2"),be=a("Find out how old versions are called"),Q=m(),I=r("pre"),V=m(),b=r("p"),de=a("The above tells you what svn packages are available. Note that searching for "),B=r("code"),ke=a("svn"),we=a(" instead of "),R=r("code"),_e=a("subversion"),ye=a(` returns the current version only for some reason.
So that tells me that svn 1.7.something is called `),G=r("code"),Ee=a("subversion17"),ge=a(" in Homebrew world, and it can be found into "),z=r("code"),Se=a("versions"),Y=m(),M=r("h2"),He=a("Install old versions"),Z=m(),D=r("pre"),ee=m(),H=r("p"),xe=a("Before you install a version you need to enable the whole \u201Cgetting old versions\u201D thing - you do that with the "),F=r("code"),Ce=a("tap"),Ie=a(" command. Afterwards, it\u2019s just a matter of installing the package I found earlier."),se=m(),j=r("h2"),De=a("That\u2019s it"),oe=m(),q=r("p"),Ae=a("Job done."),this.h()},l(e){c=p(e,"H2",{});var t=i(c);k=n(t,"Why?"),t.forEach(s),w=v(e),f=p(e,"P",{});var x=i(f);u=n(x,"I couldn\u2019t connect to my company\u2019s repository using the latest 1.8.0 - svn failed with the message "),h=p(x,"CODE",{});var Oe=i(h);P=n(Oe,"svn: E120171: Error running context: An error occurred during SSL communication"),Oe.forEach(s),ne=n(x,". A quick "),y=p(x,"A",{href:!0,title:!0,target:!0});var Te=i(y);le=n(Te,"DuckDuckGo"),Te.forEach(s),re=n(x," (gosh that\u2019s a mouthful) took me to "),E=p(x,"A",{href:!0,title:!0,target:!0});var $e=i(E);pe=n($e,"some mail group where Subversion developers bicker among themselves"),$e.forEach(s),ie=n(x,", but no solution. So I went down to a known stabler version."),x.forEach(s),K=v(e),g=p(e,"P",{});var te=i(g);ce=n(te,"All the information here comes from "),S=p(te,"A",{href:!0,title:!0,target:!0});var Le=i(S);ue=n(Le,"this SO answer"),Le.forEach(s),fe=n(te,"."),te.forEach(s),N=v(e),O=p(e,"H2",{});var Me=i(O);me=n(Me,"Uninstall the previous version"),Me.forEach(s),W=v(e),T=p(e,"P",{});var je=i(T);ve=n(je,"Make sure you don\u2019t have an old version of the package installed:"),je.forEach(s),X=v(e),C=p(e,"PRE",{class:!0});var es=i(C);es.forEach(s),J=v(e),$=p(e,"P",{});var qe=i($);he=n(qe,"In the case of svn, I also needed to remove the version that comes by default with OS X, as Homebrew is not able to unlink the two."),qe.forEach(s),U=v(e),L=p(e,"H2",{});var Be=i(L);be=n(Be,"Find out how old versions are called"),Be.forEach(s),Q=v(e),I=p(e,"PRE",{class:!0});var ss=i(I);ss.forEach(s),V=v(e),b=p(e,"P",{});var _=i(b);de=n(_,"The above tells you what svn packages are available. Note that searching for "),B=p(_,"CODE",{});var Re=i(B);ke=n(Re,"svn"),Re.forEach(s),we=n(_," instead of "),R=p(_,"CODE",{});var Ge=i(R);_e=n(Ge,"subversion"),Ge.forEach(s),ye=n(_,` returns the current version only for some reason.
So that tells me that svn 1.7.something is called `),G=p(_,"CODE",{});var ze=i(G);Ee=n(ze,"subversion17"),ze.forEach(s),ge=n(_," in Homebrew world, and it can be found into "),z=p(_,"CODE",{});var Fe=i(z);Se=n(Fe,"versions"),Fe.forEach(s),_.forEach(s),Y=v(e),M=p(e,"H2",{});var Ke=i(M);He=n(Ke,"Install old versions"),Ke.forEach(s),Z=v(e),D=p(e,"PRE",{class:!0});var os=i(D);os.forEach(s),ee=v(e),H=p(e,"P",{});var ae=i(H);xe=n(ae,"Before you install a version you need to enable the whole \u201Cgetting old versions\u201D thing - you do that with the "),F=p(ae,"CODE",{});var Ne=i(F);Ce=n(Ne,"tap"),Ne.forEach(s),Ie=n(ae," command. Afterwards, it\u2019s just a matter of installing the package I found earlier."),ae.forEach(s),se=v(e),j=p(e,"H2",{});var We=i(j);De=n(We,"That\u2019s it"),We.forEach(s),oe=v(e),q=p(e,"P",{});var Xe=i(q);Ae=n(Xe,"Job done."),Xe.forEach(s),this.h()},h(){d(y,"href","https://duckduckgo.com/"),d(y,"title","[new window] Search DuckDuckGo - they respect your privacy, unlike google"),d(y,"target","_blank"),d(E,"href","https://groups.google.com/forum/#!topic/subversion-development/13KWf3N2myk"),d(E,"title","[new window] RE: svn commit: r1501049 - in /subversion/trunk/subversion: include/svn_error_codes.h libsvn_ra_serf/util_error.c - Google Groups"),d(E,"target","_blank"),d(S,"href","http://stackoverflow.com/questions/3987683/homebrew-install-specific-version-of-formula"),d(S,"title","[new window] Homebrew install specific version of formula? - Stack Overflow"),d(S,"target","_blank"),d(C,"class","language-bash"),d(I,"class","language-bash"),d(D,"class","language-bash")},m(e,t){l(e,c,t),o(c,k),l(e,w,t),l(e,f,t),o(f,u),o(f,h),o(h,P),o(f,ne),o(f,y),o(y,le),o(f,re),o(f,E),o(E,pe),o(f,ie),l(e,K,t),l(e,g,t),o(g,ce),o(g,S),o(S,ue),o(g,fe),l(e,N,t),l(e,O,t),o(O,me),l(e,W,t),l(e,T,t),o(T,ve),l(e,X,t),l(e,C,t),C.innerHTML=Ve,l(e,J,t),l(e,$,t),o($,he),l(e,U,t),l(e,L,t),o(L,be),l(e,Q,t),l(e,I,t),I.innerHTML=Ye,l(e,V,t),l(e,b,t),o(b,de),o(b,B),o(B,ke),o(b,we),o(b,R),o(R,_e),o(b,ye),o(b,G),o(G,Ee),o(b,ge),o(b,z),o(z,Se),l(e,Y,t),l(e,M,t),o(M,He),l(e,Z,t),l(e,D,t),D.innerHTML=Ze,l(e,ee,t),l(e,H,t),o(H,xe),o(H,F),o(F,Ce),o(H,Ie),l(e,se,t),l(e,j,t),o(j,De),l(e,oe,t),l(e,q,t),o(q,Ae)},p:ms,d(e){e&&s(c),e&&s(w),e&&s(f),e&&s(K),e&&s(g),e&&s(N),e&&s(O),e&&s(W),e&&s(T),e&&s(X),e&&s(C),e&&s(J),e&&s($),e&&s(U),e&&s(L),e&&s(Q),e&&s(I),e&&s(V),e&&s(b),e&&s(Y),e&&s(M),e&&s(Z),e&&s(D),e&&s(ee),e&&s(H),e&&s(se),e&&s(j),e&&s(oe),e&&s(q)}}}function bs(A){let c,k;const w=[A[0],Qe];let f={$$slots:{default:[hs]},$$scope:{ctx:A}};for(let u=0;u<w.length;u+=1)f=Pe(f,w[u]);return c=new vs({props:f}),{c(){ls(c.$$.fragment)},l(u){rs(c.$$.fragment,u)},m(u,h){ps(c,u,h),k=!0},p(u,[h]){const P=h&1?is(w,[h&1&&Je(u[0]),h&0&&Je(Qe)]):{};h&2&&(P.$$scope={dirty:h,ctx:u}),c.$set(P)},i(u){k||(cs(c.$$.fragment,u),k=!0)},o(u){us(c.$$.fragment,u),k=!1},d(u){fs(c,u)}}}const Qe={title:"Install a specific version of a tool on OS X with Homebrew",date:"2013-07-17 12:40",excerpt:'Sometimes you need to install an older version of a package with <a href="http://mxcl.github.io/homebrew/" title="[new window] Homebrew \u2014 MacPorts driving you to drink? Try Homebrew!">Homebrew</a>. Here&#39;s how I installed version 1.7.10 of Subversion',prev:"copying-files-matching-pattern-cpio",next:"storing-bash-profile-and-so-on-on-github",published:!0,tags:["os x"]};function ds(A,c,k){return A.$$set=w=>{k(0,c=Pe(Pe({},c),Ue(w)))},c=Ue(c),[c]}class ys extends ts{constructor(c){super(),as(this,c,ds,bs,ns,{})}}export{ys as default,Qe as metadata};
