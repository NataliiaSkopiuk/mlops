# Introduction

### Airflow
Apache Airflow is a platform to programmatically author, schedule and monitor workflows. Airflow is an Apache incubator project that is mature and has a good community momentum.

![Airflow Multi Node](airflow-base.png)
	

### Kubernetes (k8s)	
Kubernetes(k8s) is a distributed workload orchestration system similar to Borg or Mesos. K8s can orchestrate containerized workloads on bare metal or on VMs and provides primitives modelled in a declarative way to manage the compute, memory, storage, networking, isolation, and life cycle. K8s can be accessed via kubectl(cli) or the APIs that consume the declarative specs. In the backend, the intent in the declarative specs are fulfilled by k8s core controllers that take actions (like create containers, network service, mount volume etc). k8s provides building blocks for stateless (Pods, Deployment) and stateful applications (statefulset) deployment. K8s controllers for these building blocks monitor the deployed instances to ensure cardinality, host to volume mapping across recreates, recovery on failures etc. 

### What is an Operator in Kubernetes
In case of some stateful applications, the declarative models provided by kubernetes are not sufficient to handle fault remediation, scaling with data integrity and availability. This is where an K8s Operator pattern excels. An operator encapsulates an application's operational domain knowledge and enable common day-N operations. An operator is an application-specific controller that extends the Kubernetes API to create, configure and manage stateful applications. An operator API is implemented by extending the existing k8s API with Custom Resources Definitions(CRDs) that declaratively describes the intent. Custom Resources are serializable as json and are stored in the API Server. The controller can watch these Custom Resources and take actions to move the system to the desired state. This enables meaningful extension of the k8s platform and make it suitable for complex stateful applications. 

`K8s Operator = K8s API +  CRD(declarative spec) + Custom Controller`

The goal is to ensure that Kubernetes works well as a substrate for deploying Airflow. 
# Airflow Operator Custom Resource (API)
The Airflow operator API is implemented by extending the k8s API with Custom Resources Definitions (CRDs) that declaratively describes the intent. Custom resources are serializable as json and are stored in the API Server. The Airflow controller watches these Custom Resources and take actions to move the Airflow cluster to the desired state. All CRDs inherit the contents of ObjectMeta and TypeMeta that are common to k8s resources. 
To improve cluster utilization and provide multiple users (in same trust domain) with some isolation, we are splitting the Airflow components into `AirflowBase` (common) and `AirflowCluster` (per user). `AirflowBase` includes MySQL, UI, NFS(DagStore). `AirflowCluster` includes Airflow Scheduler, Workers, Redis. This allows use cases where different users use different airflow plugins (opeartors, packages etc) in their setup.

The [API Design](https://github.com/GoogleCloudPlatform/airflow-operator/blob/master/docs/api.md) details the `AirflowBase` and `AirflowCluster` Custom Resource fields.

# Airflow Operator Custom Controllers

## AirflowBase Controller
AirflowBase controller  watches for AirflowBase CR and fulfils the intent. The intent translates to creation, updation or deletion of Statefulsets, Services, PVCs for MySQL, NFS.

![Airflow Base](airflow-base.png)

#### MySQL
If MySQLSpec is specified and .operator is False a simple statefulset with a single instance of MySQL is deployed. This is not recommended for production deployments. For production cases, use CloudSQL connected using SQLProxy.

TODO
If .operator is True, a MySQLCluster and MySQLBackupSchedule CRs are created to deploy a MySQL cluster. MySQL Operator needs to be installed for handling the Custom Resources. 

#### StatefulSet
MySQL, SQLProxy, NFS cluster are all deployed as stateful sets. StatefulSet creates the desired number of pods and ensures pod-hostname to volume mapping. This is useful when a pod dies and a new pod takes its place. The network identity of the new pod is set to that of the pod being replaced. Similarly the volume mounted on the old pod is moved to the new pod. 

#### EndPoint (Service)
The AirflowUI and NFS cluster are exposed via a service for use by the users and AirflowClusters.

#### Persistent Volumes and claims
NFS cluster and MySQL use PVCs for data durability in the face of temporary compute degradation. Persistent Volume(PV) matching the Persistent Volume Claim(PVC)  is used when pods are created. If a matching PV is not found, dynamic provisioning is used to provision a PV and attached to the PVC created by the StatefulSets. For an elastic scalable service, dynamic provisioning is prefered. 

#### Pods
StatefulSet creates Pods. For NFS and MySQL, Persistent Volumes are attached to the Pod based on the PVC in the StatefulSet spec.  The AirflowUI and SQL-Proxy pods are simple single purpose pods and do not typically need data persistence. In case of MySQL controller, the details of MySQL pods can be found here. 

## AirflowCluster Controller

AirflowCluster Controller watches for AirflowCluster CR and fulfils the intent. The intent translates to creation, updation or deletion of Statefulsets, PVCs for Airflow UI, Scheduler, Workers and Redis. This Custom Resource allows users to spin-up their own Airflow clusters for providing DAG level isolation between users. This enables multi-user (same trust domain, tenant) Airflow deployment. It also allows users to iterate faster with one-time use schedulers. Isolation in SQL is achieved by creating separate database for each cluster. The controller also handles updates to CRs. 

TODO
It could drain celery workers nodes and k8s executor pods to prepare for upgrade.
Restarting airflow UI and Scheduler on detecting new DAGs in the DAG folder.

![Airflow Cluster](airflow-base.png)

#### Redis
RedisSpec is required if .Spec.executor is celery. 
If .operator is False a simple statefulset with a single instance of Redis is deployed. Since redis is used as a non persistent cache, either can be used for production.

TODO
If .operator is True, a  RedisReplicas custom resource is created to deploy Redis. Redis Operator needs to be installed for handling the Custom Resources. 

#### StatefulSet
Airflow Scheduler and workers are deployed as stateful sets. StatefulSet creates the desired number of pods and ensures pod-name to volume mapping. The network identity of the new pod is set to that of the pod being replaced. Similarly the volume mounted on the old pod is moved to the new pod. 

#### EndPoint (service)
Since none of the services are exposed outside, Service definition is not needed. If in future we support clustered redis, we may use Service to front that cluster.

#### Persistent Volumes and claims
Airflow scheduler and workers could use PVCs for mounting data volumes that contain the DAGs. The PVCs need to be [RWX(read write many) or ROX(read only many)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes).

### Airflow Pods
Airflow Pods have the airflow container (scheduler,worker) and DAG Sidecar container. The DAG sidecar gets DAGs from the configured DAG source. In case of PVC as DAG source, the backing PV needs to be  mounted as RWX (RW many) or ROX (RO many). 

![Airflow Pods](airflow-base.png)


