#!/bin/bash

set -e

source .env
export NODE_ENV=development

cd ./mirf &&
  npm run dev $SERVER_HOST $SERVER_PORT $ROOT_COMPONENT &
cd ./demo &&
  npm run dev -- --host=$COMPONENT_SERVER_HOST --port=$COMPONENT_SERVER_PORT