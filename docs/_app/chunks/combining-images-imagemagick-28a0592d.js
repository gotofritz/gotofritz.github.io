import{S as gs,i as vs,s as Ds,e as o,t as s,k as v,c as d,a as r,d as t,h as i,m as D,b as h,g as l,I as e,E as nd}from"./index-e78f36eb.js";function xs(rs){let E,y,Q,da,Rt,B,ra,Nt,j,ss=`<code class="language-sh">convert *.png[400x400] -splice 0x10 \\
    -background &quot;#ffffff&quot;  -append  -crop -0+10 output.png</code>`,qt,x,U,sa,V,ia,W,na,X,la,Z,ha,$,ca,ee,ma,te,fa,ae,pa,oe,ua,de,ga,re,va,se,Da,ie,xa,Ft,T,k,ne,wa,Yt,G,_a,Bt,S,is=`<code class="language-sh">convert *.png -gravity south -splice 0x111 \\
    -shave 0x111 -resize 400x400  -splice 0x10 -background &quot;#ffffff&quot;  \\
    -append  -crop -0+10 output.png</code>`,Gt,m,le,ba,he,Ea,ce,ya,me,Ta,fe,ka,pe,Ia,ue,Ma,ge,za,ve,Ha,De,Pa,xe,Aa,we,Ca,_e,La,be,ja,Ee,Sa,ye,Ra,Te,Na,ke,qa,Ie,Fa,Me,Ya,ze,Ba,He,Ga,Jt,I,M,Pe,Ja,Kt,J,Ka,Ot,R,ns=`<code class="language-sh">convert *.png -gravity south -splice 0x111 \\
    -shave 0x111 -resize 400x400  -set delay 300 output.gif</code>`,Qt,u,Ae,Oa,Ce,Qa,Le,Ua,je,Va,Se,Wa,Re,Xa,Ne,Za,qe,$a,Fe,eo,Ye,to,Be,ao,Ge,oo,Je,ro,Ke,so,Oe,io,Qe,no,Ut,z,H,Ue,lo,Vt,K,ho,Wt,N,ls=`<code class="language-sh">convert *.png -resize 800x500^ -gravity center \\
    -crop  800x500+0+0 +repage -set delay 300 output.gif</code>`,Xt,g,Ve,co,We,mo,Xe,fo,Ze,po,$e,uo,et,go,tt,vo,at,Do,ot,xo,dt,wo,rt,_o,st,bo,it,Eo,nt,yo,lt,To,ht,ko,Zt,P,A,ct,Io,$t,O,Mo,ea,q,hs=`<code class="language-sh">convert *.png -gravity south \\
    -splice 0x111 -shave 0x111 -resize 400x400 converted.png
montage converted*.png -mode concatenate  -tile 2x2  output.png</code>`,ta,c,mt,zo,ft,Ho,pt,Po,ut,Ao,gt,Co,vt,Lo,Dt,jo,xt,So,wt,Ro,_t,No,bt,qo,Et,Fo,yt,Yo,Tt,Bo,kt,Go,It,Jo,Mt,Ko,zt,Oo,Ht,Qo,Pt,Uo,At,Vo,Ct,Wo,Lt,Xo,jt,Zo,aa,C,L,St,$o,oa,F,Y,ed,td;return{c(){E=o("h2"),y=o("a"),Q=o("span"),da=s("Combining images vertically with a line separating them"),Rt=v(),B=o("p"),ra=s("This is useful for combining a few images into a single vertical strip, with a 10px white border between each image, like the portrait photos from photo boots."),Nt=v(),j=o("pre"),qt=v(),x=o("dl"),U=o("dt"),sa=s("convert"),V=o("dd"),ia=s("calls up one of the ImageMagick commands, convert"),W=o("dt"),na=s("*.png[400x400] "),X=o("dd"),la=s("an expression using wildcards to match all png images in the current folder, and resize each as it is read so that neither width and height are greater than 400px"),Z=o("dt"),ha=s("-splice 0x10"),$=o("dd"),ca=s("add a 10px vertical border to each image"),ee=o("dt"),ma=s('-background "#ffffff"'),te=o("dd"),fa=s("make that border white (using HTML color ocde)"),ae=o("dt"),pa=s("-append"),oe=o("dd"),ua=s("combine images vertically - use +append to combine them horizontally"),de=o("dt"),ga=s("-crop -0+10"),re=o("dd"),va=s("crop the top 10 pixels from the combined image, as we want the borders only between images"),se=o("dt"),Da=s("output.png"),ie=o("dd"),xa=s("this is the result image file. It could just as easily be a .jpg"),Ft=v(),T=o("h2"),k=o("a"),ne=o("span"),wa=s("Removing window artefacts from the top of the images first"),Yt=v(),G=o("p"),_a=s("If you have, say, a bunch of screenshots with the address bar etc at the top, you need to modify the command to get rid of it first. This time you can\u2019t use the shortcut resize."),Bt=v(),S=o("pre"),Gt=v(),m=o("dl"),le=o("dt"),ba=s("convert"),he=o("dd"),Ea=s("calls up one of the ImageMagick commands, convert"),ce=o("dt"),ya=s("*.png "),me=o("dd"),Ta=s("an expression using wildcards to match all png images in the current folder"),fe=o("dt"),ka=s("-gravity south"),pe=o("dd"),Ia=s("aligns the next command(s) bottom"),ue=o("dt"),Ma=s("-splice 0x111"),ge=o("dd"),za=s("because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),ve=o("dt"),Ha=s("-shave 0x111"),De=o("dd"),Pa=s("This removes 111px from the top and bottom; -shave is easier to work with than -crop"),xe=o("dt"),Aa=s("-resize 400x400 "),we=o("dd"),Ca=s("now i can resize so that the image does not exceed 400 px either direction. From now on carry on as for previous command"),_e=o("dt"),La=s("-splice 0x10"),be=o("dd"),ja=s("add a 10px vertical border to each image"),Ee=o("dt"),Sa=s('-background "#ffffff"'),ye=o("dd"),Ra=s("make that border white (using HTML color ocde)"),Te=o("dt"),Na=s("-append"),ke=o("dd"),qa=s("combine images vertically - use +append to combine them horizontally"),Ie=o("dt"),Fa=s("-crop -0+10"),Me=o("dd"),Ya=s("crop the top 10 pixels from the combined image, as we want the borders only between images"),ze=o("dt"),Ba=s("output.png"),He=o("dd"),Ga=s("this is the result image file. It could just as easily be a .jpg"),Jt=v(),I=o("h2"),M=o("a"),Pe=o("span"),Ja=s("Combining images into an animated gif"),Kt=v(),J=o("p"),Ka=s("If instead you\u2019d rather create an animated gif, here\u2019s the simplest way to do it - without any of the powerful options that ImageMagick offers."),Ot=v(),R=o("pre"),Qt=v(),u=o("dl"),Ae=o("dt"),Oa=s("convert"),Ce=o("dd"),Qa=s("calls up one of the ImageMagick commands, "),Le=o("dt"),Ua=s("*.png "),je=o("dd"),Va=s("an expression using wildcards to match all png images in the current folder"),Se=o("dt"),Wa=s("-gravity south"),Re=o("dd"),Xa=s("aligns the next command(s) bottom"),Ne=o("dt"),Za=s("-splice 0x111"),qe=o("dd"),$a=s("because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),Fe=o("dt"),eo=s("-shave 0x111"),Ye=o("dd"),to=s("This removes 111px from the top and bottom; -shave is easier to work with than -crop"),Be=o("dt"),ao=s("-resize 400x400 "),Ge=o("dd"),oo=s("now i can resize so that the image does not exceed 400 px either direction"),Je=o("dt"),ro=s("-set delay 300"),Ke=o("dd"),so=s("adds a three seconds delay between all images"),Oe=o("dt"),io=s("output.gif"),Qe=o("dd"),no=s("that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif."),Ut=v(),z=o("h2"),H=o("a"),Ue=o("span"),lo=s("Cropping a set of images to the same size and animating them"),Vt=v(),K=o("p"),ho=s("If the images in the gif are of different size you may want to do something about that. Here they are cropped to a minimum common size, the extra pixels discarded."),Wt=v(),N=o("pre"),Xt=v(),g=o("dl"),Ve=o("dt"),co=s("convert"),We=o("dd"),mo=s("calls up one of the ImageMagick commands, "),Xe=o("dt"),fo=s("*.png "),Ze=o("dd"),po=s("an expression using wildcards to match all png images in the current folder"),$e=o("dt"),uo=s("-resize 800x500^"),et=o("dd"),go=s("the ^ after the dimensions means those are the minimum sizes rather then the maximum"),tt=o("dt"),vo=s("-gravity center"),at=o("dd"),Do=s("aligns the next command(s)"),ot=o("dt"),xo=s("-crop  800x500+0+0"),dt=o("dd"),wo=s("crops to 800x500, with no offest (0,0)"),rt=o("dt"),_o=s("+repage"),st=o("dd"),bo=s("resets the origin after the crop"),it=o("dt"),Eo=s("-set delay 300"),nt=o("dd"),yo=s("adds a three seconds delay between all images"),lt=o("dt"),To=s("output.gif"),ht=o("dd"),ko=s("that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif."),Zt=v(),P=o("h2"),A=o("a"),ct=o("span"),Io=s("Arranging images in a grid"),$t=v(),O=o("p"),Mo=s("This is actually two commands, one after the other - one to resize and crop the images, the other to arrange them."),ea=v(),q=o("pre"),ta=v(),c=o("dl"),mt=o("dt"),zo=s("convert"),ft=o("dd"),Ho=s("calls up one of the ImageMagick commands, convert"),pt=o("dt"),Po=s("*.png "),ut=o("dd"),Ao=s("an expression using wildcards to match all png images in the current folder"),gt=o("dt"),Co=s("-gravity south"),vt=o("dd"),Lo=s("aligns the next command(s) bottom"),Dt=o("dt"),jo=s("-splice 0x111"),xt=o("dd"),So=s("because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),wt=o("dt"),Ro=s("-shave 0x111"),_t=o("dd"),No=s("This removes 111px from the top and bottom; -shave is easier to work with than -crop"),bt=o("dt"),qo=s("-resize 400x400 "),Et=o("dd"),Fo=s("now i can resize so that the image does not exceed 400 px either direction"),yt=o("dt"),Yo=s("converted.png"),Tt=o("dd"),Bo=s("for each input image, it creates a correspoding output image in the current folder named converted-1.png, converted-2.png..."),kt=o("dt"),Go=s("montage"),It=o("dd"),Jo=s("calls up one of the ImageMagick commands, montage"),Mt=o("dt"),Ko=s("converted*.png"),zt=o("dd"),Oo=s("this time only match the images whose name start with 'converted', i.e. the ones created by the previous command"),Ht=o("dt"),Qo=s("-mode concatenate"),Pt=o("dd"),Uo=s("arranges them in a grid"),At=o("dt"),Vo=s("-tile 2x2"),Ct=o("dd"),Wo=s("in this particular case, it is a 2x2 grid as I only had four images. You can use x2 or 2x to keep the number of rows and columns respectively fixed at 2, and the other dimension filled in with however many images you have"),Lt=o("dt"),Xo=s("output.png"),jt=o("dd"),Zo=s("...and here comes the image"),aa=v(),C=o("h2"),L=o("a"),St=o("span"),$o=s("More"),oa=v(),F=o("p"),Y=o("a"),ed=s("More ImageMagick commands"),td=s("."),this.h()},l(a){E=d(a,"H2",{id:!0});var n=r(E);y=d(n,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ld=r(y);Q=d(ld,"SPAN",{class:!0}),r(Q).forEach(t),ld.forEach(t),da=i(n,"Combining images vertically with a line separating them"),n.forEach(t),Rt=D(a),B=d(a,"P",{});var hd=r(B);ra=i(hd,"This is useful for combining a few images into a single vertical strip, with a 10px white border between each image, like the portrait photos from photo boots."),hd.forEach(t),Nt=D(a),j=d(a,"PRE",{class:!0});var cs=r(j);cs.forEach(t),qt=D(a),x=d(a,"DL",{class:!0});var b=r(x);U=d(b,"DT",{});var cd=r(U);sa=i(cd,"convert"),cd.forEach(t),V=d(b,"DD",{});var md=r(V);ia=i(md,"calls up one of the ImageMagick commands, convert"),md.forEach(t),W=d(b,"DT",{});var fd=r(W);na=i(fd,"*.png[400x400] "),fd.forEach(t),X=d(b,"DD",{});var pd=r(X);la=i(pd,"an expression using wildcards to match all png images in the current folder, and resize each as it is read so that neither width and height are greater than 400px"),pd.forEach(t),Z=d(b,"DT",{});var ud=r(Z);ha=i(ud,"-splice 0x10"),ud.forEach(t),$=d(b,"DD",{});var gd=r($);ca=i(gd,"add a 10px vertical border to each image"),gd.forEach(t),ee=d(b,"DT",{});var vd=r(ee);ma=i(vd,'-background "#ffffff"'),vd.forEach(t),te=d(b,"DD",{});var Dd=r(te);fa=i(Dd,"make that border white (using HTML color ocde)"),Dd.forEach(t),ae=d(b,"DT",{});var xd=r(ae);pa=i(xd,"-append"),xd.forEach(t),oe=d(b,"DD",{});var wd=r(oe);ua=i(wd,"combine images vertically - use +append to combine them horizontally"),wd.forEach(t),de=d(b,"DT",{});var _d=r(de);ga=i(_d,"-crop -0+10"),_d.forEach(t),re=d(b,"DD",{});var bd=r(re);va=i(bd,"crop the top 10 pixels from the combined image, as we want the borders only between images"),bd.forEach(t),se=d(b,"DT",{});var Ed=r(se);Da=i(Ed,"output.png"),Ed.forEach(t),ie=d(b,"DD",{});var yd=r(ie);xa=i(yd,"this is the result image file. It could just as easily be a .jpg"),yd.forEach(t),b.forEach(t),Ft=D(a),T=d(a,"H2",{id:!0});var ad=r(T);k=d(ad,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Td=r(k);ne=d(Td,"SPAN",{class:!0}),r(ne).forEach(t),Td.forEach(t),wa=i(ad,"Removing window artefacts from the top of the images first"),ad.forEach(t),Yt=D(a),G=d(a,"P",{});var kd=r(G);_a=i(kd,"If you have, say, a bunch of screenshots with the address bar etc at the top, you need to modify the command to get rid of it first. This time you can\u2019t use the shortcut resize."),kd.forEach(t),Bt=D(a),S=d(a,"PRE",{class:!0});var ms=r(S);ms.forEach(t),Gt=D(a),m=d(a,"DL",{class:!0});var p=r(m);le=d(p,"DT",{});var Id=r(le);ba=i(Id,"convert"),Id.forEach(t),he=d(p,"DD",{});var Md=r(he);Ea=i(Md,"calls up one of the ImageMagick commands, convert"),Md.forEach(t),ce=d(p,"DT",{});var zd=r(ce);ya=i(zd,"*.png "),zd.forEach(t),me=d(p,"DD",{});var Hd=r(me);Ta=i(Hd,"an expression using wildcards to match all png images in the current folder"),Hd.forEach(t),fe=d(p,"DT",{});var Pd=r(fe);ka=i(Pd,"-gravity south"),Pd.forEach(t),pe=d(p,"DD",{});var Ad=r(pe);Ia=i(Ad,"aligns the next command(s) bottom"),Ad.forEach(t),ue=d(p,"DT",{});var Cd=r(ue);Ma=i(Cd,"-splice 0x111"),Cd.forEach(t),ge=d(p,"DD",{});var Ld=r(ge);za=i(Ld,"because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),Ld.forEach(t),ve=d(p,"DT",{});var jd=r(ve);Ha=i(jd,"-shave 0x111"),jd.forEach(t),De=d(p,"DD",{});var Sd=r(De);Pa=i(Sd,"This removes 111px from the top and bottom; -shave is easier to work with than -crop"),Sd.forEach(t),xe=d(p,"DT",{});var Rd=r(xe);Aa=i(Rd,"-resize 400x400 "),Rd.forEach(t),we=d(p,"DD",{});var Nd=r(we);Ca=i(Nd,"now i can resize so that the image does not exceed 400 px either direction. From now on carry on as for previous command"),Nd.forEach(t),_e=d(p,"DT",{});var qd=r(_e);La=i(qd,"-splice 0x10"),qd.forEach(t),be=d(p,"DD",{});var Fd=r(be);ja=i(Fd,"add a 10px vertical border to each image"),Fd.forEach(t),Ee=d(p,"DT",{});var Yd=r(Ee);Sa=i(Yd,'-background "#ffffff"'),Yd.forEach(t),ye=d(p,"DD",{});var Bd=r(ye);Ra=i(Bd,"make that border white (using HTML color ocde)"),Bd.forEach(t),Te=d(p,"DT",{});var Gd=r(Te);Na=i(Gd,"-append"),Gd.forEach(t),ke=d(p,"DD",{});var Jd=r(ke);qa=i(Jd,"combine images vertically - use +append to combine them horizontally"),Jd.forEach(t),Ie=d(p,"DT",{});var Kd=r(Ie);Fa=i(Kd,"-crop -0+10"),Kd.forEach(t),Me=d(p,"DD",{});var Od=r(Me);Ya=i(Od,"crop the top 10 pixels from the combined image, as we want the borders only between images"),Od.forEach(t),ze=d(p,"DT",{});var Qd=r(ze);Ba=i(Qd,"output.png"),Qd.forEach(t),He=d(p,"DD",{});var Ud=r(He);Ga=i(Ud,"this is the result image file. It could just as easily be a .jpg"),Ud.forEach(t),p.forEach(t),Jt=D(a),I=d(a,"H2",{id:!0});var od=r(I);M=d(od,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Vd=r(M);Pe=d(Vd,"SPAN",{class:!0}),r(Pe).forEach(t),Vd.forEach(t),Ja=i(od,"Combining images into an animated gif"),od.forEach(t),Kt=D(a),J=d(a,"P",{});var Wd=r(J);Ka=i(Wd,"If instead you\u2019d rather create an animated gif, here\u2019s the simplest way to do it - without any of the powerful options that ImageMagick offers."),Wd.forEach(t),Ot=D(a),R=d(a,"PRE",{class:!0});var fs=r(R);fs.forEach(t),Qt=D(a),u=d(a,"DL",{class:!0});var w=r(u);Ae=d(w,"DT",{});var Xd=r(Ae);Oa=i(Xd,"convert"),Xd.forEach(t),Ce=d(w,"DD",{});var Zd=r(Ce);Qa=i(Zd,"calls up one of the ImageMagick commands, "),Zd.forEach(t),Le=d(w,"DT",{});var $d=r(Le);Ua=i($d,"*.png "),$d.forEach(t),je=d(w,"DD",{});var er=r(je);Va=i(er,"an expression using wildcards to match all png images in the current folder"),er.forEach(t),Se=d(w,"DT",{});var tr=r(Se);Wa=i(tr,"-gravity south"),tr.forEach(t),Re=d(w,"DD",{});var ar=r(Re);Xa=i(ar,"aligns the next command(s) bottom"),ar.forEach(t),Ne=d(w,"DT",{});var or=r(Ne);Za=i(or,"-splice 0x111"),or.forEach(t),qe=d(w,"DD",{});var dr=r(qe);$a=i(dr,"because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),dr.forEach(t),Fe=d(w,"DT",{});var rr=r(Fe);eo=i(rr,"-shave 0x111"),rr.forEach(t),Ye=d(w,"DD",{});var sr=r(Ye);to=i(sr,"This removes 111px from the top and bottom; -shave is easier to work with than -crop"),sr.forEach(t),Be=d(w,"DT",{});var ir=r(Be);ao=i(ir,"-resize 400x400 "),ir.forEach(t),Ge=d(w,"DD",{});var nr=r(Ge);oo=i(nr,"now i can resize so that the image does not exceed 400 px either direction"),nr.forEach(t),Je=d(w,"DT",{});var lr=r(Je);ro=i(lr,"-set delay 300"),lr.forEach(t),Ke=d(w,"DD",{});var hr=r(Ke);so=i(hr,"adds a three seconds delay between all images"),hr.forEach(t),Oe=d(w,"DT",{});var cr=r(Oe);io=i(cr,"output.gif"),cr.forEach(t),Qe=d(w,"DD",{});var mr=r(Qe);no=i(mr,"that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif."),mr.forEach(t),w.forEach(t),Ut=D(a),z=d(a,"H2",{id:!0});var dd=r(z);H=d(dd,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var fr=r(H);Ue=d(fr,"SPAN",{class:!0}),r(Ue).forEach(t),fr.forEach(t),lo=i(dd,"Cropping a set of images to the same size and animating them"),dd.forEach(t),Vt=D(a),K=d(a,"P",{});var pr=r(K);ho=i(pr,"If the images in the gif are of different size you may want to do something about that. Here they are cropped to a minimum common size, the extra pixels discarded."),pr.forEach(t),Wt=D(a),N=d(a,"PRE",{class:!0});var ps=r(N);ps.forEach(t),Xt=D(a),g=d(a,"DL",{class:!0});var _=r(g);Ve=d(_,"DT",{});var ur=r(Ve);co=i(ur,"convert"),ur.forEach(t),We=d(_,"DD",{});var gr=r(We);mo=i(gr,"calls up one of the ImageMagick commands, "),gr.forEach(t),Xe=d(_,"DT",{});var vr=r(Xe);fo=i(vr,"*.png "),vr.forEach(t),Ze=d(_,"DD",{});var Dr=r(Ze);po=i(Dr,"an expression using wildcards to match all png images in the current folder"),Dr.forEach(t),$e=d(_,"DT",{});var xr=r($e);uo=i(xr,"-resize 800x500^"),xr.forEach(t),et=d(_,"DD",{});var wr=r(et);go=i(wr,"the ^ after the dimensions means those are the minimum sizes rather then the maximum"),wr.forEach(t),tt=d(_,"DT",{});var _r=r(tt);vo=i(_r,"-gravity center"),_r.forEach(t),at=d(_,"DD",{});var br=r(at);Do=i(br,"aligns the next command(s)"),br.forEach(t),ot=d(_,"DT",{});var Er=r(ot);xo=i(Er,"-crop  800x500+0+0"),Er.forEach(t),dt=d(_,"DD",{});var yr=r(dt);wo=i(yr,"crops to 800x500, with no offest (0,0)"),yr.forEach(t),rt=d(_,"DT",{});var Tr=r(rt);_o=i(Tr,"+repage"),Tr.forEach(t),st=d(_,"DD",{});var kr=r(st);bo=i(kr,"resets the origin after the crop"),kr.forEach(t),it=d(_,"DT",{});var Ir=r(it);Eo=i(Ir,"-set delay 300"),Ir.forEach(t),nt=d(_,"DD",{});var Mr=r(nt);yo=i(Mr,"adds a three seconds delay between all images"),Mr.forEach(t),lt=d(_,"DT",{});var zr=r(lt);To=i(zr,"output.gif"),zr.forEach(t),ht=d(_,"DD",{});var Hr=r(ht);ko=i(Hr,"that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif."),Hr.forEach(t),_.forEach(t),Zt=D(a),P=d(a,"H2",{id:!0});var rd=r(P);A=d(rd,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Pr=r(A);ct=d(Pr,"SPAN",{class:!0}),r(ct).forEach(t),Pr.forEach(t),Io=i(rd,"Arranging images in a grid"),rd.forEach(t),$t=D(a),O=d(a,"P",{});var Ar=r(O);Mo=i(Ar,"This is actually two commands, one after the other - one to resize and crop the images, the other to arrange them."),Ar.forEach(t),ea=D(a),q=d(a,"PRE",{class:!0});var us=r(q);us.forEach(t),ta=D(a),c=d(a,"DL",{class:!0});var f=r(c);mt=d(f,"DT",{});var Cr=r(mt);zo=i(Cr,"convert"),Cr.forEach(t),ft=d(f,"DD",{});var Lr=r(ft);Ho=i(Lr,"calls up one of the ImageMagick commands, convert"),Lr.forEach(t),pt=d(f,"DT",{});var jr=r(pt);Po=i(jr,"*.png "),jr.forEach(t),ut=d(f,"DD",{});var Sr=r(ut);Ao=i(Sr,"an expression using wildcards to match all png images in the current folder"),Sr.forEach(t),gt=d(f,"DT",{});var Rr=r(gt);Co=i(Rr,"-gravity south"),Rr.forEach(t),vt=d(f,"DD",{});var Nr=r(vt);Lo=i(Nr,"aligns the next command(s) bottom"),Nr.forEach(t),Dt=d(f,"DT",{});var qr=r(Dt);jo=i(qr,"-splice 0x111"),qr.forEach(t),xt=d(f,"DD",{});var Fr=r(xt);So=i(Fr,"because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),Fr.forEach(t),wt=d(f,"DT",{});var Yr=r(wt);Ro=i(Yr,"-shave 0x111"),Yr.forEach(t),_t=d(f,"DD",{});var Br=r(_t);No=i(Br,"This removes 111px from the top and bottom; -shave is easier to work with than -crop"),Br.forEach(t),bt=d(f,"DT",{});var Gr=r(bt);qo=i(Gr,"-resize 400x400 "),Gr.forEach(t),Et=d(f,"DD",{});var Jr=r(Et);Fo=i(Jr,"now i can resize so that the image does not exceed 400 px either direction"),Jr.forEach(t),yt=d(f,"DT",{});var Kr=r(yt);Yo=i(Kr,"converted.png"),Kr.forEach(t),Tt=d(f,"DD",{});var Or=r(Tt);Bo=i(Or,"for each input image, it creates a correspoding output image in the current folder named converted-1.png, converted-2.png..."),Or.forEach(t),kt=d(f,"DT",{});var Qr=r(kt);Go=i(Qr,"montage"),Qr.forEach(t),It=d(f,"DD",{});var Ur=r(It);Jo=i(Ur,"calls up one of the ImageMagick commands, montage"),Ur.forEach(t),Mt=d(f,"DT",{});var Vr=r(Mt);Ko=i(Vr,"converted*.png"),Vr.forEach(t),zt=d(f,"DD",{});var Wr=r(zt);Oo=i(Wr,"this time only match the images whose name start with 'converted', i.e. the ones created by the previous command"),Wr.forEach(t),Ht=d(f,"DT",{});var Xr=r(Ht);Qo=i(Xr,"-mode concatenate"),Xr.forEach(t),Pt=d(f,"DD",{});var Zr=r(Pt);Uo=i(Zr,"arranges them in a grid"),Zr.forEach(t),At=d(f,"DT",{});var $r=r(At);Vo=i($r,"-tile 2x2"),$r.forEach(t),Ct=d(f,"DD",{});var es=r(Ct);Wo=i(es,"in this particular case, it is a 2x2 grid as I only had four images. You can use x2 or 2x to keep the number of rows and columns respectively fixed at 2, and the other dimension filled in with however many images you have"),es.forEach(t),Lt=d(f,"DT",{});var ts=r(Lt);Xo=i(ts,"output.png"),ts.forEach(t),jt=d(f,"DD",{});var as=r(jt);Zo=i(as,"...and here comes the image"),as.forEach(t),f.forEach(t),aa=D(a),C=d(a,"H2",{id:!0});var sd=r(C);L=d(sd,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var os=r(L);St=d(os,"SPAN",{class:!0}),r(St).forEach(t),os.forEach(t),$o=i(sd,"More"),sd.forEach(t),oa=D(a),F=d(a,"P",{});var id=r(F);Y=d(id,"A",{href:!0,rel:!0});var ds=r(Y);ed=i(ds,"More ImageMagick commands"),ds.forEach(t),td=i(id,"."),id.forEach(t),this.h()},h(){h(Q,"class","icon icon-link"),h(y,"aria-hidden","true"),h(y,"tabindex","-1"),h(y,"href","#combining-images-vertically-with-a-line-separating-them"),h(E,"id","combining-images-vertically-with-a-line-separating-them"),h(j,"class","language-sh"),h(x,"class","code-breakdown"),h(ne,"class","icon icon-link"),h(k,"aria-hidden","true"),h(k,"tabindex","-1"),h(k,"href","#removing-window-artefacts-from-the-top-of-the-images-first"),h(T,"id","removing-window-artefacts-from-the-top-of-the-images-first"),h(S,"class","language-sh"),h(m,"class","code-breakdown"),h(Pe,"class","icon icon-link"),h(M,"aria-hidden","true"),h(M,"tabindex","-1"),h(M,"href","#combining-images-into-an-animated-gif"),h(I,"id","combining-images-into-an-animated-gif"),h(R,"class","language-sh"),h(u,"class","code-breakdown"),h(Ue,"class","icon icon-link"),h(H,"aria-hidden","true"),h(H,"tabindex","-1"),h(H,"href","#cropping-a-set-of-images-to-the-same-size-and-animating-them"),h(z,"id","cropping-a-set-of-images-to-the-same-size-and-animating-them"),h(N,"class","language-sh"),h(g,"class","code-breakdown"),h(ct,"class","icon icon-link"),h(A,"aria-hidden","true"),h(A,"tabindex","-1"),h(A,"href","#arranging-images-in-a-grid"),h(P,"id","arranging-images-in-a-grid"),h(q,"class","language-sh"),h(c,"class","code-breakdown"),h(St,"class","icon icon-link"),h(L,"aria-hidden","true"),h(L,"tabindex","-1"),h(L,"href","#more"),h(C,"id","more"),h(Y,"href","http://www.imagemagick.org/script/command-line-processing.php#anatomy"),h(Y,"rel","nofollow")},m(a,n){l(a,E,n),e(E,y),e(y,Q),e(E,da),l(a,Rt,n),l(a,B,n),e(B,ra),l(a,Nt,n),l(a,j,n),j.innerHTML=ss,l(a,qt,n),l(a,x,n),e(x,U),e(U,sa),e(x,V),e(V,ia),e(x,W),e(W,na),e(x,X),e(X,la),e(x,Z),e(Z,ha),e(x,$),e($,ca),e(x,ee),e(ee,ma),e(x,te),e(te,fa),e(x,ae),e(ae,pa),e(x,oe),e(oe,ua),e(x,de),e(de,ga),e(x,re),e(re,va),e(x,se),e(se,Da),e(x,ie),e(ie,xa),l(a,Ft,n),l(a,T,n),e(T,k),e(k,ne),e(T,wa),l(a,Yt,n),l(a,G,n),e(G,_a),l(a,Bt,n),l(a,S,n),S.innerHTML=is,l(a,Gt,n),l(a,m,n),e(m,le),e(le,ba),e(m,he),e(he,Ea),e(m,ce),e(ce,ya),e(m,me),e(me,Ta),e(m,fe),e(fe,ka),e(m,pe),e(pe,Ia),e(m,ue),e(ue,Ma),e(m,ge),e(ge,za),e(m,ve),e(ve,Ha),e(m,De),e(De,Pa),e(m,xe),e(xe,Aa),e(m,we),e(we,Ca),e(m,_e),e(_e,La),e(m,be),e(be,ja),e(m,Ee),e(Ee,Sa),e(m,ye),e(ye,Ra),e(m,Te),e(Te,Na),e(m,ke),e(ke,qa),e(m,Ie),e(Ie,Fa),e(m,Me),e(Me,Ya),e(m,ze),e(ze,Ba),e(m,He),e(He,Ga),l(a,Jt,n),l(a,I,n),e(I,M),e(M,Pe),e(I,Ja),l(a,Kt,n),l(a,J,n),e(J,Ka),l(a,Ot,n),l(a,R,n),R.innerHTML=ns,l(a,Qt,n),l(a,u,n),e(u,Ae),e(Ae,Oa),e(u,Ce),e(Ce,Qa),e(u,Le),e(Le,Ua),e(u,je),e(je,Va),e(u,Se),e(Se,Wa),e(u,Re),e(Re,Xa),e(u,Ne),e(Ne,Za),e(u,qe),e(qe,$a),e(u,Fe),e(Fe,eo),e(u,Ye),e(Ye,to),e(u,Be),e(Be,ao),e(u,Ge),e(Ge,oo),e(u,Je),e(Je,ro),e(u,Ke),e(Ke,so),e(u,Oe),e(Oe,io),e(u,Qe),e(Qe,no),l(a,Ut,n),l(a,z,n),e(z,H),e(H,Ue),e(z,lo),l(a,Vt,n),l(a,K,n),e(K,ho),l(a,Wt,n),l(a,N,n),N.innerHTML=ls,l(a,Xt,n),l(a,g,n),e(g,Ve),e(Ve,co),e(g,We),e(We,mo),e(g,Xe),e(Xe,fo),e(g,Ze),e(Ze,po),e(g,$e),e($e,uo),e(g,et),e(et,go),e(g,tt),e(tt,vo),e(g,at),e(at,Do),e(g,ot),e(ot,xo),e(g,dt),e(dt,wo),e(g,rt),e(rt,_o),e(g,st),e(st,bo),e(g,it),e(it,Eo),e(g,nt),e(nt,yo),e(g,lt),e(lt,To),e(g,ht),e(ht,ko),l(a,Zt,n),l(a,P,n),e(P,A),e(A,ct),e(P,Io),l(a,$t,n),l(a,O,n),e(O,Mo),l(a,ea,n),l(a,q,n),q.innerHTML=hs,l(a,ta,n),l(a,c,n),e(c,mt),e(mt,zo),e(c,ft),e(ft,Ho),e(c,pt),e(pt,Po),e(c,ut),e(ut,Ao),e(c,gt),e(gt,Co),e(c,vt),e(vt,Lo),e(c,Dt),e(Dt,jo),e(c,xt),e(xt,So),e(c,wt),e(wt,Ro),e(c,_t),e(_t,No),e(c,bt),e(bt,qo),e(c,Et),e(Et,Fo),e(c,yt),e(yt,Yo),e(c,Tt),e(Tt,Bo),e(c,kt),e(kt,Go),e(c,It),e(It,Jo),e(c,Mt),e(Mt,Ko),e(c,zt),e(zt,Oo),e(c,Ht),e(Ht,Qo),e(c,Pt),e(Pt,Uo),e(c,At),e(At,Vo),e(c,Ct),e(Ct,Wo),e(c,Lt),e(Lt,Xo),e(c,jt),e(jt,Zo),l(a,aa,n),l(a,C,n),e(C,L),e(L,St),e(C,$o),l(a,oa,n),l(a,F,n),e(F,Y),e(Y,ed),e(F,td)},p:nd,i:nd,o:nd,d(a){a&&t(E),a&&t(Rt),a&&t(B),a&&t(Nt),a&&t(j),a&&t(qt),a&&t(x),a&&t(Ft),a&&t(T),a&&t(Yt),a&&t(G),a&&t(Bt),a&&t(S),a&&t(Gt),a&&t(m),a&&t(Jt),a&&t(I),a&&t(Kt),a&&t(J),a&&t(Ot),a&&t(R),a&&t(Qt),a&&t(u),a&&t(Ut),a&&t(z),a&&t(Vt),a&&t(K),a&&t(Wt),a&&t(N),a&&t(Xt),a&&t(g),a&&t(Zt),a&&t(P),a&&t($t),a&&t(O),a&&t(ea),a&&t(q),a&&t(ta),a&&t(c),a&&t(aa),a&&t(C),a&&t(oa),a&&t(F)}}}const _s={date:"2011-12-22 12:34",title:"Combining images with ImageMagick",excerpt:'Assorted <a href="http://www.imagemagick.org/script/index.php">ImageMagick</a> commands for combining images',tags:["imagemagick"]};class bs extends gs{constructor(E){super(),vs(this,E,null,xs,Ds,{})}}export{bs as default,_s as metadata};
