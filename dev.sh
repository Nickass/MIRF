#!/bin/bash

set -e

source .env
export NODE_ENV=development

cd ./mira &&
  npm run dev $SERVER_HOST $SERVER_PORT $ROOT_COMPONENT &
cd ./frontend &&
  npm run dev -- \
    --serverless \
    --serverHost=$SERVER_HOST \
    --serverPort=$SERVER_PORT \
    --componentHost=$COMPONENT_SERVER_HOST \
    --componentPort=$COMPONENT_SERVER_PORT \