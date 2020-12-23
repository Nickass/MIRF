#!/bin/bash

set -e

SCRIPT_PATH=$(dirname $(realpath -s $0))

export SERVER_HOST="${SERVER_HOST:-localhost}"
export SERVER_PORT="${SERVER_PORT:-3000}"
export COMPONENT_SERVER_HOST="${COMPONENT_SERVER_HOST:-localhost}"
export COMPONENT_SERVER_PORT="${COMPONENT_SERVER_PORT:-8080}"
export HOT_SERVER_HOST="${HOT_SERVER_HOST:-localhost}"
export HOT_SERVER_PORT="${HOT_SERVER_PORT:-3001}"
export PUBLIC_PATH="${PUBLIC_PATH:-"http://$HOT_SERVER_HOST:$HOT_SERVER_PORT/"}"
export ROOT_COMPONENT="${ROOT_COMPONENT:-"http://$COMPONENT_SERVER_HOST:$COMPONENT_SERVER_PORT/index.js"}"
export NODE_ENV=development

# run webpack-server for client script 
webpack serve --config "$SCRIPT_PATH/webpack/frontend.webpack.config.js" &
# run webpack for watch and bundle backend
webpack --config "$SCRIPT_PATH/webpack/backend.webpack.config.js" &
# run nodemon for restart server after bundle will be finished
nodemon "$SCRIPT_PATH/../dist/server.js" $SERVER_HOST $SERVER_PORT $ROOT_COMPONENT &
# run cli for components
node "$SCRIPT_PATH/../index.js" \
  --cwd="$SCRIPT_PATH/../" \
  --entry='demo/{**/pages/*/,*}index.{tsx,js,jsx}' \
  --output='dist/public' \
  --share='public/' \
  --host=$COMPONENT_SERVER_HOST \
  --port=$COMPONENT_SERVER_PORT \
  --rc=$ROOT_COMPONENT

# run the url in browser
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  start http:/$SERVER_HOST:$SERVER_PORT
fi
