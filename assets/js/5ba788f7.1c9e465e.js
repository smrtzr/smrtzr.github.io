"use strict";(self.webpackChunk_smrtzr_docs=self.webpackChunk_smrtzr_docs||[]).push([[919],{5824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=r(4848),n=r(8453);const i={},o="Custom Styles",c={id:"sdk/embedding/project/customstyles",title:"Custom Styles",description:"This is a feature that is only available for project players that are not contained within a lightbox. With the below setup, it is possible for properties such as height and width to be controlled using CSS and media queries, which gives greater control for different screen sizes.",source:"@site/docs/sdk/embedding/project/customstyles.mdx",sourceDirName:"sdk/embedding/project",slug:"/sdk/embedding/project/customstyles",permalink:"/sdk/embedding/project/customstyles",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Custom trigger",permalink:"/sdk/embedding/project/lightbox/customtrigger"},next:{title:"Event Listeners",permalink:"/sdk/listeners"}},a={},d=[];function h(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"custom-styles",children:"Custom Styles"}),"\n",(0,s.jsx)(t.p,{children:"This is a feature that is only available for project players that are not contained within a lightbox. With the below setup, it is possible for properties such as height and width to be controlled using CSS and media queries, which gives greater control for different screen sizes."}),"\n",(0,s.jsxs)(t.p,{children:["The first step is to add ",(0,s.jsx)(t.code,{children:"enableExternalCSS"})," to the ",(0,s.jsx)(t.code,{children:"smrtzr-project"}),", which can be done in code or with the ",(0,s.jsx)(t.code,{children:"embed-sdk"})," option in the share popup within the Smartzer app."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'<smrtzr-project enableExternalCSS projectId="v/11111111111"></smrtzr-project>\n'})}),"\n",(0,s.jsx)(t.p,{children:"This will expose the container of the player that can be now targetted with the below selector:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"smrtzr-project::part(smrtzrProjectContainer) {\n  ...your css here;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Below is an example of manipulating the player's height for different device sizes. Although it is possible to use other css properties, it is advisable to mainly use ",(0,s.jsx)(t.code,{children:"height"})," and ",(0,s.jsx)(t.code,{children:"width"})," as to not break the behaviour of the player."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"smrtzr-project::part(smrtzrProjectContainer) {\n  height: 80vh;\n}\n\n@media (min-width: 770px) {\n  smrtzr-project::part(smrtzrProjectContainer) {\n    height: 85vh;\n  }\n}\n\n@media (min-width: 1250px) {\n  smrtzr-project::part(smrtzrProjectContainer) {\n    height: 90vh;\n  }\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var s=r(6540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);