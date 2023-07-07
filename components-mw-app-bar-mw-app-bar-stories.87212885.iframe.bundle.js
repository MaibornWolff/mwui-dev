/*! For license information please see components-mw-app-bar-mw-app-bar-stories.87212885.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_maibornwolff_mwui_stencil=self.webpackChunk_maibornwolff_mwui_stencil||[]).push([[4010],{"../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,Ed:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,QE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/mw-app-bar/mw-app-bar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Center:()=>Center,Default:()=>Default,Search:()=>Search,__namedExportsOrder:()=>__namedExportsOrder,default:()=>mw_app_bar_stories});__webpack_require__("../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p",code:"code",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Dx,{children:"App Bar"}),"\n",(0,jsx_runtime.jsx)(dist.QE,{children:(0,jsx_runtime.jsxs)(_components.p,{children:["The App Bar is the main control hub of a web page and is usually placed at the top. Components can be placed into the App Bar by using the positional slots (",(0,jsx_runtime.jsx)(_components.code,{children:"start"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"center"}),",\n",(0,jsx_runtime.jsx)(_components.code,{children:"end"}),")."]})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Default,withToolbar:!0,sourceState:"shown",additionalActions:[{title:"Open in GitHub",onClick:()=>{window.open("https://github.com/MaibornWolff/mwui/tree/main/mwui-stencil/src/components/mw-app-bar","_blank")}}]}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:"mw-app-bar"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Default}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-center",children:"With Center"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Center}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-search",children:"With Search"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:Search})]})}const mw_app_bar_docs=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var mw_logo=__webpack_require__("./.storybook/public/mw_logo.svg");const mw_app_bar_stories={title:"Components/AppBar",component:"mw-app-bar",tags:["autodocs"],parameters:{docs:{page:mw_app_bar_docs}}},Default=(args=>`\n<mw-app-bar position="${args.position}">\n  <div slot="start">\n    <mw-icon slot="start" icon="menu" size="medium"></mw-icon>\n    <img src="${mw_logo}"/>\n    <mw-app-bar-title>Company name</mw-app-bar-title>\n  </div>\n  <div slot="end">\n    <mw-avatar slot="end" src="https://i.pravatar.cc/150?img=23" alt="John Doe" size="medium"></mw-avatar>\n  </div>\n</mw-app-bar>`).bind({});Default.args={};const Center=(args=>`\n<mw-app-bar position="${args.position}">\n  <div slot="start">\n    <mw-icon slot="start" icon="menu" size="medium"></mw-icon>\n  </div>\n  <div slot="center">\n   <img src="${mw_logo}"/>\n</div>\n  <div slot="end">\n    <mw-avatar slot="end" src="https://i.pravatar.cc/150?img=23" alt="John Doe" size="medium"></mw-avatar>\n  </div>\n</mw-app-bar>`).bind({});Center.args={};const Search=(args=>`\n<mw-app-bar position="${args.position}">\n  <div slot="start">\n    <img src="${mw_logo}"/>\n    <mw-app-bar-title>Product name</mw-app-bar-title>\n  </div>\n  <div slot="end" style="width: 250px">\n    <mw-textfield type="text" placeholder="Search things..." has-error="false">\n      <mw-icon slot="icon-start" icon="search"></mw-icon>\n    </mw-textfield>\n    <mw-avatar slot="end" src="https://i.pravatar.cc/150?img=23" alt="John Doe" size="medium"></mw-avatar>\n   </div>\n\n</mw-app-bar>`).bind({});Search.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n<mw-app-bar position="${args.position}">\n  <div slot="start">\n    <mw-icon slot="start" icon="menu" size="medium"></mw-icon>\n    <img src="${logo}"/>\n    <mw-app-bar-title>Company name</mw-app-bar-title>\n  </div>\n  <div slot="end">\n    <mw-avatar slot="end" src="https://i.pravatar.cc/150?img=23" alt="John Doe" size="medium"></mw-avatar>\n  </div>\n</mw-app-bar>`',...Default.parameters?.docs?.source}}},Center.parameters={...Center.parameters,docs:{...Center.parameters?.docs,source:{originalSource:'args => `\n<mw-app-bar position="${args.position}">\n  <div slot="start">\n    <mw-icon slot="start" icon="menu" size="medium"></mw-icon>\n  </div>\n  <div slot="center">\n   <img src="${logo}"/>\n</div>\n  <div slot="end">\n    <mw-avatar slot="end" src="https://i.pravatar.cc/150?img=23" alt="John Doe" size="medium"></mw-avatar>\n  </div>\n</mw-app-bar>`',...Center.parameters?.docs?.source}}},Search.parameters={...Search.parameters,docs:{...Search.parameters?.docs,source:{originalSource:'args => `\n<mw-app-bar position="${args.position}">\n  <div slot="start">\n    <img src="${logo}"/>\n    <mw-app-bar-title>Product name</mw-app-bar-title>\n  </div>\n  <div slot="end" style="width: 250px">\n    <mw-textfield type="text" placeholder="Search things..." has-error="false">\n      <mw-icon slot="icon-start" icon="search"></mw-icon>\n    </mw-textfield>\n    <mw-avatar slot="end" src="https://i.pravatar.cc/150?img=23" alt="John Doe" size="medium"></mw-avatar>\n   </div>\n\n</mw-app-bar>`',...Search.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Center","Search"]},"../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./.storybook/public/mw_logo.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/mw_logo.693e45a5.svg"}}]);