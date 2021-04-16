---
id: prometheus-tutorial 
title: Istio Prometheus
---

1. Check prometheus is created and available in istio-system namespace: 

`$ kubectl get svc/prometheus -n istio-system`

2. Create a tunnel for port 9090 via SSH: 

`$ ssh -L 9090:localhost:9090 root@<Master Node>`

3. Enable port forwarding: 

`$ kubectl port-forward svc/prometheus -n istio-system 9090:9090`

4. After this you can access http://127.0.0.1:9090/ from your local PC. 

5. Navigate to Status > Targets and check that all targets are discovered and their statuses are monitored. 

6. Navigate to Status > Service Discovery and check that all services are discovered and their statuses are monitored. 

7. Navigate to Graph. 

8. Choose any command you want and select it.  

9. Click on ‘Execute’ button and observe a Graph tab.
