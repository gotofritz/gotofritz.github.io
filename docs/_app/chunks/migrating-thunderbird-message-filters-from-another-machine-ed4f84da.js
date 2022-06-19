import{S as ke,i as Ie,s as Me,e as r,t as l,k as c,c as o,a as s,d as t,h as d,m as p,b as h,g as n,I as i,E as fe}from"./index-6e518972.js";function Se(Ee){let f,b,M,Z,q,m,B,E,J,K,L,y,Q,P,U,V,N,A,X,H,g,w,S,ee,Y,u,te,z,ie,ae,D,re,oe,C,se,O,k,ne,R,x,Pe=`<code class="language-sh"># source machine, the one with the filters
$ cp ~/Library/Thunderbird/Profiles/e8fiz6tv.default-release/ImapMail/imap.gmail.com/msgFilterRules.dat \\
  ~/Dropbox

# target mchine, the one where I want to copy the filters to
$ mv ~/Dropbox/msgFilterRules.dat \\
  ~/Library/Thunderbird/Profiles/j41re1op.default-release/ImapMail/imap.gmail.com/</code>`,F,v,_,j,le,G,I,de;return{c(){f=r("h2"),b=r("a"),M=r("span"),Z=l("Surely syncing profiles is basic functionality which is going to be baked in, right?"),q=c(),m=r("p"),B=l("Don\u2019t bet on it. There\u2019s "),E=r("a"),J=l("this unresolved issue from 14 years ago"),K=l(".. And to be fair, syncing requires some sort of distributed infrastructure. Thunderbird is no longer under the Mozilla umbrella, it\u2019s run by volunteers. Syncing across devices is not a realistic expectation."),L=c(),y=r("p"),Q=l("A more realistic expectations would be the ability to export and import filters. That\u2019s "),P=r("a"),U=l("been raised 20 ago already"),V=l("\u2026 and there hasn\u2019t been any activity whatsoever on it. The only solution offered a plugin abandoned 12 years ago. So it\u2019s fair to say it\u2019s not going to happen."),N=c(),A=r("p"),X=l("The only way then, is to get that CLI out and start copying files."),H=c(),g=r("h2"),w=r("a"),S=r("span"),ee=l("Which files needs to be copied where in order to migrate Thunderbird\u2019s message filters?"),Y=c(),u=r("p"),te=l("I do it via Dropbox, but of course you can use any intermediate storage of your choice. The following works for my GMail folders, but the same idea works if you are using IMAP folders. Note that "),z=r("code"),ie=l("e8fiz6tv"),ae=l(" and "),D=r("code"),re=l("j41re1op"),oe=l(" are just random strings Thunderbird creates and associates with a user. Presumably renaming a folder in the settings would break things, so they went for a random string which doesn\u2019t need to be changed even if you rename the profile. You\u2019ll find a couple of those in the Profile folder. If you didn\u2019t do anything special and are just using the standard Thunderbird Profile, then the one you want is the one that ends with "),C=r("code"),se=l("xxxx.default-release"),O=c(),k=r("p"),ne=l("You need to quit Thunderbird on the target machine before you run the commands below"),R=c(),x=r("pre"),F=c(),v=r("h2"),_=r("a"),j=r("span"),le=l("Conclusion"),G=c(),I=r("p"),de=l("All said and done it\u2019s actually a quite simple procedure. The time consuming part is researching to confirm that\u2019s actually the way to do it."),this.h()},l(e){f=o(e,"H2",{id:!0});var a=s(f);b=o(a,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ce=s(b);M=o(ce,"SPAN",{class:!0}),s(M).forEach(t),ce.forEach(t),Z=d(a,"Surely syncing profiles is basic functionality which is going to be baked in, right?"),a.forEach(t),q=p(e),m=o(e,"P",{});var W=s(m);B=d(W,"Don\u2019t bet on it. There\u2019s "),E=o(W,"A",{href:!0});var pe=s(E);J=d(pe,"this unresolved issue from 14 years ago"),pe.forEach(t),K=d(W,".. And to be fair, syncing requires some sort of distributed infrastructure. Thunderbird is no longer under the Mozilla umbrella, it\u2019s run by volunteers. Syncing across devices is not a realistic expectation."),W.forEach(t),L=p(e),y=o(e,"P",{});var $=s(y);Q=d($,"A more realistic expectations would be the ability to export and import filters. That\u2019s "),P=o($,"A",{href:!0});var be=s(P);U=d(be,"been raised 20 ago already"),be.forEach(t),V=d($,"\u2026 and there hasn\u2019t been any activity whatsoever on it. The only solution offered a plugin abandoned 12 years ago. So it\u2019s fair to say it\u2019s not going to happen."),$.forEach(t),N=p(e),A=o(e,"P",{});var me=s(A);X=d(me,"The only way then, is to get that CLI out and start copying files."),me.forEach(t),H=p(e),g=o(e,"H2",{id:!0});var he=s(g);w=o(he,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ye=s(w);S=o(ye,"SPAN",{class:!0}),s(S).forEach(t),ye.forEach(t),ee=d(he,"Which files needs to be copied where in order to migrate Thunderbird\u2019s message filters?"),he.forEach(t),Y=p(e),u=o(e,"P",{});var T=s(u);te=d(T,"I do it via Dropbox, but of course you can use any intermediate storage of your choice. The following works for my GMail folders, but the same idea works if you are using IMAP folders. Note that "),z=o(T,"CODE",{});var ge=s(z);ie=d(ge,"e8fiz6tv"),ge.forEach(t),ae=d(T," and "),D=o(T,"CODE",{});var we=s(D);re=d(we,"j41re1op"),we.forEach(t),oe=d(T," are just random strings Thunderbird creates and associates with a user. Presumably renaming a folder in the settings would break things, so they went for a random string which doesn\u2019t need to be changed even if you rename the profile. You\u2019ll find a couple of those in the Profile folder. If you didn\u2019t do anything special and are just using the standard Thunderbird Profile, then the one you want is the one that ends with "),C=o(T,"CODE",{});var ve=s(C);se=d(ve,"xxxx.default-release"),ve.forEach(t),T.forEach(t),O=p(e),k=o(e,"P",{});var _e=s(k);ne=d(_e,"You need to quit Thunderbird on the target machine before you run the commands below"),_e.forEach(t),R=p(e),x=o(e,"PRE",{class:!0});var Ae=s(x);Ae.forEach(t),F=p(e),v=o(e,"H2",{id:!0});var ue=s(v);_=o(ue,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var xe=s(_);j=o(xe,"SPAN",{class:!0}),s(j).forEach(t),xe.forEach(t),le=d(ue,"Conclusion"),ue.forEach(t),G=p(e),I=o(e,"P",{});var Te=s(I);de=d(Te,"All said and done it\u2019s actually a quite simple procedure. The time consuming part is researching to confirm that\u2019s actually the way to do it."),Te.forEach(t),this.h()},h(){h(M,"class","icon icon-link"),h(b,"aria-hidden","true"),h(b,"tabindex","-1"),h(b,"href","#surely-syncing-profiles-is-basic-functionality-which-is-going-to-be-baked-in-right"),h(f,"id","surely-syncing-profiles-is-basic-functionality-which-is-going-to-be-baked-in-right"),h(E,"href","https://bugzilla.mozilla.org/show_bug.cgi?id=446444"),h(P,"href","https://bugzilla.mozilla.org/show_bug.cgi?id=166842"),h(S,"class","icon icon-link"),h(w,"aria-hidden","true"),h(w,"tabindex","-1"),h(w,"href","#which-files-needs-to-be-copied-where-in-order-to-migrate-thunderbirds-message-filters"),h(g,"id","which-files-needs-to-be-copied-where-in-order-to-migrate-thunderbirds-message-filters"),h(x,"class","language-sh"),h(j,"class","icon icon-link"),h(_,"aria-hidden","true"),h(_,"tabindex","-1"),h(_,"href","#conclusion"),h(v,"id","conclusion")},m(e,a){n(e,f,a),i(f,b),i(b,M),i(f,Z),n(e,q,a),n(e,m,a),i(m,B),i(m,E),i(E,J),i(m,K),n(e,L,a),n(e,y,a),i(y,Q),i(y,P),i(P,U),i(y,V),n(e,N,a),n(e,A,a),i(A,X),n(e,H,a),n(e,g,a),i(g,w),i(w,S),i(g,ee),n(e,Y,a),n(e,u,a),i(u,te),i(u,z),i(z,ie),i(u,ae),i(u,D),i(D,re),i(u,oe),i(u,C),i(C,se),n(e,O,a),n(e,k,a),i(k,ne),n(e,R,a),n(e,x,a),x.innerHTML=Pe,n(e,F,a),n(e,v,a),i(v,_),i(_,j),i(v,le),n(e,G,a),n(e,I,a),i(I,de)},p:fe,i:fe,o:fe,d(e){e&&t(f),e&&t(q),e&&t(m),e&&t(L),e&&t(y),e&&t(N),e&&t(A),e&&t(H),e&&t(g),e&&t(Y),e&&t(u),e&&t(O),e&&t(k),e&&t(R),e&&t(x),e&&t(F),e&&t(v),e&&t(G),e&&t(I)}}}const De={excerpt:"Thunderbird doesn't sync message filters. Its roots are from ancient times, before distributed computing was prevalent. If you want to copy your filters from one machine to another you have to do it the old-fashioned way, by copying setting files",date:"2022-06-20T00:00:00.000Z",draft:!1,archived:!1,title:"Migrating Thunderbird message filters from another machine",tags:["thunderbird"]};class Ce extends ke{constructor(f){super(),Ie(this,f,null,Se,Me,{})}}export{Ce as default,De as metadata};