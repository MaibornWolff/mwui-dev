/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as i,c as n,h as t,H as o}from"./p-0cc86aa3.js";var e;!function(i){i.START="start",i.CENTER="center",i.END="end"}(e||(e={}));const l=class{constructor(t){i(this,t),this.submit=n(this,"submit",4),this.passwordType="password",this.headline=void 0,this.layout=e.CENTER,this.backgroundImage=void 0,this.logo=void 0,this.signUpHref=void 0,this.forgotPasswordHref=void 0,this.togglePasswordType=this.togglePasswordType.bind(this),this.submitLoginForm=this.submitLoginForm.bind(this)}togglePasswordType(){this.passwordType="text"===this.passwordType?"password":"text"}submitLoginForm(){this.submit.emit()}render(){return t(o,null,t("div",{class:`mw-login mw-login--${this.layout}`},this.backgroundImage&&this.layout!==e.CENTER&&t("div",{class:`mw-login-background mw-login-background--${this.layout}`},t("img",{class:"mw-login-background__image",src:this.backgroundImage})),t("div",{class:`mw-login-container mw-login-container--${this.layout}`},this.logo&&t("div",{class:"mw-login-container__logo"},t("img",{src:this.logo})),this.headline&&t("div",{class:"mw-login-container__headline"},this.headline),t("form",{class:"mw-login-container__form"},t("mw-textfield",{id:"email",type:"email",label:"Email address",required:!0},t("mw-icon",{icon:"mail",slot:"icon-end"})),t("mw-textfield",{id:"password",type:this.passwordType,label:"Password",required:!0,"helper-text":"min. 7 characters, 1 upper case, 1 lower case"},t("mw-icon",{icon:"text"===this.passwordType?"visibility_off":"visibility",slot:"icon-end",onClick:this.togglePasswordType}))),t("div",{class:"mw-login-container__user-actions"},t("mw-checkbox",{label:"Remember me"}),t("span",{class:"spacefiller"}),this.forgotPasswordHref&&t("mw-link",{href:this.forgotPasswordHref},"Forgot your password?")),t("mw-button",{label:"Log In",onClick:this.submitLoginForm,id:"submit"}),this.signUpHref&&t("div",{class:"mw-login-container__sign-up"},"Dont't have an account?"," ",t("mw-link",{href:this.signUpHref,underline:!0},"Sign up")))))}};l.style=':host{display:block;overflow:hidden;width:100%;height:100%}.mw-login{display:grid;position:relative;width:100%;height:100%;box-sizing:border-box;grid-template-areas:"start end";grid-template-columns:50% 50%;align-items:center}.mw-login--center{grid-template-areas:"start center end";grid-template-columns:30% 40% 30%}.mw-login .mw-login-background{height:100%;max-height:100%}.mw-login .mw-login-background--start{grid-area:end}.mw-login .mw-login-background--end{grid-area:start}.mw-login .mw-login-background__image{width:100%;height:100%;object-fit:cover}.mw-login .mw-login-container{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:var(--mw-component-log-in-content-gap-within);background:var(--mw-component-log-in-bg-default);padding:var(--mw-component-log-in-margin-xy);overflow-y:auto;box-sizing:border-box}.mw-login .mw-login-container--start{grid-area:start}.mw-login .mw-login-container--center{grid-area:center}.mw-login .mw-login-container--end{grid-area:end}.mw-login .mw-login-container>*{display:flex;justify-content:center;width:100%}.mw-login .mw-login-container ::part(button){width:100%}.mw-login .mw-login-container #password::part(icon-end){cursor:pointer}.mw-login .mw-login-container__headline{font-family:var(--mw-component-log-in-title-font-family);font-weight:var(--mw-component-log-in-title-font-weight);font-size:var(--mw-component-log-in-title-font-size);line-height:var(--mw-component-log-in-title-line-height)}.mw-login .mw-login-container__form{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--mw-component-log-in-content-gap-within)}.mw-login .mw-login-container__form #email,.mw-login .mw-login-container__form #password{width:100%}.mw-login .mw-login-container__user-actions{display:flex;align-items:center}.mw-login .mw-login-container__user-actions .spacefiller{flex:1 1 auto}.mw-login .mw-login-container__user-actions mw-link{text-align:right}.mw-login .mw-login-container__sign-up{display:flex;align-items:center;justify-content:center;gap:var(--mw-component-log-in-sign-up-gap-within);font-family:Poppins;font-size:16px;line-height:24px;font-weight:400;}';export{l as mw_login}