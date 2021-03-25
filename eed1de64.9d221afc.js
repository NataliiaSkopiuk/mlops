(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||s[u]||o;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(108)),c={id:"install3",title:"Install - Part 3"},i={unversionedId:"lab/install3",id:"lab/install3",isDocsHomePage:!1,title:"Install - Part 3",description:"In this section we will deploy KubeDirector to minikube.",source:"@site/docs/lab/install3.md",slug:"/lab/install3",permalink:"/mlops/docs/lab/install3",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/lab/install3.md",version:"current",sidebar:"someSidebar",previous:{title:"Install - Part 2",permalink:"/mlops/docs/lab/install2"},next:{title:"Advanced Usage",permalink:"/mlops/docs/lab/advanced"}},l=[{value:"Deploy KubeDirector",id:"deploy-kubedirector",children:[]}],b={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section we will deploy KubeDirector to minikube."),Object(o.b)("h2",{id:"deploy-kubedirector"},"Deploy KubeDirector"),Object(o.b)("p",null,"In the Lab Browser UI terminal, enter the command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ make deploy\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"deploy errors")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you receive an error with ",Object(o.b)("inlineCode",{parentName:"p"},"make deploy")," such as:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"...\n* Waiting for KubeDirector to start.......................\nKubeDirector failed to start -- no admission control hook created!\nmake: *** [deploy] Error 1\n")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get pods\n")),Object(o.b)("p",{parentName:"div"},"After a few minutes you should see KubeDirector running:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"NAME                            READY   STATUS    RESTARTS   AGE\nkubedirector-7f9d95c9d5-5q6bv   1/1     Running   0          2m43s\n")),Object(o.b)("h1",Object(r.a)({parentName:"div"},{id:"advanced-debugging-optional"}),"Advanced debugging (optional)"),Object(o.b)("p",{parentName:"div"},"In this section we do more debugging to verify that the kubedirector pod is running:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get pods\nNAME                            READY   STATUS              RESTARTS   AGE\nkubedirector-7f9d95c9d5-j8rh4   0/1     ContainerCreating   0          90s\n")),Object(o.b)("p",{parentName:"div"},"You can see that mine is still creating, so I run ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl describe")," to inspect its status:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ kubectl describe pod kubedirector-7f9d95c9d5-j8rh4 \n...\nEvents:\n  Type    Reason     Age    From                            Message\n  ----    ------     ----   ----                            -------\n  Normal  Scheduled  3m1s   default-scheduler               Successfully assigned default/kubedirector-7f9d95c9d5-j8rh4 to localhost.localdomain\n  Normal  Pulling    2m59s  kubelet, localhost.localdomain  Pulling image "bluek8s/kubedirector:unstable"\n')),Object(o.b)("p",{parentName:"div"},"Deploy failed for me because the image pull was talking a long time. "),Object(o.b)("p",{parentName:"div"},"I checked a few more times with ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl describe")," until I saw:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Normal  Started    37s   kubelet, localhost.localdomain  Started container kubedirector\n")),Object(o.b)("p",{parentName:"div"},"At which point I could run the following which completed successfully:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"make undeploy\nmake dedeploy\n")))),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"make deploy")," is successful, you should see something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"...\nKubeDirector pod name is kubedirector-7f9d95c9d5-j8rh4\n")),Object(o.b)("p",null,"At this point, you  can  run ",Object(o.b)("inlineCode",{parentName:"p"}," kubectl get pods")," which should show output something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"NAME                            READY   STATUS    RESTARTS   AGE\nkubedirector-7f9d95c9d5-j8rh4   1/1     Running   0          1m\n")),Object(o.b)("p",null,"You can run ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl get all")," to view all objects created when KubeDirector was deployed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"NAME                                READY   STATUS    RESTARTS   AGE\npod/kubedirector-7f9d95c9d5-j8rh4   1/1     Running   2          11d\n\nNAME                             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE\nservice/kubedirector-validator   ClusterIP   10.100.99.225   <none>        443/TCP   11d\nservice/kubernetes               ClusterIP   10.96.0.1       <none>        443/TCP   64d\n\nNAME                           READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/kubedirector   1/1     1            1           11d\n\nNAME                                      DESIRED   CURRENT   READY   AGE\nreplicaset.apps/kubedirector-7f9d95c9d5   1         1         1       11d\n")))}d.isMDXComponent=!0}}]);