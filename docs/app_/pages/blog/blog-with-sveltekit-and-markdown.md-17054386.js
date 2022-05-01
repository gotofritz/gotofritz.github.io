import{S as oa,i as aa,s as la,D as so,x as na,y as ia,z as ra,A as ha,B as Zo,r as fa,p as pa,C as da,L as Qo,e as l,t as o,k as p,c as n,a as i,h as a,d as s,m as d,b as f,g as h,F as t,n as ua}from"../../chunks/index-889cf753.js";import{P as ca}from"../../chunks/_post-5ef2f492.js";import"../../chunks/Header-15607706.js";function ma(ee){let u,k,E,m,c,y,te,yt,me,wt,gt,ve,bt,_t,Le,C,kt,N,Et,St,Ye,se,It,Ue,S,xt,ye,jt,Tt,J,Ot,At,We,w,Pt,M,Dt,Ct,we,Bt,Gt,ge,Rt,Kt,be,Nt,Jt,ze,oe,Mt,Fe,ae,Ht,Ve,le,qt,Xe,ne,$t,Ze,H,ta=`<code class="language-bash">\u251C\u2500\u2500 app.css
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
        \u2514\u2500\u2500 index.svelte</code>`,Qe,A,_e,Lt,Yt,ke,Ut,Wt,et,g,Ee,zt,Ft,Se,Vt,Xt,Ie,Zt,Qt,xe,es,tt,q,je,ts,ss,st,B,Te,os,as,Oe,ls,ot,P,Ae,ns,is,Pe,rs,hs,at,G,De,fs,ps,$,ds,lt,b,Ce,us,cs,Be,ms,vs,Ge,ys,ws,nt,v,Re,gs,bs,Ke,_s,ks,Ne,Es,Ss,L,Is,xs,Y,js,Ts,it,D,Je,Os,As,Me,Ps,Ds,rt,ie,Cs,ht,I,Bs,U,Gs,Rs,re,Ks,Ns,ft,he,Js,pt,x,Ms,W,Hs,qs,z,$s,Ls,dt,j,Ys,F,Us,Ws,V,zs,Fs,ut,T,Vs,X,Xs,Zs,Z,Qs,eo;return{c(){u=l("h2"),k=o("Getting used to SvelteKit\u2019s and Vite\u2019s quirks"),E=p(),m=l("p"),c=o("Documentation is still sparse, and SvelteKit is not designed as an "),y=l("abbr"),te=o("SSG"),yt=o(". So at first it was hard to get my head around how it all fits together. Fetching content in templates? Aren\u2019t stores the most logical places for content? But why is it so painful to load async content in stores and fetch it from there? Being forced to put the markdown content inside the "),me=l("code"),wt=o("routes"),gt=o(" folder? Do you "),ve=l("em"),bt=o("really"),_t=o(" have to create an endpoint in JSON and then fetch the data from there? And how do I fix that race condition that makes the content disappear after page load?"),Le=p(),C=l("p"),kt=o("It\u2019s not that I couldn\u2019t fix the issues, but it all felt too flakey. I thought it\u2019d be a risk to commit to SvelteKit. Then I come across a few useful blog posts, but best of all "),N=l("a"),Et=o("Matt Jennings\u2019s excellent SvelteKit blog template"),St=o(". He made all the design decisions I would have made, and ironed out all the issues I also encountered. With that I was able to put together a site I was happy with. Thanks Matt!"),Ye=p(),se=l("h2"),It=o("General ideas for using SvelteKit as a static site generator"),Ue=p(),S=l("p"),xt=o("The heart of the application is the "),ye=l("code"),jt=o("routes"),Tt=o(" folder. You organise things by creating files and folders there. "),J=l("a"),Ot=o("Rich Harris also thinks the name \u2018routes\u2019 is confusing"),At=o(", but for now it is what it is."),We=p(),w=l("p"),Pt=o("There are two types of routes: pages and "),M=l("a"),Dt=o("endpoints"),Ct=o(". To simplify, pages are exactly what they sound like, they get translated into URLs a user can see. Endpoints do \u201Cbackend stuff\u201D. You can tell them apart because endpoints end with "),we=l("code"),Bt=o(".js"),Gt=o(", whereas pages end with "),ge=l("code"),Rt=o(".svelte"),Kt=o(". At least by default; plugins can change that. And in the routes folder you will also find templates; they are also "),be=l("code"),Nt=o(".svelte"),Jt=o(" files. But their name starts with underscores."),ze=p(),oe=l("p"),Mt=o("As for data sources, I find it easier to think of SvelteKit as Wordpress-like rather than Jekyll-like. As in, there is no magical executable that knows everything about my app. Instead there is a queryable data source which you can use for the same purpose. But it\u2019s not a mysql database - it\u2019s an endpoint (or endpoints). And you have to create them yourself."),Fe=p(),ae=l("p"),Ht=o("Creating entrypoint(s) is less daunting that it sounds; in the simplest case that would be a 20-30 lines js file. It can use Vite and the mdsvex plugin to collect the frontmatter from all your markdown sources. It can return that list as JSON. But of course entrypoints can get much fancier, the sky\u2019s the limits. Once you have your entrypoint, you then create some reusable utility functions. They would fetch this JSON data and apply some filtering, pagination, or id matching, and so on. Then display the data."),Ve=p(),le=l("p"),qt=o("What about svelte stores? They don\u2019t really fit in with the SSG workflow. Use them, if you need them, as a way to share UI state across pages. But I don\u2019t find them so useful for generating the site itself."),Xe=p(),ne=l("h2"),$t=o("Skeleton SvelteKit static site structure"),Ze=p(),H=l("pre"),Qe=p(),A=l("p"),_e=l("strong"),Lt=o("app.css"),Yt=o(": I was converting an existing site, so I just took the generated css and pasted it in "),ke=l("code"),Ut=o("/app.css"),Wt=o(". Obviously not the most flexible way to handle it. But this version of the site is in end of life, I don\u2019t need to maintain it or amend it. This file is imported as is in the main template"),et=p(),g=l("p"),Ee=l("strong"),zt=o("app.html"),Ft=o(": The container HTML for all the pages in the site. It has the "),Se=l("code"),Vt=o("<head>"),Xt=o(" and "),Ie=l("code"),Zt=o("<body>"),Qt=o(" tag. You can push stuff into this from svelte files by wrapping them in "),xe=l("code"),es=o("<svelte:head>"),tt=p(),q=l("p"),je=l("strong"),ts=o("lib/components/"),ss=o(": holds straightforward Svelte components. Nothing SSG specific."),st=p(),B=l("p"),Te=l("strong"),os=o("lib/get-posts.js, etc"),as=o(": These are utility functions used everywhere else in the site. They interact with the data from "),Oe=l("code"),ls=o("/api/posts.json"),ot=p(),P=l("p"),Ae=l("strong"),ns=o("routes/__layout.svelte"),is=o(": Svelte default layout. It will sit between the main "),Pe=l("code"),rs=o("app.html"),hs=o(" and the main content being rendered. In my case it has the header and footer."),at=p(),G=l("p"),De=l("strong"),fs=o("routes/api/posts.json.js"),ps=o(": This is the main entrypoint, the \u201Cdatabase\u201D which powers everything. You can see "),$=l("a"),ds=o("the json it returns here"),lt=p(),b=l("p"),Ce=l("strong"),us=o("routes/blog/[slug].svelte, index.svelte"),cs=o(" They are \u2018pages\u2019 in the website, like the one you are reading. They use "),Be=l("code"),ms=o("lib/get-posts.js"),vs=o(" etc to fetch data from "),Ge=l("code"),ys=o("/api/posts.json"),ws=o(", and then inject it into the various svelte componenents"),nt=p(),v=l("p"),Re=l("strong"),gs=o("routes/feed.xml.js, sitemap.xml.js"),bs=o(": They are both endpoints which produce XML files with file lists. They also use "),Ke=l("code"),_s=o("lib/get-posts.js"),ks=o(" etc to fetch data from "),Ne=l("code"),Es=o("/api/posts.json"),Ss=o(". "),L=l("a"),Is=o("feed.xml"),xs=o(" is for RSS readers, "),Y=l("a"),js=o("sitemap.xml"),Ts=o(" is for search engines."),it=p(),D=l("p"),Je=l("strong"),Os=o("routes/tag/[tag].svelte, index.svelte"),As=o(" Some idea as the blog \u2018pages\u2019 - except that the query used to fetch the data from "),Me=l("code"),Ps=o("/api/posts.json"),Ds=o(" is slightly different."),rt=p(),ie=l("h3"),Cs=o("Relatively happy"),ht=p(),I=l("p"),Bs=o("Once I understood the main idea and stopped wasting time with stores development was relatively easy. Particularly as I had "),U=l("a"),Gs=o("Matt Jennings\u2019s excellent SvelteKit blog template"),Rs=o(" to fall back on when I got stuck. It\u2019s definitively a huge improvement on what I had before. I still reserve the right to move to "),re=l("a"),Ks=o("Astro"),Ns=o(" though."),ft=p(),he=l("h3"),Js=o("Prior art"),pt=p(),x=l("p"),Ms=o("I started following "),W=l("a"),Hs=o("Josh Collinsworth"),qs=o(` blog post to get started.
`),z=l("a"),$s=o("David Parker"),Ls=o("\u2019s post was also useful."),dt=p(),j=l("p"),Ys=o("I then stumgled upon "),F=l("a"),Us=o("Matt Jennings"),Ws=o(" and "),V=l("a"),zs=o("Scott Spence"),Fs=o("\u2019s posts, both of which were also super useful."),ut=p(),T=l("p"),Vs=o("Some information was gleaned from "),X=l("a"),Xs=o("mdsvex repo"),Zs=o(" and of course the "),Z=l("a"),Qs=o("sveltekit repo"),eo=o(" and issue"),this.h()},l(e){u=n(e,"H2",{});var r=i(u);k=a(r,"Getting used to SvelteKit\u2019s and Vite\u2019s quirks"),r.forEach(s),E=d(e),m=n(e,"P",{});var R=i(m);c=a(R,"Documentation is still sparse, and SvelteKit is not designed as an "),y=n(R,"ABBR",{title:!0});var oo=i(y);te=a(oo,"SSG"),oo.forEach(s),yt=a(R,". So at first it was hard to get my head around how it all fits together. Fetching content in templates? Aren\u2019t stores the most logical places for content? But why is it so painful to load async content in stores and fetch it from there? Being forced to put the markdown content inside the "),me=n(R,"CODE",{});var ao=i(me);wt=a(ao,"routes"),ao.forEach(s),gt=a(R," folder? Do you "),ve=n(R,"EM",{});var lo=i(ve);bt=a(lo,"really"),lo.forEach(s),_t=a(R," have to create an endpoint in JSON and then fetch the data from there? And how do I fix that race condition that makes the content disappear after page load?"),R.forEach(s),Le=d(e),C=n(e,"P",{});var ct=i(C);kt=a(ct,"It\u2019s not that I couldn\u2019t fix the issues, but it all felt too flakey. I thought it\u2019d be a risk to commit to SvelteKit. Then I come across a few useful blog posts, but best of all "),N=n(ct,"A",{href:!0,rel:!0});var no=i(N);Et=a(no,"Matt Jennings\u2019s excellent SvelteKit blog template"),no.forEach(s),St=a(ct,". He made all the design decisions I would have made, and ironed out all the issues I also encountered. With that I was able to put together a site I was happy with. Thanks Matt!"),ct.forEach(s),Ye=d(e),se=n(e,"H2",{});var io=i(se);It=a(io,"General ideas for using SvelteKit as a static site generator"),io.forEach(s),Ue=d(e),S=n(e,"P",{});var fe=i(S);xt=a(fe,"The heart of the application is the "),ye=n(fe,"CODE",{});var ro=i(ye);jt=a(ro,"routes"),ro.forEach(s),Tt=a(fe," folder. You organise things by creating files and folders there. "),J=n(fe,"A",{href:!0,rel:!0});var ho=i(J);Ot=a(ho,"Rich Harris also thinks the name \u2018routes\u2019 is confusing"),ho.forEach(s),At=a(fe,", but for now it is what it is."),fe.forEach(s),We=d(e),w=n(e,"P",{});var O=i(w);Pt=a(O,"There are two types of routes: pages and "),M=n(O,"A",{href:!0,rel:!0});var fo=i(M);Dt=a(fo,"endpoints"),fo.forEach(s),Ct=a(O,". To simplify, pages are exactly what they sound like, they get translated into URLs a user can see. Endpoints do \u201Cbackend stuff\u201D. You can tell them apart because endpoints end with "),we=n(O,"CODE",{});var po=i(we);Bt=a(po,".js"),po.forEach(s),Gt=a(O,", whereas pages end with "),ge=n(O,"CODE",{});var uo=i(ge);Rt=a(uo,".svelte"),uo.forEach(s),Kt=a(O,". At least by default; plugins can change that. And in the routes folder you will also find templates; they are also "),be=n(O,"CODE",{});var co=i(be);Nt=a(co,".svelte"),co.forEach(s),Jt=a(O," files. But their name starts with underscores."),O.forEach(s),ze=d(e),oe=n(e,"P",{});var mo=i(oe);Mt=a(mo,"As for data sources, I find it easier to think of SvelteKit as Wordpress-like rather than Jekyll-like. As in, there is no magical executable that knows everything about my app. Instead there is a queryable data source which you can use for the same purpose. But it\u2019s not a mysql database - it\u2019s an endpoint (or endpoints). And you have to create them yourself."),mo.forEach(s),Fe=d(e),ae=n(e,"P",{});var vo=i(ae);Ht=a(vo,"Creating entrypoint(s) is less daunting that it sounds; in the simplest case that would be a 20-30 lines js file. It can use Vite and the mdsvex plugin to collect the frontmatter from all your markdown sources. It can return that list as JSON. But of course entrypoints can get much fancier, the sky\u2019s the limits. Once you have your entrypoint, you then create some reusable utility functions. They would fetch this JSON data and apply some filtering, pagination, or id matching, and so on. Then display the data."),vo.forEach(s),Ve=d(e),le=n(e,"P",{});var yo=i(le);qt=a(yo,"What about svelte stores? They don\u2019t really fit in with the SSG workflow. Use them, if you need them, as a way to share UI state across pages. But I don\u2019t find them so useful for generating the site itself."),yo.forEach(s),Xe=d(e),ne=n(e,"H2",{});var wo=i(ne);$t=a(wo,"Skeleton SvelteKit static site structure"),wo.forEach(s),Ze=d(e),H=n(e,"PRE",{class:!0});var sa=i(H);sa.forEach(s),Qe=d(e),A=n(e,"P",{});var He=i(A);_e=n(He,"STRONG",{});var go=i(_e);Lt=a(go,"app.css"),go.forEach(s),Yt=a(He,": I was converting an existing site, so I just took the generated css and pasted it in "),ke=n(He,"CODE",{});var bo=i(ke);Ut=a(bo,"/app.css"),bo.forEach(s),Wt=a(He,". Obviously not the most flexible way to handle it. But this version of the site is in end of life, I don\u2019t need to maintain it or amend it. This file is imported as is in the main template"),He.forEach(s),et=d(e),g=n(e,"P",{});var K=i(g);Ee=n(K,"STRONG",{});var _o=i(Ee);zt=a(_o,"app.html"),_o.forEach(s),Ft=a(K,": The container HTML for all the pages in the site. It has the "),Se=n(K,"CODE",{});var ko=i(Se);Vt=a(ko,"<head>"),ko.forEach(s),Xt=a(K," and "),Ie=n(K,"CODE",{});var Eo=i(Ie);Zt=a(Eo,"<body>"),Eo.forEach(s),Qt=a(K," tag. You can push stuff into this from svelte files by wrapping them in "),xe=n(K,"CODE",{});var So=i(xe);es=a(So,"<svelte:head>"),So.forEach(s),K.forEach(s),tt=d(e),q=n(e,"P",{});var to=i(q);je=n(to,"STRONG",{});var Io=i(je);ts=a(Io,"lib/components/"),Io.forEach(s),ss=a(to,": holds straightforward Svelte components. Nothing SSG specific."),to.forEach(s),st=d(e),B=n(e,"P",{});var mt=i(B);Te=n(mt,"STRONG",{});var xo=i(Te);os=a(xo,"lib/get-posts.js, etc"),xo.forEach(s),as=a(mt,": These are utility functions used everywhere else in the site. They interact with the data from "),Oe=n(mt,"CODE",{});var jo=i(Oe);ls=a(jo,"/api/posts.json"),jo.forEach(s),mt.forEach(s),ot=d(e),P=n(e,"P",{});var qe=i(P);Ae=n(qe,"STRONG",{});var To=i(Ae);ns=a(To,"routes/__layout.svelte"),To.forEach(s),is=a(qe,": Svelte default layout. It will sit between the main "),Pe=n(qe,"CODE",{});var Oo=i(Pe);rs=a(Oo,"app.html"),Oo.forEach(s),hs=a(qe," and the main content being rendered. In my case it has the header and footer."),qe.forEach(s),at=d(e),G=n(e,"P",{});var vt=i(G);De=n(vt,"STRONG",{});var Ao=i(De);fs=a(Ao,"routes/api/posts.json.js"),Ao.forEach(s),ps=a(vt,": This is the main entrypoint, the \u201Cdatabase\u201D which powers everything. You can see "),$=n(vt,"A",{href:!0,rel:!0});var Po=i($);ds=a(Po,"the json it returns here"),Po.forEach(s),vt.forEach(s),lt=d(e),b=n(e,"P",{});var Q=i(b);Ce=n(Q,"STRONG",{});var Do=i(Ce);us=a(Do,"routes/blog/[slug].svelte, index.svelte"),Do.forEach(s),cs=a(Q," They are \u2018pages\u2019 in the website, like the one you are reading. They use "),Be=n(Q,"CODE",{});var Co=i(Be);ms=a(Co,"lib/get-posts.js"),Co.forEach(s),vs=a(Q," etc to fetch data from "),Ge=n(Q,"CODE",{});var Bo=i(Ge);ys=a(Bo,"/api/posts.json"),Bo.forEach(s),ws=a(Q,", and then inject it into the various svelte componenents"),Q.forEach(s),nt=d(e),v=n(e,"P",{});var _=i(v);Re=n(_,"STRONG",{});var Go=i(Re);gs=a(Go,"routes/feed.xml.js, sitemap.xml.js"),Go.forEach(s),bs=a(_,": They are both endpoints which produce XML files with file lists. They also use "),Ke=n(_,"CODE",{});var Ro=i(Ke);_s=a(Ro,"lib/get-posts.js"),Ro.forEach(s),ks=a(_," etc to fetch data from "),Ne=n(_,"CODE",{});var Ko=i(Ne);Es=a(Ko,"/api/posts.json"),Ko.forEach(s),Ss=a(_,". "),L=n(_,"A",{href:!0,rel:!0});var No=i(L);Is=a(No,"feed.xml"),No.forEach(s),xs=a(_," is for RSS readers, "),Y=n(_,"A",{href:!0,rel:!0});var Jo=i(Y);js=a(Jo,"sitemap.xml"),Jo.forEach(s),Ts=a(_," is for search engines."),_.forEach(s),it=d(e),D=n(e,"P",{});var $e=i(D);Je=n($e,"STRONG",{});var Mo=i(Je);Os=a(Mo,"routes/tag/[tag].svelte, index.svelte"),Mo.forEach(s),As=a($e," Some idea as the blog \u2018pages\u2019 - except that the query used to fetch the data from "),Me=n($e,"CODE",{});var Ho=i(Me);Ps=a(Ho,"/api/posts.json"),Ho.forEach(s),Ds=a($e," is slightly different."),$e.forEach(s),rt=d(e),ie=n(e,"H3",{});var qo=i(ie);Cs=a(qo,"Relatively happy"),qo.forEach(s),ht=d(e),I=n(e,"P",{});var pe=i(I);Bs=a(pe,"Once I understood the main idea and stopped wasting time with stores development was relatively easy. Particularly as I had "),U=n(pe,"A",{href:!0,rel:!0});var $o=i(U);Gs=a($o,"Matt Jennings\u2019s excellent SvelteKit blog template"),$o.forEach(s),Rs=a(pe," to fall back on when I got stuck. It\u2019s definitively a huge improvement on what I had before. I still reserve the right to move to "),re=n(pe,"A",{href:!0});var Lo=i(re);Ks=a(Lo,"Astro"),Lo.forEach(s),Ns=a(pe," though."),pe.forEach(s),ft=d(e),he=n(e,"H3",{});var Yo=i(he);Js=a(Yo,"Prior art"),Yo.forEach(s),pt=d(e),x=n(e,"P",{});var de=i(x);Ms=a(de,"I started following "),W=n(de,"A",{href:!0,rel:!0});var Uo=i(W);Hs=a(Uo,"Josh Collinsworth"),Uo.forEach(s),qs=a(de,` blog post to get started.
`),z=n(de,"A",{href:!0,rel:!0});var Wo=i(z);$s=a(Wo,"David Parker"),Wo.forEach(s),Ls=a(de,"\u2019s post was also useful."),de.forEach(s),dt=d(e),j=n(e,"P",{});var ue=i(j);Ys=a(ue,"I then stumgled upon "),F=n(ue,"A",{href:!0,rel:!0});var zo=i(F);Us=a(zo,"Matt Jennings"),zo.forEach(s),Ws=a(ue," and "),V=n(ue,"A",{href:!0,rel:!0});var Fo=i(V);zs=a(Fo,"Scott Spence"),Fo.forEach(s),Fs=a(ue,"\u2019s posts, both of which were also super useful."),ue.forEach(s),ut=d(e),T=n(e,"P",{});var ce=i(T);Vs=a(ce,"Some information was gleaned from "),X=n(ce,"A",{href:!0,rel:!0});var Vo=i(X);Xs=a(Vo,"mdsvex repo"),Vo.forEach(s),Zs=a(ce," and of course the "),Z=n(ce,"A",{href:!0,rel:!0});var Xo=i(Z);Qs=a(Xo,"sveltekit repo"),Xo.forEach(s),eo=a(ce," and issue"),ce.forEach(s),this.h()},h(){f(y,"title","Static Site Generator"),f(N,"href","https://github.com/mattjennings/sveltekit-blog-template"),f(N,"rel","nofollow"),f(J,"href","https://github.com/sveltejs/kit/issues/3021"),f(J,"rel","nofollow"),f(M,"href","https://kit.svelte.dev/docs/routing#endpoints"),f(M,"rel","nofollow"),f(H,"class","language-bash"),f($,"href","https://gotofritz.net/api/posts.json"),f($,"rel","nofollow"),f(L,"href","https://gotofritz.net/feed.xml"),f(L,"rel","nofollow"),f(Y,"href","https://gotofritz.net/sitemap.xml"),f(Y,"rel","nofollow"),f(U,"href","https://github.com/mattjennings/sveltekit-blog-template"),f(U,"rel","nofollow"),f(re,"href","https://astro.build/"),f(W,"href","https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog"),f(W,"rel","nofollow"),f(z,"href","https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit"),f(z,"rel","nofollow"),f(F,"href","https://mattjennings.io/blog/rewriting-my-website-in-sveltekit"),f(F,"rel","nofollow"),f(V,"href","https://scottspence.com/posts/make-an-rss-feed-with-sveltekit"),f(V,"rel","nofollow"),f(X,"href","https://mdsvex.pngwn.io/docs#use-it"),f(X,"rel","nofollow"),f(Z,"href","https://kit.svelte.dev/"),f(Z,"rel","nofollow")},m(e,r){h(e,u,r),t(u,k),h(e,E,r),h(e,m,r),t(m,c),t(m,y),t(y,te),t(m,yt),t(m,me),t(me,wt),t(m,gt),t(m,ve),t(ve,bt),t(m,_t),h(e,Le,r),h(e,C,r),t(C,kt),t(C,N),t(N,Et),t(C,St),h(e,Ye,r),h(e,se,r),t(se,It),h(e,Ue,r),h(e,S,r),t(S,xt),t(S,ye),t(ye,jt),t(S,Tt),t(S,J),t(J,Ot),t(S,At),h(e,We,r),h(e,w,r),t(w,Pt),t(w,M),t(M,Dt),t(w,Ct),t(w,we),t(we,Bt),t(w,Gt),t(w,ge),t(ge,Rt),t(w,Kt),t(w,be),t(be,Nt),t(w,Jt),h(e,ze,r),h(e,oe,r),t(oe,Mt),h(e,Fe,r),h(e,ae,r),t(ae,Ht),h(e,Ve,r),h(e,le,r),t(le,qt),h(e,Xe,r),h(e,ne,r),t(ne,$t),h(e,Ze,r),h(e,H,r),H.innerHTML=ta,h(e,Qe,r),h(e,A,r),t(A,_e),t(_e,Lt),t(A,Yt),t(A,ke),t(ke,Ut),t(A,Wt),h(e,et,r),h(e,g,r),t(g,Ee),t(Ee,zt),t(g,Ft),t(g,Se),t(Se,Vt),t(g,Xt),t(g,Ie),t(Ie,Zt),t(g,Qt),t(g,xe),t(xe,es),h(e,tt,r),h(e,q,r),t(q,je),t(je,ts),t(q,ss),h(e,st,r),h(e,B,r),t(B,Te),t(Te,os),t(B,as),t(B,Oe),t(Oe,ls),h(e,ot,r),h(e,P,r),t(P,Ae),t(Ae,ns),t(P,is),t(P,Pe),t(Pe,rs),t(P,hs),h(e,at,r),h(e,G,r),t(G,De),t(De,fs),t(G,ps),t(G,$),t($,ds),h(e,lt,r),h(e,b,r),t(b,Ce),t(Ce,us),t(b,cs),t(b,Be),t(Be,ms),t(b,vs),t(b,Ge),t(Ge,ys),t(b,ws),h(e,nt,r),h(e,v,r),t(v,Re),t(Re,gs),t(v,bs),t(v,Ke),t(Ke,_s),t(v,ks),t(v,Ne),t(Ne,Es),t(v,Ss),t(v,L),t(L,Is),t(v,xs),t(v,Y),t(Y,js),t(v,Ts),h(e,it,r),h(e,D,r),t(D,Je),t(Je,Os),t(D,As),t(D,Me),t(Me,Ps),t(D,Ds),h(e,rt,r),h(e,ie,r),t(ie,Cs),h(e,ht,r),h(e,I,r),t(I,Bs),t(I,U),t(U,Gs),t(I,Rs),t(I,re),t(re,Ks),t(I,Ns),h(e,ft,r),h(e,he,r),t(he,Js),h(e,pt,r),h(e,x,r),t(x,Ms),t(x,W),t(W,Hs),t(x,qs),t(x,z),t(z,$s),t(x,Ls),h(e,dt,r),h(e,j,r),t(j,Ys),t(j,F),t(F,Us),t(j,Ws),t(j,V),t(V,zs),t(j,Fs),h(e,ut,r),h(e,T,r),t(T,Vs),t(T,X),t(X,Xs),t(T,Zs),t(T,Z),t(Z,Qs),t(T,eo)},p:ua,d(e){e&&s(u),e&&s(E),e&&s(m),e&&s(Le),e&&s(C),e&&s(Ye),e&&s(se),e&&s(Ue),e&&s(S),e&&s(We),e&&s(w),e&&s(ze),e&&s(oe),e&&s(Fe),e&&s(ae),e&&s(Ve),e&&s(le),e&&s(Xe),e&&s(ne),e&&s(Ze),e&&s(H),e&&s(Qe),e&&s(A),e&&s(et),e&&s(g),e&&s(tt),e&&s(q),e&&s(st),e&&s(B),e&&s(ot),e&&s(P),e&&s(at),e&&s(G),e&&s(lt),e&&s(b),e&&s(nt),e&&s(v),e&&s(it),e&&s(D),e&&s(rt),e&&s(ie),e&&s(ht),e&&s(I),e&&s(ft),e&&s(he),e&&s(pt),e&&s(x),e&&s(dt),e&&s(j),e&&s(ut),e&&s(T)}}}function va(ee){let u,k;const E=[ee[0],ea];let m={$$slots:{default:[ma]},$$scope:{ctx:ee}};for(let c=0;c<E.length;c+=1)m=so(m,E[c]);return u=new ca({props:m}),{c(){na(u.$$.fragment)},l(c){ia(u.$$.fragment,c)},m(c,y){ra(u,c,y),k=!0},p(c,[y]){const te=y&1?ha(E,[y&1&&Zo(c[0]),y&0&&Zo(ea)]):{};y&2&&(te.$$scope={dirty:y,ctx:c}),u.$set(te)},i(c){k||(fa(u.$$.fragment,c),k=!0)},o(c){pa(u.$$.fragment,c),k=!1},d(c){da(u,c)}}}const ea={date:"2022-04-22T00:00:00.000Z",draft:!1,archived:!1,title:"I rebuilt my website with SvelteKit",permalink:"/blog/blog-with-sveltekit-and-markdown",prev:"reordering-audio-files-in-a-fat-usb-stick",tags:["svelte","gotofritz"],excerpt:'Building a static website with <a href="https://kit.svelte.dev/">Sveltekit</a> and markdown is hard going at first. But just when I was about to give up I stumbled on some blog posts and boilerplates that helped me crack it. I may still switch to <a href="https://astro.build/">Astro</a> later though'};function ya(ee,u,k){return ee.$$set=E=>{k(0,u=so(so({},u),Qo(E)))},u=Qo(u),[u]}class _a extends oa{constructor(u){super(),aa(this,u,ya,va,la,{})}}export{_a as default,ea as metadata};
