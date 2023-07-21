/*! For license information please see components-mw-dropdown-mw-dropdown-stories.6cb99ebd.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_maibornwolff_mwui_stencil=self.webpackChunk_maibornwolff_mwui_stencil||[]).push([[9417],{"../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,Ed:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,QE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/mw-dropdown/mw-dropdown.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Inline:()=>Inline,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>mw_dropdown_stories});__webpack_require__("../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Dx,{children:"Dropdown"}),"\n",(0,jsx_runtime.jsx)(dist.QE,{children:(0,jsx_runtime.jsxs)(_components.p,{children:["The dropdown component lets users pick from one of several choices by clicking on the input and selecting their choice from the menu. The options should be placed into the"," ","\n",(0,jsx_runtime.jsx)("code",{children:"dropdown-menu"})," slot as ",(0,jsx_runtime.jsx)("code",{children:"mw-menu-item"})," components. Icons can be added to the component using the ",(0,jsx_runtime.jsx)("code",{children:"icon-start"})," and ",(0,jsx_runtime.jsx)("code",{children:"icon-end"})," slots."]})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Default,withToolbar:!0,sourceState:"shown",additionalActions:[{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/MaibornWolff/mwui/tree/main/mwui-stencil/src/components/mw-dropdown","_blank")}}]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:"mw-dropdown"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Default}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inline",children:"Inline"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Inline}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-error",children:"With Error"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:WithError})]})}const mw_dropdown_stories={title:"Components/Dropdown",component:"mw-dropdown",tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}},Template=args=>`\n<mw-dropdown\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args.helperText}"\n  has-error="${args.hasError}"\n  inline="${args.inline}"\n  required="${args.required}"\n  disabled="${args.disabled}"\n  >\n  <div slot="dropdown-menu">\n    <mw-menu-item text="List Item 1" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 2" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 3" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 4" subtitle="Subtitle"></mw-menu-item>\n  </div>\n\n</mw-dropdown>`,Default=Template.bind({});Default.args={label:"Dropdown",value:"",name:"dropdown",placeholder:"Select option",helperText:"",hasError:!1,inline:!1,required:!1,disabled:!1};const Inline=(args=>`\n<mw-dropdown\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args.helperText}"\n  has-error="${args.hasError}"\n  inline="${args.inline}"\n  required="${args.required}"\n  disabled="${args.disabled}"\n  >\n  <mw-icon slot="icon-start" icon="language"></mw-icon>\n  <div slot="dropdown-menu">\n    <mw-menu-item text="List Item 1" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 2" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 3" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 4" subtitle="Subtitle"></mw-menu-item>\n  </div>\n\n</mw-dropdown>`).bind({});Inline.args={label:"Dropdown",value:"",name:"dropdown",placeholder:"Select option",helperText:"",hasError:!1,inline:!0,required:!1,disabled:!1};const WithError=Template.bind({});WithError.args={label:"Dropdown",value:"",name:"dropdown",placeholder:"Select option",helperText:"Error",hasError:!0,inline:!1,required:!0,disabled:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n<mw-dropdown\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args.helperText}"\n  has-error="${args.hasError}"\n  inline="${args.inline}"\n  required="${args.required}"\n  disabled="${args.disabled}"\n  >\n  <div slot="dropdown-menu">\n    <mw-menu-item text="List Item 1" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 2" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 3" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 4" subtitle="Subtitle"></mw-menu-item>\n  </div>\n\n</mw-dropdown>`',...Default.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:'args => `\n<mw-dropdown\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args.helperText}"\n  has-error="${args.hasError}"\n  inline="${args.inline}"\n  required="${args.required}"\n  disabled="${args.disabled}"\n  >\n  <mw-icon slot="icon-start" icon="language"></mw-icon>\n  <div slot="dropdown-menu">\n    <mw-menu-item text="List Item 1" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 2" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 3" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 4" subtitle="Subtitle"></mw-menu-item>\n  </div>\n\n</mw-dropdown>`',...Inline.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:'args => `\n<mw-dropdown\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args.helperText}"\n  has-error="${args.hasError}"\n  inline="${args.inline}"\n  required="${args.required}"\n  disabled="${args.disabled}"\n  >\n  <div slot="dropdown-menu">\n    <mw-menu-item text="List Item 1" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 2" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 3" subtitle="Subtitle"></mw-menu-item>\n    <mw-menu-item text="List Item 4" subtitle="Subtitle"></mw-menu-item>\n  </div>\n\n</mw-dropdown>`',...WithError.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Inline","WithError"]},"../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);