"use strict";(self.webpackChunk_smrtzr_docs=self.webpackChunk_smrtzr_docs||[]).push([[385],{4039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(4848),a=t(8453);const s={sidebar_position:4,slug:"/app"},r="Mobile apps",o={id:"app/app",title:"Mobile apps",description:"It is possible to embed the Smartzer player inside a mobile app using our custom SDK or a WebView. Please contact the Smartzer team for technical details regarding embedding via SDK or any other custom implementations. For implementation instructions for using a webview you can use the below docs to get you started.",source:"@site/docs/app/app.mdx",sourceDirName:"app",slug:"/app",permalink:"/app",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/app"},sidebar:"sdkSidebar",previous:{title:"Custom Integration",permalink:"/product_api/custom_integration"},next:{title:"Native App",permalink:"/app/native/"}},d={},c=[{value:"Common Integration methods",id:"common-integration-methods",level:2},{value:"Analytics",id:"analytics",level:2},{value:"Handle UTM codes with Smartzer Player Events",id:"handle-utm-codes-with-smartzer-player-events",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mobile-apps",children:"Mobile apps"}),"\n",(0,i.jsx)(n.p,{children:"It is possible to embed the Smartzer player inside a mobile app using our custom SDK or a WebView. Please contact the Smartzer team for technical details regarding embedding via SDK or any other custom implementations. For implementation instructions for using a webview you can use the below docs to get you started."}),"\n",(0,i.jsxs)(n.p,{children:["You can also combine this with the info in the ",(0,i.jsx)(n.a,{href:"/api",children:"API"})," section to get a deeper integration"]}),"\n",(0,i.jsx)(n.h2,{id:"common-integration-methods",children:"Common Integration methods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/app/native/",children:"Native"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/app/react-native/",children:"React Native"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"analytics",children:"Analytics"}),"\n",(0,i.jsx)(n.h3,{id:"handle-utm-codes-with-smartzer-player-events",children:"Handle UTM codes with Smartzer Player Events"}),"\n",(0,i.jsxs)(n.p,{children:["When a user lands on your app page with a UTM parameter, and you want to link these parameters to events within the Smartzer Player, eg. an ",(0,i.jsx)(n.code,{children:"addToCart"})," or ",(0,i.jsx)(n.code,{children:"goTo"})," event, the following steps should be implemented:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["App opens with a UTM code and stores the code and value in a local variable, eg: ",(0,i.jsx)(n.code,{children:"utm_source=facebook"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Render the Smartzer player in the webview. See ",(0,i.jsx)(n.a,{href:"/app#common-integration-methods",children:"Common Integration Methods"})," above"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After a player begins playing and a user clicks, for example on a Product CTA Button, then:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"CTA Event"})," is sent from the webview to parent page"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"{\n  event_type: 'smrtzr_cta',\n  cta: 1234                 // product id\n  videoCurrentTime: 60      // current time position in player\n  videoId: 1234567890       // project id\n  sessionId: 'aaaaaaaa'     // unique session id\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Parent app receives ",(0,i.jsx)(n.code,{children:"CTA event"})," data from webview and adds the UTM code and value to the data. See guides for each ",(0,i.jsx)(n.a,{href:"/app#common-integration-methods",children:"integration method"})," about receiving event data from the webview component"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"App uses the data object with additional utm data as required"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);