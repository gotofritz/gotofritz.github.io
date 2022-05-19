import{S as Zr,i as Gr,s as Jr,e as o,t as n,j as h,c as r,a as l,g as s,d as a,l as u,b as c,f as d,F as t,I as fo}from"./vendor-f15b48c1.js";function Kr(gr){let y,jt,I,Ot,gt,S,Ht,Mt,A,Ct,Nt,at,P,q,Xt,ot,T,qt,U,Bt,zt,rt,L,B,Ft,lt,j,Wt,$,Zt,nt,z,Gt,st,O,Hr='<code class="language-bash"><span class="token function">sudo</span> <span class="token function">install</span> -c -o  SHORTNAME <span class="token function">unrar</span> /usr/local/bin</code>',it,x,Jt,ee,Kt,Qt,dt,F,Vt,ht,w,te,Yt,ae,$t,oe,ea,re,ta,le,aa,ne,oa,se,ra,ie,la,de,na,he,sa,ue,ia,fe,da,ut,W,ha,ft,g,Mr=`<code class="language-bash"><span class="token builtin class-name">cd</span>
<span class="token function">unrar</span>
</code>`,ct,Z,ua,pt,b,ce,fa,pe,ca,we,pa,ye,wa,wt,H,G,ya,yt,k,ma,me,va,Ea,mt,M,Cr=`<code class="language-bash"><span class="token builtin class-name">cd</span> ~/Documents/extracted_files
<span class="token function">unrar</span> x ~/Downloads/test-archive.rar
</code>`,vt,J,ba,Et,m,ve,_a,Ee,Da,be,Ta,_e,xa,De,ka,Te,Ra,xe,Ia,ke,Sa,bt,K,Aa,_t,C,Nr='<code class="language-bash"><span class="token function">unrar</span> x -pSECRET -y archive.rar</code>',Dt,Q,Pa,Tt,v,Re,Ua,Ie,La,Se,ja,Ae,Oa,Pe,ga,Ue,Ha,Le,Ma,je,Ca,xt,N,V,Na,kt,Y,Xa,Rt,X,Xr=`<code class="language-bash"><span class="token builtin class-name">cd</span> ~/Documents/
<span class="token function">find</span> ~/Downloads/ -name <span class="token string">"*.rar"</span> -exec <span class="token function">unrar</span> -pSECRET -y -ad x <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span> <span class="token punctuation"></span><span class="token punctuation">;</span></code>`,It,f,Oe,qa,ge,Ba,He,za,Me,Fa,Ce,Wa,Ne,Za,Xe,Ga,qe,Ja,Be,Ka,ze,Qa,Fe,Va,We,Ya,Ze,$a,Ge,eo,Je,to,Ke,ao,Qe,oo,Ve,ro,Ye,lo,$e,no,St,R,so,et,io,ho;return{c(){y=o("p"),jt=n("Unlike its cousins .zip or .tar, to handle .rar archives you still need a third party app such as "),I=o("a"),Ot=n("UnRarX"),gt=n(", "),S=o("a"),Ht=n("Zipeg"),Mt=n(", or "),A=o("a"),Ct=n("Stuffit"),Nt=n(". Rarlab offers the two freeware command line tools."),at=h(),P=o("h2"),q=o("a"),Xt=n("Downloading rar and unrar"),ot=h(),T=o("p"),qt=n("After you "),U=o("a"),Bt=n("download rar from RarLab"),zt=n("\u2019s download section, you should find a file called something like rarosx-3.8.0.tar.gz depending on the version you downloaded. If you double click on it, OS X will unarchive and create a folder called rar, which contains three \u201CUnix executable files\u201D, and a bunch of text / html files. The executables are the command line rar and unrar, plus a support file used for installation. Rar is a demo that expires after 40 days, so don\u2019t bother installing it unless you are planning to buy the licence (instructions are in one of the html files in the folder). Luckily unrar is freeware and you can just use it."),rt=h(),L=o("h2"),B=o("a"),Ft=n("Installing unrar on OS X"),lt=h(),j=o("p"),Wt=n(`To install unrar, open the Terminal application (Applications/Utilties/Terminal) and navigate to the rar folder. If you don\u2019t know how, the easiest way is to type \u2018cd \u2019 with a space after it, then drag the rar folder onto the terminal window - Terminal will type out the path to the folder for you. Typicall on OS X Leopard it would be
`),$=o("code"),Zt=n("cd Downloads/rar"),nt=h(),z=o("p"),Gt=n("Once in that folder, type the following command"),st=h(),O=o("pre"),it=h(),x=o("p"),Jt=n(`where SHORTNAME is the short version of your user name. If you are not sure what it is, just type
`),ee=o("code"),Kt=n("whoami"),Qt=n(" and Terminal will tell you."),dt=h(),F=o("p"),Vt=n("Breaking down the command:"),ht=h(),w=o("dl"),te=o("dt"),Yt=n("sudo"),ae=o("dd"),$t=n("runs this command in administrator mode, a security measure to prevent viruses installing software at will; you will be asked for your password when you type return"),oe=o("dt"),ea=n("install"),re=o("dd"),ta=n("call the 'install' utility, which does just what it says on the tin"),le=o("dt"),aa=n("-c"),ne=o("dd"),oa=n("tells the install utility to copy the unrar file to its destination"),se=o("dt"),ra=n("-o SHORTNAME"),ie=o("dd"),la=n("tells the install utility to make you the owner of the binary, so that you won't have to type a password every time you want to use it"),de=o("dt"),na=n("unrar"),he=o("dd"),sa=n("the file to install - if you want to install rar instead, replace unrar with rar here"),ue=o("dt"),ia=n("/usr/local/bin"),fe=o("dd"),da=n("the place where this will be installed - the /usr/local/bin folder is a common Unix location for binaries"),ut=h(),W=o("p"),ha=n("After pressing ENTER and typing your password, you will be able to use unrar on the command line. To test it, type the following followed by ENTER:"),ft=h(),g=o("pre"),ct=h(),Z=o("p"),ua=n("where"),pt=h(),b=o("dl"),ce=o("dt"),fa=n("cd"),pe=o("dd"),ca=n("takes you out of the rar folder and back to your home folder, because we want to test this will work from any location, and this is the fastest way to move out of the rar folder"),we=o("dt"),pa=n("unrar"),ye=o("dd"),wa=n("this will run unrar, and since you haven't passed any parameters, it should just print out instructions on how to use it."),wt=h(),H=o("h2"),G=o("a"),ya=n("Using unrar on the command line on Mac OS X"),yt=h(),k=o("p"),ma=n("Using unrar is very simple - in the Terminal window (Applicatons/Utilities/Terminal) you simply navigate to the folder where you want the archive to be "),me=o("em"),va=n("extracted to"),Ea=n(". If you are not sure how to do that, the simplest way would be to type \u2018cd \u2019, including the space at the end, then drag the folder you want to navigate to onto the window, and Terminal will type its path for you. Then you type the unrar command, for example:"),mt=h(),M=o("pre"),vt=h(),J=o("p"),ba=n("Here\u2019s what the example above does:"),Et=h(),m=o("dl"),ve=o("dt"),_a=n("cd ~/Documents"),Ee=o("dd"),Da=n("navigate to the Documents folder"),be=o("dt"),Ta=n("unrar"),_e=o("dd"),xa=n("calls the unrar utility"),De=o("dt"),ka=n("x"),Te=o("dd"),Ra=n("runs command 'x' within the unrar utility; this will extract files maintaining the directory structure within the archive. If you type 'e', instead, all files will be extracted without enclosing folders"),xe=o("dt"),Ia=n("~/test-archive.rar"),ke=o("dd"),Sa=n("this is the location of the archive - again, the easiest way to do that is to drag the actual file onto the Terminal window"),bt=h(),K=o("p"),Aa=n("That was the simplest way to use the utilities. In fact, unrar offers several options, which you can discover by typing \u2018unrar\u2019 followed by return on the terminal, and reading the instructions. As an example, the following"),_t=h(),C=o("pre"),Dt=h(),Q=o("p"),Pa=n("can be broken down as"),Tt=h(),v=o("dl"),Re=o("dt"),Ua=n("unrar x"),Ie=o("dd"),La=n("tells unrar to run the 'x' command, which is 'extract files to current directory maintaining directory structure'"),Se=o("dt"),ja=n("-pSECRET"),Ae=o("dd"),Oa=n("use option -p, password, and passes the string SECRET as the password - yes, without a space in between"),Pe=o("dt"),ga=n("-y"),Ue=o("dd"),Ha=n("uses option -y, 'assumes yes on all queries'"),Le=o("dt"),Ma=n("archive.rar"),je=o("dd"),Ca=n("the name of the file to be extracted"),xt=h(),N=o("h2"),V=o("a"),Na=n("Using unrar on the command line to unarchive a batch of files"),kt=h(),Y=o("p"),Xa=n("This is where the command line version of unrar comes into its own - try and uncompress a bunch of password protected archives with any other utility, and see what I mean. To unarchive a batch of files, we\u2019ll use the \u2018find\u2019 command (which does exactly what it says), and pass its results to unrar."),Rt=h(),X=o("pre"),It=h(),f=o("dl"),Oe=o("dt"),qa=n("cd ~/Documents/"),ge=o("dd"),Ba=n("navigate to the Documents folder"),He=o("dt"),za=n("find"),Me=o("dd"),Fa=n("starts the find utility"),Ce=o("dt"),Wa=n("~/Downloads/"),Ne=o("dd"),Za=n("tells the find utility to look for files in the Downloads directory within your home (that's what ~ stands for). If your rar files are somewhere else, just replace the folder name with the one you need. If the rar files are in the same directory, you can just type a dot, '.', which in Unix means 'the current directory'"),Xe=o("dt"),Ga=n('-name "*.rar"'),qe=o("dd"),Ja=n("tells find to look for files which ends in .rar - the `*` before it means 'anything'. If you want, say, to look for all files which start with b and end in .rar, you'd type \"b*.rar\" instead"),Be=o("dt"),Ka=n("-exec unrar"),ze=o("dd"),Qa=n("tells find to pass the results to unrar. If you want to test before you start extracting, replace this with -print, and don't type the following commands. This will just print a list of files."),Fe=o("dt"),Va=n("-pSECRET"),We=o("dd"),Ya=n("passes password SECRET to unrar; ignore if you don't need it"),Ze=o("dt"),$a=n("-y"),Ge=o("dd"),eo=n("tells unrar to answer 'yes' to all queries, so it won't hang waiting for you to type it in manually"),Je=o("dt"),to=n("-ad"),Ke=o("dd"),ao=n("for each archive, this will create a folder of the same name as the archive, and save all files in it. This is very useful, otherwise if your archives do not have any folders inside them, all files would be mixed together"),Qe=o("dt"),oo=n("x"),Ve=o("dd"),ro=n("tells unrar which command to run"),Ye=o("dt"),lo=n("{} \\;"),$e=o("dd"),no=n("this is used by find, {} means the file you just found and \\; ends it all"),St=h(),R=o("p"),so=n("Now you can go make yourself a cup of tea, and all the archives will be magically extracted when you come back. Well not always "),et=o("em"),io=n("all"),ho=n(" - occasionally there are quirks and unrar fails. I always check the Terminal window for errors (APPLE-F for find, and then look for word \u2018error\u2019) and if there were any errors, I will re-extract that particular archive again with a different utility. But errors don\u2019t happen too often, and using the command line tool saves a lot of time."),this.h()},l(e){y=r(e,"P",{});var i=l(y);jt=s(i,"Unlike its cousins .zip or .tar, to handle .rar archives you still need a third party app such as "),I=r(i,"A",{href:!0,rel:!0});var co=l(I);Ot=s(co,"UnRarX"),co.forEach(a),gt=s(i,", "),S=r(i,"A",{href:!0,rel:!0});var po=l(S);Ht=s(po,"Zipeg"),po.forEach(a),Mt=s(i,", or "),A=r(i,"A",{href:!0,rel:!0});var wo=l(A);Ct=s(wo,"Stuffit"),wo.forEach(a),Nt=s(i,". Rarlab offers the two freeware command line tools."),i.forEach(a),at=u(e),P=r(e,"H2",{id:!0});var yo=l(P);q=r(yo,"A",{href:!0});var mo=l(q);Xt=s(mo,"Downloading rar and unrar"),mo.forEach(a),yo.forEach(a),ot=u(e),T=r(e,"P",{});var At=l(T);qt=s(At,"After you "),U=r(At,"A",{href:!0,rel:!0});var vo=l(U);Bt=s(vo,"download rar from RarLab"),vo.forEach(a),zt=s(At,"\u2019s download section, you should find a file called something like rarosx-3.8.0.tar.gz depending on the version you downloaded. If you double click on it, OS X will unarchive and create a folder called rar, which contains three \u201CUnix executable files\u201D, and a bunch of text / html files. The executables are the command line rar and unrar, plus a support file used for installation. Rar is a demo that expires after 40 days, so don\u2019t bother installing it unless you are planning to buy the licence (instructions are in one of the html files in the folder). Luckily unrar is freeware and you can just use it."),At.forEach(a),rt=u(e),L=r(e,"H2",{id:!0});var Eo=l(L);B=r(Eo,"A",{href:!0});var bo=l(B);Ft=s(bo,"Installing unrar on OS X"),bo.forEach(a),Eo.forEach(a),lt=u(e),j=r(e,"P",{});var uo=l(j);Wt=s(uo,`To install unrar, open the Terminal application (Applications/Utilties/Terminal) and navigate to the rar folder. If you don\u2019t know how, the easiest way is to type \u2018cd \u2019 with a space after it, then drag the rar folder onto the terminal window - Terminal will type out the path to the folder for you. Typicall on OS X Leopard it would be
`),$=r(uo,"CODE",{});var _o=l($);Zt=s(_o,"cd Downloads/rar"),_o.forEach(a),uo.forEach(a),nt=u(e),z=r(e,"P",{});var Do=l(z);Gt=s(Do,"Once in that folder, type the following command"),Do.forEach(a),st=u(e),O=r(e,"PRE",{class:!0});var qr=l(O);qr.forEach(a),it=u(e),x=r(e,"P",{});var Pt=l(x);Jt=s(Pt,`where SHORTNAME is the short version of your user name. If you are not sure what it is, just type
`),ee=r(Pt,"CODE",{});var To=l(ee);Kt=s(To,"whoami"),To.forEach(a),Qt=s(Pt," and Terminal will tell you."),Pt.forEach(a),dt=u(e),F=r(e,"P",{});var xo=l(F);Vt=s(xo,"Breaking down the command:"),xo.forEach(a),ht=u(e),w=r(e,"DL",{class:!0});var E=l(w);te=r(E,"DT",{});var ko=l(te);Yt=s(ko,"sudo"),ko.forEach(a),ae=r(E,"DD",{});var Ro=l(ae);$t=s(Ro,"runs this command in administrator mode, a security measure to prevent viruses installing software at will; you will be asked for your password when you type return"),Ro.forEach(a),oe=r(E,"DT",{});var Io=l(oe);ea=s(Io,"install"),Io.forEach(a),re=r(E,"DD",{});var So=l(re);ta=s(So,"call the 'install' utility, which does just what it says on the tin"),So.forEach(a),le=r(E,"DT",{});var Ao=l(le);aa=s(Ao,"-c"),Ao.forEach(a),ne=r(E,"DD",{});var Po=l(ne);oa=s(Po,"tells the install utility to copy the unrar file to its destination"),Po.forEach(a),se=r(E,"DT",{});var Uo=l(se);ra=s(Uo,"-o SHORTNAME"),Uo.forEach(a),ie=r(E,"DD",{});var Lo=l(ie);la=s(Lo,"tells the install utility to make you the owner of the binary, so that you won't have to type a password every time you want to use it"),Lo.forEach(a),de=r(E,"DT",{});var jo=l(de);na=s(jo,"unrar"),jo.forEach(a),he=r(E,"DD",{});var Oo=l(he);sa=s(Oo,"the file to install - if you want to install rar instead, replace unrar with rar here"),Oo.forEach(a),ue=r(E,"DT",{});var go=l(ue);ia=s(go,"/usr/local/bin"),go.forEach(a),fe=r(E,"DD",{});var Ho=l(fe);da=s(Ho,"the place where this will be installed - the /usr/local/bin folder is a common Unix location for binaries"),Ho.forEach(a),E.forEach(a),ut=u(e),W=r(e,"P",{});var Mo=l(W);ha=s(Mo,"After pressing ENTER and typing your password, you will be able to use unrar on the command line. To test it, type the following followed by ENTER:"),Mo.forEach(a),ft=u(e),g=r(e,"PRE",{class:!0});var Br=l(g);Br.forEach(a),ct=u(e),Z=r(e,"P",{});var Co=l(Z);ua=s(Co,"where"),Co.forEach(a),pt=u(e),b=r(e,"DL",{class:!0});var tt=l(b);ce=r(tt,"DT",{});var No=l(ce);fa=s(No,"cd"),No.forEach(a),pe=r(tt,"DD",{});var Xo=l(pe);ca=s(Xo,"takes you out of the rar folder and back to your home folder, because we want to test this will work from any location, and this is the fastest way to move out of the rar folder"),Xo.forEach(a),we=r(tt,"DT",{});var qo=l(we);pa=s(qo,"unrar"),qo.forEach(a),ye=r(tt,"DD",{});var Bo=l(ye);wa=s(Bo,"this will run unrar, and since you haven't passed any parameters, it should just print out instructions on how to use it."),Bo.forEach(a),tt.forEach(a),wt=u(e),H=r(e,"H2",{id:!0});var zo=l(H);G=r(zo,"A",{href:!0});var Fo=l(G);ya=s(Fo,"Using unrar on the command line on Mac OS X"),Fo.forEach(a),zo.forEach(a),yt=u(e),k=r(e,"P",{});var Ut=l(k);ma=s(Ut,"Using unrar is very simple - in the Terminal window (Applicatons/Utilities/Terminal) you simply navigate to the folder where you want the archive to be "),me=r(Ut,"EM",{});var Wo=l(me);va=s(Wo,"extracted to"),Wo.forEach(a),Ea=s(Ut,". If you are not sure how to do that, the simplest way would be to type \u2018cd \u2019, including the space at the end, then drag the folder you want to navigate to onto the window, and Terminal will type its path for you. Then you type the unrar command, for example:"),Ut.forEach(a),mt=u(e),M=r(e,"PRE",{class:!0});var zr=l(M);zr.forEach(a),vt=u(e),J=r(e,"P",{});var Zo=l(J);ba=s(Zo,"Here\u2019s what the example above does:"),Zo.forEach(a),Et=u(e),m=r(e,"DL",{class:!0});var _=l(m);ve=r(_,"DT",{});var Go=l(ve);_a=s(Go,"cd ~/Documents"),Go.forEach(a),Ee=r(_,"DD",{});var Jo=l(Ee);Da=s(Jo,"navigate to the Documents folder"),Jo.forEach(a),be=r(_,"DT",{});var Ko=l(be);Ta=s(Ko,"unrar"),Ko.forEach(a),_e=r(_,"DD",{});var Qo=l(_e);xa=s(Qo,"calls the unrar utility"),Qo.forEach(a),De=r(_,"DT",{});var Vo=l(De);ka=s(Vo,"x"),Vo.forEach(a),Te=r(_,"DD",{});var Yo=l(Te);Ra=s(Yo,"runs command 'x' within the unrar utility; this will extract files maintaining the directory structure within the archive. If you type 'e', instead, all files will be extracted without enclosing folders"),Yo.forEach(a),xe=r(_,"DT",{});var $o=l(xe);Ia=s($o,"~/test-archive.rar"),$o.forEach(a),ke=r(_,"DD",{});var er=l(ke);Sa=s(er,"this is the location of the archive - again, the easiest way to do that is to drag the actual file onto the Terminal window"),er.forEach(a),_.forEach(a),bt=u(e),K=r(e,"P",{});var tr=l(K);Aa=s(tr,"That was the simplest way to use the utilities. In fact, unrar offers several options, which you can discover by typing \u2018unrar\u2019 followed by return on the terminal, and reading the instructions. As an example, the following"),tr.forEach(a),_t=u(e),C=r(e,"PRE",{class:!0});var Fr=l(C);Fr.forEach(a),Dt=u(e),Q=r(e,"P",{});var ar=l(Q);Pa=s(ar,"can be broken down as"),ar.forEach(a),Tt=u(e),v=r(e,"DL",{class:!0});var D=l(v);Re=r(D,"DT",{});var or=l(Re);Ua=s(or,"unrar x"),or.forEach(a),Ie=r(D,"DD",{});var rr=l(Ie);La=s(rr,"tells unrar to run the 'x' command, which is 'extract files to current directory maintaining directory structure'"),rr.forEach(a),Se=r(D,"DT",{});var lr=l(Se);ja=s(lr,"-pSECRET"),lr.forEach(a),Ae=r(D,"DD",{});var nr=l(Ae);Oa=s(nr,"use option -p, password, and passes the string SECRET as the password - yes, without a space in between"),nr.forEach(a),Pe=r(D,"DT",{});var sr=l(Pe);ga=s(sr,"-y"),sr.forEach(a),Ue=r(D,"DD",{});var ir=l(Ue);Ha=s(ir,"uses option -y, 'assumes yes on all queries'"),ir.forEach(a),Le=r(D,"DT",{});var dr=l(Le);Ma=s(dr,"archive.rar"),dr.forEach(a),je=r(D,"DD",{});var hr=l(je);Ca=s(hr,"the name of the file to be extracted"),hr.forEach(a),D.forEach(a),xt=u(e),N=r(e,"H2",{id:!0});var ur=l(N);V=r(ur,"A",{href:!0});var fr=l(V);Na=s(fr,"Using unrar on the command line to unarchive a batch of files"),fr.forEach(a),ur.forEach(a),kt=u(e),Y=r(e,"P",{});var cr=l(Y);Xa=s(cr,"This is where the command line version of unrar comes into its own - try and uncompress a bunch of password protected archives with any other utility, and see what I mean. To unarchive a batch of files, we\u2019ll use the \u2018find\u2019 command (which does exactly what it says), and pass its results to unrar."),cr.forEach(a),Rt=u(e),X=r(e,"PRE",{class:!0});var Wr=l(X);Wr.forEach(a),It=u(e),f=r(e,"DL",{class:!0});var p=l(f);Oe=r(p,"DT",{});var pr=l(Oe);qa=s(pr,"cd ~/Documents/"),pr.forEach(a),ge=r(p,"DD",{});var wr=l(ge);Ba=s(wr,"navigate to the Documents folder"),wr.forEach(a),He=r(p,"DT",{});var yr=l(He);za=s(yr,"find"),yr.forEach(a),Me=r(p,"DD",{});var mr=l(Me);Fa=s(mr,"starts the find utility"),mr.forEach(a),Ce=r(p,"DT",{});var vr=l(Ce);Wa=s(vr,"~/Downloads/"),vr.forEach(a),Ne=r(p,"DD",{});var Er=l(Ne);Za=s(Er,"tells the find utility to look for files in the Downloads directory within your home (that's what ~ stands for). If your rar files are somewhere else, just replace the folder name with the one you need. If the rar files are in the same directory, you can just type a dot, '.', which in Unix means 'the current directory'"),Er.forEach(a),Xe=r(p,"DT",{});var br=l(Xe);Ga=s(br,'-name "*.rar"'),br.forEach(a),qe=r(p,"DD",{});var _r=l(qe);Ja=s(_r,"tells find to look for files which ends in .rar - the `*` before it means 'anything'. If you want, say, to look for all files which start with b and end in .rar, you'd type \"b*.rar\" instead"),_r.forEach(a),Be=r(p,"DT",{});var Dr=l(Be);Ka=s(Dr,"-exec unrar"),Dr.forEach(a),ze=r(p,"DD",{});var Tr=l(ze);Qa=s(Tr,"tells find to pass the results to unrar. If you want to test before you start extracting, replace this with -print, and don't type the following commands. This will just print a list of files."),Tr.forEach(a),Fe=r(p,"DT",{});var xr=l(Fe);Va=s(xr,"-pSECRET"),xr.forEach(a),We=r(p,"DD",{});var kr=l(We);Ya=s(kr,"passes password SECRET to unrar; ignore if you don't need it"),kr.forEach(a),Ze=r(p,"DT",{});var Rr=l(Ze);$a=s(Rr,"-y"),Rr.forEach(a),Ge=r(p,"DD",{});var Ir=l(Ge);eo=s(Ir,"tells unrar to answer 'yes' to all queries, so it won't hang waiting for you to type it in manually"),Ir.forEach(a),Je=r(p,"DT",{});var Sr=l(Je);to=s(Sr,"-ad"),Sr.forEach(a),Ke=r(p,"DD",{});var Ar=l(Ke);ao=s(Ar,"for each archive, this will create a folder of the same name as the archive, and save all files in it. This is very useful, otherwise if your archives do not have any folders inside them, all files would be mixed together"),Ar.forEach(a),Qe=r(p,"DT",{});var Pr=l(Qe);oo=s(Pr,"x"),Pr.forEach(a),Ve=r(p,"DD",{});var Ur=l(Ve);ro=s(Ur,"tells unrar which command to run"),Ur.forEach(a),Ye=r(p,"DT",{});var Lr=l(Ye);lo=s(Lr,"{} \\;"),Lr.forEach(a),$e=r(p,"DD",{});var jr=l($e);no=s(jr,"this is used by find, {} means the file you just found and \\; ends it all"),jr.forEach(a),p.forEach(a),St=u(e),R=r(e,"P",{});var Lt=l(R);so=s(Lt,"Now you can go make yourself a cup of tea, and all the archives will be magically extracted when you come back. Well not always "),et=r(Lt,"EM",{});var Or=l(et);io=s(Or,"all"),Or.forEach(a),ho=s(Lt," - occasionally there are quirks and unrar fails. I always check the Terminal window for errors (APPLE-F for find, and then look for word \u2018error\u2019) and if there were any errors, I will re-extract that particular archive again with a different utility. But errors don\u2019t happen too often, and using the command line tool saves a lot of time."),Lt.forEach(a),this.h()},h(){c(I,"href","http://www.unrarx.com/"),c(I,"rel","nofollow"),c(S,"href","http://www.zipeg.com/"),c(S,"rel","nofollow"),c(A,"href","http://shop.smithmicro.com/"),c(A,"rel","nofollow"),c(q,"href","#downloading-rar-and-unrar"),c(P,"id","downloading-rar-and-unrar"),c(U,"href","http://www.rarlab.com/download.htm"),c(U,"rel","nofollow"),c(B,"href","#installing-unrar-on-os-x"),c(L,"id","installing-unrar-on-os-x"),c(O,"class","language-bash"),c(w,"class","code-breakdown"),c(g,"class","language-bash"),c(b,"class","code-breakdown"),c(G,"href","#using-unrar-on-the-command-line-on-mac-os-x"),c(H,"id","using-unrar-on-the-command-line-on-mac-os-x"),c(M,"class","language-bash"),c(m,"class","code-breakdown"),c(C,"class","language-bash"),c(v,"class","code-breakdown"),c(V,"href","#using-unrar-on-the-command-line-to-unarchive-a-batch-of-files"),c(N,"id","using-unrar-on-the-command-line-to-unarchive-a-batch-of-files"),c(X,"class","language-bash"),c(f,"class","code-breakdown")},m(e,i){d(e,y,i),t(y,jt),t(y,I),t(I,Ot),t(y,gt),t(y,S),t(S,Ht),t(y,Mt),t(y,A),t(A,Ct),t(y,Nt),d(e,at,i),d(e,P,i),t(P,q),t(q,Xt),d(e,ot,i),d(e,T,i),t(T,qt),t(T,U),t(U,Bt),t(T,zt),d(e,rt,i),d(e,L,i),t(L,B),t(B,Ft),d(e,lt,i),d(e,j,i),t(j,Wt),t(j,$),t($,Zt),d(e,nt,i),d(e,z,i),t(z,Gt),d(e,st,i),d(e,O,i),O.innerHTML=Hr,d(e,it,i),d(e,x,i),t(x,Jt),t(x,ee),t(ee,Kt),t(x,Qt),d(e,dt,i),d(e,F,i),t(F,Vt),d(e,ht,i),d(e,w,i),t(w,te),t(te,Yt),t(w,ae),t(ae,$t),t(w,oe),t(oe,ea),t(w,re),t(re,ta),t(w,le),t(le,aa),t(w,ne),t(ne,oa),t(w,se),t(se,ra),t(w,ie),t(ie,la),t(w,de),t(de,na),t(w,he),t(he,sa),t(w,ue),t(ue,ia),t(w,fe),t(fe,da),d(e,ut,i),d(e,W,i),t(W,ha),d(e,ft,i),d(e,g,i),g.innerHTML=Mr,d(e,ct,i),d(e,Z,i),t(Z,ua),d(e,pt,i),d(e,b,i),t(b,ce),t(ce,fa),t(b,pe),t(pe,ca),t(b,we),t(we,pa),t(b,ye),t(ye,wa),d(e,wt,i),d(e,H,i),t(H,G),t(G,ya),d(e,yt,i),d(e,k,i),t(k,ma),t(k,me),t(me,va),t(k,Ea),d(e,mt,i),d(e,M,i),M.innerHTML=Cr,d(e,vt,i),d(e,J,i),t(J,ba),d(e,Et,i),d(e,m,i),t(m,ve),t(ve,_a),t(m,Ee),t(Ee,Da),t(m,be),t(be,Ta),t(m,_e),t(_e,xa),t(m,De),t(De,ka),t(m,Te),t(Te,Ra),t(m,xe),t(xe,Ia),t(m,ke),t(ke,Sa),d(e,bt,i),d(e,K,i),t(K,Aa),d(e,_t,i),d(e,C,i),C.innerHTML=Nr,d(e,Dt,i),d(e,Q,i),t(Q,Pa),d(e,Tt,i),d(e,v,i),t(v,Re),t(Re,Ua),t(v,Ie),t(Ie,La),t(v,Se),t(Se,ja),t(v,Ae),t(Ae,Oa),t(v,Pe),t(Pe,ga),t(v,Ue),t(Ue,Ha),t(v,Le),t(Le,Ma),t(v,je),t(je,Ca),d(e,xt,i),d(e,N,i),t(N,V),t(V,Na),d(e,kt,i),d(e,Y,i),t(Y,Xa),d(e,Rt,i),d(e,X,i),X.innerHTML=Xr,d(e,It,i),d(e,f,i),t(f,Oe),t(Oe,qa),t(f,ge),t(ge,Ba),t(f,He),t(He,za),t(f,Me),t(Me,Fa),t(f,Ce),t(Ce,Wa),t(f,Ne),t(Ne,Za),t(f,Xe),t(Xe,Ga),t(f,qe),t(qe,Ja),t(f,Be),t(Be,Ka),t(f,ze),t(ze,Qa),t(f,Fe),t(Fe,Va),t(f,We),t(We,Ya),t(f,Ze),t(Ze,$a),t(f,Ge),t(Ge,eo),t(f,Je),t(Je,to),t(f,Ke),t(Ke,ao),t(f,Qe),t(Qe,oo),t(f,Ve),t(Ve,ro),t(f,Ye),t(Ye,lo),t(f,$e),t($e,no),d(e,St,i),d(e,R,i),t(R,so),t(R,et),t(et,io),t(R,ho)},p:fo,i:fo,o:fo,d(e){e&&a(y),e&&a(at),e&&a(P),e&&a(ot),e&&a(T),e&&a(rt),e&&a(L),e&&a(lt),e&&a(j),e&&a(nt),e&&a(z),e&&a(st),e&&a(O),e&&a(it),e&&a(x),e&&a(dt),e&&a(F),e&&a(ht),e&&a(w),e&&a(ut),e&&a(W),e&&a(ft),e&&a(g),e&&a(ct),e&&a(Z),e&&a(pt),e&&a(b),e&&a(wt),e&&a(H),e&&a(yt),e&&a(k),e&&a(mt),e&&a(M),e&&a(vt),e&&a(J),e&&a(Et),e&&a(m),e&&a(bt),e&&a(K),e&&a(_t),e&&a(C),e&&a(Dt),e&&a(Q),e&&a(Tt),e&&a(v),e&&a(xt),e&&a(N),e&&a(kt),e&&a(Y),e&&a(Rt),e&&a(X),e&&a(It),e&&a(f),e&&a(St),e&&a(R)}}}const Vr={obsolete:!0,date:"2009-02-12 03:59",title:"Batch unrar from the command line on Mac OS X",next:"finding-recently-changed-files-osx-terminal",tags:["bash","os x"],excerpt:'Rar is a popular archive format on the web. When I need to unarchive several rar files at once, I use <a href="http://www.rarlab.com/download.htm">RarLab&#39;s command line tool</a>. Here&#39;s how'};class Yr extends Zr{constructor(y){super();Gr(this,y,null,Kr,Jr,{})}}export{Yr as default,Vr as metadata};
