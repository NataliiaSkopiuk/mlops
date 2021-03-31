(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(109)),c=n.p+"assets/images/director_concepts-cdaae0e71387ca01114775ccfbef6aae.png",p={id:"concepts",title:"Concepts"},i={unversionedId:"about-kd/concepts",id:"about-kd/concepts",isDocsHomePage:!1,title:"Concepts",description:"On this page we learn MLOps concepts.",source:"@site/docs/about-kd/concepts.md",slug:"/about-kd/concepts",permalink:"/mlops/docs/about-kd/concepts",editUrl:"https://github.com/kmathur2/mlops/edit/master/docs/about-kd/concepts.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/mlops/docs/about-kd/intro"},next:{title:"Introduction",permalink:"/mlops/docs/kd-user/intro"}},s=[],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"On this page we learn MLOps concepts."),Object(o.b)("img",{src:c}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"MLOps")," is deployed to a Kubernetes cluster.  We deployed MLOps in the lesson ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/lab/install3"}),"lab install - part3")," with ",Object(o.b)("inlineCode",{parentName:"p"},"make deploy"),".  On HPE Ezmeral Container Platform MLOps is deployed automatically when a Kubernetes Cluster is created."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"MLOps Applications")," are created by ",Object(o.b)("strong",{parentName:"p"},"Application Image author"),".  Applications can be thought of as Cluster blueprints. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"MLOps Clusters")," are instantiations of ",Object(o.b)("strong",{parentName:"p"},"MLOps Applications"),".  A ",Object(o.b)("strong",{parentName:"p"},"MLOps Cluster")," (also called ",Object(o.b)("strong",{parentName:"p"},"Virtual Cluster"),") is a single or multiple ",Object(o.b)("strong",{parentName:"p"},"node")," application.  In a multiple node application the ",Object(o.b)("strong",{parentName:"p"},"nodes")," work together with each ",Object(o.b)("strong",{parentName:"p"},"node")," having a predefined ",Object(o.b)("strong",{parentName:"p"},"Role")," within the cluster."),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"Node")," (also called a virtual node or instance) is a pod."),Object(o.b)("p",null,"The node ",Object(o.b)("strong",{parentName:"p"},"Role")," defines a set of applications or services and supporting files that run on a given node.  All ",Object(o.b)("strong",{parentName:"p"},"Roles")," in an ",Object(o.b)("strong",{parentName:"p"},"MLOps Application"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"can share the same Docker image or have their own Docker image."),Object(o.b)("li",{parentName:"ul"},"can have an application configuration package that is executed for each life-cycle event allowing the ",Object(o.b)("strong",{parentName:"li"},"node")," to be customised."),Object(o.b)("li",{parentName:"ul"},"can define zero or more ",Object(o.b)("strong",{parentName:"li"},"Services"),".")))}b.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,p(p({ref:t},s),{},{components:n})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);