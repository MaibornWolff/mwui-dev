/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as t,h as a,H as o,g as e}from"./p-0e8b835e.js";const s=async(t,a)=>{if(t){return t.attachViewToDom(a)}};const i=(t,a)=>{if(a){if(t){const o=a.parentElement;return t.removeViewFromDom(o,a)}a.remove()}return Promise.resolve()};const n=()=>{let t;let a;const o=async o=>{var e;t=o;const s=t.firstElementChild;if(!s.classList.contains("mw-teleport-container")){const a=(e=t.ownerDocument)===null||e===void 0?void 0:e.createElement("div");a.classList.add("mw-teleport-container");a.append(...Array.from(t.children));t.appendChild(a)}const i=document.body;a=document.createComment("mwui-anchor-comment");t.parentNode.insertBefore(a,t);i.appendChild(t);return t};const e=()=>{var o;if(t&&a){(o=a.parentNode)===null||o===void 0?void 0:o.insertBefore(t,a);a.remove()}return Promise.resolve()};return{attachViewToDom:o,removeViewFromDom:e}};var r;(function(t){t["DEFAULT"]="default";t["SMALL"]="small"})(r||(r={}));const m=":host{display:block}:host(.overlay-hidden){display:none}.mw-modal{display:flex;justify-content:center;align-items:start;position:fixed;left:0;top:0;bottom:0;right:0;width:100%;height:100%;box-sizing:border-box;contain:strict;z-index:999999}.mw-modal.dismiss-animation .mw-modal__backdrop{animation:fadeOut 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal.dismiss-animation .mw-modal__wrapper{animation:scaleDown 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__backdrop{animation:fadeIn 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__wrapper{-webkit-box-shadow:var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);-moz-box-shadow:var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);box-shadow:var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);z-index:1;margin-top:var(--mw-component-modal-margin-t);margin-left:var(--mw-component-modal-margin-x);margin-right:var(--mw-component-modal-margin-x);background:var(--mw-component-modal-bg-default);border-radius:var(--mw-component-modal-border-radius);padding:var(--mw-component-modal-padding-components-x-default) var(--mw-component-modal-padding-components-x-default);animation:scaleUp 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__wrapper--default{max-width:var(--mw-component-size-modal-default-w)}.mw-modal__wrapper--small{max-width:var(--mw-component-size-modal-small-w)}@keyframes fadeIn{0%{opacity:0}100%{opacity:0.4}}@keyframes fadeOut{0%{opacity:0.4}100%{opacity:0}}@keyframes scaleUp{0%{transform:scale(0.8) translateY(100px);opacity:0}100%{transform:scale(1) translateY(0px);opacity:1}}@keyframes scaleDown{0%{transform:scale(1) translateY(0px);opacity:1}100%{transform:scale(0.8) translateY(100px);opacity:0}}";const d=class{constructor(a){t(this,a);this.delegate=n();this.animationDuration=300;this.configureTriggerInteraction=()=>{const{trigger:t,el:a,destroyTriggerInteraction:o}=this;if(o){o()}if(!t){return}const e=(t,a)=>{const o=()=>{a.present()};t.addEventListener("click",o);return()=>{t.removeEventListener("click",o)}};this.destroyTriggerInteraction=e(this.getTriggerElement(t),a)};this.configureDismissTriggerInteraction=()=>{const{dismissTrigger:t,el:a,destroyDismissTriggerInteraction:o}=this;if(o){o()}if(!t){return}const e=(t,a)=>{const o=()=>{a.dismiss()};t.addEventListener("click",o);return()=>{t.removeEventListener("click",o)}};this.destroyDismissTriggerInteraction=e(this.getTriggerElement(t),a)};this.handleDismiss=()=>{this.dismiss()};this.dismissAnimationRunning=false;this.overlayHidden=true;this.modalIsOpen=false;this.backdropDismiss=true;this.size=r.DEFAULT;this.trigger=undefined;this.dismissTrigger=undefined;this.isOpen=false}onTriggerChange(){this.configureTriggerInteraction()}onDismissTriggerChange(){this.configureDismissTriggerInteraction()}onIsOpenChange(t,a){if(t===true&&a===false){this.present()}else if(t===false&&a===true){this.dismiss()}}componentDidLoad(){if(this.isOpen===true){this.present()}}connectedCallback(){this.configureTriggerInteraction();this.configureDismissTriggerInteraction()}disconnectedCallback(){const{destroyTriggerInteraction:t,destroyDismissTriggerInteraction:a}=this;if(t){t()}if(a){a()}}getTriggerElement(t){return t?document.getElementById(t):null}runPresentAnimation(){this.overlayHidden=false;return new Promise((t=>setTimeout((()=>{t()}),this.animationDuration)))}runDismissAnimation(){this.dismissAnimationRunning=true;return new Promise((t=>setTimeout((()=>{this.overlayHidden=true;this.dismissAnimationRunning=false;t()}),this.animationDuration)))}async present(){const{delegate:t,el:a}=this;if(this.modalIsOpen){return}this.modalContentElement=await s(t,a);await this.runPresentAnimation();this.modalIsOpen=true}async dismiss(){const{delegate:t}=this;if(!this.modalIsOpen){return}await this.runDismissAnimation();await i(t,this.modalContentElement);this.modalIsOpen=false}render(){return a(o,{class:{"overlay-hidden":this.overlayHidden},onBackdropClick:this.handleDismiss,onIconClick:this.handleDismiss},a("div",{class:{"mw-modal":true,"dismiss-animation":this.dismissAnimationRunning}},a("mw-backdrop",{class:"mw-modal__backdrop",part:"backdrop",backdropDismiss:this.backdropDismiss}),a("div",{class:`mw-modal__wrapper mw-modal__wrapper--${this.size}`,part:"content"},a("slot",null))))}get el(){return e(this)}static get watchers(){return{trigger:["onTriggerChange","onDismissTriggerChange"],isOpen:["onIsOpenChange"]}}};d.style=m;export{d as mw_modal};
//# sourceMappingURL=p-112b7f18.entry.js.map