import{S as je,i as He,s as Be,e as s,t as r,k as u,c as n,a as o,d as t,h as p,m as y,b as i,g as c,I as a,E as me}from"./index-6e518972.js";function Ce(Ie){let d,f,x,Q,D,h,I,E,U,R,V,X,$,_,P,ee,te,M,Re=`<code class="language-applescript"><span class="token keyword">tell</span> <span class="token class-name">application</span> <span class="token string">"Music"</span>
  <span class="token keyword">repeat</span> <span class="token keyword">with</span> theSong <span class="token keyword">in</span> selection
    <span class="token keyword">set</span> album rating <span class="token keyword">of</span> theSong <span class="token keyword">to</span> <span class="token number">1</span>
  <span class="token keyword">end</span> <span class="token keyword">repeat</span>
<span class="token keyword">end</span> <span class="token keyword">tell</span></code>`,ae,L,O,se,ne,j,A,oe,H,le,ie,W,m,k,B,re,Y,T,pe,q,w,g,C,ce,K,b,he,N,de,ue,Z,S,Pe=`<code class="language-applescript"><span class="token keyword">tell</span> <span class="token class-name">application</span> <span class="token string">"Music"</span>
  <span class="token keyword">set</span> result <span class="token keyword">to</span> <span class="token punctuation">(</span><span class="token class-name">file</span> tracks <span class="token keyword">whose</span> album rating <span class="token operator">is greater than</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">repeat</span> <span class="token keyword">with</span> theSong <span class="token keyword">in</span> result
    <span class="token keyword">set</span> album rating <span class="token keyword">of</span> theSong <span class="token keyword">to</span> <span class="token number">1</span>
  <span class="token keyword">end</span> <span class="token keyword">repeat</span>
<span class="token keyword">end</span> <span class="token keyword">tell</span></code>`;return{c(){d=s("h2"),f=s("a"),x=s("span"),Q=r("TL;DR: just give me the code"),D=u(),h=s("ol"),I=s("li"),E=s("p"),U=r("Open "),R=s("strike"),V=r("iTunes"),X=r(" Music and select the songs from which you want to remove the album rating"),$=u(),_=s("li"),P=s("p"),ee=r("Open the Script Editor (you\u2019ll find easily with Spotlight, just type \u2018Script Editor\u2019 into it) and paste the following code into it"),te=u(),M=s("pre"),ae=u(),L=s("li"),O=s("p"),se=r("Click on the \u2018play\u2019 button in the Script Editor. At the bottom of the editor you\u2019ll see a tiny spinning animation"),ne=u(),j=s("li"),A=s("p"),oe=r("You will probably need to press \u2018play\u2019 a few times before "),H=s("em"),le=r("all"),ie=r(" the songs are done (it\u2019s the Apple way..)"),W=u(),m=s("h2"),k=s("a"),B=s("span"),re=r("What is this all about?"),Y=u(),T=s("p"),pe=r("I have \u2018smart\u2019 playlists with include songs I have not yet rated. The problem is that the Music app will randomly decide to add a rating to some of them, based on the other songs in the album. These are not the \u201Cnormal\u201D ratings, but a different property called Album Rating. One which you cannot edit. But when you create your smart playlists, Album Ratings will be treated as normal Ratings. So these songs will not be treated as unrated anymore, and you can\u2019t find them automatically. There is no workaround inside Music for it, but luckily you can use AppleScript to solve the issue."),q=u(),w=s("h2"),g=s("a"),C=s("span"),ce=r("An alternative script, editing all tracks without selecting first"),K=u(),b=s("p"),he=r("Alternatively, here\u2019s a script which goes through your "),N=s("em"),de=r("whole"),ue=r(" library and does the same thing. I don\u2019t do it that way because my library is huge, and it Music takes forever to go through it (in fact, it times out). But it may work for you."),Z=u(),S=s("pre"),this.h()},l(e){d=n(e,"H2",{id:!0});var l=o(d);f=n(l,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ke=o(f);x=n(ke,"SPAN",{class:!0}),o(x).forEach(t),ke.forEach(t),Q=p(l,"TL;DR: just give me the code"),l.forEach(t),D=y(e),h=n(e,"OL",{});var v=o(h);I=n(v,"LI",{});var we=o(I);E=n(we,"P",{});var z=o(E);U=p(z,"Open "),R=n(z,"STRIKE",{});var ge=o(R);V=p(ge,"iTunes"),ge.forEach(t),X=p(z," Music and select the songs from which you want to remove the album rating"),z.forEach(t),we.forEach(t),$=y(v),_=n(v,"LI",{});var F=o(_);P=n(F,"P",{});var be=o(P);ee=p(be,"Open the Script Editor (you\u2019ll find easily with Spotlight, just type \u2018Script Editor\u2019 into it) and paste the following code into it"),be.forEach(t),te=y(F),M=n(F,"PRE",{class:!0});var Le=o(M);Le.forEach(t),F.forEach(t),ae=y(v),L=n(v,"LI",{});var ve=o(L);O=n(ve,"P",{});var Ee=o(O);se=p(Ee,"Click on the \u2018play\u2019 button in the Script Editor. At the bottom of the editor you\u2019ll see a tiny spinning animation"),Ee.forEach(t),ve.forEach(t),ne=y(v),j=n(v,"LI",{});var _e=o(j);A=n(_e,"P",{});var G=o(A);oe=p(G,"You will probably need to press \u2018play\u2019 a few times before "),H=n(G,"EM",{});var Ae=o(H);le=p(Ae,"all"),Ae.forEach(t),ie=p(G," the songs are done (it\u2019s the Apple way..)"),G.forEach(t),_e.forEach(t),v.forEach(t),W=y(e),m=n(e,"H2",{id:!0});var ye=o(m);k=n(ye,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Se=o(k);B=n(Se,"SPAN",{class:!0}),o(B).forEach(t),Se.forEach(t),re=p(ye,"What is this all about?"),ye.forEach(t),Y=y(e),T=n(e,"P",{});var Me=o(T);pe=p(Me,"I have \u2018smart\u2019 playlists with include songs I have not yet rated. The problem is that the Music app will randomly decide to add a rating to some of them, based on the other songs in the album. These are not the \u201Cnormal\u201D ratings, but a different property called Album Rating. One which you cannot edit. But when you create your smart playlists, Album Ratings will be treated as normal Ratings. So these songs will not be treated as unrated anymore, and you can\u2019t find them automatically. There is no workaround inside Music for it, but luckily you can use AppleScript to solve the issue."),Me.forEach(t),q=y(e),w=n(e,"H2",{id:!0});var fe=o(w);g=n(fe,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Te=o(g);C=n(Te,"SPAN",{class:!0}),o(C).forEach(t),Te.forEach(t),ce=p(fe,"An alternative script, editing all tracks without selecting first"),fe.forEach(t),K=y(e),b=n(e,"P",{});var J=o(b);he=p(J,"Alternatively, here\u2019s a script which goes through your "),N=n(J,"EM",{});var xe=o(N);de=p(xe,"whole"),xe.forEach(t),ue=p(J," library and does the same thing. I don\u2019t do it that way because my library is huge, and it Music takes forever to go through it (in fact, it times out). But it may work for you."),J.forEach(t),Z=y(e),S=n(e,"PRE",{class:!0});var Oe=o(S);Oe.forEach(t),this.h()},h(){i(x,"class","icon icon-link"),i(f,"aria-hidden","true"),i(f,"tabindex","-1"),i(f,"href","#tldr-just-give-me-the-code"),i(d,"id","tldr-just-give-me-the-code"),i(M,"class","language-applescript"),i(B,"class","icon icon-link"),i(k,"aria-hidden","true"),i(k,"tabindex","-1"),i(k,"href","#what-is-this-all-about"),i(m,"id","what-is-this-all-about"),i(C,"class","icon icon-link"),i(g,"aria-hidden","true"),i(g,"tabindex","-1"),i(g,"href","#an-alternative-script-editing-all-tracks-without-selecting-first"),i(w,"id","an-alternative-script-editing-all-tracks-without-selecting-first"),i(S,"class","language-applescript")},m(e,l){c(e,d,l),a(d,f),a(f,x),a(d,Q),c(e,D,l),c(e,h,l),a(h,I),a(I,E),a(E,U),a(E,R),a(R,V),a(E,X),a(h,$),a(h,_),a(_,P),a(P,ee),a(_,te),a(_,M),M.innerHTML=Re,a(h,ae),a(h,L),a(L,O),a(O,se),a(h,ne),a(h,j),a(j,A),a(A,oe),a(A,H),a(H,le),a(A,ie),c(e,W,l),c(e,m,l),a(m,k),a(k,B),a(m,re),c(e,Y,l),c(e,T,l),a(T,pe),c(e,q,l),c(e,w,l),a(w,g),a(g,C),a(w,ce),c(e,K,l),c(e,b,l),a(b,he),a(b,N),a(N,de),a(b,ue),c(e,Z,l),c(e,S,l),S.innerHTML=Pe},p:me,i:me,o:me,d(e){e&&t(d),e&&t(D),e&&t(h),e&&t(W),e&&t(m),e&&t(Y),e&&t(T),e&&t(q),e&&t(w),e&&t(K),e&&t(b),e&&t(Z),e&&t(S)}}}const De={excerpt:'Apple Music / iTunes "helpfully" adds ratings to songs for you, based on the ratings of the other songs in the album. This messes some of my smart playlists up. Only Applescript will get rid of those ratings',date:"2020-03-12T00:00:00.000Z",draft:!1,archived:!1,title:"Removing album ratings from Apple Music App",tags:["apple music","os x"]};class We extends je{constructor(d){super(),He(this,d,null,Ce,Be,{})}}export{We as default,De as metadata};