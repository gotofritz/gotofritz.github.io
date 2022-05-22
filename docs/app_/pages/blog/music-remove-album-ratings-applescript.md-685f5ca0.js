import{S as xe,i as Re,s as Ie,D as re,x as Le,y as Pe,z as $e,A as Oe,B as _e,r as je,p as Be,C as He,L as be,e as o,t as u,k as f,c as l,a as i,h,d as t,m as k,b as ve,g as d,F as s,n as Ce}from"../../chunks/index-5f3bee99.js";import{P as De}from"../../chunks/_post-1d61ba86.js";import"../../chunks/Header-5bd94491.js";function qe(E){let a,m,y,r,n,c,A,R,K,Z,G,_,I,J,N,S,Ae=`<code class="language-applescript"><span class="token keyword">tell</span> <span class="token class-name">application</span> <span class="token string">"Music"</span>
  <span class="token keyword">repeat</span> <span class="token keyword">with</span> theSong <span class="token keyword">in</span> selection
    <span class="token keyword">set</span> album rating <span class="token keyword">of</span> theSong <span class="token keyword">to</span> <span class="token number">1</span>
  <span class="token keyword">end</span> <span class="token keyword">repeat</span>
<span class="token keyword">end</span> <span class="token keyword">tell</span></code>`,Q,L,P,U,V,$,b,X,O,ee,te,B,M,se,H,T,ae,C,x,ne,D,w,oe,j,le,ie,q,v,Se=`<code class="language-applescript"><span class="token keyword">tell</span> <span class="token class-name">application</span> <span class="token string">"Music"</span>
  <span class="token keyword">set</span> result <span class="token keyword">to</span> <span class="token punctuation">(</span><span class="token class-name">file</span> tracks <span class="token keyword">whose</span> album rating <span class="token operator">is greater than</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">repeat</span> <span class="token keyword">with</span> theSong <span class="token keyword">in</span> result
    <span class="token keyword">set</span> album rating <span class="token keyword">of</span> theSong <span class="token keyword">to</span> <span class="token number">1</span>
  <span class="token keyword">end</span> <span class="token keyword">repeat</span>
<span class="token keyword">end</span> <span class="token keyword">tell</span></code>`;return{c(){a=o("h2"),m=u("TL;DR: just give me the code"),y=f(),r=o("ol"),n=o("li"),c=o("p"),A=u("Open "),R=o("strike"),K=u("iTunes"),Z=u(" Music and select the songs from which you want to remove the album rating"),G=f(),_=o("li"),I=o("p"),J=u("Open the Script Editor (you\u2019ll find easily with Spotlight, just type \u2018Script Editor\u2019 into it) and paste the following code into it"),N=f(),S=o("pre"),Q=f(),L=o("li"),P=o("p"),U=u("Click on the \u2018play\u2019 button in the Script Editor. At the bottom of the editor you\u2019ll see a tiny spinning animation"),V=f(),$=o("li"),b=o("p"),X=u("You will probably need to press \u2018play\u2019 a few times before "),O=o("em"),ee=u("all"),te=u(" the songs are done (it\u2019s the Apple way..)"),B=f(),M=o("h2"),se=u("What is this all about?"),H=f(),T=o("p"),ae=u("I have \u2018smart\u2019 playlists with include songs I have not yet rated. The problem is that the Music app will randomly decide to add a rating to some of them, based on the other songs in the album. These are not the \u201Cnormal\u201D ratings, but a different property called Album Rating. One which you cannot edit. But when you create your smart playlists, Album Ratings will be treated as normal Ratings. So these songs will not be treated as unrated anymore, and you can\u2019t find them automatically. There is no workaround inside Music for it, but luckily you can use AppleScript to solve the issue."),C=f(),x=o("h2"),ne=u("An alternative script, editing all tracks without selecting first"),D=f(),w=o("p"),oe=u("Alternatively, here\u2019s a script which goes through your "),j=o("em"),le=u("whole"),ie=u(" library and does the same thing. I don\u2019t do it that way because my library is huge, and it Music takes forever to go through it (in fact, it times out). But it may work for you."),q=f(),v=o("pre"),this.h()},l(e){a=l(e,"H2",{});var p=i(a);m=h(p,"TL;DR: just give me the code"),p.forEach(t),y=k(e),r=l(e,"OL",{});var g=i(r);n=l(g,"LI",{});var pe=i(n);c=l(pe,"P",{});var W=i(c);A=h(W,"Open "),R=l(W,"STRIKE",{});var ce=i(R);K=h(ce,"iTunes"),ce.forEach(t),Z=h(W," Music and select the songs from which you want to remove the album rating"),W.forEach(t),pe.forEach(t),G=k(g),_=l(g,"LI",{});var Y=i(_);I=l(Y,"P",{});var ue=i(I);J=h(ue,"Open the Script Editor (you\u2019ll find easily with Spotlight, just type \u2018Script Editor\u2019 into it) and paste the following code into it"),ue.forEach(t),N=k(Y),S=l(Y,"PRE",{class:!0});var Me=i(S);Me.forEach(t),Y.forEach(t),Q=k(g),L=l(g,"LI",{});var he=i(L);P=l(he,"P",{});var de=i(P);U=h(de,"Click on the \u2018play\u2019 button in the Script Editor. At the bottom of the editor you\u2019ll see a tiny spinning animation"),de.forEach(t),he.forEach(t),V=k(g),$=l(g,"LI",{});var me=i($);b=l(me,"P",{});var z=i(b);X=h(z,"You will probably need to press \u2018play\u2019 a few times before "),O=l(z,"EM",{});var ye=i(O);ee=h(ye,"all"),ye.forEach(t),te=h(z," the songs are done (it\u2019s the Apple way..)"),z.forEach(t),me.forEach(t),g.forEach(t),B=k(e),M=l(e,"H2",{});var fe=i(M);se=h(fe,"What is this all about?"),fe.forEach(t),H=k(e),T=l(e,"P",{});var ke=i(T);ae=h(ke,"I have \u2018smart\u2019 playlists with include songs I have not yet rated. The problem is that the Music app will randomly decide to add a rating to some of them, based on the other songs in the album. These are not the \u201Cnormal\u201D ratings, but a different property called Album Rating. One which you cannot edit. But when you create your smart playlists, Album Ratings will be treated as normal Ratings. So these songs will not be treated as unrated anymore, and you can\u2019t find them automatically. There is no workaround inside Music for it, but luckily you can use AppleScript to solve the issue."),ke.forEach(t),C=k(e),x=l(e,"H2",{});var we=i(x);ne=h(we,"An alternative script, editing all tracks without selecting first"),we.forEach(t),D=k(e),w=l(e,"P",{});var F=i(w);oe=h(F,"Alternatively, here\u2019s a script which goes through your "),j=l(F,"EM",{});var ge=i(j);le=h(ge,"whole"),ge.forEach(t),ie=h(F," library and does the same thing. I don\u2019t do it that way because my library is huge, and it Music takes forever to go through it (in fact, it times out). But it may work for you."),F.forEach(t),q=k(e),v=l(e,"PRE",{class:!0});var Te=i(v);Te.forEach(t),this.h()},h(){ve(S,"class","language-applescript"),ve(v,"class","language-applescript")},m(e,p){d(e,a,p),s(a,m),d(e,y,p),d(e,r,p),s(r,n),s(n,c),s(c,A),s(c,R),s(R,K),s(c,Z),s(r,G),s(r,_),s(_,I),s(I,J),s(_,N),s(_,S),S.innerHTML=Ae,s(r,Q),s(r,L),s(L,P),s(P,U),s(r,V),s(r,$),s($,b),s(b,X),s(b,O),s(O,ee),s(b,te),d(e,B,p),d(e,M,p),s(M,se),d(e,H,p),d(e,T,p),s(T,ae),d(e,C,p),d(e,x,p),s(x,ne),d(e,D,p),d(e,w,p),s(w,oe),s(w,j),s(j,le),s(w,ie),d(e,q,p),d(e,v,p),v.innerHTML=Se},p:Ce,d(e){e&&t(a),e&&t(y),e&&t(r),e&&t(B),e&&t(M),e&&t(H),e&&t(T),e&&t(C),e&&t(x),e&&t(D),e&&t(w),e&&t(q),e&&t(v)}}}function We(E){let a,m;const y=[E[0],Ee];let r={$$slots:{default:[qe]},$$scope:{ctx:E}};for(let n=0;n<y.length;n+=1)r=re(r,y[n]);return a=new De({props:r}),{c(){Le(a.$$.fragment)},l(n){Pe(a.$$.fragment,n)},m(n,c){$e(a,n,c),m=!0},p(n,[c]){const A=c&1?Oe(y,[c&1&&_e(n[0]),c&0&&_e(Ee)]):{};c&2&&(A.$$scope={dirty:c,ctx:n}),a.$set(A)},i(n){m||(je(a.$$.fragment,n),m=!0)},o(n){Be(a.$$.fragment,n),m=!1},d(n){He(a,n)}}}const Ee={excerpt:'Apple Music / iTunes "helpfully" adds ratings to songs for you, based on the ratings of the other songs in the album. This messes some of my smart playlists up. Only Applescript will get rid of those ratings',date:"2020-03-12T00:00:00.000Z",published:!0,archived:!1,prev:"osx-apps",next:"countdown-clock-state-machine-requestanimationframe-vanilla-js",title:"Removing album ratings from Apple Music App",tags:["apple music","os x"]};function Ye(E,a,m){return E.$$set=y=>{m(0,a=re(re({},a),be(y)))},a=be(a),[a]}class Ze extends xe{constructor(a){super(),Re(this,a,Ye,We,Ie,{})}}export{Ze as default,Ee as metadata};
