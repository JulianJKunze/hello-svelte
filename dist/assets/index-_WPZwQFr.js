var he=Object.defineProperty;var _e=(e,t,n)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>(_e(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function S(){}function ie(e){return e()}function Q(){return Object.create(null)}function K(e){e.forEach(ie)}function le(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ge(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function D(e){e.parentNode&&e.parentNode.removeChild(e)}function oe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function I(e){return document.createTextNode(e)}function L(){return I(" ")}function pe(){return I("")}function ce(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function me(e){return Array.from(e.childNodes)}function se(e,t){t=""+t,e.data!==t&&(e.data=t)}function ye(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}let O;function N(e){O=e}function ve(){if(!O)throw new Error("Function called outside component initialization");return O}function be(){const e=ve();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const o=ye(t,n,{cancelable:i});return r.slice().forEach(l=>{l.call(e,o)}),!o.defaultPrevented}return!0}}const E=[],X=[];let k=[];const Z=[],$e=Promise.resolve();let T=!1;function we(){T||(T=!0,$e.then(fe))}function z(e){k.push(e)}const j=new Set;let C=0;function fe(){if(C!==0)return;const e=O;do{try{for(;C<E.length;){const t=E[C];C++,N(t),Se(t.$$)}}catch(t){throw E.length=0,C=0,t}for(N(null),E.length=0,C=0;X.length;)X.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];j.has(n)||(j.add(n),n())}k.length=0}while(E.length);for(;Z.length;)Z.pop()();T=!1,j.clear(),N(e)}function Se(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}function Ce(e){const t=[],n=[];k.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),k=t}const P=new Set;let w;function ue(){w={r:0,c:[],p:w}}function ae(){w.r||K(w.c),w=w.p}function b(e,t){e&&e.i&&(P.delete(e),e.i(t))}function B(e,t,n,i){if(e&&e.o){if(P.has(e))return;P.add(e),w.c.push(()=>{P.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function F(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function de(e){e&&e.c()}function q(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),z(()=>{const o=e.$$.on_mount.map(ie).filter(le);e.$$.on_destroy?e.$$.on_destroy.push(...o):K(o),e.$$.on_mount=[]}),r.forEach(z)}function V(e,t){const n=e.$$;n.fragment!==null&&(Ce(n.after_update),K(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t){e.$$.dirty[0]===-1&&(E.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,i,r,o,l=null,s=[-1]){const c=O;N(e);const f=e.$$={fragment:null,ctx:[],props:o,update:S,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Q(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};l&&l(f.root);let g=!1;if(f.ctx=n?n(e,t.props||{},(_,h,...y)=>{const v=y.length?y[0]:h;return f.ctx&&r(f.ctx[_],f.ctx[_]=v)&&(!f.skip_bound&&f.bound[_]&&f.bound[_](v),g&&Ee(e,_)),h}):[],f.update(),g=!0,K(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){const _=me(t.target);f.fragment&&f.fragment.l(_),_.forEach(D)}else f.fragment&&f.fragment.c();t.intro&&b(e.$$.fragment),q(e,t.target,t.anchor),fe()}N(c)}class G{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){V(this,1),this.$destroy=S}$on(t,n){if(!le(n))return S;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!ge(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ke="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ke);function Be(e){let t,n,i,r,o,l,s;return{c(){t=m("div"),n=W("svg"),i=W("use"),p(i,"href",r="die-"+e[0]+".svg#Flat"),p(n,"class","diceBoard__die dieId svelte-k0f24r"),p(n,"width","100%"),p(n,"height","100%"),p(n,"viewBox","0 0 100 100"),p(t,"class",o="diceBoard__dieContainer "+(e[2]?"clickable":"")+" "+(e[1]?"diceBoard__diceContainer--isKept":"diceBoard__diceContainer--isRerolled")+" svelte-k0f24r")},m(c,f){A(c,t,f),a(t,n),a(n,i),l||(s=ce(t,"click",e[4]),l=!0)},p(c,[f]){f&1&&r!==(r="die-"+c[0]+".svg#Flat")&&p(i,"href",r),f&6&&o!==(o="diceBoard__dieContainer "+(c[2]?"clickable":"")+" "+(c[1]?"diceBoard__diceContainer--isKept":"diceBoard__diceContainer--isRerolled")+" svelte-k0f24r")&&p(t,"class",o)},i:S,o:S,d(c){c&&D(t),l=!1,s()}}}function De(e,t,n){const i=be();let{eyes:r}=t,{isKept:o}=t,{canSelectDie:l}=t;const s=()=>i("dieClicked");return e.$$set=c=>{"eyes"in c&&n(0,r=c.eyes),"isKept"in c&&n(1,o=c.isKept),"canSelectDie"in c&&n(2,l=c.canSelectDie)},[r,o,l,i,s]}class Le extends G{constructor(t){super(),Y(this,t,De,Be,U,{eyes:0,isKept:1,canSelectDie:2})}}function x(e,t,n){const i=e.slice();return i[3]=t[n],i[5]=n,i}function ee(e){let t,n,i,r,o=e[0][e[5]]+"",l,s;return{c(){t=m("tr"),n=m("th"),n.textContent=`${e[3]}`,i=L(),r=m("td"),l=I(o),s=L()},m(c,f){A(c,t,f),a(t,n),a(t,i),a(t,r),a(r,l),a(t,s)},p(c,f){f&1&&o!==(o=c[0][c[5]]+"")&&se(l,o)},d(c){c&&D(t)}}}function Ne(e){let t,n=F(e[1]),i=[];for(let r=0;r<n.length;r+=1)i[r]=ee(x(e,n,r));return{c(){t=m("table");for(let r=0;r<i.length;r+=1)i[r].c()},m(r,o){A(r,t,o);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(t,null)},p(r,[o]){if(o&3){n=F(r[1]);let l;for(l=0;l<n.length;l+=1){const s=x(r,n,l);i[l]?i[l].p(s,o):(i[l]=ee(s),i[l].c(),i[l].m(t,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=n.length}},i:S,o:S,d(r){r&&D(t),oe(i,r)}}}function Oe(e){let t=[];for(let n=1;n<=6;n++)t[n-1]=e.filter(i=>i==n).length*n;return t}function Ke(e,t,n){let i,{eyes:r}=t;const o=["Aces","Twos","Threes","Fours","Fives","Sixes"];return e.$$set=l=>{"eyes"in l&&n(2,r=l.eyes)},e.$$.update=()=>{e.$$.dirty&4&&n(0,i=Oe(r))},[i,o,r]}class Ae extends G{constructor(t){super(),Y(this,t,Ke,Ne,U,{eyes:2})}}function te(e,t,n){const i=e.slice();return i[9]=t[n],i}function ne(e){let t,n,i=F(e[4]),r=[];for(let l=0;l<i.length;l+=1)r[l]=re(te(e,i,l));const o=l=>B(r[l],1,1,()=>{r[l]=null});return{c(){for(let l=0;l<r.length;l+=1)r[l].c();t=pe()},m(l,s){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(l,s);A(l,t,s),n=!0},p(l,s){if(s&158){i=F(l[4]);let c;for(c=0;c<i.length;c+=1){const f=te(l,i,c);r[c]?(r[c].p(f,s),b(r[c],1)):(r[c]=re(f),r[c].c(),b(r[c],1),r[c].m(t.parentNode,t))}for(ue(),c=i.length;c<r.length;c+=1)o(c);ae()}},i(l){if(!n){for(let s=0;s<i.length;s+=1)b(r[s]);n=!0}},o(l){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)B(r[s]);n=!1},d(l){l&&D(t),oe(r,l)}}}function re(e){let t,n;function i(){return e[8](e[9])}return t=new Le({props:{eyes:e[1][e[9]],isKept:e[2][e[9]],canSelectDie:e[3]}}),t.$on("dieClicked",i),{c(){de(t.$$.fragment)},m(r,o){q(t,r,o),n=!0},p(r,o){e=r;const l={};o&2&&(l.eyes=e[1][e[9]]),o&4&&(l.isKept=e[2][e[9]]),o&8&&(l.canSelectDie=e[3]),t.$set(l)},i(r){n||(b(t.$$.fragment,r),n=!0)},o(r){B(t.$$.fragment,r),n=!1},d(r){V(t,r)}}}function Pe(e){let t,n,i,r,o,l=e[5][e[0]]+"",s,c,f,g,_,h,y,v,M,H,u=e[0]!==0&&ne(e);return y=new Ae({props:{eyes:e[1]}}),{c(){t=m("main"),n=m("div"),i=m("h1"),i.textContent="Let's play Yahtzee",r=L(),o=m("button"),s=I(l),f=L(),g=m("div"),u&&u.c(),_=L(),h=m("div"),de(y.$$.fragment),p(o,"class","btn btn-primary"),o.disabled=c=e[0]===3,p(g,"class","diceBoard svelte-1r3xdok"),p(n,"class","gameArea svelte-1r3xdok")},m(d,$){A(d,t,$),a(t,n),a(n,i),a(n,r),a(n,o),a(o,s),a(n,f),a(n,g),u&&u.m(g,null),a(n,_),a(n,h),q(y,h,null),v=!0,M||(H=ce(o,"click",e[6]),M=!0)},p(d,[$]){(!v||$&1)&&l!==(l=d[5][d[0]]+"")&&se(s,l),(!v||$&1&&c!==(c=d[0]===3))&&(o.disabled=c),d[0]!==0?u?(u.p(d,$),$&1&&b(u,1)):(u=ne(d),u.c(),b(u,1),u.m(g,null)):u&&(ue(),B(u,1,1,()=>{u=null}),ae());const J={};$&2&&(J.eyes=d[1]),y.$set(J)},i(d){v||(b(u),b(y.$$.fragment,d),v=!0)},o(d){B(u),B(y.$$.fragment,d),v=!1},d(d){d&&D(t),u&&u.d(),V(y),M=!1,H()}}}function Fe(e,t,n){let i;const r=[0,0,0,0,0],o=[0,1,2,3,4];let l=[!1,!1,!1,!1,!1],s=0;const c=["Roll the dice!","Second roll!","Last roll!","Select category"];function f(){for(const h of o)l[h]||n(1,r[h]=Math.ceil(Math.random()*6),r);n(0,s=1),s===3&&n(2,l=[!0,!0,!0,!0,!0])}function g(h){i&&n(2,l[h]=!l[h],l)}const _=h=>g(h);return e.$$.update=()=>{e.$$.dirty&1&&n(3,i=s===1||s===2)},[s,r,l,i,o,c,f,g,_]}class Ie extends G{constructor(t){super(),Y(this,t,Fe,Pe,U,{})}}new Ie({target:document.getElementById("app")});
