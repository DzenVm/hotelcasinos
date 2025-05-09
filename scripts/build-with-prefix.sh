#!/usr/bin/env bash
set -e

PREFIX=$(tr -dc 'a-z' < /dev/urandom | head -c3)
echo "🔀  Префікс цього білда: $PREFIX-"

export TW_PREFIX="${PREFIX}-"
export HUGO_PARAMS_twPrefix="${PREFIX}-"

npx tailwindcss \
  -i ./themes/hugoplate/assets/css/main.css \
  -o ./static/css/tailwind.css \
  --minify

hugo --gc --minify
