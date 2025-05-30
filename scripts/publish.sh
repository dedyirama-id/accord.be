#!/bin/bash

set -e

VERSION=$1
IMAGE_NAME=ghcr.io/dedyirama-id/accord_be

echo "🔧 Building Docker image with tag: $VERSION"

docker build -t $IMAGE_NAME:$VERSION .
docker tag $IMAGE_NAME:$VERSION $IMAGE_NAME:latest

echo "🚀 Logging in to GHCR..."
echo $GHCR_TOKEN | docker login ghcr.io -u dedyirama-id --password-stdin

echo "🚀 Pushing versioned image..."
docker push $IMAGE_NAME:$VERSION

echo "🚀 Pushing latest tag..."
docker push $IMAGE_NAME:latest

echo "✅ Done!"
