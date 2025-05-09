prefix=$(tr -dc a-z0-9 </dev/urandom | head -c3)-
echo "🔀  HUGO_TW_PREFIX буде: $prefix"

# Tailwind
HUGO_TW_PREFIX="$prefix" \
npx tailwindcss \
  -i themes/hugoplate/assets/css/main.css \
  -o static/css/tailwind.css --minify

# Hugo
HUGO_TW_PREFIX="$prefix" hugo --minify
