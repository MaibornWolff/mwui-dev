/*! For license information please see components-mw-checkbox-mw-checkbox-stories.9daf5b4e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_maibornwolff_mwui_stencil=self.webpackChunk_maibornwolff_mwui_stencil||[]).push([[806],{"../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,Ed:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,QE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/mw-checkbox/mw-checkbox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisabledChecked:()=>DisabledChecked,DisabledUnchecked:()=>DisabledUnchecked,EnabledChecked:()=>EnabledChecked,EnabledUnchecked:()=>EnabledUnchecked,__namedExportsOrder:()=>__namedExportsOrder,default:()=>mw_checkbox_stories});__webpack_require__("../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Dx,{children:"Checkbox"}),"\n",(0,jsx_runtime.jsx)(dist.QE,{children:(0,jsx_runtime.jsx)(_components.p,{children:"Checkboxes contain a value which can be added to e.g. a form by clicking on it. Due to their simple nature they're best suited for simple true/false questions. The purpose of the\ncheckbox should be expressed through a label."})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:EnabledChecked,withToolbar:!0,sourceState:"shown",additionalActions:[{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/MaibornWolff/mwui/tree/main/mwui-stencil/src/components/mw-checkbox","_blank")}}]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:"mw-checkbox"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"enabledunchecked",children:"Enabled/Unchecked"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:EnabledUnchecked}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"enabledchecked",children:"Enabled/Checked"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:EnabledChecked}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabledunchecked",children:"Disabled/Unchecked"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:DisabledUnchecked}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabledchecked",children:"Disabled/Checked"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:DisabledChecked})]})}const mw_checkbox_stories={title:"Components/Checkbox",component:"mw-checkbox",tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}},Template=args=>`\n<mw-checkbox\n  test-id="${args.testId}"\n  value="${args.value}"\n  name="${args.name}"\n  checked="${args.checked}"\n  disabled="${args.disabled}"\n  label="${args.label}">\n</mw-checkbox>`,EnabledUnchecked=Template.bind({});EnabledUnchecked.args={testId:"some-checkbox-id",value:"some-value",name:"some-name",checked:!1,disabled:!1,label:"CHECKBOX"};const EnabledChecked=Template.bind({});EnabledChecked.args={testId:"some-checkbox-id",value:"some-value",name:"some-name",checked:!0,disabled:!1,label:"CHECKBOX"};const DisabledUnchecked=Template.bind({});DisabledUnchecked.args={testId:"some-checkbox-id",value:"some-value",name:"some-name",checked:!1,disabled:!0,label:"CHECKBOX"};const DisabledChecked=Template.bind({});DisabledChecked.args={testId:"some-checkbox-id",value:"some-value",name:"some-name",checked:!0,disabled:!0,label:"CHECKBOX"},EnabledUnchecked.parameters={...EnabledUnchecked.parameters,docs:{...EnabledUnchecked.parameters?.docs,source:{originalSource:'args => `\n<mw-checkbox\n  test-id="${args.testId}"\n  value="${args.value}"\n  name="${args.name}"\n  checked="${args.checked}"\n  disabled="${args.disabled}"\n  label="${args.label}">\n</mw-checkbox>`',...EnabledUnchecked.parameters?.docs?.source}}},EnabledChecked.parameters={...EnabledChecked.parameters,docs:{...EnabledChecked.parameters?.docs,source:{originalSource:'args => `\n<mw-checkbox\n  test-id="${args.testId}"\n  value="${args.value}"\n  name="${args.name}"\n  checked="${args.checked}"\n  disabled="${args.disabled}"\n  label="${args.label}">\n</mw-checkbox>`',...EnabledChecked.parameters?.docs?.source}}},DisabledUnchecked.parameters={...DisabledUnchecked.parameters,docs:{...DisabledUnchecked.parameters?.docs,source:{originalSource:'args => `\n<mw-checkbox\n  test-id="${args.testId}"\n  value="${args.value}"\n  name="${args.name}"\n  checked="${args.checked}"\n  disabled="${args.disabled}"\n  label="${args.label}">\n</mw-checkbox>`',...DisabledUnchecked.parameters?.docs?.source}}},DisabledChecked.parameters={...DisabledChecked.parameters,docs:{...DisabledChecked.parameters?.docs,source:{originalSource:'args => `\n<mw-checkbox\n  test-id="${args.testId}"\n  value="${args.value}"\n  name="${args.name}"\n  checked="${args.checked}"\n  disabled="${args.disabled}"\n  label="${args.label}">\n</mw-checkbox>`',...DisabledChecked.parameters?.docs?.source}}};const __namedExportsOrder=["EnabledUnchecked","EnabledChecked","DisabledUnchecked","DisabledChecked"]},"../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);