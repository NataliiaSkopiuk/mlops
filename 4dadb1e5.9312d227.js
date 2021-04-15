(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var o=r(0),s=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=s.a.createContext({}),d=function(e){var t=s.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},f=s.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=o,b=u["".concat(a,".").concat(f)]||u[f]||p[f]||n;return r?s.a.createElement(b,i(i({ref:t},c),{},{components:r})):s.a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<n;c++)a[c]=r[c];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},121:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/airflow-base-50d2b046e0aa42312b2b5c01f9500399.png"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var o=r(2),s=r(6),n=(r(0),r(110)),a={},i={unversionedId:"Airflow/architecture/airflow-basics",id:"Airflow/architecture/airflow-basics",isDocsHomePage:!1,title:"airflow-basics",description:"Introduction",source:"@site/docs/Airflow/architecture/airflow-basics.md",slug:"/Airflow/architecture/airflow-basics",permalink:"/mlops/docs/Airflow/architecture/airflow-basics",editUrl:"https://github.com/nataliiaskopiuk/mlops/edit/master/docs/Airflow/architecture/airflow-basics.md",version:"current",sidebar:"someSidebar",previous:{title:"Prerequisites",permalink:"/mlops/docs/prereqs"},next:{title:"kubeflow-components",permalink:"/mlops/docs/Kubeflow/architecture/kubeflow-components"}},l=[{value:"Airflow",id:"airflow",children:[]},{value:"Kubernetes (k8s)",id:"kubernetes-k8s",children:[]},{value:"What is an Operator in Kubernetes",id:"what-is-an-operator-in-kubernetes",children:[]},{value:"AirflowBase Controller",id:"airflowbase-controller",children:[]},{value:"AirflowCluster Controller",id:"airflowcluster-controller",children:[{value:"Airflow Pods",id:"airflow-pods",children:[]}]}],c={rightToc:l};function d(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"introduction"},"Introduction"),Object(n.b)("h3",{id:"airflow"},"Airflow"),Object(n.b)("p",null,"Apache Airflow is a platform to programmatically author, schedule and monitor workflows. Airflow is an Apache incubator project that is mature and has a good community momentum."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Airflow Multi Node",src:r(121).default})),Object(n.b)("h3",{id:"kubernetes-k8s"},"Kubernetes (k8s)"),Object(n.b)("p",null,"Kubernetes(k8s) is a distributed workload orchestration system similar to Borg or Mesos. K8s can orchestrate containerized workloads on bare metal or on VMs and provides primitives modelled in a declarative way to manage the compute, memory, storage, networking, isolation, and life cycle. K8s can be accessed via kubectl(cli) or the APIs that consume the declarative specs. In the backend, the intent in the declarative specs are fulfilled by k8s core controllers that take actions (like create containers, network service, mount volume etc). k8s provides building blocks for stateless (Pods, Deployment) and stateful applications (statefulset) deployment. K8s controllers for these building blocks monitor the deployed instances to ensure cardinality, host to volume mapping across recreates, recovery on failures etc. "),Object(n.b)("h3",{id:"what-is-an-operator-in-kubernetes"},"What is an Operator in Kubernetes"),Object(n.b)("p",null,"In case of some stateful applications, the declarative models provided by kubernetes are not sufficient to handle fault remediation, scaling with data integrity and availability. This is where an K8s Operator pattern excels. An operator encapsulates an application's operational domain knowledge and enable common day-N operations. An operator is an application-specific controller that extends the Kubernetes API to create, configure and manage stateful applications. An operator API is implemented by extending the existing k8s API with Custom Resources Definitions(CRDs) that declaratively describes the intent. Custom Resources are serializable as json and are stored in the API Server. The controller can watch these Custom Resources and take actions to move the system to the desired state. This enables meaningful extension of the k8s platform and make it suitable for complex stateful applications. "),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"K8s Operator = K8s API +  CRD(declarative spec) + Custom Controller")),Object(n.b)("p",null,"The goal is to ensure that Kubernetes works well as a substrate for deploying Airflow. "),Object(n.b)("h1",{id:"airflow-operator-custom-resource-api"},"Airflow Operator Custom Resource (API)"),Object(n.b)("p",null,"The Airflow operator API is implemented by extending the k8s API with Custom Resources Definitions (CRDs) that declaratively describes the intent. Custom resources are serializable as json and are stored in the API Server. The Airflow controller watches these Custom Resources and take actions to move the Airflow cluster to the desired state. All CRDs inherit the contents of ObjectMeta and TypeMeta that are common to k8s resources.\nTo improve cluster utilization and provide multiple users (in same trust domain) with some isolation, we are splitting the Airflow components into ",Object(n.b)("inlineCode",{parentName:"p"},"AirflowBase")," (common) and ",Object(n.b)("inlineCode",{parentName:"p"},"AirflowCluster")," (per user). ",Object(n.b)("inlineCode",{parentName:"p"},"AirflowBase")," includes MySQL, UI, NFS(DagStore). ",Object(n.b)("inlineCode",{parentName:"p"},"AirflowCluster")," includes Airflow Scheduler, Workers, Redis. This allows use cases where different users use different airflow plugins (opeartors, packages etc) in their setup."),Object(n.b)("p",null,"The ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/GoogleCloudPlatform/airflow-operator/blob/master/docs/api.md"}),"API Design")," details the ",Object(n.b)("inlineCode",{parentName:"p"},"AirflowBase")," and ",Object(n.b)("inlineCode",{parentName:"p"},"AirflowCluster")," Custom Resource fields."),Object(n.b)("h1",{id:"airflow-operator-custom-controllers"},"Airflow Operator Custom Controllers"),Object(n.b)("h2",{id:"airflowbase-controller"},"AirflowBase Controller"),Object(n.b)("p",null,"AirflowBase controller  watches for AirflowBase CR and fulfils the intent. The intent translates to creation, updation or deletion of Statefulsets, Services, PVCs for MySQL, NFS."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Airflow Base",src:r(121).default})),Object(n.b)("h4",{id:"mysql"},"MySQL"),Object(n.b)("p",null,"If MySQLSpec is specified and .operator is False a simple statefulset with a single instance of MySQL is deployed. This is not recommended for production deployments. For production cases, use CloudSQL connected using SQLProxy."),Object(n.b)("p",null,"TODO\nIf .operator is True, a MySQLCluster and MySQLBackupSchedule CRs are created to deploy a MySQL cluster. MySQL Operator needs to be installed for handling the Custom Resources. "),Object(n.b)("h4",{id:"statefulset"},"StatefulSet"),Object(n.b)("p",null,"MySQL, SQLProxy, NFS cluster are all deployed as stateful sets. StatefulSet creates the desired number of pods and ensures pod-hostname to volume mapping. This is useful when a pod dies and a new pod takes its place. The network identity of the new pod is set to that of the pod being replaced. Similarly the volume mounted on the old pod is moved to the new pod. "),Object(n.b)("h4",{id:"endpoint-service"},"EndPoint (Service)"),Object(n.b)("p",null,"The AirflowUI and NFS cluster are exposed via a service for use by the users and AirflowClusters."),Object(n.b)("h4",{id:"persistent-volumes-and-claims"},"Persistent Volumes and claims"),Object(n.b)("p",null,"NFS cluster and MySQL use PVCs for data durability in the face of temporary compute degradation. Persistent Volume(PV) matching the Persistent Volume Claim(PVC)  is used when pods are created. If a matching PV is not found, dynamic provisioning is used to provision a PV and attached to the PVC created by the StatefulSets. For an elastic scalable service, dynamic provisioning is prefered. "),Object(n.b)("h4",{id:"pods"},"Pods"),Object(n.b)("p",null,"StatefulSet creates Pods. For NFS and MySQL, Persistent Volumes are attached to the Pod based on the PVC in the StatefulSet spec.  The AirflowUI and SQL-Proxy pods are simple single purpose pods and do not typically need data persistence. In case of MySQL controller, the details of MySQL pods can be found here. "),Object(n.b)("h2",{id:"airflowcluster-controller"},"AirflowCluster Controller"),Object(n.b)("p",null,"AirflowCluster Controller watches for AirflowCluster CR and fulfils the intent. The intent translates to creation, updation or deletion of Statefulsets, PVCs for Airflow UI, Scheduler, Workers and Redis. This Custom Resource allows users to spin-up their own Airflow clusters for providing DAG level isolation between users. This enables multi-user (same trust domain, tenant) Airflow deployment. It also allows users to iterate faster with one-time use schedulers. Isolation in SQL is achieved by creating separate database for each cluster. The controller also handles updates to CRs. "),Object(n.b)("p",null,"TODO\nIt could drain celery workers nodes and k8s executor pods to prepare for upgrade.\nRestarting airflow UI and Scheduler on detecting new DAGs in the DAG folder."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Airflow Cluster",src:r(121).default})),Object(n.b)("h4",{id:"redis"},"Redis"),Object(n.b)("p",null,"RedisSpec is required if .Spec.executor is celery.\nIf .operator is False a simple statefulset with a single instance of Redis is deployed. Since redis is used as a non persistent cache, either can be used for production."),Object(n.b)("p",null,"TODO\nIf .operator is True, a  RedisReplicas custom resource is created to deploy Redis. Redis Operator needs to be installed for handling the Custom Resources. "),Object(n.b)("h4",{id:"statefulset-1"},"StatefulSet"),Object(n.b)("p",null,"Airflow Scheduler and workers are deployed as stateful sets. StatefulSet creates the desired number of pods and ensures pod-name to volume mapping. The network identity of the new pod is set to that of the pod being replaced. Similarly the volume mounted on the old pod is moved to the new pod. "),Object(n.b)("h4",{id:"endpoint-service-1"},"EndPoint (service)"),Object(n.b)("p",null,"Since none of the services are exposed outside, Service definition is not needed. If in future we support clustered redis, we may use Service to front that cluster."),Object(n.b)("h4",{id:"persistent-volumes-and-claims-1"},"Persistent Volumes and claims"),Object(n.b)("p",null,"Airflow scheduler and workers could use PVCs for mounting data volumes that contain the DAGs. The PVCs need to be ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"}),"RWX(read write many) or ROX(read only many)"),"."),Object(n.b)("h3",{id:"airflow-pods"},"Airflow Pods"),Object(n.b)("p",null,"Airflow Pods have the airflow container (scheduler,worker) and DAG Sidecar container. The DAG sidecar gets DAGs from the configured DAG source. In case of PVC as DAG source, the backing PV needs to be  mounted as RWX (RW many) or ROX (RO many). "),Object(n.b)("p",null,Object(n.b)("img",{alt:"Airflow Pods",src:r(121).default})))}d.isMDXComponent=!0}}]);