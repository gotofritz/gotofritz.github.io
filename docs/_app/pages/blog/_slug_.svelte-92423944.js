import{_}from"../../chunks/preload-helper-e4860ae8.js";import{U as Ne,S as Oe,i as He,s as Me,e as h,t as ne,k as x,c as E,a as I,h as ie,d as u,m as R,b as a,P as ye,g as k,I as g,j as je,V as Fe,E as re,T as Se,v as Ue,W as ze,o as L,p as ge,q as y,w as U,x as K,y as z,B as Y,X as Ye,R as Be,Y as We,n as fe}from"../../chunks/index-6e518972.js";import{N as Xe}from"../../chunks/NavHeader-d4d57fe7.js";import{a as Ge,b as Je,P as qe,n as Ke,w as Ce}from"../../chunks/info-a6fce565.js";import{s as Qe}from"../../chunks/searching-3fc56ee5.js";/* empty css                                                          */import"../../chunks/index-21d5ca5c.js";const Ze=()=>{const r=Ne("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},$e={subscribe(r){return Ze().page.subscribe(r)}};const{window:et}=ze;function xe(r,e,s){const d=r.slice();return d[6]=e[s],d}function Re(r){let e,s,d=r[6].title+"",n,l,i,v;return{c(){e=h("li"),s=h("a"),n=ne(d),i=x(),this.h()},l(t){e=E(t,"LI",{class:!0,style:!0});var o=I(e);s=E(o,"A",{class:!0,href:!0});var c=I(s);n=ie(c,d),c.forEach(u),i=R(o),o.forEach(u),this.h()},h(){var t;a(s,"class","!no-underline"),a(s,"href",l=`#${r[6].node.id}`),a(e,"class","heading list-none my-2 !pl-0 text-base text-slate-400 hover:text-slate-900 dark:text-slate-500 hover:dark:text-slate-100 transition-colors svelte-15xs064"),a(e,"style",v=`--depth: ${r[6].depth}`),ye(e,"active",((t=r[0])==null?void 0:t.node)===r[6].node)},m(t,o){k(t,e,o),g(e,s),g(s,n),g(e,i)},p(t,o){var c;o&2&&d!==(d=t[6].title+"")&&je(n,d),o&2&&l!==(l=`#${t[6].node.id}`)&&a(s,"href",l),o&2&&v!==(v=`--depth: ${t[6].depth}`)&&a(e,"style",v),o&3&&ye(e,"active",((c=t[0])==null?void 0:c.node)===t[6].node)},d(t){t&&u(e)}}}function tt(r){let e,s,d,n,l,i,v=r[1],t=[];for(let o=0;o<v.length;o+=1)t[o]=Re(xe(r,v,o));return{c(){e=h("h6"),s=ne("Sections"),d=x(),n=h("ul");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=E(o,"H6",{id:!0,class:!0});var c=I(e);s=ie(c,"Sections"),c.forEach(u),d=R(o),n=E(o,"UL",{class:!0});var f=I(n);for(let m=0;m<t.length;m+=1)t[m].l(f);f.forEach(u),this.h()},h(){a(e,"id","__sections"),a(e,"class","uppercase text-slate-400/75 dark:text-slate-600 font-bold text-sm"),a(n,"class","mt-2 !pl-0 !ml-0")},m(o,c){k(o,e,c),g(e,s),k(o,d,c),k(o,n,c);for(let f=0;f<t.length;f+=1)t[f].m(n,null);l||(i=Fe(et,"scroll",r[2]),l=!0)},p(o,[c]){if(c&3){v=o[1];let f;for(f=0;f<v.length;f+=1){const m=xe(o,v,f);t[f]?t[f].p(m,c):(t[f]=Re(m),t[f].c(),t[f].m(n,null))}for(;f<t.length;f+=1)t[f].d(1);t.length=v.length}},i:re,o:re,d(o){o&&u(e),o&&u(d),o&&u(n),Se(t,o),l=!1,i()}}}function ot(r,e,s){let{allowedHeadings:d=["h1","h2","h3","h4","h5","h6"]}=e,{activeHeading:n=null}=e,l,i=[];function v(){const o=[...document.querySelectorAll(`article :where(${d.join(", ")}):not(#__sections)`)],c=o.map(m=>Number(m.nodeName[1])),f=Math.min(...c);s(1,i=o.map((m,b)=>({title:m.innerText,depth:c[b]-f,node:m}))),n===null&&s(0,n=i[0])}Ue(()=>{v(),t()}),typeof window!="undefined"&&$e.subscribe(()=>{v(),t()});function t(){l=window.scrollY;const o=i.findIndex(m=>m.node.offsetTop+m.node.clientHeight>l)-1;s(0,n=i[o]);const c=document.body.scrollHeight;(l+window.innerHeight)/c>.999&&s(0,n=i[i.length-1])}return r.$$set=o=>{"allowedHeadings"in o&&s(3,d=o.allowedHeadings),"activeHeading"in o&&s(0,n=o.activeHeading)},[n,i,t,d]}class st extends Oe{constructor(e){super(),He(this,e,ot,tt,Me,{allowedHeadings:3,activeHeading:0})}}function rt(r){switch(r){case"../../../posts/blog/a-place-for-unix-scripts-osx.md":return _(()=>import("../../chunks/a-place-for-unix-scripts-osx-85516256.js"),["chunks/a-place-for-unix-scripts-osx-85516256.js","chunks/index-6e518972.js"]);case"../../../posts/blog/advanced-evernote-search.md":return _(()=>import("../../chunks/advanced-evernote-search-dffc7c3a.js"),["chunks/advanced-evernote-search-dffc7c3a.js","chunks/index-6e518972.js"]);case"../../../posts/blog/backing-up-hard-disk-os-x.md":return _(()=>import("../../chunks/backing-up-hard-disk-os-x-deb1610a.js"),["chunks/backing-up-hard-disk-os-x-deb1610a.js","chunks/index-6e518972.js"]);case"../../../posts/blog/batch-unrar-command-line-os-x.md":return _(()=>import("../../chunks/batch-unrar-command-line-os-x-3b7d8171.js"),["chunks/batch-unrar-command-line-os-x-3b7d8171.js","chunks/index-6e518972.js"]);case"../../../posts/blog/blog-with-sveltekit-and-markdown.md":return _(()=>import("../../chunks/blog-with-sveltekit-and-markdown-9cdddddc.js"),["chunks/blog-with-sveltekit-and-markdown-9cdddddc.js","chunks/index-6e518972.js"]);case"../../../posts/blog/change-title-cmd-window.md":return _(()=>import("../../chunks/change-title-cmd-window-b0c1de35.js"),["chunks/change-title-cmd-window-b0c1de35.js","chunks/index-6e518972.js"]);case"../../../posts/blog/combining-images-imagemagick.md":return _(()=>import("../../chunks/combining-images-imagemagick-b3e795e2.js"),["chunks/combining-images-imagemagick-b3e795e2.js","chunks/index-6e518972.js"]);case"../../../posts/blog/copying-files-matching-pattern-cpio.md":return _(()=>import("../../chunks/copying-files-matching-pattern-cpio-01ec7151.js"),["chunks/copying-files-matching-pattern-cpio-01ec7151.js","chunks/index-6e518972.js"]);case"../../../posts/blog/countdown-clock-state-machine-requestanimationframe-vanilla-js.md":return _(()=>import("../../chunks/countdown-clock-state-machine-requestanimationframe-vanilla-js-bbd61ee7.js"),["chunks/countdown-clock-state-machine-requestanimationframe-vanilla-js-bbd61ee7.js","chunks/index-6e518972.js"]);case"../../../posts/blog/create-fake-dataset-fixtures-testing-with-faker.md":return _(()=>import("../../chunks/create-fake-dataset-fixtures-testing-with-faker-b25b04d1.js"),["chunks/create-fake-dataset-fixtures-testing-with-faker-b25b04d1.js","chunks/index-6e518972.js"]);case"../../../posts/blog/creating-a-poetry-driven-python-project-template-with-cookiecutter.md":return _(()=>import("../../chunks/creating-a-poetry-driven-python-project-template-with-cookiecutter-ca840c52.js"),["chunks/creating-a-poetry-driven-python-project-template-with-cookiecutter-ca840c52.js","chunks/index-6e518972.js"]);case"../../../posts/blog/creating-german-grammar-exercises-with-spacy.md":return _(()=>import("../../chunks/creating-german-grammar-exercises-with-spacy-453446a0.js"),["chunks/creating-german-grammar-exercises-with-spacy-453446a0.js","chunks/index-6e518972.js"]);case"../../../posts/blog/deleting-duplicates-from-youtube-playlists-with-python-script.md":return _(()=>import("../../chunks/deleting-duplicates-from-youtube-playlists-with-python-script-1d7eb2a1.js"),["chunks/deleting-duplicates-from-youtube-playlists-with-python-script-1d7eb2a1.js","chunks/index-6e518972.js"]);case"../../../posts/blog/directory-listings-in-apache-2-4.md":return _(()=>import("../../chunks/directory-listings-in-apache-2-4-a6aa405f.js"),["chunks/directory-listings-in-apache-2-4-a6aa405f.js","chunks/index-6e518972.js"]);case"../../../posts/blog/escaping-in-replace-strings-in-javascript.md":return _(()=>import("../../chunks/escaping-in-replace-strings-in-javascript-c7428db4.js"),["chunks/escaping-in-replace-strings-in-javascript-c7428db4.js","chunks/index-6e518972.js"]);case"../../../posts/blog/finding-files-inside-archive.md":return _(()=>import("../../chunks/finding-files-inside-archive-b7782c50.js"),["chunks/finding-files-inside-archive-b7782c50.js","chunks/index-6e518972.js"]);case"../../../posts/blog/finding-recently-changed-files-osx-terminal.md":return _(()=>import("../../chunks/finding-recently-changed-files-osx-terminal-41db7f16.js"),["chunks/finding-recently-changed-files-osx-terminal-41db7f16.js","chunks/index-6e518972.js"]);case"../../../posts/blog/fixing-autoformatting-django-templates-in-visual-studio-code.md":return _(()=>import("../../chunks/fixing-autoformatting-django-templates-in-visual-studio-code-db54236b.js"),["chunks/fixing-autoformatting-django-templates-in-visual-studio-code-db54236b.js","chunks/index-6e518972.js"]);case"../../../posts/blog/google-apps-script-boilerplate.md":return _(()=>import("../../chunks/google-apps-script-boilerplate-72609a4d.js"),["chunks/google-apps-script-boilerplate-72609a4d.js","chunks/index-6e518972.js"]);case"../../../posts/blog/how-to-avoid-sudo-npm.md":return _(()=>import("../../chunks/how-to-avoid-sudo-npm-03215b81.js"),["chunks/how-to-avoid-sudo-npm-03215b81.js","chunks/index-6e518972.js"]);case"../../../posts/blog/install-specific-version-homebrew.md":return _(()=>import("../../chunks/install-specific-version-homebrew-415b6cac.js"),["chunks/install-specific-version-homebrew-415b6cac.js","chunks/index-6e518972.js"]);case"../../../posts/blog/installing-python-on-mac-os-x-in-2022.md":return _(()=>import("../../chunks/installing-python-on-mac-os-x-in-2022-9083e728.js"),["chunks/installing-python-on-mac-os-x-in-2022-9083e728.js","chunks/index-6e518972.js"]);case"../../../posts/blog/migrating-away-from-goole-proton-mail-and-other-stories.md":return _(()=>import("../../chunks/migrating-away-from-goole-proton-mail-and-other-stories-09d53e65.js"),["chunks/migrating-away-from-goole-proton-mail-and-other-stories-09d53e65.js","chunks/index-6e518972.js"]);case"../../../posts/blog/migrating-thunderbird-message-filters-from-another-machine.md":return _(()=>import("../../chunks/migrating-thunderbird-message-filters-from-another-machine-c631754d.js"),["chunks/migrating-thunderbird-message-filters-from-another-machine-c631754d.js","chunks/index-6e518972.js"]);case"../../../posts/blog/migrating-youtube-playlists-by-adding-videos-via-cli.md":return _(()=>import("../../chunks/migrating-youtube-playlists-by-adding-videos-via-cli-67796f37.js"),["chunks/migrating-youtube-playlists-by-adding-videos-via-cli-67796f37.js","chunks/index-6e518972.js"]);case"../../../posts/blog/music-remove-album-ratings-applescript.md":return _(()=>import("../../chunks/music-remove-album-ratings-applescript-77970d42.js"),["chunks/music-remove-album-ratings-applescript-77970d42.js","chunks/index-6e518972.js"]);case"../../../posts/blog/os-x-dns-lookups-too-slow-for-local-hosts.md":return _(()=>import("../../chunks/os-x-dns-lookups-too-slow-for-local-hosts-97506147.js"),["chunks/os-x-dns-lookups-too-slow-for-local-hosts-97506147.js","chunks/index-6e518972.js"]);case"../../../posts/blog/os-x-extended-attibutes.md":return _(()=>import("../../chunks/os-x-extended-attibutes-70982293.js"),["chunks/os-x-extended-attibutes-70982293.js","chunks/index-6e518972.js"]);case"../../../posts/blog/os-x-software-update-from-command-line.md":return _(()=>import("../../chunks/os-x-software-update-from-command-line-f33ed526.js"),["chunks/os-x-software-update-from-command-line-f33ed526.js","chunks/index-6e518972.js"]);case"../../../posts/blog/osx-apps.md":return _(()=>import("../../chunks/osx-apps-c2f1d567.js"),["chunks/osx-apps-c2f1d567.js","chunks/index-6e518972.js"]);case"../../../posts/blog/pretty-printing-xml.md":return _(()=>import("../../chunks/pretty-printing-xml-52bc2f9b.js"),["chunks/pretty-printing-xml-52bc2f9b.js","chunks/index-6e518972.js"]);case"../../../posts/blog/removing-lines-matching-patterns-from-all-files-in-dir.md":return _(()=>import("../../chunks/removing-lines-matching-patterns-from-all-files-in-dir-2c2c58c5.js"),["chunks/removing-lines-matching-patterns-from-all-files-in-dir-2c2c58c5.js","chunks/index-6e518972.js"]);case"../../../posts/blog/reordering-audio-files-in-a-fat-usb-stick.md":return _(()=>import("../../chunks/reordering-audio-files-in-a-fat-usb-stick-0543fcdd.js"),["chunks/reordering-audio-files-in-a-fat-usb-stick-0543fcdd.js","chunks/index-6e518972.js"]);case"../../../posts/blog/setting-css-values-dynamically-in-svelte.md":return _(()=>import("../../chunks/setting-css-values-dynamically-in-svelte-684b82b4.js"),["chunks/setting-css-values-dynamically-in-svelte-684b82b4.js","chunks/index-6e518972.js"]);case"../../../posts/blog/setting-up-a-logitech-vertical-mx-mouse-osx.md":return _(()=>import("../../chunks/setting-up-a-logitech-vertical-mx-mouse-osx-93f30fc6.js"),["chunks/setting-up-a-logitech-vertical-mx-mouse-osx-93f30fc6.js","chunks/index-6e518972.js"]);case"../../../posts/blog/setting-up-thunderbird-for-gmail-on-os-x.md":return _(()=>import("../../chunks/setting-up-thunderbird-for-gmail-on-os-x-d0d19b4e.js"),["chunks/setting-up-thunderbird-for-gmail-on-os-x-d0d19b4e.js","chunks/index-6e518972.js"]);case"../../../posts/blog/simple-voice-recording-mac.md":return _(()=>import("../../chunks/simple-voice-recording-mac-d438465b.js"),["chunks/simple-voice-recording-mac-d438465b.js","chunks/index-6e518972.js"]);case"../../../posts/blog/stop-chrome-navigating-back-when-swiping-horizontally.md":return _(()=>import("../../chunks/stop-chrome-navigating-back-when-swiping-horizontally-60902a1a.js"),["chunks/stop-chrome-navigating-back-when-swiping-horizontally-60902a1a.js","chunks/index-6e518972.js"]);case"../../../posts/blog/storing-bash-profile-and-so-on-on-github.md":return _(()=>import("../../chunks/storing-bash-profile-and-so-on-on-github-42b9aebb.js"),["chunks/storing-bash-profile-and-so-on-on-github-42b9aebb.js","chunks/index-6e518972.js"]);case"../../../posts/blog/svn-status-codes.md":return _(()=>import("../../chunks/svn-status-codes-c1f1cecf.js"),["chunks/svn-status-codes-c1f1cecf.js","chunks/index-6e518972.js"]);case"../../../posts/blog/using-say-command-to-make-os-x-talk-and-fixing-it.md":return _(()=>import("../../chunks/using-say-command-to-make-os-x-talk-and-fixing-it-937d51ec.js"),["chunks/using-say-command-to-make-os-x-talk-and-fixing-it-937d51ec.js","chunks/index-6e518972.js"]);case"../../../posts/blog/vscode-cspell-do-not-use-gitignore.md":return _(()=>import("../../chunks/vscode-cspell-do-not-use-gitignore-e98cea53.js"),["chunks/vscode-cspell-do-not-use-gitignore-e98cea53.js","chunks/index-6e518972.js"]);default:return new Promise(function(e,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}function nt(r){switch(r){case"../../../posts/blog/how-to-build-blog-with-sveltekit-markdown-tailwind/index.md":return _(()=>import("../../chunks/index-0ee1b53d.js"),["chunks/index-0ee1b53d.js","chunks/index-6e518972.js"]);case"../../../posts/blog/joining-pdf-files-in-os-x-from-the-command-line/index.md":return _(()=>import("../../chunks/index-b5bc194c.js"),["chunks/index-b5bc194c.js","chunks/index-6e518972.js"]);case"../../../posts/blog/trello-like-crm-tool-with-google-apps-script/index.md":return _(()=>import("../../chunks/index-43dc119f.js"),["chunks/index-43dc119f.js","chunks/index-6e518972.js"]);default:return new Promise(function(e,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}function Le(r){let e,s,d,n,l,i,v,t;const o=[at,it],c=[];function f(b,A){return b[6]?0:1}l=f(r),i=c[l]=o[l](r);let m=r[5]&&ke(r);return{c(){e=h("hr"),s=x(),d=h("div"),n=h("div"),i.c(),v=x(),m&&m.c(),this.h()},l(b){e=E(b,"HR",{}),s=R(b),d=E(b,"DIV",{class:!0});var A=I(d);n=E(A,"DIV",{class:!0});var V=I(n);i.l(V),v=R(V),m&&m.l(V),V.forEach(u),A.forEach(u),this.h()},h(){a(n,"class","grid gap-8 grid-cols-1 sm:grid-cols-2"),a(d,"class","p-2 lg:p-0")},m(b,A){k(b,e,A),k(b,s,A),k(b,d,A),g(d,n),c[l].m(n,null),g(n,v),m&&m.m(n,null),t=!0},p(b,A){let V=l;l=f(b),l===V?c[l].p(b,A):(fe(),L(c[V],1,1,()=>{c[V]=null}),ge(),i=c[l],i?i.p(b,A):(i=c[l]=o[l](b),i.c()),y(i,1),i.m(n,v)),b[5]?m?(m.p(b,A),A&32&&y(m,1)):(m=ke(b),m.c(),y(m,1),m.m(n,null)):m&&(fe(),L(m,1,1,()=>{m=null}),ge())},i(b){t||(y(i),y(m),t=!0)},o(b){L(i),L(m),t=!1},d(b){b&&u(e),b&&u(s),b&&u(d),c[l].d(),m&&m.d()}}}function it(r){let e;return{c(){e=h("div")},l(s){e=E(s,"DIV",{}),I(e).forEach(u)},m(s,d){k(s,e,d)},p:re,i:re,o:re,d(s){s&&u(e)}}}function at(r){let e,s,d,n,l,i,v;return i=new qe({props:{post:r[6],small:!0}}),{c(){e=h("div"),s=h("h6"),d=ne("Previous Post"),n=x(),l=h("div"),U(i.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var o=I(e);s=E(o,"H6",{class:!0});var c=I(s);d=ie(c,"Previous Post"),c.forEach(u),n=R(o),l=E(o,"DIV",{class:!0});var f=I(l);K(i.$$.fragment,f),f.forEach(u),o.forEach(u),this.h()},h(){a(s,"class","not-prose post-preview-label"),a(l,"class","flex-1 post-preview"),a(e,"class","flex flex-col")},m(t,o){k(t,e,o),g(e,s),g(s,d),g(e,n),g(e,l),z(i,l,null),v=!0},p(t,o){const c={};o&64&&(c.post=t[6]),i.$set(c)},i(t){v||(y(i.$$.fragment,t),v=!0)},o(t){L(i.$$.fragment,t),v=!1},d(t){t&&u(e),Y(i)}}}function ke(r){let e,s,d,n,l,i,v;return i=new qe({props:{post:r[5],small:!0}}),{c(){e=h("div"),s=h("h6"),d=ne("Next Post"),n=x(),l=h("div"),U(i.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var o=I(e);s=E(o,"H6",{class:!0});var c=I(s);d=ie(c,"Next Post"),c.forEach(u),n=R(o),l=E(o,"DIV",{class:!0});var f=I(l);K(i.$$.fragment,f),f.forEach(u),o.forEach(u),this.h()},h(){a(s,"class","not-prose post-preview-label flex justify-end"),a(l,"class","flex-1 post-preview"),a(e,"class","flex flex-col")},m(t,o){k(t,e,o),g(e,s),g(s,d),g(e,n),g(e,l),z(i,l,null),v=!0},p(t,o){const c={};o&32&&(c.post=t[5]),i.$set(c)},i(t){v||(y(i.$$.fragment,t),v=!0)},o(t){L(i.$$.fragment,t),v=!1},d(t){t&&u(e),Y(i)}}}function lt(r){let e,s,d,n,l,i,v,t,o,c,f,m,b,A,V,T,Q,ae,B,le,W,M,H,Z,$,ce,ve,q,se,ue,C,N,he,S,Ee,j,D,me,X,ee,G,be,O,we,Te;document.title=e=r[1],B=new Xe({}),N=new Ge({props:{date:r[2],readingTime:r[4]}}),S=new Je({props:{tags:r[8]}});var te=r[0];function Ie(p){return{}}te&&(D=new te(Ie())),G=new st({props:{allowedHeadings:["h2","h3","h4","h5","h6"]}});let P=(r[6]||r[5])&&Le(r);return{c(){s=h("meta"),n=h("meta"),l=h("meta"),i=h("meta"),v=h("meta"),t=h("meta"),c=h("meta"),f=h("meta"),m=h("meta"),b=h("meta"),A=h("meta"),V=h("meta"),Q=h("meta"),ae=x(),U(B.$$.fragment),le=x(),W=h("div"),M=h("div"),H=h("article"),Z=h("header"),$=h("h1"),ce=ne(r[1]),ve=x(),q=h("main"),se=new Ye(!1),ue=x(),C=h("div"),U(N.$$.fragment),he=x(),U(S.$$.fragment),Ee=x(),j=h("div"),D&&U(D.$$.fragment),me=x(),X=h("div"),ee=h("div"),U(G.$$.fragment),be=x(),P&&P.c(),this.h()},l(p){const w=Be('[data-svelte="svelte-xeigh5"]',document.head);s=E(w,"META",{name:!0,content:!0}),n=E(w,"META",{name:!0,content:!0}),l=E(w,"META",{property:!0,content:!0}),i=E(w,"META",{property:!0,content:!0}),v=E(w,"META",{property:!0,content:!0}),t=E(w,"META",{property:!0,content:!0}),c=E(w,"META",{property:!0,content:!0}),f=E(w,"META",{name:!0,content:!0}),m=E(w,"META",{property:!0,content:!0}),b=E(w,"META",{property:!0,content:!0}),A=E(w,"META",{name:!0,content:!0}),V=E(w,"META",{name:!0,content:!0}),Q=E(w,"META",{name:!0,content:!0}),w.forEach(u),ae=R(p),K(B.$$.fragment,p),le=R(p),W=E(p,"DIV",{class:!0});var oe=I(W);M=E(oe,"DIV",{class:!0});var J=I(M);H=E(J,"ARTICLE",{class:!0});var F=I(H);Z=E(F,"HEADER",{class:!0});var Ae=I(Z);$=E(Ae,"H1",{class:!0});var De=I($);ce=ie(De,r[1]),De.forEach(u),Ae.forEach(u),ve=R(F),q=E(F,"MAIN",{class:!0});var _e=I(q);se=We(_e,!1),ue=R(_e),C=E(_e,"DIV",{class:!0});var de=I(C);K(N.$$.fragment,de),he=R(de),K(S.$$.fragment,de),de.forEach(u),_e.forEach(u),Ee=R(F),j=E(F,"DIV",{class:!0});var pe=I(j);D&&K(D.$$.fragment,pe),me=R(pe),X=E(pe,"DIV",{class:!0,"aria-label":!0});var Pe=I(X);ee=E(Pe,"DIV",{class:!0});var Ve=I(ee);K(G.$$.fragment,Ve),Ve.forEach(u),Pe.forEach(u),pe.forEach(u),F.forEach(u),be=R(J),P&&P.l(J),J.forEach(u),oe.forEach(u),this.h()},h(){a(s,"name","description"),a(s,"content",d=r[3].text),a(n,"name","author"),a(n,"content",Ke),a(l,"property","og:url"),a(l,"content",r[10]),a(i,"property","og:type"),a(i,"content","website"),a(v,"property","og:title"),a(v,"content",r[1]),a(t,"property","og:description"),a(t,"content",o=r[3].text),a(c,"property","og:image"),a(c,"content",r[9]),a(f,"name","twitter:card"),a(f,"content","summary_large_image"),a(m,"property","twitter:domain"),a(m,"content",Ce),a(b,"property","twitter:url"),a(b,"content",r[10]),a(A,"name","twitter:title"),a(A,"content",r[1]),a(V,"name","twitter:description"),a(V,"content",T=r[3].text),a(Q,"name","twitter:image"),a(Q,"content",r[9]),a($,"class","font-display text-5xl lg:text-6xl"),a(Z,"class","mt-8 mb-4"),se.a=ue,a(C,"class","opacity-70 mb-28 mt-2 prose"),a(q,"class","intro font-intro text-xl lg:text-2xl leading-relaxed"),a(ee,"class","fixed z-10 px-4 py-2 ml-8 top-[6.5rem] w-60 right-0 overflow-y-auto h-[calc(100vh-6.5rem)]"),a(X,"class","hidden xl:block absolute not-prose left-[100%]"),a(X,"aria-label","Table of Contents"),a(j,"class","relative post-content text-lg "),a(H,"class","gotofritz-grid relative post lg:grid mb-12 p-2 l:p-0 svelte-axuw0g"),a(M,"class","mx-auto w-full max-w-4xl"),a(W,"class","flex flex-col min-h-screen searching:text-gray-300")},m(p,w){g(document.head,s),g(document.head,n),g(document.head,l),g(document.head,i),g(document.head,v),g(document.head,t),g(document.head,c),g(document.head,f),g(document.head,m),g(document.head,b),g(document.head,A),g(document.head,V),g(document.head,Q),k(p,ae,w),z(B,p,w),k(p,le,w),k(p,W,w),g(W,M),g(M,H),g(H,Z),g(Z,$),g($,ce),g(H,ve),g(H,q),se.m(r[7],q),g(q,ue),g(q,C),z(N,C,null),g(C,he),z(S,C,null),g(H,Ee),g(H,j),D&&z(D,j,null),g(j,me),g(j,X),g(X,ee),z(G,ee,null),g(M,be),P&&P.m(M,null),O=!0,we||(Te=Fe(H,"click",r[12]),we=!0)},p(p,[w]){(!O||w&2)&&e!==(e=p[1])&&(document.title=e),(!O||w&8&&d!==(d=p[3].text))&&a(s,"content",d),(!O||w&2)&&a(v,"content",p[1]),(!O||w&8&&o!==(o=p[3].text))&&a(t,"content",o),(!O||w&2)&&a(A,"content",p[1]),(!O||w&8&&T!==(T=p[3].text))&&a(V,"content",T),(!O||w&2)&&je(ce,p[1]),(!O||w&128)&&se.p(p[7]);const oe={};w&4&&(oe.date=p[2]),w&16&&(oe.readingTime=p[4]),N.$set(oe);const J={};if(w&256&&(J.tags=p[8]),S.$set(J),te!==(te=p[0])){if(D){fe();const F=D;L(F.$$.fragment,1,0,()=>{Y(F,1)}),ge()}te?(D=new te(Ie()),U(D.$$.fragment),y(D.$$.fragment,1),z(D,j,me)):D=null}p[6]||p[5]?P?(P.p(p,w),w&96&&y(P,1)):(P=Le(p),P.c(),y(P,1),P.m(M,null)):P&&(fe(),L(P,1,1,()=>{P=null}),ge())},i(p){O||(y(B.$$.fragment,p),y(N.$$.fragment,p),y(S.$$.fragment,p),D&&y(D.$$.fragment,p),y(G.$$.fragment,p),y(P),O=!0)},o(p){L(B.$$.fragment,p),L(N.$$.fragment,p),L(S.$$.fragment,p),D&&L(D.$$.fragment,p),L(G.$$.fragment,p),L(P),O=!1},d(p){u(s),u(n),u(l),u(i),u(v),u(t),u(c),u(f),u(m),u(b),u(A),u(V),u(Q),p&&u(ae),Y(B,p),p&&u(le),p&&u(W),Y(N),Y(S),D&&Y(D),Y(G),P&&P.d(),we=!1,Te()}}}async function vt({params:r,fetch:e}){const{slug:s}=r,n=(await e("/posts.json").then(i=>i.json())).find(i=>s===i.slug);if(!n)return{status:404,error:"Post not found"};console.log(n.isIndexFile?`../../../posts/blog/${n.slug}/index.md`:`../../../posts/blog/${n.slug}.md`);const l=n.isIndexFile?await nt(`../../../posts/blog/${n.slug}/index.md`):await rt(`../../../posts/blog/${n.slug}.md`);return{props:{...n,component:l.default}}}function ct(r,e,s){let{component:d}=e,{title:n}=e,{date:l}=e,{preview:i}=e,{readingTime:v}=e,{slug:t}=e,{next:o}=e,{previous:c}=e,{excerpt:f}=e,{tags:m}=e;const b=`https://og-image.vercel.app/**${encodeURIComponent(n)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`,A=`${Ce}/blog/${t}`,V=()=>{Qe.set(!1)};return r.$$set=T=>{"component"in T&&s(0,d=T.component),"title"in T&&s(1,n=T.title),"date"in T&&s(2,l=T.date),"preview"in T&&s(3,i=T.preview),"readingTime"in T&&s(4,v=T.readingTime),"slug"in T&&s(11,t=T.slug),"next"in T&&s(5,o=T.next),"previous"in T&&s(6,c=T.previous),"excerpt"in T&&s(7,f=T.excerpt),"tags"in T&&s(8,m=T.tags)},[d,n,l,i,v,o,c,f,m,b,A,t,V]}class ht extends Oe{constructor(e){super(),He(this,e,ct,lt,Me,{component:0,title:1,date:2,preview:3,readingTime:4,slug:11,next:5,previous:6,excerpt:7,tags:8})}}export{ht as default,vt as load};
