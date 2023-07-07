/*! For license information please see components-mw-textfield-mw-textfield-stories.7c91c338.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_maibornwolff_mwui_stencil=self.webpackChunk_maibornwolff_mwui_stencil||[]).push([[1241],{"../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,Ed:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,QE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/mw-textfield/mw-textfield.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ErrorState:()=>ErrorState,HelperText:()=>HelperText,Inline:()=>Inline,Label:()=>Label,Placeholder:()=>Placeholder,Required:()=>Required,WithIconBoth:()=>WithIconBoth,WithIconEnd:()=>WithIconEnd,WithIconStart:()=>WithIconStart,__namedExportsOrder:()=>__namedExportsOrder,default:()=>mw_textfield_stories});var mw_textfield_stories_namespaceObject={};__webpack_require__.r(mw_textfield_stories_namespaceObject),__webpack_require__.d(mw_textfield_stories_namespaceObject,{Default:()=>Default,ErrorState:()=>ErrorState,HelperText:()=>HelperText,Inline:()=>Inline,Label:()=>Label,Placeholder:()=>Placeholder,Required:()=>Required,WithIconBoth:()=>WithIconBoth,WithIconEnd:()=>WithIconEnd,WithIconStart:()=>WithIconStart,__namedExportsOrder:()=>__namedExportsOrder,default:()=>mw_textfield_stories});__webpack_require__("../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../node_modules/@storybook/addon-docs/dist/index.mjs");__webpack_require__("./src/global/global.css");function _createMdxContent(props){const _components=Object.assign({p:"p",h3:"h3",code:"code",blockquote:"blockquote",em:"em"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Dx,{children:"Textfield"}),"\n",(0,jsx_runtime.jsx)(dist.QE,{children:"The Textfield web component provides input elements wrapped with optional labelling, icons, helper texts and errors states."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If not applicable, also the native HTML input elements might be used. Therefore, we also provide (experimental) styling of native input elements."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Placeholder,withToolbar:!0,sourceState:"shown",additionalActions:[{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/MaibornWolff/mwui/tree/main/mwui-stencil/src/components/mw-textfield","_blank")}}]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"native-htmlinputelement",children:"Native HTMLInputElement"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When importing the global ",(0,jsx_runtime.jsx)(_components.code,{children:"@maibornwolff/mwui-stencil/dist/mwui-stencil/mwui-stencil.css"})," also the native HTML input element can be used in a MWUI styled version."]}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.em,{children:"Beta Feature: not all types of inputs are equally supported yet. Especially checkboxes, radio buttons and sliders are not yet fully compatible with the web component variant."})}),"\n"]}),"\n",(0,jsx_runtime.jsxs)("form",{style:{display:"flex",flexWrap:"wrap",gap:10},children:[(0,jsx_runtime.jsx)("input",{style:{width:"200px"},type:"text",placeholder:"Text input element"}),(0,jsx_runtime.jsx)("input",{style:{width:"50px"},placeholder:"23",type:"number"}),(0,jsx_runtime.jsx)("input",{style:{width:"400px"},type:"file"}),(0,jsx_runtime.jsx)("input",{style:{width:"80%"},type:"range"})]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:mw_textfield_stories_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Default}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Label}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"placeholder",children:"Placeholder"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Placeholder}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"helper-text",children:"Helper Text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:HelperText}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error-state",children:"Error State"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:ErrorState}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Required}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inline",children:"Inline"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Inline}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icon-start",children:"With Icon Start"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:WithIconStart}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icon-end",children:"With Icon End"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:WithIconEnd}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-icon-both",children:"With Icon Both"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:WithIconBoth})]})}const mw_textfield_stories={title:"Components/Textfield",component:"mw-textfield",tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{value:{description:"Input value",control:{type:"text",default:null}}}},DefaultTemplate=args=>`\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n</mw-textfield>`,Default=DefaultTemplate.bind({});Default.args={testId:"textfield",value:"",disabled:!1,type:"text",name:"test-input",label:"",placeholder:"","helper-text":"","has-error":!1,required:!1,inline:!1};const Label=DefaultTemplate.bind({});Label.args={testId:"textfield",value:"",disabled:!1,type:"text",name:"test-input",label:"Input Label",placeholder:"","helper-text":"","has-error":!1,required:!1,inline:!1};const Placeholder=DefaultTemplate.bind({});Placeholder.args={testId:"textfield",value:"",disabled:!1,type:"text",name:"test-input",label:"",placeholder:"Type something...","helper-text":"","has-error":!1,required:!1,inline:!1};const HelperText=DefaultTemplate.bind({});HelperText.args={testId:"textfield",value:"",disabled:!1,type:"text",name:"test-input",label:"",placeholder:"Type something...","helper-text":"helper text","has-error":!1,required:!1,inline:!1};const ErrorState=DefaultTemplate.bind({});ErrorState.args={testId:"textfield",value:"wrong input",disabled:!1,type:"text",name:"test-input",label:"",placeholder:"Type something...","helper-text":"error text","has-error":!0,required:!1,inline:!1};const Required=DefaultTemplate.bind({});Required.args={testId:"textfield",value:"",disabled:!1,type:"text",name:"test-input",label:"Name",placeholder:"","helper-text":"","has-error":!1,required:!0,inline:!1};const Inline=DefaultTemplate.bind({});Inline.args={testId:"textfield",value:"Some value",disabled:!1,type:"text",name:"test-input",label:"Name",placeholder:"","helper-text":"helper text","has-error":!1,required:!0,inline:!0};const WithIconStart=(args=>`\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n  <mw-icon icon="search" slot="icon-start"></mw-icon>\n</mw-textfield>`).bind({});WithIconStart.args={testId:"textfield",value:"Some value",disabled:!1,type:"text",name:"test-input",label:"Name",placeholder:"","helper-text":"helper text","has-error":!1,required:!0,inline:!1};const WithIconEnd=(args=>`\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n  <mw-icon icon="search" slot="icon-end"></mw-icon>\n</mw-textfield>`).bind({});WithIconEnd.args={testId:"textfield",value:"Some value",disabled:!1,type:"text",name:"test-input",label:"Name",placeholder:"","helper-text":"helper text","has-error":!1,required:!0,inline:!1};const WithIconBoth=(args=>`\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n  <mw-icon icon="search" slot="icon-start"></mw-icon>\n  <mw-icon icon="close" slot="icon-end"></mw-icon>\n</mw-textfield>`).bind({});WithIconBoth.args={testId:"textfield",value:"Some value",disabled:!1,type:"text",name:"test-input",label:"Name",placeholder:"","helper-text":"helper text","has-error":!1,required:!0,inline:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n</mw-textfield>`',...Default.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n</mw-textfield>`',...Label.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n</mw-textfield>`',...Placeholder.parameters?.docs?.source}}},HelperText.parameters={...HelperText.parameters,docs:{...HelperText.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n</mw-textfield>`',...HelperText.parameters?.docs?.source}}},ErrorState.parameters={...ErrorState.parameters,docs:{...ErrorState.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n</mw-textfield>`',...ErrorState.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n</mw-textfield>`',...Required.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n</mw-textfield>`',...Inline.parameters?.docs?.source}}},WithIconStart.parameters={...WithIconStart.parameters,docs:{...WithIconStart.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n  <mw-icon icon="search" slot="icon-start"></mw-icon>\n</mw-textfield>`',...WithIconStart.parameters?.docs?.source}}},WithIconEnd.parameters={...WithIconEnd.parameters,docs:{...WithIconEnd.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n  <mw-icon icon="search" slot="icon-end"></mw-icon>\n</mw-textfield>`',...WithIconEnd.parameters?.docs?.source}}},WithIconBoth.parameters={...WithIconBoth.parameters,docs:{...WithIconBoth.parameters?.docs,source:{originalSource:'args => `\n<mw-textfield\n  test-id="${args.testId}"\n  disabled="${args.disabled}"\n  type="${args.type}"\n  value="${args.value}"\n  name="${args.name}"\n  label="${args.label}"\n  placeholder="${args.placeholder}"\n  helper-text="${args["helper-text"]}"\n  has-error="${args["has-error"]}"\n  required="${args.required}"\n  inline="${args.inline}"\n>\n  <mw-icon icon="search" slot="icon-start"></mw-icon>\n  <mw-icon icon="close" slot="icon-end"></mw-icon>\n</mw-textfield>`',...WithIconBoth.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Label","Placeholder","HelperText","ErrorState","Required","Inline","WithIconStart","WithIconEnd","WithIconBoth"]},"../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);