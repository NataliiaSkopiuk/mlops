---
id: kiali-tutorial 
title: Istio Kiali
--- 

1. Describe kiali service to get the gateway port to access kiali UI: 

`$ kubectl describe svc kiali -n istio-system`

![Kiali Service](kiali.png)

2. Access the UI with default username and password: admin/admin. 

![Kiali Dashboard](kiali-ui.png)