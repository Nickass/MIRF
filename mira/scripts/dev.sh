#!/bin/bash

set -e

SCRIPT_PATH=$(dirname $(realpath -s $0))
NODE_ENV=development

node "$SCRIPT_PATH/webpack/index.js"