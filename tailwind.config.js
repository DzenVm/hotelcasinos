/** @type {import('tailwindcss').Config} */

// Беремо префікс із дозволеної змінної середовища
const prefix = process.env.HUGO_TW_PREFIX ?? "";

module.exports = {
  // Шляхи, де Tailwind сканує класи для purge
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/*.{html,js}",
    "./content/**/*.{md,html}",
  ],

  // Додаємо префікс до всіх утиліт
  prefix,

  theme: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("../../tailwind-plugin/tw-theme"),
    require("../../tailwind-plugin/tw-bs-grid"),
  ],

  // Зберігаємо всі класи з нашим префіксом навіть якщо purge їх не «побачить»
  safelist: [
    // будь-які утиліти з префіксом, напр. .abc-bg-primary, .abc-p-4 тощо
    { pattern: new RegExp(`^${prefix}`) },

    // dark:abc-bg-neutral-900
    { pattern: new RegExp(`^dark:${prefix}`) },

    // responsive: sm:abc-p-6, lg:abc-grid-cols-3
    { pattern: new RegExp(`^(sm|md|lg|xl|2xl):${prefix}`) },

    // стани hover/focus/active: hover:abc-bg-primary, focus:abc-ring
    { pattern: new RegExp(`^(hover|focus|active):${prefix}`) },
  ],
};
