---
id: hdfs-access 
title: User Access to Data in HDFS
---

1. Login to the ECP Control Pane as an LDAP user. 


2. Open Web terminal and list pods: 

   ```
   $ kubectl get pods 
 
   NAME                               READY  STATUS   RESTARTS  AGE 
   hivemeta-0                         1/1    Running  0         3d19h 
   livy-79c8b6bfd9-p5hr2              1/1    Running  0         3d19h 
   spark-thrift-1612480948543-exec-1  1/1    Running  0         3d18h 
   spark-thrift-1612480949076-exec-2  1/1    Running  0         3d18h 
   sparkhs-5764999c59-m2x22           1/1    Running  0         3d19h 
   sparkts-94b86cf99-ct4jk            1/1    Running  1         3d19h 
   tenantcli-0                        1/1    Running  0         3d19h 
   ```


3. Login to the `tenantcli-0` pod as an LDAP user and enter the user password when prompt:

   `$ kubectl exec -it tenantcli-0 -- su - <ldap_user>`


4. Get the ticket for an LDAP user. Enter password for an LDAP user when prompted:

   `$ maprlogin password`


5. List files in HDFS:

   ```
   $ hadoop fs -ls / 
 
   Found 7 items 
   drwxr-xr-x  - mapr mapr         4 2021-02-03 03:50 /apps 
   drwxr-xr-x  - mapr mapr        27 2021-02-08 17:47 /exthcp 
   drwxr-xr-x  - mapr mapr         2 2021-02-02 22:43 /objectstore-zone1-svc 
   drwxr-xr-x  - mapr mapr         0 2021-02-02 22:41 /opt 
   drwxrwxrwx  - mapr mapr         0 2021-02-02 22:40 /tmp 
   drwxr-xr-x  - mapr mapr         1 2021-02-02 22:42 /user 
   drwxr-xr-x  - mapr mapr         1 2021-02-02 22:40 /var
   ```
