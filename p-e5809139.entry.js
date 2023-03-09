/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as t,c as o,h as s,H as r}from"./p-d0dc8990.js";const c=".backdrop{position:absolute;top:0;left:0;width:100vw;height:100vh;background:var(--mw-component-modal-backdrop);opacity:0.4}";const i=class{constructor(s){t(this,s);this.backdropClick=o(this,"backdropClick",7);this.backdropDismiss=true}onMouseDown(t){this.emitClick(t)}emitClick(t){t.preventDefault();t.stopPropagation();if(!this.backdropDismiss){return}this.backdropClick.emit()}render(){return s(r,null,s("div",{class:"backdrop"}))}};i.style=c;export{i as mw_backdrop};
//# sourceMappingURL=p-e5809139.entry.js.map