---
id: kf-profiles-tenants-integration
title: ECP Tenants and Kubeflow Profiles Integration
---

### Multi-tenancy in Kubeflow 

Starting with v1.1.0 Kubeflow supports multi-user isolation, which applies access control over namespaces and user-created resources in a deployment. 

#### Key concepts 

**Administrator:** An administrator is someone who creates and maintains the Kubeflow cluster. This person has the permission to grant access permissions to others. 

**User:** A user is someone who has access to some set of resources in the cluster. A user needs to be granted access permissions by the administrator. 

**Profile:** A profile is a grouping of all Kubernetes clusters owned by a user. It is based on Kubernetes Namespace objects. 

**Owner:** A user who creates the profile manually or automatically by following registration flow. The owner has the permission to grant contributor permissions to other users. 

**Contributor:** A user who is able to work with a profile without being its owner. 

**Registration flow:** When a user signs into Kubeflow Dashboard without having a profile it’s proposed to create a new one automatically. It is enabled by default but can be disabled by the administrator. 

_Source:_ [Kubeflow v1.2 Docs](https://www.kubeflow.org/docs/components/multi-tenancy/overview/) 

### Multi-tenancy with Tenant-Profile integration 

When a new tenant is created, Tenant-Profile integration automatically creates a new Kubeflow profile.  

Owner of all tenant-based profiles is always a special user (example: “admin”). 

To grant contributors access to the profile an administrator needs to add them either to Tenant CR’s “userlist” field or user config map. 

Current version of Kubeflow does not support groups.  

Unless Registration flow is disabled user needs to create a personal profile to be able to switch namespace to tenant-based profile.  

### Adding Contributors with the config map 

To add contributors an administrator needs to create a config map in the tenant's namespace named “kubeflow-users-cm” with a line-separated list of users in the field “users”. 

Example: 
```
apiVersion: v1
kind: ConfigMap
metadata:
  name: kubeflow-users-cm
  namespace: <tenant_namespace>
data:
  users: |
    nkili
    dev1
    qa1
```

After config map is created role binding is created per user, for example: 

```
$ kubectl get rolebindings -n <tenant_namespace> | grep <user_name>
  user-<user_name>-clusterrole-edit-cf4b9chf5t ClusterRole/kubeflow-edit 17s
```
