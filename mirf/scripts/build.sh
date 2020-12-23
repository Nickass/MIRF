#!/bin/bash

set -e

export NODE_ENV=production
SCRIPT_PATH=$(dirname $(realpath -s $0))

webpack --config "$SCRIPT_PATH/webpack/webpack.config.js" &
cd demo && npm run build;