/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
const e="mwui-stencil";let t;let n;let s;let l=false;let o=false;let c=false;let i=false;let f=false;const r=(e,t="")=>{{return()=>{}}};const u=(e,t)=>{{return()=>{}}};const a="{visibility:hidden}.hydrated{visibility:inherit}";const d={};const h=e=>e!=null;const p=e=>{e=typeof e;return e==="object"||e==="function"};function $(e){var t,n,s;return(s=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const y=(e,t,...n)=>{let s=null;let l=null;let o=null;let c=false;let i=false;const f=[];const r=t=>{for(let n=0;n<t.length;n++){s=t[n];if(Array.isArray(s)){r(s)}else if(s!=null&&typeof s!=="boolean"){if(c=typeof e!=="function"&&!p(s)){s=String(s)}if(c&&i){f[f.length-1].t+=s}else{f.push(c?m(null,s):s)}i=c}}};r(n);if(t){if(t.key){l=t.key}if(t.name){o=t.name}{const e=t.className||t.class;if(e){t.class=typeof e!=="object"?e:Object.keys(e).filter((t=>e[t])).join(" ")}}}const u=m(e,null);u.l=t;if(f.length>0){u.o=f}{u.i=l}{u.u=o}return u};const m=(e,t)=>{const n={h:0,p:e,t,$:null,o:null};{n.l=null}{n.i=null}{n.u=null}return n};const b={};const w=e=>e&&e.p===b;const S=(e,t)=>{if(e!=null&&!p(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};const g=e=>be(e).m;const k=(e,t,n)=>{const s=g(e);return{emit:e=>v(s,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}};const v=(e,t,n)=>{const s=Re.ce(t,n);e.dispatchEvent(s);return s};const j=new WeakMap;const C=(e,t,n)=>{let s=Ce.get(e);if(Te&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=t}else{s.replaceSync(t)}}else{s=t}Ce.set(e,s)};const M=(e,t,n,s)=>{var l;let o=R(t);const c=Ce.get(o);e=e.nodeType===11?e:Oe;if(c){if(typeof c==="string"){e=e.head||e;let t=j.get(e);let n;if(!t){j.set(e,t=new Set)}if(!t.has(o)){{{n=Oe.createElement("style");n.innerHTML=c}const t=(l=Re.S)!==null&&l!==void 0?l:$(Oe);if(t!=null){n.setAttribute("nonce",t)}e.insertBefore(n,e.querySelector("link"))}if(t){t.add(o)}}}else if(!e.adoptedStyleSheets.includes(c)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,c]}}return o};const O=e=>{const t=e.g;const n=e.m;const s=t.h;const l=r("attachStyles",t.k);const o=M(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(s&10){n["s-sc"]=o;n.classList.add(o+"-h")}l()};const R=(e,t)=>"sc-"+e.k;const P=(e,t,n,s,l,o)=>{if(n!==s){let c=ge(e,t);let i=t.toLowerCase();if(t==="class"){const t=e.classList;const l=L(n);const o=L(s);t.remove(...l.filter((e=>e&&!o.includes(e))));t.add(...o.filter((e=>e&&!l.includes(e))))}else if(t==="style"){{for(const t in n){if(!s||s[t]==null){if(t.includes("-")){e.style.removeProperty(t)}else{e.style[t]=""}}}}for(const t in s){if(!n||s[t]!==n[t]){if(t.includes("-")){e.style.setProperty(t,s[t])}else{e.style[t]=s[t]}}}}else if(t==="key");else if(t==="ref"){if(s){s(e)}}else if(!c&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(ge(Me,i)){t=i.slice(2)}else{t=i[2]+t.slice(3)}if(n){Re.rel(e,t,n,false)}if(s){Re.ael(e,t,s,false)}}else{const i=p(s);if((c||i&&s!==null)&&!l){try{if(!e.tagName.includes("-")){const l=s==null?"":s;if(t==="list"){c=false}else if(n==null||e[t]!=l){e[t]=l}}else{e[t]=s}}catch(e){}}if(s==null||s===false){if(s!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!c||o&4||l)&&!i){s=s===true?"":s;{e.setAttribute(t,s)}}}}};const T=/\s/;const L=e=>!e?[]:e.split(T);const N=(e,t,n,s)=>{const l=t.$.nodeType===11&&t.$.host?t.$.host:t.$;const o=e&&e.l||d;const c=t.l||d;{for(s in o){if(!(s in c)){P(l,s,o[s],undefined,n,t.h)}}}for(s in c){P(l,s,o[s],c[s],n,t.h)}};const U=(e,o,f,r)=>{const u=o.o[f];let a=0;let d;let p;let $;if(!l){c=true;if(u.p==="slot"){if(t){r.classList.add(t+"-s")}u.h|=u.o?2:1}}if(u.t!==null){d=u.$=Oe.createTextNode(u.t)}else if(u.h&1){d=u.$=Oe.createTextNode("")}else{d=u.$=Oe.createElement(u.h&2?"slot-fb":u.p);{N(null,u,i)}if(h(t)&&d["s-si"]!==t){d.classList.add(d["s-si"]=t)}if(u.o){for(a=0;a<u.o.length;++a){p=U(e,u,a,d);if(p){d.appendChild(p)}}}}{d["s-hn"]=s;if(u.h&(2|1)){d["s-sr"]=true;d["s-cr"]=n;d["s-sn"]=u.u||"";$=e&&e.o&&e.o[f];if($&&$.p===u.p&&e.$){W(e.$,false)}}}return d};const W=(e,t)=>{Re.h|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const l=n[e];if(l["s-hn"]!==s&&l["s-ol"]){q(l).insertBefore(l,H(l));l["s-ol"].remove();l["s-ol"]=undefined;c=true}if(t){W(l,t)}}Re.h&=~1};const x=(e,t,n,l,o,c)=>{let i=e["s-cr"]&&e["s-cr"].parentNode||e;let f;if(i.shadowRoot&&i.tagName===s){i=i.shadowRoot}for(;o<=c;++o){if(l[o]){f=U(null,n,o,e);if(f){l[o].$=f;i.insertBefore(f,H(t))}}}};const E=(e,t,n,s,l)=>{for(;t<=n;++t){if(s=e[t]){l=s.$;B(s);{o=true;if(l["s-ol"]){l["s-ol"].remove()}else{W(l,true)}}l.remove()}}};const A=(e,t,n,s)=>{let l=0;let o=0;let c=0;let i=0;let f=t.length-1;let r=t[0];let u=t[f];let a=s.length-1;let d=s[0];let h=s[a];let p;let $;while(l<=f&&o<=a){if(r==null){r=t[++l]}else if(u==null){u=t[--f]}else if(d==null){d=s[++o]}else if(h==null){h=s[--a]}else if(F(r,d)){D(r,d);r=t[++l];d=s[++o]}else if(F(u,h)){D(u,h);u=t[--f];h=s[--a]}else if(F(r,h)){if(r.p==="slot"||h.p==="slot"){W(r.$.parentNode,false)}D(r,h);e.insertBefore(r.$,u.$.nextSibling);r=t[++l];h=s[--a]}else if(F(u,d)){if(r.p==="slot"||h.p==="slot"){W(u.$.parentNode,false)}D(u,d);e.insertBefore(u.$,r.$);u=t[--f];d=s[++o]}else{c=-1;{for(i=l;i<=f;++i){if(t[i]&&t[i].i!==null&&t[i].i===d.i){c=i;break}}}if(c>=0){$=t[c];if($.p!==d.p){p=U(t&&t[o],n,c,e)}else{D($,d);t[c]=undefined;p=$.$}d=s[++o]}else{p=U(t&&t[o],n,o,e);d=s[++o]}if(p){{q(r.$).insertBefore(p,H(r.$))}}}}if(l>f){x(e,s[a+1]==null?null:s[a+1].$,n,s,o,a)}else if(o>a){E(t,l,f)}};const F=(e,t)=>{if(e.p===t.p){if(e.p==="slot"){return e.u===t.u}{return e.i===t.i}}return false};const H=e=>e&&e["s-ol"]||e;const q=e=>(e["s-ol"]?e["s-ol"]:e).parentNode;const D=(e,t)=>{const n=t.$=e.$;const s=e.o;const l=t.o;const o=t.p;const c=t.t;let f;if(c===null){{if(o==="slot");else{N(e,t,i)}}if(s!==null&&l!==null){A(n,s,t,l)}else if(l!==null){if(e.t!==null){n.textContent=""}x(n,null,t,l,0,l.length-1)}else if(s!==null){E(s,0,s.length-1)}}else if(f=n["s-cr"]){f.parentNode.textContent=c}else if(e.t!==c){n.data=c}};const I=e=>{const t=e.childNodes;let n;let s;let l;let o;let c;let i;for(s=0,l=t.length;s<l;s++){n=t[s];if(n.nodeType===1){if(n["s-sr"]){c=n["s-sn"];n.hidden=false;for(o=0;o<l;o++){i=t[o].nodeType;if(t[o]["s-hn"]!==n["s-hn"]||c!==""){if(i===1&&c===t[o].getAttribute("slot")){n.hidden=true;break}}else{if(i===1||i===3&&t[o].textContent.trim()!==""){n.hidden=true;break}}}}I(n)}}};const V=[];const _=e=>{let t;let n;let s;let l;let c;let i;let f=0;const r=e.childNodes;const u=r.length;for(;f<u;f++){t=r[f];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;l=t["s-sn"];for(i=s.length-1;i>=0;i--){n=s[i];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(z(n,l)){c=V.find((e=>e.v===n));o=true;n["s-sn"]=n["s-sn"]||l;if(c){c.j=t}else{V.push({j:t,v:n})}if(n["s-sr"]){V.map((e=>{if(z(e.v,n["s-sn"])){c=V.find((e=>e.v===n));if(c&&!e.j){e.j=c.j}}}))}}else if(!V.some((e=>e.v===n))){V.push({v:n})}}}}if(t.nodeType===1){_(t)}}};const z=(e,t)=>{if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};const B=e=>{{e.l&&e.l.ref&&e.l.ref(null);e.o&&e.o.map(B)}};const G=(e,i)=>{const f=e.m;const r=e.g;const u=e.C||m(null,null);const a=w(i)?i:y(null,null,i);s=f.tagName;if(r.M){a.l=a.l||{};r.M.map((([e,t])=>a.l[t]=f[e]))}a.p=null;a.h|=4;e.C=a;a.$=u.$=f.shadowRoot||f;{t=f["s-sc"]}{n=f["s-cr"];l=(r.h&1)!==0;o=false}D(u,a);{Re.h|=1;if(c){_(a.$);let e;let t;let n;let s;let l;let o;let c=0;for(;c<V.length;c++){e=V[c];t=e.v;if(!t["s-ol"]){n=Oe.createTextNode("");n["s-nr"]=t;t.parentNode.insertBefore(t["s-ol"]=n,t)}}for(c=0;c<V.length;c++){e=V[c];t=e.v;if(e.j){s=e.j.parentNode;l=e.j.nextSibling;n=t["s-ol"];while(n=n.previousSibling){o=n["s-nr"];if(o&&o["s-sn"]===t["s-sn"]&&s===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&s!==t.parentNode||t.nextSibling!==l){if(t!==l){if(!t["s-hn"]&&t["s-ol"]){t["s-hn"]=t["s-ol"].parentNode.nodeName}s.insertBefore(t,l)}}}else{if(t.nodeType===1){t.hidden=true}}}}if(o){I(a.$)}Re.h&=~1;V.length=0}};const J=(e,t)=>{if(t&&!e.O&&t["s-p"]){t["s-p"].push(new Promise((t=>e.O=t)))}};const K=(e,t)=>{{e.h|=16}if(e.h&4){e.h|=512;return}J(e,e.R);const n=()=>Q(e,t);return Ae(n)};const Q=(e,t)=>{const n=r("scheduleUpdate",e.g.k);const s=e.P;let l;if(t){{e.h|=256;if(e.T){e.T.map((([e,t])=>te(s,e,t)));e.T=null}}{l=te(s,"componentWillLoad")}}{l=ne(l,(()=>te(s,"componentWillRender")))}n();return ne(l,(()=>X(e,s,t)))};const X=async(e,t,n)=>{const s=e.m;const l=r("update",e.g.k);const o=s["s-rc"];if(n){O(e)}const c=r("render",e.g.k);{Y(e,t)}if(o){o.map((e=>e()));s["s-rc"]=undefined}c();l();{const t=s["s-p"];const n=()=>Z(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.h|=4;t.length=0}}};const Y=(e,t,n)=>{try{t=t.render();{e.h&=~16}{e.h|=2}{{{G(e,t)}}}}catch(t){ke(t,e.m)}return null};const Z=e=>{const t=e.g.k;const n=e.m;const s=r("postUpdate",t);const l=e.P;const o=e.R;if(!(e.h&64)){e.h|=64;{se(n)}{te(l,"componentDidLoad")}s();{e.L(n);if(!o){ee()}}}else{s()}{e.N(n)}{if(e.O){e.O();e.O=undefined}if(e.h&512){Ee((()=>K(e,false)))}e.h&=~(4|512)}};const ee=t=>{{se(Oe.documentElement)}Ee((()=>v(Me,"appload",{detail:{namespace:e}})))};const te=(e,t,n)=>{if(e&&e[t]){try{return e[t](n)}catch(e){ke(e)}}return undefined};const ne=(e,t)=>e&&e.then?e.then(t):t();const se=e=>e.classList.add("hydrated");const le=(e,t)=>be(e).U.get(t);const oe=(e,t,n,s)=>{const l=be(e);const o=l.m;const c=l.U.get(t);const i=l.h;const f=l.P;n=S(n,s.W[t][0]);const r=Number.isNaN(c)&&Number.isNaN(n);const u=n!==c&&!r;if((!(i&8)||c===undefined)&&u){l.U.set(t,n);if(f){if(s.A&&i&128){const e=s.A[t];if(e){e.map((e=>{try{f[e](n,c,t)}catch(e){ke(e,o)}}))}}if((i&(2|16))===2){K(l,false)}}}};const ce=(e,t,n)=>{if(t.W){if(e.watchers){t.A=e.watchers}const s=Object.entries(t.W);const l=e.prototype;s.map((([e,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,e,{get(){return le(this,e)},set(n){oe(this,e,n,t)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(l,e,{value(...t){const n=be(this);return n.F.then((()=>n.P[e](...t)))}})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(e,t,s){Re.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t)){s=this[t];delete this[t]}else if(l.hasOwnProperty(t)&&typeof this[t]==="number"&&this[t]==s){return}this[t]=s===null&&typeof this[t]==="boolean"?false:s}))};e.observedAttributes=s.filter((([e,t])=>t[0]&15)).map((([e,s])=>{const l=s[1]||e;n.set(l,e);if(s[0]&512){t.M.push([e,l])}return l}))}}return e};const ie=async(e,t,n,s,l)=>{if((t.h&32)===0){{t.h|=32;l=je(n);if(l.then){const e=u();l=await l;e()}if(!l.isProxied){{n.A=l.watchers}ce(l,n,2);l.isProxied=true}const e=r("createInstance",n.k);{t.h|=8}try{new l(t)}catch(e){ke(e)}{t.h&=~8}{t.h|=128}e();fe(t.P)}if(l.style){let e=l.style;const t=R(n);if(!Ce.has(t)){const s=r("registerStyles",n.k);C(t,e,!!(n.h&1));s()}}}const o=t.R;const c=()=>K(t,true);if(o&&o["s-rc"]){o["s-rc"].push(c)}else{c()}};const fe=e=>{{te(e,"connectedCallback")}};const re=e=>{if((Re.h&1)===0){const t=be(e);const n=t.g;const s=r("connectedCallback",n.k);if(!(t.h&1)){t.h|=1;{if(n.h&(4|8)){ue(e)}}{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){J(t,t.R=n);break}}}if(n.W){Object.entries(n.W).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{ie(e,t,n)}}else{he(e,t,n.H);fe(t.P)}s()}};const ue=e=>{const t=e["s-cr"]=Oe.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};const ae=e=>{if((Re.h&1)===0){const t=be(e);const n=t.P;{if(t.q){t.q.map((e=>e()));t.q=undefined}}{te(n,"disconnectedCallback")}}};const de=(e,t={})=>{var n;const s=r();const l=[];const o=t.exclude||[];const c=Me.customElements;const i=Oe.head;const f=i.querySelector("meta[charset]");const u=Oe.createElement("style");const d=[];let h;let p=true;Object.assign(Re,t);Re.D=new URL(t.resourcesUrl||"./",Oe.baseURI).href;e.map((e=>{e[1].map((t=>{const n={h:t[0],k:t[1],W:t[2],H:t[3]};{n.W=t[2]}{n.H=t[3]}{n.M=[]}{n.A={}}const s=n.k;const i=class extends HTMLElement{constructor(e){super(e);e=this;Se(e,n);if(n.h&1){{{e.attachShadow({mode:"open"})}}}}connectedCallback(){if(h){clearTimeout(h);h=null}if(p){d.push(this)}else{Re.jmp((()=>re(this)))}}disconnectedCallback(){Re.jmp((()=>ae(this)))}componentOnReady(){return be(this).I}};n.V=e[0];if(!o.includes(s)&&!c.get(s)){l.push(s);c.define(s,ce(i,n,1))}}))}));{u.innerHTML=l+a;u.setAttribute("data-styles","");const e=(n=Re.S)!==null&&n!==void 0?n:$(Oe);if(e!=null){u.setAttribute("nonce",e)}i.insertBefore(u,f?f.nextSibling:i.firstChild)}p=false;if(d.length){d.map((e=>e.connectedCallback()))}else{{Re.jmp((()=>h=setTimeout(ee,30)))}}s()};const he=(e,t,n,s)=>{if(n){n.map((([n,s,l])=>{const o=e;const c=pe(t,l);const i=$e(n);Re.ael(o,s,c,i);(t.q=t.q||[]).push((()=>Re.rel(o,s,c,i)))}))}};const pe=(e,t)=>n=>{try{{if(e.h&256){e.P[t](n)}else{(e.T=e.T||[]).push([t,n])}}}catch(e){ke(e)}};const $e=e=>(e&2)!==0;const ye=e=>Re.S=e;const me=new WeakMap;const be=e=>me.get(e);const we=(e,t)=>me.set(t.P=e,t);const Se=(e,t)=>{const n={h:0,m:e,g:t,U:new Map};{n.F=new Promise((e=>n.N=e))}{n.I=new Promise((e=>n.L=e));e["s-p"]=[];e["s-rc"]=[]}he(e,n,t.H);return me.set(e,n)};const ge=(e,t)=>t in e;const ke=(e,t)=>(0,console.error)(e,t);const ve=new Map;const je=(e,t,n)=>{const s=e.k.replace(/-/g,"_");const l=e.V;const o=ve.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{ve.set(l,e)}return e[s]}),ke)};const Ce=new Map;const Me=typeof window!=="undefined"?window:{};const Oe=Me.document||{head:{}};const Re={h:0,D:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)};const Pe=e=>Promise.resolve(e);const Te=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();const Le=[];const Ne=[];const Ue=(e,t)=>n=>{e.push(n);if(!f){f=true;if(t&&Re.h&4){Ee(xe)}else{Re.raf(xe)}}};const We=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){ke(e)}}e.length=0};const xe=()=>{We(Le);{We(Ne);if(f=Le.length>0){Re.raf(xe)}}};const Ee=e=>Pe().then(e);const Ae=Ue(Ne,true);export{b as H,de as b,k as c,g,y as h,Pe as p,we as r,ye as s};
//# sourceMappingURL=p-0b84170d.js.map