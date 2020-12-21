#!/bin/bash

set -e

export NODE_ENV=production
SCRIPT_PATH=$(dirname $(realpath -s $0))

npx webpack --config "$SCRIPT_PATH/webpack/webpack.config.js" $@