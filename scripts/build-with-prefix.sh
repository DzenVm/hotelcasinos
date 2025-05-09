#!/usr/bin/env bash
set -e

# 1) Згенеруємо 3-літерний префікс
prefix=$(tr -dc a-z0-9 </dev/urandom | head -c3)-
echo "🔀  TW_PREFIX буде: $prefix"

# 2) Tailwind → static/css/tailwind.css
TW_PREFIX="$prefix" \
npx tailwindcss \
  -i themes/hugoplate/assets/css/main.css \
  -o static/css/tailwind.css --minify

# 3) Hugo (TW_PREFIX передається теж)
TW_PREFIX="$prefix" hugo --minify
