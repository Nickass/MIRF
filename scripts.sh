#!/bin/bash

set -e

LOCAL_POSIX_BIN=$(cygpath -u "$(npm bin)")
PATH=$LOCAL_POSIX_BIN:$PATH
CWD=$(dirname $(realpath -s $0))

browser() {
  if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    start $@
  fi
}

wait_link() {
  until $(curl --output /dev/null --silent --head --fail $1); do
    sleep 1
  done
}

kill_descendant_processes() {
    local pid="$1"
    local and_self="${2:-false}"

    if children="$(ps | grep $pid | awk '{print $1}' | grep -v $pid)"; then
      for child in $children; do
        kill_descendant_processes "$child" true
      done
    fi
    if [[ "$and_self" == true ]]; then
      kill -9 "$pid"
    fi
}

clean_dist() {
  rm -rf "$CWD/dist"
  echo "The path $CWD/dist cleaned."
}

build() {
  export NODE_ENV="${NODE_ENV:-production}"
  echo "Build main script with NODE_ENV=$NODE_ENV."
  webpack --config "$CWD/webpack/webpack.config.js"
}

dev_main() {
  HOST=${1:-localhost}
  PORT=${2:-3000}
  ROOT_COMPONENT=$3
  HOT_SERVER_HOST="${HOT_SERVER_HOST:-localhost}"
  HOT_SERVER_PORT="${HOT_SERVER_PORT:-3333}"

  export PUBLIC_PATH="http://$HOT_SERVER_HOST:$HOT_SERVER_PORT/"
  export NODE_ENV="${NODE_ENV:-development}"

  echo "Starting developing main script..."

  # run webpack-server for client script
  webpack serve \
    --config "$CWD/webpack/frontend.webpack.config.js" \
    --host=$HOT_SERVER_HOST \
    --port=$HOT_SERVER_PORT \
    --watch \
    &
  # run webpack for watch and bundle backend
  webpack --config "$CWD/webpack/backend.webpack.config.js" --watch &
  # run nodemon for restart server after bundle will be finished
  nodemon "$CWD/dist/server.js" $HOST $PORT $ROOT_COMPONENT
}

dev_demo() {
  HOST=${1:-localhost}
  PORT=${2:-3000}
  ROOT_COMPONENT=${3:-"http://$HOST:$PORT/index.js"}

  export NODE_ENV="${NODE_ENV:-development}"
  export SERVER_URL="http://$HOST:$PORT"

  echo "Starting developing demo..."

  node "$CWD/index.js" \
    --cwd=$CWD \
    --entry='demo/{**/pages/*/,*}index.{tsx,js,jsx}' \
    --output='dist/public' \
    --share='public/' \
    --host=$HOST \
    --port=$PORT \
    --rc=$ROOT_COMPONENT
}

develop() {
  SERVER_HOST="${SERVER_HOST:-localhost}"
  SERVER_PORT="${SERVER_PORT:-3000}"
  COMPONENT_SERVER_HOST="${COMPONENT_SERVER_HOST:-localhost}"
  COMPONENT_SERVER_PORT="${COMPONENT_SERVER_PORT:-8080}"
  SERVER_URL="http://$SERVER_HOST:$SERVER_PORT"
  ROOT_COMPONENT="${ROOT_COMPONENT:-"http://$COMPONENT_SERVER_HOST:$COMPONENT_SERVER_PORT/index.js"}"

  export NODE_ENV=development

  clean_dist
  build
  wait_link $SERVER_URL && browser $SERVER_URL &
  dev_main $SERVER_HOST $SERVER_PORT $ROOT_COMPONENT &
  dev_demo $COMPONENT_SERVER_HOST $COMPONENT_SERVER_PORT $ROOT_COMPONENT
}

demo() {
  HOST=${1:-localhost}
  PORT=${2:-3000}
  ROOT_COMPONENT=${3:-"http://$HOST:$PORT/index.js"}

  export NODE_ENV="${NODE_ENV:-production}"
  export SERVER_URL="http://$HOST:$PORT"

  clean_dist
  build
  node "$CWD/index.js" build \
    --cwd=$CWD \
    --entry='demo/{**/pages/*/,*}index.{tsx,js,jsx}' \
    --output='dist/public'
  node "$CWD/index.js" start \
    --host=$HOST \
    --port=$PORT \
    --rc=$ROOT_COMPONENT
}

deploy() {
  clean_dist
  build
  echo 'publishing...'
  echo 'deployed!'
}

e2e() {
  HOST="${HOST:-localhost}"
  PORT="${PORT:-3000}"

  export SERVER_URL="http://$HOST:$PORT"

  demo $HOST $PORT &
  DEMOPID=$!

  wait_link $SERVER_URL
  jest
  kill_descendant_processes $DEMOPID
}

$@;


