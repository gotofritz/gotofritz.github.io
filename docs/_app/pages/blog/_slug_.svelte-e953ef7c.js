var Ge=Object.defineProperty,Qe=Object.defineProperties;var We=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var Pe=(s,e,t)=>e in s?Ge(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,je=(s,e)=>{for(var t in e||(e={}))Je.call(e,t)&&Pe(s,t,e[t]);if(Ae)for(var t of Ae(e))Ke.call(e,t)&&Pe(s,t,e[t]);return s},De=(s,e)=>Qe(s,We(e));import{_ as g}from"../../chunks/preload-helper-ec9aa979.js";import{_ as Xe,S as Ve,i as ye,s as Le,e as b,t as se,j as y,c as k,a as T,g as oe,d as m,l as L,b as u,E as Re,f as j,F as h,h as xe,G as Ze,I as ne,W as et,u as tt,$ as st,n as D,o as ge,p as P,v as q,w as z,x as F,A as $,a0 as ot,k as Oe,V as nt,a1 as it,P as He,Q as Me,T as qe,U as Fe,m as he}from"../../chunks/vendor-f15b48c1.js";import{a as rt,b as at,P as $e,n as lt,w as Ce}from"../../chunks/info-e47bbc57.js";import{B as ct,A as ut}from"../../chunks/ArrowLeftIcon-5ed3881b.js";const dt=()=>{const s=Xe("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},mt={subscribe(s){return dt().page.subscribe(s)}};const{window:_t}=st;function Se(s,e,t){const i=s.slice();return i[6]=e[t],i}function Ne(s){let e,t,i=s[6].title+"",o,a,c,p;return{c(){e=b("li"),t=b("a"),o=se(i),c=y(),this.h()},l(r){e=k(r,"LI",{class:!0,style:!0});var n=T(e);t=k(n,"A",{class:!0,href:!0});var f=T(t);o=oe(f,i),f.forEach(m),c=L(n),n.forEach(m),this.h()},h(){var r;u(t,"class","!no-underline"),u(t,"href",a=`#${s[6].node.id}`),u(e,"class","heading list-none my-2 !pl-0 text-base text-slate-400 hover:text-slate-900 dark:text-slate-500 hover:dark:text-slate-100 transition-colors svelte-15xs064"),u(e,"style",p=`--depth: ${s[6].depth}`),Re(e,"active",((r=s[0])==null?void 0:r.node)===s[6].node)},m(r,n){j(r,e,n),h(e,t),h(t,o),h(e,c)},p(r,n){var f;n&2&&i!==(i=r[6].title+"")&&xe(o,i),n&2&&a!==(a=`#${r[6].node.id}`)&&u(t,"href",a),n&2&&p!==(p=`--depth: ${r[6].depth}`)&&u(e,"style",p),n&3&&Re(e,"active",((f=r[0])==null?void 0:f.node)===r[6].node)},d(r){r&&m(e)}}}function ft(s){let e,t,i,o,a,c,p=s[1],r=[];for(let n=0;n<p.length;n+=1)r[n]=Ne(Se(s,p,n));return{c(){e=b("h6"),t=se("Sections"),i=y(),o=b("ul");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=k(n,"H6",{id:!0,class:!0});var f=T(e);t=oe(f,"Sections"),f.forEach(m),i=L(n),o=k(n,"UL",{class:!0});var l=T(o);for(let _=0;_<r.length;_+=1)r[_].l(l);l.forEach(m),this.h()},h(){u(e,"id","__sections"),u(e,"class","uppercase text-slate-400/75 dark:text-slate-600 font-bold text-sm"),u(o,"class","mt-2 !pl-0")},m(n,f){j(n,e,f),h(e,t),j(n,i,f),j(n,o,f);for(let l=0;l<r.length;l+=1)r[l].m(o,null);a||(c=Ze(_t,"scroll",s[2]),a=!0)},p(n,[f]){if(f&3){p=n[1];let l;for(l=0;l<p.length;l+=1){const _=Se(n,p,l);r[l]?r[l].p(_,f):(r[l]=Ne(_),r[l].c(),r[l].m(o,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=p.length}},i:ne,o:ne,d(n){n&&m(e),n&&m(i),n&&m(o),et(r,n),a=!1,c()}}}function pt(s,e,t){let{allowedHeadings:i=["h1","h2","h3","h4","h5","h6"]}=e,{activeHeading:o=null}=e,a,c=[];function p(){const n=[...document.querySelectorAll(`article :where(${i.join(", ")}):not(#__sections)`)],f=n.map(_=>Number(_.nodeName[1])),l=Math.min(...f);t(1,c=n.map((_,w)=>({title:_.innerText,depth:f[w]-l,node:_}))),o===null&&t(0,o=c[0])}tt(()=>{p(),r()}),typeof window!="undefined"&&mt.subscribe(()=>{p(),r()});function r(){a=window.scrollY;const n=c.findIndex(_=>_.node.offsetTop+_.node.clientHeight>a)-1;t(0,o=c[n]);const f=document.body.scrollHeight;(a+window.innerHeight)/f>.999&&t(0,o=c[c.length-1])}return s.$$set=n=>{"allowedHeadings"in n&&t(3,i=n.allowedHeadings),"activeHeading"in n&&t(0,o=n.activeHeading)},[o,c,r,i]}class gt extends Ve{constructor(e){super();ye(this,e,pt,ft,Le,{allowedHeadings:3,activeHeading:0})}}function ht(s){switch(s){case"../../../posts/blog/a-place-for-unix-scripts-osx.md":return g(()=>import("../../chunks/a-place-for-unix-scripts-osx-b6047227.js"),["chunks/a-place-for-unix-scripts-osx-b6047227.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/accessing-the-wikipedia-api.md":return g(()=>import("../../chunks/accessing-the-wikipedia-api-c011666f.js"),["chunks/accessing-the-wikipedia-api-c011666f.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/advanced-evernote-search.md":return g(()=>import("../../chunks/advanced-evernote-search-67ba8448.js"),["chunks/advanced-evernote-search-67ba8448.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/backing-up-hard-disk-os-x.md":return g(()=>import("../../chunks/backing-up-hard-disk-os-x-926a0f1e.js"),["chunks/backing-up-hard-disk-os-x-926a0f1e.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/batch-unrar-command-line-os-x.md":return g(()=>import("../../chunks/batch-unrar-command-line-os-x-d6399d39.js"),["chunks/batch-unrar-command-line-os-x-d6399d39.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/blog-with-sveltekit-and-markdown.md":return g(()=>import("../../chunks/blog-with-sveltekit-and-markdown-bde474ba.js"),["chunks/blog-with-sveltekit-and-markdown-bde474ba.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/change-title-cmd-window.md":return g(()=>import("../../chunks/change-title-cmd-window-0c2a341e.js"),["chunks/change-title-cmd-window-0c2a341e.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/combining-images-imagemagick.md":return g(()=>import("../../chunks/combining-images-imagemagick-5c523634.js"),["chunks/combining-images-imagemagick-5c523634.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/copying-files-matching-pattern-cpio.md":return g(()=>import("../../chunks/copying-files-matching-pattern-cpio-41fb536c.js"),["chunks/copying-files-matching-pattern-cpio-41fb536c.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/countdown-clock-state-machine-requestanimationframe-vanilla-js.md":return g(()=>import("../../chunks/countdown-clock-state-machine-requestanimationframe-vanilla-js-d3be35b3.js"),["chunks/countdown-clock-state-machine-requestanimationframe-vanilla-js-d3be35b3.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/directory-listings-in-apache-2-4.md":return g(()=>import("../../chunks/directory-listings-in-apache-2-4-cc8a44ac.js"),["chunks/directory-listings-in-apache-2-4-cc8a44ac.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/escaping-in-replace-strings-in-javascript.md":return g(()=>import("../../chunks/escaping-in-replace-strings-in-javascript-0ce817b2.js"),["chunks/escaping-in-replace-strings-in-javascript-0ce817b2.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/finding-files-inside-archive.md":return g(()=>import("../../chunks/finding-files-inside-archive-aa83b868.js"),["chunks/finding-files-inside-archive-aa83b868.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/finding-recently-changed-files-osx-terminal.md":return g(()=>import("../../chunks/finding-recently-changed-files-osx-terminal-9bf57519.js"),["chunks/finding-recently-changed-files-osx-terminal-9bf57519.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/fixing-autoformatting-django-templates-in-visual-studio-code.md":return g(()=>import("../../chunks/fixing-autoformatting-django-templates-in-visual-studio-code-3cb83307.js"),["chunks/fixing-autoformatting-django-templates-in-visual-studio-code-3cb83307.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/google-apps-script-boilerplate.md":return g(()=>import("../../chunks/google-apps-script-boilerplate-82a33393.js"),["chunks/google-apps-script-boilerplate-82a33393.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/how-to-avoid-sudo-npm.md":return g(()=>import("../../chunks/how-to-avoid-sudo-npm-ee16ce49.js"),["chunks/how-to-avoid-sudo-npm-ee16ce49.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/install-specific-version-homebrew.md":return g(()=>import("../../chunks/install-specific-version-homebrew-a96bcb19.js"),["chunks/install-specific-version-homebrew-a96bcb19.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/installing-python-on-mac-os-x-in-2022.md":return g(()=>import("../../chunks/installing-python-on-mac-os-x-in-2022-b9f77913.js"),["chunks/installing-python-on-mac-os-x-in-2022-b9f77913.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/lorem-ipsum.md":return g(()=>import("../../chunks/lorem-ipsum-4355975e.js"),["chunks/lorem-ipsum-4355975e.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/music-remove-album-ratings-applescript.md":return g(()=>import("../../chunks/music-remove-album-ratings-applescript-b73ee295.js"),["chunks/music-remove-album-ratings-applescript-b73ee295.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/os-x-dns-lookups-too-slow-for-local-hosts.md":return g(()=>import("../../chunks/os-x-dns-lookups-too-slow-for-local-hosts-e11a322e.js"),["chunks/os-x-dns-lookups-too-slow-for-local-hosts-e11a322e.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/os-x-extended-attibutes.md":return g(()=>import("../../chunks/os-x-extended-attibutes-11072dfa.js"),["chunks/os-x-extended-attibutes-11072dfa.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/os-x-software-update-from-command-line.md":return g(()=>import("../../chunks/os-x-software-update-from-command-line-6d029c48.js"),["chunks/os-x-software-update-from-command-line-6d029c48.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/osx-apps.md":return g(()=>import("../../chunks/osx-apps-1ac47298.js"),["chunks/osx-apps-1ac47298.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/pretty-printing-xml.md":return g(()=>import("../../chunks/pretty-printing-xml-d10dce75.js"),["chunks/pretty-printing-xml-d10dce75.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/reordering-audio-files-in-a-fat-usb-stick.md":return g(()=>import("../../chunks/reordering-audio-files-in-a-fat-usb-stick-c6e0e4f2.js"),["chunks/reordering-audio-files-in-a-fat-usb-stick-c6e0e4f2.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/setting-css-values-dynamically-in-svelte.md":return g(()=>import("../../chunks/setting-css-values-dynamically-in-svelte-55cd6704.js"),["chunks/setting-css-values-dynamically-in-svelte-55cd6704.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/setting-up-a-logitech-vertical-mx-mouse-osx.md":return g(()=>import("../../chunks/setting-up-a-logitech-vertical-mx-mouse-osx-2e49ae7b.js"),["chunks/setting-up-a-logitech-vertical-mx-mouse-osx-2e49ae7b.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/setting-up-thunderbird-for-gmail-on-os-x.md":return g(()=>import("../../chunks/setting-up-thunderbird-for-gmail-on-os-x-7d833dfa.js"),["chunks/setting-up-thunderbird-for-gmail-on-os-x-7d833dfa.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/sharing-thunderbird-message-filters-across-computers.md":return g(()=>import("../../chunks/sharing-thunderbird-message-filters-across-computers-1887fdd5.js"),["chunks/sharing-thunderbird-message-filters-across-computers-1887fdd5.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/simple-voice-recording-mac.md":return g(()=>import("../../chunks/simple-voice-recording-mac-7413f33a.js"),["chunks/simple-voice-recording-mac-7413f33a.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/stop-chrome-navigating-back-when-swiping-horizontally.md":return g(()=>import("../../chunks/stop-chrome-navigating-back-when-swiping-horizontally-0546bf28.js"),["chunks/stop-chrome-navigating-back-when-swiping-horizontally-0546bf28.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/storing-bash-profile-and-so-on-on-github.md":return g(()=>import("../../chunks/storing-bash-profile-and-so-on-on-github-f573a70b.js"),["chunks/storing-bash-profile-and-so-on-on-github-f573a70b.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/svn-status-codes.md":return g(()=>import("../../chunks/svn-status-codes-c57665e1.js"),["chunks/svn-status-codes-c57665e1.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/trello-like-crm-tool-with-google-apps-script.md":return g(()=>import("../../chunks/trello-like-crm-tool-with-google-apps-script-cc0d8724.js"),["chunks/trello-like-crm-tool-with-google-apps-script-cc0d8724.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/using-say-command-to-make-os-x-talk-and-fixing-it.md":return g(()=>import("../../chunks/using-say-command-to-make-os-x-talk-and-fixing-it-fe2d0dad.js"),["chunks/using-say-command-to-make-os-x-talk-and-fixing-it-fe2d0dad.js","chunks/vendor-f15b48c1.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function vt(s){switch(s){case"../../../posts/blog/getting-started/index.md":return g(()=>import("../../chunks/index-703e745c.js"),["chunks/index-703e745c.js","chunks/vendor-f15b48c1.js"]);case"../../../posts/blog/joining-pdf-files-in-os-x-from-the-command-line/index.md":return g(()=>import("../../chunks/index-9e172f09.js"),["chunks/index-9e172f09.js","chunks/vendor-f15b48c1.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}const bt=s=>({}),Ue=s=>({slot:"icon-start"}),kt=s=>({}),Be=s=>({slot:"icon-end"});function Et(s){let e;return{c(){e=se("Back to Posts")},l(t){e=oe(t,"Back to Posts")},m(t,i){j(t,e,i)},d(t){t&&m(e)}}}function wt(s){let e,t;return e=new ut({props:{class:"h-5 w-5"}}),{c(){q(e.$$.fragment)},l(i){z(e.$$.fragment,i)},m(i,o){F(e,i,o),t=!0},p:ne,i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){D(e.$$.fragment,i),t=!1},d(i){$(e,i)}}}function Tt(s){let e;const t=s[12].default,i=He(t,s,s[13],Ue),o=i||wt();return{c(){o&&o.c()},l(a){o&&o.l(a)},m(a,c){o&&o.m(a,c),e=!0},p(a,c){i&&i.p&&(!e||c&8192)&&Me(i,t,a,a[13],e?Fe(t,a[13],c,bt):qe(a[13]),Ue)},i(a){e||(P(o,a),e=!0)},o(a){D(o,a),e=!1},d(a){o&&o.d(a)}}}function It(s){let e;const t=s[12].default,i=He(t,s,s[13],Be);return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,a){i&&i.m(o,a),e=!0},p(o,a){i&&i.p&&(!e||a&8192)&&Me(i,t,o,o[13],e?Fe(t,o[13],a,kt):qe(o[13]),Be)},i(o){e||(P(i,o),e=!0)},o(o){D(i,o),e=!1},d(o){i&&i.d(o)}}}function ze(s){let e,t,i,o,a,c,p;const r=[Pt,At],n=[];function f(_,w){return _[6]?0:1}o=f(s),a=n[o]=r[o](s);let l=s[5]&&Ye(s);return{c(){e=b("hr"),t=y(),i=b("div"),a.c(),c=y(),l&&l.c(),this.h()},l(_){e=k(_,"HR",{}),t=L(_),i=k(_,"DIV",{class:!0});var w=T(i);a.l(w),c=L(w),l&&l.l(w),w.forEach(m),this.h()},h(){u(i,"class","grid gap-8 grid-cols-1 sm:grid-cols-2")},m(_,w){j(_,e,w),j(_,t,w),j(_,i,w),n[o].m(i,null),h(i,c),l&&l.m(i,null),p=!0},p(_,w){let V=o;o=f(_),o===V?n[o].p(_,w):(he(),D(n[V],1,1,()=>{n[V]=null}),ge(),a=n[o],a?a.p(_,w):(a=n[o]=r[o](_),a.c()),P(a,1),a.m(i,c)),_[5]?l?(l.p(_,w),w&32&&P(l,1)):(l=Ye(_),l.c(),P(l,1),l.m(i,null)):l&&(he(),D(l,1,1,()=>{l=null}),ge())},i(_){p||(P(a),P(l),p=!0)},o(_){D(a),D(l),p=!1},d(_){_&&m(e),_&&m(t),_&&m(i),n[o].d(),l&&l.d()}}}function At(s){let e;return{c(){e=b("div")},l(t){e=k(t,"DIV",{}),T(e).forEach(m)},m(t,i){j(t,e,i)},p:ne,i:ne,o:ne,d(t){t&&m(e)}}}function Pt(s){let e,t,i,o,a,c,p;return c=new $e({props:{post:s[6],small:!0}}),{c(){e=b("div"),t=b("h6"),i=se("Previous Post"),o=y(),a=b("div"),q(c.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var n=T(e);t=k(n,"H6",{class:!0});var f=T(t);i=oe(f,"Previous Post"),f.forEach(m),o=L(n),a=k(n,"DIV",{class:!0});var l=T(a);z(c.$$.fragment,l),l.forEach(m),n.forEach(m),this.h()},h(){u(t,"class","not-prose post-preview-label"),u(a,"class","flex-1 post-preview"),u(e,"class","flex flex-col")},m(r,n){j(r,e,n),h(e,t),h(t,i),h(e,o),h(e,a),F(c,a,null),p=!0},p(r,n){const f={};n&64&&(f.post=r[6]),c.$set(f)},i(r){p||(P(c.$$.fragment,r),p=!0)},o(r){D(c.$$.fragment,r),p=!1},d(r){r&&m(e),$(c)}}}function Ye(s){let e,t,i,o,a,c,p;return c=new $e({props:{post:s[5],small:!0}}),{c(){e=b("div"),t=b("h6"),i=se("Next Post"),o=y(),a=b("div"),q(c.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var n=T(e);t=k(n,"H6",{class:!0});var f=T(t);i=oe(f,"Next Post"),f.forEach(m),o=L(n),a=k(n,"DIV",{class:!0});var l=T(a);z(c.$$.fragment,l),l.forEach(m),n.forEach(m),this.h()},h(){u(t,"class","not-prose post-preview-label flex justify-end"),u(a,"class","flex-1 post-preview"),u(e,"class","flex flex-col")},m(r,n){j(r,e,n),h(e,t),h(t,i),h(e,o),h(e,a),F(c,a,null),p=!0},p(r,n){const f={};n&32&&(f.post=r[5]),c.$set(f)},i(r){p||(P(c.$$.fragment,r),p=!0)},o(r){D(c.$$.fragment,r),p=!1},d(r){r&&m(e),$(c)}}}function jt(s){let e,t,i,o,a,c,p,r,n,f,l,_,w,V,H,J,E,le,x,K,X,ce,ve,C,ie,ue,S,N,be,U,ke,M,I,de,Y,Z,G,me,Q,B,_e,ee,R;document.title=e=s[1],N=new rt({props:{date:s[2],readingTime:s[4]}}),U=new at({props:{tags:s[8]}});var te=s[0];function Ee(d){return{}}te&&(I=new te(Ee())),G=new gt({props:{allowedHeadings:["h2","h3","h4","h5","h6"]}}),B=new ct({props:{href:"/blog",$$slots:{"icon-end":[It],"icon-start":[Tt],default:[Et]},$$scope:{ctx:s}}});let A=(s[6]||s[5])&&ze(s);return{c(){t=b("meta"),o=b("meta"),a=b("meta"),c=b("meta"),p=b("meta"),r=b("meta"),f=b("meta"),l=b("meta"),_=b("meta"),w=b("meta"),V=b("meta"),H=b("meta"),E=b("meta"),le=y(),x=b("article"),K=b("header"),X=b("h1"),ce=se(s[1]),ve=y(),C=b("main"),ie=new ot,ue=y(),S=b("div"),q(N.$$.fragment),be=y(),q(U.$$.fragment),ke=y(),M=b("div"),I&&q(I.$$.fragment),de=y(),Y=b("div"),Z=b("div"),q(G.$$.fragment),me=y(),Q=b("div"),q(B.$$.fragment),_e=y(),A&&A.c(),ee=Oe(),this.h()},l(d){const v=nt('[data-svelte="svelte-xeigh5"]',document.head);t=k(v,"META",{name:!0,content:!0}),o=k(v,"META",{name:!0,content:!0}),a=k(v,"META",{property:!0,content:!0}),c=k(v,"META",{property:!0,content:!0}),p=k(v,"META",{property:!0,content:!0}),r=k(v,"META",{property:!0,content:!0}),f=k(v,"META",{property:!0,content:!0}),l=k(v,"META",{name:!0,content:!0}),_=k(v,"META",{property:!0,content:!0}),w=k(v,"META",{property:!0,content:!0}),V=k(v,"META",{name:!0,content:!0}),H=k(v,"META",{name:!0,content:!0}),E=k(v,"META",{name:!0,content:!0}),v.forEach(m),le=L(d),x=k(d,"ARTICLE",{class:!0});var O=T(x);K=k(O,"HEADER",{class:!0});var re=T(K);X=k(re,"H1",{class:!0});var ae=T(X);ce=oe(ae,s[1]),ae.forEach(m),re.forEach(m),ve=L(O),C=k(O,"MAIN",{class:!0});var W=T(C);ie=it(W),ue=L(W),S=k(W,"DIV",{class:!0});var fe=T(S);z(N.$$.fragment,fe),be=L(fe),z(U.$$.fragment,fe),fe.forEach(m),W.forEach(m),ke=L(O),M=k(O,"DIV",{class:!0});var pe=T(M);I&&z(I.$$.fragment,pe),de=L(pe),Y=k(pe,"DIV",{class:!0,"aria-label":!0});var we=T(Y);Z=k(we,"DIV",{class:!0});var Te=T(Z);z(G.$$.fragment,Te),Te.forEach(m),we.forEach(m),pe.forEach(m),O.forEach(m),me=L(d),Q=k(d,"DIV",{class:!0});var Ie=T(Q);z(B.$$.fragment,Ie),Ie.forEach(m),_e=L(d),A&&A.l(d),ee=Oe(),this.h()},h(){u(t,"name","description"),u(t,"content",i=s[3].text),u(o,"name","author"),u(o,"content",lt),u(a,"property","og:url"),u(a,"content",s[10]),u(c,"property","og:type"),u(c,"content","website"),u(p,"property","og:title"),u(p,"content",s[1]),u(r,"property","og:description"),u(r,"content",n=s[3].text),u(f,"property","og:image"),u(f,"content",s[9]),u(l,"name","twitter:card"),u(l,"content","summary_large_image"),u(_,"property","twitter:domain"),u(_,"content",Ce),u(w,"property","twitter:url"),u(w,"content",s[10]),u(V,"name","twitter:title"),u(V,"content",s[1]),u(H,"name","twitter:description"),u(H,"content",J=s[3].text),u(E,"name","twitter:image"),u(E,"content",s[9]),u(X,"class","font-display text-6xl svelte-qkkq6k"),u(K,"class","mt-8 svelte-qkkq6k"),ie.a=ue,u(S,"class","opacity-70 mb-28"),u(C,"class","intro font-intro text-2xl leading-tight svelte-qkkq6k"),u(Z,"class","fixed z-10 px-4 py-2 ml-8 top-[6.5rem] w-60 right-0"),u(Y,"class","hidden xl:block absolute not-prose left-[100%]"),u(Y,"aria-label","Table of Contents"),u(M,"class","relative post-content svelte-qkkq6k"),u(x,"class","relative post grid mb-12 svelte-qkkq6k"),u(Q,"class","pt-12 flex justify-between")},m(d,v){h(document.head,t),h(document.head,o),h(document.head,a),h(document.head,c),h(document.head,p),h(document.head,r),h(document.head,f),h(document.head,l),h(document.head,_),h(document.head,w),h(document.head,V),h(document.head,H),h(document.head,E),j(d,le,v),j(d,x,v),h(x,K),h(K,X),h(X,ce),h(x,ve),h(x,C),ie.m(s[7],C),h(C,ue),h(C,S),F(N,S,null),h(S,be),F(U,S,null),h(x,ke),h(x,M),I&&F(I,M,null),h(M,de),h(M,Y),h(Y,Z),F(G,Z,null),j(d,me,v),j(d,Q,v),F(B,Q,null),j(d,_e,v),A&&A.m(d,v),j(d,ee,v),R=!0},p(d,[v]){(!R||v&2)&&e!==(e=d[1])&&(document.title=e),(!R||v&8&&i!==(i=d[3].text))&&u(t,"content",i),(!R||v&2)&&u(p,"content",d[1]),(!R||v&8&&n!==(n=d[3].text))&&u(r,"content",n),(!R||v&2)&&u(V,"content",d[1]),(!R||v&8&&J!==(J=d[3].text))&&u(H,"content",J),(!R||v&2)&&xe(ce,d[1]),(!R||v&128)&&ie.p(d[7]);const O={};v&4&&(O.date=d[2]),v&16&&(O.readingTime=d[4]),N.$set(O);const re={};if(v&256&&(re.tags=d[8]),U.$set(re),te!==(te=d[0])){if(I){he();const W=I;D(W.$$.fragment,1,0,()=>{$(W,1)}),ge()}te?(I=new te(Ee()),q(I.$$.fragment),P(I.$$.fragment,1),F(I,M,de)):I=null}const ae={};v&8192&&(ae.$$scope={dirty:v,ctx:d}),B.$set(ae),d[6]||d[5]?A?(A.p(d,v),v&96&&P(A,1)):(A=ze(d),A.c(),P(A,1),A.m(ee.parentNode,ee)):A&&(he(),D(A,1,1,()=>{A=null}),ge())},i(d){R||(P(N.$$.fragment,d),P(U.$$.fragment,d),I&&P(I.$$.fragment,d),P(G.$$.fragment,d),P(B.$$.fragment,d),P(A),R=!0)},o(d){D(N.$$.fragment,d),D(U.$$.fragment,d),I&&D(I.$$.fragment,d),D(G.$$.fragment,d),D(B.$$.fragment,d),D(A),R=!1},d(d){m(t),m(o),m(a),m(c),m(p),m(r),m(f),m(l),m(_),m(w),m(V),m(H),m(E),d&&m(le),d&&m(x),$(N),$(U),I&&$(I),$(G),d&&m(me),d&&m(Q),$(B),d&&m(_e),A&&A.d(d),d&&m(ee)}}}async function Ot({params:s,fetch:e}){const{slug:t}=s,o=(await e("/posts.json").then(c=>c.json())).find(c=>t===c.slug);if(!o)return{status:404,error:"Post not found"};console.log(o.isIndexFile?`../../../posts/blog/${o.slug}/index.md`:`../../../posts/blog/${o.slug}.md`);const a=o.isIndexFile?await vt(`../../../posts/blog/${o.slug}/index.md`):await ht(`../../../posts/blog/${o.slug}.md`);return{props:De(je({},o),{component:a.default})}}function Dt(s,e,t){let{$$slots:i={},$$scope:o}=e,{component:a}=e,{title:c}=e,{date:p}=e,{preview:r}=e,{readingTime:n}=e,{slug:f}=e,{next:l}=e,{previous:_}=e,{excerpt:w}=e,{tags:V}=e;const H=`https://og-image.vercel.app/**${encodeURIComponent(c)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`,J=`${Ce}/${f}`;return s.$$set=E=>{"component"in E&&t(0,a=E.component),"title"in E&&t(1,c=E.title),"date"in E&&t(2,p=E.date),"preview"in E&&t(3,r=E.preview),"readingTime"in E&&t(4,n=E.readingTime),"slug"in E&&t(11,f=E.slug),"next"in E&&t(5,l=E.next),"previous"in E&&t(6,_=E.previous),"excerpt"in E&&t(7,w=E.excerpt),"tags"in E&&t(8,V=E.tags),"$$scope"in E&&t(13,o=E.$$scope)},[a,c,p,r,n,l,_,w,V,H,J,f,i,o]}class Ht extends Ve{constructor(e){super();ye(this,e,Dt,jt,Le,{component:0,title:1,date:2,preview:3,readingTime:4,slug:11,next:5,previous:6,excerpt:7,tags:8})}}export{Ht as default,Ot as load};
