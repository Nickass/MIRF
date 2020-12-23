#!/bin/bash

set -e

export NODE_ENV=production
SCRIPT_PATH=$(dirname $(realpath -s $0))

# clean distination folder
rm -rf "$SCRIPT_PATH/../dist"
# build framework
webpack --config "$SCRIPT_PATH/webpack/webpack.config.js"
echo 'publishing...'
echo 'deployed!'