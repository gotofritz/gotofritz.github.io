import{S as Mt,i as Ot,s as Rt,D as ot,x as Yt,y as jt,z as qt,A as Xt,B as zt,r as Gt,p as Jt,C as Kt,L as Bt,e as o,t as s,k as y,c as r,a as l,h as n,d as a,m as g,b as d,g as u,F as e,n as Qt}from"../../chunks/index-5f3bee99.js";import{P as Vt}from"../../chunks/_post-1d61ba86.js";import"../../chunks/Header-5bd94491.js";function Zt(C){let f,w,k,_,c,m,N,ke,A,ve,ye,re,L,Nt=`<code class="language-bash"><span class="token operator">></span> <span class="token function">sudo</span> <span class="token function">find</span> / -type f -mtime -1 -print0 k<span class="token punctuation"></span><span class="token punctuation"></span>
 <span class="token operator">|</span> <span class="token function">xargs</span> -0 <span class="token function">du</span> -sk <span class="token operator">|</span> <span class="token function">sort</span> -nr</code>`,le,x,ge,U,xe,Ee,ie,W,De,de,i,R,be,Y,Te,j,Ae,$,Le,E,Ue,$e,q,Pe,X,Fe,G,He,J,ze,K,Be,Q,Ce,V,Ne,Z,We,ee,Se,P,Ie,D,Me,Oe,te,Re,F,Ye,b,je,qe,ae,Xe,se,Ge,ne,Je,S,Ke,T,Qe,fe,I,Ve,he,M,Ze,pe,H,Wt='<code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">find</span> / -type f -mtime -1 -exec <span class="token function">du</span> -sk <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span> <span class="token punctuation"></span><span class="token punctuation">;</span> <span class="token operator">|</span> <span class="token function">sort</span> -nr</code>',ce,v,et,z,tt,at,B,st;return{c(){f=o("h2"),w=s("find command"),k=y(),_=o("p"),c=s("To list files that were changed in the last day, sorted by size, using "),m=o("a"),N=s("Apple\u2019s Terminal"),ke=s(", or any Unix / Linux "),A=o("a"),ve=s("bash"),ye=s(" shell:"),re=y(),L=o("pre"),le=y(),x=o("p"),ge=s("(thanks "),U=o("a"),xe=s("mynamewasgone"),Ee=s("!)"),ie=y(),W=o("h2"),De=s("Command breakdown"),de=y(),i=o("dl"),R=o("dt"),be=s("sudo"),Y=o("dd"),Te=s("run in superuser mode - allows you to reach hidden system folders (if that's what you need). You'll be asked for your password"),j=o("dt"),Ae=s("find /"),$=o("dd"),Le=s("use the powerful "),E=o("a"),Ue=s("find"),$e=s(" command, starting from the root of the computer - in other words, search everywhere (which may not be a good idea if you are connected to a network or have a massive hard disk connected to your machine)"),q=o("dt"),Pe=s("-type f"),X=o("dd"),Fe=s("only look for files..."),G=o("dt"),He=s("-mtime -1"),J=o("dd"),ze=s("...modified less than a day ago"),K=o("dt"),Be=s("-print0"),Q=o("dd"),Ce=s("when files are found, spit them out in a list with a NULL at the end instead of a new line - this helps with the next step"),V=o("dt"),Ne=s("|"),Z=o("dd"),We=s("pass the list generated by find to the next command..."),ee=o("dt"),Se=s("xargs -0"),P=o("dd"),Ie=s("...which is "),D=o("a"),Me=s("xargs"),Oe=s(", used to take a list of results and pass them on. The -0 is telling xargs to use NULL as the separator"),te=o("dt"),Re=s("du -sk"),F=o("dd"),Ye=s("use "),b=o("a"),je=s("du"),qe=s(" to show how much space the files take, in kilobytes"),ae=o("dt"),Xe=s("|"),se=o("dd"),Ge=s("pass the list generated by find to the next command..."),ne=o("dt"),Je=s("sort -nr"),S=o("dd"),Ke=s("...which sorts the list in reverse numerical order using "),T=o("a"),Qe=s("sort"),fe=y(),I=o("h2"),Ve=s("Find -exec is slow"),he=y(),M=o("p"),Ze=s("Originally I did everything within find, using the -exec flag."),pe=y(),H=o("pre"),ce=y(),v=o("p"),et=s("But as "),z=o("a"),tt=s("mynamewasgone"),at=s(" pointed out, "),B=o("a"),st=s("find -exec is slow"),this.h()},l(t){f=r(t,"H2",{});var h=l(f);w=n(h,"find command"),h.forEach(a),k=g(t),_=r(t,"P",{});var O=l(_);c=n(O,"To list files that were changed in the last day, sorted by size, using "),m=r(O,"A",{href:!0,rel:!0});var rt=l(m);N=n(rt,"Apple\u2019s Terminal"),rt.forEach(a),ke=n(O,", or any Unix / Linux "),A=r(O,"A",{href:!0,rel:!0});var lt=l(A);ve=n(lt,"bash"),lt.forEach(a),ye=n(O," shell:"),O.forEach(a),re=g(t),L=r(t,"PRE",{class:!0});var St=l(L);St.forEach(a),le=g(t),x=r(t,"P",{});var ue=l(x);ge=n(ue,"(thanks "),U=r(ue,"A",{href:!0,rel:!0});var it=l(U);xe=n(it,"mynamewasgone"),it.forEach(a),Ee=n(ue,"!)"),ue.forEach(a),ie=g(t),W=r(t,"H2",{});var dt=l(W);De=n(dt,"Command breakdown"),dt.forEach(a),de=g(t),i=r(t,"DL",{class:!0});var p=l(i);R=r(p,"DT",{});var ft=l(R);be=n(ft,"sudo"),ft.forEach(a),Y=r(p,"DD",{});var ht=l(Y);Te=n(ht,"run in superuser mode - allows you to reach hidden system folders (if that's what you need). You'll be asked for your password"),ht.forEach(a),j=r(p,"DT",{});var pt=l(j);Ae=n(pt,"find /"),pt.forEach(a),$=r(p,"DD",{});var me=l($);Le=n(me,"use the powerful "),E=r(me,"A",{href:!0,title:!0,target:!0});var ct=l(E);Ue=n(ct,"find"),ct.forEach(a),$e=n(me," command, starting from the root of the computer - in other words, search everywhere (which may not be a good idea if you are connected to a network or have a massive hard disk connected to your machine)"),me.forEach(a),q=r(p,"DT",{});var ut=l(q);Pe=n(ut,"-type f"),ut.forEach(a),X=r(p,"DD",{});var mt=l(X);Fe=n(mt,"only look for files..."),mt.forEach(a),G=r(p,"DT",{});var _t=l(G);He=n(_t,"-mtime -1"),_t.forEach(a),J=r(p,"DD",{});var wt=l(J);ze=n(wt,"...modified less than a day ago"),wt.forEach(a),K=r(p,"DT",{});var kt=l(K);Be=n(kt,"-print0"),kt.forEach(a),Q=r(p,"DD",{});var vt=l(Q);Ce=n(vt,"when files are found, spit them out in a list with a NULL at the end instead of a new line - this helps with the next step"),vt.forEach(a),V=r(p,"DT",{});var yt=l(V);Ne=n(yt,"|"),yt.forEach(a),Z=r(p,"DD",{});var gt=l(Z);We=n(gt,"pass the list generated by find to the next command..."),gt.forEach(a),ee=r(p,"DT",{});var xt=l(ee);Se=n(xt,"xargs -0"),xt.forEach(a),P=r(p,"DD",{});var _e=l(P);Ie=n(_e,"...which is "),D=r(_e,"A",{href:!0,title:!0,target:!0});var Et=l(D);Me=n(Et,"xargs"),Et.forEach(a),Oe=n(_e,", used to take a list of results and pass them on. The -0 is telling xargs to use NULL as the separator"),_e.forEach(a),te=r(p,"DT",{});var Dt=l(te);Re=n(Dt,"du -sk"),Dt.forEach(a),F=r(p,"DD",{});var we=l(F);Ye=n(we,"use "),b=r(we,"A",{href:!0,title:!0,target:!0});var bt=l(b);je=n(bt,"du"),bt.forEach(a),qe=n(we," to show how much space the files take, in kilobytes"),we.forEach(a),ae=r(p,"DT",{});var Tt=l(ae);Xe=n(Tt,"|"),Tt.forEach(a),se=r(p,"DD",{});var At=l(se);Ge=n(At,"pass the list generated by find to the next command..."),At.forEach(a),ne=r(p,"DT",{});var Lt=l(ne);Je=n(Lt,"sort -nr"),Lt.forEach(a),S=r(p,"DD",{});var nt=l(S);Ke=n(nt,"...which sorts the list in reverse numerical order using "),T=r(nt,"A",{href:!0,title:!0,target:!0});var Ut=l(T);Qe=n(Ut,"sort"),Ut.forEach(a),nt.forEach(a),p.forEach(a),fe=g(t),I=r(t,"H2",{});var $t=l(I);Ve=n($t,"Find -exec is slow"),$t.forEach(a),he=g(t),M=r(t,"P",{});var Pt=l(M);Ze=n(Pt,"Originally I did everything within find, using the -exec flag."),Pt.forEach(a),pe=g(t),H=r(t,"PRE",{class:!0});var It=l(H);It.forEach(a),ce=g(t),v=r(t,"P",{});var oe=l(v);et=n(oe,"But as "),z=r(oe,"A",{href:!0,rel:!0});var Ft=l(z);tt=n(Ft,"mynamewasgone"),Ft.forEach(a),at=n(oe," pointed out, "),B=r(oe,"A",{href:!0,rel:!0});var Ht=l(B);st=n(Ht,"find -exec is slow"),Ht.forEach(a),oe.forEach(a),this.h()},h(){d(m,"href","http://en.wikipedia.org/wiki/Apple_Terminal"),d(m,"rel","nofollow"),d(A,"href","http://en.wikipedia.org/wiki/Bash"),d(A,"rel","nofollow"),d(L,"class","language-bash"),d(U,"href","http://twitter.com/mynamewasgone"),d(U,"rel","nofollow"),d(E,"href","http://en.wikipedia.org/wiki/Find"),d(E,"title","[new window] find - Wikipedia, the free encyclopedia"),d(E,"target","_blank"),d(D,"href","http://en.wikipedia.org/wiki/Xargs"),d(D,"title","[new window] xargs - Wikipedia, the free encyclopedia"),d(D,"target","_blank"),d(b,"href","http://en.wikipedia.org/wiki/Du_(Unix)"),d(b,"title","[new window] du (Unix) - Wikipedia, the free encyclopedia"),d(b,"target","_blank"),d(T,"href","http://en.wikipedia.org/wiki/Sort_(Unix)"),d(T,"title","[new window] sort (Unix) - Wikipedia, the free encyclopedia"),d(T,"target","_blank"),d(i,"class","code-breakdown"),d(H,"class","language-bash"),d(z,"href","http://twitter.com/mynamewasgone"),d(z,"rel","nofollow"),d(B,"href","http://dpaste.com/hold/116132/"),d(B,"rel","nofollow")},m(t,h){u(t,f,h),e(f,w),u(t,k,h),u(t,_,h),e(_,c),e(_,m),e(m,N),e(_,ke),e(_,A),e(A,ve),e(_,ye),u(t,re,h),u(t,L,h),L.innerHTML=Nt,u(t,le,h),u(t,x,h),e(x,ge),e(x,U),e(U,xe),e(x,Ee),u(t,ie,h),u(t,W,h),e(W,De),u(t,de,h),u(t,i,h),e(i,R),e(R,be),e(i,Y),e(Y,Te),e(i,j),e(j,Ae),e(i,$),e($,Le),e($,E),e(E,Ue),e($,$e),e(i,q),e(q,Pe),e(i,X),e(X,Fe),e(i,G),e(G,He),e(i,J),e(J,ze),e(i,K),e(K,Be),e(i,Q),e(Q,Ce),e(i,V),e(V,Ne),e(i,Z),e(Z,We),e(i,ee),e(ee,Se),e(i,P),e(P,Ie),e(P,D),e(D,Me),e(P,Oe),e(i,te),e(te,Re),e(i,F),e(F,Ye),e(F,b),e(b,je),e(F,qe),e(i,ae),e(ae,Xe),e(i,se),e(se,Ge),e(i,ne),e(ne,Je),e(i,S),e(S,Ke),e(S,T),e(T,Qe),u(t,fe,h),u(t,I,h),e(I,Ve),u(t,he,h),u(t,M,h),e(M,Ze),u(t,pe,h),u(t,H,h),H.innerHTML=Wt,u(t,ce,h),u(t,v,h),e(v,et),e(v,z),e(z,tt),e(v,at),e(v,B),e(B,st)},p:Qt,d(t){t&&a(f),t&&a(k),t&&a(_),t&&a(re),t&&a(L),t&&a(le),t&&a(x),t&&a(ie),t&&a(W),t&&a(de),t&&a(i),t&&a(fe),t&&a(I),t&&a(he),t&&a(M),t&&a(pe),t&&a(H),t&&a(ce),t&&a(v)}}}function ea(C){let f,w;const k=[C[0],Ct];let _={$$slots:{default:[Zt]},$$scope:{ctx:C}};for(let c=0;c<k.length;c+=1)_=ot(_,k[c]);return f=new Vt({props:_}),{c(){Yt(f.$$.fragment)},l(c){jt(f.$$.fragment,c)},m(c,m){qt(f,c,m),w=!0},p(c,[m]){const N=m&1?Xt(k,[m&1&&zt(c[0]),m&0&&zt(Ct)]):{};m&2&&(N.$$scope={dirty:m,ctx:c}),f.$set(N)},i(c){w||(Gt(f.$$.fragment,c),w=!0)},o(c){Jt(f.$$.fragment,c),w=!1},d(c){Kt(f,c)}}}const Ct={date:"2009-11-04 11:53",title:"Finding recently changed files with Terminal",excerpt:'Finding files that were changed in the last day, sorted by size, using <a href="http://en.wikipedia.org/wiki/Apple_Terminal">Apple&#39;s Terminal</a>',prev:"batch-unrar-command-line-os-x",next:"finding-files-inside-archive",tags:["bash","os x"]};function ta(C,f,w){return C.$$set=k=>{w(0,f=ot(ot({},f),Bt(k)))},f=Bt(f),[f]}class oa extends Mt{constructor(f){super(),Ot(this,f,ta,ea,Rt,{})}}export{oa as default,Ct as metadata};
