"use strict";(self.webpackChunk_smrtzr_docs=self.webpackChunk_smrtzr_docs||[]).push([[955],{2224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(4848),s=n(8453);const r={sidebar_position:2,sidebar_label:"Analytics"},o="Analytics",i={id:"sdk/listeners/analytics/analytics",title:"Analytics",description:"_NOTE:_ This feature is only available on select billing plans, please reach out to your account manager to have this feature enabled.",source:"@site/docs/sdk/listeners/analytics/analytics.mdx",sourceDirName:"sdk/listeners/analytics",slug:"/sdk/listeners/analytics/",permalink:"/sdk/listeners/analytics/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Analytics"},sidebar:"sdkSidebar",previous:{title:"CTA",permalink:"/sdk/listeners/calltoaction"},next:{title:"Events",permalink:"/sdk/listeners/analytics/events"}},c={},l=[{value:"Event listener",id:"event-listener",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"analytics",children:"Analytics"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.em,{children:"NOTE:"})})," This feature is only available on select billing plans, please reach out to your account manager to have this feature enabled.\nWhen embedding using the SDK, all analytics data can be sent to the parent page in the form of a custom event. This allows you to listen for these events and send the data to your own analytics platform."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"event-listener",children:"Event listener"}),"\n",(0,a.jsx)(t.p,{children:"All Smartzer events can be broadcasted as custom events which can be picked up using the following code as an example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"  \x3c!-- load the SDK --\x3e\n  <script src=\"https://scripts.smartzer.com/sdk/latest/embed.js\"><\/script>\n  \x3c!-- setup a listener to capture the events and process --\x3e\n  <script>\n    document.addEventListener('smrtzr:broadcast:analytics', (e) => {\n      console.log(e.detail);\n    });\n  <\/script>\n"})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:"We have created some examples of how you can use this data to share to common analytics platforms:"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Google Tag Manager"}),(0,a.jsx)("p",{children:(0,a.jsxs)(t.p,{children:["Assuming you have the Google Tag Manager script already installed on your page, you can use the following examples to push Smartzer events to Google Tag Manager. In these examples the events are all prefixed with the ",(0,a.jsx)(t.code,{children:"smrtzr_"})," prefix to make it easier to filter them in GTM, but you can change the formatting to suit your requirements."]})}),(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Event Listener on your page"}),(0,a.jsx)("p",{children:(0,a.jsxs)(t.p,{children:["You can add an event listener directly to your page where the player and SDK are embedded to push Smartzer events to the ",(0,a.jsx)(t.code,{children:"window.dataLayer"})," array, which should exist and have been instantiated by the GTM script."]})}),(0,a.jsx)("p",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Web Page:"})})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'  \x3c!-- load the SDK --\x3e\n  <script src="https://scripts.smartzer.com/sdk/latest/embed.js"><\/script>\n  \x3c!-- load you player via iframe --\x3e\n  <iframe src="https://player.smartzer.com/v/{YOUR_PLAYER_ID}>"></iframe>\n  \x3c!-- or load your player using the SDK --\x3e\n  <smrtzr-project projectId="v/{YOUR_PROJECT_ID}">\n  \x3c!-- setup a listener to capture the events and push to dataLayer --\x3e\n  <script>\n    document.addEventListener(\'smrtzr:broadcast:analytics\', function (e) {\n      if (window.dataLayer && Array.isArray(window.dataLayer)) {\n        window.dataLayer.push({ event: \'smrtzr_\'.concat(e.detail.analyticsType), analyticsData: e.detail });\n      }\n    });\n  <\/script>\n'})})]}),(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Event listener in GTM Account"}),(0,a.jsx)("p",{children:(0,a.jsx)(t.p,{children:"Alternatively, you can add the event listener to your Google Tag Manager account. In this case you will still need the Smartzer SDK script on your page, along with the player embedded via an iframe or the custom components, which would look something like this:"})}),(0,a.jsx)("p",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Web Page:"})})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'  \x3c!-- load the SDK --\x3e\n  <script src="https://scripts.smartzer.com/sdk/latest/embed.js"><\/script>\n  \x3c!-- load you player via iframe --\x3e\n  <iframe src="https://player.smartzer.com/v/{YOUR_PLAYER_ID}>"></iframe>\n  \x3c!-- or load your player using the SDK --\x3e\n  <smrtzr-project projectId="v/{YOUR_PROJECT_ID}">\n'})}),(0,a.jsx)("p",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"GTM Account:"})})}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"  <script>\n    document.addEventListener('smrtzr:broadcast:analytics', function (e) {\n      if (window.dataLayer && Array.isArray(window.dataLayer)) {\n        window.dataLayer.push({ event: 'smrtzr_'.concat(e.detail.analyticsType), analyticsData: e.detail });\n      }\n    });\n  <\/script>\n"})})]}),(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"https://support.google.com/tagmanager/answer/14847097?hl=en&ref_topic=15191151&sjid=12090881874040078162-EU",children:"Get started with Tag Manager"})})," guide for more information on how to set up Google Tag Manager and add it to your website."]}),(0,a.jsx)(t.p,{children:"If you are unable to add the GTM script to your page, you can also use the the Smartzer GTM Plugin to automatically push these events to your Google Tag Manager account. Speak to your account manager about how to add this to your account."})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);