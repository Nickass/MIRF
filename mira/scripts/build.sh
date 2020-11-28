#!/bin/bash

set -e

export NODE_ENV=production
SCRIPT_PATH=$(dirname $(realpath -s $0))

node "$SCRIPT_PATH/webpack/index.js"