/** @type {import('tailwindcss').Config} */

/* 1 ▪︎ Префікс із дозволеної змінної довкілля */
const prefix = process.env.HUGO_TW_PREFIX ?? "";

module.exports = {
  /* 2 ▪︎ Файли, де Tailwind сканує класи */
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/*.{html,js}",
    "./content/**/*.{md,html}",
  ],

  /* 3 ▪︎ Додаємо префікс до ВСІХ утиліт Tailwind */
  prefix,

  theme: { extend: {} },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("../../tailwind-plugin/tw-theme"),
    require("../../tailwind-plugin/tw-bs-grid"),
  ],

  /* 4 ▪︎ Safelist зберігає всі класи з поточним префіксом
         (responsive-, hover-, dark-варіанти теж)                */
  safelist: [
    { pattern: new RegExp(`^${prefix}[\\w\\/:.-]+`) },
    { pattern: new RegExp(`^(sm|md|lg|xl|2xl):${prefix}[\\w\\/:.-]+`) },
    { pattern: new RegExp(`^(hover|focus|active):${prefix}[\\w\\/:.-]+`) },
    { pattern: new RegExp(`^dark:${prefix}[\\w\\/:.-]+`) },
  ],
};
