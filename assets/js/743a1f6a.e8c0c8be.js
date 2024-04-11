"use strict";(self.webpackChunk_smrtzr_docs=self.webpackChunk_smrtzr_docs||[]).push([[40],{8310:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(4848),o=t(8453);const i={},a="iOS",r={id:"app/native/sending_events/ios",title:"iOS",description:"Below is some example code on sending an event to the player",source:"@site/docs/app/native/sending_events/ios.mdx",sourceDirName:"app/native/sending_events",slug:"/app/native/sending_events/ios",permalink:"/app/native/sending_events/ios",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Android",permalink:"/app/native/sending_events/android"},next:{title:"React Native",permalink:"/app/react-native/"}},c={},d=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ios",children:"iOS"}),"\n",(0,s.jsx)(n.p,{children:"Below is some example code on sending an event to the player"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"let pauseEvent = \"{ source: 'SmartzerCommunicator', eventType: 'AUTO', eventSource: 'PLAYER', eventName: 'suspendVideo', data: {} }\"\nlet jsFunc = \"(function() { window.postMessage({ source: 'SmartzerCommunicator', eventType: 'AUTO', eventSource: 'PLAYER', eventName: 'suspendVideo', data: {} }, '*'); })()\"\nself.webView.evaluateJavaScript(jsFunc, completionHandler: nil)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);