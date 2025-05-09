/** @type {import('tailwindcss').Config} */

// Твій випадковий префікс із середовища; якщо нема—порожній
const prefix = process.env.HUGO_TW_PREFIX || "";

module.exports = {
  // 1) Точні шляхи для сканування класів:
  content: [
    "./layouts/**/*.html",
    "./themes/**/*.html",
    "./content/**/*.{md,html}",
  ],

  // 2) Додаємо префікс до всіх утиліт
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

  // 3) Safelist: зберігає будь-які класи з префіксом, включно з breakpoint- та state-варіантами
  safelist: [
    { pattern: new RegExp(`^${prefix}`) },
    { pattern: new RegExp(`^(sm|md|lg|xl|2xl):${prefix}`) },
    { pattern: new RegExp(`^(hover|focus|active):${prefix}`) },
    { pattern: new RegExp(`^dark:${prefix}`) },
  ],
};
