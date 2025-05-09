#!/usr/bin/env bash
set -e

# — 1 — префікс
prefix=$(LC_ALL=C tr -dc 'a-z0-9' </dev/urandom | head -c3 2>/dev/null)
[ -z "$prefix" ] && prefix=$(openssl rand -hex 2 | head -c3)
prefix="${prefix}-"

echo "🔀  HUGO_TW_PREFIX буде: $prefix"

# — 2 — Tailwind
HUGO_TW_PREFIX="$prefix" \
npx tailwindcss \
  -i themes/hugoplate/assets/css/main.css \
  -o static/css/tailwind.css --minify

# — 3 — Hugo
HUGO_TW_PREFIX="$prefix" \
hugo --minify
