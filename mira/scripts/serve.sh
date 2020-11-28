#!/bin/bash

set -e

SCRIPT_PATH=$(dirname $(realpath -s $0))
NODE_ENV=development

node "$SCRIPT_PATH/../dist/server.js" 3000 http://localhost:8081/index.js