(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=p(t),d=o,m=b["".concat(r,".").concat(d)]||b[d]||s[d]||l;return t?i.a.createElement(m,a(a({ref:n},c),{},{components:t})):i.a.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var c=2;c<l;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var o=t(2),i=t(6),l=(t(0),t(116)),r={id:"kf-installation-steps",title:"Kubeflow Deployment"},a={unversionedId:"Kubeflow/deployment/kf-installation-steps",id:"Kubeflow/deployment/kf-installation-steps",isDocsHomePage:!1,title:"Kubeflow Deployment",description:"Kubeflow Deployment on Kubernetes Cluster Creation",source:"@site/docs/Kubeflow/deployment/kubeflow-installation.md",slug:"/Kubeflow/deployment/kf-installation-steps",permalink:"/mlops/docs/Kubeflow/deployment/kf-installation-steps",editUrl:"https://github.com/nataliiaskopiuk/mlops/edit/master/docs/Kubeflow/deployment/kubeflow-installation.md",version:"current",sidebar:"someSidebar",previous:{title:"Kubeflow Requirements",permalink:"/mlops/docs/Kubeflow/deployment/kf-requirements"},next:{title:"List of Kubeflow images",permalink:"/mlops/docs/Kubeflow/deployment/kf-images-list"}},u=[{value:"Kubeflow Deployment on Kubernetes Cluster Creation",id:"kubeflow-deployment-on-kubernetes-cluster-creation",children:[]},{value:"Validating the Result of Kubeflow Components Deployment",id:"validating-the-result-of-kubeflow-components-deployment",children:[]},{value:"Kubeflow Deployment post Kubernetes Cluster Creation",id:"kubeflow-deployment-post-kubernetes-cluster-creation",children:[]},{value:"Uninstall Kubeflow",id:"uninstall-kubeflow",children:[]}],c={rightToc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"kubeflow-deployment-on-kubernetes-cluster-creation"},"Kubeflow Deployment on Kubernetes Cluster Creation"),Object(l.b)("p",null,"Kubeflow can be deployed on Kubernetes cluster creation by specifying ",Object(l.b)("inlineCode",{parentName:"p"},"Enable Kubeflow")," checkbox in Application Configurations tab.   "),Object(l.b)("h4",{id:"authentication-setup"},"Authentication Setup"),Object(l.b)("p",null,"Kubeflow supports both Active Directory and LDAP platform authentication. "),Object(l.b)("p",null,"Currently, there are some restrictions related to Dex component functionality: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Direct Bind type is not supported by Dex; ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"External Groups don\u2019t influence authorization at all due to such behavior is not supported by Dex. A user that does not belong to the external group is able to login into Kubeflow dashboard: ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://stackoverflow.com/q/58276195/9431509"}),"https://stackoverflow.com/q/58276195/9431509"),", ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/dexidp/dex/issues/1562"}),"https://github.com/dexidp/dex/issues/1562"),". "))),Object(l.b)("h4",{id:"application-configurations-setup"},"Application Configurations Setup"),Object(l.b)("p",null,"Select the following option from the list of applications: ",Object(l.b)("inlineCode",{parentName:"p"},"Enable Kubeflow"),". "),Object(l.b)("p",null,"You may need to specify ",Object(l.b)("inlineCode",{parentName:"p"},"Enable Spark")," option as well in order to enable compute functionality. "),Object(l.b)("h4",{id:"air-gap"},"Air Gap"),Object(l.b)("p",null,"If Air Gap is configured on the platform, notice that all the required images should be pushed to the registry before Kubeflow installation.  "),Object(l.b)("p",null,"See the list of images to be installed in the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/mlops/docs/Kubeflow/deployment/kf-images-list"}),"relative section"),". "),Object(l.b)("h3",{id:"validating-the-result-of-kubeflow-components-deployment"},"Validating the Result of Kubeflow Components Deployment"),Object(l.b)("p",null,"When your Kubernetes cluster is ready run the following command on the master node to ensure kubeflow-operator pod is healthy:  "),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"$ kubectl get pods -n kubeflow-operator  \n\nNAME                                      READY   STATUS      RESTARTS   AGE \ndex-cm-generator-9xn97                    0/1     Completed   0          3m \nhpecpconfig-patch-vqzhm                   0/1     Completed   0          3m \nkubeflow-operator-68bdd75b8b-gpkzx        1/1     Running     0          3m \nlocal-path-provisioner-5fd8f5bbb8-hjtqq   1/1     Running     0          3m \n")),Object(l.b)("p",null,"Confirm that Dex config map was created according to the authentication settings provided on cluster creation: "),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"$ kubectl get secret dex-config-secret -n auth -oyaml")),Object(l.b)("p",null,"Deployment of Kubeflow manifests may take 10-15 minutes. Check the pods are up and running using the command below: "),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"$ kubectl get pods -n istio-system && kubectl get pods -n kubeflow && kubectl get pods -n auth")),Object(l.b)("p",null,"The output should look like the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"NAME                                                         READY   STATUS              RESTARTS   AGE \nauthservice-0                                                1/1     Running             0          12m \ncluster-local-gateway-5898bc5c74-4t2t7                       1/1     Running             0          12m \ncluster-local-gateway-5898bc5c74-n5fng                       1/1     Running             0          11m \ngrafana-74d78d8f5d-nh4lw                                     1/1     Running             0          12m \nistio-citadel-6dffd79d7-bmpn5                                1/1     Running             0          12m \nistio-galley-77cb9b44dc-d5fjx                                1/1     Running             2          12m \nistio-grafana-post-install-1.1.6-rm5jt                       0/1     Completed           0          12m \nistio-ingressgateway-7bb77f89b8-t84dd                        1/1     Running             0          12m \nistio-nodeagent-2sct6                                        1/1     Running             0          12m \nistio-nodeagent-chn2g                                        1/1     Running             0          12m \nistio-nodeagent-nggkw                                        1/1     Running             0          12m \nistio-pilot-67d94fc954-xtc66                                 2/2     Running             0          12m \nistio-policy-546596d4b4-5l66b                                2/2     Running             5          12m \nistio-security-post-install-release-1.3-latest-daily-7cjxh   0/1     Completed           0          12m \nistio-sidecar-injector-796b6454d9-nqlnz                      1/1     Running             0          12m \nistio-telemetry-58f9cd4bf5-nq8rv                             2/2     Running             5          12m \nkiali-79f6884d5c-n2hqm                                       1/1     Running             0          12m \nprometheus-78d4b86fb-sjc92                                   1/1     Running             1          12m \nNAME                                                        READY   STATUS    RESTARTS   AGE \nadmission-webhook-deployment-69c9b46895-sv59d               1/1     Running   0          12m \napplication-controller-stateful-set-0                       1/1     Running   0          12m \nargo-ui-65df8c7c84-9zlqr                                    1/1     Running   0          12m \ncentraldashboard-5864774c5-d2tfg                            1/1     Running   0          12m \njupyter-web-app-deployment-7bd87b558b-jnr78                 1/1     Running   0          12m \nkatib-controller-7fcc95676b-7m8tr                           1/1     Running   1          12m \nkatib-db-manager-85db457c64-zzn4q                           1/1     Running   0          12m \nkatib-mysql-6c7f7fb869-9j9vz                                1/1     Running   0          12m \nkatib-ui-65dc4cf6f5-gpxbh                                   1/1     Running   0          12m \nkfserving-controller-manager-0                              2/2     Running   0          12m \nmetadata-db-7bfd9f7d4b-jh9xj                                1/1     Running   0          12m \nmetadata-envoy-deployment-56647cf45-ptpgc                   1/1     Running   0          12m \nmetadata-grpc-deployment-5989ffcc5-6sshd                    1/1     Running   1          12m \nminio-5ff57fbbb-gg2c7                                       1/1     Running   0          12m \nml-pipeline-688c9d4947-7lfj7                                1/1     Running   4          12m \nml-pipeline-persistenceagent-5c5c8b5686-l7plh               1/1     Running   3          12m \nml-pipeline-scheduledworkflow-55c7dd5c86-dhk6z              1/1     Running   0          12m \nml-pipeline-ui-66d4b66785-p4lgs                             1/1     Running   0          12m \nml-pipeline-viewer-controller-deployment-6f588776c8-cczq2   1/1     Running   0          12m \nml-pipeline-visualizationserver-699c5fd945-j78t8            1/1     Running   0          12m \nmysql-7fcd5d4b9c-k7qsp                                      1/1     Running   0          12m \nnotebook-controller-deployment-75bdc8c9b8-hckfd             1/1     Running   0          12m \nprofiles-deployment-67f8985678-4cdxk                        2/2     Running   0          22h \npytorch-operator-6fcf6866cf-stz5n                           1/1     Running   10         12m \nseldon-controller-manager-6bf8b45656-zrq58                  1/1     Running   0          12m \nspartakus-volunteer-558f8bfd47-kb4cw                        1/1     Running   0          12m \ntf-job-operator-58477797f8-j4tcn                            1/1     Running   13         12m \nworkflow-controller-64fd7cffc5-mbrmk                        1/1     Running   0          12m \nzeppelin-operator-864474fdd-9v878                           1/1     Running   0          12m \nNAME                   READY   STATUS    RESTARTS   AGE \ndex-58f559d86c-zsxdw   1/1     Running   1          12m \n")),Object(l.b)("h3",{id:"kubeflow-deployment-post-kubernetes-cluster-creation"},"Kubeflow Deployment post Kubernetes Cluster Creation"),Object(l.b)("p",null,"Kubeflow can be installed post Kubernetes cluster creation. Edit your cluster by selecting ",Object(l.b)("inlineCode",{parentName:"p"},"Enable Kubeflow")," check-box on Application Configurations tab. Save changes and wait until cluster is ready and Kubeflow services are up and running. "),Object(l.b)("h3",{id:"uninstall-kubeflow"},"Uninstall Kubeflow"),Object(l.b)("p",null,"In order to uninstall Kubeflow you need to remove your Kubernetes cluster."))}p.isMDXComponent=!0}}]);