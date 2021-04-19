---
id: kfp-tutorial 
title: Kubeflow Pipelines (KFP)
--- 

### Running a basic Pipeline 

1. Open Kubeflow dashboard.


2. Go to Pipelines page.


3. Click the name of the sample, **\[Tutorial] DSL - Control structures**.


4. Click **Create experiment** and follow the prompts.


5. Create a run by clicking on the **Start** button.


6. Click the name of the run on the **Experiments** page.


7. Explore the graph and other aspects of your run by clicking on the components of the graph and the other UI elements.


### Running Pipeline in Jupyter Notebook 

Example from [here](https://github.com/kubeflow/pipelines/blob/master/samples/core/lightweight_component/lightweight_component.ipynb). 

1. Create Jupyter notebook server.


2. Connect to the notebook and click to open a New Terminal.


3. In the terminal clone `kubeflow/pipelines` repository: 

   `$ git clone https://github.com/kubeflow/pipelines.git`

_Note:_ If using proxy, first run the bellow command: 

   `$ export https_proxy=<https_proxy_host>`
 

4. Go back to the **Files** tab and open a notebook: 

   `pipelines/samples/core/lightweight_component/lightweight_component.ipynb`


5. Run the notebook step by step.


6. In the last step click on the links provided and check respective experiment and run are available in Pipelines UI.

**"Experiment link here"** opens the experiment created in the Pipelines UI.

**"Run link here"** opens the run created in the Pipelines UI.


7. Open **Experiments** page in the **Pipelines** dashboard. In **All Experiments** tab expand **Default** group and view pipeline graph and details per step by clicking on \[View pipeline] link.


8. In **All runs** tab click on the name of the run to view **Graph**, **Run output** and **Config** tabs. 

### Run Spark as a part of KFP 

1. In Kubeflow UI create a new Notebook Server.  


2. Any of the default Jupyter images can be used. No specific properties or options are required. 


3. Connect to the created Notebook Server and open Python3 Notebook. 

 
4. In the created Notebook prepare the code for running Pipelines: 
 
   ```
   import kfp.dsl as dsl
   import yaml

   @dsl.pipeline(
       name = "Spark pipeline demo",
       description = "Use saprk operator inside KF",
   ) 

   def spark_pi_pipeline():
       spark_yaml = yaml.safe_load(open("/home/jovyan/pyspark.yaml"))
       deploy_step = dsl.ResourceOp(
           name="spark-job",
           k8s_resource=spark_yaml,
           attribute_outputs={"name": "{.metadata.name}"})
   
   import kfp
   kfp.Client().create_run_from_pipeline_func(spark_pi_pipeline, arguments={})
   ```


5. In the root folder of the Jupyter notebook upload .yaml file with the code for spark job (`pyspark.yaml`). 
   

6. Create new notebook (PySpark, Python 3, etc.). Upload example code for Wordcount job (`spark-wc.yaml`).

_Note:_ change namespace name, path to the file input.txt in maprfs (with any content) and spark.mapr.user.secret name to match existing values. 


7. Login to the ECP Control Pane, open terminal and execute script to generate maprticket:

   ```
   $ kubectl exec -it tenantcli-0 -- su - <ldap_user_name> 
   Enter password
   [<ldap_user_name>@tenantcli-0 mapr]$ ticketcreator.sh
   Create a ticket for tenant user: [mapr]: <ldap_user_name>
   Please provide '<ldap_user_name>'s password: [mapr]: <ldap_user_password>
   . 
   . 
   . 
   Please provide a name for your user secret: [mapr-user-secret-2430753274]: mapr-user-secret-spark-example
   ```

_Note:_ Use the name of the created user secret in spark job code in previous step (example: `mapr-user-secret-spark-example`).


8. Run the code for Pipelines in the notebook.


9. After the driver pod become `Completed` see result of example in logs: 

   ```
   $ kubectl logs spark-wordcount-secure-driver -n <tenant_namespace> --tail=10
   uffer(long,int)
   WARNING: Please consider reporting this to the maintainers of org.apache.spark.unsafe.Platform
   WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
   WARNING: All illegal access operations will be denied in a future release
   21/01/18 11:07:58 WARN TaskSchedulerImpl: Initial job has not accepted any resources; check your cluster UI to ensure that workers are registered and have sufficient resources
   21/01/18 11:08:13 WARN TaskSchedulerImpl: Initial job has not accepted any resources; check your cluster UI to ensure that workers are registered and have sufficient resources
   21/01/18 11:08:28 WARN TaskSchedulerImpl: Initial job has not accepted any resources; check your cluster UI to ensure that workers are registered and have sufficient resources
   spark: 1
   2: 3
   hello: 2
   my: 1
   from: 1
   ```
