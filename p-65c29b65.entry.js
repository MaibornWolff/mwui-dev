/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as t,c as s,h as i,H as e,g as r}from"./p-d0dc8990.js";const o=":host{display:block;position:relative;width:100%;height:100%}:host img,:host span,:host .blur{display:block;position:absolute;top:0;left:0;width:100%;height:100%}:host #preload-img{z-index:2}:host .blur{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:3}";const n=class{constructor(i){t(this,i);this.imgDidLoad=s(this,"imgDidLoad",6);this.imgLoadError=s(this,"imgLoadError",6);this.onIntersection=async t=>{for(const s of t){if(s.isIntersecting){if(this.observer){this.disconnectObserver()}this.setSrc(s.target)}}};this.isLoaded=false;this.srcSetState=undefined;this.preloadSrc=undefined;this.src=undefined;this.alt=undefined;this.lazyLoad=true;this.fallback=undefined;this.srcset=undefined}onSrcSet(t){this.setSrcSet(t)}connectedCallback(){if(this.srcset){this.setSrcSet(this.srcset)}}componentDidLoad(){const{imgElement:t,lazyLoad:s}=this;if(t&&s){this.connectObserver(t)}else{this.setSrc(t)}}setSrcSet(t){this.srcSetState=Array.isArray(t)?t.map((t=>`${t.src} ${t.size}`)).join(","):t}setSrc(t){if(t.getAttribute("data-src")){t.setAttribute("src",t.getAttribute("data-src"));t.removeAttribute("data-src")}}connectObserver(t){this.observer=new IntersectionObserver(this.onIntersection);this.observer.observe(t)}disconnectObserver(){this.observer.disconnect()}onLoad(){this.isLoaded=true;this.imgDidLoad.emit()}onError(){this.imgLoadError.emit();if(this.fallback){this.imgElement.setAttribute("src",this.fallback)}}render(){const{src:t,alt:s,preloadSrc:r,isLoaded:o,srcSetState:n,onLoad:h,onError:a}=this;return i(e,{class:"mw-img"},i("img",{decoding:"async","data-src":t,alt:s,part:"image",onLoad:h.bind(this),onError:a.bind(this),ref:t=>this.imgElement=t,srcset:n}),r&&!o&&i("span",null,i("img",{decoding:"sync",src:r,alt:s,id:"preload-img"}),i("div",{class:"blur"})))}get el(){return r(this)}static get watchers(){return{srcset:["onSrcSet"]}}};n.style=o;export{n as mw_img};
//# sourceMappingURL=p-65c29b65.entry.js.map