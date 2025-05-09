#!/usr/bin/env bash
set -e

# 1) генеруємо 3 ascii-символи (macOS + Linux, без Illegal byte sequence)
export LC_ALL=C
prefix=$(tr -dc 'a-z0-9' </dev/urandom | head -c3 2>/dev/null)
# fallback, якщо раптом знову порожньо
[ -z "$prefix" ] && prefix=$(openssl rand -hex 2 | head -c3)

prefix="${prefix}-"
echo "🔀  HUGO_TW_PREFIX буде: $prefix"

# 2) передаємо змінну обом командам
export HUGO_TW_PREFIX="$prefix"

#   2.1 Tailwind  → static/css/tailwind.css
npx tailwindcss \
  -i themes/hugoplate/assets/css/main.css \
  -o static/css/tailwind.css \
  --minify

#   2.2 Hugo
hugo --minify
