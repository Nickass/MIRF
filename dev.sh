#!/bin/bash

set -e

if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
  set NODE_ENV=development &&
  cd ./mira && npm run dev &
  cd ./frontend && mira-cli component dev;
else
  echo "Please, write a bash code for your system"
fi