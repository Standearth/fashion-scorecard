import{S as t,i as e,s,e as a,k as r,j as n,t as $,E as c,c as o,d as l,n as i,m as f,a as m,g,b as h,F as d,f as p,o as u,r as v,u as w,v as y,w as x,z as E,ae as z,B as b,a9 as D,h as I,K as V,I as _,J as A,R as F,L as S,af as H,M as T,Y as M,Z as R,_ as k,aj as j,ag as C,O as G,l as L,P as N}from"../chunks/vendor-9b155b74.js";import{b as U}from"../chunks/paths-45dac81d.js";import{s as P,a as B,G as K}from"../chunks/Grid-ff50ef2a.js";import{c as J}from"../chunks/footnote-531a5d50.js";import{H as O}from"../chunks/Header-0fd075f0.js";const{document:Y}=z;function Z(t,e,s){const a=t.slice();return a[9]=e[s],a}function q(t){let e,s,c,w,E,z,b,D,V,_,A,F,S,H,T,M,R,k,j=t[0].brand+"",C=t[0].summary+"";c=new B({props:{gradeDetail:t[0].grade,gradeType:"overall",grade:t[0].grade.charAt(0)}});let G=t[0].subsidiaries&&W(t);return{c(){e=a("div"),s=a("div"),n(c.$$.fragment),w=r(),E=a("div"),z=a("img"),V=r(),_=a("div"),A=a("h1"),F=$(j),S=r(),H=a("div"),T=a("div"),M=a("p"),R=r(),G&&G.c(),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"DIV",{class:!0});var r=m(s);f(c.$$.fragment,r),r.forEach(l),w=i(a),E=o(a,"DIV",{class:!0});var n=m(E);z=o(n,"IMG",{alt:!0,src:!0}),n.forEach(l),V=i(a),_=o(a,"DIV",{class:!0});var $=m(_);A=o($,"H1",{class:!0});var h=m(A);F=g(h,j),h.forEach(l),$.forEach(l),a.forEach(l),S=i(t),H=o(t,"DIV",{class:!0});var d=m(H);T=o(d,"DIV",{class:!0});var p=m(T);M=o(p,"P",{}),m(M).forEach(l),p.forEach(l),R=i(d),G&&G.l(d),d.forEach(l),this.h()},h(){h(s,"class","grade svelte-z2sw5t"),h(z,"alt",b=t[0].brand),z.src!==(D="/assets/images/logos/"+t[0].path+".png")&&h(z,"src",D),h(E,"class","logo svelte-z2sw5t"),h(A,"class","svelte-z2sw5t"),h(_,"class","name svelte-z2sw5t"),h(e,"class","rower svelte-z2sw5t"),h(T,"class","summary svelte-z2sw5t"),h(H,"class","rower svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),u(c,s,null),d(e,w),d(e,E),d(E,z),d(e,V),d(e,_),d(_,A),d(A,F),p(t,S,a),p(t,H,a),d(H,T),d(T,M),M.innerHTML=C,d(H,R),G&&G.m(H,null),k=!0},p(t,e){const s={};1&e&&(s.gradeDetail=t[0].grade),1&e&&(s.grade=t[0].grade.charAt(0)),c.$set(s),(!k||1&e&&b!==(b=t[0].brand))&&h(z,"alt",b),(!k||1&e&&z.src!==(D="/assets/images/logos/"+t[0].path+".png"))&&h(z,"src",D),(!k||1&e)&&j!==(j=t[0].brand+"")&&I(F,j),(!k||1&e)&&C!==(C=t[0].summary+"")&&(M.innerHTML=C),t[0].subsidiaries?G?G.p(t,e):(G=W(t),G.c(),G.m(H,null)):G&&(G.d(1),G=null)},i(t){k||(y(c.$$.fragment,t),k=!0)},o(t){v(c.$$.fragment,t),k=!1},d(t){t&&l(e),x(c),t&&l(S),t&&l(H),G&&G.d()}}}function Q(t){let e,s,r;return s=new V({props:{color:"primary"}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{id:!0,class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"id","spinner"),h(e,"class","svelte-z2sw5t")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p:_,i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function W(t){let e,s,n,c,f=t[0].subsidiaries.split(","),u=[];for(let a=0;a<f.length;a+=1)u[a]=X(Z(t,f,a));return{c(){e=a("div"),s=a("h4"),n=$("Main subsidiaries"),c=r();for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"H4",{});var r=m(s);n=g(r,"Main subsidiaries"),r.forEach(l),c=i(a);for(let e=0;e<u.length;e+=1)u[e].l(a);a.forEach(l),this.h()},h(){h(e,"class","related-brands svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),d(s,n),d(e,c);for(let s=0;s<u.length;s+=1)u[s].m(e,null)},p(t,s){if(1&s){let a;for(f=t[0].subsidiaries.split(","),a=0;a<f.length;a+=1){const r=Z(t,f,a);u[a]?u[a].p(r,s):(u[a]=X(r),u[a].c(),u[a].m(e,null))}for(;a<u.length;a+=1)u[a].d(1);u.length=f.length}},d(t){t&&l(e),D(u,t)}}}function X(t){let e,s,r;return{c(){e=a("img"),this.h()},l(t){e=o(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){h(e,"alt",s=t[9]),e.src!==(r="/assets/images/logos/"+t[9]+".png")&&h(e,"src",r),h(e,"class","svelte-z2sw5t")},m(t,s){p(t,e,s)},p(t,a){1&a&&s!==(s=t[9])&&h(e,"alt",s),1&a&&e.src!==(r="/assets/images/logos/"+t[9]+".png")&&h(e,"src",r)},d(t){t&&l(e)}}}function tt(t){let e,s;return e=new A({props:{$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function et(t){let e,s,r;return s=new V({props:{color:"primary"}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{id:!0,class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"id","spinner"),h(e,"class","svelte-z2sw5t")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p:_,i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function st(t){let e,s,a=t[0].commitments_summary+"";return{c(){e=new G,s=L(),this.h()},l(t){e=N(t),s=L(),this.h()},h(){e.a=s},m(t,r){e.m(a,t,r),p(t,s,r)},p(t,s){1&s&&a!==(a=t[0].commitments_summary+"")&&e.p(a)},d(t){t&&l(s),t&&e.d()}}}function at(t){let e,s;return e=new S({props:{sm:{size:11,offset:1},lg:{size:10,offset:2},$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function rt(t){let e,s,r;return s=new F({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-body")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function nt(t){let e,s,r;return{c(){e=a("div"),s=a("img"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"IMG",{alt:!0,src:!0}),a.forEach(l),this.h()},h(){h(s,"alt","Climate commitments & supply chain energy transparency"),s.src!==(r="assets/images/s1.svg")&&h(s,"src","assets/images/s1.svg"),h(e,"class","section-icon svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s)},d(t){t&&l(e)}}}function $t(t){let e,s,r;return s=new B({props:{gradeDetail:t[0].commitments_grade,gradeType:"criteria",grade:t[0].commitments_grade.charAt(0)}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","section-grade")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};1&e&&(a.gradeDetail=t[0].commitments_grade),1&e&&(a.grade=t[0].commitments_grade.charAt(0)),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function ct(t){let e,s,r;return{c(){e=a("div"),s=a("h3"),r=$("Climate commitments & supply chain energy transparency"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"H3",{class:!0});var n=m(s);r=g(n,"Climate commitments & supply chain energy transparency"),n.forEach(l),a.forEach(l),this.h()},h(){h(s,"class","svelte-z2sw5t"),h(e,"class","section-title svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),d(s,r)},d(t){t&&l(e)}}}function ot(t){let e,s,a,$,c,o;return e=new S({props:{sm:"1",lg:"1",$$slots:{default:[nt]},$$scope:{ctx:t}}}),a=new S({props:{sm:"1",lg:"1",$$slots:{default:[$t]},$$scope:{ctx:t}}}),c=new S({props:{sm:"11",md:"10",lg:"10",$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(a.$$.fragment),$=r(),n(c.$$.fragment)},l(t){f(e.$$.fragment,t),s=i(t),f(a.$$.fragment,t),$=i(t),f(c.$$.fragment,t)},m(t,r){u(e,t,r),p(t,s,r),u(a,t,r),p(t,$,r),u(c,t,r),o=!0},p(t,s){const r={};4096&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const n={};4097&s&&(n.$$scope={dirty:s,ctx:t}),a.$set(n);const $={};4096&s&&($.$$scope={dirty:s,ctx:t}),c.$set($)},i(t){o||(y(e.$$.fragment,t),y(a.$$.fragment,t),y(c.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),o=!1},d(t){x(e,t),t&&l(s),x(a,t),t&&l($),x(c,t)}}}function lt(t){let e,s,r;return s=new F({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0,slot:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-header svelte-z2sw5t"),h(e,"slot","header")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function it(t){let e,s,a=t[0].renewable_summary+"";return{c(){e=new G,s=L(),this.h()},l(t){e=N(t),s=L(),this.h()},h(){e.a=s},m(t,r){e.m(a,t,r),p(t,s,r)},p(t,s){1&s&&a!==(a=t[0].renewable_summary+"")&&e.p(a)},d(t){t&&l(s),t&&e.d()}}}function ft(t){let e,s;return e=new S({props:{sm:{size:11,offset:1},lg:{size:10,offset:2},$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function mt(t){let e,s,r;return s=new F({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-body")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function gt(t){let e,s,r;return{c(){e=a("div"),s=a("img"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"IMG",{alt:!0,src:!0}),a.forEach(l),this.h()},h(){h(s,"alt","Renewable & energy-efficient manufacturing"),s.src!==(r="assets/images/s2.svg")&&h(s,"src","assets/images/s2.svg"),h(e,"class","section-icon svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s)},d(t){t&&l(e)}}}function ht(t){let e,s,r;return s=new B({props:{gradeDetail:t[0].renewable_grade,gradeType:"criteria",grade:t[0].renewable_grade.charAt(0)}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","section-grade")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};1&e&&(a.gradeDetail=t[0].renewable_grade),1&e&&(a.grade=t[0].renewable_grade.charAt(0)),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function dt(t){let e,s,r;return{c(){e=a("div"),s=a("h3"),r=$("Renewable & energy efficient manufacturing"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"H3",{class:!0});var n=m(s);r=g(n,"Renewable & energy efficient manufacturing"),n.forEach(l),a.forEach(l),this.h()},h(){h(s,"class","svelte-z2sw5t"),h(e,"class","section-title svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),d(s,r)},d(t){t&&l(e)}}}function pt(t){let e,s,a,$,c,o;return e=new S({props:{sm:"1",lg:"1",$$slots:{default:[gt]},$$scope:{ctx:t}}}),a=new S({props:{sm:"1",lg:"1",$$slots:{default:[ht]},$$scope:{ctx:t}}}),c=new S({props:{sm:"11",md:"10",lg:"10",$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(a.$$.fragment),$=r(),n(c.$$.fragment)},l(t){f(e.$$.fragment,t),s=i(t),f(a.$$.fragment,t),$=i(t),f(c.$$.fragment,t)},m(t,r){u(e,t,r),p(t,s,r),u(a,t,r),p(t,$,r),u(c,t,r),o=!0},p(t,s){const r={};4096&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const n={};4097&s&&(n.$$scope={dirty:s,ctx:t}),a.$set(n);const $={};4096&s&&($.$$scope={dirty:s,ctx:t}),c.$set($)},i(t){o||(y(e.$$.fragment,t),y(a.$$.fragment,t),y(c.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),o=!1},d(t){x(e,t),t&&l(s),x(a,t),t&&l($),x(c,t)}}}function ut(t){let e,s,r;return s=new F({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0,slot:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-header svelte-z2sw5t"),h(e,"slot","header")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function vt(t){let e,s,a=t[0].materials_summary+"";return{c(){e=new G,s=L(),this.h()},l(t){e=N(t),s=L(),this.h()},h(){e.a=s},m(t,r){e.m(a,t,r),p(t,s,r)},p(t,s){1&s&&a!==(a=t[0].materials_summary+"")&&e.p(a)},d(t){t&&l(s),t&&e.d()}}}function wt(t){let e,s;return e=new S({props:{sm:{size:11,offset:1},lg:{size:10,offset:2},$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function yt(t){let e,s,r;return s=new F({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-body")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function xt(t){let e,s,r;return{c(){e=a("div"),s=a("img"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"IMG",{alt:!0,src:!0}),a.forEach(l),this.h()},h(){h(s,"alt","Low-carbon materials"),s.src!==(r="assets/images/s3.svg")&&h(s,"src","assets/images/s3.svg"),h(e,"class","section-icon svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s)},d(t){t&&l(e)}}}function Et(t){let e,s,r;return s=new B({props:{gradeDetail:t[0].materials_grade,gradeType:"criteria",grade:t[0].materials_grade.charAt(0)}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","section-grade")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};1&e&&(a.gradeDetail=t[0].materials_grade),1&e&&(a.grade=t[0].materials_grade.charAt(0)),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function zt(t){let e,s,r;return{c(){e=a("div"),s=a("h3"),r=$("Low carbon materials"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"H3",{class:!0});var n=m(s);r=g(n,"Low carbon materials"),n.forEach(l),a.forEach(l),this.h()},h(){h(s,"class","svelte-z2sw5t"),h(e,"class","section-title svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),d(s,r)},d(t){t&&l(e)}}}function bt(t){let e,s,a,$,c,o;return e=new S({props:{sm:"1",lg:"1",$$slots:{default:[xt]},$$scope:{ctx:t}}}),a=new S({props:{sm:"1",lg:"1",$$slots:{default:[Et]},$$scope:{ctx:t}}}),c=new S({props:{sm:"11",md:"10",lg:"10",$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(a.$$.fragment),$=r(),n(c.$$.fragment)},l(t){f(e.$$.fragment,t),s=i(t),f(a.$$.fragment,t),$=i(t),f(c.$$.fragment,t)},m(t,r){u(e,t,r),p(t,s,r),u(a,t,r),p(t,$,r),u(c,t,r),o=!0},p(t,s){const r={};4096&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const n={};4097&s&&(n.$$scope={dirty:s,ctx:t}),a.$set(n);const $={};4096&s&&($.$$scope={dirty:s,ctx:t}),c.$set($)},i(t){o||(y(e.$$.fragment,t),y(a.$$.fragment,t),y(c.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),o=!1},d(t){x(e,t),t&&l(s),x(a,t),t&&l($),x(c,t)}}}function Dt(t){let e,s,r;return s=new F({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0,slot:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-header svelte-z2sw5t"),h(e,"slot","header")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function It(t){let e,s,a=t[0].shipping_summary+"";return{c(){e=new G,s=L(),this.h()},l(t){e=N(t),s=L(),this.h()},h(){e.a=s},m(t,r){e.m(a,t,r),p(t,s,r)},p(t,s){1&s&&a!==(a=t[0].shipping_summary+"")&&e.p(a)},d(t){t&&l(s),t&&e.d()}}}function Vt(t){let e,s;return e=new S({props:{sm:{size:11,offset:1},lg:{size:10,offset:2},$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function _t(t){let e,s,r;return s=new F({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-body")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function At(t){let e,s,r;return{c(){e=a("div"),s=a("img"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"IMG",{alt:!0,src:!0}),a.forEach(l),this.h()},h(){h(s,"alt","Climate commitments & supply chain energy transparency"),s.src!==(r="assets/images/s4.svg")&&h(s,"src","assets/images/s4.svg"),h(e,"class","section-icon svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s)},d(t){t&&l(e)}}}function Ft(t){let e,s,r;return s=new B({props:{gradeDetail:t[0].shipping_grade,gradeType:"criteria",grade:t[0].shipping_grade.charAt(0)}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","section-grade")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};1&e&&(a.gradeDetail=t[0].shipping_grade),1&e&&(a.grade=t[0].shipping_grade.charAt(0)),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function St(t){let e,s,r;return{c(){e=a("div"),s=a("h3"),r=$("Greener Shipping"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"H3",{class:!0});var n=m(s);r=g(n,"Greener Shipping"),n.forEach(l),a.forEach(l),this.h()},h(){h(s,"class","svelte-z2sw5t"),h(e,"class","section-title svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),d(s,r)},d(t){t&&l(e)}}}function Ht(t){let e,s,a,$,c,o;return e=new S({props:{sm:"1",lg:"1",$$slots:{default:[At]},$$scope:{ctx:t}}}),a=new S({props:{sm:"1",lg:"1",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),c=new S({props:{sm:"11",md:"10",lg:"10",$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(a.$$.fragment),$=r(),n(c.$$.fragment)},l(t){f(e.$$.fragment,t),s=i(t),f(a.$$.fragment,t),$=i(t),f(c.$$.fragment,t)},m(t,r){u(e,t,r),p(t,s,r),u(a,t,r),p(t,$,r),u(c,t,r),o=!0},p(t,s){const r={};4096&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const n={};4097&s&&(n.$$scope={dirty:s,ctx:t}),a.$set(n);const $={};4096&s&&($.$$scope={dirty:s,ctx:t}),c.$set($)},i(t){o||(y(e.$$.fragment,t),y(a.$$.fragment,t),y(c.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),o=!1},d(t){x(e,t),t&&l(s),x(a,t),t&&l($),x(c,t)}}}function Tt(t){let e,s,r;return s=new F({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0,slot:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-header svelte-z2sw5t"),h(e,"slot","header")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function Mt(t){let e,s,a=t[0].advocacy_summary+"";return{c(){e=new G,s=L(),this.h()},l(t){e=N(t),s=L(),this.h()},h(){e.a=s},m(t,r){e.m(a,t,r),p(t,s,r)},p(t,s){1&s&&a!==(a=t[0].advocacy_summary+"")&&e.p(a)},d(t){t&&l(s),t&&e.d()}}}function Rt(t){let e,s;return e=new S({props:{sm:{size:11,offset:1},lg:{size:10,offset:2},$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function kt(t){let e,s,r;return s=new F({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-body")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function jt(t){let e,s,r;return{c(){e=a("div"),s=a("img"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"IMG",{alt:!0,src:!0}),a.forEach(l),this.h()},h(){h(s,"alt","Climate commitments & supply chain energy transparency"),s.src!==(r="assets/images/s5.svg")&&h(s,"src","assets/images/s5.svg"),h(e,"class","section-icon svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s)},d(t){t&&l(e)}}}function Ct(t){let e,s,r;return s=new B({props:{gradeDetail:t[0].advocacy_grade,gradeType:"criteria",grade:t[0].advocacy_grade.charAt(0)}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","section-grade")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};1&e&&(a.gradeDetail=t[0].advocacy_grade),1&e&&(a.grade=t[0].advocacy_grade.charAt(0)),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function Gt(t){let e,s,r;return{c(){e=a("div"),s=a("h3"),r=$("Advocacy"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"H3",{class:!0});var n=m(s);r=g(n,"Advocacy"),n.forEach(l),a.forEach(l),this.h()},h(){h(s,"class","svelte-z2sw5t"),h(e,"class","section-title svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),d(s,r)},d(t){t&&l(e)}}}function Lt(t){let e,s,a,$,c,o;return e=new S({props:{sm:"1",lg:"1",$$slots:{default:[jt]},$$scope:{ctx:t}}}),a=new S({props:{sm:"1",lg:"1",$$slots:{default:[Ct]},$$scope:{ctx:t}}}),c=new S({props:{sm:"11",md:"10",lg:"10",$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(a.$$.fragment),$=r(),n(c.$$.fragment)},l(t){f(e.$$.fragment,t),s=i(t),f(a.$$.fragment,t),$=i(t),f(c.$$.fragment,t)},m(t,r){u(e,t,r),p(t,s,r),u(a,t,r),p(t,$,r),u(c,t,r),o=!0},p(t,s){const r={};4096&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const n={};4097&s&&(n.$$scope={dirty:s,ctx:t}),a.$set(n);const $={};4096&s&&($.$$scope={dirty:s,ctx:t}),c.$set($)},i(t){o||(y(e.$$.fragment,t),y(a.$$.fragment,t),y(c.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),o=!1},d(t){x(e,t),t&&l(s),x(a,t),t&&l($),x(c,t)}}}function Nt(t){let e,s,r;return s=new F({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0,slot:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","acc-header svelte-z2sw5t"),h(e,"slot","header")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function Ut(t){let e,s,$,c,m,g,d,w,E,z,b,D,I,V,_,A,F,S,H,T;return e=new C({props:{active:!0,$$slots:{header:[lt],default:[rt]},$$scope:{ctx:t}}}),e.$on("toggle",t[4]),m=new C({props:{$$slots:{header:[ut],default:[mt]},$$scope:{ctx:t}}}),m.$on("toggle",t[5]),E=new C({props:{$$slots:{header:[Dt],default:[yt]},$$scope:{ctx:t}}}),E.$on("toggle",t[6]),I=new C({props:{$$slots:{header:[Tt],default:[_t]},$$scope:{ctx:t}}}),I.$on("toggle",t[7]),F=new C({props:{$$slots:{header:[Nt],default:[kt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),$=a("hr"),c=r(),n(m.$$.fragment),g=r(),d=a("hr"),w=r(),n(E.$$.fragment),z=r(),b=a("hr"),D=r(),n(I.$$.fragment),V=r(),_=a("hr"),A=r(),n(F.$$.fragment),S=r(),H=a("hr"),this.h()},l(t){f(e.$$.fragment,t),s=i(t),$=o(t,"HR",{class:!0}),c=i(t),f(m.$$.fragment,t),g=i(t),d=o(t,"HR",{class:!0}),w=i(t),f(E.$$.fragment,t),z=i(t),b=o(t,"HR",{class:!0}),D=i(t),f(I.$$.fragment,t),V=i(t),_=o(t,"HR",{class:!0}),A=i(t),f(F.$$.fragment,t),S=i(t),H=o(t,"HR",{class:!0}),this.h()},h(){h($,"class","svelte-z2sw5t"),h(d,"class","svelte-z2sw5t"),h(b,"class","svelte-z2sw5t"),h(_,"class","svelte-z2sw5t"),h(H,"class","svelte-z2sw5t")},m(t,a){u(e,t,a),p(t,s,a),p(t,$,a),p(t,c,a),u(m,t,a),p(t,g,a),p(t,d,a),p(t,w,a),u(E,t,a),p(t,z,a),p(t,b,a),p(t,D,a),u(I,t,a),p(t,V,a),p(t,_,a),p(t,A,a),u(F,t,a),p(t,S,a),p(t,H,a),T=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a);const r={};4097&s&&(r.$$scope={dirty:s,ctx:t}),m.$set(r);const n={};4097&s&&(n.$$scope={dirty:s,ctx:t}),E.$set(n);const $={};4097&s&&($.$$scope={dirty:s,ctx:t}),I.$set($);const c={};4097&s&&(c.$$scope={dirty:s,ctx:t}),F.$set(c)},i(t){T||(y(e.$$.fragment,t),y(m.$$.fragment,t),y(E.$$.fragment,t),y(I.$$.fragment,t),y(F.$$.fragment,t),T=!0)},o(t){v(e.$$.fragment,t),v(m.$$.fragment,t),v(E.$$.fragment,t),v(I.$$.fragment,t),v(F.$$.fragment,t),T=!1},d(t){x(e,t),t&&l(s),t&&l($),t&&l(c),x(m,t),t&&l(g),t&&l(d),t&&l(w),x(E,t),t&&l(z),t&&l(b),t&&l(D),x(I,t),t&&l(V),t&&l(_),t&&l(A),x(F,t),t&&l(S),t&&l(H)}}}function Pt(t){let e,s,c,w,E,z,b;return z=new H({props:{flush:!0,$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){e=a("h2"),s=$("Key findings"),c=r(),w=a("hr"),E=r(),n(z.$$.fragment),this.h()},l(t){e=o(t,"H2",{class:!0});var a=m(e);s=g(a,"Key findings"),a.forEach(l),c=i(t),w=o(t,"HR",{class:!0}),E=i(t),f(z.$$.fragment,t),this.h()},h(){h(e,"class","svelte-z2sw5t"),h(w,"class","svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),p(t,c,a),p(t,w,a),p(t,E,a),u(z,t,a),b=!0},p(t,e){const s={};4097&e&&(s.$$scope={dirty:e,ctx:t}),z.$set(s)},i(t){b||(y(z.$$.fragment,t),b=!0)},o(t){v(z.$$.fragment,t),b=!1},d(t){t&&l(e),t&&l(c),t&&l(w),t&&l(E),x(z,t)}}}function Bt(t){let e,s;return e=new S({props:{sm:"12",lg:{size:8,offset:2},$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function Kt(t){let e,s,c,w,E,z,b,D,V,_,A,F,S,H,j=t[0].brand+"";return b=new T({props:{icon:M,color:"#2C72F6",size:"2x"}}),_=new T({props:{icon:R,color:"#1DA1F2",size:"2x"}}),S=new T({props:{icon:k,color:"#2F5E80",size:"2x"}}),{c(){e=a("div"),s=a("p"),c=$("Share "),w=$(j),E=$("'s results: \n\t\t\t\t\t\t\t"),z=a("a"),n(b.$$.fragment),D=r(),V=a("a"),n(_.$$.fragment),A=r(),F=a("a"),n(S.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"P",{class:!0});var r=m(s);c=g(r,"Share "),w=g(r,j),E=g(r,"'s results: \n\t\t\t\t\t\t\t"),z=o(r,"A",{rel:!0,target:!0,href:!0,class:!0});var n=m(z);f(b.$$.fragment,n),n.forEach(l),D=i(r),V=o(r,"A",{rel:!0,target:!0,href:!0,class:!0});var $=m(V);f(_.$$.fragment,$),$.forEach(l),A=i(r),F=o(r,"A",{rel:!0,target:!0,href:!0,class:!0});var h=m(F);f(S.$$.fragment,h),h.forEach(l),r.forEach(l),a.forEach(l),this.h()},h(){h(z,"rel","external"),h(z,"target","_new"),h(z,"href","https://www.facebook.com/sharer.php?u="+t[2]("Facebook")),h(z,"class","svelte-z2sw5t"),h(V,"rel","external"),h(V,"target","_new"),h(V,"href","https://twitter.com/intent/tweet?text="+t[2]("Twitter")),h(V,"class","svelte-z2sw5t"),h(F,"rel","external"),h(F,"target","_new"),h(F,"href","mailto:?subject="+t[2]("Email").subject+"&body="+t[2]("Email").message),h(F,"class","svelte-z2sw5t"),h(s,"class","svelte-z2sw5t"),h(e,"class","brand-share svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),d(s,c),d(s,w),d(s,E),d(s,z),u(b,z,null),d(s,D),d(s,V),u(_,V,null),d(s,A),d(s,F),u(S,F,null),H=!0},p(t,e){(!H||1&e)&&j!==(j=t[0].brand+"")&&I(w,j)},i(t){H||(y(b.$$.fragment,t),y(_.$$.fragment,t),y(S.$$.fragment,t),H=!0)},o(t){v(b.$$.fragment,t),v(_.$$.fragment,t),v(S.$$.fragment,t),H=!1},d(t){t&&l(e),x(b),x(_),x(S)}}}function Jt(t){let e,s;return e=new S({props:{sm:"12",lg:{size:8,offset:2},$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function Ot(t){let e,s,c,w,E,z,b,D,I,V,_,A,F;return E=new K({props:{mode:"related",filter:t[0].category.split(",")[0]}}),I=new T({props:{icon:j,size:"2x"}}),{c(){e=a("div"),s=a("h3"),c=$("Similar companies"),w=r(),n(E.$$.fragment),z=r(),b=a("p"),D=a("a"),n(I.$$.fragment),V=$(" View all companies"),_=r(),A=a("hr"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);s=o(a,"H3",{class:!0});var r=m(s);c=g(r,"Similar companies"),r.forEach(l),w=i(a),f(E.$$.fragment,a),z=i(a),b=o(a,"P",{class:!0});var n=m(b);D=o(n,"A",{target:!0,href:!0,class:!0});var $=m(D);f(I.$$.fragment,$),V=g($," View all companies"),$.forEach(l),n.forEach(l),_=i(a),A=o(a,"HR",{class:!0}),a.forEach(l),this.h()},h(){h(s,"class","svelte-z2sw5t"),h(D,"target","_self"),h(D,"href","/brand-scores"),h(D,"class","svelte-z2sw5t"),h(b,"class","svelte-z2sw5t"),h(A,"class","svelte-z2sw5t"),h(e,"class","similar-companies svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s),d(s,c),d(e,w),u(E,e,null),d(e,z),d(e,b),d(b,D),u(I,D,null),d(D,V),d(e,_),d(e,A),F=!0},p(t,e){const s={};1&e&&(s.filter=t[0].category.split(",")[0]),E.$set(s)},i(t){F||(y(E.$$.fragment,t),y(I.$$.fragment,t),F=!0)},o(t){v(E.$$.fragment,t),v(I.$$.fragment,t),F=!1},d(t){t&&l(e),x(E),x(I)}}}function Yt(t){let e,s;return e=new S({props:{sm:"12",lg:{size:8,offset:2},$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function Zt(t){let e,s,n,$,c,f,g,h,u=t[0].commitments_notes+"",v=t[0].renewable_notes+"",w=t[0].materials_notes+"",y=t[0].shipping_notes+"";return{c(){e=a("ul"),s=new G,n=r(),$=new G,c=r(),f=new G,g=r(),h=new G,this.h()},l(t){e=o(t,"UL",{});var a=m(e);s=N(a),n=i(a),$=N(a),c=i(a),f=N(a),g=i(a),h=N(a),a.forEach(l),this.h()},h(){s.a=n,$.a=c,f.a=g,h.a=null},m(t,a){p(t,e,a),s.m(u,e),d(e,n),$.m(v,e),d(e,c),f.m(w,e),d(e,g),h.m(y,e)},p(t,e){1&e&&u!==(u=t[0].commitments_notes+"")&&s.p(u),1&e&&v!==(v=t[0].renewable_notes+"")&&$.p(v),1&e&&w!==(w=t[0].materials_notes+"")&&f.p(w),1&e&&y!==(y=t[0].shipping_notes+"")&&h.p(y)},d(t){t&&l(e)}}}function qt(t){let e,s;return e=new S({props:{sm:"12",$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function Qt(t){let e,s,r;return s=new F({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","notes-body svelte-z2sw5t")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function Wt(t){let e,s;return{c(){e=a("h4"),s=$("Notes"),this.h()},l(t){e=o(t,"H4",{class:!0});var a=m(e);s=g(a,"Notes"),a.forEach(l),this.h()},h(){h(e,"class","svelte-z2sw5t")},m(t,a){p(t,e,a),d(e,s)},d(t){t&&l(e)}}}function Xt(t){let e,s;return e=new S({props:{sm:"12",lg:"12",$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4096&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function te(t){let e,s,r;return s=new F({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0,slot:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","notes-header svelte-z2sw5t"),h(e,"slot","header")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4096&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function ee(t){let e,s;return e=new C({props:{active:!0,$$slots:{header:[te],default:[Qt]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function se(t){let e,s,r;return s=new H({props:{flush:!0,$$slots:{default:[ee]},$$scope:{ctx:t}}}),{c(){e=a("div"),n(s.$$.fragment),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=m(e);f(s.$$.fragment,a),a.forEach(l),this.h()},h(){h(e,"class","notes svelte-z2sw5t")},m(t,a){p(t,e,a),u(s,e,null),r=!0},p(t,e){const a={};4097&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){r||(y(s.$$.fragment,t),r=!0)},o(t){v(s.$$.fragment,t),r=!1},d(t){t&&l(e),x(s)}}}function ae(t){let e,s;return e=new S({props:{sm:"12",lg:{size:8,offset:2},$$slots:{default:[se]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,a){u(e,t,a),s=!0},p(t,s){const a={};4097&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function re(t){let e,s,a,$,c,o,m,g;return e=new F({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),a=new F({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),c=new F({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),m=new F({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=r(),n(a.$$.fragment),$=r(),n(c.$$.fragment),o=r(),n(m.$$.fragment)},l(t){f(e.$$.fragment,t),s=i(t),f(a.$$.fragment,t),$=i(t),f(c.$$.fragment,t),o=i(t),f(m.$$.fragment,t)},m(t,r){u(e,t,r),p(t,s,r),u(a,t,r),p(t,$,r),u(c,t,r),p(t,o,r),u(m,t,r),g=!0},p(t,s){const r={};4097&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const n={};4097&s&&(n.$$scope={dirty:s,ctx:t}),a.$set(n);const $={};4097&s&&($.$$scope={dirty:s,ctx:t}),c.$set($);const o={};4097&s&&(o.$$scope={dirty:s,ctx:t}),m.$set(o)},i(t){g||(y(e.$$.fragment,t),y(a.$$.fragment,t),y(c.$$.fragment,t),y(m.$$.fragment,t),g=!0)},o(t){v(e.$$.fragment,t),v(a.$$.fragment,t),v(c.$$.fragment,t),v(m.$$.fragment,t),g=!1},d(t){x(e,t),t&&l(s),x(a,t),t&&l($),x(c,t),t&&l(o),x(m,t)}}}function ne(t){let e,s,E,z,D,I,V,_,A,F,S,H,T,M,R,k,j,C,G,L,N,U,P,B,K,J,Z;Y.title=e=t[0].brand+" | Fossil-free Fashion Scorecard | Stand.earth",H=new O({props:{headerColor:"blue"}});const W=[Q,q],X=[];function st(t,e){return t[1]?0:1}N=st(t),U=X[N]=W[N](t);const at=[et,tt],rt=[];function nt(t,e){return t[1]?0:1}return K=nt(t),J=rt[K]=at[K](t),{c(){s=a("meta"),z=a("meta"),I=a("meta"),V=a("meta"),_=a("link"),A=a("meta"),S=r(),n(H.$$.fragment),T=r(),M=a("div"),R=a("span"),k=$("Fossil-free Fashion Scorecard"),j=r(),C=a("div"),G=a("div"),L=a("div"),U.c(),P=r(),B=a("div"),J.c(),this.h()},l(t){const e=c('[data-svelte="svelte-1tpwwad"]',Y.head);s=o(e,"META",{name:!0,content:!0}),z=o(e,"META",{property:!0,content:!0}),I=o(e,"META",{property:!0,content:!0}),V=o(e,"META",{name:!0,content:!0}),_=o(e,"LINK",{rel:!0,href:!0}),A=o(e,"META",{property:!0,content:!0}),e.forEach(l),S=i(t),f(H.$$.fragment,t),T=i(t),M=o(t,"DIV",{class:!0});var a=m(M);R=o(a,"SPAN",{class:!0});var r=m(R);k=g(r,"Fossil-free Fashion Scorecard"),r.forEach(l),a.forEach(l),j=i(t),C=o(t,"DIV",{class:!0});var n=m(C);G=o(n,"DIV",{class:!0});var $=m(G);L=o($,"DIV",{class:!0});var h=m(L);U.l(h),h.forEach(l),$.forEach(l),n.forEach(l),P=i(t),B=o(t,"DIV",{class:!0});var d=m(B);J.l(d),d.forEach(l),this.h()},h(){h(s,"name","title"),h(s,"content",E=t[0].brand+" scored "+t[0].grade+" in our Fossil-free Fashion Scorecard | Stand.earth"),h(z,"property","og:title"),h(z,"content",D=t[0].brand+" scored "+t[0].grade+" in our Fossil-free Fashion Scorecard | Stand.earth"),h(I,"property","og:description"),h(I,"content",t[2]()),h(V,"name","description"),h(V,"content","As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."),h(_,"rel","canonical"),h(_,"href","https://fashion.stand.earth"),h(A,"property","og:url"),h(A,"content",F="https://fashion.stand.earth/"+t[0].path),h(R,"class","svelte-z2sw5t"),h(M,"class","banner svelte-z2sw5t"),h(L,"class","summary-content svelte-z2sw5t"),h(G,"class","overlay svelte-z2sw5t"),h(C,"class","brand-cover svelte-z2sw5t"),h(B,"class","brand-content svelte-z2sw5t")},m(t,e){d(Y.head,s),d(Y.head,z),d(Y.head,I),d(Y.head,V),d(Y.head,_),d(Y.head,A),p(t,S,e),u(H,t,e),p(t,T,e),p(t,M,e),d(M,R),d(R,k),p(t,j,e),p(t,C,e),d(C,G),d(G,L),X[N].m(L,null),p(t,P,e),p(t,B,e),rt[K].m(B,null),Z=!0},p(t,[a]){(!Z||1&a)&&e!==(e=t[0].brand+" | Fossil-free Fashion Scorecard | Stand.earth")&&(Y.title=e),(!Z||1&a&&E!==(E=t[0].brand+" scored "+t[0].grade+" in our Fossil-free Fashion Scorecard | Stand.earth"))&&h(s,"content",E),(!Z||1&a&&D!==(D=t[0].brand+" scored "+t[0].grade+" in our Fossil-free Fashion Scorecard | Stand.earth"))&&h(z,"content",D),(!Z||1&a&&F!==(F="https://fashion.stand.earth/"+t[0].path))&&h(A,"content",F);let r=N;N=st(t),N===r?X[N].p(t,a):(b(),v(X[r],1,1,(()=>{X[r]=null})),w(),U=X[N],U?U.p(t,a):(U=X[N]=W[N](t),U.c()),y(U,1),U.m(L,null));let n=K;K=nt(t),K===n?rt[K].p(t,a):(b(),v(rt[n],1,1,(()=>{rt[n]=null})),w(),J=rt[K],J?J.p(t,a):(J=rt[K]=at[K](t),J.c()),y(J,1),J.m(B,null))},i(t){Z||(y(H.$$.fragment,t),y(U),y(J),Z=!0)},o(t){v(H.$$.fragment,t),v(U),v(J),Z=!1},d(t){l(s),l(z),l(I),l(V),l(_),l(A),t&&l(S),x(H,t),t&&l(T),t&&l(M),t&&l(j),t&&l(C),X[N].d(),t&&l(P),t&&l(B),rt[K].d()}}}async function $e({page:t,fetch:e}){const s=t.params.brand;return{props:await e(`${U}/${s}.json`).then((t=>t.json()))}}function ce(t,e,s){let a,{content:r}=e,n=!1;function $(){setTimeout((()=>{J(),document.getElementsByClassName("accordion-collapse")[0].setAttribute("style","overflow:visible")}),500)}E((()=>{setTimeout((function(){s(1,n=!1),document.getElementsByClassName("accordion-collapse")[0].setAttribute("style","overflow:visible"),J()}),200)}));return t.$$set=t=>{"content"in t&&s(0,r=t.content)},[r,n,function(t){P.forEach((function(t){t.Brand==r.brand&&(a=t)}));var e={message:encodeURIComponent(a.Tweet+" https://fashion.stand.earth/"+r.path)},s={subject:encodeURI(r.brand+" scored "+r.grade+" in our fossil-free fashion scorecard"),message:encodeURI(a.Email)+"%0A%0A"+encodeURI("https://fashion.stand.earth/"+r.path)},n={url:encodeURIComponent("https://fashion.stand.earth/"+r.path)+"%26en_chan%3Dfb%26ea.tracking.id%3Dfb-share"};return"Facebook"==t?n.url:"Twitter"==t?e.message:"Email"==t?s:a.Facebook},$,t=>{$()},t=>{$()},t=>{$()},t=>{$()}]}export default class extends t{constructor(t){super(),e(this,t,ce,ne,s,{content:0})}}export{$e as load};