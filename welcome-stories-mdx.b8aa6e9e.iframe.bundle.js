/*! For license information please see welcome-stories-mdx.b8aa6e9e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_maibornwolff_mwui_stencil=self.webpackChunk_maibornwolff_mwui_stencil||[]).push([[3995],{"../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,Ed:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,QE:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,VZ:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,c6:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@storybook/blocks/dist/index.mjs")},"./src/pages/welcome.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../mwui-token-farm/dist/css/MW_core.css"),__webpack_require__("../node_modules/@storybook/addon-docs/dist/index.mjs")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./.storybook/public/mw_logo.png"),__webpack_require__("../node_modules/react/jsx-runtime.js"));function _createMdxContent(props){const _components=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",em:"em",strong:"strong",ol:"ol",li:"li",code:"code",h3:"h3",a:"a",ul:"ul"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Welcome"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section",{style:{marginTop:"3vh",marginBottom:"10vh"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("mw-card",{elevated:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("mw-card-header",{header:"MWUI",subheader:"Web Component Library",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("mw-avatar",{slot:"icon",src:"https://placedog.net/250/250?id=3",alt:"mwui"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("mw-card-body",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"20px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("mw-chip",{selected:!0,children:"Web Components"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("mw-chip",{selected:!0,children:"Design Tokens"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("mw-chip",{selected:!0,children:"Figma"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"The MWUI Web Component Libary is based on the MW Design System created and maintained in Figma."})]})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"getting-started",children:"Getting Started"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.em,{children:"This project is part of a research project and not an official library."})}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The styling of the Web Components is strictly coupled to the Figma Components using Design Tokens. These Design decisions are versioned and synced between Design and Web,\ntherefore this Storybook represents a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:"synchronized state"})," of the Figma Designs."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"There are several ways to include the MWUI components in a project. Build with Stenciljs, all components can be used as Web Components.\nFramwork-specific integrations make it easier to use the Web Components but are not mandatory to use."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"web-components",children:"Web Components"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Integrate Web Components in any framework or none at all:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Install npm package"}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hw,{language:"bash",dark:!0,code:"npm i @maibornwolff/mwui-stencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ol,{start:"2",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:["Include the following in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"main.js"})," (e.g. Angular, Vue) or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"index.js"})," (e.g. React):"]}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hw,{dark:!0,language:"tsx",code:'import { defineCustomElements } from "@maibornwolff/mwui-stencil/loader";\ndefineCustomElements(window);'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"integrations",children:"Integrations"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:'Framework integrations are optional to use as Web Components run in any browser without specific frameworks or libraries. The provided integrations can help using the Web Components in a more "react, vue or angular" way.'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"react",children:"React"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Install npm package"}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hw,{dark:!0,language:"bash",code:"npm i @maibornwolff/mwui-react\nnpm i @maibornwolff/mwui-stencil"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ol,{start:"2",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Import and use as a React-like component."}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hw,{dark:!0,language:"tsx",code:'import { MWButton } from "@maibornwolff/mwui-react";\n'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ol,{start:"3",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Import global styles"}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hw,{dark:!0,language:"bash",code:"import '@maibornwolff/mwui-stencil/dist/mwui-stencil/mwui-stencil.css';\n"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"vue",children:"Vue"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"Install npm package"}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hw,{dark:!0,language:"bash",code:"npm i @maibornwolff/mwui-vue\nnpm i @maibornwolff/mwui-stencil\n"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ol,{start:"2",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:["Import the library plugin and global styles in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"main.js"})," file:"]}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hw,{dark:!0,language:"tsx",code:'import { MwuiComponents } from "@maibornwolff/mwui-vue";\nimport "@maibornwolff/mwui-stencil/dist/mwui-stencil/mwui-stencil.css";\n\ncreateApp(App).use(MwuiComponents).mount("#app");\n'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ol,{start:"3",children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"You can then use your components within vue:"}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hw,{language:"tsx",dark:!0,code:"<template>\n  <mw-button test-id=\"test-id\" label=\"Press here\" />\n</template>\n\n<script>\nimport { MwButton } from '@maibornwolff/mwui-vue';\n\n  name: 'HelloWorld',\n  components: {\n    MwButton\n  }\n}\n"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.em,{children:"IMPORTANT:"})})," If using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"vue 3"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"vite"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a,{href:"https://stenciljs.com/docs/vue#creating-a-consumer-vue-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"setup your vite.config accordingly"}),"."]}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.em,{children:"NOTE:"})})," for known issues, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a,{href:"https://github.com/MaibornWolff/mwui/tree/main/mwui-vue#known-issues",target:"_blank",rel:"nofollow noopener noreferrer",children:"MWUI Vue Integration"}),"."]}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h3,{id:"angular",children:"Angular"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["To enable support for web components in Angular, add the following to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"@NgModule"})," in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"app.module.ts"}),":"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hw,{dark:!0,code:"schemas: [CUSTOM_ELEMENTS_SCHEMA];\n"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.em,{children:"NOTE:"})})," The Angular integration is still work in progress"]}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"further-readings",children:"Further Readings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.li,{children:["Learn more about ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a,{href:"https://stenciljs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Stenciljs"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.a,{href:"https://stenciljs.com/docs/events#listening-to-events-from-a-non-jsx-element",target:"_blank",rel:"nofollow noopener noreferrer",children:"Listening to events from a non-JSX element"})}),"\n"]})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Welcome",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./.storybook/public/mw_logo.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/mw_logo.5ba0280f.png"}}]);