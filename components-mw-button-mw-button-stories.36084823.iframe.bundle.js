/*! For license information please see components-mw-button-mw-button-stories.36084823.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_maibornwolff_mwui_stencil=self.webpackChunk_maibornwolff_mwui_stencil||[]).push([[4293],{"../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,Ed:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,QE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("../node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/mw-button/mw-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Filled:()=>Filled,FilledDisabled:()=>FilledDisabled,Ghost:()=>Ghost,GhostInverted:()=>GhostInverted,Icon:()=>Icon,Large:()=>Large,Link:()=>Link,Outline:()=>Outline,Small:()=>Small,WithIcon:()=>WithIcon,XLarge:()=>XLarge,__namedExportsOrder:()=>__namedExportsOrder,default:()=>mw_button_stories});__webpack_require__("../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p",code:"code",ul:"ul",li:"li",a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Dx,{children:"Button"}),"\n",(0,jsx_runtime.jsx)(dist.QE,{children:(0,jsx_runtime.jsx)(_components.p,{children:"Buttons execute an action, either in the background or foreground of an experience. Different button categories help guide users through certain actions. Buttons express what\naction will occur when the user clicks or touches it either by text, icon, or both. Additional meaning can be derived from the button variant."})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"mw-button"})," is the primary component. It has 4 main variants:"]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#filled",children:"Filled (default)"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#outline",children:"Outline"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#ghost",children:"Ghost"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#ghost-inverted",children:"Ghost Inverted"})}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The variants can be used in combination with the ",(0,jsx_runtime.jsx)(_components.code,{children:"icon"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"link"})," options."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"filled",children:"Filled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Filled,sourceState:"shown",withToolbar:!0,additionalActions:[{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/MaibornWolff/mwui/tree/main/mwui-stencil/src/components/mw-button","_blank")}}]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"outline",children:"Outline"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Outline}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"ghost",children:"Ghost"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Ghost}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"ghost-inverted",children:"Ghost Inverted"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:GhostInverted}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:FilledDisabled}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Small}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"medium",children:"Medium"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Filled}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"large",children:"Large"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Large}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"xlarge",children:"XLarge"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:XLarge}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon",children:"Icon"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The button component can be used as an ",(0,jsx_runtime.jsx)(_components.code,{children:"IconButton"})," by omitting the label property and setting either a start- or end icon."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Icon}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icon",children:"With Icon"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["All variants can be extended with an icon at the start, end or both sides.\nThe ",(0,jsx_runtime.jsx)(_components.code,{children:"mw-button"})," component uses slots (",(0,jsx_runtime.jsx)(_components.code,{children:"icon-start"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"icon-end"}),") to provide space for the icon."]}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"The order of the slots used does not matter."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'<mw-button test-id="button" label="BUTTON">\n  <mw-icon slot="icon-start" icon="settings" />\n  <mw-icon slot="icon-end" icon="settings" />\n</mw-button>\n'})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:WithIcon}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"link",children:"Link"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If provided a ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," property, the button will render as a ",(0,jsx_runtime.jsx)(_components.code,{children:"<a>"})," tag with the button appearance. The link target can be specified by setting ",(0,jsx_runtime.jsx)(_components.code,{children:"target"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Link})]})}const mw_button_stories={title:"Components/Button",component:"mw-button",tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}},Template=args=>`\n<mw-button\n  test-id="${args.testId}"\n  label="${args.label}"\n  onClick="${args.onClick}"\n  disabled="${args.disabled}"\n  size="${args.size}"\n  variant="${args.variant}">\n</mw-button>`,Filled=Template.bind({});Filled.args={testId:"some-button-id",label:"BUTTON",onClick:()=>{},disabled:!1,variant:"filled",size:"medium"};const Outline=Template.bind({});Outline.args={testId:"button",label:"BUTTON",disabled:!1,variant:"outline",size:"medium"};const Ghost=Template.bind({});Ghost.args={testId:"button",label:"BUTTON",disabled:!1,variant:"ghost",size:"medium"};const GhostInverted=Template.bind({});GhostInverted.args={testId:"button",label:"BUTTON",disabled:!1,variant:"ghost-inverted",size:"medium"};const FilledDisabled=Template.bind({});FilledDisabled.args={testId:"button",label:"BUTTON",disabled:!0,variant:"filled",size:"medium"};const Small=Template.bind({});Small.args={testId:"button",label:"BUTTON",disabled:!1,variant:"filled",size:"small"};const Large=Template.bind({});Large.args={testId:"button",label:"BUTTON",disabled:!1,variant:"filled",size:"large"};const XLarge=Template.bind({});XLarge.args={testId:"button",label:"BUTTON",disabled:!1,variant:"filled",size:"x-large"};const WithIcon=(args=>`\n<mw-button test-id="${args.testId}" label="${args.label}" onClick="${args.onClick}" size="${args.size}" disabled="${args.disabled}" variant="${args.variant}">\n  <mw-icon slot="icon-start" icon="settings"></mw-icon>\n  <mw-icon slot="icon-end" icon="search"></mw-icon>\n</mw-button>`).bind({});WithIcon.args={testId:"button",label:"BUTTON",disabled:!1,variant:"filled",size:"medium"};const Icon=(args=>`\n<mw-button test-id="${args.testId}" onClick="${args.onClick}" size="${args.size}" disabled="${args.disabled}" variant="${args.variant}" href="${args.href}">\n  <mw-icon slot="icon-start" icon="settings"></mw-icon>\n</mw-button>`).bind({});Icon.args={testId:"button",disabled:!1,variant:"filled",size:"medium",href:"#example.com"};const Link=(args=>`\n<mw-button test-id="${args.testId}" label="${args.label}" size="${args.size}" href="${args.href}" target="${args.target}" disabled="${args.disabled}" variant="${args.variant}"></mw-button>`).bind({});Link.args={testId:"button",label:"LINK BUTTON",href:"#",target:"_self",disabled:!1,variant:"filled",size:"medium"},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:'args => `\n<mw-button\n  test-id="${args.testId}"\n  label="${args.label}"\n  onClick="${args.onClick}"\n  disabled="${args.disabled}"\n  size="${args.size}"\n  variant="${args.variant}">\n</mw-button>`',...Filled.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:'args => `\n<mw-button\n  test-id="${args.testId}"\n  label="${args.label}"\n  onClick="${args.onClick}"\n  disabled="${args.disabled}"\n  size="${args.size}"\n  variant="${args.variant}">\n</mw-button>`',...Outline.parameters?.docs?.source}}},Ghost.parameters={...Ghost.parameters,docs:{...Ghost.parameters?.docs,source:{originalSource:'args => `\n<mw-button\n  test-id="${args.testId}"\n  label="${args.label}"\n  onClick="${args.onClick}"\n  disabled="${args.disabled}"\n  size="${args.size}"\n  variant="${args.variant}">\n</mw-button>`',...Ghost.parameters?.docs?.source}}},GhostInverted.parameters={...GhostInverted.parameters,docs:{...GhostInverted.parameters?.docs,source:{originalSource:'args => `\n<mw-button\n  test-id="${args.testId}"\n  label="${args.label}"\n  onClick="${args.onClick}"\n  disabled="${args.disabled}"\n  size="${args.size}"\n  variant="${args.variant}">\n</mw-button>`',...GhostInverted.parameters?.docs?.source}}},FilledDisabled.parameters={...FilledDisabled.parameters,docs:{...FilledDisabled.parameters?.docs,source:{originalSource:'args => `\n<mw-button\n  test-id="${args.testId}"\n  label="${args.label}"\n  onClick="${args.onClick}"\n  disabled="${args.disabled}"\n  size="${args.size}"\n  variant="${args.variant}">\n</mw-button>`',...FilledDisabled.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'args => `\n<mw-button\n  test-id="${args.testId}"\n  label="${args.label}"\n  onClick="${args.onClick}"\n  disabled="${args.disabled}"\n  size="${args.size}"\n  variant="${args.variant}">\n</mw-button>`',...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'args => `\n<mw-button\n  test-id="${args.testId}"\n  label="${args.label}"\n  onClick="${args.onClick}"\n  disabled="${args.disabled}"\n  size="${args.size}"\n  variant="${args.variant}">\n</mw-button>`',...Large.parameters?.docs?.source}}},XLarge.parameters={...XLarge.parameters,docs:{...XLarge.parameters?.docs,source:{originalSource:'args => `\n<mw-button\n  test-id="${args.testId}"\n  label="${args.label}"\n  onClick="${args.onClick}"\n  disabled="${args.disabled}"\n  size="${args.size}"\n  variant="${args.variant}">\n</mw-button>`',...XLarge.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'args => `\n<mw-button test-id="${args.testId}" label="${args.label}" onClick="${args.onClick}" size="${args.size}" disabled="${args.disabled}" variant="${args.variant}">\n  <mw-icon slot="icon-start" icon="settings"></mw-icon>\n  <mw-icon slot="icon-end" icon="search"></mw-icon>\n</mw-button>`',...WithIcon.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'args => `\n<mw-button test-id="${args.testId}" onClick="${args.onClick}" size="${args.size}" disabled="${args.disabled}" variant="${args.variant}" href="${args.href}">\n  <mw-icon slot="icon-start" icon="settings"></mw-icon>\n</mw-button>`',...Icon.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:'args => `\n<mw-button test-id="${args.testId}" label="${args.label}" size="${args.size}" href="${args.href}" target="${args.target}" disabled="${args.disabled}" variant="${args.variant}"></mw-button>`',...Link.parameters?.docs?.source}}};const __namedExportsOrder=["Filled","Outline","Ghost","GhostInverted","FilledDisabled","Small","Large","XLarge","WithIcon","Icon","Link"]},"../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);