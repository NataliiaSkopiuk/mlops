(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(116)),c={id:"install3",title:"Install - Part 3"},i={unversionedId:"lab/install3",id:"lab/install3",isDocsHomePage:!1,title:"Install - Part 3",description:"In this section we will deploy MLOps to minikube.",source:"@site/docs/lab/install3.md",slug:"/lab/install3",permalink:"/mlops/docs/lab/install3",editUrl:"https://github.com/nataliiaskopiuk/mlops/edit/master/docs/lab/install3.md",version:"current",sidebar:"someSidebar",previous:{title:"Install - Part 2",permalink:"/mlops/docs/lab/install2"},next:{title:"Advanced Usage",permalink:"/mlops/docs/lab/advanced"}},l=[{value:"Deploy MLOps",id:"deploy-mlops",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section we will deploy MLOps to minikube."),Object(o.b)("h2",{id:"deploy-mlops"},"Deploy MLOps"),Object(o.b)("p",null,"In the Lab Browser UI terminal, enter the command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ make deploy\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"deploy errors")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you receive an error with ",Object(o.b)("inlineCode",{parentName:"p"},"make deploy")," such as:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"...\n* Waiting for MLOps to start.......................\nMLOps failed to start -- no admission control hook created!\nmake: *** [deploy] Error 1\n")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods\n")),Object(o.b)("p",{parentName:"div"},"After a few minutes you should see MLOps running:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"NAME                            READY   STATUS    RESTARTS   AGE\nMLOps-7f9d95c9d5-5q6bv   1/1     Running   0          2m43s\n")),Object(o.b)("h1",Object(a.a)({parentName:"div"},{id:"advanced-debugging-optional"}),"Advanced debugging (optional)"),Object(o.b)("p",{parentName:"div"},"In this section we do more debugging to verify that the MLOps pod is running:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ kubectl get pods\nNAME                            READY   STATUS              RESTARTS   AGE\nMLOps-7f9d95c9d5-j8rh4   0/1     ContainerCreating   0          90s\n")),Object(o.b)("p",{parentName:"div"},"You can see that mine is still creating, so I run ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl describe")," to inspect its status:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'$ kubectl describe pod MLOps-7f9d95c9d5-j8rh4 \n...\nEvents:\n  Type    Reason     Age    From                            Message\n  ----    ------     ----   ----                            -------\n  Normal  Scheduled  3m1s   default-scheduler               Successfully assigned default/MLOps-7f9d95c9d5-j8rh4 to localhost.localdomain\n  Normal  Pulling    2m59s  kubelet, localhost.localdomain  Pulling image "bluek8s/MLOps:unstable"\n')),Object(o.b)("p",{parentName:"div"},"Deploy failed for me because the image pull was talking a long time. "),Object(o.b)("p",{parentName:"div"},"I checked a few more times with ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl describe")," until I saw:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Normal  Started    37s   kubelet, localhost.localdomain  Started container MLOps\n")),Object(o.b)("p",{parentName:"div"},"At which point I could run the following which completed successfully:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"make undeploy\nmake dedeploy\n")))),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"make deploy")," is successful, you should see something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"...\nMLOps pod name is MLOps-7f9d95c9d5-j8rh4\n")),Object(o.b)("p",null,"At this point, you  can  run ",Object(o.b)("inlineCode",{parentName:"p"}," kubectl get pods")," which should show output something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"NAME                            READY   STATUS    RESTARTS   AGE\nMLOps-7f9d95c9d5-j8rh4   1/1     Running   0          1m\n")),Object(o.b)("p",null,"You can run ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl get all")," to view all objects created when MLOps was deployed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"NAME                                READY   STATUS    RESTARTS   AGE\npod/MLOps-7f9d95c9d5-j8rh4   1/1     Running   2          11d\n\nNAME                             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE\nservice/MLOps-validator   ClusterIP   10.100.99.225   <none>        443/TCP   11d\nservice/kubernetes               ClusterIP   10.96.0.1       <none>        443/TCP   64d\n\nNAME                           READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/MLOps   1/1     1            1           11d\n\nNAME                                      DESIRED   CURRENT   READY   AGE\nreplicaset.apps/MLOps-7f9d95c9d5   1         1         1       11d\n")))}s.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);