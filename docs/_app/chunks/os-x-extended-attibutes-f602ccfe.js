import{S as Es,i as ys,s as gs,e as t,k as l,t as u,c as p,a as o,d as a,m as r,h as i,b as k,g as e,I as m,E as Z}from"./index-6e518972.js";function Ps(ls){let c,rs=`<code class="language-bash"><span class="token operator">></span> <span class="token function">ls</span> <span class="token parameter variable">-al</span>
-rw-r--r--@   <span class="token number">1</span> me  staff     <span class="token number">962</span> <span class="token number">22</span> Aug <span class="token number">22</span>:06 .bash_profile
drwxr-xr-x  <span class="token number">119</span> me  staff    <span class="token number">4046</span> <span class="token number">28</span> Jul <span class="token number">19</span>:03 Bluetooth
drwx------+  <span class="token number">14</span> me  staff     <span class="token number">476</span> <span class="token number">25</span> Aug <span class="token number">12</span>:18 Desktop
drwx------+  <span class="token number">14</span> me  staff     <span class="token number">476</span> <span class="token number">25</span> Aug 09:42 Documents
drwx------+   <span class="token number">7</span> me  staff     <span class="token number">238</span> <span class="token number">25</span> Aug 09:42 Downloads
drwx------@  <span class="token number">20</span> me  staff     <span class="token number">680</span> <span class="token number">25</span> Aug 09:42 Dropbox
drwxr-xr-x@  <span class="token number">20</span> me  staff     <span class="token number">680</span> <span class="token number">25</span> Aug 09:42 Google Drive</code>`,I,v,C,A,f,cs=`<code class="language-bash"><span class="token operator">></span> <span class="token function">ls</span> -al@
-rw-r--r--@   <span class="token number">1</span> me  staff     <span class="token number">962</span> <span class="token number">22</span> Aug <span class="token number">22</span>:06 .bash_profile
com.apple.FinderInfo      <span class="token number">32</span>
com.apple.TextEncoding      <span class="token number">15</span>
drwxr-xr-x  <span class="token number">119</span> me  staff    <span class="token number">4046</span> <span class="token number">28</span> Jul <span class="token number">19</span>:03 Bluetooth
drwx------+  <span class="token number">14</span> me  staff     <span class="token number">476</span> <span class="token number">25</span> Aug <span class="token number">12</span>:18 Desktop
drwx------+  <span class="token number">14</span> me  staff     <span class="token number">476</span> <span class="token number">25</span> Aug 09:42 Documents
drwx------+   <span class="token number">7</span> me  staff     <span class="token number">238</span> <span class="token number">25</span> Aug 09:42 Downloads
drwx------@  <span class="token number">20</span> me  staff     <span class="token number">680</span> <span class="token number">25</span> Aug 09:42 Dropbox
com.apple.FinderInfo      <span class="token number">32</span>
drwxr-xr-x@  <span class="token number">20</span> me  staff     <span class="token number">680</span> <span class="token number">25</span> Aug 09:42 Google Drive
com.apple.FinderInfo      <span class="token number">32</span></code>`,H,T,j,L,b,us=`<code class="language-bash"><span class="token operator">></span> xattr *
Dropbox: com.apple.FinderInfo
Google Drive: com.apple.FinderInfo</code>`,M,E,z,R,d,is=`<code class="language-bash"><span class="token operator">></span> xattr <span class="token parameter variable">-l</span> *
Dropbox: com.apple.FinderInfo:
00000000  00 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000020
Google Drive: com.apple.FinderInfo:
00000000  00 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000020</code>`,O,y,K,S,h,ks=`<code class="language-bash"><span class="token operator">></span> xattr <span class="token parameter variable">-p</span> com.apple.TextEncoding .bash_profile
UTF-8<span class="token punctuation">;</span><span class="token number">134217984</span></code>`,X,g,Q,G,x,ms=`<code class="language-bash"><span class="token operator">></span> xattr <span class="token parameter variable">-w</span> <span class="token builtin class-name">test</span> <span class="token string">"what is this"</span> .bash_profile
<span class="token operator">></span> xattr <span class="token parameter variable">-l</span> .bash_profile
com.apple.FinderInfo:
00000000  <span class="token number">54</span> <span class="token number">45</span> <span class="token number">58</span> <span class="token number">54</span> 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span>TEXT<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000020
com.apple.TextEncoding: UTF-8<span class="token punctuation">;</span><span class="token number">134217984</span>
test: what is this</code>`,J,P,V,U,w,fs=`<code class="language-bash"><span class="token operator">></span> xattr <span class="token parameter variable">-d</span> <span class="token builtin class-name">test</span> .bash_profile
<span class="token operator">></span> xattr <span class="token parameter variable">-l</span> .bash_profile
com.apple.FinderInfo:
00000000  <span class="token number">54</span> <span class="token number">45</span> <span class="token number">58</span> <span class="token number">54</span> 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span>TEXT<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000020
com.apple.TextEncoding: UTF-8<span class="token punctuation">;</span><span class="token number">134217984</span></code>`,B,D,W,N,_,bs='<code class="language-bash"><span class="token operator">></span> xattr <span class="token parameter variable">-d</span> com.apple.FinderInfo *</code>',q,F,Y;return{c(){c=t("pre"),I=l(),v=t("p"),C=u("The @ sign you get in the listing with the -l option tells you that that file or folder has some extended properties."),A=l(),f=t("pre"),H=l(),T=t("p"),j=u("On OS X the ls command has an @ option, which lists the extended property for each entry, if any."),L=l(),b=t("pre"),M=l(),E=t("p"),z=u("The xattr command lets you interact with the extended attributes. Just running it by itself it will list them all, Note that it doesn\u2019t handle hidden files though."),R=l(),d=t("pre"),O=l(),y=t("p"),K=u("The -l flag lets shows the content for all extended properties for a file. They are not always hex data."),S=l(),h=t("pre"),X=l(),g=t("p"),Q=u("The -p flag lists the content of a specific extended attribute (in this case, com.apple.TextEncoding) for a specific file (in this case .bash_profile). This particular attribute is a string."),G=l(),x=t("pre"),J=l(),P=t("p"),V=u("-w allows you create your own extended attributes. Here one is written and then read out."),U=l(),w=t("pre"),B=l(),D=t("p"),W=u("-d complements -w by allowing one to delete an extended attribute."),N=l(),_=t("pre"),q=l(),F=t("p"),Y=u("This allows you to delete all the com.apple.FinderInfo extended attributes from all the files in a folder"),this.h()},l(s){c=p(s,"PRE",{class:!0});var n=o(c);n.forEach(a),I=r(s),v=p(s,"P",{});var $=o(v);C=i($,"The @ sign you get in the listing with the -l option tells you that that file or folder has some extended properties."),$.forEach(a),A=r(s),f=p(s,"PRE",{class:!0});var ds=o(f);ds.forEach(a),H=r(s),T=p(s,"P",{});var ss=o(T);j=i(ss,"On OS X the ls command has an @ option, which lists the extended property for each entry, if any."),ss.forEach(a),L=r(s),b=p(s,"PRE",{class:!0});var hs=o(b);hs.forEach(a),M=r(s),E=p(s,"P",{});var as=o(E);z=i(as,"The xattr command lets you interact with the extended attributes. Just running it by itself it will list them all, Note that it doesn\u2019t handle hidden files though."),as.forEach(a),R=r(s),d=p(s,"PRE",{class:!0});var xs=o(d);xs.forEach(a),O=r(s),y=p(s,"P",{});var ns=o(y);K=i(ns,"The -l flag lets shows the content for all extended properties for a file. They are not always hex data."),ns.forEach(a),S=r(s),h=p(s,"PRE",{class:!0});var ws=o(h);ws.forEach(a),X=r(s),g=p(s,"P",{});var es=o(g);Q=i(es,"The -p flag lists the content of a specific extended attribute (in this case, com.apple.TextEncoding) for a specific file (in this case .bash_profile). This particular attribute is a string."),es.forEach(a),G=r(s),x=p(s,"PRE",{class:!0});var _s=o(x);_s.forEach(a),J=r(s),P=p(s,"P",{});var ts=o(P);V=i(ts,"-w allows you create your own extended attributes. Here one is written and then read out."),ts.forEach(a),U=r(s),w=p(s,"PRE",{class:!0});var vs=o(w);vs.forEach(a),B=r(s),D=p(s,"P",{});var ps=o(D);W=i(ps,"-d complements -w by allowing one to delete an extended attribute."),ps.forEach(a),N=r(s),_=p(s,"PRE",{class:!0});var Ts=o(_);Ts.forEach(a),q=r(s),F=p(s,"P",{});var os=o(F);Y=i(os,"This allows you to delete all the com.apple.FinderInfo extended attributes from all the files in a folder"),os.forEach(a),this.h()},h(){k(c,"class","language-bash"),k(f,"class","language-bash"),k(b,"class","language-bash"),k(d,"class","language-bash"),k(h,"class","language-bash"),k(x,"class","language-bash"),k(w,"class","language-bash"),k(_,"class","language-bash")},m(s,n){e(s,c,n),c.innerHTML=rs,e(s,I,n),e(s,v,n),m(v,C),e(s,A,n),e(s,f,n),f.innerHTML=cs,e(s,H,n),e(s,T,n),m(T,j),e(s,L,n),e(s,b,n),b.innerHTML=us,e(s,M,n),e(s,E,n),m(E,z),e(s,R,n),e(s,d,n),d.innerHTML=is,e(s,O,n),e(s,y,n),m(y,K),e(s,S,n),e(s,h,n),h.innerHTML=ks,e(s,X,n),e(s,g,n),m(g,Q),e(s,G,n),e(s,x,n),x.innerHTML=ms,e(s,J,n),e(s,P,n),m(P,V),e(s,U,n),e(s,w,n),w.innerHTML=fs,e(s,B,n),e(s,D,n),m(D,W),e(s,N,n),e(s,_,n),_.innerHTML=bs,e(s,q,n),e(s,F,n),m(F,Y)},p:Z,i:Z,o:Z,d(s){s&&a(c),s&&a(I),s&&a(v),s&&a(A),s&&a(f),s&&a(H),s&&a(T),s&&a(L),s&&a(b),s&&a(M),s&&a(E),s&&a(R),s&&a(d),s&&a(O),s&&a(y),s&&a(S),s&&a(h),s&&a(X),s&&a(g),s&&a(G),s&&a(x),s&&a(J),s&&a(P),s&&a(U),s&&a(w),s&&a(B),s&&a(D),s&&a(N),s&&a(_),s&&a(q),s&&a(F)}}}const Fs={excerpt:"Extended attributes store extra information about files in OS X. They replaced resource forks. Sometimes those extra hidden files confuse peripherals (e.g. mp3 players) that were not setup to deal with them. Here are some terminal commands to handle them.",date:"2012-08-25 13:55",title:"Dealing with extended attributes on OS X",tags:["bash","os x"]};class Is extends Es{constructor(c){super(),ys(this,c,null,Ps,gs,{})}}export{Is as default,Fs as metadata};