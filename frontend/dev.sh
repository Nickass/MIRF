#!/bin/bash

set -e

SCRIPT_PATH=$(dirname $(realpath -s $0))
export NODE_ENV=development

mira dev --entry='{**/pages/*/,*}index.{tsx,js,jsx}' --root=$SCRIPT_PATH $@