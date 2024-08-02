"use strict";(self.webpackChunk_smrtzr_docs=self.webpackChunk_smrtzr_docs||[]).push([[955],{2224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(4848),s=a(8453);const o={sidebar_position:2,sidebar_label:"Analytics"},r="Analytics",i={id:"sdk/listeners/analytics/analytics",title:"Analytics",description:"_NOTE:_ This feature is only available on select billing plans, please reach out to your account manager to have this feature enabled.",source:"@site/docs/sdk/listeners/analytics/analytics.mdx",sourceDirName:"sdk/listeners/analytics",slug:"/sdk/listeners/analytics/",permalink:"/sdk/listeners/analytics/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Analytics"},sidebar:"sdkSidebar",previous:{title:"CTA",permalink:"/sdk/listeners/calltoaction"},next:{title:"Events",permalink:"/sdk/listeners/analytics/events"}},l={},c=[{value:"Event listener",id:"event-listener",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"analytics",children:"Analytics"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"NOTE:"})})," This feature is only available on select billing plans, please reach out to your account manager to have this feature enabled.\nAll analytics data can be sent to the parent page in the form of a custom event. This allows you to listen for these events and send the data to your own analytics platform."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"event-listener",children:"Event listener"}),"\n",(0,n.jsx)(t.p,{children:"All Smartzer events can be broadcasted as custom events which can be picked up using the following code as an example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"  <script>\n    document.addEventListener('smrtzr:broadcast:analytics', (e) => {\n      console.log(e.detail);\n    });\n  <\/script>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"We have created some examples of how you can use this data to share to common analytics platforms:"}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Google Tag Manager"}),(0,n.jsxs)(t.p,{children:["You can use the below code to push Smartzer events to Google Tag Manager. Assuming you have the Google Tag Manager script already installed on your page, you can add the following code to your page to push Smartzer events to the ",(0,n.jsx)(t.code,{children:"window.dataLayer"})," array."]}),(0,n.jsxs)(t.p,{children:["In this example these events are all prefixed with the ",(0,n.jsx)(t.code,{children:"smrtzr_"})," prefix to make it easier to filter them in GTM."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<script>\n  document.addEventListener('smrtzr:broadcast:analytics', (e) => {\n    if (window.dataLayer && Array.isArray(window.dataLayer)) {\n      window.dataLayer.push({ event: `smrtzr_${e.detail.analyticsType}`, analyticsData: e.detail });\n    }\n  });\n<\/script>\n"})}),(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"https://support.google.com/tagmanager/answer/14847097?hl=en&ref_topic=15191151&sjid=12090881874040078162-EU",children:"Get started with Tag Manager"})})," guide for more information on how to set up Google Tag Manager and add it to your website."]}),(0,n.jsx)(t.p,{children:"If you are unable to add the GTM script to your page, you can also use the the Smartzer GTM Plugin to automatically push these events to your Google Tag Manager account. Speak to your account manager about how to add this to your account."})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var n=a(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);