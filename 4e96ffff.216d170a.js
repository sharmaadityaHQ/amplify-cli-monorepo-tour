(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,10,20,26,27,35],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return v})),a.d(t,"metadata",(function(){return N})),a.d(t,"toc",(function(){return w})),a.d(t,"default",(function(){return x}));var n=a(3),o=a(7),i=a(0),r=a.n(i),c=a(111),l=a(125),m=a(112),s=a(87),p=a.n(s);const u=37,d=39;var b=function(e){const{lazy:t,block:a,defaultValue:n,values:o,groupId:c,className:s}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(l.a)(),[h,y]=Object(i.useState)(n),g=i.Children.toArray(e.children);if(null!=c){const e=b[c];null!=e&&e!==h&&o.some((t=>t.value===e))&&y(e)}const O=e=>{y(e),null!=c&&f(c,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(m.a)("tabs",{"tabs--block":a},s)},o.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(m.a)("tabs__item",p.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(i.cloneElement)(g.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))};var f=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)},h=a(57),y=a(58),g=a(55),O=a(59),j=a(60),k=a(56),v={id:"commands",title:"Amplify Mock Commands",sidebar_label:"Commands",slug:"/amplify-util-mock/commands"},N={unversionedId:"amplify-util-mock/commands",id:"amplify-util-mock/commands",isDocsHomePage:!1,title:"Amplify Mock Commands",description:"Java is required on your development workstation to use Local Mocking in Amplify",source:"@site/docs/amplify-util-mock/commands.mdx",slug:"/amplify-util-mock/commands",permalink:"/amplify-cli-monorepo-tour/docs/amplify-util-mock/commands",editUrl:"https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour/edit/main/docs/amplify-util-mock/commands.mdx",version:"current",sidebar_label:"Commands",sidebar:"docs",previous:{title:"Amplify CLI Mocking",permalink:"/amplify-cli-monorepo-tour/docs/amplify-util-mock/"}},w=[{value:"Which package is used?",id:"which-package-is-used",children:[]},{value:"What commands are available?",id:"what-commands-are-available",children:[]},{value:"Folder Structure",id:"folder-structure",children:[{value:"Details of files and folders",id:"details-of-files-and-folders",children:[]}]}],C={toc:w};function x(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},C,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Pre-requisite")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Java is required on your development workstation to use Local Mocking in Amplify"))),Object(c.b)("h2",{id:"which-package-is-used"},"Which package is used?"),Object(c.b)("p",null,"If you go into the ",Object(c.b)("inlineCode",{parentName:"p"},"$HOME_DIR/.amplify/plugins.json")," file (where ",Object(c.b)("inlineCode",{parentName:"p"},"$HOME_DIR")," is your home directory), which lists all the plugins available on your system, you might notice the following lines at the end:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'"mock": [\n      {\n        "packageName": "amplify-util-mock",\n        "packageVersion": "3.27.7",\n        "packageLocation": "$HOME_DIR/.config/yarn/global/node_modules/amplify-util-mock",\n        "manifest": {\n          "name": "mock",\n          "type": "util",\n          "commands": [\n            "api",\n            "function",\n            "mock",\n            "storage",\n            "help"\n          ],\n          "eventHandlers": []\n        }\n      }\n    ]\n\n')),Object(c.b)("p",null,"This indicates that the ",Object(c.b)("inlineCode",{parentName:"p"},"amplify-util-mock")," package is used when we invoke mocking commands."),Object(c.b)("h2",{id:"what-commands-are-available"},"What commands are available?"),Object(c.b)("p",null,"As per the above JSON property, we can infer that the following commands are available for invocation:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# To mock the AWS AppSync API\namplify mock api\n\n# To mock AWS Lambda Functions\namplify mock function\n\n# To mock all available local resources\namplify mock\n\n# To mock storage solutions (Amazon S3 or Amazon DynamoDB)\namplify mock storage\n\n# Help!\namplify mock help\n")),Object(c.b)("h2",{id:"folder-structure"},"Folder Structure"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{2}","{2}":!0},"# /amplify-util-mock/src\n\n\u251c\u2500\u2500 amplify-plugin-index.ts # Handles the entry point\n\u251c\u2500\u2500 api                     # AppSync Mocking\n\u251c\u2500\u2500 CFNParser               # CloudFormation Template Parser\n\u251c\u2500\u2500 commands                # Handles the mock commands\n\u251c\u2500\u2500 __e2e__                 # E2E Tests\n\u251c\u2500\u2500 func                    # For mocking Lambda functions\n\u251c\u2500\u2500 index.ts                # Entry point of all commands\n\u251c\u2500\u2500 mockAll.ts              # Mocking all the available resources\n\u251c\u2500\u2500 storage                 # Mocking Storage\n\u251c\u2500\u2500 __tests__               # Tests\n\u2514\u2500\u2500 utils                   # Utility Programs\n")),Object(c.b)("h3",{id:"details-of-files-and-folders"},"Details of files and folders"),Object(c.b)(b,{defaultValue:"amplify-plugin-ts",values:[{label:"amplify-plugin-index.ts",value:"amplify-plugin-ts"},{label:"api",value:"api"},{label:"commands",value:"commands"},{label:"func",value:"func"},{label:"mockAll.ts",value:"mockall"},{label:"storage",value:"storage"}],mdxType:"Tabs"},Object(c.b)(f,{value:"amplify-plugin-ts",mdxType:"TabItem"},Object(c.b)(h.default,{mdxType:"TabAmplifyPlugin"})),Object(c.b)(f,{value:"api",mdxType:"TabItem"},Object(c.b)(y.default,{mdxType:"TabApi"})),Object(c.b)(f,{value:"commands",mdxType:"TabItem"},Object(c.b)(g.default,{mdxType:"TabCommands"})),Object(c.b)(f,{value:"func",mdxType:"TabItem"},Object(c.b)(O.default,{mdxType:"TabFunc"})),Object(c.b)(f,{value:"mockall",mdxType:"TabItem"},Object(c.b)(j.default,{mdxType:"TabMockall"})),Object(c.b)(f,{value:"storage",mdxType:"TabItem"},Object(c.b)(k.default,{mdxType:"TabStorage"}))))}x.isMDXComponent=!0},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=o.a.createContext({}),s=function(e){var t=o.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,b=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return a?o.a.createElement(b,c(c({ref:t},m),{},{components:a})):o.a.createElement(b,c({ref:t},m))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var m=2;m<i;m++)r[m]=a[m];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},112:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},125:function(e,t,a){"use strict";var n=a(0),o=a(126);t.a=function(){const e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},126:function(e,t,a){"use strict";var n=a(0);const o=Object(n.createContext)(void 0);t.a=o},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),i=(a(0),a(111)),r={},c={unversionedId:"amplify-util-mock/_shared/tab-commands",id:"amplify-util-mock/_shared/tab-commands",isDocsHomePage:!1,title:"tab-commands",description:"`bash {2}",source:"@site/docs/amplify-util-mock/_shared/tab-commands.md",slug:"/amplify-util-mock/_shared/tab-commands",permalink:"/amplify-cli-monorepo-tour/docs/amplify-util-mock/_shared/tab-commands",editUrl:"https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour/edit/main/docs/amplify-util-mock/_shared/tab-commands.md",version:"current"},l=[],m={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:"{2}","{2}":!0},"# amplify-util-mock/src/commands/mock\n\n\u251c\u2500\u2500 api.ts\n\u251c\u2500\u2500 function.ts\n\u251c\u2500\u2500 help.ts\n\u251c\u2500\u2500 mock.ts\n\u2514\u2500\u2500 storage.ts\n")),Object(i.b)("p",null,"This folder exposes a ",Object(i.b)("inlineCode",{parentName:"p"},"run()")," for each function which is called by ",Object(i.b)("inlineCode",{parentName:"p"},"amplify mock <command>"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Files:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"api.ts")," : For ",Object(i.b)("inlineCode",{parentName:"li"},"amplify mock api")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"fucntion.ts")," : For ",Object(i.b)("inlineCode",{parentName:"li"},"amplify mock function <functionName>")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"help.ts")," : For ",Object(i.b)("inlineCode",{parentName:"li"},"amplify mock help")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"mock.ts")," : For ",Object(i.b)("inlineCode",{parentName:"li"},"amplify mock")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"storage.ts")," : For ",Object(i.b)("inlineCode",{parentName:"li"},"amplify mock storage"))))}s.isMDXComponent=!0},56:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),i=(a(0),a(111)),r={},c={unversionedId:"amplify-util-mock/_shared/tab-storage",id:"amplify-util-mock/_shared/tab-storage",isDocsHomePage:!1,title:"tab-storage",description:"`bash {2}",source:"@site/docs/amplify-util-mock/_shared/tab-storage.md",slug:"/amplify-util-mock/_shared/tab-storage",permalink:"/amplify-cli-monorepo-tour/docs/amplify-util-mock/_shared/tab-storage",editUrl:"https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour/edit/main/docs/amplify-util-mock/_shared/tab-storage.md",version:"current"},l=[],m={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:"{2}","{2}":!0},"# amplify-util-mock/src/storage\n\n\u251c\u2500\u2500 index.ts\n\u2514\u2500\u2500 storage.ts\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Files:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"index.ts")," : It exposes the ",Object(i.b)("inlineCode",{parentName:"li"},"start()")," function which is called when ",Object(i.b)("inlineCode",{parentName:"li"},"amplify mock storage")," is executed."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"storage.ts")," : It exposes a class called ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"StorageTest"))," which is responsible for mocking S3 resources and start a mock storage server.")))}s.isMDXComponent=!0},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),i=(a(0),a(111)),r={},c={unversionedId:"amplify-util-mock/_shared/tab-amplify-plugin-ts",id:"amplify-util-mock/_shared/tab-amplify-plugin-ts",isDocsHomePage:!1,title:"tab-amplify-plugin-ts",description:"`javascript {6}",source:"@site/docs/amplify-util-mock/_shared/tab-amplify-plugin-ts.md",slug:"/amplify-util-mock/_shared/tab-amplify-plugin-ts",permalink:"/amplify-cli-monorepo-tour/docs/amplify-util-mock/_shared/tab-amplify-plugin-ts",editUrl:"https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour/edit/main/docs/amplify-util-mock/_shared/tab-amplify-plugin-ts.md",version:"current"},l=[],m={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{6}","{6}":!0},'export async function executeAmplifyCommand(context: any) {\n  const commandPath = path.normalize(\n    path.join(__dirname, "commands", pluginName, context.input.command)\n  );\n  const commandModule = await import(commandPath);\n  await commandModule.run(context);\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"executeAmplifyCommand")," determines the sub-command and calls the ",Object(i.b)("inlineCode",{parentName:"p"},"run()")," function in the appropriate file located in the ",Object(i.b)("inlineCode",{parentName:"p"},"commands/mock")," directory."))}s.isMDXComponent=!0},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),i=(a(0),a(111)),r={},c={unversionedId:"amplify-util-mock/_shared/tab-api",id:"amplify-util-mock/_shared/tab-api",isDocsHomePage:!1,title:"tab-api",description:"`bash {2}",source:"@site/docs/amplify-util-mock/_shared/tab-api.md",slug:"/amplify-util-mock/_shared/tab-api",permalink:"/amplify-cli-monorepo-tour/docs/amplify-util-mock/_shared/tab-api",editUrl:"https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour/edit/main/docs/amplify-util-mock/_shared/tab-api.md",version:"current"},l=[],m={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:"{2}","{2}":!0},"# amplify-util-mock/src/api\n\n\u251c\u2500\u2500 api.ts\n\u251c\u2500\u2500 index.ts\n\u251c\u2500\u2500 lambda-arn-to-config.ts\n\u251c\u2500\u2500 resolver-overrides.ts\n\u2514\u2500\u2500 run-graphql-transformer.ts\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Files:")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"api.ts")," : It exposes a class called ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"APITest"))," responsible for starting the Local AppSync simulator, as well as starting the GraphQL transformer. It also starts a local DynamoDB server which uses SQLite."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"index.ts")," : It exposes the global ",Object(i.b)("inlineCode",{parentName:"li"},"start()")," function which is called when ",Object(i.b)("inlineCode",{parentName:"li"},"amplify mock api")," is executed."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"lambda-arn-to-config.ts")," : Attempts to match an arn object against the array of lambdas configured in the project."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"run-graphql-transformer.ts")," : Executes the GraphQL transformer from the ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"$TSContext"))," object.")))}s.isMDXComponent=!0},59:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),i=(a(0),a(111)),r={},c={unversionedId:"amplify-util-mock/_shared/tab-func",id:"amplify-util-mock/_shared/tab-func",isDocsHomePage:!1,title:"tab-func",description:"`bash {2}",source:"@site/docs/amplify-util-mock/_shared/tab-func.md",slug:"/amplify-util-mock/_shared/tab-func",permalink:"/amplify-cli-monorepo-tour/docs/amplify-util-mock/_shared/tab-func",editUrl:"https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour/edit/main/docs/amplify-util-mock/_shared/tab-func.md",version:"current"},l=[],m={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:"{2}","{2}":!0},"# amplify-util-mock/src/func\n\n\u2514\u2500\u2500 index.ts\n")),Object(i.b)("p",null,"The file exposes the ",Object(i.b)("inlineCode",{parentName:"p"},"start()")," function which is responsible to mock Lambda functions locally. It uses the package ",Object(i.b)("inlineCode",{parentName:"p"},"amplify-category-function")," in order to execute operations."))}s.isMDXComponent=!0},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),i=(a(0),a(111)),r={},c={unversionedId:"amplify-util-mock/_shared/tab-mockall",id:"amplify-util-mock/_shared/tab-mockall",isDocsHomePage:!1,title:"tab-mockall",description:"The function mockAllCategories() first searches for all the locally available resources which can be mocked and then executes each mocking utility to mock each mockable resource.",source:"@site/docs/amplify-util-mock/_shared/tab-mockall.md",slug:"/amplify-util-mock/_shared/tab-mockall",permalink:"/amplify-cli-monorepo-tour/docs/amplify-util-mock/_shared/tab-mockall",editUrl:"https://github.com/MLH-Fellowship/amplify-cli-monorepo-tour/edit/main/docs/amplify-util-mock/_shared/tab-mockall.md",version:"current"},l=[],m={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The function ",Object(i.b)("inlineCode",{parentName:"p"},"mockAllCategories()")," first searches for all the locally available resources which can be mocked and then executes each mocking utility to mock each mockable resource."))}s.isMDXComponent=!0}}]);