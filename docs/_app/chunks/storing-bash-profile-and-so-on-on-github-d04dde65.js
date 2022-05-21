import{S as Xt,i as $t,s as zt,e as l,t as f,j as c,c as r,a as i,g as p,d as t,l as u,b as o,f as n,F as a,J as ct}from"./vendor-e04e0de5.js";function Bt(Rt){let h,Te,S,Pe,He,R,Oe,Se,G,Re,se,b,_,B,Ge,oe,W,Ne,le,N,Gt=`<code class="language-bash"><span class="token builtin class-name">cd</span> path/to/dotfile/clone
<span class="token function">git</span> pull origin master
./bootstrap.sh <span class="token comment">#./bootstrap.sh -f to avoid the prompt</span>
<span class="token builtin class-name">.</span> ~/.bash_profile</code>`,re,v,w,F,Le,ie,X,Ce,ne,E,k,q,ge,fe,y,Ue,J,je,Ye,pe,x,De,K,We,Xe,ce,L,Nt=`<code class="language-bash"><span class="token comment"># Git credentials</span>
<span class="token comment"># Not in the repository, to prevent people from</span>
<span class="token comment"># accidentally committing under my name</span>
<span class="token assign-left variable">GIT_AUTHOR_NAME</span><span class="token operator">=</span><span class="token string">"Fritz Stelluto"</span>
<span class="token assign-left variable">GIT_COMMITTER_NAME</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$GIT_AUTHOR_NAME</span>"</span>
<span class="token function">git</span> config --global user.name <span class="token string">"<span class="token variable">$GIT_AUTHOR_NAME</span>"</span>
<span class="token assign-left variable">GIT_AUTHOR_EMAIL</span><span class="token operator">=</span><span class="token string">"xxxxxxx"</span>
<span class="token assign-left variable">GIT_COMMITTER_EMAIL</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$GIT_AUTHOR_EMAIL</span>"</span>
<span class="token function">git</span> config --global user.email <span class="token string">"<span class="token variable">$GIT_AUTHOR_EMAIL</span>"</span></code>`,ue,d,$e,Q,ze,Be,C,Fe,qe,he,A,I,V,Je,de,$,Ke,me,g,Lt='<code class="language-bash">./.osx</code>',be,M,T,Z,Qe,_e,P,Ve,U,Ze,et,ve,j,Ct='<code class="language-bash">brew bundle ~/Brewfile</code>',we,m,H,ee,tt,te,at,Ee,O,st,Y,ae,ot,lt,ke,D,gt='<code class="language-bash">./.cask</code>';return{c(){h=l("p"),Te=f("I first learned about them from "),S=l("a"),Pe=f("Mathias Bynes"),He=f(", of jsPerf fame and so I cloned his project and created "),R=l("a"),Oe=f("my own dotfiles"),Se=f(". Meanwhile "),G=l("a"),Re=f("it has become a thing"),se=c(),b=l("h2"),_=l("a"),B=l("span"),Ge=f("Using Git and the bootstrap script"),oe=c(),W=l("p"),Ne=f("I have a cloned version of the dotfile directory on my machine. To update"),le=c(),N=l("pre"),re=c(),v=l("h2"),w=l("a"),F=l("span"),Le=f("Path"),ie=c(),X=l("p"),Ce=f("I have no problem with putting the path under github - there\u2019s no confidential stuff in there."),ne=c(),E=l("h2"),k=l("a"),q=l("span"),ge=f("Add custom commands without creating a new fork"),fe=c(),y=l("p"),Ue=f("If "),J=l("code"),je=f("~/.extra"),Ye=f(" exists, it will be sourced along with the other files. You can use this to add a few custom commands without the need to fork this entire repository, or to add commands you don\u2019t want to commit to a public repository."),pe=c(),x=l("p"),De=f("My "),K=l("code"),We=f("~/.extra"),Xe=f(" looks something like this:"),ce=c(),L=l("pre"),ue=c(),d=l("p"),$e=f("You could also use "),Q=l("code"),ze=f("~/.extra"),Be=f(" to override settings, functions and aliases from my dotfiles repository. It\u2019s probably better to "),C=l("a"),Fe=f("fork this repository"),qe=f(" instead, though."),he=c(),A=l("h2"),I=l("a"),V=l("span"),Je=f("Sensible OS X defaults"),de=c(),$=l("p"),Ke=f("When setting up a new Mac, you may want to set some sensible OS X defaults:"),me=c(),g=l("pre"),be=c(),M=l("h2"),T=l("a"),Z=l("span"),Qe=f("Install Homebrew formulae"),_e=c(),P=l("p"),Ve=f("When setting up a new Mac, you may want to install some common "),U=l("a"),Ze=f("Homebrew"),et=f(" formulae (after installing Homebrew, of course):"),ve=c(),j=l("pre"),we=c(),m=l("h2"),H=l("a"),ee=l("span"),tt=f("Install native apps with "),te=l("code"),at=f("brew cask"),Ee=c(),O=l("p"),st=f("You could also install native apps with "),Y=l("a"),ae=l("code"),ot=f("brew cask"),lt=f(":"),ke=c(),D=l("pre"),this.h()},l(e){h=r(e,"P",{});var s=i(h);Te=p(s,"I first learned about them from "),S=r(s,"A",{href:!0,rel:!0});var ut=i(S);Pe=p(ut,"Mathias Bynes"),ut.forEach(t),He=p(s,", of jsPerf fame and so I cloned his project and created "),R=r(s,"A",{href:!0,rel:!0});var ht=i(R);Oe=p(ht,"my own dotfiles"),ht.forEach(t),Se=p(s,". Meanwhile "),G=r(s,"A",{href:!0,rel:!0});var dt=i(G);Re=p(dt,"it has become a thing"),dt.forEach(t),s.forEach(t),se=u(e),b=r(e,"H2",{id:!0});var rt=i(b);_=r(rt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var mt=i(_);B=r(mt,"SPAN",{class:!0}),i(B).forEach(t),mt.forEach(t),Ge=p(rt,"Using Git and the bootstrap script"),rt.forEach(t),oe=u(e),W=r(e,"P",{});var bt=i(W);Ne=p(bt,"I have a cloned version of the dotfile directory on my machine. To update"),bt.forEach(t),le=u(e),N=r(e,"PRE",{class:!0});var Ut=i(N);Ut.forEach(t),re=u(e),v=r(e,"H2",{id:!0});var it=i(v);w=r(it,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _t=i(w);F=r(_t,"SPAN",{class:!0}),i(F).forEach(t),_t.forEach(t),Le=p(it,"Path"),it.forEach(t),ie=u(e),X=r(e,"P",{});var vt=i(X);Ce=p(vt,"I have no problem with putting the path under github - there\u2019s no confidential stuff in there."),vt.forEach(t),ne=u(e),E=r(e,"H2",{id:!0});var nt=i(E);k=r(nt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var wt=i(k);q=r(wt,"SPAN",{class:!0}),i(q).forEach(t),wt.forEach(t),ge=p(nt,"Add custom commands without creating a new fork"),nt.forEach(t),fe=u(e),y=r(e,"P",{});var ye=i(y);Ue=p(ye,"If "),J=r(ye,"CODE",{});var Et=i(J);je=p(Et,"~/.extra"),Et.forEach(t),Ye=p(ye," exists, it will be sourced along with the other files. You can use this to add a few custom commands without the need to fork this entire repository, or to add commands you don\u2019t want to commit to a public repository."),ye.forEach(t),pe=u(e),x=r(e,"P",{});var xe=i(x);De=p(xe,"My "),K=r(xe,"CODE",{});var kt=i(K);We=p(kt,"~/.extra"),kt.forEach(t),Xe=p(xe," looks something like this:"),xe.forEach(t),ce=u(e),L=r(e,"PRE",{class:!0});var jt=i(L);jt.forEach(t),ue=u(e),d=r(e,"P",{});var z=i(d);$e=p(z,"You could also use "),Q=r(z,"CODE",{});var yt=i(Q);ze=p(yt,"~/.extra"),yt.forEach(t),Be=p(z," to override settings, functions and aliases from my dotfiles repository. It\u2019s probably better to "),C=r(z,"A",{href:!0,rel:!0});var xt=i(C);Fe=p(xt,"fork this repository"),xt.forEach(t),qe=p(z," instead, though."),z.forEach(t),he=u(e),A=r(e,"H2",{id:!0});var ft=i(A);I=r(ft,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var At=i(I);V=r(At,"SPAN",{class:!0}),i(V).forEach(t),At.forEach(t),Je=p(ft,"Sensible OS X defaults"),ft.forEach(t),de=u(e),$=r(e,"P",{});var It=i($);Ke=p(It,"When setting up a new Mac, you may want to set some sensible OS X defaults:"),It.forEach(t),me=u(e),g=r(e,"PRE",{class:!0});var Yt=i(g);Yt.forEach(t),be=u(e),M=r(e,"H2",{id:!0});var pt=i(M);T=r(pt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Mt=i(T);Z=r(Mt,"SPAN",{class:!0}),i(Z).forEach(t),Mt.forEach(t),Qe=p(pt,"Install Homebrew formulae"),pt.forEach(t),_e=u(e),P=r(e,"P",{});var Ae=i(P);Ve=p(Ae,"When setting up a new Mac, you may want to install some common "),U=r(Ae,"A",{href:!0,rel:!0});var Tt=i(U);Ze=p(Tt,"Homebrew"),Tt.forEach(t),et=p(Ae," formulae (after installing Homebrew, of course):"),Ae.forEach(t),ve=u(e),j=r(e,"PRE",{class:!0});var Dt=i(j);Dt.forEach(t),we=u(e),m=r(e,"H2",{id:!0});var Ie=i(m);H=r(Ie,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Pt=i(H);ee=r(Pt,"SPAN",{class:!0}),i(ee).forEach(t),Pt.forEach(t),tt=p(Ie,"Install native apps with "),te=r(Ie,"CODE",{});var Ht=i(te);at=p(Ht,"brew cask"),Ht.forEach(t),Ie.forEach(t),Ee=u(e),O=r(e,"P",{});var Me=i(O);st=p(Me,"You could also install native apps with "),Y=r(Me,"A",{href:!0,rel:!0});var Ot=i(Y);ae=r(Ot,"CODE",{});var St=i(ae);ot=p(St,"brew cask"),St.forEach(t),Ot.forEach(t),lt=p(Me,":"),Me.forEach(t),ke=u(e),D=r(e,"PRE",{class:!0});var Wt=i(D);Wt.forEach(t),this.h()},h(){o(S,"href","https://github.com/mathiasbynens/dotfiles"),o(S,"rel","nofollow"),o(R,"href","https://github.com/gotofritz/dotfiles"),o(R,"rel","nofollow"),o(G,"href","https://dotfiles.github.io/"),o(G,"rel","nofollow"),o(B,"class","icon icon-link"),o(_,"aria-hidden","true"),o(_,"tabindex","-1"),o(_,"href","#using-git-and-the-bootstrap-script"),o(b,"id","using-git-and-the-bootstrap-script"),o(N,"class","language-bash"),o(F,"class","icon icon-link"),o(w,"aria-hidden","true"),o(w,"tabindex","-1"),o(w,"href","#path"),o(v,"id","path"),o(q,"class","icon icon-link"),o(k,"aria-hidden","true"),o(k,"tabindex","-1"),o(k,"href","#add-custom-commands-without-creating-a-new-fork"),o(E,"id","add-custom-commands-without-creating-a-new-fork"),o(L,"class","language-bash"),o(C,"href","https://github.com/mathiasbynens/dotfiles/fork"),o(C,"rel","nofollow"),o(V,"class","icon icon-link"),o(I,"aria-hidden","true"),o(I,"tabindex","-1"),o(I,"href","#sensible-os-x-defaults"),o(A,"id","sensible-os-x-defaults"),o(g,"class","language-bash"),o(Z,"class","icon icon-link"),o(T,"aria-hidden","true"),o(T,"tabindex","-1"),o(T,"href","#install-homebrew-formulae"),o(M,"id","install-homebrew-formulae"),o(U,"href","http://brew.sh/"),o(U,"rel","nofollow"),o(j,"class","language-bash"),o(ee,"class","icon icon-link"),o(H,"aria-hidden","true"),o(H,"tabindex","-1"),o(H,"href","#install-native-apps-with-brew-cask"),o(m,"id","install-native-apps-with-brew-cask"),o(Y,"href","https://github.com/phinze/homebrew-cask"),o(Y,"rel","nofollow"),o(D,"class","language-bash")},m(e,s){n(e,h,s),a(h,Te),a(h,S),a(S,Pe),a(h,He),a(h,R),a(R,Oe),a(h,Se),a(h,G),a(G,Re),n(e,se,s),n(e,b,s),a(b,_),a(_,B),a(b,Ge),n(e,oe,s),n(e,W,s),a(W,Ne),n(e,le,s),n(e,N,s),N.innerHTML=Gt,n(e,re,s),n(e,v,s),a(v,w),a(w,F),a(v,Le),n(e,ie,s),n(e,X,s),a(X,Ce),n(e,ne,s),n(e,E,s),a(E,k),a(k,q),a(E,ge),n(e,fe,s),n(e,y,s),a(y,Ue),a(y,J),a(J,je),a(y,Ye),n(e,pe,s),n(e,x,s),a(x,De),a(x,K),a(K,We),a(x,Xe),n(e,ce,s),n(e,L,s),L.innerHTML=Nt,n(e,ue,s),n(e,d,s),a(d,$e),a(d,Q),a(Q,ze),a(d,Be),a(d,C),a(C,Fe),a(d,qe),n(e,he,s),n(e,A,s),a(A,I),a(I,V),a(A,Je),n(e,de,s),n(e,$,s),a($,Ke),n(e,me,s),n(e,g,s),g.innerHTML=Lt,n(e,be,s),n(e,M,s),a(M,T),a(T,Z),a(M,Qe),n(e,_e,s),n(e,P,s),a(P,Ve),a(P,U),a(U,Ze),a(P,et),n(e,ve,s),n(e,j,s),j.innerHTML=Ct,n(e,we,s),n(e,m,s),a(m,H),a(H,ee),a(m,tt),a(m,te),a(te,at),n(e,Ee,s),n(e,O,s),a(O,st),a(O,Y),a(Y,ae),a(ae,ot),a(O,lt),n(e,ke,s),n(e,D,s),D.innerHTML=gt},p:ct,i:ct,o:ct,d(e){e&&t(h),e&&t(se),e&&t(b),e&&t(oe),e&&t(W),e&&t(le),e&&t(N),e&&t(re),e&&t(v),e&&t(ie),e&&t(X),e&&t(ne),e&&t(E),e&&t(fe),e&&t(y),e&&t(pe),e&&t(x),e&&t(ce),e&&t(L),e&&t(ue),e&&t(d),e&&t(he),e&&t(A),e&&t(de),e&&t($),e&&t(me),e&&t(g),e&&t(be),e&&t(M),e&&t(_e),e&&t(P),e&&t(ve),e&&t(j),e&&t(we),e&&t(m),e&&t(Ee),e&&t(O),e&&t(ke),e&&t(D)}}}const qt={title:"dotfiles",date:"2013-09-01 16:11",excerpt:"Storing your CLI config files (.bash_profile and all the rest) on github makes sense - as a backup, but also to compare and learn.",prev:"install-specific-version-homebrew",next:"directory-listings-in-apache-2-4",published:!0,tags:["bash"]};class Jt extends Xt{constructor(h){super();$t(this,h,null,Bt,zt,{})}}export{Jt as default,qt as metadata};
