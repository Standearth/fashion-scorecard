function w(){}const W=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function Z(){return Object.create(null)}function v(t){t.forEach(it)}function B(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function Gt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function gt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(yt(e,n))}function Wt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,l){if(s){const r=st(e,n,i,l);t.p(r,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Vt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Xt(t){return t==null?"":t}const rt=typeof window!="undefined";let J=rt?()=>window.performance.now():()=>Date.now(),K=rt?t=>requestAnimationFrame(t):w;const k=new Set;function ct(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&K(ct)}function Q(t){let e;return k.size===0&&K(ct),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let z=!1;function bt(){z=!0}function xt(){z=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:$t(1,s,u=>e[n[u]].claim_order,a))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(r[c],_)}}function vt(t,e){t.appendChild(e)}function lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=U("style");return Et(lt(t),e),e.sheet}function Et(t,e){vt(t.head||t,e)}function At(t,e){if(z){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function Nt(t,e,n){z&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function Zt(){return V(" ")}function te(){return V("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ne(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Ct(t,i,e[i])}function jt(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function at(t,e,n,i,s=!1){ot(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ut(t,e,n,i){return at(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ie(t,e,n){return ut(t,e,n,U)}function se(t,e,n){return ut(t,e,n,St)}function Mt(t,e){return at(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function re(t){return Mt(t," ")}function tt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ce(t){const e=tt(t,"HTML_TAG_START",0),n=tt(t,"HTML_TAG_END",e);if(e===n)return new et;ot(t);const i=t.splice(e,n-e+1);H(i[0]),H(i[i.length-1]);const s=i.slice(1,i.length-1);for(const l of s)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new et(s)}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e){t.value=e==null?"":e}function ae(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ue(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function fe(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function ft(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function de(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Dt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=U(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(H)}}class et extends Dt{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}}const L=new Map;let O=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ht(t,e){const n={stylesheet:kt(e),rules:{}};return L.set(t,n),n}function R(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*l(m);a+=m*100+`%{${r(y,1-y)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${qt(_)}_${o}`,u=lt(t),{stylesheet:d,rules:h}=L.get(u)||Ht(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,O+=1,f}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),O-=s,O||Lt())}function Lt(){K(()=>{O||(L.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),L.clear())})}let C;function S(t){C=t}function A(){if(!C)throw new Error("Function called outside component initialization");return C}function he(t){A().$$.on_mount.push(t)}function me(t){A().$$.after_update.push(t)}function pe(t){A().$$.on_destroy.push(t)}function ge(){const t=A();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=ft(e,n);i.slice().forEach(l=>{l.call(t,s)})}}}function ye(t,e){A().$$.context.set(t,e)}function be(t){return A().$$.context.get(t)}function xe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const N=[],nt=[],D=[],G=[],_t=Promise.resolve();let I=!1;function dt(){I||(I=!0,_t.then(ht))}function $e(){return dt(),_t}function E(t){D.push(t)}function we(t){G.push(t)}const F=new Set;let M=0;function ht(){const t=C;do{for(;M<N.length;){const e=N[M];M++,S(e),Ot(e.$$)}for(S(null),N.length=0,M=0;nt.length;)nt.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];F.has(n)||(F.add(n),n())}D.length=0}while(N.length);for(;G.length;)G.pop()();I=!1,F.clear(),S(t)}function Ot(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let T;function X(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function $(t,e,n){t.dispatchEvent(ft(`${e?"intro":"outro"}${n}`))}const q=new Set;let g;function ve(){g={r:0,c:[],p:g}}function ke(){g.r||v(g.c),g=g.p}function Rt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Ee(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),g.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Y={duration:0};function Ae(t,e,n){let i=e(t,n),s=!1,l,r,o=0;function c(){l&&P(t,l)}function a(){const{delay:f=0,duration:u=300,easing:d=W,tick:h=w,css:p}=i||Y;p&&(l=R(t,0,1,u,f,d,p,o++)),h(0,1);const m=J()+f,y=m+u;r&&r.abort(),s=!0,E(()=>$(t,!0,"start")),r=Q(b=>{if(s){if(b>=y)return h(1,0),$(t,!0,"end"),c(),s=!1;if(b>=m){const x=d((b-m)/u);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,P(t),B(i)?(i=i(),X().then(a)):a())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function Te(t,e,n){let i=e(t,n),s=!0,l;const r=g;r.r+=1;function o(){const{delay:c=0,duration:a=300,easing:_=W,tick:f=w,css:u}=i||Y;u&&(l=R(t,1,0,a,c,_,u));const d=J()+c,h=d+a;E(()=>$(t,!1,"start")),Q(p=>{if(s){if(p>=h)return f(0,1),$(t,!1,"end"),--r.r||v(r.c),!1;if(p>=d){const m=_((p-d)/a);f(1-m,m)}}return s})}return B(i)?X().then(()=>{i=i(),o()}):o(),{end(c){c&&i.tick&&i.tick(1,0),s&&(l&&P(t,l),s=!1)}}}function Ne(t,e,n,i){let s=e(t,n),l=i?0:1,r=null,o=null,c=null;function a(){c&&P(t,c)}function _(u,d){const h=u.b-l;return d*=Math.abs(h),{a:l,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:p=W,tick:m=w,css:y}=s||Y,b={start:J()+d,b:u};u||(b.group=g,g.r+=1),r||o?o=b:(y&&(a(),c=R(t,l,u,h,d,p,y)),u&&m(0,1),r=_(b,h),E(()=>$(t,u,"start")),Q(x=>{if(o&&x>o.start&&(r=_(o,h),o=null,$(t,r.b,"start"),y&&(a(),c=R(t,l,r.b,r.duration,0,p,s.css))),r){if(x>=r.end)m(l=r.b,1-l),$(t,r.b,"end"),o||(r.b?a():--r.group.r||v(r.group.c)),r=null;else if(x>=r.start){const mt=x-r.start;l=r.a+r.d*p(mt/r.duration),m(l,1-l)}}return!!(r||o)}))}return{run(u){B(s)?X().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=o=null}}}const Se=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Ce(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function je(t){return typeof t=="object"&&t!==null?t:{}}function Me(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function De(t){t&&t.c()}function qe(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:s,on_mount:l,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||E(()=>{const c=l.map(it).filter(B);r?r.push(...c):v(c),t.$$.on_mount=[]}),o.forEach(E)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(N.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function He(t,e,n,i,s,l,r,o=[-1]){const c=C;S(t);const a=t.$$={fragment:null,ctx:null,props:l,update:w,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&zt(t,f)),u}):[],a.update(),_=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){bt();const f=jt(e.target);a.fragment&&a.fragment.l(f),f.forEach(H)}else a.fragment&&a.fragment.c();e.intro&&Rt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),xt(),ht()}S(c)}class Le{$destroy(){Bt(this,1),this.$destroy=w}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{B as $,je as A,Bt as B,pt as C,$e as D,w as E,Wt as F,de as G,Gt as H,At as I,Kt as J,Qt as K,Jt as L,Se as M,Yt as N,et as O,ce as P,W as Q,ne as R,Le as S,_e as T,ee as U,E as V,Ae as W,Te as X,Vt as Y,Ut as Z,xe as _,jt as a,pe as a0,nt as a1,ge as a2,v as a3,Me as a4,we as a5,fe as a6,ue as a7,oe as a8,Ne as a9,It as aa,be as ab,St as ac,se as ad,Xt as ae,Ct as b,ie as c,H as d,U as e,ae as f,Nt as g,Mt as h,He as i,le as j,Zt as k,te as l,re as m,ve as n,Ee as o,ke as p,Rt as q,ye as r,Ft as s,V as t,me as u,he as v,De as w,qe as x,Pt as y,Ce as z};