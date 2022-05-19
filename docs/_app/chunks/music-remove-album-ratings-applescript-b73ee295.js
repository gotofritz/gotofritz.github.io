import{S as xe,i as Le,s as Oe,e as s,t as i,j as h,c as n,a as o,g as r,d as t,l as u,b as f,f as p,F as a,I as he}from"./vendor-f15b48c1.js";function Pe(Me){let d,E,G,B,c,I,k,J,R,N,Q,U,w,j,V,X,A,Te=`<code class="language-applescript"><span class="token keyword">tell</span> <span class="token class-name">application</span> <span class="token string">"Music"</span>
  <span class="token keyword">repeat</span> <span class="token keyword">with</span> theSong <span class="token keyword">in</span> selection
    <span class="token keyword">set</span> album rating <span class="token keyword">of</span> theSong <span class="token keyword">to</span> <span class="token number">1</span>
  <span class="token keyword">end</span> <span class="token keyword">repeat</span>
<span class="token keyword">end</span> <span class="token keyword">tell</span></code>`,$,x,L,ee,te,O,g,ae,P,se,ne,C,b,S,oe,q,M,le,D,v,T,ie,W,y,re,H,pe,ce,Y,_,Ie=`<code class="language-applescript"><span class="token keyword">tell</span> <span class="token class-name">application</span> <span class="token string">"Music"</span>
  <span class="token keyword">set</span> result <span class="token keyword">to</span> <span class="token punctuation">(</span><span class="token class-name">file</span> tracks <span class="token keyword">whose</span> album rating <span class="token operator">is greater than</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">repeat</span> <span class="token keyword">with</span> theSong <span class="token keyword">in</span> result
    <span class="token keyword">set</span> album rating <span class="token keyword">of</span> theSong <span class="token keyword">to</span> <span class="token number">1</span>
  <span class="token keyword">end</span> <span class="token keyword">repeat</span>
<span class="token keyword">end</span> <span class="token keyword">tell</span></code>`;return{c(){d=s("h2"),E=s("a"),G=i("TL;DR: just give me the code"),B=h(),c=s("ol"),I=s("li"),k=s("p"),J=i("Open "),R=s("strike"),N=i("iTunes"),Q=i(" Music and select the songs from which you want to remove the album rating"),U=h(),w=s("li"),j=s("p"),V=i("Open the Script Editor (you\u2019ll find easily with Spotlight, just type \u2018Script Editor\u2019 into it) and paste the following code into it"),X=h(),A=s("pre"),$=h(),x=s("li"),L=s("p"),ee=i("Click on the \u2018play\u2019 button in the Script Editor. At the bottom of the editor you\u2019ll see a tiny spinning animation"),te=h(),O=s("li"),g=s("p"),ae=i("You will probably need to press \u2018play\u2019 a few times before "),P=s("em"),se=i("all"),ne=i(" the songs are done (it\u2019s the Apple way..)"),C=h(),b=s("h2"),S=s("a"),oe=i("What is this all about?"),q=h(),M=s("p"),le=i("I have \u2018smart\u2019 playlists with include songs I have not yet rated. The problem is that the Music app will randomly decide to add a rating to some of them, based on the other songs in the album. These are not the \u201Cnormal\u201D ratings, but a different property called Album Rating. One which you cannot edit. But when you create your smart playlists, Album Ratings will be treated as normal Ratings. So these songs will not be treated as unrated anymore, and you can\u2019t find them automatically. There is no workaround inside Music for it, but luckily you can use AppleScript to solve the issue."),D=h(),v=s("h2"),T=s("a"),ie=i("An alternative script, editing all tracks without selecting first"),W=h(),y=s("p"),re=i("Alternatively, here\u2019s a script which goes through your "),H=s("em"),pe=i("whole"),ce=i(" library and does the same thing. I don\u2019t do it that way because my library is huge, and it Music takes forever to go through it (in fact, it times out). But it may work for you."),Y=h(),_=s("pre"),this.h()},l(e){d=n(e,"H2",{id:!0});var l=o(d);E=n(l,"A",{href:!0});var ue=o(E);G=r(ue,"TL;DR: just give me the code"),ue.forEach(t),l.forEach(t),B=u(e),c=n(e,"OL",{});var m=o(c);I=n(m,"LI",{});var de=o(I);k=n(de,"P",{});var F=o(k);J=r(F,"Open "),R=n(F,"STRIKE",{});var ye=o(R);N=r(ye,"iTunes"),ye.forEach(t),Q=r(F," Music and select the songs from which you want to remove the album rating"),F.forEach(t),de.forEach(t),U=u(m),w=n(m,"LI",{});var K=o(w);j=n(K,"P",{});var me=o(j);V=r(me,"Open the Script Editor (you\u2019ll find easily with Spotlight, just type \u2018Script Editor\u2019 into it) and paste the following code into it"),me.forEach(t),X=u(K),A=n(K,"PRE",{class:!0});var Re=o(A);Re.forEach(t),K.forEach(t),$=u(m),x=n(m,"LI",{});var fe=o(x);L=n(fe,"P",{});var ke=o(L);ee=r(ke,"Click on the \u2018play\u2019 button in the Script Editor. At the bottom of the editor you\u2019ll see a tiny spinning animation"),ke.forEach(t),fe.forEach(t),te=u(m),O=n(m,"LI",{});var we=o(O);g=n(we,"P",{});var Z=o(g);ae=r(Z,"You will probably need to press \u2018play\u2019 a few times before "),P=n(Z,"EM",{});var ge=o(P);se=r(ge,"all"),ge.forEach(t),ne=r(Z," the songs are done (it\u2019s the Apple way..)"),Z.forEach(t),we.forEach(t),m.forEach(t),C=u(e),b=n(e,"H2",{id:!0});var be=o(b);S=n(be,"A",{href:!0});var ve=o(S);oe=r(ve,"What is this all about?"),ve.forEach(t),be.forEach(t),q=u(e),M=n(e,"P",{});var _e=o(M);le=r(_e,"I have \u2018smart\u2019 playlists with include songs I have not yet rated. The problem is that the Music app will randomly decide to add a rating to some of them, based on the other songs in the album. These are not the \u201Cnormal\u201D ratings, but a different property called Album Rating. One which you cannot edit. But when you create your smart playlists, Album Ratings will be treated as normal Ratings. So these songs will not be treated as unrated anymore, and you can\u2019t find them automatically. There is no workaround inside Music for it, but luckily you can use AppleScript to solve the issue."),_e.forEach(t),D=u(e),v=n(e,"H2",{id:!0});var Ee=o(v);T=n(Ee,"A",{href:!0});var Ae=o(T);ie=r(Ae,"An alternative script, editing all tracks without selecting first"),Ae.forEach(t),Ee.forEach(t),W=u(e),y=n(e,"P",{});var z=o(y);re=r(z,"Alternatively, here\u2019s a script which goes through your "),H=n(z,"EM",{});var Se=o(H);pe=r(Se,"whole"),Se.forEach(t),ce=r(z," library and does the same thing. I don\u2019t do it that way because my library is huge, and it Music takes forever to go through it (in fact, it times out). But it may work for you."),z.forEach(t),Y=u(e),_=n(e,"PRE",{class:!0});var je=o(_);je.forEach(t),this.h()},h(){f(E,"href","#tldr-just-give-me-the-code"),f(d,"id","tldr-just-give-me-the-code"),f(A,"class","language-applescript"),f(S,"href","#what-is-this-all-about"),f(b,"id","what-is-this-all-about"),f(T,"href","#an-alternative-script-editing-all-tracks-without-selecting-first"),f(v,"id","an-alternative-script-editing-all-tracks-without-selecting-first"),f(_,"class","language-applescript")},m(e,l){p(e,d,l),a(d,E),a(E,G),p(e,B,l),p(e,c,l),a(c,I),a(I,k),a(k,J),a(k,R),a(R,N),a(k,Q),a(c,U),a(c,w),a(w,j),a(j,V),a(w,X),a(w,A),A.innerHTML=Te,a(c,$),a(c,x),a(x,L),a(L,ee),a(c,te),a(c,O),a(O,g),a(g,ae),a(g,P),a(P,se),a(g,ne),p(e,C,l),p(e,b,l),a(b,S),a(S,oe),p(e,q,l),p(e,M,l),a(M,le),p(e,D,l),p(e,v,l),a(v,T),a(T,ie),p(e,W,l),p(e,y,l),a(y,re),a(y,H),a(H,pe),a(y,ce),p(e,Y,l),p(e,_,l),_.innerHTML=Ie},p:he,i:he,o:he,d(e){e&&t(d),e&&t(B),e&&t(c),e&&t(C),e&&t(b),e&&t(q),e&&t(M),e&&t(D),e&&t(v),e&&t(W),e&&t(y),e&&t(Y),e&&t(_)}}}const Be={excerpt:'Apple Music / iTunes "helpfully" adds ratings to songs for you, based on the ratings of the other songs in the album. This messes some of my smart playlists up. Only Applescript will get rid of those ratings',date:"2020-03-12T00:00:00.000Z",published:!0,archived:!1,prev:"osx-apps",next:"countdown-clock-state-machine-requestanimationframe-vanilla-js",title:"Removing album ratings from Apple Music App",tags:["apple music","os x"]};class Ce extends xe{constructor(d){super();Le(this,d,null,Pe,Oe,{})}}export{Ce as default,Be as metadata};
