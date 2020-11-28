#!/bin/bash

set -e

if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  export NODE_ENV=development&& node index.js
else
  echo "Please, write a bash code for your system"
fi