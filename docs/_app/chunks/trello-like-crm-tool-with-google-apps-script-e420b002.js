import{S as jo,i as No,s as Bo,e as i,t as u,k as d,c as s,a as r,d as t,h,m as p,b as o,g as n,I as a,E as Va}from"./index-6e518972.js";function Ho(Yo){let c,b,be,Tt,Ue,y,we,qt,Gt,oe,Ot,Mt,Je,ie,ve,Ct,Yt,Ke,w,v,ge,jt,ze,re,Nt,Ve,g,k,ke,Bt,Xe,le,Ht,Ze,A,E,Ae,Rt,Qe,_,Ft,ne,Wt,Dt,$e,I,Lt,Ee,Ut,Jt,et,S,x,_e,Kt,tt,P,zt,se,Vt,Xt,at,T,q,Ie,Zt,ot,ue,Qt,it,G,$t,he,ea,ta,st,O,M,Se,aa,rt,f,oa,xe,ia,sa,Pe,ra,la,lt,C,na,Te,ua,ha,nt,Y,j,qe,da,ut,de,pa,ht,N,B,Ge,ca,dt,H,R,Oe,fa,pt,F,W,Me,ma,ct,D,L,Ce,ya,ft,U,J,Ye,ba,mt,K,z,je,wa,yt,V,X,Ne,va,bt,Z,Q,Be,ga,wt,$,ee,He,ka,vt,te,ae,Re,Aa,gt,pe,Ea,kt,ce,_a,At,m,Fe,Ia,Sa,We,xa,Pa,De,Ta,Et,fe,qa;return{c(){c=i("h2"),b=i("a"),be=i("span"),Tt=u("Need a CRM? Why not just use \u2026?"),Ue=d(),y=i("p"),we=i("em"),qt=u("Why not just use a real CRM"),Gt=u("? The issues with CRMs is that the problem they are trying to solve is quite broad. Commercial CRM software needs to be general enough to appeal to all types of users. To fit all their requirements, it often ends up overcomplicated and fiddly. Learning requires quite a time investment. Which might be worth if you work in sales and a CRM is your main tool. But I am a casual user. I tried "),oe=i("a"),Ot=u("Capsule"),Mt=u(" and I found I spent most of my time trying to bend it to my needs."),Je=d(),ie=i("p"),ve=i("em"),Ct=u("Why not just use Trello"),Yt=u("? I never understood the appeal of Trello. Yes, it gives you a Kanban-like workflow and the ability to include pretty pictures. But entering and editing data is way too laborious for my taste. You always need several clicks to get where you want. Also, I couldn\u2019t find ways to reorder or archive steps. And the horizontal scroll thing doesn\u2019t work for me. It works for physical whiteboards on walls, but not so much for electronic devices, IMHO"),Ke=d(),w=i("h2"),v=i("a"),ge=i("span"),jt=u("Google Sheets with Apps Script is a great tool for quick tools and prototypes"),ze=d(),re=i("p"),Nt=u("Google Sheets with some Google Apps Scripts (GAS) and maybe forms are quite underrated as prototyping tools. You can quickly put together small \u201Capps\u201D and distribute them around. No installation required. Just send a link and start gathering data and validating ideas. As long as you are aware of its strong points and limitations"),Ve=d(),g=i("h2"),k=i("a"),ke=i("span"),Bt=u("Tips on using Google Apps Script for prototyping"),Xe=d(),le=i("p"),Ht=u("In these years of using Google Apps Scripts I have collected a couple of principles that helped me well."),Ze=d(),A=i("h3"),E=i("a"),Ae=i("span"),Rt=u("1. Explicit interactions vs trying to build a SPA"),Qe=d(),_=i("p"),Ft=u("Google are super cautious when it comes to security with GAS. They limit a lot of functionality. Trying to build a fully fledged "),ne=i("abbr"),Wt=u("SPA"),Dt=u(" with it is going to run into walls pretty quick. You can\u2019t detect when a user is selecting a cell or interacting with the UI. My suggestion is to save yourself some frustration and not even try."),$e=d(),I=i("p"),Lt=u("I am talking about things like automatically reordering a list when a user edits a date of an item in it. Forget it. Just build your \u201Capp\u201D like in the good old days of the "),Ee=i("code"),Ut=u("cgi-bin"),Jt=u(". That is, to make anything happen, make the user click on a button or select from a menu."),et=d(),S=i("h3"),x=i("a"),_e=i("span"),Kt=u("2. Resist the temptation to start coding straight away"),tt=d(),P=i("p"),zt=u("The nice thing about prototyping with Google Sheets is that you don\u2019t have need scripting. You can start doing everything completely manually. You\u2019ll need a bit of discipline to perform all the steps a script would do. But it\u2019s doable. Then you can start adding scripting to replace the most common manual steps you take. The app will grow organically. It doesn\u2019t get more "),se=i("a"),Vt=u("Lean"),Xt=u(" than that!"),at=d(),T=i("h3"),q=i("a"),Ie=i("span"),Zt=u("3. Model your problem space first"),ot=d(),ue=i("p"),Qt=u("For small prototype the temptation is often to jump in and hack some code and see it at work. But that doesn\u2019t work so well with GAS. That\u2019s because your code will consist of endless variations on the same themes. Insert a cell, insert a row, copy some cell content elsewhere, remove a cell, etc. Over and over. All the code ends up looking the same with only minor variations. Then you notice some patterns, and decide to abstract them into generalised functions. But they also look exactly the same as everything else. It\u2019s like a house of mirrors. You\u2019ll get lost very quickly."),it=d(),G=i("p"),$t=u("Instead try and create abstractions that reflect your problem space. You are writing a recipes app? Think of Ingredients, Steps or whatever else. A journey planner? Then you may need Destination and so on. That may seem an overkill at first, but it will be very helpful as your prototype grows. Also think of "),he=i("abbr"),ea=u("OOP"),ta=u(", and collect all your similar abstractions into a container / manager. So an IngredientList for Ingredients, a TripManager for a collection of Destinations, etc. Yes it smells like Java, but that\u2019s how the underlying stack works. It seems foolish to fight it."),st=d(),O=i("h3"),M=i("a"),Se=i("span"),aa=u("4. OOP is actually quite helpful (but there is a place for some FP too)"),rt=d(),f=i("p"),oa=u("GAS is very classical-OOP based. You have a Sheet object, with contains Range objects, and so on. Whatever you think of OOP, It actually helps using the same approach for your abstraction. Once you have identified your abstractions, what can happen to them? An Ingredient in a recipes app, for example. You can recalculate amount if you change the number of servings. Then add a "),xe=i("code"),ia=u("recalculateAmount"),sa=u(" method. Or you may have a \u201Cconvert to metric\u201D toggle - then add a "),Pe=i("code"),ra=u("convertToMetric"),la=u(" method to your Ingredient class. And so on. It keeps everything neat"),lt=d(),C=i("p"),na=u("FP becomes useful when you want to share utilities, especially formatting. For example, an "),Te=i("code"),ua=u("asArchive"),ha=u(" function would be useful to add consistent formatting to some of your abstractions. But then again you could do that with multiple inheritance or mixins."),nt=d(),Y=i("h3"),j=i("a"),qe=i("span"),da=u("5. Testing is not a solved problem"),ut=d(),de=i("p"),pa=u("\u201CWe didn\u2019t write tests because we didn\u2019t have time\u2026 we didn\u2019t have time because we didn\u2019t write tests\u201D is a well known programming meme. Sadly it\u2019s pretty much the only way with GAS. At the time of writing there isn\u2019t a testing framework for it. You will have to roll out your own. And it\u2019s not that easy (you can\u2019t simulate button clicks etc). The time investment in trying to write some sort of meaningful tests far outweigh the time it\u2019d take you to fix any bugs. I know because I tried. Unless writing GAS is your full time job and you are really investing in it for the long term, of course. If you do let me know, I\u2019d love to use your testing libraries \u{1F609}"),ht=d(),N=i("h2"),B=i("a"),Ge=i("span"),ca=u("Coding the App"),dt=d(),H=i("h3"),R=i("a"),Oe=i("span"),fa=u("Setup and menu"),pt=d(),F=i("h3"),W=i("a"),Me=i("span"),ma=u("Iterating without programming to reach an initial MVP"),ct=d(),D=i("h3"),L=i("a"),Ce=i("span"),ya=u("Modelling the data"),ft=d(),U=i("h4"),J=i("a"),Ye=i("span"),ba=u("Generic Atom component"),mt=d(),K=i("h4"),z=i("a"),je=i("span"),wa=u("Derived components: Step, Current, Meta"),yt=d(),V=i("h4"),X=i("a"),Ne=i("span"),va=u("A Sequence of Steps"),bt=d(),Z=i("h4"),Q=i("a"),Be=i("span"),ga=u("There must be a better way to provide input\u2026"),wt=d(),$=i("h4"),ee=i("a"),He=i("span"),ka=u("Bringing it All Together: Store"),vt=d(),te=i("h3"),ae=i("a"),Re=i("span"),Aa=u("Conclusion and potential next steps"),gt=d(),pe=i("p"),Ea=u("I have used this app for a while and does the job quite well, with a minimum of fuss. And what is more, it was usable from day 1 - with a lot of manual data entry at the beginning, which became less and less as I automated more and more steps. Obviously it\u2019s not as slick as a SPA put together by a team of UX and FE devs, but then it costed rather less in term of efforts. I find Google Apps Script great for knocking together quick prototypes like this."),kt=d(),ce=i("p"),_a=u("I am not going to take this any further as my basic needs are met. But should I want to, it would be possible, for example to"),At=d(),m=i("ul"),Fe=i("li"),Ia=u("integrate with email to automatically generate steps from incoming messages, or generate emails from steps"),Sa=d(),We=i("li"),xa=u("integrate with calendar to generate appointments and set reminders"),Pa=d(),De=i("li"),Ta=u("all of the above, to automatically generate emails with a list of available slots from my calendar."),Et=d(),fe=i("p"),qa=u("This would actually be quite useful, and who knows, I may well tackle it one of these days."),this.h()},l(e){c=s(e,"H2",{id:!0});var l=r(c);b=s(l,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Xa=r(b);be=s(Xa,"SPAN",{class:!0}),r(be).forEach(t),Xa.forEach(t),Tt=h(l,"Need a CRM? Why not just use \u2026?"),l.forEach(t),Ue=p(e),y=s(e,"P",{});var Le=r(y);we=s(Le,"EM",{});var Za=r(we);qt=h(Za,"Why not just use a real CRM"),Za.forEach(t),Gt=h(Le,"? The issues with CRMs is that the problem they are trying to solve is quite broad. Commercial CRM software needs to be general enough to appeal to all types of users. To fit all their requirements, it often ends up overcomplicated and fiddly. Learning requires quite a time investment. Which might be worth if you work in sales and a CRM is your main tool. But I am a casual user. I tried "),oe=s(Le,"A",{href:!0,rel:!0});var Qa=r(oe);Ot=h(Qa,"Capsule"),Qa.forEach(t),Mt=h(Le," and I found I spent most of my time trying to bend it to my needs."),Le.forEach(t),Je=p(e),ie=s(e,"P",{});var Ga=r(ie);ve=s(Ga,"EM",{});var $a=r(ve);Ct=h($a,"Why not just use Trello"),$a.forEach(t),Yt=h(Ga,"? I never understood the appeal of Trello. Yes, it gives you a Kanban-like workflow and the ability to include pretty pictures. But entering and editing data is way too laborious for my taste. You always need several clicks to get where you want. Also, I couldn\u2019t find ways to reorder or archive steps. And the horizontal scroll thing doesn\u2019t work for me. It works for physical whiteboards on walls, but not so much for electronic devices, IMHO"),Ga.forEach(t),Ke=p(e),w=s(e,"H2",{id:!0});var Oa=r(w);v=s(Oa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var eo=r(v);ge=s(eo,"SPAN",{class:!0}),r(ge).forEach(t),eo.forEach(t),jt=h(Oa,"Google Sheets with Apps Script is a great tool for quick tools and prototypes"),Oa.forEach(t),ze=p(e),re=s(e,"P",{});var to=r(re);Nt=h(to,"Google Sheets with some Google Apps Scripts (GAS) and maybe forms are quite underrated as prototyping tools. You can quickly put together small \u201Capps\u201D and distribute them around. No installation required. Just send a link and start gathering data and validating ideas. As long as you are aware of its strong points and limitations"),to.forEach(t),Ve=p(e),g=s(e,"H2",{id:!0});var Ma=r(g);k=s(Ma,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ao=r(k);ke=s(ao,"SPAN",{class:!0}),r(ke).forEach(t),ao.forEach(t),Bt=h(Ma,"Tips on using Google Apps Script for prototyping"),Ma.forEach(t),Xe=p(e),le=s(e,"P",{});var oo=r(le);Ht=h(oo,"In these years of using Google Apps Scripts I have collected a couple of principles that helped me well."),oo.forEach(t),Ze=p(e),A=s(e,"H3",{id:!0});var Ca=r(A);E=s(Ca,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var io=r(E);Ae=s(io,"SPAN",{class:!0}),r(Ae).forEach(t),io.forEach(t),Rt=h(Ca,"1. Explicit interactions vs trying to build a SPA"),Ca.forEach(t),Qe=p(e),_=s(e,"P",{});var _t=r(_);Ft=h(_t,"Google are super cautious when it comes to security with GAS. They limit a lot of functionality. Trying to build a fully fledged "),ne=s(_t,"ABBR",{title:!0});var so=r(ne);Wt=h(so,"SPA"),so.forEach(t),Dt=h(_t," with it is going to run into walls pretty quick. You can\u2019t detect when a user is selecting a cell or interacting with the UI. My suggestion is to save yourself some frustration and not even try."),_t.forEach(t),$e=p(e),I=s(e,"P",{});var It=r(I);Lt=h(It,"I am talking about things like automatically reordering a list when a user edits a date of an item in it. Forget it. Just build your \u201Capp\u201D like in the good old days of the "),Ee=s(It,"CODE",{});var ro=r(Ee);Ut=h(ro,"cgi-bin"),ro.forEach(t),Jt=h(It,". That is, to make anything happen, make the user click on a button or select from a menu."),It.forEach(t),et=p(e),S=s(e,"H3",{id:!0});var Ya=r(S);x=s(Ya,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var lo=r(x);_e=s(lo,"SPAN",{class:!0}),r(_e).forEach(t),lo.forEach(t),Kt=h(Ya,"2. Resist the temptation to start coding straight away"),Ya.forEach(t),tt=p(e),P=s(e,"P",{});var St=r(P);zt=h(St,"The nice thing about prototyping with Google Sheets is that you don\u2019t have need scripting. You can start doing everything completely manually. You\u2019ll need a bit of discipline to perform all the steps a script would do. But it\u2019s doable. Then you can start adding scripting to replace the most common manual steps you take. The app will grow organically. It doesn\u2019t get more "),se=s(St,"A",{href:!0,rel:!0});var no=r(se);Vt=h(no,"Lean"),no.forEach(t),Xt=h(St," than that!"),St.forEach(t),at=p(e),T=s(e,"H3",{id:!0});var ja=r(T);q=s(ja,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var uo=r(q);Ie=s(uo,"SPAN",{class:!0}),r(Ie).forEach(t),uo.forEach(t),Zt=h(ja,"3. Model your problem space first"),ja.forEach(t),ot=p(e),ue=s(e,"P",{});var ho=r(ue);Qt=h(ho,"For small prototype the temptation is often to jump in and hack some code and see it at work. But that doesn\u2019t work so well with GAS. That\u2019s because your code will consist of endless variations on the same themes. Insert a cell, insert a row, copy some cell content elsewhere, remove a cell, etc. Over and over. All the code ends up looking the same with only minor variations. Then you notice some patterns, and decide to abstract them into generalised functions. But they also look exactly the same as everything else. It\u2019s like a house of mirrors. You\u2019ll get lost very quickly."),ho.forEach(t),it=p(e),G=s(e,"P",{});var xt=r(G);$t=h(xt,"Instead try and create abstractions that reflect your problem space. You are writing a recipes app? Think of Ingredients, Steps or whatever else. A journey planner? Then you may need Destination and so on. That may seem an overkill at first, but it will be very helpful as your prototype grows. Also think of "),he=s(xt,"ABBR",{title:!0});var po=r(he);ea=h(po,"OOP"),po.forEach(t),ta=h(xt,", and collect all your similar abstractions into a container / manager. So an IngredientList for Ingredients, a TripManager for a collection of Destinations, etc. Yes it smells like Java, but that\u2019s how the underlying stack works. It seems foolish to fight it."),xt.forEach(t),st=p(e),O=s(e,"H3",{id:!0});var Na=r(O);M=s(Na,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var co=r(M);Se=s(co,"SPAN",{class:!0}),r(Se).forEach(t),co.forEach(t),aa=h(Na,"4. OOP is actually quite helpful (but there is a place for some FP too)"),Na.forEach(t),rt=p(e),f=s(e,"P",{});var me=r(f);oa=h(me,"GAS is very classical-OOP based. You have a Sheet object, with contains Range objects, and so on. Whatever you think of OOP, It actually helps using the same approach for your abstraction. Once you have identified your abstractions, what can happen to them? An Ingredient in a recipes app, for example. You can recalculate amount if you change the number of servings. Then add a "),xe=s(me,"CODE",{});var fo=r(xe);ia=h(fo,"recalculateAmount"),fo.forEach(t),sa=h(me," method. Or you may have a \u201Cconvert to metric\u201D toggle - then add a "),Pe=s(me,"CODE",{});var mo=r(Pe);ra=h(mo,"convertToMetric"),mo.forEach(t),la=h(me," method to your Ingredient class. And so on. It keeps everything neat"),me.forEach(t),lt=p(e),C=s(e,"P",{});var Pt=r(C);na=h(Pt,"FP becomes useful when you want to share utilities, especially formatting. For example, an "),Te=s(Pt,"CODE",{});var yo=r(Te);ua=h(yo,"asArchive"),yo.forEach(t),ha=h(Pt," function would be useful to add consistent formatting to some of your abstractions. But then again you could do that with multiple inheritance or mixins."),Pt.forEach(t),nt=p(e),Y=s(e,"H3",{id:!0});var Ba=r(Y);j=s(Ba,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var bo=r(j);qe=s(bo,"SPAN",{class:!0}),r(qe).forEach(t),bo.forEach(t),da=h(Ba,"5. Testing is not a solved problem"),Ba.forEach(t),ut=p(e),de=s(e,"P",{});var wo=r(de);pa=h(wo,"\u201CWe didn\u2019t write tests because we didn\u2019t have time\u2026 we didn\u2019t have time because we didn\u2019t write tests\u201D is a well known programming meme. Sadly it\u2019s pretty much the only way with GAS. At the time of writing there isn\u2019t a testing framework for it. You will have to roll out your own. And it\u2019s not that easy (you can\u2019t simulate button clicks etc). The time investment in trying to write some sort of meaningful tests far outweigh the time it\u2019d take you to fix any bugs. I know because I tried. Unless writing GAS is your full time job and you are really investing in it for the long term, of course. If you do let me know, I\u2019d love to use your testing libraries \u{1F609}"),wo.forEach(t),ht=p(e),N=s(e,"H2",{id:!0});var Ha=r(N);B=s(Ha,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var vo=r(B);Ge=s(vo,"SPAN",{class:!0}),r(Ge).forEach(t),vo.forEach(t),ca=h(Ha,"Coding the App"),Ha.forEach(t),dt=p(e),H=s(e,"H3",{id:!0});var Ra=r(H);R=s(Ra,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var go=r(R);Oe=s(go,"SPAN",{class:!0}),r(Oe).forEach(t),go.forEach(t),fa=h(Ra,"Setup and menu"),Ra.forEach(t),pt=p(e),F=s(e,"H3",{id:!0});var Fa=r(F);W=s(Fa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ko=r(W);Me=s(ko,"SPAN",{class:!0}),r(Me).forEach(t),ko.forEach(t),ma=h(Fa,"Iterating without programming to reach an initial MVP"),Fa.forEach(t),ct=p(e),D=s(e,"H3",{id:!0});var Wa=r(D);L=s(Wa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Ao=r(L);Ce=s(Ao,"SPAN",{class:!0}),r(Ce).forEach(t),Ao.forEach(t),ya=h(Wa,"Modelling the data"),Wa.forEach(t),ft=p(e),U=s(e,"H4",{id:!0});var Da=r(U);J=s(Da,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Eo=r(J);Ye=s(Eo,"SPAN",{class:!0}),r(Ye).forEach(t),Eo.forEach(t),ba=h(Da,"Generic Atom component"),Da.forEach(t),mt=p(e),K=s(e,"H4",{id:!0});var La=r(K);z=s(La,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _o=r(z);je=s(_o,"SPAN",{class:!0}),r(je).forEach(t),_o.forEach(t),wa=h(La,"Derived components: Step, Current, Meta"),La.forEach(t),yt=p(e),V=s(e,"H4",{id:!0});var Ua=r(V);X=s(Ua,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Io=r(X);Ne=s(Io,"SPAN",{class:!0}),r(Ne).forEach(t),Io.forEach(t),va=h(Ua,"A Sequence of Steps"),Ua.forEach(t),bt=p(e),Z=s(e,"H4",{id:!0});var Ja=r(Z);Q=s(Ja,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var So=r(Q);Be=s(So,"SPAN",{class:!0}),r(Be).forEach(t),So.forEach(t),ga=h(Ja,"There must be a better way to provide input\u2026"),Ja.forEach(t),wt=p(e),$=s(e,"H4",{id:!0});var Ka=r($);ee=s(Ka,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var xo=r(ee);He=s(xo,"SPAN",{class:!0}),r(He).forEach(t),xo.forEach(t),ka=h(Ka,"Bringing it All Together: Store"),Ka.forEach(t),vt=p(e),te=s(e,"H3",{id:!0});var za=r(te);ae=s(za,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Po=r(ae);Re=s(Po,"SPAN",{class:!0}),r(Re).forEach(t),Po.forEach(t),Aa=h(za,"Conclusion and potential next steps"),za.forEach(t),gt=p(e),pe=s(e,"P",{});var To=r(pe);Ea=h(To,"I have used this app for a while and does the job quite well, with a minimum of fuss. And what is more, it was usable from day 1 - with a lot of manual data entry at the beginning, which became less and less as I automated more and more steps. Obviously it\u2019s not as slick as a SPA put together by a team of UX and FE devs, but then it costed rather less in term of efforts. I find Google Apps Script great for knocking together quick prototypes like this."),To.forEach(t),kt=p(e),ce=s(e,"P",{});var qo=r(ce);_a=h(qo,"I am not going to take this any further as my basic needs are met. But should I want to, it would be possible, for example to"),qo.forEach(t),At=p(e),m=s(e,"UL",{});var ye=r(m);Fe=s(ye,"LI",{});var Go=r(Fe);Ia=h(Go,"integrate with email to automatically generate steps from incoming messages, or generate emails from steps"),Go.forEach(t),Sa=p(ye),We=s(ye,"LI",{});var Oo=r(We);xa=h(Oo,"integrate with calendar to generate appointments and set reminders"),Oo.forEach(t),Pa=p(ye),De=s(ye,"LI",{});var Mo=r(De);Ta=h(Mo,"all of the above, to automatically generate emails with a list of available slots from my calendar."),Mo.forEach(t),ye.forEach(t),Et=p(e),fe=s(e,"P",{});var Co=r(fe);qa=h(Co,"This would actually be quite useful, and who knows, I may well tackle it one of these days."),Co.forEach(t),this.h()},h(){o(be,"class","icon icon-link"),o(b,"aria-hidden","true"),o(b,"tabindex","-1"),o(b,"href","#need-a-crm-why-not-just-use-"),o(c,"id","need-a-crm-why-not-just-use-"),o(oe,"href","https://capsulecrm.com/"),o(oe,"rel","nofollow"),o(ge,"class","icon icon-link"),o(v,"aria-hidden","true"),o(v,"tabindex","-1"),o(v,"href","#google-sheets-with-apps-script-is-a-great-tool-for-quick-tools-and-prototypes"),o(w,"id","google-sheets-with-apps-script-is-a-great-tool-for-quick-tools-and-prototypes"),o(ke,"class","icon icon-link"),o(k,"aria-hidden","true"),o(k,"tabindex","-1"),o(k,"href","#tips-on-using-google-apps-script-for-prototyping"),o(g,"id","tips-on-using-google-apps-script-for-prototyping"),o(Ae,"class","icon icon-link"),o(E,"aria-hidden","true"),o(E,"tabindex","-1"),o(E,"href","#1-explicit-interactions-vs-trying-to-build-a-spa"),o(A,"id","1-explicit-interactions-vs-trying-to-build-a-spa"),o(ne,"title","Single Page Application"),o(_e,"class","icon icon-link"),o(x,"aria-hidden","true"),o(x,"tabindex","-1"),o(x,"href","#2-resist-the-temptation-to-start-coding-straight-away"),o(S,"id","2-resist-the-temptation-to-start-coding-straight-away"),o(se,"href","https://www.natechplastics.com/four-stages-of-lean-product-development/"),o(se,"rel","nofollow"),o(Ie,"class","icon icon-link"),o(q,"aria-hidden","true"),o(q,"tabindex","-1"),o(q,"href","#3-model-your-problem-space-first"),o(T,"id","3-model-your-problem-space-first"),o(he,"title","Object Oriented Programming"),o(Se,"class","icon icon-link"),o(M,"aria-hidden","true"),o(M,"tabindex","-1"),o(M,"href","#4-oop-is-actually-quite-helpful-but-there-is-a-place-for-some-fp-too"),o(O,"id","4-oop-is-actually-quite-helpful-but-there-is-a-place-for-some-fp-too"),o(qe,"class","icon icon-link"),o(j,"aria-hidden","true"),o(j,"tabindex","-1"),o(j,"href","#5-testing-is-not-a-solved-problem"),o(Y,"id","5-testing-is-not-a-solved-problem"),o(Ge,"class","icon icon-link"),o(B,"aria-hidden","true"),o(B,"tabindex","-1"),o(B,"href","#coding-the-app"),o(N,"id","coding-the-app"),o(Oe,"class","icon icon-link"),o(R,"aria-hidden","true"),o(R,"tabindex","-1"),o(R,"href","#setup-and-menu"),o(H,"id","setup-and-menu"),o(Me,"class","icon icon-link"),o(W,"aria-hidden","true"),o(W,"tabindex","-1"),o(W,"href","#iterating-without-programming-to-reach-an-initial-mvp"),o(F,"id","iterating-without-programming-to-reach-an-initial-mvp"),o(Ce,"class","icon icon-link"),o(L,"aria-hidden","true"),o(L,"tabindex","-1"),o(L,"href","#modelling-the-data"),o(D,"id","modelling-the-data"),o(Ye,"class","icon icon-link"),o(J,"aria-hidden","true"),o(J,"tabindex","-1"),o(J,"href","#generic-atom-component"),o(U,"id","generic-atom-component"),o(je,"class","icon icon-link"),o(z,"aria-hidden","true"),o(z,"tabindex","-1"),o(z,"href","#derived-components-step-current-meta"),o(K,"id","derived-components-step-current-meta"),o(Ne,"class","icon icon-link"),o(X,"aria-hidden","true"),o(X,"tabindex","-1"),o(X,"href","#a-sequence-of-steps"),o(V,"id","a-sequence-of-steps"),o(Be,"class","icon icon-link"),o(Q,"aria-hidden","true"),o(Q,"tabindex","-1"),o(Q,"href","#there-must-be-a-better-way-to-provide-input"),o(Z,"id","there-must-be-a-better-way-to-provide-input"),o(He,"class","icon icon-link"),o(ee,"aria-hidden","true"),o(ee,"tabindex","-1"),o(ee,"href","#bringing-it-all-together-store"),o($,"id","bringing-it-all-together-store"),o(Re,"class","icon icon-link"),o(ae,"aria-hidden","true"),o(ae,"tabindex","-1"),o(ae,"href","#conclusion-and-potential-next-steps"),o(te,"id","conclusion-and-potential-next-steps")},m(e,l){n(e,c,l),a(c,b),a(b,be),a(c,Tt),n(e,Ue,l),n(e,y,l),a(y,we),a(we,qt),a(y,Gt),a(y,oe),a(oe,Ot),a(y,Mt),n(e,Je,l),n(e,ie,l),a(ie,ve),a(ve,Ct),a(ie,Yt),n(e,Ke,l),n(e,w,l),a(w,v),a(v,ge),a(w,jt),n(e,ze,l),n(e,re,l),a(re,Nt),n(e,Ve,l),n(e,g,l),a(g,k),a(k,ke),a(g,Bt),n(e,Xe,l),n(e,le,l),a(le,Ht),n(e,Ze,l),n(e,A,l),a(A,E),a(E,Ae),a(A,Rt),n(e,Qe,l),n(e,_,l),a(_,Ft),a(_,ne),a(ne,Wt),a(_,Dt),n(e,$e,l),n(e,I,l),a(I,Lt),a(I,Ee),a(Ee,Ut),a(I,Jt),n(e,et,l),n(e,S,l),a(S,x),a(x,_e),a(S,Kt),n(e,tt,l),n(e,P,l),a(P,zt),a(P,se),a(se,Vt),a(P,Xt),n(e,at,l),n(e,T,l),a(T,q),a(q,Ie),a(T,Zt),n(e,ot,l),n(e,ue,l),a(ue,Qt),n(e,it,l),n(e,G,l),a(G,$t),a(G,he),a(he,ea),a(G,ta),n(e,st,l),n(e,O,l),a(O,M),a(M,Se),a(O,aa),n(e,rt,l),n(e,f,l),a(f,oa),a(f,xe),a(xe,ia),a(f,sa),a(f,Pe),a(Pe,ra),a(f,la),n(e,lt,l),n(e,C,l),a(C,na),a(C,Te),a(Te,ua),a(C,ha),n(e,nt,l),n(e,Y,l),a(Y,j),a(j,qe),a(Y,da),n(e,ut,l),n(e,de,l),a(de,pa),n(e,ht,l),n(e,N,l),a(N,B),a(B,Ge),a(N,ca),n(e,dt,l),n(e,H,l),a(H,R),a(R,Oe),a(H,fa),n(e,pt,l),n(e,F,l),a(F,W),a(W,Me),a(F,ma),n(e,ct,l),n(e,D,l),a(D,L),a(L,Ce),a(D,ya),n(e,ft,l),n(e,U,l),a(U,J),a(J,Ye),a(U,ba),n(e,mt,l),n(e,K,l),a(K,z),a(z,je),a(K,wa),n(e,yt,l),n(e,V,l),a(V,X),a(X,Ne),a(V,va),n(e,bt,l),n(e,Z,l),a(Z,Q),a(Q,Be),a(Z,ga),n(e,wt,l),n(e,$,l),a($,ee),a(ee,He),a($,ka),n(e,vt,l),n(e,te,l),a(te,ae),a(ae,Re),a(te,Aa),n(e,gt,l),n(e,pe,l),a(pe,Ea),n(e,kt,l),n(e,ce,l),a(ce,_a),n(e,At,l),n(e,m,l),a(m,Fe),a(Fe,Ia),a(m,Sa),a(m,We),a(We,xa),a(m,Pa),a(m,De),a(De,Ta),n(e,Et,l),n(e,fe,l),a(fe,qa)},p:Va,i:Va,o:Va,d(e){e&&t(c),e&&t(Ue),e&&t(y),e&&t(Je),e&&t(ie),e&&t(Ke),e&&t(w),e&&t(ze),e&&t(re),e&&t(Ve),e&&t(g),e&&t(Xe),e&&t(le),e&&t(Ze),e&&t(A),e&&t(Qe),e&&t(_),e&&t($e),e&&t(I),e&&t(et),e&&t(S),e&&t(tt),e&&t(P),e&&t(at),e&&t(T),e&&t(ot),e&&t(ue),e&&t(it),e&&t(G),e&&t(st),e&&t(O),e&&t(rt),e&&t(f),e&&t(lt),e&&t(C),e&&t(nt),e&&t(Y),e&&t(ut),e&&t(de),e&&t(ht),e&&t(N),e&&t(dt),e&&t(H),e&&t(pt),e&&t(F),e&&t(ct),e&&t(D),e&&t(ft),e&&t(U),e&&t(mt),e&&t(K),e&&t(yt),e&&t(V),e&&t(bt),e&&t(Z),e&&t(wt),e&&t($),e&&t(vt),e&&t(te),e&&t(gt),e&&t(pe),e&&t(kt),e&&t(ce),e&&t(At),e&&t(m),e&&t(Et),e&&t(fe)}}}const Fo={date:"2022-05-26T17:04:48.123Z",draft:!0,archived:!1,title:"A Trello-like CRM tool with Google Apps Script",tags:["google apps script"],excerpt:"Keeping track of all the leads and processes when freelancing or now that I have just been laid off and am job hunting, can be a daunting task. I have built a simple tool in Google Apps Script to make the process easier"};class Wo extends jo{constructor(c){super(),No(this,c,null,Ho,Bo,{})}}export{Wo as default,Fo as metadata};
