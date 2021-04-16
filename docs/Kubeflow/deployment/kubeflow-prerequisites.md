---
id: kf-requirements
title: Kubeflow Requirements
---

**Supported Kubernetes versions:** 1.17, 1.18, 1.19, 1.20. 

#### Resources: 

The minimum number of nodes for compute cluster: 2 (1 primary, 1 secondary) 

The minimum core and memory resources required: 

- CPU Cores: 36 

- Memory (GB): 160 

#### Storage: 

In order to have storage for dynamic persistent volumes provisioning, the HPE Ezmeral Container Platform must be configured in either of the following ways: 

- **Embedded HPE Ezmeral Data Fabric:** This is configured at deployment installation time, as described in Platform Controller Setup. 

- **HPE Ezmeral Data Fabric for Kubernetes:** This uses a Data Fabric Kubernetes cluster that must be created and registered as described in Creating a New Data Fabric Cluster. 

#### Dynamic Volume Provisioning for Persistent Volumes 

Persistent Volumes (PVs) for Kubeflow are dynamically provisioned using default Storage Class.  

If **Embedded HPE Ezmeral Data Fabric** is configured, it provides “default” storage class for PVs provisioning: 

```
$ kubectl get sc

NAME                PROVISIONER                    RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE 
default (default)   com.mapr.csi-kdf               Delete          Immediate              false                  29m 
hpe-hdd-storage     kubernetes.io/no-provisioner   Delete          WaitForFirstConsumer   false                  13m 
hpe-nvme-storage    kubernetes.io/no-provisioner   Delete          WaitForFirstConsumer   false                  13m 
hpe-ssd-storage     kubernetes.io/no-provisioner   Delete          WaitForFirstConsumer   false                  13m 
local-path          rancher.io/local-path          Delete          WaitForFirstConsumer   false                  7m55s 
```

In case of using **HPE Ezmeral Data Fabric for Kubernetes** there is a storage class created, with the name of the DataFabric. For example: 

```
$ kubectl get sc 

NAME                PROVISIONER                    RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE 
hpe-hdd-storage     kubernetes.io/no-provisioner   Delete          WaitForFirstConsumer   false                  2d10h 
hpe-nvme-storage    kubernetes.io/no-provisioner   Delete          WaitForFirstConsumer   false                  2d10h 
hpe-ssd-storage     kubernetes.io/no-provisioner   Delete          WaitForFirstConsumer   false                  2d10h 
local-path          rancher.io/local-path          Delete          WaitForFirstConsumer   false                  2d10h 
test-df (default)   com.mapr.csi-kdf               Delete          Immediate              true                   2d10h 
```
