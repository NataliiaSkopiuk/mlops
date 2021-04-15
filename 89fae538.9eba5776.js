(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(110)),s={id:"storage",title:"Using Storage"},l={unversionedId:"kd-user/storage",id:"kd-user/storage",isDocsHomePage:!1,title:"Using Storage",description:"KD clusters with storage",source:"@site/docs/kd-user/storage.md",slug:"/kd-user/storage",permalink:"/mlops/docs/kd-user/storage",editUrl:"https://github.com/nataliiaskopiuk/mlops/edit/master/docs/kd-user/storage.md",version:"current",sidebar:"someSidebar",previous:{title:"Using KD",permalink:"/mlops/docs/kd-user/using"},next:{title:"Configuring KD",permalink:"/mlops/docs/kd-user/configuring"}},c=[{value:"KD clusters with storage",id:"kd-clusters-with-storage",children:[]},{value:"Explore lab environment",id:"explore-lab-environment",children:[]},{value:"Deploy a cluster with default storage",id:"deploy-a-cluster-with-default-storage",children:[]},{value:"Deploy a cluster with custom storage",id:"deploy-a-cluster-with-custom-storage",children:[]}],i={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kd-clusters-with-storage"},"KD clusters with storage"),Object(o.b)("p",null,"Some of the YAML file basenames in the ",Object(o.b)("inlineCode",{parentName:"p"},"deploy/example_clusters/")," have a ",Object(o.b)("inlineCode",{parentName:"p"},"-stor")," suffix. This is just a convention used among these example files to indicate that the virtual cluster spec requests persistent storage. Several of the examples have both persistent and non-persistent variants."),Object(o.b)("p",null,"Note that if you are using persistent storage, you may wish to create a ",Object(o.b)("inlineCode",{parentName:"p"},"MLOpsConfig")," object (as described in the next section ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"configuring"}),"configuring KD"),"), for declaring a specific ",Object(o.b)("inlineCode",{parentName:"p"},"defaultStorageClassName")," value."),Object(o.b)("p",null,"Alternately, you can declare a ",Object(o.b)("inlineCode",{parentName:"p"},"storageClassName")," in the persistent storage spec section of each virtual cluster spec. If no storage class value is declared in either the MLOpsConfig or the virtual cluster, then the K8s default storage class will be used."),Object(o.b)("h2",{id:"explore-lab-environment"},"Explore lab environment"),Object(o.b)("p",null,"Let's explore the lab environment, first ",Object(o.b)("inlineCode",{parentName:"p"},"StorageClasses"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get storageclass\nNAME                 PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE\nstandard (default)   k8s.io/minikube-hostpath   Delete          Immediate           false                  11d\n")),Object(o.b)("p",null,"Next check if that are any ",Object(o.b)("inlineCode",{parentName:"p"},"PersistentVolumes"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get pv\nNo resources found\n")),Object(o.b)("p",null,"Finally, check for ",Object(o.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaims"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get pvc\nNo resources found in default namespace.\n")),Object(o.b)("h2",{id:"deploy-a-cluster-with-default-storage"},"Deploy a cluster with default storage"),Object(o.b)("p",null,"We will deploy a ubuntu18.04 cluster with storage."),Object(o.b)("p",null,"First we will change the configuration to support our lab environment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"change both instances of ",Object(o.b)("inlineCode",{parentName:"li"},'memory: "4Gi"')," to ",Object(o.b)("inlineCode",{parentName:"li"},'memory: "1Gi"')," "),Object(o.b)("li",{parentName:"ul"},"change both instances of ",Object(o.b)("inlineCode",{parentName:"li"},'CPU: "2"')," to ",Object(o.b)("inlineCode",{parentName:"li"},'CPU: "1"'))))),Object(o.b)("p",null,"Now deploy the cluster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl apply -f deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml\nMLOpscluster.MLOps.hpe.com/ubuntu18.04-persistent created\n")),Object(o.b)("p",null,"Let's take a look at the PersistentVolumes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get pv\nNAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                    STORAGECLASS   REASON   AGE\npvc-586fc6ec-6106-40b4-af06-1084b384e23f   40Gi       RWO            Delete           Bound    default/p-kdss-s4cqf-0   standard                4m58s\n")),Object(o.b)("p",null,"If we ",Object(o.b)("inlineCode",{parentName:"p"},"describe")," the pv created for our Ubuntu 18.04 instance, we can find the storage location:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl describe pv pvc-586fc6ec-6106-40b4-af06-1084b384e23f\n...\nSource:\n    Type:          HostPath (bare host directory volume)\n    Path:          /tmp/hostpath-provisioner/p-kdss-s4cqf-0\n    HostPathType:  \n...\n")),Object(o.b)("p",null,"Finally, we can check the host folder contents:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ls -l /tmp/hostpath-provisioner/p-kdss-s4cqf-0/\ntotal 8\ndrwxr-xr-x 69 root root 4096 Sep 16 11:34 etc\ndrwxr-xr-x  3 root root   22 Jul 16 11:15 home\n")),Object(o.b)("p",null,"We can see that the cluster's ",Object(o.b)("inlineCode",{parentName:"p"},"etc")," and ",Object(o.b)("inlineCode",{parentName:"p"},"home")," folders are persistent."),Object(o.b)("h2",{id:"deploy-a-cluster-with-custom-storage"},"Deploy a cluster with custom storage"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can declare a ",Object(o.b)("inlineCode",{parentName:"p"},"storageClassName")," in the persistent storage spec section of each virtual cluster spec. ")),Object(o.b)("p",null,"Here is the spec for ",Object(o.b)("inlineCode",{parentName:"p"},"deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: "MLOps.hpe.com/v1beta1"\nkind: "MLOpsCluster"\nmetadata:\n  name: "ubuntu18.04-persistent"\nspec:\n  app: ubuntu18x\n  roles:\n  - id: vanilla_ubuntu\n    members: 1\n    resources:\n      requests:\n        memory: "1Gi"\n        cpu: "1"\n      limits:\n        memory: "1Gi"\n        cpu: "1"\n    storage:\n      size: "40Gi"\n')),Object(o.b)("p",null,"The MLOpsCluster ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/bluek8s/MLOps/wiki/MLOpsCluster-Definition"}),"spec")," has a definition for ",Object(o.b)("inlineCode",{parentName:"p"},"PersistentStorageSpec"),".  Inside that element, are the fields ",Object(o.b)("inlineCode",{parentName:"p"},"size")," and ",Object(o.b)("inlineCode",{parentName:"p"},"storageClassName"),".  "),Object(o.b)("p",null,"It would appear that we can modify  ",Object(o.b)("inlineCode",{parentName:"p"},"deploy/example_clusters/cr-cluster-ubuntu18.04-stor.yaml")," to add the storageClassName as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: "MLOps.hpe.com/v1beta1"\nkind: "MLOpsCluster"\nmetadata:\n  name: "ubuntu18.04-persistent"\nspec:\n  app: ubuntu18x\n  roles:\n  - id: vanilla_ubuntu\n    members: 1\n    resources:\n      requests:\n        memory: "1Gi"\n        cpu: "1"\n      limits:\n        memory: "1Gi"\n        cpu: "1"\n    storage:\n      size: "40Gi"\n      storageClassName: "yourStorageClassName"\n')))}p.isMDXComponent=!0}}]);