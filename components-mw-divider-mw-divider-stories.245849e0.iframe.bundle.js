/*! For license information please see components-mw-divider-mw-divider-stories.245849e0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_maibornwolff_mwui_stencil=self.webpackChunk_maibornwolff_mwui_stencil||[]).push([[2257],{"../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,Ed:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,QE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/mw-divider/mw-divider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Full:()=>Full,Inset:()=>Inset,__namedExportsOrder:()=>__namedExportsOrder,default:()=>mw_divider_stories});__webpack_require__("../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Dx,{children:"Divider"}),"\n",(0,jsx_runtime.jsx)(dist.QE,{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Used to separate sections on a page. Use ",(0,jsx_runtime.jsx)("code",{children:"inset=true"})," for larger margins on the sides."]})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"full",children:"Full"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Full,withToolbar:!0,sourceState:"shown",additionalActions:[{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/MaibornWolff/mwui/tree/main/mwui-stencil/src/components/mw-divider","_blank")}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"inset",children:"Inset"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Inset})]})}const mw_divider_stories={title:"Components/Divider",component:"mw-divider",tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}},Template=args=>`\n<mw-divider\n  inset="${args.inset}"\n></mw-divider>`,Full=Template.bind({});Full.args={inset:!1};const Inset=Template.bind({});Inset.args={inset:!0},Full.parameters={...Full.parameters,docs:{...Full.parameters?.docs,source:{originalSource:'args => `\n<mw-divider\n  inset="${args.inset}"\n></mw-divider>`',...Full.parameters?.docs?.source}}},Inset.parameters={...Inset.parameters,docs:{...Inset.parameters?.docs,source:{originalSource:'args => `\n<mw-divider\n  inset="${args.inset}"\n></mw-divider>`',...Inset.parameters?.docs?.source}}};const __namedExportsOrder=["Full","Inset"]},"../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);