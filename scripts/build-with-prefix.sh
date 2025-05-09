#!/usr/bin/env bash
set -e

# 1) Генеруємо UUID, лишаємо тільки a–z, беремо перших 3 букви
PREFIX=$(uuidgen | tr -dc 'a-z' | head -c3)
echo "🔀  Префікс цього білда: ${PREFIX}-"

# 2) Експортуємо для Tailwind i Hugo
export TW_PREFIX="${PREFIX}-"
export HUGO_PARAMS_twPrefix="${PREFIX}-"

# 3) Ребілд Tailwind-CSS
npx tailwindcss \
  -i ./themes/hugoplate/assets/css/main.css \
  -o ./static/css/tailwind.css \
  --minify

# 4) Production-білд Hugo
hugo --gc --minify
