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

if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  start http:/$SERVER_HOST:$SERVER_PORT
fi

webpack --config "$SCRIPT_PATH/webpack/backend.webpack.config.js" &
webpack serve --config "$SCRIPT_PATH/webpack/frontend.webpack.config.js" &
cd demo && npm run dev -- --host=$COMPONENT_SERVER_HOST --port=$COMPONENT_SERVER_PORT --rc=$ROOT_COMPONENT &
nodemon "$SCRIPT_PATH/../dist/server.js" $SERVER_HOST $SERVER_PORT $ROOT_COMPONENT;