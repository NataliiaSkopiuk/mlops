---
id: gh-issue-sum-tutorial-p2 
title: GitHub Issue Summarization Example. Part 2
---

## Serving Keras Model with Seldon 

The following tutorial is based on the example [here](https://github.com/mapr/kubeflow-examples/blob/master/github_issue_summarization/03_serving_the_model.md). 

This tutorial serves the model trained in [GitHub Issue Summarization Example. Part 1](kubeflow-github-issue-sum-training.md) tutorial. Run that tutorial if you have not done so already. 

Upload the [kubeflow-tutorial.zip](kubeflow_tutorials_5.3.zip) if you have not done that before.

For this tutorial use already pushed image: 
   
`idzikovsky/sandbox:seldon-issuesum` 
 
1. In the notebook terminal apply seldon serving .yaml file: 

   `$ kubectl apply -f seldon-issue-sum-deployment.yaml`
 

2. Check seldon deployment is created:

   ```
   $ kubectl get sdep 

   NAME                  AGE 
   issue-summarization   13s 
   ```


3. Check the pods are running: 

   ```
   $ kubectl get pods | grep classifier

   issue-summarization-example-0-classifier-86db87f7cf-9gwfn   2/2     Running   0          50s 
   ```


4. Connect to the Jupyter notebook and upload the file `seldon-request.py` to send a sample request to the model.
 

5. In the Jupyter notebook terminal, install the following python dependencies: 

   `pip install requests lxml --user`


_Note:_ In case of using proxy you may need to run the following commands in the newly opened notebook terminal: 

```
$ export http_proxy=<http_proxy_host> 
$ export https_proxy=<https_proxy_host> 
``` 


6. Execute `seldon-request.py` script with the following options:
   
   `python seldon-request.py <ingressgateway_address> <login> <password> <user_namespace> <seldon_deployment_name>`


For example: 	 

`python seldon-request.py http://istio-ingressgateway.istio-system.svc.cluster.local:80 dev1 12341234 dev1 issue-summarization`	 


7. You can also connect directly to the container using seldon (`issue-summarization-example-classifier.<user_namespace>.svc.cluster.local`) inside the notebook: 

   `$ curl -g http://issue-summarization-example-classifier.<user_namespace>.svc.cluster.local:9000/predict --data-urlencode 'json={"data":{"ndarray":[["try to stop flask from using multiple threads"]]}}'`	 
 

8. The output should be similar to the following: 

   `{"data":{"names":["t:0"],"ndarray":[["add to support for"]]},"meta":{}}`


9. To delete seldon deployment run: 

   ```
   $ kubectl get sdep
   $ kubectl delete sdep issue-summarization
   ```
