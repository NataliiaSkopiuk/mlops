(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{111:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(111)),i={id:"prometheus-tutorial",title:"Istio Prometheus"},c={unversionedId:"Kubeflow/k8s-admin-tutorials/prometheus-tutorial",id:"Kubeflow/k8s-admin-tutorials/prometheus-tutorial",isDocsHomePage:!1,title:"Istio Prometheus",description:"1. Check prometheus is created and available in istio-system namespace:",source:"@site/docs/Kubeflow/k8s-admin-tutorials/kubeflow-prometheus.md",slug:"/Kubeflow/k8s-admin-tutorials/prometheus-tutorial",permalink:"/mlops/docs/Kubeflow/k8s-admin-tutorials/prometheus-tutorial",editUrl:"https://github.com/nataliiaskopiuk/mlops/edit/master/docs/Kubeflow/k8s-admin-tutorials/kubeflow-prometheus.md",version:"current",sidebar:"someSidebar",previous:{title:"Kubeflow Components",permalink:"/mlops/docs/Kubeflow/architecture/kf-components"},next:{title:"Lab Overview",permalink:"/mlops/docs/lab/overview"}},l=[],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Check prometheus is created and available in istio-system namespace: ")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"$ kubectl get svc/prometheus -n istio-system")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Create a tunnel for port 9090 via SSH: ")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"$ ssh -L 9090:localhost:9090 root@<Master Node>")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Enable port forwarding: ")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"$ kubectl port-forward svc/prometheus -n istio-system 9090:9090")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After this you can access ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://127.0.0.1:9090/"}),"http://127.0.0.1:9090/")," from your local PC. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to Status > Targets and check that all targets are discovered and their statuses are monitored. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to Status > Service Discovery and check that all services are discovered and their statuses are monitored. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to Graph. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose any command you want and select it.  ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on \u2018Execute\u2019 button and observe a Graph tab."))))}p.isMDXComponent=!0}}]);