import{S as s,i as a,s as r,l as e,f as t,G as c,d as n,e as l,t as o,c as d,a as v,g as i,b as g,F as h,h as f,k as p,n as u,j as m,m as x,o as E,v as $,r as b,w as I}from"../chunks/vendor-88b22baf.js";function D(s){let a,r,e,c;return{c(){a=l("div"),r=l("span"),e=o(s[0]),this.h()},l(t){a=d(t,"DIV",{class:!0});var c=v(a);r=d(c,"SPAN",{});var l=v(r);e=i(l,s[0]),l.forEach(n),c.forEach(n),this.h()},h(){g(a,"class",c="grade-"+s[0]+" "+s[1]+" svelte-1e14954")},m(s,c){t(s,a,c),h(a,r),h(r,e)},p(s,r){1&r&&f(e,s[0]),3&r&&c!==(c="grade-"+s[0]+" "+s[1]+" svelte-1e14954")&&g(a,"class",c)},d(s){s&&n(a)}}}function V(s){let a,r,e,c,m,x;return{c(){a=l("div"),r=l("div"),e=o(s[0]),c=p(),m=l("div"),this.h()},l(t){a=d(t,"DIV",{class:!0});var l=v(a);r=d(l,"DIV",{class:!0});var o=v(r);e=i(o,s[0]),o.forEach(n),c=u(l),m=d(l,"DIV",{class:!0}),v(m).forEach(n),l.forEach(n),this.h()},h(){g(r,"class","svelte-1e14954"),g(m,"class","arrow-down svelte-1e14954"),g(a,"class",x="grade-"+s[0]+" "+s[1]+" svelte-1e14954")},m(s,n){t(s,a,n),h(a,r),h(r,e),h(a,c),h(a,m)},p(s,r){1&r&&f(e,s[0]),3&r&&x!==(x="grade-"+s[0]+" "+s[1]+" svelte-1e14954")&&g(a,"class",x)},d(s){s&&n(a)}}}function y(s){let a;function r(s,a){return"overall"==s[1]?V:D}let l=r(s),o=l(s);return{c(){o.c(),a=e()},l(s){o.l(s),a=e()},m(s,r){o.m(s,r),t(s,a,r)},p(s,[e]){l===(l=r(s))&&o?o.p(s,e):(o.d(1),o=l(s),o&&(o.c(),o.m(a.parentNode,a)))},i:c,o:c,d(s){o.d(s),s&&n(a)}}}function w(s,a,r){let{grade:e}=a,{gradeType:t}=a;return s.$$set=s=>{"grade"in s&&r(0,e=s.grade),"gradeType"in s&&r(1,t=s.gradeType)},[e,t]}class T extends s{constructor(s){super(),a(this,s,w,y,r,{grade:0,gradeType:1})}}function H(s){let a,r,e,c,D,V,y,w,H,M,j,L,k,G,N,S,A,C,F,P,q,z=s[0].brand+"",B=s[0].summary+"",J=s[0].brands+"";return V=new T({props:{grade:s[0].grade,gradeType:"overall"}}),{c(){a=l("div"),r=l("div"),e=l("div"),c=l("div"),D=l("div"),m(V.$$.fragment),y=p(),w=l("div"),H=l("img"),L=p(),k=l("div"),G=l("h1"),N=o(z),S=p(),A=l("div"),C=l("div"),F=p(),P=l("div"),this.h()},l(s){a=d(s,"DIV",{class:!0});var t=v(a);r=d(t,"DIV",{class:!0});var l=v(r);e=d(l,"DIV",{class:!0});var o=v(e);c=d(o,"DIV",{class:!0});var g=v(c);D=d(g,"DIV",{class:!0});var h=v(D);x(V.$$.fragment,h),h.forEach(n),y=u(g),w=d(g,"DIV",{class:!0});var f=v(w);H=d(f,"IMG",{alt:!0,src:!0}),f.forEach(n),L=u(g),k=d(g,"DIV",{class:!0});var p=v(k);G=d(p,"H1",{});var m=v(G);N=i(m,z),m.forEach(n),p.forEach(n),g.forEach(n),S=u(o),A=d(o,"DIV",{class:!0});var E=v(A);C=d(E,"DIV",{class:!0}),v(C).forEach(n),F=u(E),P=d(E,"DIV",{class:!0}),v(P).forEach(n),E.forEach(n),o.forEach(n),l.forEach(n),t.forEach(n),this.h()},h(){g(D,"class","grade svelte-1xrgr6x"),g(H,"alt",M=s[0].brand),H.src!==(j="assets/images/"+s[0].brand+".png")&&g(H,"src",j),g(w,"class","logo svelte-1xrgr6x"),g(k,"class","name svelte-1xrgr6x"),g(c,"class","row svelte-1xrgr6x"),g(C,"class","summary svelte-1xrgr6x"),g(P,"class","related-brands svelte-1xrgr6x"),g(A,"class","row svelte-1xrgr6x"),g(e,"class","summary-content svelte-1xrgr6x"),g(r,"class","overlay svelte-1xrgr6x"),g(a,"class","brand-cover svelte-1xrgr6x")},m(s,n){t(s,a,n),h(a,r),h(r,e),h(e,c),h(c,D),E(V,D,null),h(c,y),h(c,w),h(w,H),h(c,L),h(c,k),h(k,G),h(G,N),h(e,S),h(e,A),h(A,C),C.innerHTML=B,h(A,F),h(A,P),P.innerHTML=J,q=!0},p(s,[a]){const r={};1&a&&(r.grade=s[0].grade),V.$set(r),(!q||1&a&&M!==(M=s[0].brand))&&g(H,"alt",M),(!q||1&a&&H.src!==(j="assets/images/"+s[0].brand+".png"))&&g(H,"src",j),(!q||1&a)&&z!==(z=s[0].brand+"")&&f(N,z),(!q||1&a)&&B!==(B=s[0].summary+"")&&(C.innerHTML=B),(!q||1&a)&&J!==(J=s[0].brands+"")&&(P.innerHTML=J)},i(s){q||($(V.$$.fragment,s),q=!0)},o(s){b(V.$$.fragment,s),q=!1},d(s){s&&n(a),I(V)}}}async function M(s){const a=`http://${s.page.host}/src/data/${s.page.params.brand}.json`,r=await fetch(a);return r.ok?{props:{content:await r.json()}}:{status:400,error:new Error(`Could not load ${s.page.params.brand}`)}}function j(s,a,r){let{content:e}=a;return s.$$set=s=>{"content"in s&&r(0,e=s.content)},[e]}export default class extends s{constructor(s){super(),a(this,s,j,H,r,{content:0})}}export{M as load};
