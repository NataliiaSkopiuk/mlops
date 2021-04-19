---
id: grafana-tutorial 
title: Istio Grafana
---

1. Describe grafana service to extract gateway URL:

`[root@ip-10-0-1-114 ~]# kubectl describe svc grafana -n istio-system`

![Grafana Service](grafana.png)

2. Access grafana UI.

![Grafana Dashboard](grafana-ui.png)