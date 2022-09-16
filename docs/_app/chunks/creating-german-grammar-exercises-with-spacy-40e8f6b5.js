import{S as hs,i as ms,s as ks,e as n,t as p,k as u,c as o,a as i,d as t,h as c,m as f,b as s,g as l,I as a,E as va}from"./index-6e518972.js";function bs(Ja){let m,v,pe,ut,Ce,te,ft,Te,g,dt,U,ht,mt,He,w,I,ce,kt,Le,_,x,ue,bt,De,E,yt,ae,vt,gt,Ne,q,Ka=`<code class="language-bash"><span class="token operator">></span> <span class="token function">mkdir</span> german-learning <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> german-learning
<span class="token operator">></span> python -V
<span class="token number">3.8</span>.5
<span class="token operator">></span> pyenv <span class="token builtin class-name">local</span> <span class="token number">3.10</span>.1
<span class="token punctuation">..</span>.
<span class="token operator">></span> python -V
<span class="token number">3.10</span>.1</code>`,Oe,j,wt,F,It,_t,Me,W,$a=`<code class="language-bash"><span class="token comment"># get my starter pyproject.toml from a gist</span>
<span class="token operator">></span> <span class="token function">curl</span> https://gist.githubusercontent.com/gotofritz/b5800f01a52d1ba400d82cfd891029a2/raw/dff121f195d6d9a1976685431830424c2e307c33/pyproject.toml <span class="token operator">></span> pyproject.toml
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
<span class="token number">100</span>   <span class="token number">578</span>  <span class="token number">100</span>   <span class="token number">578</span>    <span class="token number">0</span>     <span class="token number">0</span>   <span class="token number">2127</span>      <span class="token number">0</span> --:--:-- --:--:-- --:--:--  <span class="token number">2189</span>

<span class="token comment"># it's important to have a properly named project - its name will</span>
<span class="token comment"># be given to the virtual env. DON'T LEAVE 'my-project". You don't</span>
<span class="token comment"># want an endless list of my-project-xQlBT47A-py3.10 ..</span>
<span class="token comment"># my-project-aQlasda2-py3.10 ...</span>
<span class="token comment"># You can also add a description and other things</span>
<span class="token operator">></span> <span class="token function">vim</span> pyproject.toml

\u276F poetry <span class="token function">install</span>
Creating virtualenv german-learning-xQlBT47A-py3.10 <span class="token keyword">in</span> /Users/fritz/Library/Caches/pypoetry/virtualenvs
Installing dependencies from lock <span class="token function">file</span>

Package operations: <span class="token number">34</span> installs, <span class="token number">0</span> updates, <span class="token number">0</span> removals

  \u2022 Installing mccabe <span class="token punctuation">(</span><span class="token number">0.7</span>.0<span class="token punctuation">)</span>
  <span class="token punctuation">..</span>.

<span class="token comment"># actually start the shell</span>
\u276F poetry shell
Spawning shell within /Users/fritz/Library/Caches/pypoetry/virtualenvs/german-learning-xQlBT47A-py3.10
<span class="token builtin class-name">.</span> /Users/fritz/Library/Caches/pypoetry/virtualenvs/german-learning-xQlBT47A-py3.10/bin/activate</code>`,Ve,P,xt,fe,Et,jt,Be,A,S,de,Pt,ze,d,At,he,St,Ct,me,Tt,Ht,ke,Lt,Dt,be,Nt,Ot,Ge,Y,es=`<code class="language-bash">\u276F <span class="token function">ls</span> ~/Library/Caches/pypoetry/virtualenvs/german-learning-xQlBT47A-py3.10/bin/python3.10
/Users/fritz/Library/Caches/pypoetry/virtualenvs/german-learning-xQlBT47A-py3.10/bin/python3.10</code>`,Re,se,Mt,Qe,C,T,ye,Vt,Ue,h,Bt,X,zt,Gt,ve,Rt,Qt,ge,Ut,qt,we,Ft,Wt,qe,Z,ts=`<code class="language-bash"><span class="token operator">></span> <span class="token function">curl</span> https://gist.githubusercontent.com/gotofritz/62b58e89d2100448af5503940736bd1f/raw/e35e7375a7f069f66a73e4998fe7735147a76578/Makefile <span class="token operator">></span> Makefile

\u276F <span class="token function">make</span> <span class="token builtin class-name">help</span>

Usage:
  <span class="token function">make</span>
  <span class="token builtin class-name">help</span>             Display this <span class="token builtin class-name">help</span>
  lint-mypy        checks src and tests with mypy
  lint-flake       checks src and tests with mypy
  lint-black       checks src and tests with mypy
  <span class="token function">format</span>           rewrites code with black and isort
  lint             runs all static analysis tools
  <span class="token builtin class-name">test</span>             runs tests
  qa               formats code, runs static analysis, runs tests</code>`,Fe,H,L,Ie,Yt,We,ne,Xt,Ye,J,as=`<code class="language-bash">\u276F <span class="token function">mkdir</span> -p src/german-learning
\u276F <span class="token builtin class-name">echo</span> <span class="token string">'__version__ = "0.1.0"'</span> <span class="token operator">>></span> src/german-learning/__init__.py
<span class="token operator">></span> <span class="token function">mkdir</span> tests
<span class="token operator">></span> <span class="token function">touch</span> tests/__init__.py</code>`,Xe,D,N,_e,Zt,Ze,k,Jt,xe,Kt,$t,Ee,ea,ta,Je,K,ss=`<code class="language-bash"> <span class="token comment"># toptal.com offers a free, comprehensive .gitignore generator</span>
 <span class="token operator">></span> <span class="token function">curl</span> -L https://www.toptal.com/developers/gitignore/api/python,visualstudiocode <span class="token operator">></span> .gitignore
 <span class="token operator">></span> <span class="token function">git</span> init --initial-branch<span class="token operator">=</span>trunk
 Initialized empty Git repository <span class="token keyword">in</span> /Users/fritz/work/gotofritz/german-learning/.git/
 <span class="token punctuation">..</span>. accept all defaults
 <span class="token operator">></span> <span class="token function">git</span> config user.email <span class="token string">"gotofritz@users.noreply.github.com"</span>
 <span class="token operator">></span> <span class="token function">git</span> config user.name <span class="token string">"gotofritz"</span>
 <span class="token operator">></span> <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
 <span class="token operator">></span> <span class="token function">git</span> commit -m <span class="token string">"initial commit"</span>
<span class="token punctuation">[</span>trunk <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> <span class="token number">5299312</span><span class="token punctuation">]</span> initial commit
 <span class="token number">3</span> files changed, <span class="token number">647</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> .gitignore
 create mode <span class="token number">100644</span> poetry.lock
 create mode <span class="token number">100644</span> pyproject.toml</code>`,Ke,O,M,je,aa,$e,oe,sa,et,$,ns=`<code class="language-bash"><span class="token operator">></span> <span class="token function">mkdir</span> -p data/src
<span class="token operator">></span> <span class="token function">git</span> clone https://github.com/tblock/10kGNAD.git <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/
<span class="token operator">></span> <span class="token function">cp</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/10kGNAD/articles.csv data/src/
<span class="token operator">></span> <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token operator">></span> <span class="token function">git</span> commit -m <span class="token string">"add dataset"</span>
<span class="token punctuation">[</span>trunk 1f58e62<span class="token punctuation">]</span> <span class="token function">add</span> article dataset
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">10273</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> data/src/articles.csv</code>`,tt,V,B,Pe,na,at,ie,oa,st,ee,os=`<code class="language-txt">foo foo nach dem bar bar => foo foo xxxx dxxx bar bar
foo foo in diesem  bar bar => foo foo xxxxx diesxxx bar bar
foo foo mit einem bar bar => foo foo xxxx exxx bar bar</code>`,nt,z,G,Ae,ia,ot,re,ra,it,R,Q,Se,la;return{c(){m=n("h2"),v=n("a"),pe=n("span"),ut=p("What I\u2019m trying to do"),Ce=u(),te=n("p"),ft=p("Oh, the never ending quest to master German. I am at the stage where I get it mostly right and can hold conversations. But I still make a lot of small mistakes. Occasionally I take some language classes to raise the level and iron them out. But although the improvement is visible, it never fully eradicates those mistakes. I need many more repetitions than the the 10-12 offered by textbooks. In other words, I need Python"),Te=u(),g=n("p"),dt=p("When I look at the exercises in textbooks I see a few repeated patterns. Sentences with words in the wrong order, and missing words mostly. Creating them should be easy to automate. I will use the "),U=n("a"),ht=p("free dataset Timo Block made available on GitHub"),mt=p(" for that"),He=u(),w=n("h2"),I=n("a"),ce=n("span"),kt=p("Step 0: Setting up the python project"),Le=u(),_=n("h3"),x=n("a"),ue=n("span"),bt=p("Project setup: poetry"),De=u(),E=n("p"),yt=p("Since this is a python project, I will do the usual and set it up with poetry. I already have "),ae=n("a"),vt=p("python and pyenv installed"),gt=p(", so it\u2019s just a matter of making sure the expected version is there"),Ne=u(),q=n("pre"),Oe=u(),j=n("p"),wt=p("I use poetry for controlling dependencies. It\u2019s good at managing versions and it keeps most of the config in one centralised place. However, setting up a new project with it involves a lot of repetitive steps. As it tends to be the case with all similar tools. I could use something like cookiecutter to generate project scaffolding from a template. But the template would need to be maintained and checked for bugs. I find that keeping the files I need in gists and downloading them when I need them serves me well. I have a trusted "),F=n("a"),It=p("starter pyproject.toml gist"),_t=p(" with pytest, mypy and a variety of linting tools."),Me=u(),W=n("pre"),Ve=u(),P=n("p"),xt=p("At the end of this step I have "),fe=n("code"),Et=p("pyproject.toml"),jt=p(", and a virtual env with its own installation of python with all its packages. One small problem: VSCode doesn\u2019t know about this virtual env. I need to make sure it knows"),Be=u(),A=n("h3"),S=n("a"),de=n("span"),Pt=p("Letting VSCode know about the poetry virtual environment"),ze=u(),d=n("p"),At=p("In VSCode, I do "),he=n("code"),St=p("CMD+SHIFT+P"),Ct=p(" to open the command palette, and select "),me=n("code"),Tt=p("Python: select interpreter"),Ht=p(". In the textbox I then enter the path I just got on the CLI when I run "),ke=n("code"),Lt=p("poetry shell"),Dt=p(", followed by "),be=n("code"),Nt=p("bin/python3.10"),Ot=p(" - i.e., in my case the one after ls"),Ge=u(),Y=n("pre"),Re=u(),se=n("p"),Mt=p("So now VScode knows where to find the packages. I can click on their name in the editor to look them up."),Qe=u(),C=n("h3"),T=n("a"),ye=n("span"),Vt=p("Project setup: Makefile"),Ue=u(),h=n("p"),Bt=p("I use Makefiles for running my Python projects. I have a standard starting point I copy from project to project (see "),X=n("a"),zt=p("gist"),Gt=p("). It has a "),ve=n("code"),Rt=p("make help"),Qt=p(" with a nicely formatted help test (courtesy of awk), commands to run each of the linting tools in my pyproject.toml. Additionally a "),ge=n("code"),Ut=p("make format"),qt=p(" for reformatting the code, and "),we=n("code"),Ft=p("make qa"),Wt=p(" for running all tests and linting jobs."),qe=u(),Z=n("pre"),Fe=u(),H=n("h3"),L=n("a"),Ie=n("span"),Yt=p("Project setup: initial file structure"),We=u(),ne=n("p"),Xt=p("The initial doc structure"),Ye=u(),J=n("pre"),Xe=u(),D=n("h3"),N=n("a"),_e=n("span"),Zt=p("Project setup: git"),Ze=u(),k=n("p"),Jt=p("Finally download a .gitignore from toptal, and add the project to git. I name my main branch \u2018trunk\u2019, like in the old SVN days. I do think it\u2019s more meaningful than either the fashionable "),xe=n("code"),Kt=p("main"),$t=p(" or "),Ee=n("code"),ea=p("master"),ta=p(". I also add a user name and email for each project, since they may be for different orgs."),Je=u(),K=n("pre"),Ke=u(),O=n("h3"),M=n("a"),je=n("span"),aa=p("Downloading the German language dataset"),$e=u(),oe=n("p"),sa=p("At this stage I should download the source data from tblock. Since it will be shared among all my attempts, it makes sense to leave in the trunk. That way it will be available whenever a new branch is created"),et=u(),$=n("pre"),tt=u(),V=n("h2"),B=n("a"),Pe=n("span"),na=p("1st attempt: missing prepositions exercise, CLI script"),at=u(),ie=n("p"),oa=p("The first iteration will be a self contained CLI script. It will picks a random line from one of the CSV source files and generate an exercise from it. The exercise will consist in hiding prepositions and parts of any article or demonstrative pronoun afterwards. In other words,"),st=u(),ee=n("pre"),nt=u(),z=n("h3"),G=n("a"),Ae=n("span"),ia=p("Setting up tests"),ot=u(),re=n("p"),ra=p("The tests setup is going to be shared among all attempts, so I will carry on working on trunk."),it=u(),R=n("h3"),Q=n("a"),Se=n("span"),la=p("Picking a random line from a large text file with Python"),this.h()},l(e){m=o(e,"H2",{id:!0});var r=i(m);v=o(r,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ga=i(v);pe=o(ga,"SPAN",{class:!0}),i(pe).forEach(t),ga.forEach(t),ut=c(r,"What I\u2019m trying to do"),r.forEach(t),Ce=f(e),te=o(e,"P",{});var wa=i(te);ft=c(wa,"Oh, the never ending quest to master German. I am at the stage where I get it mostly right and can hold conversations. But I still make a lot of small mistakes. Occasionally I take some language classes to raise the level and iron them out. But although the improvement is visible, it never fully eradicates those mistakes. I need many more repetitions than the the 10-12 offered by textbooks. In other words, I need Python"),wa.forEach(t),Te=f(e),g=o(e,"P",{});var rt=i(g);dt=c(rt,"When I look at the exercises in textbooks I see a few repeated patterns. Sentences with words in the wrong order, and missing words mostly. Creating them should be easy to automate. I will use the "),U=o(rt,"A",{href:!0,rel:!0});var Ia=i(U);ht=c(Ia,"free dataset Timo Block made available on GitHub"),Ia.forEach(t),mt=c(rt," for that"),rt.forEach(t),He=f(e),w=o(e,"H2",{id:!0});var pa=i(w);I=o(pa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _a=i(I);ce=o(_a,"SPAN",{class:!0}),i(ce).forEach(t),_a.forEach(t),kt=c(pa,"Step 0: Setting up the python project"),pa.forEach(t),Le=f(e),_=o(e,"H3",{id:!0});var ca=i(_);x=o(ca,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var xa=i(x);ue=o(xa,"SPAN",{class:!0}),i(ue).forEach(t),xa.forEach(t),bt=c(ca,"Project setup: poetry"),ca.forEach(t),De=f(e),E=o(e,"P",{});var lt=i(E);yt=c(lt,"Since this is a python project, I will do the usual and set it up with poetry. I already have "),ae=o(lt,"A",{href:!0});var Ea=i(ae);vt=c(Ea,"python and pyenv installed"),Ea.forEach(t),gt=c(lt,", so it\u2019s just a matter of making sure the expected version is there"),lt.forEach(t),Ne=f(e),q=o(e,"PRE",{class:!0});var is=i(q);is.forEach(t),Oe=f(e),j=o(e,"P",{});var pt=i(j);wt=c(pt,"I use poetry for controlling dependencies. It\u2019s good at managing versions and it keeps most of the config in one centralised place. However, setting up a new project with it involves a lot of repetitive steps. As it tends to be the case with all similar tools. I could use something like cookiecutter to generate project scaffolding from a template. But the template would need to be maintained and checked for bugs. I find that keeping the files I need in gists and downloading them when I need them serves me well. I have a trusted "),F=o(pt,"A",{href:!0,rel:!0});var ja=i(F);It=c(ja,"starter pyproject.toml gist"),ja.forEach(t),_t=c(pt," with pytest, mypy and a variety of linting tools."),pt.forEach(t),Me=f(e),W=o(e,"PRE",{class:!0});var rs=i(W);rs.forEach(t),Ve=f(e),P=o(e,"P",{});var ct=i(P);xt=c(ct,"At the end of this step I have "),fe=o(ct,"CODE",{});var Pa=i(fe);Et=c(Pa,"pyproject.toml"),Pa.forEach(t),jt=c(ct,", and a virtual env with its own installation of python with all its packages. One small problem: VSCode doesn\u2019t know about this virtual env. I need to make sure it knows"),ct.forEach(t),Be=f(e),A=o(e,"H3",{id:!0});var ua=i(A);S=o(ua,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Aa=i(S);de=o(Aa,"SPAN",{class:!0}),i(de).forEach(t),Aa.forEach(t),Pt=c(ua,"Letting VSCode know about the poetry virtual environment"),ua.forEach(t),ze=f(e),d=o(e,"P",{});var b=i(d);At=c(b,"In VSCode, I do "),he=o(b,"CODE",{});var Sa=i(he);St=c(Sa,"CMD+SHIFT+P"),Sa.forEach(t),Ct=c(b," to open the command palette, and select "),me=o(b,"CODE",{});var Ca=i(me);Tt=c(Ca,"Python: select interpreter"),Ca.forEach(t),Ht=c(b,". In the textbox I then enter the path I just got on the CLI when I run "),ke=o(b,"CODE",{});var Ta=i(ke);Lt=c(Ta,"poetry shell"),Ta.forEach(t),Dt=c(b,", followed by "),be=o(b,"CODE",{});var Ha=i(be);Nt=c(Ha,"bin/python3.10"),Ha.forEach(t),Ot=c(b," - i.e., in my case the one after ls"),b.forEach(t),Ge=f(e),Y=o(e,"PRE",{class:!0});var ls=i(Y);ls.forEach(t),Re=f(e),se=o(e,"P",{});var La=i(se);Mt=c(La,"So now VScode knows where to find the packages. I can click on their name in the editor to look them up."),La.forEach(t),Qe=f(e),C=o(e,"H3",{id:!0});var fa=i(C);T=o(fa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Da=i(T);ye=o(Da,"SPAN",{class:!0}),i(ye).forEach(t),Da.forEach(t),Vt=c(fa,"Project setup: Makefile"),fa.forEach(t),Ue=f(e),h=o(e,"P",{});var y=i(h);Bt=c(y,"I use Makefiles for running my Python projects. I have a standard starting point I copy from project to project (see "),X=o(y,"A",{href:!0,rel:!0});var Na=i(X);zt=c(Na,"gist"),Na.forEach(t),Gt=c(y,"). It has a "),ve=o(y,"CODE",{});var Oa=i(ve);Rt=c(Oa,"make help"),Oa.forEach(t),Qt=c(y," with a nicely formatted help test (courtesy of awk), commands to run each of the linting tools in my pyproject.toml. Additionally a "),ge=o(y,"CODE",{});var Ma=i(ge);Ut=c(Ma,"make format"),Ma.forEach(t),qt=c(y," for reformatting the code, and "),we=o(y,"CODE",{});var Va=i(we);Ft=c(Va,"make qa"),Va.forEach(t),Wt=c(y," for running all tests and linting jobs."),y.forEach(t),qe=f(e),Z=o(e,"PRE",{class:!0});var ps=i(Z);ps.forEach(t),Fe=f(e),H=o(e,"H3",{id:!0});var da=i(H);L=o(da,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ba=i(L);Ie=o(Ba,"SPAN",{class:!0}),i(Ie).forEach(t),Ba.forEach(t),Yt=c(da,"Project setup: initial file structure"),da.forEach(t),We=f(e),ne=o(e,"P",{});var za=i(ne);Xt=c(za,"The initial doc structure"),za.forEach(t),Ye=f(e),J=o(e,"PRE",{class:!0});var cs=i(J);cs.forEach(t),Xe=f(e),D=o(e,"H3",{id:!0});var ha=i(D);N=o(ha,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ga=i(N);_e=o(Ga,"SPAN",{class:!0}),i(_e).forEach(t),Ga.forEach(t),Zt=c(ha,"Project setup: git"),ha.forEach(t),Ze=f(e),k=o(e,"P",{});var le=i(k);Jt=c(le,"Finally download a .gitignore from toptal, and add the project to git. I name my main branch \u2018trunk\u2019, like in the old SVN days. I do think it\u2019s more meaningful than either the fashionable "),xe=o(le,"CODE",{});var Ra=i(xe);Kt=c(Ra,"main"),Ra.forEach(t),$t=c(le," or "),Ee=o(le,"CODE",{});var Qa=i(Ee);ea=c(Qa,"master"),Qa.forEach(t),ta=c(le,". I also add a user name and email for each project, since they may be for different orgs."),le.forEach(t),Je=f(e),K=o(e,"PRE",{class:!0});var us=i(K);us.forEach(t),Ke=f(e),O=o(e,"H3",{id:!0});var ma=i(O);M=o(ma,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ua=i(M);je=o(Ua,"SPAN",{class:!0}),i(je).forEach(t),Ua.forEach(t),aa=c(ma,"Downloading the German language dataset"),ma.forEach(t),$e=f(e),oe=o(e,"P",{});var qa=i(oe);sa=c(qa,"At this stage I should download the source data from tblock. Since it will be shared among all my attempts, it makes sense to leave in the trunk. That way it will be available whenever a new branch is created"),qa.forEach(t),et=f(e),$=o(e,"PRE",{class:!0});var fs=i($);fs.forEach(t),tt=f(e),V=o(e,"H2",{id:!0});var ka=i(V);B=o(ka,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Fa=i(B);Pe=o(Fa,"SPAN",{class:!0}),i(Pe).forEach(t),Fa.forEach(t),na=c(ka,"1st attempt: missing prepositions exercise, CLI script"),ka.forEach(t),at=f(e),ie=o(e,"P",{});var Wa=i(ie);oa=c(Wa,"The first iteration will be a self contained CLI script. It will picks a random line from one of the CSV source files and generate an exercise from it. The exercise will consist in hiding prepositions and parts of any article or demonstrative pronoun afterwards. In other words,"),Wa.forEach(t),st=f(e),ee=o(e,"PRE",{class:!0});var ds=i(ee);ds.forEach(t),nt=f(e),z=o(e,"H3",{id:!0});var ba=i(z);G=o(ba,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ya=i(G);Ae=o(Ya,"SPAN",{class:!0}),i(Ae).forEach(t),Ya.forEach(t),ia=c(ba,"Setting up tests"),ba.forEach(t),ot=f(e),re=o(e,"P",{});var Xa=i(re);ra=c(Xa,"The tests setup is going to be shared among all attempts, so I will carry on working on trunk."),Xa.forEach(t),it=f(e),R=o(e,"H3",{id:!0});var ya=i(R);Q=o(ya,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Za=i(Q);Se=o(Za,"SPAN",{class:!0}),i(Se).forEach(t),Za.forEach(t),la=c(ya,"Picking a random line from a large text file with Python"),ya.forEach(t),this.h()},h(){s(pe,"class","icon icon-link"),s(v,"aria-hidden","true"),s(v,"tabindex","-1"),s(v,"href","#what-im-trying-to-do"),s(m,"id","what-im-trying-to-do"),s(U,"href","https://tblock.github.io/10kGNAD/"),s(U,"rel","nofollow"),s(ce,"class","icon icon-link"),s(I,"aria-hidden","true"),s(I,"tabindex","-1"),s(I,"href","#step-0-setting-up-the-python-project"),s(w,"id","step-0-setting-up-the-python-project"),s(ue,"class","icon icon-link"),s(x,"aria-hidden","true"),s(x,"tabindex","-1"),s(x,"href","#project-setup-poetry"),s(_,"id","project-setup-poetry"),s(ae,"href","/blog/installing-python-on-mac-os-x-in-2022"),s(q,"class","language-bash"),s(F,"href","https://gist.github.com/gotofritz/b5800f01a52d1ba400d82cfd891029a2"),s(F,"rel","nofollow"),s(W,"class","language-bash"),s(de,"class","icon icon-link"),s(S,"aria-hidden","true"),s(S,"tabindex","-1"),s(S,"href","#letting-vscode-know-about-the-poetry-virtual-environment"),s(A,"id","letting-vscode-know-about-the-poetry-virtual-environment"),s(Y,"class","language-bash"),s(ye,"class","icon icon-link"),s(T,"aria-hidden","true"),s(T,"tabindex","-1"),s(T,"href","#project-setup-makefile"),s(C,"id","project-setup-makefile"),s(X,"href","https://gist.github.com/gotofritz/62b58e89d2100448af5503940736bd1f"),s(X,"rel","nofollow"),s(Z,"class","language-bash"),s(Ie,"class","icon icon-link"),s(L,"aria-hidden","true"),s(L,"tabindex","-1"),s(L,"href","#project-setup-initial-file-structure"),s(H,"id","project-setup-initial-file-structure"),s(J,"class","language-bash"),s(_e,"class","icon icon-link"),s(N,"aria-hidden","true"),s(N,"tabindex","-1"),s(N,"href","#project-setup-git"),s(D,"id","project-setup-git"),s(K,"class","language-bash"),s(je,"class","icon icon-link"),s(M,"aria-hidden","true"),s(M,"tabindex","-1"),s(M,"href","#downloading-the-german-language-dataset"),s(O,"id","downloading-the-german-language-dataset"),s($,"class","language-bash"),s(Pe,"class","icon icon-link"),s(B,"aria-hidden","true"),s(B,"tabindex","-1"),s(B,"href","#1st-attempt-missing-prepositions-exercise-cli-script"),s(V,"id","1st-attempt-missing-prepositions-exercise-cli-script"),s(ee,"class","language-txt"),s(Ae,"class","icon icon-link"),s(G,"aria-hidden","true"),s(G,"tabindex","-1"),s(G,"href","#setting-up-tests"),s(z,"id","setting-up-tests"),s(Se,"class","icon icon-link"),s(Q,"aria-hidden","true"),s(Q,"tabindex","-1"),s(Q,"href","#picking-a-random-line-from-a-large-text-file-with-python"),s(R,"id","picking-a-random-line-from-a-large-text-file-with-python")},m(e,r){l(e,m,r),a(m,v),a(v,pe),a(m,ut),l(e,Ce,r),l(e,te,r),a(te,ft),l(e,Te,r),l(e,g,r),a(g,dt),a(g,U),a(U,ht),a(g,mt),l(e,He,r),l(e,w,r),a(w,I),a(I,ce),a(w,kt),l(e,Le,r),l(e,_,r),a(_,x),a(x,ue),a(_,bt),l(e,De,r),l(e,E,r),a(E,yt),a(E,ae),a(ae,vt),a(E,gt),l(e,Ne,r),l(e,q,r),q.innerHTML=Ka,l(e,Oe,r),l(e,j,r),a(j,wt),a(j,F),a(F,It),a(j,_t),l(e,Me,r),l(e,W,r),W.innerHTML=$a,l(e,Ve,r),l(e,P,r),a(P,xt),a(P,fe),a(fe,Et),a(P,jt),l(e,Be,r),l(e,A,r),a(A,S),a(S,de),a(A,Pt),l(e,ze,r),l(e,d,r),a(d,At),a(d,he),a(he,St),a(d,Ct),a(d,me),a(me,Tt),a(d,Ht),a(d,ke),a(ke,Lt),a(d,Dt),a(d,be),a(be,Nt),a(d,Ot),l(e,Ge,r),l(e,Y,r),Y.innerHTML=es,l(e,Re,r),l(e,se,r),a(se,Mt),l(e,Qe,r),l(e,C,r),a(C,T),a(T,ye),a(C,Vt),l(e,Ue,r),l(e,h,r),a(h,Bt),a(h,X),a(X,zt),a(h,Gt),a(h,ve),a(ve,Rt),a(h,Qt),a(h,ge),a(ge,Ut),a(h,qt),a(h,we),a(we,Ft),a(h,Wt),l(e,qe,r),l(e,Z,r),Z.innerHTML=ts,l(e,Fe,r),l(e,H,r),a(H,L),a(L,Ie),a(H,Yt),l(e,We,r),l(e,ne,r),a(ne,Xt),l(e,Ye,r),l(e,J,r),J.innerHTML=as,l(e,Xe,r),l(e,D,r),a(D,N),a(N,_e),a(D,Zt),l(e,Ze,r),l(e,k,r),a(k,Jt),a(k,xe),a(xe,Kt),a(k,$t),a(k,Ee),a(Ee,ea),a(k,ta),l(e,Je,r),l(e,K,r),K.innerHTML=ss,l(e,Ke,r),l(e,O,r),a(O,M),a(M,je),a(O,aa),l(e,$e,r),l(e,oe,r),a(oe,sa),l(e,et,r),l(e,$,r),$.innerHTML=ns,l(e,tt,r),l(e,V,r),a(V,B),a(B,Pe),a(V,na),l(e,at,r),l(e,ie,r),a(ie,oa),l(e,st,r),l(e,ee,r),ee.innerHTML=os,l(e,nt,r),l(e,z,r),a(z,G),a(G,Ae),a(z,ia),l(e,ot,r),l(e,re,r),a(re,ra),l(e,it,r),l(e,R,r),a(R,Q),a(Q,Se),a(R,la)},p:va,i:va,o:va,d(e){e&&t(m),e&&t(Ce),e&&t(te),e&&t(Te),e&&t(g),e&&t(He),e&&t(w),e&&t(Le),e&&t(_),e&&t(De),e&&t(E),e&&t(Ne),e&&t(q),e&&t(Oe),e&&t(j),e&&t(Me),e&&t(W),e&&t(Ve),e&&t(P),e&&t(Be),e&&t(A),e&&t(ze),e&&t(d),e&&t(Ge),e&&t(Y),e&&t(Re),e&&t(se),e&&t(Qe),e&&t(C),e&&t(Ue),e&&t(h),e&&t(qe),e&&t(Z),e&&t(Fe),e&&t(H),e&&t(We),e&&t(ne),e&&t(Ye),e&&t(J),e&&t(Xe),e&&t(D),e&&t(Ze),e&&t(k),e&&t(Je),e&&t(K),e&&t(Ke),e&&t(O),e&&t($e),e&&t(oe),e&&t(et),e&&t($),e&&t(tt),e&&t(V),e&&t(at),e&&t(ie),e&&t(st),e&&t(ee),e&&t(nt),e&&t(z),e&&t(ot),e&&t(re),e&&t(it),e&&t(R)}}}const vs={excerpt:"Textbooks are good for learning grammar, but their exercises tend to be too limited. Doing 10 or 12 exercises once is a good start but does not come anywhere near what I need. Which is hundreds of exercises over the course of days, weeks even.",date:"2020-06-16T00:00:00.000Z",draft:!0,archived:!1,title:"Creating simple German grammar exercises with SpaCy and FastAPI",tags:["german","python","spacy"]};class gs extends hs{constructor(m){super(),ms(this,m,null,bs,ks,{})}}export{gs as default,vs as metadata};
