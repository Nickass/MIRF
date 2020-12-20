#!/bin/bash

set -e

SCRIPT_PATH=$(dirname $(realpath -s $0))
export HOT_SERVER_HOST="${HOT_SERVER_HOST:-localhost}"
export HOT_SERVER_PORT="${HOT_SERVER_PORT:-3001}"
export PUBLIC_PATH="${PUBLIC_PATH:-"http://$HOT_SERVER_HOST:$HOT_SERVER_PORT/"}"
export NODE_ENV=development

npx webpack --config "$SCRIPT_PATH/webpack/backend.webpack.config.js" &
npx webpack serve --config "$SCRIPT_PATH/webpack/frontend.webpack.config.js" &
nodemon "$SCRIPT_PATH/../dist/server.js" $@