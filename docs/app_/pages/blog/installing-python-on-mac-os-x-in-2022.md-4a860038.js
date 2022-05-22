import{S as Zs,i as Js,s as Ks,D as fs,x as Qs,y as en,z as sn,A as nn,B as Cs,r as an,p as tn,C as on,L as Ms,e as o,t as l,k as c,c as p,a as i,h as r,d as s,m as f,b as m,g as t,F as n,n as ln}from"../../chunks/index-5f3bee99.js";import{P as pn}from"../../chunks/_post-1d61ba86.js";import"../../chunks/Header-5bd94491.js";function rn(z){let h,y,w,v,u,d,D,Ae,ae,U,xe,te,g,Oe,Q,Se,Ce,oe,F,Me,le,B,je,pe,P,Ls=`<code class="language-bash"><span class="token comment"># homebrew is still involved</span>
$ brew <span class="token function">install</span> pyenv

<span class="token comment"># check which versions are available</span>
$ pyenv <span class="token function">install</span> -l
Available versions:
  <span class="token number">2.1</span>.3
  <span class="token number">2.2</span>.3
  <span class="token punctuation">..</span>.
  stackless-3.7.5

<span class="token comment"># the latest at the time of writing</span>
$ pyenv <span class="token function">install</span> <span class="token number">3.10</span>.1
<span class="token punctuation">..</span>.

<span class="token comment"># make it the default version</span>
$ pyenv global <span class="token number">3.10</span>.1</code>`,ie,b,Le,N,Re,Xe,H,ze,De,re,$,Rs=`<code class="language-bash"><span class="token keyword">if</span> <span class="token builtin class-name">command</span> -v pyenv <span class="token operator"><span class="token file-descriptor important">1</span>></span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">eval</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>pyenv init -<span class="token variable">)</span></span>"</span>
<span class="token keyword">fi</span>

<span class="token comment"># This is actually a simplified version of what's in my .path file</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span>pyenv root<span class="token variable">)</span></span>/shims:..OTHER STUFF...:<span class="token environment constant">$PATH</span>"</span></code>`,ce,E,Ue,ee,Fe,Be,fe,A,Xs=`<code class="language-bash">$ python -V
<span class="token number">3.10</span>.1</code>`,he,G,Ne,ue,W,Ge,me,x,zs=`<code class="language-bash">$ pip <span class="token function">install</span> --user pipenv
Collecting pipenv
  Downloading pipenv-2021.11.23-py2.py3-none-any.whl <span class="token punctuation">(</span><span class="token number">3.6</span> MB<span class="token punctuation">)</span>
  <span class="token punctuation">..</span>.
  WARNING: The script virtualenv-clone is installed <span class="token keyword">in</span> <span class="token string">'/Users/fritz/.local/bin'</span> <span class="token function">which</span> is not on <span class="token environment constant">PATH</span><span class="token builtin class-name">.</span>
  Consider adding this directory to <span class="token environment constant">PATH</span> or, <span class="token keyword">if</span> you prefer to suppress this warning, use --no-warn-script-location.
  WARNING: The script virtualenv is installed <span class="token keyword">in</span> <span class="token string">'/Users/fritz/.local/bin'</span> <span class="token function">which</span> is not on <span class="token environment constant">PATH</span><span class="token builtin class-name">.</span>
  Consider adding this directory to <span class="token environment constant">PATH</span> or, <span class="token keyword">if</span> you prefer to suppress this warning, use --no-warn-script-location.
  WARNING: The scripts pipenv and pipenv-resolver are installed <span class="token keyword">in</span> <span class="token string">'/Users/fritz/.local/bin'</span> <span class="token function">which</span> is not on <span class="token environment constant">PATH</span><span class="token builtin class-name">.</span>
  Consider adding this directory to <span class="token environment constant">PATH</span> or, <span class="token keyword">if</span> you prefer to suppress this warning, use --no-warn-script-location.
  Successfully installed certi<span class="token punctuation">..</span>.etc</code>`,de,T,We,se,Ye,qe,ve,O,Ds=`<code class="language-bash"><span class="token comment"># This is the .path file from my dotfile repo again</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"<span class="token environment constant">$HOME</span>/.local/bin:<span class="token variable"><span class="token variable">$(</span>pyenv root<span class="token variable">)</span></span>/shims:..OTHER STUFF...:<span class="token environment constant">$PATH</span>"</span></code>`,ke,Y,Ve,ye,_,Ze,ne,Je,Ke,S,Qe,es,we,C,Us=`<code class="language-bash"><span class="token comment"># .path</span>
<span class="token keyword">if</span> <span class="token builtin class-name">command</span> -v pyenv <span class="token operator"><span class="token file-descriptor important">1</span>></span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">eval</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>pyenv init -<span class="token variable">)</span></span>"</span>
+  <span class="token keyword">if</span> <span class="token builtin class-name">command</span> -v <span class="token function">npm</span> <span class="token operator"><span class="token file-descriptor important">1</span>></span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
+    <span class="token builtin class-name">eval</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">npm</span> config <span class="token builtin class-name">set</span> python <span class="token punctuation">$(</span>pyenv root<span class="token punctuation">)</span>/shims/python<span class="token variable">)</span></span>"</span>
+  <span class="token keyword">fi</span>
<span class="token keyword">fi</span></code>`,be,q,ss,_e,M,Fs=`<code class="language-bash"><span class="token comment"># this creates a new .bash_profile out of my dotfiles</span>
$ ./bootstrap -f
From github.com:gotofritz/dotfiles
 * branch            master     -<span class="token operator">></span> FETCH_HEAD
Already up to date.
building <span class="token function">file</span> list <span class="token punctuation">..</span>. <span class="token keyword">done</span>

sent <span class="token number">402</span> bytes  received <span class="token number">20</span> bytes  <span class="token number">844.00</span> bytes/sec
total size is <span class="token number">80123</span>  speedup is <span class="token number">189.86</span>

<span class="token comment"># did it work?</span>
$ <span class="token function">cat</span> ~/.nprmc
<span class="token assign-left variable">python</span><span class="token operator">=</span>/Users/fritz/.pyenv/shims/python</code>`,ge,V,ns,Ee,Z,as,Te,k,j,ts,os,L,ls,ps,R,is,rs,X,cs;return{c(){h=o("h2"),y=l("Ignore OS X\u2019s own python version(s)"),w=c(),v=o("p"),u=l("Mac OS X comes with its own version of python; one which is deprecated since 2020. Given its age, it\u2019s better ignored; I treat it as an internal system tool, nothing to do with me. OS X also comes with python 3, which is available with the command "),d=o("code"),D=l("$ python3"),Ae=l(". I ignore that too"),ae=c(),U=o("h2"),xe=l("Homebrew can manage python versions"),te=c(),g=o("p"),Oe=l("You can also use homebrew to install python, with "),Q=o("code"),Se=l("brew install python"),Ce=l(". But I found aliasing different versions for different projects always tricky when doing it that way"),oe=c(),F=o("h2"),Me=l("Using pyenv to manage different versions of python"),le=c(),B=o("p"),je=l("Pyenv is very versatile and simple. I install the main version with the following commands in Terminal"),pe=c(),P=o("pre"),ie=c(),b=o("p"),Le=l("Then I need to update my $PATH. I use the "),N=o("a"),Re=l("dotfiles"),Xe=l(" concept to manage my CLI defaults. The "),H=o("a"),ze=l(".path"),De=l(" file from that project handles the $PATH variable. I made changes to it:"),re=c(),$=o("pre"),ce=c(),E=o("p"),Ue=l("The important part is the "),ee=o("code"),Fe=l("$(pyenv root)/shims"),Be=l(" in the $PATH. This is what makes the terminal load the pyenv version on the CLI instead of the standard OS X one. To prove it works, open a new terminal window and type"),fe=c(),A=o("pre"),he=c(),G=o("h2"),Ne=l("Install pipenv"),ue=c(),W=o("p"),Ge=l("I use pipenv to manage python versions in my projects; for those coming from node, it\u2019s kind of a mixture of nvm and yarn. That is installed with a simple pip command. Installing python also installs pip, so it should be already on your system"),me=c(),x=o("pre"),de=c(),T=o("p"),We=l("And yes, it creates yet another config directory, and I need to add that to the path too. I could move all the files to the "),se=o("code"),Ye=l("~/bin "),qe=l("directory, where I keep all this kind of stuff. But the benefits are minimal, compared to the risks when upgrading pipenv. So I do what pipenv asks and add the directory to the path."),ve=c(),O=o("pre"),ke=c(),Y=o("h2"),Ve=l("Trying to prevent python issues when installing node-gyp"),ye=c(),_=o("p"),Ze=l("I have had all sort of troubles trying to run node 17 on Mac OS X Monterey. "),ne=o("code"),Je=l("node-gyp"),Ke=l(", which has always been tricky, seems to be acting up again. It must be hard for those open source contributors to keep up with all the new versions of al the OSes\u2026 I don\u2019t envy them. To avoid issues, "),S=o("a"),Qe=l("they suggest setting the path to the Python executable in the npm config"),es=l(". I do that in the same .path file, in the pyenv block created during the pyenv installation"),we=c(),C=o("pre"),be=c(),q=o("p"),ss=l("I reload the dotfiles and the .npmrc file does indeed contain the Python path"),_e=c(),M=o("pre"),ge=c(),V=o("h2"),ns=l("Prior art"),Ee=c(),Z=o("p"),as=l("I found these posts helpful:"),Te=c(),k=o("p"),j=o("a"),ts=l("opensource.com/article/20/4/pyenv"),os=c(),L=o("a"),ls=l("opensource.com/article/19/5/python-3-default-mac"),ps=c(),R=o("a"),is=l("www.freecodecamp.org/news/python-version-on-mac-update/"),rs=c(),X=o("a"),cs=l("github.com/nodejs/node-gyp"),this.h()},l(e){h=p(e,"H2",{});var a=i(h);y=r(a,"Ignore OS X\u2019s own python version(s)"),a.forEach(s),w=f(e),v=p(e,"P",{});var Ie=i(v);u=r(Ie,"Mac OS X comes with its own version of python; one which is deprecated since 2020. Given its age, it\u2019s better ignored; I treat it as an internal system tool, nothing to do with me. OS X also comes with python 3, which is available with the command "),d=p(Ie,"CODE",{});var hs=i(d);D=r(hs,"$ python3"),hs.forEach(s),Ae=r(Ie,". I ignore that too"),Ie.forEach(s),ae=f(e),U=p(e,"H2",{});var us=i(U);xe=r(us,"Homebrew can manage python versions"),us.forEach(s),te=f(e),g=p(e,"P",{});var Pe=i(g);Oe=r(Pe,"You can also use homebrew to install python, with "),Q=p(Pe,"CODE",{});var ms=i(Q);Se=r(ms,"brew install python"),ms.forEach(s),Ce=r(Pe,". But I found aliasing different versions for different projects always tricky when doing it that way"),Pe.forEach(s),oe=f(e),F=p(e,"H2",{});var ds=i(F);Me=r(ds,"Using pyenv to manage different versions of python"),ds.forEach(s),le=f(e),B=p(e,"P",{});var vs=i(B);je=r(vs,"Pyenv is very versatile and simple. I install the main version with the following commands in Terminal"),vs.forEach(s),pe=f(e),P=p(e,"PRE",{class:!0});var Bs=i(P);Bs.forEach(s),ie=f(e),b=p(e,"P",{});var J=i(b);Le=r(J,"Then I need to update my $PATH. I use the "),N=p(J,"A",{href:!0});var ks=i(N);Re=r(ks,"dotfiles"),ks.forEach(s),Xe=r(J," concept to manage my CLI defaults. The "),H=p(J,"A",{href:!0,rel:!0});var ys=i(H);ze=r(ys,".path"),ys.forEach(s),De=r(J," file from that project handles the $PATH variable. I made changes to it:"),J.forEach(s),re=f(e),$=p(e,"PRE",{class:!0});var Ns=i($);Ns.forEach(s),ce=f(e),E=p(e,"P",{});var He=i(E);Ue=r(He,"The important part is the "),ee=p(He,"CODE",{});var ws=i(ee);Fe=r(ws,"$(pyenv root)/shims"),ws.forEach(s),Be=r(He," in the $PATH. This is what makes the terminal load the pyenv version on the CLI instead of the standard OS X one. To prove it works, open a new terminal window and type"),He.forEach(s),fe=f(e),A=p(e,"PRE",{class:!0});var Gs=i(A);Gs.forEach(s),he=f(e),G=p(e,"H2",{});var bs=i(G);Ne=r(bs,"Install pipenv"),bs.forEach(s),ue=f(e),W=p(e,"P",{});var _s=i(W);Ge=r(_s,"I use pipenv to manage python versions in my projects; for those coming from node, it\u2019s kind of a mixture of nvm and yarn. That is installed with a simple pip command. Installing python also installs pip, so it should be already on your system"),_s.forEach(s),me=f(e),x=p(e,"PRE",{class:!0});var Ws=i(x);Ws.forEach(s),de=f(e),T=p(e,"P",{});var $e=i(T);We=r($e,"And yes, it creates yet another config directory, and I need to add that to the path too. I could move all the files to the "),se=p($e,"CODE",{});var gs=i(se);Ye=r(gs,"~/bin "),gs.forEach(s),qe=r($e,"directory, where I keep all this kind of stuff. But the benefits are minimal, compared to the risks when upgrading pipenv. So I do what pipenv asks and add the directory to the path."),$e.forEach(s),ve=f(e),O=p(e,"PRE",{class:!0});var Ys=i(O);Ys.forEach(s),ke=f(e),Y=p(e,"H2",{});var Es=i(Y);Ve=r(Es,"Trying to prevent python issues when installing node-gyp"),Es.forEach(s),ye=f(e),_=p(e,"P",{});var K=i(_);Ze=r(K,"I have had all sort of troubles trying to run node 17 on Mac OS X Monterey. "),ne=p(K,"CODE",{});var Ts=i(ne);Je=r(Ts,"node-gyp"),Ts.forEach(s),Ke=r(K,", which has always been tricky, seems to be acting up again. It must be hard for those open source contributors to keep up with all the new versions of al the OSes\u2026 I don\u2019t envy them. To avoid issues, "),S=p(K,"A",{href:!0,rel:!0});var Is=i(S);Qe=r(Is,"they suggest setting the path to the Python executable in the npm config"),Is.forEach(s),es=r(K,". I do that in the same .path file, in the pyenv block created during the pyenv installation"),K.forEach(s),we=f(e),C=p(e,"PRE",{class:!0});var qs=i(C);qs.forEach(s),be=f(e),q=p(e,"P",{});var Ps=i(q);ss=r(Ps,"I reload the dotfiles and the .npmrc file does indeed contain the Python path"),Ps.forEach(s),_e=f(e),M=p(e,"PRE",{class:!0});var Vs=i(M);Vs.forEach(s),ge=f(e),V=p(e,"H2",{});var Hs=i(V);ns=r(Hs,"Prior art"),Hs.forEach(s),Ee=f(e),Z=p(e,"P",{});var $s=i(Z);as=r($s,"I found these posts helpful:"),$s.forEach(s),Te=f(e),k=p(e,"P",{});var I=i(k);j=p(I,"A",{href:!0,rel:!0});var As=i(j);ts=r(As,"opensource.com/article/20/4/pyenv"),As.forEach(s),os=f(I),L=p(I,"A",{href:!0,rel:!0});var xs=i(L);ls=r(xs,"opensource.com/article/19/5/python-3-default-mac"),xs.forEach(s),ps=f(I),R=p(I,"A",{href:!0,rel:!0});var Os=i(R);is=r(Os,"www.freecodecamp.org/news/python-version-on-mac-update/"),Os.forEach(s),rs=f(I),X=p(I,"A",{href:!0,rel:!0});var Ss=i(X);cs=r(Ss,"github.com/nodejs/node-gyp"),Ss.forEach(s),I.forEach(s),this.h()},h(){m(P,"class","language-bash"),m(N,"href","/blog/storing-bash-profile-and-so-on-on-github/"),m(H,"href","https://github.com/gotofritz/dotfiles/blob/master/.path"),m(H,"rel","nofollow"),m($,"class","language-bash"),m(A,"class","language-bash"),m(x,"class","language-bash"),m(O,"class","language-bash"),m(S,"href","https://github.com/nodejs/node-gyp#configuring-python-dependency"),m(S,"rel","nofollow"),m(C,"class","language-bash"),m(M,"class","language-bash"),m(j,"href","https://opensource.com/article/20/4/pyenv"),m(j,"rel","nofollow"),m(L,"href","https://opensource.com/article/19/5/python-3-default-mac"),m(L,"rel","nofollow"),m(R,"href","https://www.freecodecamp.org/news/python-version-on-mac-update/"),m(R,"rel","nofollow"),m(X,"href","https://github.com/nodejs/node-gyp"),m(X,"rel","nofollow")},m(e,a){t(e,h,a),n(h,y),t(e,w,a),t(e,v,a),n(v,u),n(v,d),n(d,D),n(v,Ae),t(e,ae,a),t(e,U,a),n(U,xe),t(e,te,a),t(e,g,a),n(g,Oe),n(g,Q),n(Q,Se),n(g,Ce),t(e,oe,a),t(e,F,a),n(F,Me),t(e,le,a),t(e,B,a),n(B,je),t(e,pe,a),t(e,P,a),P.innerHTML=Ls,t(e,ie,a),t(e,b,a),n(b,Le),n(b,N),n(N,Re),n(b,Xe),n(b,H),n(H,ze),n(b,De),t(e,re,a),t(e,$,a),$.innerHTML=Rs,t(e,ce,a),t(e,E,a),n(E,Ue),n(E,ee),n(ee,Fe),n(E,Be),t(e,fe,a),t(e,A,a),A.innerHTML=Xs,t(e,he,a),t(e,G,a),n(G,Ne),t(e,ue,a),t(e,W,a),n(W,Ge),t(e,me,a),t(e,x,a),x.innerHTML=zs,t(e,de,a),t(e,T,a),n(T,We),n(T,se),n(se,Ye),n(T,qe),t(e,ve,a),t(e,O,a),O.innerHTML=Ds,t(e,ke,a),t(e,Y,a),n(Y,Ve),t(e,ye,a),t(e,_,a),n(_,Ze),n(_,ne),n(ne,Je),n(_,Ke),n(_,S),n(S,Qe),n(_,es),t(e,we,a),t(e,C,a),C.innerHTML=Us,t(e,be,a),t(e,q,a),n(q,ss),t(e,_e,a),t(e,M,a),M.innerHTML=Fs,t(e,ge,a),t(e,V,a),n(V,ns),t(e,Ee,a),t(e,Z,a),n(Z,as),t(e,Te,a),t(e,k,a),n(k,j),n(j,ts),n(k,os),n(k,L),n(L,ls),n(k,ps),n(k,R),n(R,is),n(k,rs),n(k,X),n(X,cs)},p:ln,d(e){e&&s(h),e&&s(w),e&&s(v),e&&s(ae),e&&s(U),e&&s(te),e&&s(g),e&&s(oe),e&&s(F),e&&s(le),e&&s(B),e&&s(pe),e&&s(P),e&&s(ie),e&&s(b),e&&s(re),e&&s($),e&&s(ce),e&&s(E),e&&s(fe),e&&s(A),e&&s(he),e&&s(G),e&&s(ue),e&&s(W),e&&s(me),e&&s(x),e&&s(de),e&&s(T),e&&s(ve),e&&s(O),e&&s(ke),e&&s(Y),e&&s(ye),e&&s(_),e&&s(we),e&&s(C),e&&s(be),e&&s(q),e&&s(_e),e&&s(M),e&&s(ge),e&&s(V),e&&s(Ee),e&&s(Z),e&&s(Te),e&&s(k)}}}function cn(z){let h,y;const w=[z[0],js];let v={$$slots:{default:[rn]},$$scope:{ctx:z}};for(let u=0;u<w.length;u+=1)v=fs(v,w[u]);return h=new pn({props:v}),{c(){Qs(h.$$.fragment)},l(u){en(h.$$.fragment,u)},m(u,d){sn(h,u,d),y=!0},p(u,[d]){const D=d&1?nn(w,[d&1&&Cs(u[0]),d&0&&Cs(js)]):{};d&2&&(D.$$scope={dirty:d,ctx:u}),h.$set(D)},i(u){y||(an(h.$$.fragment,u),y=!0)},o(u){tn(h.$$.fragment,u),y=!1},d(u){on(h,u)}}}const js={excerpt:"There are many different ways of doing it; my favourite involves using pyenv",date:"2022-01-04T00:00:00.000Z",published:!0,archived:!1,title:"How I install python on OS X in 2022",prev:"setting-up-thunderbird-for-gmail-on-os-x",next:"fixing-autoformatting-django-templates-in-visual-studio-code",tags:["os x","python"]};function fn(z,h,y){return z.$$set=w=>{y(0,h=fs(fs({},h),Ms(w)))},h=Ms(h),[h]}class dn extends Zs{constructor(h){super(),Js(this,h,fn,cn,Ks,{})}}export{dn as default,js as metadata};
