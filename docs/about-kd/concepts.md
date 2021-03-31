---
id: concepts 
title: Concepts
---

On this page we learn MLOps concepts.

import myImageUrl from '../../static/img/director_concepts.png';

<img src={myImageUrl}/>

**MLOps** is deployed to a Kubernetes cluster.  We deployed MLOps in the lesson [lab install - part3](/docs/lab/install3) with `make deploy`.  On HPE Ezmeral Container Platform MLOps is deployed automatically when a Kubernetes Cluster is created.

**MLOps Applications** are created by **Application Image author**.  Applications can be thought of as Cluster blueprints. 

**MLOps Clusters** are instantiations of **MLOps Applications**.  A **MLOps Cluster** (also called **Virtual Cluster**) is a single or multiple **node** application.  In a multiple node application the **nodes** work together with each **node** having a predefined **Role** within the cluster.

A **Node** (also called a virtual node or instance) is a pod.

The node **Role** defines a set of applications or services and supporting files that run on a given node.  All **Roles** in an **MLOps Application**:
  - can share the same Docker image or have their own Docker image.
  - can have an application configuration package that is executed for each life-cycle event allowing the **node** to be customised.
  - can define zero or more **Services**.
