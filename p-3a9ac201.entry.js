/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as t,c as s,h as r,g as i,H as a}from"./p-d0dc8990.js";const o=":host{display:block}";const e=class{constructor(r){t(this,r);this.radioChange=s(this,"radioChange",4);this.onClick=t=>{t.preventDefault();const s=t.target&&t.target.closest("mw-radio");if(s){const t=this.value;const r=s.value;if(r!==t){this.value=r}}};this.value=undefined}valueChanged(t){this.radioChange.emit({value:t})}get radios(){return Array.from(this.host.querySelectorAll("mw-radio"))}render(){return r(a,{role:"radiogroup",onClick:this.onClick})}get host(){return i(this)}static get watchers(){return{value:["valueChanged"]}}};e.style=o;export{e as mw_radio_group};
//# sourceMappingURL=p-3a9ac201.entry.js.map