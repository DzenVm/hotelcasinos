#!/usr/bin/env bash
set -e

#  Генеруємо 3 ASCII-символи a–z | 0–9 (працює і на macOS, і на Linux)
PREFIX=$(LC_ALL=C tr -dc 'a-z0-9' </dev/urandom | head -c3)

# fallback, щоб точно не було порожньо
[ -z "$PREFIX" ] && PREFIX="x$(date +%N | tail -c2)"

echo "🔀  Префікс цього білда: ${PREFIX}-"

export TW_PREFIX="${PREFIX}-"
export HUGO_PARAMS_twPrefix="${PREFIX}-"

npx tailwindcss \
  -i ./themes/hugoplate/assets/css/main.css \
  -o ./static/css/tailwind.css \
  --minify

hugo --gc --minify
