#!/bin/bash

set -e

export NODE_ENV=production
SCRIPT_PATH=$(dirname $(realpath -s $0))

# clean distination folder
rm -rf "$SCRIPT_PATH/../dist"
# build framework
webpack --config "$SCRIPT_PATH/webpack/webpack.config.js"
# build components
node "$SCRIPT_PATH/../index.js" build \
  --cwd="$SCRIPT_PATH/../" \
  --entry='demo/{**/pages/*/,*}index.{tsx,js,jsx}' \
  --output='dist/public';