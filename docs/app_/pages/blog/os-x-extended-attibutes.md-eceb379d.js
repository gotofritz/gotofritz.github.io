import{S as Ps,i as Ds,s as Fs,D as ss,x as As,y as Is,z as Hs,A as Ls,B as cs,r as $s,p as Ms,C as Rs,L as us,e as o,k as c,t as d,c as l,a as r,d as a,m as u,h,b as x,g as e,F as _,n as Os}from"../../chunks/index-889cf753.js";import{P as Ss}from"../../chunks/_post-5ef2f492.js";import"../../chunks/Header-15607706.js";function Xs(P){let t,b=`<code class="language-bash"><span class="token operator">></span> <span class="token function">ls</span> -al
-rw-r--r--@   <span class="token number">1</span> me  staff     <span class="token number">962</span> <span class="token number">22</span> Aug <span class="token number">22</span>:06 .bash_profile
drwxr-xr-x  <span class="token number">119</span> me  staff    <span class="token number">4046</span> <span class="token number">28</span> Jul <span class="token number">19</span>:03 Bluetooth
drwx------+  <span class="token number">14</span> me  staff     <span class="token number">476</span> <span class="token number">25</span> Aug <span class="token number">12</span>:18 Desktop
drwx------+  <span class="token number">14</span> me  staff     <span class="token number">476</span> <span class="token number">25</span> Aug 09:42 Documents
drwx------+   <span class="token number">7</span> me  staff     <span class="token number">238</span> <span class="token number">25</span> Aug 09:42 Downloads
drwx------@  <span class="token number">20</span> me  staff     <span class="token number">680</span> <span class="token number">25</span> Aug 09:42 Dropbox
drwxr-xr-x@  <span class="token number">20</span> me  staff     <span class="token number">680</span> <span class="token number">25</span> Aug 09:42 Google Drive</code>`,f,k,p,i,m,fs=`<code class="language-bash"><span class="token operator">></span> <span class="token function">ls</span> -al@
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
com.apple.FinderInfo      <span class="token number">32</span></code>`,M,D,z,R,w,ks=`<code class="language-bash"><span class="token operator">></span> xattr *
Dropbox: com.apple.FinderInfo
Google Drive: com.apple.FinderInfo</code>`,O,F,K,S,v,ms=`<code class="language-bash"><span class="token operator">></span> xattr -l *
Dropbox: com.apple.FinderInfo:
00000000  00 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000020
Google Drive: com.apple.FinderInfo:
00000000  00 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000020</code>`,X,A,Q,G,T,bs=`<code class="language-bash"><span class="token operator">></span> xattr -p com.apple.TextEncoding .bash_profile
UTF-8<span class="token punctuation">;</span><span class="token number">134217984</span></code>`,J,I,V,B,y,ds=`<code class="language-bash"><span class="token operator">></span> xattr -w <span class="token builtin class-name">test</span> <span class="token string">"what is this"</span> .bash_profile
<span class="token operator">></span> xattr -l .bash_profile
com.apple.FinderInfo:
00000000  <span class="token number">54</span> <span class="token number">45</span> <span class="token number">58</span> <span class="token number">54</span> 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span>TEXT<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000020
com.apple.TextEncoding: UTF-8<span class="token punctuation">;</span><span class="token number">134217984</span>
test: what is this</code>`,U,H,W,C,E,hs=`<code class="language-bash"><span class="token operator">></span> xattr -d <span class="token builtin class-name">test</span> .bash_profile
<span class="token operator">></span> xattr -l .bash_profile
com.apple.FinderInfo:
00000000  <span class="token number">54</span> <span class="token number">45</span> <span class="token number">58</span> <span class="token number">54</span> 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span>TEXT<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  <span class="token operator">|</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token operator">|</span>
00000020
com.apple.TextEncoding: UTF-8<span class="token punctuation">;</span><span class="token number">134217984</span></code>`,N,L,Y,j,g,xs='<code class="language-bash"><span class="token operator">></span> xattr -d com.apple.FinderInfo *</code>',q,$,Z;return{c(){t=o("pre"),f=c(),k=o("p"),p=d("The @ sign you get in the listing with the -l option tells you that that file or folder has some extended properties."),i=c(),m=o("pre"),M=c(),D=o("p"),z=d("On OS X the ls command has an @ option, which lists the extended property for each entry, if any."),R=c(),w=o("pre"),O=c(),F=o("p"),K=d("The xattr command lets you interact with the extended attributes. Just running it by itself it will list them all, Note that it doesn\u2019t handle hidden files though."),S=c(),v=o("pre"),X=c(),A=o("p"),Q=d("The -l flag lets shows the content for all extended properties for a file. They are not always hex data."),G=c(),T=o("pre"),J=c(),I=o("p"),V=d("The -p flag lists the content of a specific extended attribute (in this case, com.apple.TextEncoding) for a specific file (in this case .bash_profile). This particular attribute is a string."),B=c(),y=o("pre"),U=c(),H=o("p"),W=d("-w allows you create your own extended attributes. Here one is written and then read out."),C=c(),E=o("pre"),N=c(),L=o("p"),Y=d("-d complements -w by allowing one to delete an extended attribute."),j=c(),g=o("pre"),q=c(),$=o("p"),Z=d("This allows you to delete all the com.apple.FinderInfo extended attributes from all the files in a folder"),this.h()},l(s){t=l(s,"PRE",{class:!0});var n=r(t);n.forEach(a),f=u(s),k=l(s,"P",{});var as=r(k);p=h(as,"The @ sign you get in the listing with the -l option tells you that that file or folder has some extended properties."),as.forEach(a),i=u(s),m=l(s,"PRE",{class:!0});var _s=r(m);_s.forEach(a),M=u(s),D=l(s,"P",{});var ns=r(D);z=h(ns,"On OS X the ls command has an @ option, which lists the extended property for each entry, if any."),ns.forEach(a),R=u(s),w=l(s,"PRE",{class:!0});var ws=r(w);ws.forEach(a),O=u(s),F=l(s,"P",{});var es=r(F);K=h(es,"The xattr command lets you interact with the extended attributes. Just running it by itself it will list them all, Note that it doesn\u2019t handle hidden files though."),es.forEach(a),S=u(s),v=l(s,"PRE",{class:!0});var vs=r(v);vs.forEach(a),X=u(s),A=l(s,"P",{});var ts=r(A);Q=h(ts,"The -l flag lets shows the content for all extended properties for a file. They are not always hex data."),ts.forEach(a),G=u(s),T=l(s,"PRE",{class:!0});var Ts=r(T);Ts.forEach(a),J=u(s),I=l(s,"P",{});var ps=r(I);V=h(ps,"The -p flag lists the content of a specific extended attribute (in this case, com.apple.TextEncoding) for a specific file (in this case .bash_profile). This particular attribute is a string."),ps.forEach(a),B=u(s),y=l(s,"PRE",{class:!0});var ys=r(y);ys.forEach(a),U=u(s),H=l(s,"P",{});var os=r(H);W=h(os,"-w allows you create your own extended attributes. Here one is written and then read out."),os.forEach(a),C=u(s),E=l(s,"PRE",{class:!0});var Es=r(E);Es.forEach(a),N=u(s),L=l(s,"P",{});var ls=r(L);Y=h(ls,"-d complements -w by allowing one to delete an extended attribute."),ls.forEach(a),j=u(s),g=l(s,"PRE",{class:!0});var gs=r(g);gs.forEach(a),q=u(s),$=l(s,"P",{});var rs=r($);Z=h(rs,"This allows you to delete all the com.apple.FinderInfo extended attributes from all the files in a folder"),rs.forEach(a),this.h()},h(){x(t,"class","language-bash"),x(m,"class","language-bash"),x(w,"class","language-bash"),x(v,"class","language-bash"),x(T,"class","language-bash"),x(y,"class","language-bash"),x(E,"class","language-bash"),x(g,"class","language-bash")},m(s,n){e(s,t,n),t.innerHTML=b,e(s,f,n),e(s,k,n),_(k,p),e(s,i,n),e(s,m,n),m.innerHTML=fs,e(s,M,n),e(s,D,n),_(D,z),e(s,R,n),e(s,w,n),w.innerHTML=ks,e(s,O,n),e(s,F,n),_(F,K),e(s,S,n),e(s,v,n),v.innerHTML=ms,e(s,X,n),e(s,A,n),_(A,Q),e(s,G,n),e(s,T,n),T.innerHTML=bs,e(s,J,n),e(s,I,n),_(I,V),e(s,B,n),e(s,y,n),y.innerHTML=ds,e(s,U,n),e(s,H,n),_(H,W),e(s,C,n),e(s,E,n),E.innerHTML=hs,e(s,N,n),e(s,L,n),_(L,Y),e(s,j,n),e(s,g,n),g.innerHTML=xs,e(s,q,n),e(s,$,n),_($,Z)},p:Os,d(s){s&&a(t),s&&a(f),s&&a(k),s&&a(i),s&&a(m),s&&a(M),s&&a(D),s&&a(R),s&&a(w),s&&a(O),s&&a(F),s&&a(S),s&&a(v),s&&a(X),s&&a(A),s&&a(G),s&&a(T),s&&a(J),s&&a(I),s&&a(B),s&&a(y),s&&a(U),s&&a(H),s&&a(C),s&&a(E),s&&a(N),s&&a(L),s&&a(j),s&&a(g),s&&a(q),s&&a($)}}}function Gs(P){let t,b;const f=[P[0],is];let k={$$slots:{default:[Xs]},$$scope:{ctx:P}};for(let p=0;p<f.length;p+=1)k=ss(k,f[p]);return t=new Ss({props:k}),{c(){As(t.$$.fragment)},l(p){Is(t.$$.fragment,p)},m(p,i){Hs(t,p,i),b=!0},p(p,[i]){const m=i&1?Ls(f,[i&1&&cs(p[0]),i&0&&cs(is)]):{};i&2&&(m.$$scope={dirty:i,ctx:p}),t.$set(m)},i(p){b||($s(t.$$.fragment,p),b=!0)},o(p){Ms(t.$$.fragment,p),b=!1},d(p){Rs(t,p)}}}const is={excerpt:"Extended attributes store extra information about files in OS X. They replaced resource forks. Sometimes those extra hidden files confuse peripherals (e.g. mp3 players) that were not setup to deal with them. Here are some terminal commands to handle them.",date:"2012-08-25 13:55",title:"Dealing with extended attributes on OS X",prev:"simple-voice-recording-mac",next:"copying-files-matching-pattern-cpio",tags:["bash","os x"]};function Js(P,t,b){return P.$$set=f=>{b(0,t=ss(ss({},t),us(f)))},t=us(t),[t]}class Ns extends Ps{constructor(t){super(),Ds(this,t,Js,Gs,Fs,{})}}export{Ns as default,is as metadata};