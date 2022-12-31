# Udacity DevOps Engineer Capstone Project
This repository contains the code for the capstone project for the Udacity DevOps Engineer Nanodegree program. The goal of this project is to demonstrate the skills and knowledge acquired throughout the course of the nanodegree program by building a CI/CD pipeline using CircleCI and deploying a Node.js API to an Amazon Web Services (AWS) Elastic Kubernetes Service (EKS) cluster.

### Repository
https://github.com/odira1/udacity-capstone

## Screenshots 
Please find screenshots to show completed requirements for the project within the screenshots/ directory.

## Project Overview
The project involves the development of a simple API using Node.js and Express, and the deployment of this API to an EKS cluster using AWS CloudFormation. The API will be continuously integrated and deployed using CircleCI.

The project includes the following steps:

- **API development**: Develop a simple Node.js API using Express that displays a message when accessed.

- **AWS EKS cluster setup**: Use AWS CloudFormation to set up an EKS cluster.

- **CI/CD pipeline setup**: Set up a CircleCI pipeline to continuously integrate and deploy the API to the EKS cluster.

- **API deployment**: Deploy the API to the EKS cluster with a docker container using the CircleCI pipeline.


# Getting Started
To get started with this project, you will need to have the following software installed on your computer:

- Node.js
- AWS CLI
- kubectl
- eksctl

You will also need to have an AWS account and create an IAM user with access to create and manage EKS clusters. 

Once you have the necessary software and AWS credentials, you can clone this repository to your local machine and follow the instructions in the setup.sh script to set up the EKS cluster and deploy the API.

Finally, create a CircleCI account and log in. Then, go to the "Add Projects" page and click the "Set Up Project" button next to the name of the repository you want to connect. Follow the prompts to set up your project and select the appropriate settings. For more detailed instructions, see the CircleCI documentation here.






# udacity-capstone

<!-- https://storck.io/posts/deploying-aws-cloudformation-templates-from-circleci/
https://www.automat-it.com/post/how-to-deploy-helm-charts-to-an-eks-cluster-through-aws-cloudformation
https://medium.com/@douglasaugus.to/working-with-multiple-environments-in-google-cloud-build-c642ace9ee6
 -->

## Pipeline Architecture

- Build [npm run lint]
- Test [npm run test]
- Analyze [npm audit] should fail if there are security vulnerability
- Deploy

Note: Each phase depends on the other phase to complete.

Continous integration tools - Circle Ci

Deployment type: Blue Green for easy roll back of changes. test that roll back works.

1. create docker application

Step 2:

Build the kubernetes infrastructure with cloudformation
create ec2 instances
set correct networking settings.
deploy software to the instances.
Initialize the kubernetes cluster with ansible.

Step 4:
Set up the pipeline in github
set up the pipeline steps.
configure the deployment pipeline.
include dockerfile in the github repo
include the failed linting linting screenshot and a successful linting screenshot.

Step 5:
Perform builds on the pipeline.
verify that the pipeline works as desired.
Take screenshot of circle ci showing the deployment.
AWS EC2 page showing the newly created (for blue green ) isntances
Make sure you name the instances differently between blue and green deployments.
