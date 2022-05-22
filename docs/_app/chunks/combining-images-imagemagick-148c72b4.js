import{S as gi,i as vi,s as Di,e as o,t as i,j as v,c as d,a as r,d as t,g as s,l as D,b as h,f as l,F as e,J as nd}from"./vendor-e04e0de5.js";function xi(ri){let E,y,Q,da,Rt,J,ra,Nt,j,ii=`<code class="language-sh">convert *.png[400x400] -splice 0x10 \\
    -background &quot;#ffffff&quot;  -append  -crop -0+10 output.png</code>`,qt,x,U,ia,V,sa,W,na,X,la,Z,ha,$,ca,ee,ma,te,fa,ae,pa,oe,ua,de,ga,re,va,ie,Da,se,xa,Ft,T,k,ne,wa,Yt,B,ba,Jt,S,si=`<code class="language-sh">convert *.png -gravity south -splice 0x111 \\
    -shave 0x111 -resize 400x400  -splice 0x10 -background &quot;#ffffff&quot;  \\
    -append  -crop -0+10 output.png</code>`,Bt,m,le,_a,he,Ea,ce,ya,me,Ta,fe,ka,pe,Ma,ue,Ia,ge,za,ve,Ha,De,Pa,xe,Aa,we,Ca,be,La,_e,ja,Ee,Sa,ye,Ra,Te,Na,ke,qa,Me,Fa,Ie,Ya,ze,Ja,He,Ba,Gt,M,I,Pe,Ga,Kt,G,Ka,Ot,R,ni=`<code class="language-sh">convert *.png -gravity south -splice 0x111 \\
    -shave 0x111 -resize 400x400  -set delay 300 output.gif</code>`,Qt,u,Ae,Oa,Ce,Qa,Le,Ua,je,Va,Se,Wa,Re,Xa,Ne,Za,qe,$a,Fe,eo,Ye,to,Je,ao,Be,oo,Ge,ro,Ke,io,Oe,so,Qe,no,Ut,z,H,Ue,lo,Vt,K,ho,Wt,N,li=`<code class="language-sh">convert *.png -resize 800x500^ -gravity center \\
    -crop  800x500+0+0 +repage -set delay 300 output.gif</code>`,Xt,g,Ve,co,We,mo,Xe,fo,Ze,po,$e,uo,et,go,tt,vo,at,Do,ot,xo,dt,wo,rt,bo,it,_o,st,Eo,nt,yo,lt,To,ht,ko,Zt,P,A,ct,Mo,$t,O,Io,ea,q,hi=`<code class="language-sh">convert *.png -gravity south \\
    -splice 0x111 -shave 0x111 -resize 400x400 converted.png
montage converted*.png -mode concatenate  -tile 2x2  output.png</code>`,ta,c,mt,zo,ft,Ho,pt,Po,ut,Ao,gt,Co,vt,Lo,Dt,jo,xt,So,wt,Ro,bt,No,_t,qo,Et,Fo,yt,Yo,Tt,Jo,kt,Bo,Mt,Go,It,Ko,zt,Oo,Ht,Qo,Pt,Uo,At,Vo,Ct,Wo,Lt,Xo,jt,Zo,aa,C,L,St,$o,oa,F,Y,ed,td;return{c(){E=o("h2"),y=o("a"),Q=o("span"),da=i("Combining images vertically with a line separating them"),Rt=v(),J=o("p"),ra=i("This is useful for combining a few images into a single vertical strip, with a 10px white border between each image, like the portrait photos from photo boots."),Nt=v(),j=o("pre"),qt=v(),x=o("dl"),U=o("dt"),ia=i("convert"),V=o("dd"),sa=i("calls up one of the ImageMagick commands, convert"),W=o("dt"),na=i("*.png[400x400] "),X=o("dd"),la=i("an expression using wildcards to match all png images in the current folder, and resize each as it is read so that neither width and height are greater than 400px"),Z=o("dt"),ha=i("-splice 0x10"),$=o("dd"),ca=i("add a 10px vertical border to each image"),ee=o("dt"),ma=i('-background "#ffffff"'),te=o("dd"),fa=i("make that border white (using HTML color ocde)"),ae=o("dt"),pa=i("-append"),oe=o("dd"),ua=i("combine images vertically - use +append to combine them horizontally"),de=o("dt"),ga=i("-crop -0+10"),re=o("dd"),va=i("crop the top 10 pixels from the combined image, as we want the borders only between images"),ie=o("dt"),Da=i("output.png"),se=o("dd"),xa=i("this is the result image file. It could just as easily be a .jpg"),Ft=v(),T=o("h2"),k=o("a"),ne=o("span"),wa=i("Removing window artefacts from the top of the images first"),Yt=v(),B=o("p"),ba=i("If you have, say, a bunch of screenshots with the address bar etc at the top, you need to modify the command to get rid of it first. This time you can\u2019t use the shortcut resize."),Jt=v(),S=o("pre"),Bt=v(),m=o("dl"),le=o("dt"),_a=i("convert"),he=o("dd"),Ea=i("calls up one of the ImageMagick commands, convert"),ce=o("dt"),ya=i("*.png "),me=o("dd"),Ta=i("an expression using wildcards to match all png images in the current folder"),fe=o("dt"),ka=i("-gravity south"),pe=o("dd"),Ma=i("aligns the next command(s) bottom"),ue=o("dt"),Ia=i("-splice 0x111"),ge=o("dd"),za=i("because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),ve=o("dt"),Ha=i("-shave 0x111"),De=o("dd"),Pa=i("This removes 111px from the top and bottom; -shave is easier to work with than -crop"),xe=o("dt"),Aa=i("-resize 400x400 "),we=o("dd"),Ca=i("now i can resize so that the image does not exceed 400 px either direction. From now on carry on as for previous command"),be=o("dt"),La=i("-splice 0x10"),_e=o("dd"),ja=i("add a 10px vertical border to each image"),Ee=o("dt"),Sa=i('-background "#ffffff"'),ye=o("dd"),Ra=i("make that border white (using HTML color ocde)"),Te=o("dt"),Na=i("-append"),ke=o("dd"),qa=i("combine images vertically - use +append to combine them horizontally"),Me=o("dt"),Fa=i("-crop -0+10"),Ie=o("dd"),Ya=i("crop the top 10 pixels from the combined image, as we want the borders only between images"),ze=o("dt"),Ja=i("output.png"),He=o("dd"),Ba=i("this is the result image file. It could just as easily be a .jpg"),Gt=v(),M=o("h2"),I=o("a"),Pe=o("span"),Ga=i("Combining images into an animated gif"),Kt=v(),G=o("p"),Ka=i("If instead you\u2019d rather create an animated gif, here\u2019s the simplest way to do it - without any of the powerful options that ImageMagick offers."),Ot=v(),R=o("pre"),Qt=v(),u=o("dl"),Ae=o("dt"),Oa=i("convert"),Ce=o("dd"),Qa=i("calls up one of the ImageMagick commands, "),Le=o("dt"),Ua=i("*.png "),je=o("dd"),Va=i("an expression using wildcards to match all png images in the current folder"),Se=o("dt"),Wa=i("-gravity south"),Re=o("dd"),Xa=i("aligns the next command(s) bottom"),Ne=o("dt"),Za=i("-splice 0x111"),qe=o("dd"),$a=i("because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),Fe=o("dt"),eo=i("-shave 0x111"),Ye=o("dd"),to=i("This removes 111px from the top and bottom; -shave is easier to work with than -crop"),Je=o("dt"),ao=i("-resize 400x400 "),Be=o("dd"),oo=i("now i can resize so that the image does not exceed 400 px either direction"),Ge=o("dt"),ro=i("-set delay 300"),Ke=o("dd"),io=i("adds a three seconds delay between all images"),Oe=o("dt"),so=i("output.gif"),Qe=o("dd"),no=i("that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif."),Ut=v(),z=o("h2"),H=o("a"),Ue=o("span"),lo=i("Cropping a set of images to the same size and animating them"),Vt=v(),K=o("p"),ho=i("If the images in the gif are of different size you may want to do something about that. Here they are cropped to a minimum common size, the extra pixels discarded."),Wt=v(),N=o("pre"),Xt=v(),g=o("dl"),Ve=o("dt"),co=i("convert"),We=o("dd"),mo=i("calls up one of the ImageMagick commands, "),Xe=o("dt"),fo=i("*.png "),Ze=o("dd"),po=i("an expression using wildcards to match all png images in the current folder"),$e=o("dt"),uo=i("-resize 800x500^"),et=o("dd"),go=i("the ^ after the dimensions means those are the minimum sizes rather then the maximum"),tt=o("dt"),vo=i("-gravity center"),at=o("dd"),Do=i("aligns the next command(s)"),ot=o("dt"),xo=i("-crop  800x500+0+0"),dt=o("dd"),wo=i("crops to 800x500, with no offest (0,0)"),rt=o("dt"),bo=i("+repage"),it=o("dd"),_o=i("resets the origin after the crop"),st=o("dt"),Eo=i("-set delay 300"),nt=o("dd"),yo=i("adds a three seconds delay between all images"),lt=o("dt"),To=i("output.gif"),ht=o("dd"),ko=i("that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif."),Zt=v(),P=o("h2"),A=o("a"),ct=o("span"),Mo=i("Arranging images in a grid"),$t=v(),O=o("p"),Io=i("This is actually two commands, one after the other - one to resize and crop the images, the other to arrange them."),ea=v(),q=o("pre"),ta=v(),c=o("dl"),mt=o("dt"),zo=i("convert"),ft=o("dd"),Ho=i("calls up one of the ImageMagick commands, convert"),pt=o("dt"),Po=i("*.png "),ut=o("dd"),Ao=i("an expression using wildcards to match all png images in the current folder"),gt=o("dt"),Co=i("-gravity south"),vt=o("dd"),Lo=i("aligns the next command(s) bottom"),Dt=o("dt"),jo=i("-splice 0x111"),xt=o("dd"),So=i("because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),wt=o("dt"),Ro=i("-shave 0x111"),bt=o("dd"),No=i("This removes 111px from the top and bottom; -shave is easier to work with than -crop"),_t=o("dt"),qo=i("-resize 400x400 "),Et=o("dd"),Fo=i("now i can resize so that the image does not exceed 400 px either direction"),yt=o("dt"),Yo=i("converted.png"),Tt=o("dd"),Jo=i("for each input image, it creates a correspoding output image in the current folder named converted-1.png, converted-2.png..."),kt=o("dt"),Bo=i("montage"),Mt=o("dd"),Go=i("calls up one of the ImageMagick commands, montage"),It=o("dt"),Ko=i("converted*.png"),zt=o("dd"),Oo=i("this time only match the images whose name start with 'converted', i.e. the ones created by the previous command"),Ht=o("dt"),Qo=i("-mode concatenate"),Pt=o("dd"),Uo=i("arranges them in a grid"),At=o("dt"),Vo=i("-tile 2x2"),Ct=o("dd"),Wo=i("in this particular case, it is a 2x2 grid as I only had four images. You can use x2 or 2x to keep the number of rows and columns respectively fixed at 2, and the other dimension filled in with however many images you have"),Lt=o("dt"),Xo=i("output.png"),jt=o("dd"),Zo=i("...and here comes the image"),aa=v(),C=o("h2"),L=o("a"),St=o("span"),$o=i("More"),oa=v(),F=o("p"),Y=o("a"),ed=i("More ImageMagick commands"),td=i("."),this.h()},l(a){E=d(a,"H2",{id:!0});var n=r(E);y=d(n,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ld=r(y);Q=d(ld,"SPAN",{class:!0}),r(Q).forEach(t),ld.forEach(t),da=s(n,"Combining images vertically with a line separating them"),n.forEach(t),Rt=D(a),J=d(a,"P",{});var hd=r(J);ra=s(hd,"This is useful for combining a few images into a single vertical strip, with a 10px white border between each image, like the portrait photos from photo boots."),hd.forEach(t),Nt=D(a),j=d(a,"PRE",{class:!0});var ci=r(j);ci.forEach(t),qt=D(a),x=d(a,"DL",{class:!0});var _=r(x);U=d(_,"DT",{});var cd=r(U);ia=s(cd,"convert"),cd.forEach(t),V=d(_,"DD",{});var md=r(V);sa=s(md,"calls up one of the ImageMagick commands, convert"),md.forEach(t),W=d(_,"DT",{});var fd=r(W);na=s(fd,"*.png[400x400] "),fd.forEach(t),X=d(_,"DD",{});var pd=r(X);la=s(pd,"an expression using wildcards to match all png images in the current folder, and resize each as it is read so that neither width and height are greater than 400px"),pd.forEach(t),Z=d(_,"DT",{});var ud=r(Z);ha=s(ud,"-splice 0x10"),ud.forEach(t),$=d(_,"DD",{});var gd=r($);ca=s(gd,"add a 10px vertical border to each image"),gd.forEach(t),ee=d(_,"DT",{});var vd=r(ee);ma=s(vd,'-background "#ffffff"'),vd.forEach(t),te=d(_,"DD",{});var Dd=r(te);fa=s(Dd,"make that border white (using HTML color ocde)"),Dd.forEach(t),ae=d(_,"DT",{});var xd=r(ae);pa=s(xd,"-append"),xd.forEach(t),oe=d(_,"DD",{});var wd=r(oe);ua=s(wd,"combine images vertically - use +append to combine them horizontally"),wd.forEach(t),de=d(_,"DT",{});var bd=r(de);ga=s(bd,"-crop -0+10"),bd.forEach(t),re=d(_,"DD",{});var _d=r(re);va=s(_d,"crop the top 10 pixels from the combined image, as we want the borders only between images"),_d.forEach(t),ie=d(_,"DT",{});var Ed=r(ie);Da=s(Ed,"output.png"),Ed.forEach(t),se=d(_,"DD",{});var yd=r(se);xa=s(yd,"this is the result image file. It could just as easily be a .jpg"),yd.forEach(t),_.forEach(t),Ft=D(a),T=d(a,"H2",{id:!0});var ad=r(T);k=d(ad,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Td=r(k);ne=d(Td,"SPAN",{class:!0}),r(ne).forEach(t),Td.forEach(t),wa=s(ad,"Removing window artefacts from the top of the images first"),ad.forEach(t),Yt=D(a),B=d(a,"P",{});var kd=r(B);ba=s(kd,"If you have, say, a bunch of screenshots with the address bar etc at the top, you need to modify the command to get rid of it first. This time you can\u2019t use the shortcut resize."),kd.forEach(t),Jt=D(a),S=d(a,"PRE",{class:!0});var mi=r(S);mi.forEach(t),Bt=D(a),m=d(a,"DL",{class:!0});var p=r(m);le=d(p,"DT",{});var Md=r(le);_a=s(Md,"convert"),Md.forEach(t),he=d(p,"DD",{});var Id=r(he);Ea=s(Id,"calls up one of the ImageMagick commands, convert"),Id.forEach(t),ce=d(p,"DT",{});var zd=r(ce);ya=s(zd,"*.png "),zd.forEach(t),me=d(p,"DD",{});var Hd=r(me);Ta=s(Hd,"an expression using wildcards to match all png images in the current folder"),Hd.forEach(t),fe=d(p,"DT",{});var Pd=r(fe);ka=s(Pd,"-gravity south"),Pd.forEach(t),pe=d(p,"DD",{});var Ad=r(pe);Ma=s(Ad,"aligns the next command(s) bottom"),Ad.forEach(t),ue=d(p,"DT",{});var Cd=r(ue);Ia=s(Cd,"-splice 0x111"),Cd.forEach(t),ge=d(p,"DD",{});var Ld=r(ge);za=s(Ld,"because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),Ld.forEach(t),ve=d(p,"DT",{});var jd=r(ve);Ha=s(jd,"-shave 0x111"),jd.forEach(t),De=d(p,"DD",{});var Sd=r(De);Pa=s(Sd,"This removes 111px from the top and bottom; -shave is easier to work with than -crop"),Sd.forEach(t),xe=d(p,"DT",{});var Rd=r(xe);Aa=s(Rd,"-resize 400x400 "),Rd.forEach(t),we=d(p,"DD",{});var Nd=r(we);Ca=s(Nd,"now i can resize so that the image does not exceed 400 px either direction. From now on carry on as for previous command"),Nd.forEach(t),be=d(p,"DT",{});var qd=r(be);La=s(qd,"-splice 0x10"),qd.forEach(t),_e=d(p,"DD",{});var Fd=r(_e);ja=s(Fd,"add a 10px vertical border to each image"),Fd.forEach(t),Ee=d(p,"DT",{});var Yd=r(Ee);Sa=s(Yd,'-background "#ffffff"'),Yd.forEach(t),ye=d(p,"DD",{});var Jd=r(ye);Ra=s(Jd,"make that border white (using HTML color ocde)"),Jd.forEach(t),Te=d(p,"DT",{});var Bd=r(Te);Na=s(Bd,"-append"),Bd.forEach(t),ke=d(p,"DD",{});var Gd=r(ke);qa=s(Gd,"combine images vertically - use +append to combine them horizontally"),Gd.forEach(t),Me=d(p,"DT",{});var Kd=r(Me);Fa=s(Kd,"-crop -0+10"),Kd.forEach(t),Ie=d(p,"DD",{});var Od=r(Ie);Ya=s(Od,"crop the top 10 pixels from the combined image, as we want the borders only between images"),Od.forEach(t),ze=d(p,"DT",{});var Qd=r(ze);Ja=s(Qd,"output.png"),Qd.forEach(t),He=d(p,"DD",{});var Ud=r(He);Ba=s(Ud,"this is the result image file. It could just as easily be a .jpg"),Ud.forEach(t),p.forEach(t),Gt=D(a),M=d(a,"H2",{id:!0});var od=r(M);I=d(od,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Vd=r(I);Pe=d(Vd,"SPAN",{class:!0}),r(Pe).forEach(t),Vd.forEach(t),Ga=s(od,"Combining images into an animated gif"),od.forEach(t),Kt=D(a),G=d(a,"P",{});var Wd=r(G);Ka=s(Wd,"If instead you\u2019d rather create an animated gif, here\u2019s the simplest way to do it - without any of the powerful options that ImageMagick offers."),Wd.forEach(t),Ot=D(a),R=d(a,"PRE",{class:!0});var fi=r(R);fi.forEach(t),Qt=D(a),u=d(a,"DL",{class:!0});var w=r(u);Ae=d(w,"DT",{});var Xd=r(Ae);Oa=s(Xd,"convert"),Xd.forEach(t),Ce=d(w,"DD",{});var Zd=r(Ce);Qa=s(Zd,"calls up one of the ImageMagick commands, "),Zd.forEach(t),Le=d(w,"DT",{});var $d=r(Le);Ua=s($d,"*.png "),$d.forEach(t),je=d(w,"DD",{});var er=r(je);Va=s(er,"an expression using wildcards to match all png images in the current folder"),er.forEach(t),Se=d(w,"DT",{});var tr=r(Se);Wa=s(tr,"-gravity south"),tr.forEach(t),Re=d(w,"DD",{});var ar=r(Re);Xa=s(ar,"aligns the next command(s) bottom"),ar.forEach(t),Ne=d(w,"DT",{});var or=r(Ne);Za=s(or,"-splice 0x111"),or.forEach(t),qe=d(w,"DD",{});var dr=r(qe);$a=s(dr,"because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),dr.forEach(t),Fe=d(w,"DT",{});var rr=r(Fe);eo=s(rr,"-shave 0x111"),rr.forEach(t),Ye=d(w,"DD",{});var ir=r(Ye);to=s(ir,"This removes 111px from the top and bottom; -shave is easier to work with than -crop"),ir.forEach(t),Je=d(w,"DT",{});var sr=r(Je);ao=s(sr,"-resize 400x400 "),sr.forEach(t),Be=d(w,"DD",{});var nr=r(Be);oo=s(nr,"now i can resize so that the image does not exceed 400 px either direction"),nr.forEach(t),Ge=d(w,"DT",{});var lr=r(Ge);ro=s(lr,"-set delay 300"),lr.forEach(t),Ke=d(w,"DD",{});var hr=r(Ke);io=s(hr,"adds a three seconds delay between all images"),hr.forEach(t),Oe=d(w,"DT",{});var cr=r(Oe);so=s(cr,"output.gif"),cr.forEach(t),Qe=d(w,"DD",{});var mr=r(Qe);no=s(mr,"that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif."),mr.forEach(t),w.forEach(t),Ut=D(a),z=d(a,"H2",{id:!0});var dd=r(z);H=d(dd,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var fr=r(H);Ue=d(fr,"SPAN",{class:!0}),r(Ue).forEach(t),fr.forEach(t),lo=s(dd,"Cropping a set of images to the same size and animating them"),dd.forEach(t),Vt=D(a),K=d(a,"P",{});var pr=r(K);ho=s(pr,"If the images in the gif are of different size you may want to do something about that. Here they are cropped to a minimum common size, the extra pixels discarded."),pr.forEach(t),Wt=D(a),N=d(a,"PRE",{class:!0});var pi=r(N);pi.forEach(t),Xt=D(a),g=d(a,"DL",{class:!0});var b=r(g);Ve=d(b,"DT",{});var ur=r(Ve);co=s(ur,"convert"),ur.forEach(t),We=d(b,"DD",{});var gr=r(We);mo=s(gr,"calls up one of the ImageMagick commands, "),gr.forEach(t),Xe=d(b,"DT",{});var vr=r(Xe);fo=s(vr,"*.png "),vr.forEach(t),Ze=d(b,"DD",{});var Dr=r(Ze);po=s(Dr,"an expression using wildcards to match all png images in the current folder"),Dr.forEach(t),$e=d(b,"DT",{});var xr=r($e);uo=s(xr,"-resize 800x500^"),xr.forEach(t),et=d(b,"DD",{});var wr=r(et);go=s(wr,"the ^ after the dimensions means those are the minimum sizes rather then the maximum"),wr.forEach(t),tt=d(b,"DT",{});var br=r(tt);vo=s(br,"-gravity center"),br.forEach(t),at=d(b,"DD",{});var _r=r(at);Do=s(_r,"aligns the next command(s)"),_r.forEach(t),ot=d(b,"DT",{});var Er=r(ot);xo=s(Er,"-crop  800x500+0+0"),Er.forEach(t),dt=d(b,"DD",{});var yr=r(dt);wo=s(yr,"crops to 800x500, with no offest (0,0)"),yr.forEach(t),rt=d(b,"DT",{});var Tr=r(rt);bo=s(Tr,"+repage"),Tr.forEach(t),it=d(b,"DD",{});var kr=r(it);_o=s(kr,"resets the origin after the crop"),kr.forEach(t),st=d(b,"DT",{});var Mr=r(st);Eo=s(Mr,"-set delay 300"),Mr.forEach(t),nt=d(b,"DD",{});var Ir=r(nt);yo=s(Ir,"adds a three seconds delay between all images"),Ir.forEach(t),lt=d(b,"DT",{});var zr=r(lt);To=s(zr,"output.gif"),zr.forEach(t),ht=d(b,"DD",{});var Hr=r(ht);ko=s(Hr,"that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif."),Hr.forEach(t),b.forEach(t),Zt=D(a),P=d(a,"H2",{id:!0});var rd=r(P);A=d(rd,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Pr=r(A);ct=d(Pr,"SPAN",{class:!0}),r(ct).forEach(t),Pr.forEach(t),Mo=s(rd,"Arranging images in a grid"),rd.forEach(t),$t=D(a),O=d(a,"P",{});var Ar=r(O);Io=s(Ar,"This is actually two commands, one after the other - one to resize and crop the images, the other to arrange them."),Ar.forEach(t),ea=D(a),q=d(a,"PRE",{class:!0});var ui=r(q);ui.forEach(t),ta=D(a),c=d(a,"DL",{class:!0});var f=r(c);mt=d(f,"DT",{});var Cr=r(mt);zo=s(Cr,"convert"),Cr.forEach(t),ft=d(f,"DD",{});var Lr=r(ft);Ho=s(Lr,"calls up one of the ImageMagick commands, convert"),Lr.forEach(t),pt=d(f,"DT",{});var jr=r(pt);Po=s(jr,"*.png "),jr.forEach(t),ut=d(f,"DD",{});var Sr=r(ut);Ao=s(Sr,"an expression using wildcards to match all png images in the current folder"),Sr.forEach(t),gt=d(f,"DT",{});var Rr=r(gt);Co=s(Rr,"-gravity south"),Rr.forEach(t),vt=d(f,"DD",{});var Nr=r(vt);Lo=s(Nr,"aligns the next command(s) bottom"),Nr.forEach(t),Dt=d(f,"DT",{});var qr=r(Dt);jo=s(qr,"-splice 0x111"),qr.forEach(t),xt=d(f,"DD",{});var Fr=r(xt);So=s(Fr,"because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command"),Fr.forEach(t),wt=d(f,"DT",{});var Yr=r(wt);Ro=s(Yr,"-shave 0x111"),Yr.forEach(t),bt=d(f,"DD",{});var Jr=r(bt);No=s(Jr,"This removes 111px from the top and bottom; -shave is easier to work with than -crop"),Jr.forEach(t),_t=d(f,"DT",{});var Br=r(_t);qo=s(Br,"-resize 400x400 "),Br.forEach(t),Et=d(f,"DD",{});var Gr=r(Et);Fo=s(Gr,"now i can resize so that the image does not exceed 400 px either direction"),Gr.forEach(t),yt=d(f,"DT",{});var Kr=r(yt);Yo=s(Kr,"converted.png"),Kr.forEach(t),Tt=d(f,"DD",{});var Or=r(Tt);Jo=s(Or,"for each input image, it creates a correspoding output image in the current folder named converted-1.png, converted-2.png..."),Or.forEach(t),kt=d(f,"DT",{});var Qr=r(kt);Bo=s(Qr,"montage"),Qr.forEach(t),Mt=d(f,"DD",{});var Ur=r(Mt);Go=s(Ur,"calls up one of the ImageMagick commands, montage"),Ur.forEach(t),It=d(f,"DT",{});var Vr=r(It);Ko=s(Vr,"converted*.png"),Vr.forEach(t),zt=d(f,"DD",{});var Wr=r(zt);Oo=s(Wr,"this time only match the images whose name start with 'converted', i.e. the ones created by the previous command"),Wr.forEach(t),Ht=d(f,"DT",{});var Xr=r(Ht);Qo=s(Xr,"-mode concatenate"),Xr.forEach(t),Pt=d(f,"DD",{});var Zr=r(Pt);Uo=s(Zr,"arranges them in a grid"),Zr.forEach(t),At=d(f,"DT",{});var $r=r(At);Vo=s($r,"-tile 2x2"),$r.forEach(t),Ct=d(f,"DD",{});var ei=r(Ct);Wo=s(ei,"in this particular case, it is a 2x2 grid as I only had four images. You can use x2 or 2x to keep the number of rows and columns respectively fixed at 2, and the other dimension filled in with however many images you have"),ei.forEach(t),Lt=d(f,"DT",{});var ti=r(Lt);Xo=s(ti,"output.png"),ti.forEach(t),jt=d(f,"DD",{});var ai=r(jt);Zo=s(ai,"...and here comes the image"),ai.forEach(t),f.forEach(t),aa=D(a),C=d(a,"H2",{id:!0});var id=r(C);L=d(id,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var oi=r(L);St=d(oi,"SPAN",{class:!0}),r(St).forEach(t),oi.forEach(t),$o=s(id,"More"),id.forEach(t),oa=D(a),F=d(a,"P",{});var sd=r(F);Y=d(sd,"A",{href:!0,rel:!0});var di=r(Y);ed=s(di,"More ImageMagick commands"),di.forEach(t),td=s(sd,"."),sd.forEach(t),this.h()},h(){h(Q,"class","icon icon-link"),h(y,"aria-hidden","true"),h(y,"tabindex","-1"),h(y,"href","#combining-images-vertically-with-a-line-separating-them"),h(E,"id","combining-images-vertically-with-a-line-separating-them"),h(j,"class","language-sh"),h(x,"class","code-breakdown"),h(ne,"class","icon icon-link"),h(k,"aria-hidden","true"),h(k,"tabindex","-1"),h(k,"href","#removing-window-artefacts-from-the-top-of-the-images-first"),h(T,"id","removing-window-artefacts-from-the-top-of-the-images-first"),h(S,"class","language-sh"),h(m,"class","code-breakdown"),h(Pe,"class","icon icon-link"),h(I,"aria-hidden","true"),h(I,"tabindex","-1"),h(I,"href","#combining-images-into-an-animated-gif"),h(M,"id","combining-images-into-an-animated-gif"),h(R,"class","language-sh"),h(u,"class","code-breakdown"),h(Ue,"class","icon icon-link"),h(H,"aria-hidden","true"),h(H,"tabindex","-1"),h(H,"href","#cropping-a-set-of-images-to-the-same-size-and-animating-them"),h(z,"id","cropping-a-set-of-images-to-the-same-size-and-animating-them"),h(N,"class","language-sh"),h(g,"class","code-breakdown"),h(ct,"class","icon icon-link"),h(A,"aria-hidden","true"),h(A,"tabindex","-1"),h(A,"href","#arranging-images-in-a-grid"),h(P,"id","arranging-images-in-a-grid"),h(q,"class","language-sh"),h(c,"class","code-breakdown"),h(St,"class","icon icon-link"),h(L,"aria-hidden","true"),h(L,"tabindex","-1"),h(L,"href","#more"),h(C,"id","more"),h(Y,"href","http://www.imagemagick.org/script/command-line-processing.php#anatomy"),h(Y,"rel","nofollow")},m(a,n){l(a,E,n),e(E,y),e(y,Q),e(E,da),l(a,Rt,n),l(a,J,n),e(J,ra),l(a,Nt,n),l(a,j,n),j.innerHTML=ii,l(a,qt,n),l(a,x,n),e(x,U),e(U,ia),e(x,V),e(V,sa),e(x,W),e(W,na),e(x,X),e(X,la),e(x,Z),e(Z,ha),e(x,$),e($,ca),e(x,ee),e(ee,ma),e(x,te),e(te,fa),e(x,ae),e(ae,pa),e(x,oe),e(oe,ua),e(x,de),e(de,ga),e(x,re),e(re,va),e(x,ie),e(ie,Da),e(x,se),e(se,xa),l(a,Ft,n),l(a,T,n),e(T,k),e(k,ne),e(T,wa),l(a,Yt,n),l(a,B,n),e(B,ba),l(a,Jt,n),l(a,S,n),S.innerHTML=si,l(a,Bt,n),l(a,m,n),e(m,le),e(le,_a),e(m,he),e(he,Ea),e(m,ce),e(ce,ya),e(m,me),e(me,Ta),e(m,fe),e(fe,ka),e(m,pe),e(pe,Ma),e(m,ue),e(ue,Ia),e(m,ge),e(ge,za),e(m,ve),e(ve,Ha),e(m,De),e(De,Pa),e(m,xe),e(xe,Aa),e(m,we),e(we,Ca),e(m,be),e(be,La),e(m,_e),e(_e,ja),e(m,Ee),e(Ee,Sa),e(m,ye),e(ye,Ra),e(m,Te),e(Te,Na),e(m,ke),e(ke,qa),e(m,Me),e(Me,Fa),e(m,Ie),e(Ie,Ya),e(m,ze),e(ze,Ja),e(m,He),e(He,Ba),l(a,Gt,n),l(a,M,n),e(M,I),e(I,Pe),e(M,Ga),l(a,Kt,n),l(a,G,n),e(G,Ka),l(a,Ot,n),l(a,R,n),R.innerHTML=ni,l(a,Qt,n),l(a,u,n),e(u,Ae),e(Ae,Oa),e(u,Ce),e(Ce,Qa),e(u,Le),e(Le,Ua),e(u,je),e(je,Va),e(u,Se),e(Se,Wa),e(u,Re),e(Re,Xa),e(u,Ne),e(Ne,Za),e(u,qe),e(qe,$a),e(u,Fe),e(Fe,eo),e(u,Ye),e(Ye,to),e(u,Je),e(Je,ao),e(u,Be),e(Be,oo),e(u,Ge),e(Ge,ro),e(u,Ke),e(Ke,io),e(u,Oe),e(Oe,so),e(u,Qe),e(Qe,no),l(a,Ut,n),l(a,z,n),e(z,H),e(H,Ue),e(z,lo),l(a,Vt,n),l(a,K,n),e(K,ho),l(a,Wt,n),l(a,N,n),N.innerHTML=li,l(a,Xt,n),l(a,g,n),e(g,Ve),e(Ve,co),e(g,We),e(We,mo),e(g,Xe),e(Xe,fo),e(g,Ze),e(Ze,po),e(g,$e),e($e,uo),e(g,et),e(et,go),e(g,tt),e(tt,vo),e(g,at),e(at,Do),e(g,ot),e(ot,xo),e(g,dt),e(dt,wo),e(g,rt),e(rt,bo),e(g,it),e(it,_o),e(g,st),e(st,Eo),e(g,nt),e(nt,yo),e(g,lt),e(lt,To),e(g,ht),e(ht,ko),l(a,Zt,n),l(a,P,n),e(P,A),e(A,ct),e(P,Mo),l(a,$t,n),l(a,O,n),e(O,Io),l(a,ea,n),l(a,q,n),q.innerHTML=hi,l(a,ta,n),l(a,c,n),e(c,mt),e(mt,zo),e(c,ft),e(ft,Ho),e(c,pt),e(pt,Po),e(c,ut),e(ut,Ao),e(c,gt),e(gt,Co),e(c,vt),e(vt,Lo),e(c,Dt),e(Dt,jo),e(c,xt),e(xt,So),e(c,wt),e(wt,Ro),e(c,bt),e(bt,No),e(c,_t),e(_t,qo),e(c,Et),e(Et,Fo),e(c,yt),e(yt,Yo),e(c,Tt),e(Tt,Jo),e(c,kt),e(kt,Bo),e(c,Mt),e(Mt,Go),e(c,It),e(It,Ko),e(c,zt),e(zt,Oo),e(c,Ht),e(Ht,Qo),e(c,Pt),e(Pt,Uo),e(c,At),e(At,Vo),e(c,Ct),e(Ct,Wo),e(c,Lt),e(Lt,Xo),e(c,jt),e(jt,Zo),l(a,aa,n),l(a,C,n),e(C,L),e(L,St),e(C,$o),l(a,oa,n),l(a,F,n),e(F,Y),e(Y,ed),e(F,td)},p:nd,i:nd,o:nd,d(a){a&&t(E),a&&t(Rt),a&&t(J),a&&t(Nt),a&&t(j),a&&t(qt),a&&t(x),a&&t(Ft),a&&t(T),a&&t(Yt),a&&t(B),a&&t(Jt),a&&t(S),a&&t(Bt),a&&t(m),a&&t(Gt),a&&t(M),a&&t(Kt),a&&t(G),a&&t(Ot),a&&t(R),a&&t(Qt),a&&t(u),a&&t(Ut),a&&t(z),a&&t(Vt),a&&t(K),a&&t(Wt),a&&t(N),a&&t(Xt),a&&t(g),a&&t(Zt),a&&t(P),a&&t($t),a&&t(O),a&&t(ea),a&&t(q),a&&t(ta),a&&t(c),a&&t(aa),a&&t(C),a&&t(oa),a&&t(F)}}}const bi={date:"2011-12-22 12:34",title:"Combining images with ImageMagick",prev:"google-apps-script-boilerplate",next:"change-title-cmd-window",excerpt:'Assorted <a href="http://www.imagemagick.org/script/index.php">ImageMagick</a> commands for combining images',tags:["imagemagick"]};class _i extends gi{constructor(E){super();vi(this,E,null,xi,Di,{})}}export{_i as default,bi as metadata};
