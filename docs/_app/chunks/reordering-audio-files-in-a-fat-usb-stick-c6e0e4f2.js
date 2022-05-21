import{S as Yo,i as Wo,s as qo,e as a,t as r,j as p,c as l,a as i,g as n,d as t,l as d,b as f,f as u,F as o,I as qt}from"./vendor-f15b48c1.js";function Go(Co){let w,U,Ge,we,j,Xe,Ee,V,Ze,ke,c,ze,ee,Je,Ke,te,Qe,$e,oe,ge,et,se,tt,ot,ae,st,at,le,lt,it,ye,N,rt,_e,b,Y,nt,be,W,ut,Ie,I,q,ft,Te,G,pt,Se,T,Fo=`<code class="language-bash"><span class="token operator">></span> brew <span class="token function">install</span> fatsort
<span class="token operator">==</span><span class="token operator">></span> Downloading https://ghcr.io/v2/homebrew/core/help2man/manifests/1.49.1
<span class="token punctuation">..</span>.</code>`,De,S,X,dt,Ae,m,ct,ie,ht,mt,re,vt,wt,Be,D,xo=`<code class="language-bash"><span class="token operator">></span> fatsort /Volumes/DIE_DREI
device_open: Is a directory<span class="token operator">!</span>
openFileSystem: Is a directory<span class="token operator">!</span>
sortFileSystem: Failed to <span class="token function">open</span> <span class="token function">file</span> system<span class="token operator">!</span>
main: Failed to <span class="token function">sort</span> <span class="token function">file</span> system<span class="token operator">!</span></code>`,Oe,v,Et,ne,kt,yt,ue,_t,bt,Pe,A,Ro=`<code class="language-bash"><span class="token operator">></span> <span class="token function">mount</span>
 /dev/disk1s5s1 on / <span class="token punctuation">(</span>apfs, sealed, local, read-only, journaled<span class="token punctuation">)</span>
devfs on /dev <span class="token punctuation">(</span>devfs, local, nobrowse<span class="token punctuation">)</span>
/dev/disk1s2 on /System/Volumes/Preboot <span class="token punctuation">(</span>apfs, local, journaled, nobrowse<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
/dev/disk5s1 on /Volumes/DIE_DREI <span class="token punctuation">(</span>msdos, local, nodev, nosuid, noowners<span class="token punctuation">)</span></code>`,Ce,y,It,fe,Tt,St,Fe,B,Z,Dt,xe,E,pe,At,Bt,de,Ot,Pt,Re,O,Ho=`<code class="language-bash"><span class="token operator">></span>  <span class="token function">sudo</span> diskutil unmount /Volumes/DIE_DREI
Password:
 Volume DIE_DREI on disk5s1 unmounted</code>`,He,P,z,Ct,Le,J,Ft,Me,C,Lo=`<code class="language-bash"><span class="token operator">></span> <span class="token function">sudo</span> fatsort /dev/disk5s
File system: FAT32.

Sorting directory /
<span class="token punctuation">..</span>.
Directory reordered. Writing changes.</code>`,Ue,F,K,xt,je,k,Rt,ce,Ht,Lt,x,Mt,Ve,R,Q,Ut,Ne,_,he,H,jt,Vt,L,Nt,M,Yt,Wt;return{c(){w=a("h2"),U=a("a"),Ge=r("FAT formatting"),we=p(),j=a("p"),Xe=r("I use Macs, and have no use for the FAT system. But it is the most widely supported by consumer devices like my SONY CD/MP3 player, for example. So i have no choice."),Ee=p(),V=a("p"),Ze=r("Those devices play back songs in date creation order. That would be the creation time on the stick; i.e., the time one started transferring them to the stick. Your typical laptop copies a few of these files in parallel. So one never knows what those creation times might be. This is why they get jumbled up."),ke=p(),c=a("p"),ze=r("One solution could be to write a little script to change those times after copying those files. It could traverse the directory structure of the stick, and use the bash command "),ee=a("code"),Je=r("touch"),Ke=r(". Or its python version. But it turns out neither works well on FAT. The python version of touch, "),te=a("code"),Qe=r("os.utime"),$e=r(", doesn\u2019t handle creation time. There are extensions which seem would work well, like "),oe=a("code"),ge=r("pywintypes"),et=r(", "),se=a("code"),tt=r("win32file"),ot=r(", "),ae=a("code"),st=r("wintypes"),at=r(" or "),le=a("code"),lt=r("win32-setctime"),it=r(". But they rely on C executables that only run on Windows."),ye=p(),N=a("p"),rt=r("A better solution would be to write a script that copies the files one at the time. With a little pause to make sure the creation times are in order. That should work. But it would make copying files last much longer."),_e=p(),b=a("h2"),Y=a("a"),nt=r("Enter fatsort"),be=p(),W=a("p"),ut=r("Luckily there is a C utility that does the job quite well. And there is a precompiled version for homebrew, the standard installer for OS X."),Ie=p(),I=a("h3"),q=a("a"),ft=r("Step 1: install it"),Te=p(),G=a("p"),pt=r("Your typical homebrew installation"),Se=p(),T=a("pre"),De=p(),S=a("h3"),X=a("a"),dt=r("Step 2: find out where the drive is mounted"),Ae=p(),m=a("p"),ct=r("The first instinct is to run it on the drive as it appears in Finder, i.e. "),ie=a("code"),ht=r("/Volumes/--SOMETHING--"),mt=r(". So for my USB stick, called "),re=a("code"),vt=r("DIE_DREI"),wt=r(", it would be like in the command below. But that turns out to be too easy"),Be=p(),D=a("pre"),Oe=p(),v=a("p"),Et=r("Instead I needed to find out what directory the USB device is "),ne=a("em"),kt=r("mounted to"),yt=r(". There is a handy command for that, "),ue=a("code"),_t=r("mount"),bt=r(". So step 2 goes"),Pe=p(),A=a("pre"),Ce=p(),y=a("p"),It=r("It\u2019s "),fe=a("code"),Tt=r("/dev/disk5s1"),St=r(" I need to run fatsort on, not /Volumes/DIE_DREI."),Fe=p(),B=a("h3"),Z=a("a"),Dt=r("Step 3: unmount the drive"),xe=p(),E=a("p"),pe=a("code"),At=r("fatsort"),Bt=r(" doesn\u2019t work on the USB stick if it\u2019s mounted. I didn\u2019t even know a device\u2019s content would be available even after unmounted! TIL. To unmount and run the next steps I will need "),de=a("code"),Ot=r("sudo"),Pt=r(" to gain superuser permissions"),Re=p(),O=a("pre"),He=p(),P=a("h3"),z=a("a"),Ct=r("Step 4: reorder the files"),Le=p(),J=a("p"),Ft=r("Now I am ready to reorder the files"),Me=p(),C=a("pre"),Ue=p(),F=a("h2"),K=a("a"),xt=r("And that was it."),je=p(),k=a("p"),Rt=r("It only takes a few seconds. It\u2019s a great little tool. Thanks Boris! If you enter "),ce=a("code"),Ht=r("fatsort -h"),Lt=r(" you can "),x=a("a"),Mt=r("see some of the options you can pass to it"),Ve=p(),R=a("h2"),Q=a("a"),Ut=r("Prior art"),Ne=p(),_=a("ul"),he=a("li"),H=a("a"),jt=r("fatsort homepage"),Vt=p(),L=a("li"),Nt=r("I found "),M=a("a"),Yt=r("useful information about fatsort"),Wt=r(" in a blog called \u2018Unfinished Bitness\u2019"),this.h()},l(e){w=l(e,"H2",{id:!0});var s=i(w);U=l(s,"A",{href:!0});var Gt=i(U);Ge=n(Gt,"FAT formatting"),Gt.forEach(t),s.forEach(t),we=d(e),j=l(e,"P",{});var Xt=i(j);Xe=n(Xt,"I use Macs, and have no use for the FAT system. But it is the most widely supported by consumer devices like my SONY CD/MP3 player, for example. So i have no choice."),Xt.forEach(t),Ee=d(e),V=l(e,"P",{});var Zt=i(V);Ze=n(Zt,"Those devices play back songs in date creation order. That would be the creation time on the stick; i.e., the time one started transferring them to the stick. Your typical laptop copies a few of these files in parallel. So one never knows what those creation times might be. This is why they get jumbled up."),Zt.forEach(t),ke=d(e),c=l(e,"P",{});var h=i(c);ze=n(h,"One solution could be to write a little script to change those times after copying those files. It could traverse the directory structure of the stick, and use the bash command "),ee=l(h,"CODE",{});var zt=i(ee);Je=n(zt,"touch"),zt.forEach(t),Ke=n(h,". Or its python version. But it turns out neither works well on FAT. The python version of touch, "),te=l(h,"CODE",{});var Jt=i(te);Qe=n(Jt,"os.utime"),Jt.forEach(t),$e=n(h,", doesn\u2019t handle creation time. There are extensions which seem would work well, like "),oe=l(h,"CODE",{});var Kt=i(oe);ge=n(Kt,"pywintypes"),Kt.forEach(t),et=n(h,", "),se=l(h,"CODE",{});var Qt=i(se);tt=n(Qt,"win32file"),Qt.forEach(t),ot=n(h,", "),ae=l(h,"CODE",{});var $t=i(ae);st=n($t,"wintypes"),$t.forEach(t),at=n(h," or "),le=l(h,"CODE",{});var gt=i(le);lt=n(gt,"win32-setctime"),gt.forEach(t),it=n(h,". But they rely on C executables that only run on Windows."),h.forEach(t),ye=d(e),N=l(e,"P",{});var eo=i(N);rt=n(eo,"A better solution would be to write a script that copies the files one at the time. With a little pause to make sure the creation times are in order. That should work. But it would make copying files last much longer."),eo.forEach(t),_e=d(e),b=l(e,"H2",{id:!0});var to=i(b);Y=l(to,"A",{href:!0});var oo=i(Y);nt=n(oo,"Enter fatsort"),oo.forEach(t),to.forEach(t),be=d(e),W=l(e,"P",{});var so=i(W);ut=n(so,"Luckily there is a C utility that does the job quite well. And there is a precompiled version for homebrew, the standard installer for OS X."),so.forEach(t),Ie=d(e),I=l(e,"H3",{id:!0});var ao=i(I);q=l(ao,"A",{href:!0});var lo=i(q);ft=n(lo,"Step 1: install it"),lo.forEach(t),ao.forEach(t),Te=d(e),G=l(e,"P",{});var io=i(G);pt=n(io,"Your typical homebrew installation"),io.forEach(t),Se=d(e),T=l(e,"PRE",{class:!0});var Mo=i(T);Mo.forEach(t),De=d(e),S=l(e,"H3",{id:!0});var ro=i(S);X=l(ro,"A",{href:!0});var no=i(X);dt=n(no,"Step 2: find out where the drive is mounted"),no.forEach(t),ro.forEach(t),Ae=d(e),m=l(e,"P",{});var $=i(m);ct=n($,"The first instinct is to run it on the drive as it appears in Finder, i.e. "),ie=l($,"CODE",{});var uo=i(ie);ht=n(uo,"/Volumes/--SOMETHING--"),uo.forEach(t),mt=n($,". So for my USB stick, called "),re=l($,"CODE",{});var fo=i(re);vt=n(fo,"DIE_DREI"),fo.forEach(t),wt=n($,", it would be like in the command below. But that turns out to be too easy"),$.forEach(t),Be=d(e),D=l(e,"PRE",{class:!0});var Uo=i(D);Uo.forEach(t),Oe=d(e),v=l(e,"P",{});var g=i(v);Et=n(g,"Instead I needed to find out what directory the USB device is "),ne=l(g,"EM",{});var po=i(ne);kt=n(po,"mounted to"),po.forEach(t),yt=n(g,". There is a handy command for that, "),ue=l(g,"CODE",{});var co=i(ue);_t=n(co,"mount"),co.forEach(t),bt=n(g,". So step 2 goes"),g.forEach(t),Pe=d(e),A=l(e,"PRE",{class:!0});var jo=i(A);jo.forEach(t),Ce=d(e),y=l(e,"P",{});var Ye=i(y);It=n(Ye,"It\u2019s "),fe=l(Ye,"CODE",{});var ho=i(fe);Tt=n(ho,"/dev/disk5s1"),ho.forEach(t),St=n(Ye," I need to run fatsort on, not /Volumes/DIE_DREI."),Ye.forEach(t),Fe=d(e),B=l(e,"H3",{id:!0});var mo=i(B);Z=l(mo,"A",{href:!0});var vo=i(Z);Dt=n(vo,"Step 3: unmount the drive"),vo.forEach(t),mo.forEach(t),xe=d(e),E=l(e,"P",{});var me=i(E);pe=l(me,"CODE",{});var wo=i(pe);At=n(wo,"fatsort"),wo.forEach(t),Bt=n(me," doesn\u2019t work on the USB stick if it\u2019s mounted. I didn\u2019t even know a device\u2019s content would be available even after unmounted! TIL. To unmount and run the next steps I will need "),de=l(me,"CODE",{});var Eo=i(de);Ot=n(Eo,"sudo"),Eo.forEach(t),Pt=n(me," to gain superuser permissions"),me.forEach(t),Re=d(e),O=l(e,"PRE",{class:!0});var Vo=i(O);Vo.forEach(t),He=d(e),P=l(e,"H3",{id:!0});var ko=i(P);z=l(ko,"A",{href:!0});var yo=i(z);Ct=n(yo,"Step 4: reorder the files"),yo.forEach(t),ko.forEach(t),Le=d(e),J=l(e,"P",{});var _o=i(J);Ft=n(_o,"Now I am ready to reorder the files"),_o.forEach(t),Me=d(e),C=l(e,"PRE",{class:!0});var No=i(C);No.forEach(t),Ue=d(e),F=l(e,"H2",{id:!0});var bo=i(F);K=l(bo,"A",{href:!0});var Io=i(K);xt=n(Io,"And that was it."),Io.forEach(t),bo.forEach(t),je=d(e),k=l(e,"P",{});var ve=i(k);Rt=n(ve,"It only takes a few seconds. It\u2019s a great little tool. Thanks Boris! If you enter "),ce=l(ve,"CODE",{});var To=i(ce);Ht=n(To,"fatsort -h"),To.forEach(t),Lt=n(ve," you can "),x=l(ve,"A",{href:!0,rel:!0});var So=i(x);Mt=n(So,"see some of the options you can pass to it"),So.forEach(t),ve.forEach(t),Ve=d(e),R=l(e,"H2",{id:!0});var Do=i(R);Q=l(Do,"A",{href:!0});var Ao=i(Q);Ut=n(Ao,"Prior art"),Ao.forEach(t),Do.forEach(t),Ne=d(e),_=l(e,"UL",{});var We=i(_);he=l(We,"LI",{});var Bo=i(he);H=l(Bo,"A",{href:!0,rel:!0});var Oo=i(H);jt=n(Oo,"fatsort homepage"),Oo.forEach(t),Bo.forEach(t),Vt=d(We),L=l(We,"LI",{});var qe=i(L);Nt=n(qe,"I found "),M=l(qe,"A",{href:!0,rel:!0});var Po=i(M);Yt=n(Po,"useful information about fatsort"),Po.forEach(t),Wt=n(qe," in a blog called \u2018Unfinished Bitness\u2019"),qe.forEach(t),We.forEach(t),this.h()},h(){f(U,"href","#fat-formatting"),f(w,"id","fat-formatting"),f(Y,"href","#enter-fatsort"),f(b,"id","enter-fatsort"),f(q,"href","#step-1-install-it"),f(I,"id","step-1-install-it"),f(T,"class","language-bash"),f(X,"href","#step-2-find-out-where-the-drive-is-mounted"),f(S,"id","step-2-find-out-where-the-drive-is-mounted"),f(D,"class","language-bash"),f(A,"class","language-bash"),f(Z,"href","#step-3-unmount-the-drive"),f(B,"id","step-3-unmount-the-drive"),f(O,"class","language-bash"),f(z,"href","#step-4-reorder-the-files"),f(P,"id","step-4-reorder-the-files"),f(C,"class","language-bash"),f(K,"href","#and-that-was-it"),f(F,"id","and-that-was-it"),f(x,"href","https://fatsort.sourceforge.io/fatsort.1.html"),f(x,"rel","nofollow"),f(Q,"href","#prior-art"),f(R,"id","prior-art"),f(H,"href","https://fatsort.sourceforge.io/"),f(H,"rel","nofollow"),f(M,"href","https://unfinishedbitness.info/2014/04/16/alphabetically-sorting-fat-usb-drives-with-mac-osx/"),f(M,"rel","nofollow")},m(e,s){u(e,w,s),o(w,U),o(U,Ge),u(e,we,s),u(e,j,s),o(j,Xe),u(e,Ee,s),u(e,V,s),o(V,Ze),u(e,ke,s),u(e,c,s),o(c,ze),o(c,ee),o(ee,Je),o(c,Ke),o(c,te),o(te,Qe),o(c,$e),o(c,oe),o(oe,ge),o(c,et),o(c,se),o(se,tt),o(c,ot),o(c,ae),o(ae,st),o(c,at),o(c,le),o(le,lt),o(c,it),u(e,ye,s),u(e,N,s),o(N,rt),u(e,_e,s),u(e,b,s),o(b,Y),o(Y,nt),u(e,be,s),u(e,W,s),o(W,ut),u(e,Ie,s),u(e,I,s),o(I,q),o(q,ft),u(e,Te,s),u(e,G,s),o(G,pt),u(e,Se,s),u(e,T,s),T.innerHTML=Fo,u(e,De,s),u(e,S,s),o(S,X),o(X,dt),u(e,Ae,s),u(e,m,s),o(m,ct),o(m,ie),o(ie,ht),o(m,mt),o(m,re),o(re,vt),o(m,wt),u(e,Be,s),u(e,D,s),D.innerHTML=xo,u(e,Oe,s),u(e,v,s),o(v,Et),o(v,ne),o(ne,kt),o(v,yt),o(v,ue),o(ue,_t),o(v,bt),u(e,Pe,s),u(e,A,s),A.innerHTML=Ro,u(e,Ce,s),u(e,y,s),o(y,It),o(y,fe),o(fe,Tt),o(y,St),u(e,Fe,s),u(e,B,s),o(B,Z),o(Z,Dt),u(e,xe,s),u(e,E,s),o(E,pe),o(pe,At),o(E,Bt),o(E,de),o(de,Ot),o(E,Pt),u(e,Re,s),u(e,O,s),O.innerHTML=Ho,u(e,He,s),u(e,P,s),o(P,z),o(z,Ct),u(e,Le,s),u(e,J,s),o(J,Ft),u(e,Me,s),u(e,C,s),C.innerHTML=Lo,u(e,Ue,s),u(e,F,s),o(F,K),o(K,xt),u(e,je,s),u(e,k,s),o(k,Rt),o(k,ce),o(ce,Ht),o(k,Lt),o(k,x),o(x,Mt),u(e,Ve,s),u(e,R,s),o(R,Q),o(Q,Ut),u(e,Ne,s),u(e,_,s),o(_,he),o(he,H),o(H,jt),o(_,Vt),o(_,L),o(L,Nt),o(L,M),o(M,Yt),o(L,Wt)},p:qt,i:qt,o:qt,d(e){e&&t(w),e&&t(we),e&&t(j),e&&t(Ee),e&&t(V),e&&t(ke),e&&t(c),e&&t(ye),e&&t(N),e&&t(_e),e&&t(b),e&&t(be),e&&t(W),e&&t(Ie),e&&t(I),e&&t(Te),e&&t(G),e&&t(Se),e&&t(T),e&&t(De),e&&t(S),e&&t(Ae),e&&t(m),e&&t(Be),e&&t(D),e&&t(Oe),e&&t(v),e&&t(Pe),e&&t(A),e&&t(Ce),e&&t(y),e&&t(Fe),e&&t(B),e&&t(xe),e&&t(E),e&&t(Re),e&&t(O),e&&t(He),e&&t(P),e&&t(Le),e&&t(J),e&&t(Me),e&&t(C),e&&t(Ue),e&&t(F),e&&t(je),e&&t(k),e&&t(Ve),e&&t(R),e&&t(Ne),e&&t(_)}}}const Zo={excerpt:'I copy audiobooks from CDs to USB sticks to play them in cars and random device like old radios. But often those devices play the files out of order. Reordering files in <abbr title="File Allocation Table">FAT</abbr> USB sticks is harder than I thought. Luckily, a chap by the name of Boris Leidner has written a useful tool for that.',date:"2022-04-01T00:00:00.000Z",published:!0,archived:!1,prev:"fixing-autoformatting-django-templates-in-visual-studio-code",next:"blog-with-sveltekit-and-markdown",title:"Reordering audio files in a FAT USB stick",tags:["tools"]};class zo extends Yo{constructor(w){super();Wo(this,w,null,Go,qo,{})}}export{zo as default,Zo as metadata};