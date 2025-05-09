/** @type {import('tailwindcss').Config} */

/* Поточний префікс (порожній у dev, "abc-" у prod-скрипті) */
const prefix = process.env.TW_PREFIX ?? "";

module.exports = {
  /* Шляхи, де Tailwind шукає класи */
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/*.{html,js}",
    "./content/**/*.{md,html}",
  ],

  /* Додаємо префікс до всіх утиліт */
  prefix,

  theme: { extend: {} },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("../../tailwind-plugin/tw-theme"),
    require("../../tailwind-plugin/tw-bs-grid"),
  ],

  /* ———  SAFELIST  ——— */
     
safelist: [
  { pattern: new RegExp(`^${prefix}`) },                   // будь-які класи з префікса
  { pattern: new RegExp(`^(sm|md|lg|xl|2xl):${prefix}`) }, // responsive
  { pattern: new RegExp(`^(hover|focus|active):${prefix}`) },
  { pattern: new RegExp(`^dark:${prefix}`) },
],

};
