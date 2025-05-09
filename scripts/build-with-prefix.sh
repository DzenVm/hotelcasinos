#!/usr/bin/env bash
set -e

# 1) надійно генеруємо 3 ASCII символи
PREFIX=$(LC_ALL=C tr -dc 'a-z0-9' </dev/urandom | head -c3)
[ -z "$PREFIX" ] && PREFIX="x$(date +%S)"          # fallback

echo "🔀 TW_PREFIX буде: ${PREFIX}-"

# 2) показуємо, чи змінні реально передаються
export TW_PREFIX="${PREFIX}-"
export HUGO_PARAMS_twPrefix="${PREFIX}-"

echo "   ▶️  $TW_PREFIX (env для Tailwind)"
echo "   ▶️  $HUGO_PARAMS_twPrefix (env для Hugo)"

# 3) білд Tailwind-CSS
npx --yes tailwindcss \
  -i ./themes/hugoplate/assets/css/main.css \
  -o ./static/css/tailwind.css \
  --minify

# 4) білд Hugo
hugo --gc --minify
