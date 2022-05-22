import{S as mo,i as vo,s as yo,e as l,t as a,j as d,c as i,a as n,d as s,g as o,l as p,b as h,f,F as t,J as ma}from"./vendor-e04e0de5.js";function wo(po){let g,A,me,_t,Ve,m,St,le,It,xt,ve,jt,Tt,ye,At,Ot,Xe,O,Pt,Y,Dt,Nt,Ze,P,D,we,Ct,Qe,b,Gt,ge,Bt,Rt,L,Jt,Kt,$e,c,Mt,U,Ht,qt,be,Yt,Lt,ke,Ut,Wt,Ee,zt,Ft,et,ie,Vt,tt,ne,Xt,st,re,Zt,at,N,C,_e,Qt,ot,W,uo=`<code class="language-bash">\u251C\u2500\u2500 app.css
\u251C\u2500\u2500 app.html
<span class="token punctuation">..</span>.
\u251C\u2500\u2500 lib
\u2502   \u251C\u2500\u2500 components               <span class="token comment"># your typical svelte component</span>
\u2502   \u2502   \u251C\u2500\u2500 Footer.svelte
\u2502   \u2502   \u251C\u2500\u2500 Header.svelte
\u2502   \u2502   \u2514\u2500\u2500 PostSummary.svelte
\u2502   \u251C\u2500\u2500 <span class="token punctuation">..</span>.
\u2502   \u251C\u2500\u2500 get-posts.js            <span class="token comment"># some util functions to handle the</span>
\u2502   \u2514\u2500\u2500 filter-by.js            <span class="token comment"># data from the entrypoint</span>
\u2514\u2500\u2500 routes
    \u251C\u2500\u2500 __layout.svelte         <span class="token comment"># a layout file</span>
    \u251C\u2500\u2500 api
    \u2502   \u2514\u2500\u2500 posts.json.js       <span class="token comment"># a single entrypoint for the whole site</span>
    \u251C\u2500\u2500 blog
    \u2502   \u251C\u2500\u2500 _post.svelte        <span class="token comment"># a layout file, for markdown files</span>
    \u2502   \u251C\u2500\u2500 <span class="token punctuation">[</span>slug<span class="token punctuation">]</span>.svelte       <span class="token comment"># this fetches content from /api/posts.json and generates a page</span>
    \u2502   \u2514\u2500\u2500 index.svelte        <span class="token comment"># same, but this is the index page</span>
    \u251C\u2500\u2500 feed.xml.js             <span class="token comment"># this is also an entrypoint, for rss</span>
    \u251C\u2500\u2500 index.svelte            <span class="token comment"># the site's homepage</span>
    \u251C\u2500\u2500 sitemap.xml.js          <span class="token comment"># this is also an entrypoint, for google / SEO</span>
    \u2514\u2500\u2500 tags                    <span class="token comment"># exactly the same idea as /blog/</span>
        \u251C\u2500\u2500 <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>.svelte
        \u2514\u2500\u2500 index.svelte</code>`,lt,x,Se,$t,es,Ie,ts,ss,it,v,xe,as,os,je,ls,is,Te,ns,rs,Ae,hs,nt,z,Oe,fs,ds,rt,G,Pe,ps,us,De,cs,ht,j,Ne,ms,vs,Ce,ys,ws,ft,B,Ge,gs,bs,F,ks,dt,y,Be,Es,_s,Re,Ss,Is,Je,xs,js,pt,u,Ke,Ts,As,Me,Os,Ps,He,Ds,Ns,V,Cs,Gs,X,Bs,Rs,ut,T,qe,Js,Ks,Ye,Ms,Hs,ct,R,J,Le,qs,mt,k,Ys,Z,Ls,Us,he,Ws,zs,vt,K,M,Ue,Fs,yt,E,Vs,Q,Xs,Zs,$,Qs,$s,wt,_,ea,ee,ta,sa,te,aa,oa,gt,S,la,se,ia,na,ae,ra,ha;return{c(){g=l("h2"),A=l("a"),me=l("span"),_t=a("Getting used to SvelteKit\u2019s and Vite\u2019s quirks"),Ve=d(),m=l("p"),St=a("Documentation is still sparse, and SvelteKit is not designed as an "),le=l("abbr"),It=a("SSG"),xt=a(". So at first it was hard to get my head around how it all fits together. Fetching content in templates? Aren\u2019t stores the most logical places for content? But why is it so painful to load async content in stores and fetch it from there? Being forced to put the markdown content inside the "),ve=l("code"),jt=a("routes"),Tt=a(" folder? Do you "),ye=l("em"),At=a("really"),Ot=a(" have to create an endpoint in JSON and then fetch the data from there? And how do I fix that race condition that makes the content disappear after page load?"),Xe=d(),O=l("p"),Pt=a("It\u2019s not that I couldn\u2019t fix the issues, but it all felt too flakey. I thought it\u2019d be a risk to commit to SvelteKit. Then I come across a few useful blog posts, but best of all "),Y=l("a"),Dt=a("Matt Jennings\u2019s excellent SvelteKit blog template"),Nt=a(". He made all the design decisions I would have made, and ironed out all the issues I also encountered. With that I was able to put together a site I was happy with. Thanks Matt!"),Ze=d(),P=l("h2"),D=l("a"),we=l("span"),Ct=a("General ideas for using SvelteKit as a static site generator"),Qe=d(),b=l("p"),Gt=a("The heart of the application is the "),ge=l("code"),Bt=a("routes"),Rt=a(" folder. You organise things by creating files and folders there. "),L=l("a"),Jt=a("Rich Harris also thinks the name \u2018routes\u2019 is confusing"),Kt=a(", but for now it is what it is."),$e=d(),c=l("p"),Mt=a("There are two types of routes: pages and "),U=l("a"),Ht=a("endpoints"),qt=a(". To simplify, pages are exactly what they sound like, they get translated into URLs a user can see. Endpoints do \u201Cbackend stuff\u201D. You can tell them apart because endpoints end with "),be=l("code"),Yt=a(".js"),Lt=a(", whereas pages end with "),ke=l("code"),Ut=a(".svelte"),Wt=a(". At least by default; plugins can change that. And in the routes folder you will also find templates; they are also "),Ee=l("code"),zt=a(".svelte"),Ft=a(" files. But their name starts with underscores."),et=d(),ie=l("p"),Vt=a("As for data sources, I find it easier to think of SvelteKit as Wordpress-like rather than Jekyll-like. As in, there is no magical executable that knows everything about my app. Instead there is a queryable data source which you can use for the same purpose. But it\u2019s not a mysql database - it\u2019s an endpoint (or endpoints). And you have to create them yourself."),tt=d(),ne=l("p"),Xt=a("Creating entrypoint(s) is less daunting that it sounds; in the simplest case that would be a 20-30 lines js file. It can use Vite and the mdsvex plugin to collect the frontmatter from all your markdown sources. It can return that list as JSON. But of course entrypoints can get much fancier, the sky\u2019s the limits. Once you have your entrypoint, you then create some reusable utility functions. They would fetch this JSON data and apply some filtering, pagination, or id matching, and so on. Then display the data."),st=d(),re=l("p"),Zt=a("What about svelte stores? They don\u2019t really fit in with the SSG workflow. Use them, if you need them, as a way to share UI state across pages. But I don\u2019t find them so useful for generating the site itself."),at=d(),N=l("h2"),C=l("a"),_e=l("span"),Qt=a("Skeleton SvelteKit static site structure"),ot=d(),W=l("pre"),lt=d(),x=l("p"),Se=l("strong"),$t=a("app.css"),es=a(": I was converting an existing site, so I just took the generated css and pasted it in "),Ie=l("code"),ts=a("/app.css"),ss=a(". Obviously not the most flexible way to handle it. But this version of the site is in end of life, I don\u2019t need to maintain it or amend it. This file is imported as is in the main template"),it=d(),v=l("p"),xe=l("strong"),as=a("app.html"),os=a(": The container HTML for all the pages in the site. It has the "),je=l("code"),ls=a("<head>"),is=a(" and "),Te=l("code"),ns=a("<body>"),rs=a(" tag. You can push stuff into this from svelte files by wrapping them in "),Ae=l("code"),hs=a("<svelte:head>"),nt=d(),z=l("p"),Oe=l("strong"),fs=a("lib/components/"),ds=a(": holds straightforward Svelte components. Nothing SSG specific."),rt=d(),G=l("p"),Pe=l("strong"),ps=a("lib/get-posts.js, etc"),us=a(": These are utility functions used everywhere else in the site. They interact with the data from "),De=l("code"),cs=a("/api/posts.json"),ht=d(),j=l("p"),Ne=l("strong"),ms=a("routes/__layout.svelte"),vs=a(": Svelte default layout. It will sit between the main "),Ce=l("code"),ys=a("app.html"),ws=a(" and the main content being rendered. In my case it has the header and footer."),ft=d(),B=l("p"),Ge=l("strong"),gs=a("routes/api/posts.json.js"),bs=a(": This is the main entrypoint, the \u201Cdatabase\u201D which powers everything. You can see "),F=l("a"),ks=a("the json it returns here"),dt=d(),y=l("p"),Be=l("strong"),Es=a("routes/blog/[slug].svelte, index.svelte"),_s=a(" They are \u2018pages\u2019 in the website, like the one you are reading. They use "),Re=l("code"),Ss=a("lib/get-posts.js"),Is=a(" etc to fetch data from "),Je=l("code"),xs=a("/api/posts.json"),js=a(", and then inject it into the various svelte componenents"),pt=d(),u=l("p"),Ke=l("strong"),Ts=a("routes/feed.xml.js, sitemap.xml.js"),As=a(": They are both endpoints which produce XML files with file lists. They also use "),Me=l("code"),Os=a("lib/get-posts.js"),Ps=a(" etc to fetch data from "),He=l("code"),Ds=a("/api/posts.json"),Ns=a(". "),V=l("a"),Cs=a("feed.xml"),Gs=a(" is for RSS readers, "),X=l("a"),Bs=a("sitemap.xml"),Rs=a(" is for search engines."),ut=d(),T=l("p"),qe=l("strong"),Js=a("routes/tag/[tag].svelte, index.svelte"),Ks=a(" Some idea as the blog \u2018pages\u2019 - except that the query used to fetch the data from "),Ye=l("code"),Ms=a("/api/posts.json"),Hs=a(" is slightly different."),ct=d(),R=l("h3"),J=l("a"),Le=l("span"),qs=a("Relatively happy"),mt=d(),k=l("p"),Ys=a("Once I understood the main idea and stopped wasting time with stores development was relatively easy. Particularly as I had "),Z=l("a"),Ls=a("Matt Jennings\u2019s excellent SvelteKit blog template"),Us=a(" to fall back on when I got stuck. It\u2019s definitively a huge improvement on what I had before. I still reserve the right to move to "),he=l("a"),Ws=a("Astro"),zs=a(" though."),vt=d(),K=l("h3"),M=l("a"),Ue=l("span"),Fs=a("Prior art"),yt=d(),E=l("p"),Vs=a("I started following "),Q=l("a"),Xs=a("Josh Collinsworth"),Zs=a(` blog post to get started.
`),$=l("a"),Qs=a("David Parker"),$s=a("\u2019s post was also useful."),wt=d(),_=l("p"),ea=a("I then stumgled upon "),ee=l("a"),ta=a("Matt Jennings"),sa=a(" and "),te=l("a"),aa=a("Scott Spence"),oa=a("\u2019s posts, both of which were also super useful."),gt=d(),S=l("p"),la=a("Some information was gleaned from "),se=l("a"),ia=a("mdsvex repo"),na=a(" and of course the "),ae=l("a"),ra=a("sveltekit repo"),ha=a(" and issue"),this.h()},l(e){g=i(e,"H2",{id:!0});var r=n(g);A=i(r,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var va=n(A);me=i(va,"SPAN",{class:!0}),n(me).forEach(s),va.forEach(s),_t=o(r,"Getting used to SvelteKit\u2019s and Vite\u2019s quirks"),r.forEach(s),Ve=p(e),m=i(e,"P",{});var H=n(m);St=o(H,"Documentation is still sparse, and SvelteKit is not designed as an "),le=i(H,"ABBR",{title:!0});var ya=n(le);It=o(ya,"SSG"),ya.forEach(s),xt=o(H,". So at first it was hard to get my head around how it all fits together. Fetching content in templates? Aren\u2019t stores the most logical places for content? But why is it so painful to load async content in stores and fetch it from there? Being forced to put the markdown content inside the "),ve=i(H,"CODE",{});var wa=n(ve);jt=o(wa,"routes"),wa.forEach(s),Tt=o(H," folder? Do you "),ye=i(H,"EM",{});var ga=n(ye);At=o(ga,"really"),ga.forEach(s),Ot=o(H," have to create an endpoint in JSON and then fetch the data from there? And how do I fix that race condition that makes the content disappear after page load?"),H.forEach(s),Xe=p(e),O=i(e,"P",{});var bt=n(O);Pt=o(bt,"It\u2019s not that I couldn\u2019t fix the issues, but it all felt too flakey. I thought it\u2019d be a risk to commit to SvelteKit. Then I come across a few useful blog posts, but best of all "),Y=i(bt,"A",{href:!0,rel:!0});var ba=n(Y);Dt=o(ba,"Matt Jennings\u2019s excellent SvelteKit blog template"),ba.forEach(s),Nt=o(bt,". He made all the design decisions I would have made, and ironed out all the issues I also encountered. With that I was able to put together a site I was happy with. Thanks Matt!"),bt.forEach(s),Ze=p(e),P=i(e,"H2",{id:!0});var fa=n(P);D=i(fa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ka=n(D);we=i(ka,"SPAN",{class:!0}),n(we).forEach(s),ka.forEach(s),Ct=o(fa,"General ideas for using SvelteKit as a static site generator"),fa.forEach(s),Qe=p(e),b=i(e,"P",{});var fe=n(b);Gt=o(fe,"The heart of the application is the "),ge=i(fe,"CODE",{});var Ea=n(ge);Bt=o(Ea,"routes"),Ea.forEach(s),Rt=o(fe," folder. You organise things by creating files and folders there. "),L=i(fe,"A",{href:!0,rel:!0});var _a=n(L);Jt=o(_a,"Rich Harris also thinks the name \u2018routes\u2019 is confusing"),_a.forEach(s),Kt=o(fe,", but for now it is what it is."),fe.forEach(s),$e=p(e),c=i(e,"P",{});var I=n(c);Mt=o(I,"There are two types of routes: pages and "),U=i(I,"A",{href:!0,rel:!0});var Sa=n(U);Ht=o(Sa,"endpoints"),Sa.forEach(s),qt=o(I,". To simplify, pages are exactly what they sound like, they get translated into URLs a user can see. Endpoints do \u201Cbackend stuff\u201D. You can tell them apart because endpoints end with "),be=i(I,"CODE",{});var Ia=n(be);Yt=o(Ia,".js"),Ia.forEach(s),Lt=o(I,", whereas pages end with "),ke=i(I,"CODE",{});var xa=n(ke);Ut=o(xa,".svelte"),xa.forEach(s),Wt=o(I,". At least by default; plugins can change that. And in the routes folder you will also find templates; they are also "),Ee=i(I,"CODE",{});var ja=n(Ee);zt=o(ja,".svelte"),ja.forEach(s),Ft=o(I," files. But their name starts with underscores."),I.forEach(s),et=p(e),ie=i(e,"P",{});var Ta=n(ie);Vt=o(Ta,"As for data sources, I find it easier to think of SvelteKit as Wordpress-like rather than Jekyll-like. As in, there is no magical executable that knows everything about my app. Instead there is a queryable data source which you can use for the same purpose. But it\u2019s not a mysql database - it\u2019s an endpoint (or endpoints). And you have to create them yourself."),Ta.forEach(s),tt=p(e),ne=i(e,"P",{});var Aa=n(ne);Xt=o(Aa,"Creating entrypoint(s) is less daunting that it sounds; in the simplest case that would be a 20-30 lines js file. It can use Vite and the mdsvex plugin to collect the frontmatter from all your markdown sources. It can return that list as JSON. But of course entrypoints can get much fancier, the sky\u2019s the limits. Once you have your entrypoint, you then create some reusable utility functions. They would fetch this JSON data and apply some filtering, pagination, or id matching, and so on. Then display the data."),Aa.forEach(s),st=p(e),re=i(e,"P",{});var Oa=n(re);Zt=o(Oa,"What about svelte stores? They don\u2019t really fit in with the SSG workflow. Use them, if you need them, as a way to share UI state across pages. But I don\u2019t find them so useful for generating the site itself."),Oa.forEach(s),at=p(e),N=i(e,"H2",{id:!0});var da=n(N);C=i(da,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Pa=n(C);_e=i(Pa,"SPAN",{class:!0}),n(_e).forEach(s),Pa.forEach(s),Qt=o(da,"Skeleton SvelteKit static site structure"),da.forEach(s),ot=p(e),W=i(e,"PRE",{class:!0});var co=n(W);co.forEach(s),lt=p(e),x=i(e,"P",{});var We=n(x);Se=i(We,"STRONG",{});var Da=n(Se);$t=o(Da,"app.css"),Da.forEach(s),es=o(We,": I was converting an existing site, so I just took the generated css and pasted it in "),Ie=i(We,"CODE",{});var Na=n(Ie);ts=o(Na,"/app.css"),Na.forEach(s),ss=o(We,". Obviously not the most flexible way to handle it. But this version of the site is in end of life, I don\u2019t need to maintain it or amend it. This file is imported as is in the main template"),We.forEach(s),it=p(e),v=i(e,"P",{});var q=n(v);xe=i(q,"STRONG",{});var Ca=n(xe);as=o(Ca,"app.html"),Ca.forEach(s),os=o(q,": The container HTML for all the pages in the site. It has the "),je=i(q,"CODE",{});var Ga=n(je);ls=o(Ga,"<head>"),Ga.forEach(s),is=o(q," and "),Te=i(q,"CODE",{});var Ba=n(Te);ns=o(Ba,"<body>"),Ba.forEach(s),rs=o(q," tag. You can push stuff into this from svelte files by wrapping them in "),Ae=i(q,"CODE",{});var Ra=n(Ae);hs=o(Ra,"<svelte:head>"),Ra.forEach(s),q.forEach(s),nt=p(e),z=i(e,"P",{});var pa=n(z);Oe=i(pa,"STRONG",{});var Ja=n(Oe);fs=o(Ja,"lib/components/"),Ja.forEach(s),ds=o(pa,": holds straightforward Svelte components. Nothing SSG specific."),pa.forEach(s),rt=p(e),G=i(e,"P",{});var kt=n(G);Pe=i(kt,"STRONG",{});var Ka=n(Pe);ps=o(Ka,"lib/get-posts.js, etc"),Ka.forEach(s),us=o(kt,": These are utility functions used everywhere else in the site. They interact with the data from "),De=i(kt,"CODE",{});var Ma=n(De);cs=o(Ma,"/api/posts.json"),Ma.forEach(s),kt.forEach(s),ht=p(e),j=i(e,"P",{});var ze=n(j);Ne=i(ze,"STRONG",{});var Ha=n(Ne);ms=o(Ha,"routes/__layout.svelte"),Ha.forEach(s),vs=o(ze,": Svelte default layout. It will sit between the main "),Ce=i(ze,"CODE",{});var qa=n(Ce);ys=o(qa,"app.html"),qa.forEach(s),ws=o(ze," and the main content being rendered. In my case it has the header and footer."),ze.forEach(s),ft=p(e),B=i(e,"P",{});var Et=n(B);Ge=i(Et,"STRONG",{});var Ya=n(Ge);gs=o(Ya,"routes/api/posts.json.js"),Ya.forEach(s),bs=o(Et,": This is the main entrypoint, the \u201Cdatabase\u201D which powers everything. You can see "),F=i(Et,"A",{href:!0,rel:!0});var La=n(F);ks=o(La,"the json it returns here"),La.forEach(s),Et.forEach(s),dt=p(e),y=i(e,"P",{});var oe=n(y);Be=i(oe,"STRONG",{});var Ua=n(Be);Es=o(Ua,"routes/blog/[slug].svelte, index.svelte"),Ua.forEach(s),_s=o(oe," They are \u2018pages\u2019 in the website, like the one you are reading. They use "),Re=i(oe,"CODE",{});var Wa=n(Re);Ss=o(Wa,"lib/get-posts.js"),Wa.forEach(s),Is=o(oe," etc to fetch data from "),Je=i(oe,"CODE",{});var za=n(Je);xs=o(za,"/api/posts.json"),za.forEach(s),js=o(oe,", and then inject it into the various svelte componenents"),oe.forEach(s),pt=p(e),u=i(e,"P",{});var w=n(u);Ke=i(w,"STRONG",{});var Fa=n(Ke);Ts=o(Fa,"routes/feed.xml.js, sitemap.xml.js"),Fa.forEach(s),As=o(w,": They are both endpoints which produce XML files with file lists. They also use "),Me=i(w,"CODE",{});var Va=n(Me);Os=o(Va,"lib/get-posts.js"),Va.forEach(s),Ps=o(w," etc to fetch data from "),He=i(w,"CODE",{});var Xa=n(He);Ds=o(Xa,"/api/posts.json"),Xa.forEach(s),Ns=o(w,". "),V=i(w,"A",{href:!0,rel:!0});var Za=n(V);Cs=o(Za,"feed.xml"),Za.forEach(s),Gs=o(w," is for RSS readers, "),X=i(w,"A",{href:!0,rel:!0});var Qa=n(X);Bs=o(Qa,"sitemap.xml"),Qa.forEach(s),Rs=o(w," is for search engines."),w.forEach(s),ut=p(e),T=i(e,"P",{});var Fe=n(T);qe=i(Fe,"STRONG",{});var $a=n(qe);Js=o($a,"routes/tag/[tag].svelte, index.svelte"),$a.forEach(s),Ks=o(Fe," Some idea as the blog \u2018pages\u2019 - except that the query used to fetch the data from "),Ye=i(Fe,"CODE",{});var eo=n(Ye);Ms=o(eo,"/api/posts.json"),eo.forEach(s),Hs=o(Fe," is slightly different."),Fe.forEach(s),ct=p(e),R=i(e,"H3",{id:!0});var ua=n(R);J=i(ua,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var to=n(J);Le=i(to,"SPAN",{class:!0}),n(Le).forEach(s),to.forEach(s),qs=o(ua,"Relatively happy"),ua.forEach(s),mt=p(e),k=i(e,"P",{});var de=n(k);Ys=o(de,"Once I understood the main idea and stopped wasting time with stores development was relatively easy. Particularly as I had "),Z=i(de,"A",{href:!0,rel:!0});var so=n(Z);Ls=o(so,"Matt Jennings\u2019s excellent SvelteKit blog template"),so.forEach(s),Us=o(de," to fall back on when I got stuck. It\u2019s definitively a huge improvement on what I had before. I still reserve the right to move to "),he=i(de,"A",{href:!0});var ao=n(he);Ws=o(ao,"Astro"),ao.forEach(s),zs=o(de," though."),de.forEach(s),vt=p(e),K=i(e,"H3",{id:!0});var ca=n(K);M=i(ca,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var oo=n(M);Ue=i(oo,"SPAN",{class:!0}),n(Ue).forEach(s),oo.forEach(s),Fs=o(ca,"Prior art"),ca.forEach(s),yt=p(e),E=i(e,"P",{});var pe=n(E);Vs=o(pe,"I started following "),Q=i(pe,"A",{href:!0,rel:!0});var lo=n(Q);Xs=o(lo,"Josh Collinsworth"),lo.forEach(s),Zs=o(pe,` blog post to get started.
`),$=i(pe,"A",{href:!0,rel:!0});var io=n($);Qs=o(io,"David Parker"),io.forEach(s),$s=o(pe,"\u2019s post was also useful."),pe.forEach(s),wt=p(e),_=i(e,"P",{});var ue=n(_);ea=o(ue,"I then stumgled upon "),ee=i(ue,"A",{href:!0,rel:!0});var no=n(ee);ta=o(no,"Matt Jennings"),no.forEach(s),sa=o(ue," and "),te=i(ue,"A",{href:!0,rel:!0});var ro=n(te);aa=o(ro,"Scott Spence"),ro.forEach(s),oa=o(ue,"\u2019s posts, both of which were also super useful."),ue.forEach(s),gt=p(e),S=i(e,"P",{});var ce=n(S);la=o(ce,"Some information was gleaned from "),se=i(ce,"A",{href:!0,rel:!0});var ho=n(se);ia=o(ho,"mdsvex repo"),ho.forEach(s),na=o(ce," and of course the "),ae=i(ce,"A",{href:!0,rel:!0});var fo=n(ae);ra=o(fo,"sveltekit repo"),fo.forEach(s),ha=o(ce," and issue"),ce.forEach(s),this.h()},h(){h(me,"class","icon icon-link"),h(A,"aria-hidden","true"),h(A,"tabindex","-1"),h(A,"href","#getting-used-to-sveltekits-and-vites-quirks"),h(g,"id","getting-used-to-sveltekits-and-vites-quirks"),h(le,"title","Static Site Generator"),h(Y,"href","https://github.com/mattjennings/sveltekit-blog-template"),h(Y,"rel","nofollow"),h(we,"class","icon icon-link"),h(D,"aria-hidden","true"),h(D,"tabindex","-1"),h(D,"href","#general-ideas-for-using-sveltekit-as-a-static-site-generator"),h(P,"id","general-ideas-for-using-sveltekit-as-a-static-site-generator"),h(L,"href","https://github.com/sveltejs/kit/issues/3021"),h(L,"rel","nofollow"),h(U,"href","https://kit.svelte.dev/docs/routing#endpoints"),h(U,"rel","nofollow"),h(_e,"class","icon icon-link"),h(C,"aria-hidden","true"),h(C,"tabindex","-1"),h(C,"href","#skeleton-sveltekit-static-site-structure"),h(N,"id","skeleton-sveltekit-static-site-structure"),h(W,"class","language-bash"),h(F,"href","https://gotofritz.net/api/posts.json"),h(F,"rel","nofollow"),h(V,"href","https://gotofritz.net/feed.xml"),h(V,"rel","nofollow"),h(X,"href","https://gotofritz.net/sitemap.xml"),h(X,"rel","nofollow"),h(Le,"class","icon icon-link"),h(J,"aria-hidden","true"),h(J,"tabindex","-1"),h(J,"href","#relatively-happy"),h(R,"id","relatively-happy"),h(Z,"href","https://github.com/mattjennings/sveltekit-blog-template"),h(Z,"rel","nofollow"),h(he,"href","https://astro.build/"),h(Ue,"class","icon icon-link"),h(M,"aria-hidden","true"),h(M,"tabindex","-1"),h(M,"href","#prior-art"),h(K,"id","prior-art"),h(Q,"href","https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog"),h(Q,"rel","nofollow"),h($,"href","https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit"),h($,"rel","nofollow"),h(ee,"href","https://mattjennings.io/blog/rewriting-my-website-in-sveltekit"),h(ee,"rel","nofollow"),h(te,"href","https://scottspence.com/posts/make-an-rss-feed-with-sveltekit"),h(te,"rel","nofollow"),h(se,"href","https://mdsvex.pngwn.io/docs#use-it"),h(se,"rel","nofollow"),h(ae,"href","https://kit.svelte.dev/"),h(ae,"rel","nofollow")},m(e,r){f(e,g,r),t(g,A),t(A,me),t(g,_t),f(e,Ve,r),f(e,m,r),t(m,St),t(m,le),t(le,It),t(m,xt),t(m,ve),t(ve,jt),t(m,Tt),t(m,ye),t(ye,At),t(m,Ot),f(e,Xe,r),f(e,O,r),t(O,Pt),t(O,Y),t(Y,Dt),t(O,Nt),f(e,Ze,r),f(e,P,r),t(P,D),t(D,we),t(P,Ct),f(e,Qe,r),f(e,b,r),t(b,Gt),t(b,ge),t(ge,Bt),t(b,Rt),t(b,L),t(L,Jt),t(b,Kt),f(e,$e,r),f(e,c,r),t(c,Mt),t(c,U),t(U,Ht),t(c,qt),t(c,be),t(be,Yt),t(c,Lt),t(c,ke),t(ke,Ut),t(c,Wt),t(c,Ee),t(Ee,zt),t(c,Ft),f(e,et,r),f(e,ie,r),t(ie,Vt),f(e,tt,r),f(e,ne,r),t(ne,Xt),f(e,st,r),f(e,re,r),t(re,Zt),f(e,at,r),f(e,N,r),t(N,C),t(C,_e),t(N,Qt),f(e,ot,r),f(e,W,r),W.innerHTML=uo,f(e,lt,r),f(e,x,r),t(x,Se),t(Se,$t),t(x,es),t(x,Ie),t(Ie,ts),t(x,ss),f(e,it,r),f(e,v,r),t(v,xe),t(xe,as),t(v,os),t(v,je),t(je,ls),t(v,is),t(v,Te),t(Te,ns),t(v,rs),t(v,Ae),t(Ae,hs),f(e,nt,r),f(e,z,r),t(z,Oe),t(Oe,fs),t(z,ds),f(e,rt,r),f(e,G,r),t(G,Pe),t(Pe,ps),t(G,us),t(G,De),t(De,cs),f(e,ht,r),f(e,j,r),t(j,Ne),t(Ne,ms),t(j,vs),t(j,Ce),t(Ce,ys),t(j,ws),f(e,ft,r),f(e,B,r),t(B,Ge),t(Ge,gs),t(B,bs),t(B,F),t(F,ks),f(e,dt,r),f(e,y,r),t(y,Be),t(Be,Es),t(y,_s),t(y,Re),t(Re,Ss),t(y,Is),t(y,Je),t(Je,xs),t(y,js),f(e,pt,r),f(e,u,r),t(u,Ke),t(Ke,Ts),t(u,As),t(u,Me),t(Me,Os),t(u,Ps),t(u,He),t(He,Ds),t(u,Ns),t(u,V),t(V,Cs),t(u,Gs),t(u,X),t(X,Bs),t(u,Rs),f(e,ut,r),f(e,T,r),t(T,qe),t(qe,Js),t(T,Ks),t(T,Ye),t(Ye,Ms),t(T,Hs),f(e,ct,r),f(e,R,r),t(R,J),t(J,Le),t(R,qs),f(e,mt,r),f(e,k,r),t(k,Ys),t(k,Z),t(Z,Ls),t(k,Us),t(k,he),t(he,Ws),t(k,zs),f(e,vt,r),f(e,K,r),t(K,M),t(M,Ue),t(K,Fs),f(e,yt,r),f(e,E,r),t(E,Vs),t(E,Q),t(Q,Xs),t(E,Zs),t(E,$),t($,Qs),t(E,$s),f(e,wt,r),f(e,_,r),t(_,ea),t(_,ee),t(ee,ta),t(_,sa),t(_,te),t(te,aa),t(_,oa),f(e,gt,r),f(e,S,r),t(S,la),t(S,se),t(se,ia),t(S,na),t(S,ae),t(ae,ra),t(S,ha)},p:ma,i:ma,o:ma,d(e){e&&s(g),e&&s(Ve),e&&s(m),e&&s(Xe),e&&s(O),e&&s(Ze),e&&s(P),e&&s(Qe),e&&s(b),e&&s($e),e&&s(c),e&&s(et),e&&s(ie),e&&s(tt),e&&s(ne),e&&s(st),e&&s(re),e&&s(at),e&&s(N),e&&s(ot),e&&s(W),e&&s(lt),e&&s(x),e&&s(it),e&&s(v),e&&s(nt),e&&s(z),e&&s(rt),e&&s(G),e&&s(ht),e&&s(j),e&&s(ft),e&&s(B),e&&s(dt),e&&s(y),e&&s(pt),e&&s(u),e&&s(ut),e&&s(T),e&&s(ct),e&&s(R),e&&s(mt),e&&s(k),e&&s(vt),e&&s(K),e&&s(yt),e&&s(E),e&&s(wt),e&&s(_),e&&s(gt),e&&s(S)}}}const bo={date:"2022-04-22T00:00:00.000Z",draft:!1,archived:!1,title:"I rebuilt my website with SvelteKit",permalink:"/blog/blog-with-sveltekit-and-markdown",prev:"reordering-audio-files-in-a-fat-usb-stick",tags:["svelte","gotofritz"],excerpt:'Building a static website with <a href="https://kit.svelte.dev/">Sveltekit</a> and markdown is hard going at first. But just when I was about to give up I stumbled on some blog posts and boilerplates that helped me crack it. I may still switch to <a href="https://astro.build/">Astro</a> later though'};class ko extends mo{constructor(g){super();vo(this,g,null,wo,yo,{})}}export{ko as default,bo as metadata};
