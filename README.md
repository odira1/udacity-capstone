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
