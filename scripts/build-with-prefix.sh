#!/usr/bin/env bash
set -e

# 1) Згенерувати 5 випадкові літери a–z (працює і на macOS, і на Linux)
PREFIX=$(LC_CTYPE=C tr -dc 'a-z' < /dev/urandom | head -c5)

echo "🔀  Префікс цього білда: ${PREFIX}-"

# 2) Передати префікс Tailwind і Hugo
export TW_PREFIX="${PREFIX}-"
export HUGO_PARAMS_twPrefix="${PREFIX}-"

# 3) Зібрати Tailwind → static/css/tailwind.css
npx tailwindcss \
  -i ./themes/hugoplate/assets/css/main.css \
  -o ./static/css/tailwind.css \
  --minify

# 4) Production-білд Hugo
hugo --gc --minify
