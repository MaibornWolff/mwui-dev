/*! For license information please see 4391.066bf6de.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_maibornwolff_mwui_stencil=self.webpackChunk_maibornwolff_mwui_stencil||[]).push([[4391],{"./dist/esm/mw-modal.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{mw_modal:()=>MwModal});var _index_f48f7244_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f48f7244.js");var ModalSizeEnum;!function(ModalSizeEnum){ModalSizeEnum.DEFAULT="default",ModalSizeEnum.SMALL="small"}(ModalSizeEnum||(ModalSizeEnum={}));const MwModal=class{constructor(hostRef){(0,_index_f48f7244_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.delegate=(()=>{let BaseComponent,Reference;return{attachViewToDom:async parentElement=>{var _a;if(BaseComponent=parentElement,!BaseComponent.firstElementChild.classList.contains("mw-teleport-container")){const el=null===(_a=BaseComponent.ownerDocument)||void 0===_a?void 0:_a.createElement("div");el.classList.add("mw-teleport-container"),el.append(...Array.from(BaseComponent.children)),BaseComponent.appendChild(el)}const app=document.body;return Reference=document.createComment("mwui-anchor-comment"),BaseComponent.parentNode.insertBefore(Reference,BaseComponent),app.appendChild(BaseComponent),BaseComponent},removeViewFromDom:()=>{var _a;return BaseComponent&&Reference&&(null===(_a=Reference.parentNode)||void 0===_a||_a.insertBefore(BaseComponent,Reference),Reference.remove()),Promise.resolve()}}})(),this.animationDuration=300,this.configureTriggerInteraction=()=>{const{trigger,el,destroyTriggerInteraction}=this;if(destroyTriggerInteraction&&destroyTriggerInteraction(),!trigger)return;this.destroyTriggerInteraction=((triggerElement,modalEl)=>{const openModal=()=>{modalEl.present()};return triggerElement.addEventListener("click",openModal),()=>{triggerElement.removeEventListener("click",openModal)}})(this.getTriggerElement(trigger),el)},this.configureDismissTriggerInteraction=()=>{const{dismissTrigger,el,destroyDismissTriggerInteraction}=this;if(destroyDismissTriggerInteraction&&destroyDismissTriggerInteraction(),!dismissTrigger)return;this.destroyDismissTriggerInteraction=((triggerElement,modalEl)=>{const dismissModal=()=>{modalEl.dismiss()};return triggerElement.addEventListener("click",dismissModal),()=>{triggerElement.removeEventListener("click",dismissModal)}})(this.getTriggerElement(dismissTrigger),el)},this.handleDismiss=()=>{this.dismiss()},this.dismissAnimationRunning=!1,this.overlayHidden=!0,this.modalIsOpen=!1,this.backdropDismiss=!0,this.size=ModalSizeEnum.DEFAULT,this.trigger=void 0,this.dismissTrigger=void 0,this.isOpen=!1}onTriggerChange(){this.configureTriggerInteraction()}onDismissTriggerChange(){this.configureDismissTriggerInteraction()}onIsOpenChange(newValue,oldValue){!0===newValue&&!1===oldValue?this.present():!1===newValue&&!0===oldValue&&this.dismiss()}componentDidLoad(){!0===this.isOpen&&this.present()}connectedCallback(){this.configureTriggerInteraction(),this.configureDismissTriggerInteraction()}disconnectedCallback(){const{destroyTriggerInteraction,destroyDismissTriggerInteraction}=this;destroyTriggerInteraction&&destroyTriggerInteraction(),destroyDismissTriggerInteraction&&destroyDismissTriggerInteraction()}getTriggerElement(triggerId){return triggerId?document.getElementById(triggerId):null}runPresentAnimation(){return this.overlayHidden=!1,new Promise((resolve=>setTimeout((()=>{resolve()}),this.animationDuration)))}runDismissAnimation(){return this.dismissAnimationRunning=!0,new Promise((resolve=>setTimeout((()=>{this.overlayHidden=!0,this.dismissAnimationRunning=!1,resolve()}),this.animationDuration)))}async present(){const{delegate,el}=this;this.modalIsOpen||(this.modalContentElement=await(async(delegate,container)=>{if(delegate)return delegate.attachViewToDom(container)})(delegate,el),await this.runPresentAnimation(),this.modalIsOpen=!0)}async dismiss(){const{delegate}=this;this.modalIsOpen&&(await this.runDismissAnimation(),await((delegate,element)=>{if(element){if(delegate){const container=element.parentElement;return delegate.removeViewFromDom(container,element)}element.remove()}return Promise.resolve()})(delegate,this.modalContentElement),this.modalIsOpen=!1)}render(){return(0,_index_f48f7244_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_f48f7244_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{"overlay-hidden":this.overlayHidden},onBackdropClick:this.handleDismiss,onIconClick:this.handleDismiss},(0,_index_f48f7244_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"mw-modal":!0,"dismiss-animation":this.dismissAnimationRunning}},(0,_index_f48f7244_js__WEBPACK_IMPORTED_MODULE_0__.h)("mw-backdrop",{class:"mw-modal__backdrop",part:"backdrop",backdropDismiss:this.backdropDismiss}),(0,_index_f48f7244_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`mw-modal__wrapper mw-modal__wrapper--${this.size}`,part:"content"},(0,_index_f48f7244_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))))}get el(){return(0,_index_f48f7244_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{trigger:["onTriggerChange","onDismissTriggerChange"],isOpen:["onIsOpenChange"]}}};MwModal.style=":host{display:block}:host(.overlay-hidden){display:none}.mw-modal{display:flex;justify-content:center;align-items:start;position:fixed;left:0;top:0;bottom:0;right:0;width:100%;height:100%;box-sizing:border-box;contain:strict;z-index:999999}.mw-modal.dismiss-animation .mw-modal__backdrop{animation:fadeOut 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal.dismiss-animation .mw-modal__wrapper{animation:scaleDown 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__backdrop{animation:fadeIn 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__wrapper{-webkit-box-shadow:var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);-moz-box-shadow:var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);box-shadow:var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);z-index:1;margin-top:var(--mw-component-modal-margin-t);margin-left:var(--mw-component-modal-margin-x);margin-right:var(--mw-component-modal-margin-x);background:var(--mw-component-modal-bg-default);border-radius:var(--mw-component-modal-border-radius);padding:var(--mw-component-modal-padding-components-x-default) var(--mw-component-modal-padding-components-x-default);animation:scaleUp 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__wrapper--default{max-width:var(--mw-component-size-modal-default-w)}.mw-modal__wrapper--small{max-width:var(--mw-component-size-modal-small-w)}@keyframes fadeIn{0%{opacity:0}100%{opacity:0.4}}@keyframes fadeOut{0%{opacity:0.4}100%{opacity:0}}@keyframes scaleUp{0%{transform:scale(0.8) translateY(100px);opacity:0}100%{transform:scale(1) translateY(0px);opacity:1}}@keyframes scaleDown{0%{transform:scale(1) translateY(0px);opacity:1}100%{transform:scale(0.8) translateY(100px);opacity:0}}"}}]);