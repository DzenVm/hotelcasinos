#!/usr/bin/env bash
set -e
export LC_ALL=C
prefix=$(tr -dc 'a-z0-9' </dev/urandom | head -c3 2>/dev/null)
[ -z "$prefix" ] && prefix=$(openssl rand -hex 2 | head -c3)
prefix="${prefix}-"
echo "🔀  HUGO_TW_PREFIX буде: $prefix"
export HUGO_TW_PREFIX="$prefix"

# === CSS збірка через новий CLI ===
npx @tailwindcss/cli \
  --config ./tailwind.config.cjs \
  -i themes/hugoplate/assets/css/main.css \
  -o static/css/tailwind.css \
  --minify


# === решта (Hugo) ===
hugo --minify
