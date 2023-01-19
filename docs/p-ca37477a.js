/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
let e,t,l,n=!1,s=!1,o=!1,i=!1;const r={},c=e=>"object"==(e=typeof e)||"function"===e,f=(e,t,...l)=>{let n=null,s=null,o=null,i=!1,r=!1;const f=[],a=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?a(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!c(n))&&(n+=""),i&&r?f[f.length-1].t+=n:f.push(i?u(null,n):n),r=i)};if(a(l),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const $=u(e,null);return $.l=t,f.length>0&&($.o=f),$.i=s,$.u=o,$},u=(e,t)=>({$:0,m:e,t,p:null,o:null,l:null,i:null,u:null}),a={},$=e=>I(e).h,d=(e,t,l)=>{const n=$(e);return{emit:e=>y(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},y=(e,t,l)=>{const n=ne.ce(t,l);return e.dispatchEvent(n),n},m=new WeakMap,p=e=>"sc-"+e.S,h=(e,t,l,n,s,o)=>{if(l!==n){let i=Q(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,s=w(l),o=w(n);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=c(n);if((i||r&&null!==n)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const s=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==s||(e[t]=s)}}catch(e){}null==n||!1===n?!1===n&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&o||s)&&!r&&e.setAttribute(t,n=!0===n?"":n)}else t="-"===t[2]?t.slice(3):Q(te,r)?r.slice(2):r[2]+t.slice(3),l&&ne.rel(e,t,l,!1),n&&ne.ael(e,t,n,!1)}},b=/\s/,w=e=>e?e.split(b):[],S=(e,t,l,n)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.l||r,i=t.l||r;for(n in o)n in i||h(s,n,o[n],void 0,l,t.$);for(n in i)h(s,n,o[n],i[n],l,t.$)},g=(s,i,r,c)=>{const f=i.o[r];let u,a,$,d=0;if(n||(o=!0,"slot"===f.m&&(e&&c.classList.add(e+"-s"),f.$|=f.o?2:1)),null!==f.t)u=f.p=le.createTextNode(f.t);else if(1&f.$)u=f.p=le.createTextNode("");else if(u=f.p=le.createElement(2&f.$?"slot-fb":f.m),S(null,f,!1),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),f.o)for(d=0;d<f.o.length;++d)a=g(s,f,d,u),a&&u.appendChild(a);return u["s-hn"]=l,3&f.$&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=f.u||"",$=s&&s.o&&s.o[r],$&&$.m===f.m&&s.p&&k(s.p,!1)),u},k=(e,t)=>{ne.$|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==l&&s["s-ol"]&&(O(s).insertBefore(s,C(s)),s["s-ol"].remove(),s["s-ol"]=void 0,o=!0),t&&k(s,t)}ne.$&=-2},j=(e,t,n,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=g(null,n,o,e),r&&(s[o].p=r,c.insertBefore(r,C(t))))},v=(e,t,l,n,o)=>{for(;t<=l;++t)(n=e[t])&&(o=n.p,x(n),s=!0,o["s-ol"]?o["s-ol"].remove():k(o,!0),o.remove())},M=(e,t)=>e.m===t.m&&("slot"===e.m?e.u===t.u:e.i===t.i),C=e=>e&&e["s-ol"]||e,O=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,R=(e,t)=>{const l=t.p=e.p,n=e.o,s=t.o,o=t.t;let i;null===o?("slot"===t.m||S(e,t,!1),null!==n&&null!==s?((e,t,l,n)=>{let s,o,i=0,r=0,c=0,f=0,u=t.length-1,a=t[0],$=t[u],d=n.length-1,y=n[0],m=n[d];for(;i<=u&&r<=d;)if(null==a)a=t[++i];else if(null==$)$=t[--u];else if(null==y)y=n[++r];else if(null==m)m=n[--d];else if(M(a,y))R(a,y),a=t[++i],y=n[++r];else if(M($,m))R($,m),$=t[--u],m=n[--d];else if(M(a,m))"slot"!==a.m&&"slot"!==m.m||k(a.p.parentNode,!1),R(a,m),e.insertBefore(a.p,$.p.nextSibling),a=t[++i],m=n[--d];else if(M($,y))"slot"!==a.m&&"slot"!==m.m||k($.p.parentNode,!1),R($,y),e.insertBefore($.p,a.p),$=t[--u],y=n[++r];else{for(c=-1,f=i;f<=u;++f)if(t[f]&&null!==t[f].i&&t[f].i===y.i){c=f;break}c>=0?(o=t[c],o.m!==y.m?s=g(t&&t[r],l,c,e):(R(o,y),t[c]=void 0,s=o.p),y=n[++r]):(s=g(t&&t[r],l,r,e),y=n[++r]),s&&O(a.p).insertBefore(s,C(a.p))}i>u?j(e,null==n[d+1]?null:n[d+1].p,l,n,r,d):r>d&&v(t,i,u)})(l,n,t,s):null!==s?(null!==e.t&&(l.textContent=""),j(l,null,t,s,0,s.length-1)):null!==n&&v(n,0,n.length-1)):(i=l["s-cr"])?i.parentNode.textContent=o:e.t!==o&&(l.data=o)},T=e=>{const t=e.childNodes;let l,n,s,o,i,r;for(n=0,s=t.length;n<s;n++)if(l=t[n],1===l.nodeType){if(l["s-sr"])for(i=l["s-sn"],l.hidden=!1,o=0;o<s;o++)if(r=t[o].nodeType,t[o]["s-hn"]!==l["s-hn"]||""!==i){if(1===r&&i===t[o].getAttribute("slot")){l.hidden=!0;break}}else if(1===r||3===r&&""!==t[o].textContent.trim()){l.hidden=!0;break}T(l)}},N=[],P=e=>{let t,l,n,o,i,r,c=0;const f=e.childNodes,u=f.length;for(;c<u;c++){if(t=f[c],t["s-sr"]&&(l=t["s-cr"])&&l.parentNode)for(n=l.parentNode.childNodes,o=t["s-sn"],r=n.length-1;r>=0;r--)l=n[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(W(l,o)?(i=N.find((e=>e.g===l)),s=!0,l["s-sn"]=l["s-sn"]||o,i?i.k=t:N.push({k:t,g:l}),l["s-sr"]&&N.map((e=>{W(e.g,l["s-sn"])&&(i=N.find((e=>e.g===l)),i&&!e.k&&(e.k=i.k))}))):N.some((e=>e.g===l))||N.push({g:l}));1===t.nodeType&&P(t)}},W=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,x=e=>{e.l&&e.l.ref&&e.l.ref(null),e.o&&e.o.map(x)},E=(e,t)=>{t&&!e.j&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.j=t)))},L=(e,t)=>{if(e.$|=16,!(4&e.$))return E(e,e.v),$e((()=>A(e,t)));e.$|=512},A=(e,t)=>{const l=e.M;let n;return t&&(n=V(l,"componentWillLoad")),n=_(n,(()=>V(l,"componentWillRender"))),_(n,(()=>F(e,l,t)))},F=async(e,t,l)=>{const n=e.h,s=n["s-rc"];l&&(e=>{const t=e.C,l=e.h,n=t.$,s=((e,t)=>{let l=p(t);const n=ee.get(l);if(e=11===e.nodeType?e:le,n)if("string"==typeof n){let t,s=m.get(e=e.head||e);s||m.set(e,s=new Set),s.has(l)||(t=le.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link")),s&&s.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l})(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=s,l.classList.add(s+"-h"))})(e);H(e,t),s&&(s.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>U(e);0===t.length?l():(Promise.all(t).then(l),e.$|=4,t.length=0)}},H=(i,r)=>{try{r=r.render(),i.$&=-17,i.$|=2,((i,r)=>{const c=i.h,$=i.C,d=i.O||u(null,null),y=(e=>e&&e.m===a)(r)?r:f(null,null,r);if(l=c.tagName,$.R&&(y.l=y.l||{},$.R.map((([e,t])=>y.l[t]=c[e]))),y.m=null,y.$|=4,i.O=y,y.p=d.p=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],n=0!=(1&$.$),s=!1,R(d,y),ne.$|=1,o){let e,t,l,n,s,o;P(y.p);let i=0;for(;i<N.length;i++)e=N[i],t=e.g,t["s-ol"]||(l=le.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<N.length;i++)if(e=N[i],t=e.g,e.k){for(n=e.k.parentNode,s=e.k.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(o=l["s-nr"],o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&n!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&T(y.p),ne.$&=-2,N.length=0})(i,r)}catch(e){X(e,i.h)}return null},U=e=>{const t=e.h,l=e.v;64&e.$||(e.$|=64,z(t),e.T(t),l||q()),e.j&&(e.j(),e.j=void 0),512&e.$&&ae((()=>L(e,!1))),e.$&=-517},q=()=>{z(le.documentElement),ae((()=>y(te,"appload",{detail:{namespace:"mwui-stencil"}})))},V=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){X(e)}},_=(e,t)=>e&&e.then?e.then(t):t(),z=e=>e.classList.add("hydrated"),B=(e,t,l)=>{if(t.N){const n=Object.entries(t.N),s=e.prototype;if(n.map((([e,[n]])=>{(31&n||2&l&&32&n)&&Object.defineProperty(s,e,{get(){return((e,t)=>I(this).P.get(t))(0,e)},set(l){((e,t,l,n)=>{const s=I(e),o=s.P.get(t),i=s.$,r=s.M;l=((e,t)=>null==e||c(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.N[t][0]),8&i&&void 0!==o||l===o||Number.isNaN(o)&&Number.isNaN(l)||(s.P.set(t,l),r&&2==(18&i)&&L(s,!1))})(this,e,l,t)},configurable:!0,enumerable:!0})})),1&l){const l=new Map;s.attributeChangedCallback=function(e,t,n){ne.jmp((()=>{const t=l.get(e);if(this.hasOwnProperty(t))n=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return;this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const s=n[1]||e;return l.set(s,e),512&n[0]&&t.R.push([e,s]),s}))}}return e},D=(e,t={})=>{const l=[],n=t.exclude||[],s=te.customElements,o=le.head,i=o.querySelector("meta[charset]"),r=le.createElement("style"),c=[];let f,u=!0;Object.assign(ne,t),ne.W=new URL(t.resourcesUrl||"./",le.baseURI).href,e.map((e=>{e[1].map((t=>{const o={$:t[0],S:t[1],N:t[2],L:t[3]};o.N=t[2],o.R=[];const i=o.S,r=class extends HTMLElement{constructor(e){super(e),K(e=this,o),1&o.$&&e.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),u?c.push(this):ne.jmp((()=>(e=>{if(0==(1&ne.$)){const t=I(e),l=t.C,n=()=>{};if(!(1&t.$)){t.$|=1,12&l.$&&(e=>{const t=e["s-cr"]=le.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let l=e;for(;l=l.parentNode||l.host;)if(l["s-p"]){E(t,t.v=l);break}}l.N&&Object.entries(l.N).map((([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}})),(async(e,t,l,n,s)=>{if(0==(32&t.$)){{if(t.$|=32,(s=Z(l)).then){const e=()=>{};s=await s,e()}s.isProxied||(B(s,l,2),s.isProxied=!0);const e=()=>{};t.$|=8;try{new s(t)}catch(e){X(e)}t.$&=-9,e()}if(s.style){let e=s.style;const t=p(l);if(!ee.has(t)){const n=()=>{};((e,t,l)=>{let n=ee.get(e);oe&&l?(n=n||new CSSStyleSheet,"string"==typeof n?n=t:n.replaceSync(t)):n=t,ee.set(e,n)})(t,e,!!(1&l.$)),n()}}}const o=t.v,i=()=>L(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,l)}n()}})(this)))}disconnectedCallback(){ne.jmp((()=>{}))}componentOnReady(){return I(this).A}};o.F=e[0],n.includes(i)||s.get(i)||(l.push(i),s.define(i,B(r,o,1)))}))})),r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),u=!1,c.length?c.map((e=>e.connectedCallback())):ne.jmp((()=>f=setTimeout(q,30)))},G=new WeakMap,I=e=>G.get(e),J=(e,t)=>G.set(t.M=e,t),K=(e,t)=>{const l={$:0,h:e,C:t,P:new Map};return l.A=new Promise((e=>l.T=e)),e["s-p"]=[],e["s-rc"]=[],G.set(e,l)},Q=(e,t)=>t in e,X=(e,t)=>(0,console.error)(e,t),Y=new Map,Z=e=>{const t=e.S.replace(/-/g,"_"),l=e.F,n=Y.get(l);return n?n[t]:import(`./${l}.entry.js`).then((e=>(Y.set(l,e),e[t])),X)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},ee=new Map,te="undefined"!=typeof window?window:{},le=te.document||{head:{}},ne={$:0,W:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},se=e=>Promise.resolve(e),oe=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),ie=[],re=[],ce=(e,t)=>l=>{e.push(l),i||(i=!0,t&&4&ne.$?ae(ue):ne.raf(ue))},fe=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){X(e)}e.length=0},ue=()=>{fe(ie),fe(re),(i=ie.length>0)&&ne.raf(ue)},ae=e=>se().then(e),$e=ce(re,!0);export{a as H,D as b,d as c,$ as g,f as h,se as p,J as r}