(window.webpackJsonp=window.webpackJsonp||[]).push([[862],{1069:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),s=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=o,p=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return t?r.a.createElement(p,i(i({ref:n},d),{},{components:t})):r.a.createElement(p,i({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1070:function(e,n,t){"use strict";(function(e){var o=this&&this.__createBinding||(Object.create?function(e,n,t,o){void 0===o&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,o){void 0===o&&(o=t),e[o]=n[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&o(n,e,t);return r(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=a(t(1073));const c=["internal","external"];let i;try{i=t(1071).usePluginData}catch(m){i=null}function l(e){return s(e),u()?"internal"in e?d(e.internal):[]:"external"in e?d(e.external):[]}function d(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${c}. Instead got ${e}`);if(!Object.keys(e).find((e=>c.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${c}`);const n=Object.keys(e).filter((e=>!c.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${c}`)}function u(){return e.env.FB_INTERNAL||i&&i("internaldocs-fb").FB_INTERNAL}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=s,n.isInternal=u,n.FbInternalOnly=function(e){return u()?e.children:null},n.OssOnly=function(e){return u()?null:e.children}}).call(this,t(1072))},1071:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return r})),t.d(n,"useAllPluginInstancesData",(function(){return a})),t.d(n,"usePluginData",(function(){return c}));var o=t(22);function r(){var e=Object(o.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var n=r()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function c(e,n){void 0===n&&(n="default");var t=a(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},1072:function(e,n){var t,o,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(e){o=c}}();var l,d=[],s=!1,u=-1;function m(){s&&l&&(s=!1,l.length?d=l.concat(d):u=-1,d.length&&b())}function b(){if(!s){var e=i(m);s=!0;for(var n=d.length;n;){for(l=d,d=[];++u<n;)l&&l[u].run();u=-1,n=d.length}l=null,s=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(n){try{return o.call(null,e)}catch(n){return o.call(this,e)}}}(e)}}function p(e,n){this.fun=e,this.array=n}function f(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];d.push(new p(e,n)),1!==d.length||s||i(b)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},1073:function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function c(e){try{l(o.next(e))}catch(n){a(n)}}function i(e){try{l(o.throw(e))}catch(n){a(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,i)}l((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const r=t(1074);n.getSpecInfo=function(e){return o(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1074:function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function c(e){try{l(o.next(e))}catch(n){a(n)}}function i(e){try{l(o.throw(e))}catch(n){a(n)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,i)}l((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,a=0;const c={};n.call=function(e){return o(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in c||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?c[n].resolve(e.data.response):c[n].reject(new Error(e.data.error)),delete c[n]})));const n=a++,t=new Promise(((e,t)=>{c[n]={resolve:e,reject:t}})),o={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},i="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,i),t}))}},1075:function(e,n,t){"use strict";t(60);var o=t(1070),r=t(0);var a=function(){var e=r.useState(!1),n=e[0],t=e[1],o=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Thank you for letting us know!"):r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return o(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return o(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return null};n.a=function(){return Object(o.fbContent)({internal:r.createElement(c,null),external:r.createElement(a,null)})}},936:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(1069)),c=t(1075),i=(t(1070),{id:"adding-and-removing-items",title:"Adding and Removing Items from Connections",slug:"/guided-tour/list-data/adding-and-removing-items/"}),l={unversionedId:"guided-tour/list-data/adding-and-removing-items",id:"guided-tour/list-data/adding-and-removing-items",isDocsHomePage:!1,title:"Adding and Removing Items from Connections",description:"Adding and Removing Items From a Connection",source:"@site/docs/guided-tour/list-data/adding-and-removing-items.md",slug:"/guided-tour/list-data/adding-and-removing-items/",permalink:"/docs/next/guided-tour/list-data/adding-and-removing-items/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/docs/guided-tour/list-data/adding-and-removing-items.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1614354101,sidebar:"docs",previous:{title:"Refetching Connections",permalink:"/docs/next/guided-tour/list-data/refetching-connections/"},next:{title:"Advanced Pagination",permalink:"/docs/next/guided-tour/list-data/advanced-pagination/"}},d=[{value:"Adding and Removing Items From a Connection",id:"adding-and-removing-items-from-a-connection",children:[{value:"Connection Records",id:"connection-records",children:[]},{value:"Adding Edges",id:"adding-edges",children:[]},{value:"Removing Edges",id:"removing-edges",children:[]},{value:"Connection Identity With Filters",id:"connection-identity-with-filters",children:[]}]}],s={toc:d};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"adding-and-removing-items-from-a-connection"},"Adding and Removing Items From a Connection"),Object(a.b)("p",null,"Usually when you're rendering a connection, you'll also want to be able to add or remove items to/from the connection in response to user actions."),Object(a.b)("p",null,"As explained in our ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../../updating-data/"}),"Updating Data")," section, Relay holds a local in-memory store of normalized GraphQL data, where records are stored by their IDs.  When creating mutations, subscriptions, or local data updates with Relay, you must provide an ",Object(a.b)("inlineCode",{parentName:"p"},"updater")," function, inside which you can access and read records, as well as write and make updates to them. When records are updated, any components affected by the updated data will be notified and re-rendered."),Object(a.b)("h3",{id:"connection-records"},"Connection Records"),Object(a.b)("p",null,"In Relay, connection fields that are marked with the ",Object(a.b)("inlineCode",{parentName:"p"},"@connection")," directive are stored as special records in the store, and they hold and accumulate ",Object(a.b)("em",{parentName:"p"},"all")," of the items that have been fetched for the connection so far. In order to add or remove items from a connection, we need to access the connection record using the connection ",Object(a.b)("inlineCode",{parentName:"p"},"*key*"),", which was provided when declaring a ",Object(a.b)("inlineCode",{parentName:"p"},"@connection"),"; specifically, this allows us to access a connection inside an ",Object(a.b)("inlineCode",{parentName:"p"},"updater")," function using the ",Object(a.b)("inlineCode",{parentName:"p"},"ConnectionHandler")," APIs."),Object(a.b)("p",null,"For example, given the following fragment that declares a ",Object(a.b)("inlineCode",{parentName:"p"},"@connection"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {graphql} = require('react-relay');\n\nconst storyFragment = graphql`\n  fragment StoryComponent_story on Story {\n    comments @connection(key: \"StoryComponent_story_comments_connection\") {\n      nodes {\n        body {\n          text\n        }\n      }\n    }\n  }\n`;\n")),Object(a.b)("p",null,"We can access the connection record inside an ",Object(a.b)("inlineCode",{parentName:"p"},"updater")," function using ",Object(a.b)("inlineCode",{parentName:"p"},"ConnectionHandler.getConnection"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {ConnectionHandler} = require('relay-runtime');\n\nfunction updater(store: RecordSourceSelectorProxy) {\n  const storyRecord = store.get(storyID);\n  const connectionRecord = ConnectionHandler.getConnection(\n    storyRecord,\n    'StoryComponent_story_comments_connection',\n  );\n\n  // ...\n}\n")),Object(a.b)("h3",{id:"adding-edges"},"Adding Edges"),Object(a.b)("p",null,"Once we have a connection record, we also need a record for the new edge that we want to add to the connection. Usually, mutation or subscription payloads will contain the new edge that was added; if not, you can also construct a new edge from scratch."),Object(a.b)("p",null,"For example, in the following mutation we can query for the newly created edge in the mutation response:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {graphql} = require('react-relay');\n\nconst createCommentMutation = graphql`\n  mutation CreateCommentMutation($input: CommentCreateData!) {\n    comment_create(input: $input) {\n      comment_edge {\n        cursor\n        node {\n          body {\n            text\n          }\n        }\n      }\n    }\n  }\n`;\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Note that we also query for the ",Object(a.b)("inlineCode",{parentName:"li"},"cursor")," for the new edge; this isn't strictly necessary, but it is information that will be required if we need to perform pagination based on that ",Object(a.b)("inlineCode",{parentName:"li"},"cursor"),".")),Object(a.b)("p",null,"Inside an ",Object(a.b)("inlineCode",{parentName:"p"},"updater"),", we can access the edge inside the mutation response using Relay store APIs:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {ConnectionHandler} = require('relay-runtime');\n\nfunction updater(store: RecordSourceSelectorProxy) {\n  const storyRecord = store.get(storyID);\n  const connectionRecord = ConnectionHandler.getConnection(\n    storyRecord,\n    'StoryComponent_story_comments_connection',\n  );\n\n  // Get the payload returned from the server\n  const payload = store.getRootField('comment_create');\n\n  // Get the edge inside the payload\n  const serverEdge = payload.getLinkedRecord('comment_edge');\n\n  // Build edge for adding to the connection\n  const newEdge = ConnectionHandler.buildConnectionEdge(\n    store,\n    connectionRecord,\n    serverEdge,\n  );\n\n  // ...\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The mutation payload is available as a root field on that store, which can be read using the ",Object(a.b)("inlineCode",{parentName:"li"},"store.getRootField")," API. In our case, we're reading ",Object(a.b)("inlineCode",{parentName:"li"},"comment_create"),", which is the root field in the response."),Object(a.b)("li",{parentName:"ul"},"Note that we need to construct the new edge from the edge received from the server using ",Object(a.b)("inlineCode",{parentName:"li"},"ConnectionHandler.buildConnectionEdge")," before we can add it to the connection.")),Object(a.b)("p",null,"If you need to create a new edge from scratch, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"ConnectionHandler.createEdge"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {ConnectionHandler} = require('relay-runtime');\n\nfunction updater(store: RecordSourceSelectorProxy) {\n  const storyRecord = store.get(storyID);\n  const connectionRecord = ConnectionHandler.getConnection(\n    storyRecord,\n    'StoryComponent_story_comments_connection',\n  );\n\n  // Create a new local Comment record\n  const id = `client:new_comment:${randomID()}`;\n  const newCommentRecord = store.create(id, 'Comment');\n\n  // Create new edge\n  const newEdge = ConnectionHandler.createEdge(\n    store,\n    connectionRecord,\n    newCommentRecord,\n    'CommentEdge', /* GraphQl Type for edge */\n  );\n\n  // ...\n}\n")),Object(a.b)("p",null,"Once we have a new edge record, we can add it to the the connection using ",Object(a.b)("inlineCode",{parentName:"p"},"ConnectionHandler.insertEdgeAfter")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ConnectionHandler.insertEdgeBefore"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {ConnectionHandler} = require('relay-runtime');\n\nfunction updater(store: RecordSourceSelectorProxy) {\n  const storyRecord = store.get(storyID);\n  const connectionRecord = ConnectionHandler.getConnection(\n    storyRecord,\n    'StoryComponent_story_comments_connection',\n  );\n\n  const newEdge = (...);\n\n  // Add edge to the end of the connection\n  ConnectionHandler.insertEdgeAfter(\n    connectionRecord,\n    newEdge,\n  );\n\n  // Add edge to the beginning of the connection\n  ConnectionHandler.insertEdgeBefore(\n    connectionRecord,\n    newEdge,\n  );\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Note that these APIs will ",Object(a.b)("em",{parentName:"li"},"mutate")," the connection in place")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"NOTE: Check out our complete Relay Store APIs ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://facebook.github.io/relay/docs/en/relay-store.html"}),"here"))),Object(a.b)("h3",{id:"removing-edges"},"Removing Edges"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ConnectionHandler")," provides a similar API to remove an edge from a connection, via ",Object(a.b)("inlineCode",{parentName:"p"},"ConnectionHandler.deleteNode"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {ConnectionHandler} = require('RelayModern');\n\nfunction updater(store: RecordSourceSelectorProxy) {\n  const storyRecord = store.get(storyID);\n  const connectionRecord = ConnectionHandler.getConnection(\n    storyRecord,\n    'StoryComponent_story_comments_connection',\n  );\n\n  // Remove edge from the connection, given the ID of the node\n  ConnectionHandler.deleteNode(\n    connectionRecord,\n    commentIDToDelete,\n  );\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In this case ",Object(a.b)("inlineCode",{parentName:"li"},"ConnectionHandler.deleteNode")," will remove an edge given a ",Object(a.b)("em",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"em"},"node")," ID"),". This means it will look up which edge in the connection contains a node with the provided ID, and remove that edge."),Object(a.b)("li",{parentName:"ul"},"Note that this API will ",Object(a.b)("em",{parentName:"li"},"mutate")," the connection in place.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Remember: When performing any of the operations described here to mutate a connection, any fragment or query components that are rendering the affected connection will be notified and re-render with the latest version of the connection.")),Object(a.b)("h3",{id:"connection-identity-with-filters"},"Connection Identity With Filters"),Object(a.b)("p",null,"In our previous examples, our connections didn't take any arguments as filters. If you declared a connection that takes arguments as filters, the values used for the filters will be part of the connection identifier. In other words, ",Object(a.b)("em",{parentName:"p"},"each of the values passed in as connection filters will be used to identify the connection in the Relay store.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that this excludes pagination arguments, i.e. it excludes ",Object(a.b)("inlineCode",{parentName:"p"},"first"),", ",Object(a.b)("inlineCode",{parentName:"p"},"last"),", ",Object(a.b)("inlineCode",{parentName:"p"},"before"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"after"),".")),Object(a.b)("p",null,"For example, let's say the ",Object(a.b)("inlineCode",{parentName:"p"},"comments")," field took the following arguments, which we pass in as GraphQL ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../../rendering/variables/"}),"variables"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {graphql} = require('RelayModern');\n\nconst storyFragment = graphql`\n  fragment StoryComponent_story on Story {\n    comments(\n      order_by: $orderBy,\n      filter_mode: $filterMode,\n      language: $language,\n    ) @connection(key: \"StoryComponent_story_comments_connection\") {\n      edges {\n        nodes {\n          body {\n            text\n          }\n        }\n      }\n    }\n  }\n`;\n")),Object(a.b)("p",null,"In the example above, this means that whatever values we used for ",Object(a.b)("inlineCode",{parentName:"p"},"$orderBy"),", ",Object(a.b)("inlineCode",{parentName:"p"},"$filterMode")," and ",Object(a.b)("inlineCode",{parentName:"p"},"$language")," when we queried for the ",Object(a.b)("inlineCode",{parentName:"p"},"comments")," field will be part of the connection identifier, and we'll need to use those values when accessing the connection record from the Relay store."),Object(a.b)("p",null,"In order to do so, we need to pass a third argument to ",Object(a.b)("inlineCode",{parentName:"p"},"ConnectionHandler.getConnection"),", with concrete filter values to identify the connection:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {ConnectionHandler} = require('RelayModern');\n\nfunction updater(store: RecordSourceSelectorProxy) {\n  const storyRecord = store.get(storyID);\n\n  // Get the connection instance for the connection with comments sorted\n  // by the date they were added\n  const connectionRecordSortedByDate = ConnectionHandler.getConnection(\n    storyRecord,\n    'StoryComponent_story_comments_connection',\n    {order_by: '*DATE_ADDED*', filter_mode: null, language: null}\n  );\n\n  // Get the connection instance for the connection that only contains\n  // comments made by friends\n  const connectionRecordFriendsOnly = ConnectionHandler.getConnection(\n    storyRecord,\n    'StoryComponent_story_comments_connection',\n    {order_by: null, filter_mode: '*FRIENDS_ONLY*', langugage: null}\n  );\n}\n")),Object(a.b)("p",null,"This implies that by default, ",Object(a.b)("em",{parentName:"p"},"each combination of values used for filters will produce a different record for the connection.")),Object(a.b)("p",null,"When making updates to a connection, you will need to make sure to update all of the relevant records affected by a change. For example, if we were to add a new comment to our example connection, we'd need to make sure ",Object(a.b)("em",{parentName:"p"},"not")," to add the comment to the ",Object(a.b)("inlineCode",{parentName:"p"},"FRIENDS_ONLY")," connection, if the new comment wasn't made by a friend of the user:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const {ConnectionHandler} = require('relay-runtime');\n\nfunction updater(store: RecordSourceSelectorProxy) {\n  const storyRecord = store.get(storyID);\n\n  // Get the connection instance for the connection with comments sorted\n  // by the date they were added\n  const connectionRecordSortedByDate = ConnectionHandler.getConnection(\n    storyRecord,\n    'StoryComponent_story_comments_connection',\n    {order_by: '*DATE_ADDED*', filter_mode: null, language: null}\n  );\n\n  // Get the connection instance for the connection that only contains\n  // comments made by friends\n  const connectionRecordFriendsOnly = ConnectionHandler.getConnection(\n    storyRecord,\n    'StoryComponent_story_comments_connection',\n    {order_by: null, filter_mode: '*FRIENDS_ONLY*', language: null}\n  );\n\n  const newComment = (...);\n  const newEdge = (...);\n\n  ConnectionHandler.insertEdgeAfter(\n    connectionRecordSortedByDate,\n    newEdge,\n  );\n\n  if (isMadeByFriend(storyRecord, newComment) {\n    // Only add new comment to friends-only connection if the comment\n    // was made by a friend\n    ConnectionHandler.insertEdgeAfter(\n      connectionRecordFriendsOnly,\n      newEdge,\n    );\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Managing connections with many filters:")),Object(a.b)("p",null,"As you can see, just adding a few filters to a connection can make the complexity and number of connection records that need to be managed explode. In order to more easily manage this, Relay provides 2 strategies:"),Object(a.b)("p",null,"1) Specify exactly ",Object(a.b)("em",{parentName:"p"},"which")," filters should be used as connection identifiers."),Object(a.b)("p",null,"By default, ",Object(a.b)("em",{parentName:"p"},"all")," non-pagination filters will be used as part of the connection identifier. However, when declaring a ",Object(a.b)("inlineCode",{parentName:"p"},"@connection"),", you can specify the exact set of filters to use for connection identity:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'const {graphql} = require(\'relay-runtime\');\n\nconst storyFragment = graphql`\n  fragment StoryComponent_story on Story {\n    comments(\n      order_by: $orderBy\n      filter_mode: $filterMode\n      language: $language\n    )\n      @connection(\n        key: "StoryComponent_story_comments_connection"\n        filters: ["order_by", "filter_mode"]\n      ) {\n      edges {\n        nodes {\n          body {\n            text\n          }\n        }\n      }\n    }\n  }\n`;\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"By specifying ",Object(a.b)("inlineCode",{parentName:"li"},"filters")," when declaring the ",Object(a.b)("inlineCode",{parentName:"li"},"@connection"),", we're indicating to Relay the exact set of filter values that should be used as part of connection identity. In this case, we're excluding ",Object(a.b)("inlineCode",{parentName:"li"},"language"),", which means that only values for ",Object(a.b)("inlineCode",{parentName:"li"},"order_by")," and ",Object(a.b)("inlineCode",{parentName:"li"},"filter_mode")," will affect connection identity and thus produce new connection records."),Object(a.b)("li",{parentName:"ul"},"Conceptually, this means that we're specifying which arguments affect the output of the connection from the server, or in other words, which arguments are ",Object(a.b)("em",{parentName:"li"},"actually")," ",Object(a.b)("em",{parentName:"li"},"filters"),". If one of the connection arguments doesn't actually change the set of items that are returned from the server, or their ordering, then it isn't really a filter on the connection, and we don't need to identify the connection differently when that value changes. In our example, changing the ",Object(a.b)("inlineCode",{parentName:"li"},"language")," of the comments we request doesn't change the set of comments that are returned by the connection, so it is safe to exclude it from ",Object(a.b)("inlineCode",{parentName:"li"},"filters"),"."),Object(a.b)("li",{parentName:"ul"},"This can also be useful if we know that any of the connection arguments will never change in our app, in which case it would also be safe to exclude from ",Object(a.b)("inlineCode",{parentName:"li"},"filters"),".")),Object(a.b)("p",null,"2) An easier API alternative to manage multiple connections with multiple filter values is still pending"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"TBD")),Object(a.b)(c.a,{mdxType:"DocsRating"}))}u.isMDXComponent=!0}}]);