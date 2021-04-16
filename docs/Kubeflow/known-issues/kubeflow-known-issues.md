---
id: kf-known-issues
title: Kubeflow Known Issues 
---

1. Katib: Suggestion pods running after experiment completes https://github.com/kubeflow/katib/issues/1043.

2. Kubeflow Pipelines UI does not render correctly in Firefox browser. It is recommended to use Chrome. 

3. Kubeflow Pipelines do not support multi-user isolation: https://github.com/kubeflow/pipelines/issues/1223#issuecomment-656507073.

4. Sometimes `v1beta1.webhook.cert-manager.ioapiservice` is unavailable for some time after deploying kubeflow services. Restarting that apiservice makes it available: 

`$ kubectl delete apiservices v1beta1.webhook.cert-manager.io`

5. There is issue with istio authorization for HTTP traffic. KFServing predict request returns `503 Service Unavailable`: https://github.com/kubeflow/kfserving/issues/820.

6. LDAP/AD external groups don’t influence authorization at all due to such behavior is not supported by Dex. A user that does not belong to the external group is able to login into Kubeflow dashboard: https://stackoverflow.com/q/58276195/9431509, https://github.com/dexidp/dex/issues/1562. Moreover Kubeflow doesn't support groups: https://github.com/kubeflow/kubeflow/issues/4188. 

7. Katib with K8S 1.19 and higher: https://github.com/kubeflow/kfserving/issues/1197, https://github.com/kubeflow/katib/issues/1395.
