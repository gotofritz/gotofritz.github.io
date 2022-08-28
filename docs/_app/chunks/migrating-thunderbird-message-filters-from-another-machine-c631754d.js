import{S as ze,i as De,s as Ce,e as o,t as l,k as c,c as a,a as s,d as t,h,m as p,b as d,g as n,I as i,E as be}from"./index-6e518972.js";function qe(Se){let u,m,M,K,O,y,Q,E,U,V,Y,b,X,P,ee,te,L,A,ie,N,g,v,j,re,H,w,oe,z,ae,se,R,f,ne,D,le,he,C,de,ue,F,k,fe,G,T,Me=`<code class="language-sh"># source machine, the one with the filters
$ cp ~/Library/Thunderbird/Profiles/e8fiz6tv.default-release/ImapMail/imap.gmail.com/msgFilterRules.dat \\
  ~/Dropbox

# target mchine, the one where I want to copy the filters to
$ mv ~/Dropbox/msgFilterRules.dat \\
  ~/Library/Thunderbird/Profiles/j41re1op.default-release/ImapMail/imap.gmail.com/</code>`,W,_,x,q,ce,$,I,pe;return{c(){u=o("h2"),m=o("a"),M=o("span"),K=l("Surely syncing profiles is basic functionality which is baked in, right?"),O=c(),y=o("p"),Q=l("Don\u2019t bet on it. There\u2019s "),E=o("a"),U=l("this unresolved issue from 14 years ago"),V=l(".. And to be fair, syncing requires some sort of distributed infrastructure. Thunderbird is no longer under the Mozilla umbrella, it\u2019s run by volunteers. Syncing across devices is not a realistic expectation."),Y=c(),b=o("p"),X=l("A more realistic expectations would be the ability to export and import filters from / to files. That\u2019s "),P=o("a"),ee=l("been raised 20 ago already"),te=l("\u2026 and there hasn\u2019t been any activity whatsoever on it. The only solution offered was a plugin abandoned 12 years ago. So it\u2019s fair to say it\u2019s not going to happen."),L=c(),A=o("p"),ie=l("The only way then, is to get that CLI out and start copying files."),N=c(),g=o("h2"),v=o("a"),j=o("span"),re=l("Which files needs to be copied where in order to migrate Thunderbird\u2019s message filters?"),H=c(),w=o("p"),oe=l("I do it via Dropbox, but of course you can use any intermediate storage of your choice. The following works for my GMail IMAP accounts, but the same idea works if you are using POP or another provider. You simply have to go through the various folders in your profile until you find the one that does the job. Sadly, there is no shortcut. If you didn\u2019t do anything special and are just using the standard Thunderbird Profile, then the one you want is the one that ends with "),z=o("code"),ae=l("xxxx.default-release"),se=l(". Other than that, it\u2019s all trial and error."),R=c(),f=o("p"),ne=l("Note that "),D=o("code"),le=l("e8fiz6tv"),he=l(" and "),C=o("code"),de=l("j41re1op"),ue=l(" are just random strings Thunderbird creates and associates with a user. You\u2019ll find a couple of those in the Profile folder, more if you have set up more profiles. Presumably renaming a folder in there would break things, so they went for a random string which doesn\u2019t need to be changed even if you rename the profile."),F=c(),k=o("p"),fe=l("You need to quit Thunderbird on the target machine before you run the commands below"),G=c(),T=o("pre"),W=c(),_=o("h2"),x=o("a"),q=o("span"),ce=l("Conclusion"),$=c(),I=o("p"),pe=l("All said and done it\u2019s actually a quite simple procedure. The time consuming part is researching to confirm that\u2019s actually the way to do it."),this.h()},l(e){u=a(e,"H2",{id:!0});var r=s(u);m=a(r,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ge=s(m);M=a(ge,"SPAN",{class:!0}),s(M).forEach(t),ge.forEach(t),K=h(r,"Surely syncing profiles is basic functionality which is baked in, right?"),r.forEach(t),O=p(e),y=a(e,"P",{});var Z=s(y);Q=h(Z,"Don\u2019t bet on it. There\u2019s "),E=a(Z,"A",{href:!0});var ve=s(E);U=h(ve,"this unresolved issue from 14 years ago"),ve.forEach(t),V=h(Z,".. And to be fair, syncing requires some sort of distributed infrastructure. Thunderbird is no longer under the Mozilla umbrella, it\u2019s run by volunteers. Syncing across devices is not a realistic expectation."),Z.forEach(t),Y=p(e),b=a(e,"P",{});var B=s(b);X=h(B,"A more realistic expectations would be the ability to export and import filters from / to files. That\u2019s "),P=a(B,"A",{href:!0});var we=s(P);ee=h(we,"been raised 20 ago already"),we.forEach(t),te=h(B,"\u2026 and there hasn\u2019t been any activity whatsoever on it. The only solution offered was a plugin abandoned 12 years ago. So it\u2019s fair to say it\u2019s not going to happen."),B.forEach(t),L=p(e),A=a(e,"P",{});var _e=s(A);ie=h(_e,"The only way then, is to get that CLI out and start copying files."),_e.forEach(t),N=p(e),g=a(e,"H2",{id:!0});var me=s(g);v=a(me,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var xe=s(v);j=a(xe,"SPAN",{class:!0}),s(j).forEach(t),xe.forEach(t),re=h(me,"Which files needs to be copied where in order to migrate Thunderbird\u2019s message filters?"),me.forEach(t),H=p(e),w=a(e,"P",{});var J=s(w);oe=h(J,"I do it via Dropbox, but of course you can use any intermediate storage of your choice. The following works for my GMail IMAP accounts, but the same idea works if you are using POP or another provider. You simply have to go through the various folders in your profile until you find the one that does the job. Sadly, there is no shortcut. If you didn\u2019t do anything special and are just using the standard Thunderbird Profile, then the one you want is the one that ends with "),z=a(J,"CODE",{});var Te=s(z);ae=h(Te,"xxxx.default-release"),Te.forEach(t),se=h(J,". Other than that, it\u2019s all trial and error."),J.forEach(t),R=p(e),f=a(e,"P",{});var S=s(f);ne=h(S,"Note that "),D=a(S,"CODE",{});var Ee=s(D);le=h(Ee,"e8fiz6tv"),Ee.forEach(t),he=h(S," and "),C=a(S,"CODE",{});var Pe=s(C);de=h(Pe,"j41re1op"),Pe.forEach(t),ue=h(S," are just random strings Thunderbird creates and associates with a user. You\u2019ll find a couple of those in the Profile folder, more if you have set up more profiles. Presumably renaming a folder in there would break things, so they went for a random string which doesn\u2019t need to be changed even if you rename the profile."),S.forEach(t),F=p(e),k=a(e,"P",{});var Ae=s(k);fe=h(Ae,"You need to quit Thunderbird on the target machine before you run the commands below"),Ae.forEach(t),G=p(e),T=a(e,"PRE",{class:!0});var je=s(T);je.forEach(t),W=p(e),_=a(e,"H2",{id:!0});var ye=s(_);x=a(ye,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ke=s(x);q=a(ke,"SPAN",{class:!0}),s(q).forEach(t),ke.forEach(t),ce=h(ye,"Conclusion"),ye.forEach(t),$=p(e),I=a(e,"P",{});var Ie=s(I);pe=h(Ie,"All said and done it\u2019s actually a quite simple procedure. The time consuming part is researching to confirm that\u2019s actually the way to do it."),Ie.forEach(t),this.h()},h(){d(M,"class","icon icon-link"),d(m,"aria-hidden","true"),d(m,"tabindex","-1"),d(m,"href","#surely-syncing-profiles-is-basic-functionality-which-is-baked-in-right"),d(u,"id","surely-syncing-profiles-is-basic-functionality-which-is-baked-in-right"),d(E,"href","https://bugzilla.mozilla.org/show_bug.cgi?id=446444"),d(P,"href","https://bugzilla.mozilla.org/show_bug.cgi?id=166842"),d(j,"class","icon icon-link"),d(v,"aria-hidden","true"),d(v,"tabindex","-1"),d(v,"href","#which-files-needs-to-be-copied-where-in-order-to-migrate-thunderbirds-message-filters"),d(g,"id","which-files-needs-to-be-copied-where-in-order-to-migrate-thunderbirds-message-filters"),d(T,"class","language-sh"),d(q,"class","icon icon-link"),d(x,"aria-hidden","true"),d(x,"tabindex","-1"),d(x,"href","#conclusion"),d(_,"id","conclusion")},m(e,r){n(e,u,r),i(u,m),i(m,M),i(u,K),n(e,O,r),n(e,y,r),i(y,Q),i(y,E),i(E,U),i(y,V),n(e,Y,r),n(e,b,r),i(b,X),i(b,P),i(P,ee),i(b,te),n(e,L,r),n(e,A,r),i(A,ie),n(e,N,r),n(e,g,r),i(g,v),i(v,j),i(g,re),n(e,H,r),n(e,w,r),i(w,oe),i(w,z),i(z,ae),i(w,se),n(e,R,r),n(e,f,r),i(f,ne),i(f,D),i(D,le),i(f,he),i(f,C),i(C,de),i(f,ue),n(e,F,r),n(e,k,r),i(k,fe),n(e,G,r),n(e,T,r),T.innerHTML=Me,n(e,W,r),n(e,_,r),i(_,x),i(x,q),i(_,ce),n(e,$,r),n(e,I,r),i(I,pe)},p:be,i:be,o:be,d(e){e&&t(u),e&&t(O),e&&t(y),e&&t(Y),e&&t(b),e&&t(L),e&&t(A),e&&t(N),e&&t(g),e&&t(H),e&&t(w),e&&t(R),e&&t(f),e&&t(F),e&&t(k),e&&t(G),e&&t(T),e&&t(W),e&&t(_),e&&t($),e&&t(I)}}}const Ye={excerpt:"Thunderbird doesn't sync message filters. Its roots are from ancient times, before distributed computing was prevalent. If you want to copy your filters from one machine to another you have to do it the old-fashioned way, by copying config files",date:"2022-06-20T00:00:00.000Z",draft:!1,archived:!1,title:"Migrating Thunderbird message filters from another machine",tags:["thunderbird"]};class Le extends ze{constructor(u){super(),De(this,u,null,qe,Ce,{})}}export{Le as default,Ye as metadata};