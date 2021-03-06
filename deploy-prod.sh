#!/bin/bash

set -e

docker build -t gcr.io/${PROJECT_PROD}/${NODE_IMAGE}:$TRAVIS_COMMIT .

echo $GCLOUD_SERVICE_KEY | base64 --decode -i > ${HOME}/gcloud-service-key.json
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json

gcloud --quiet config set project $PROJECT_PROD
gcloud --quiet config set container/cluster $CLUSTER
gcloud --quiet config set compute/zone ${ZONE}
gcloud --quiet container clusters get-credentials $CLUSTER

gcloud docker -- push gcr.io/${PROJECT_PROD}/${NODE_IMAGE}

yes | gcloud beta container images add-tag gcr.io/${PROJECT_PROD}/${NODE_IMAGE}:$TRAVIS_COMMIT gcr.io/${PROJECT_PROD}/${NODE_IMAGE}:latest

kubectl config view
kubectl config current-context

kubectl set image deployment/${NODE_DEPLOYMENT} ${NODE_CONTAINER}=gcr.io/${PROJECT_PROD}/${NODE_IMAGE}:$TRAVIS_COMMIT
kubectl set env deployment/${NODE_DEPLOYMENT} DB_URL=postgres://user@postgres:5432/gallery
kubectl set env deployment/${NODE_DEPLOYMENT} IMAGE_URL=http://35.188.92.176/image/
kubectl set env deployment/${NODE_DEPLOYMENT} NODE_ENV=production

# sleep 30
# npm run e2e_test
