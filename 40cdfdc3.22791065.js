(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{119:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(119)),i={id:"intro",title:"Introduction"},c={unversionedId:"about-kd/intro",id:"about-kd/intro",isDocsHomePage:!1,title:"Introduction",description:"In this section we learn the goals of KubeDirector.",source:"@site/docs/about-kd/intro.md",slug:"/about-kd/intro",permalink:"/mlops/docs/about-kd/intro",editUrl:"https://github.com/nataliiaskopiuk/mlops/edit/master/docs/about-kd/intro.md",version:"current",sidebar:"someSidebar",previous:{title:"Kubeflow Known Issues",permalink:"/mlops/docs/Kubeflow/known-issues/kf-known-issues"},next:{title:"Concepts",permalink:"/mlops/docs/about-kd/concepts"}},u=[{value:"KubeDirector goals",id:"kubedirector-goals",children:[]}],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this section we learn the goals of KubeDirector."),Object(a.b)("p",null,"We also cover KubeDirector concepts and terminology."),Object(a.b)("h2",{id:"kubedirector-goals"},"KubeDirector goals"),Object(a.b)("p",null,"The following video provides an overview of Kubedirector:"),Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/X2kEk5wLe9g",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(a.b)("hr",null),Object(a.b)("p",null,"Kubedirector is itself a Kubernetes operator. It is designed to make it easier to launch and manage applications on Kubernetes. KD provides a framework and a set of commonly used Operator functionality.  It is not a replacement for Operators in all cases, rather it is tool so that many applications can be deployed and managed on Kubernetes without the need for writing an application specfic Operator."))}s.isMDXComponent=!0}}]);