---
id: kf-installation-steps
title: Kubeflow Deployment
---

### Kubeflow Deployment on Kubernetes Cluster Creation 

Kubeflow can be deployed on Kubernetes cluster creation by specifying `Enable Kubeflow` checkbox in Application Configurations tab.   

#### Authentication Setup 

Kubeflow supports both Active Directory and LDAP platform authentication. 

Currently, there are some restrictions related to Dex component functionality: 

- Direct Bind type is not supported by Dex; 

- External Groups don’t influence authorization at all due to such behavior is not supported by Dex. A user that does not belong to the external group is able to login into Kubeflow dashboard: https://stackoverflow.com/q/58276195/9431509, https://github.com/dexidp/dex/issues/1562. 

#### Application Configurations Setup 

Select the following option from the list of applications: `Enable Kubeflow`. 

You may need to specify `Enable Spark` option as well in order to enable compute functionality. 

#### Air Gap 

If Air Gap is configured on the platform, notice that all the required images should be pushed to the registry before Kubeflow installation.  

See the list of images to be installed in the [relative section](mlops/docs/Kubeflow/architecture/kubeflow-images-list). 

### Validating the Result of Kubeflow Components Deployment 

When your Kubernetes cluster is ready run the following command on the master node to ensure kubeflow-operator pod is healthy:  

```
$ kubectl get pods -n kubeflow-operator  

NAME                                      READY   STATUS      RESTARTS   AGE 
dex-cm-generator-9xn97                    0/1     Completed   0          3m 
hpecpconfig-patch-vqzhm                   0/1     Completed   0          3m 
kubeflow-operator-68bdd75b8b-gpkzx        1/1     Running     0          3m 
local-path-provisioner-5fd8f5bbb8-hjtqq   1/1     Running     0          3m 
``` 

Confirm that Dex config map was created according to the authentication settings provided on cluster creation: 

`$ kubectl get secret dex-config-secret -n auth -oyaml`

Deployment of Kubeflow manifests may take 10-15 minutes. Check the pods are up and running using the command below: 

`$ kubectl get pods -n istio-system && kubectl get pods -n kubeflow && kubectl get pods -n auth`

The output should look like the following:

```
NAME                                                         READY   STATUS              RESTARTS   AGE 
authservice-0                                                1/1     Running             0          12m 
cluster-local-gateway-5898bc5c74-4t2t7                       1/1     Running             0          12m 
cluster-local-gateway-5898bc5c74-n5fng                       1/1     Running             0          11m 
grafana-74d78d8f5d-nh4lw                                     1/1     Running             0          12m 
istio-citadel-6dffd79d7-bmpn5                                1/1     Running             0          12m 
istio-galley-77cb9b44dc-d5fjx                                1/1     Running             2          12m 
istio-grafana-post-install-1.1.6-rm5jt                       0/1     Completed           0          12m 
istio-ingressgateway-7bb77f89b8-t84dd                        1/1     Running             0          12m 
istio-nodeagent-2sct6                                        1/1     Running             0          12m 
istio-nodeagent-chn2g                                        1/1     Running             0          12m 
istio-nodeagent-nggkw                                        1/1     Running             0          12m 
istio-pilot-67d94fc954-xtc66                                 2/2     Running             0          12m 
istio-policy-546596d4b4-5l66b                                2/2     Running             5          12m 
istio-security-post-install-release-1.3-latest-daily-7cjxh   0/1     Completed           0          12m 
istio-sidecar-injector-796b6454d9-nqlnz                      1/1     Running             0          12m 
istio-telemetry-58f9cd4bf5-nq8rv                             2/2     Running             5          12m 
kiali-79f6884d5c-n2hqm                                       1/1     Running             0          12m 
prometheus-78d4b86fb-sjc92                                   1/1     Running             1          12m 
NAME                                                        READY   STATUS    RESTARTS   AGE 
admission-webhook-deployment-69c9b46895-sv59d               1/1     Running   0          12m 
application-controller-stateful-set-0                       1/1     Running   0          12m 
argo-ui-65df8c7c84-9zlqr                                    1/1     Running   0          12m 
centraldashboard-5864774c5-d2tfg                            1/1     Running   0          12m 
jupyter-web-app-deployment-7bd87b558b-jnr78                 1/1     Running   0          12m 
katib-controller-7fcc95676b-7m8tr                           1/1     Running   1          12m 
katib-db-manager-85db457c64-zzn4q                           1/1     Running   0          12m 
katib-mysql-6c7f7fb869-9j9vz                                1/1     Running   0          12m 
katib-ui-65dc4cf6f5-gpxbh                                   1/1     Running   0          12m 
kfserving-controller-manager-0                              2/2     Running   0          12m 
metadata-db-7bfd9f7d4b-jh9xj                                1/1     Running   0          12m 
metadata-envoy-deployment-56647cf45-ptpgc                   1/1     Running   0          12m 
metadata-grpc-deployment-5989ffcc5-6sshd                    1/1     Running   1          12m 
minio-5ff57fbbb-gg2c7                                       1/1     Running   0          12m 
ml-pipeline-688c9d4947-7lfj7                                1/1     Running   4          12m 
ml-pipeline-persistenceagent-5c5c8b5686-l7plh               1/1     Running   3          12m 
ml-pipeline-scheduledworkflow-55c7dd5c86-dhk6z              1/1     Running   0          12m 
ml-pipeline-ui-66d4b66785-p4lgs                             1/1     Running   0          12m 
ml-pipeline-viewer-controller-deployment-6f588776c8-cczq2   1/1     Running   0          12m 
ml-pipeline-visualizationserver-699c5fd945-j78t8            1/1     Running   0          12m 
mysql-7fcd5d4b9c-k7qsp                                      1/1     Running   0          12m 
notebook-controller-deployment-75bdc8c9b8-hckfd             1/1     Running   0          12m 
profiles-deployment-67f8985678-4cdxk                        2/2     Running   0          22h 
pytorch-operator-6fcf6866cf-stz5n                           1/1     Running   10         12m 
seldon-controller-manager-6bf8b45656-zrq58                  1/1     Running   0          12m 
spartakus-volunteer-558f8bfd47-kb4cw                        1/1     Running   0          12m 
tf-job-operator-58477797f8-j4tcn                            1/1     Running   13         12m 
workflow-controller-64fd7cffc5-mbrmk                        1/1     Running   0          12m 
zeppelin-operator-864474fdd-9v878                           1/1     Running   0          12m 
NAME                   READY   STATUS    RESTARTS   AGE 
dex-58f559d86c-zsxdw   1/1     Running   1          12m 
```

### Kubeflow Deployment post Kubernetes Cluster Creation 

Kubeflow can be installed post Kubernetes cluster creation. Edit your cluster by selecting `Enable Kubeflow` check-box on Application Configurations tab. Save changes and wait until cluster is ready and Kubeflow services are up and running. 

### Uninstall Kubeflow 

In order to uninstall Kubeflow you need to remove your Kubernetes cluster.
