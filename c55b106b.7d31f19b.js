(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(n),j=a,m=u["".concat(l,".").concat(j)]||u[j]||O[j]||b;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=j;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<b;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return i}));var a=n(2),r=n(6),b=(n(0),n(110)),l={},c={unversionedId:"Kubeflow/architecture/kubeflow-components",id:"Kubeflow/architecture/kubeflow-components",isDocsHomePage:!1,title:"kubeflow-components",description:"Kubeflow Components",source:"@site/docs/Kubeflow/architecture/kubeflow-components.md",slug:"/Kubeflow/architecture/kubeflow-components",permalink:"/mlops/docs/Kubeflow/architecture/kubeflow-components",editUrl:"https://github.com/nataliiaskopiuk/mlops/edit/master/docs/Kubeflow/architecture/kubeflow-components.md",version:"current"},o=[{value:"Kubeflow Components",id:"kubeflow-components",children:[]}],p={rightToc:o};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"kubeflow-components"},"Kubeflow Components"),Object(b.b)("p",null,"Current Kubeflow Operator version is ",Object(b.b)("inlineCode",{parentName:"p"},"1.2"),"."),Object(b.b)("p",null,"The following table lists the components deployed by Kubeflow operator:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Component"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Argo"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.3.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dex"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.22.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Grafana"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6.0.2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Istio*"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.3.1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Jupyter Web Application"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Katib"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"v1beta1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kiali"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.4.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kfserving"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.3.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kubeflow Dashboard"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ML Metadata"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0.21.1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Notebook Controller"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kf-ecp-5.3.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Kubeflow Pipelines (KFP)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0.4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Profile Controller"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"kf-ecp-5.3.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Prometheus"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2.24.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pytorch"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Seldon"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.4.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Spartakus"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.1.0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tensorflow"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0.0")))),Object(b.b)("p",null,"*- Istio 1.9 is supported as well. To deploy Kubeflow with Istio 1.9 refer to the following ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/HPEEzmeral/kubeflow/tree/kf1.2-istio1.9"}),"repository"),"."))}i.isMDXComponent=!0}}]);