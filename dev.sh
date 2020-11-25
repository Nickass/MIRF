#!/bin/bash

set -e

if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  set NODE_ENV=development&& cd ./mira && npm run dev &
  set NODE_ENV=development&& cd ./frontend && npm run dev;
else
  echo "Please, write a bash code for your system"
fi