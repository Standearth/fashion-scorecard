import{S as s,i as a,s as n,j as e,k as r,e as t,t as o,m as c,n as f,c as i,a as h,g as d,d as l,b as p,o as u,f as m,E as $,h as g,v as b,r as j,w as v}from"../../chunks/vendor-713d93b3.js";import{H as F}from"../../chunks/Header-86eef0fc.js";function S(s){let a,n,S,k,w,x,E,H,y=s[0].brand+"";return a=new F({props:{headerColor:"blue"}}),{c(){e(a.$$.fragment),n=r(),S=t("div"),k=t("span"),w=o("Fossil-free Fashion Scorecard"),x=r(),E=o(y),this.h()},l(s){c(a.$$.fragment,s),n=f(s),S=i(s,"DIV",{class:!0});var e=h(S);k=i(e,"SPAN",{});var r=h(k);w=d(r,"Fossil-free Fashion Scorecard"),r.forEach(l),e.forEach(l),x=f(s),E=d(s,y),this.h()},h(){p(S,"class","banner")},m(s,e){u(a,s,e),m(s,n,e),m(s,S,e),$(S,k),$(k,w),m(s,x,e),m(s,E,e),H=!0},p(s,[a]){(!H||1&a)&&y!==(y=s[0].brand+"")&&g(E,y)},i(s){H||(b(a.$$.fragment,s),H=!0)},o(s){j(a.$$.fragment,s),H=!1},d(s){v(a,s),s&&l(n),s&&l(S),s&&l(x),s&&l(E)}}}async function k({page:s,fetch:a}){const n=`../src/data/${s.params.finding}.json`;console.log(n);return{props:{content:await a(n).then((s=>s.json()))}}}function w(s,a,n){let{content:e}=a;return s.$$set=s=>{"content"in s&&n(0,e=s.content)},[e]}export default class extends s{constructor(s){super(),a(this,s,w,S,n,{content:0})}}export{k as load};