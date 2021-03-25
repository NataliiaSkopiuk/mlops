(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var a=n(0),c=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),b=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,g=s["".concat(r,".").concat(d)]||s[d]||u[d]||i;return n?c.a.createElement(g,o(o({ref:t},p),{},{components:n})):c.a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),c=n(6),i=(n(0),n(108)),r={id:"configpackage",title:"Config Package"},o={unversionedId:"kd-img-dev/configpackage",id:"kd-img-dev/configpackage",isDocsHomePage:!1,title:"Config Package",description:"A config package allows the application author to write logic that gets executed by KubeDirector for certain lifecycle events.",source:"@site/docs/kd-img-dev/configpackage.md",slug:"/kd-img-dev/configpackage",permalink:"/mlops/docs/kd-img-dev/configpackage",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-img-dev/configpackage.md",version:"current",sidebar:"someSidebar",previous:{title:"Custom Docker Images 2",permalink:"/mlops/docs/kd-img-dev/customdockerimage2"},next:{title:"Config CLI",permalink:"/mlops/docs/kd-img-dev/configcli"}},l=[{value:"Explore an existing config package",id:"explore-an-existing-config-package",children:[]},{value:"Create a basic config package",id:"create-a-basic-config-package",children:[]},{value:"Run a local registry",id:"run-a-local-registry",children:[]},{value:"Build and Push image",id:"build-and-push-image",children:[]},{value:"Update the KD app image",id:"update-the-kd-app-image",children:[]},{value:"Deploy the KD app image",id:"deploy-the-kd-app-image",children:[]},{value:"Deploy the KD Cluster",id:"deploy-the-kd-cluster",children:[]},{value:"Exercise",id:"exercise",children:[{value:"Exercise 1",id:"exercise-1",children:[]},{value:"Exercise 2",id:"exercise-2",children:[]}]},{value:"Reference",id:"reference",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A config package allows the application author to write logic that gets executed by KubeDirector for certain lifecycle events."),Object(i.b)("p",null,"The supported lifecycle events are currently:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"configure"),Object(i.b)("li",{parentName:"ul"},"addnodes"),Object(i.b)("li",{parentName:"ul"},"delnodes")),Object(i.b)("h2",{id:"explore-an-existing-config-package"},"Explore an existing config package"),Object(i.b)("p",null,"To learn about config package, let's explore an application that has ",Object(i.b)("inlineCode",{parentName:"p"},"defaultConfigPackage")," defined."),Object(i.b)("p",null,"Open the file: ",Object(i.b)("inlineCode",{parentName:"p"},"deploy/example_catalog/cr-app-kafka55.json")," inside this file we see:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{   ...\n    "defaultImageRepoTag": "bluedata/bluedata/kafka:1.0",\n    "defaultConfigPackage": {\n      "packageURL": "file:///opt/configscripts/appconfig.tgz"\n    }\n    ...\n}\n')),Object(i.b)("p",null,"So the ",Object(i.b)("inlineCode",{parentName:"p"},"appconfig")," is embedded in the image in ",Object(i.b)("inlineCode",{parentName:"p"},"/opt/configscripts/"),".  "),Object(i.b)("p",null,"Let's explore that.  We can see the image tag is ",Object(i.b)("inlineCode",{parentName:"p"},"bluedata/kafka:1.0")," - download it to your local environment:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker pull bluedata/kafka:1.0 # This will take a while as it is several GB!!\n")),Object(i.b)("p",null,"Now start the container and login:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run --rm -it bluedata/kafka:1.0 /bin/bash\n[root@a6658abcf6f3 /]# cd /root\n[root@a6658abcf6f3 ~]# tar xvzf /opt/configscripts/appconfig.tgz\n._appconfig\nappconfig/\nappconfig/utils.sh\nappconfig/limits.conf\nappconfig/start_services.py\nappconfig/logging.sh\nappconfig/nsswitch.conf\nappconfig/._templates\nappconfig/templates/\nappconfig/startscript\nappconfig/templates/._Kafka_Zookeeper\nappconfig/templates/Kafka_Zookeeper/\n...\n")),Object(i.b)("p",null,"The file ",Object(i.b)("inlineCode",{parentName:"p"},"appconfig/startscript")," looks interesting - let's take a closer look.  "),Object(i.b)("p",null,"The startscript begins with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/env bash\n### Error for wrong option handled ###\nif [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then\n  echo "Valid values. So execute the later code"\nelse\n  echo "ERROR: Unknown command line option(s): \'$@\'"\n  exit 10\nfi\n...\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"startscript")," is a bash shell script.  When a bash shell script is executed command line arguments\nare passed to the script are passed in the variables ",Object(i.b)("inlineCode",{parentName:"p"},"$1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"$2"),", etc."),Object(i.b)("p",null,"This script is executed by KubeDirector.  It is executed for events in a KubeDirector virtual cluster lifecycle, e.g."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"At launch time all pods get ",Object(i.b)("inlineCode",{parentName:"li"},"startscript --configure")," event"),Object(i.b)("li",{parentName:"ul"},"During expansion:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"existing pods get ",Object(i.b)("inlineCode",{parentName:"li"},"startscript --addnodes")),Object(i.b)("li",{parentName:"ul"},"new pods get ",Object(i.b)("inlineCode",{parentName:"li"},"startscript --configure")))),Object(i.b)("li",{parentName:"ul"},"For shrinking, all nodes get ",Object(i.b)("inlineCode",{parentName:"li"},"startscript --delnodes"))),Object(i.b)("h2",{id:"create-a-basic-config-package"},"Create a basic config package"),Object(i.b)("p",null,"In this section we modify the centos application to log the action inside the container."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"previously based on ubuntu")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This section initially was based on the ubuntu image, but it appears that image\ndoesn't support appconfig at the moment.\nSee ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bluek8s/kubedirector/issues/417"}),"here")," for more info."))),Object(i.b)("p",null,"In a terminal, change into the ",Object(i.b)("inlineCode",{parentName:"p"},"deploy/example_catalog")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"cd deploy/example_catalog\n")),Object(i.b)("p",null,"Create the directories ",Object(i.b)("inlineCode",{parentName:"p"},"mycentos")," and ",Object(i.b)("inlineCode",{parentName:"p"},"mycentos/appconfig"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir -p mycentos/appconfig\n")),Object(i.b)("p",null,"Inside the ",Object(i.b)("inlineCode",{parentName:"p"},"appconfig")," directory, create a new file named ",Object(i.b)("inlineCode",{parentName:"p"},"startscript")," with the contents:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/env bash\n### Error for wrong option handled ###\nif [[ "$1" == "--addnodes" ]] || [[ "$1" == "--delnodes" ]] || [[ "$1" == "--configure" ]]; then\n  echo "Valid values. So execute the later code"\nelse\n  echo "ERROR: Unknown command line option(s): \'$@\'"\n  exit 10\nfi\n\necho "Starting configuration with option \'$1\' on node"\n')),Object(i.b)("p",null,"In the directory ",Object(i.b)("inlineCode",{parentName:"p"},"/deploy/example_catalog/mycentos"),", create a tar file with the appconfig:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"chmod +x appconfig/startscript\ntar cvzf appconfig.tgz appconfig/\n")),Object(i.b)("p",null,"Create or update the Dockerfile in the ",Object(i.b)("inlineCode",{parentName:"p"},"mycentos")," directory so that it now contains:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile"}),"FROM bluedata/centos7:4.1\n\nRUN ! test -d /opt/configscripts || mkdir /opt/configscripts/\n\nCOPY appconfig.tgz /opt/configscripts/\n")),Object(i.b)("h2",{id:"run-a-local-registry"},"Run a local registry"),Object(i.b)("p",null,"Check local docker registry is running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker ps -f name=registry:2\n")),Object(i.b)("p",null,"If it is not running, start it with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n")),Object(i.b)("h2",{id:"build-and-push-image"},"Build and Push image"),Object(i.b)("p",null,"In the terminal, change to the ",Object(i.b)("inlineCode",{parentName:"p"},"mycentos")," folder and build your custom image and push it to the local registry:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build --tag mycentos:1.0 .\n\ndocker tag mycentos:1.0 localhost:5000/mycentos:1.0\n")),Object(i.b)("p",null,"Next we push the image to our local registry:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker push localhost:5000/mycentos:1.0\n")),Object(i.b)("h2",{id:"update-the-kd-app-image"},"Update the KD app image"),Object(i.b)("p",null,"Ensure ",Object(i.b)("inlineCode",{parentName:"p"},"defaultConfigPackage")," in the file ",Object(i.b)("inlineCode",{parentName:"p"},"deploy/example_catalog/cr-app-centos7.json")," is set to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...\n    "defaultConfigPackage":  {\n        "packageURL": "file:///opt/configscripts/appconfig.tgz"\n    },\n    ...\n}\n')),Object(i.b)("p",null,"and ",Object(i.b)("inlineCode",{parentName:"p"},"defaultImageRepoTag")," is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...\n    "defaultImageRepoTag": "localhost:5000/mycentos:1.0"\n    ...\n}\n')),Object(i.b)("h2",{id:"deploy-the-kd-app-image"},"Deploy the KD app image"),Object(i.b)("p",null,"First ensure you aren't still running an Ubuntu KD clusters from the previous tutorial."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete kubedirectorclusters.kubedirector.hpe.com ubuntu18.04-persistent\n")),Object(i.b)("p",null,"Next undeploy the existing Centos 7 KD application image definition:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete kubedirectorapps.kubedirector.hpe.com centos7x\n")),Object(i.b)("p",null,"Deploy the new Centos KD application with your changes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f cr-app-centos7.json\n")),Object(i.b)("p",null,"Check the deployment was successful:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get kubedirectorapps.kubedirector.hpe.com\n")),Object(i.b)("p",null,"You can see my image has only just been deployed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"NAME                     AGE\n...\ntensorflow-gpu-jupyter   18h\ntraining-engine          18h\ncentos7x                 5s\n")),Object(i.b)("h2",{id:"deploy-the-kd-cluster"},"Deploy the KD Cluster"),Object(i.b)("p",null,"First modify ",Object(i.b)("inlineCode",{parentName:"p"},"../../example_clusters/cr-cluster-centos7.yaml")," - set memory attributes to ",Object(i.b)("inlineCode",{parentName:"p"},"1Gi"),"."),Object(i.b)("p",null,"Next we can deploy the KD Cluster:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f ../../example_clusters/cr-cluster-centos7.yaml\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"kubectl describe kubedirectorclusters.kubedirector.hpe.com centos7\n")),Object(i.b)("p",null,"You may need to run the above command several times until the Cluster is ",Object(i.b)("inlineCode",{parentName:"p"},"stable"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Events:\n  Type    Reason   Age                From          Message\n  ----    ------   ----               ----          -------\n  Normal  Cluster  31s                kubedirector  new\n  Normal  Role     31s                kubedirector  creating role{vanilla_centos}\n  Normal  Role     31s                kubedirector  changing replicas count for role{vanilla_centos}: 0 -> 1\n  Normal  Role     31s (x3 over 31s)  kubedirector  waiting for replicas count for role{vanilla_centos}: 0 -> 1\n  Normal  Member   1s                 kubedirector  initial config skipped for member{kdss-4p8kt-0} in role{vanilla_centos}\n  Normal  Role     1s                 kubedirector  notify skipped for members in role{vanilla_centos}\n  Normal  Cluster  1s                 kubedirector  stable\n")),Object(i.b)("p",null,"You should see a new pod:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nkdss-kzbwq-0                    1/1     Running   0          105s\nkubedirector-7f9d95c9d5-wjm2j   1/1     Running   0          47h\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ kubectl exec -it kdss-kzbwq-0 -- /bin/bash\n[root@kdss-kzbwq-0 /]# ls /opt/\nconfigscripts\n")),Object(i.b)("p",null,"Wait a few seconds and try ",Object(i.b)("inlineCode",{parentName:"p"},"ls /opt")," again - keep trying until you see a ",Object(i.b)("inlineCode",{parentName:"p"},"guestconfig")," folder:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@kdss-kzbwq-0 /]# ls /opt/\nconfigscripts  guestconfig\n[root@kdss-kzbwq-0 /]# ls /opt/guestconfig/\nappconfig/        configure.status  configure.stderr  configure.stdout\n")),Object(i.b)("p",null,"If we cat ",Object(i.b)("inlineCode",{parentName:"p"},"configure.stdout")," we should see the output from our startscript:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"[root@kdss-kzbwq-0 /]# cat /opt/guestconfig/configure.stdout \nValid values. So execute the later code\nStarting configuration with option '--configure' on node\n")),Object(i.b)("h2",{id:"exercise"},"Exercise"),Object(i.b)("h3",{id:"exercise-1"},"Exercise 1"),Object(i.b)("p",null,"Add a node to the cluster by increasing ",Object(i.b)("inlineCode",{parentName:"p"},"members")," from ",Object(i.b)("inlineCode",{parentName:"p"},"1")," to ",Object(i.b)("inlineCode",{parentName:"p"},"2")," in the file ",Object(i.b)("inlineCode",{parentName:"p"},"cr-cluster-centos7.yaml"),"."),Object(i.b)("p",null,"Apply the changes with ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl apply -f ../../example_clusters/")," and use ",Object(i.b)("inlineCode",{parentName:"p"},"kubectl describe ...")," to wait for the changes to finish."),Object(i.b)("p",null,"What do you see in the ",Object(i.b)("inlineCode",{parentName:"p"},"/opt/guestconfig/configure.stdout")," for both pods?"),Object(i.b)("h3",{id:"exercise-2"},"Exercise 2"),Object(i.b)("p",null,"The KD App Role ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition#role"}),"definition")," has an attribute ",Object(i.b)("inlineCode",{parentName:"p"},"eventList"),"."),Object(i.b)("p",null,"Delete your KD cluster and modify the eventList in ",Object(i.b)("inlineCode",{parentName:"p"},"deploy/example_catalog/cr-app-centos7.json")," so that your application reacts only to ",Object(i.b)("inlineCode",{parentName:"p"},"configure")," and ",Object(i.b)("inlineCode",{parentName:"p"},"delnodes"),"."),Object(i.b)("p",null,"Delete and apply the KD application definition for the centos7 app and create a new centos cluster with one member and then increase to two members.  Observe the events that are reported in ",Object(i.b)("inlineCode",{parentName:"p"},"/opt/guestconfig/configure.stdout"),"."),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Config Package ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bluek8s/kubedirector/wiki/KubeDirectorApp-Definition#configpackage"}),"specification")),Object(i.b)("li",{parentName:"ul"},"Config Python CLI ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bluek8s/configcli"}),"source code")),Object(i.b)("li",{parentName:"ul"},"Config Commands run by KD ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bluek8s/kubedirector/blob/v0.5.2/pkg/controller/kubedirectorcluster/types.go#L74-L101"}),"source code for v0.5.2"))))}b.isMDXComponent=!0}}]);