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

  /* ———  SAFELIST  ———
     Зберігає в CSS усі класи, що починаються з нашого префікса,
     навіть якщо Tailwind їх не «побачив» у шаблонах під час скану. */
  safelist: [
    /* базові утиліти з префіксом */
    { pattern: new RegExp(`^${prefix}[a-z0-9_-]+`) },

    /* responsive-варіанти: sm: lg: md: xl: 2xl: */
    { pattern: new RegExp(`^(sm|md|lg|xl|2xl):${prefix}`) },

    /* hover:focus etc. (якщо використовуєте) */
    { pattern: new RegExp(`^(hover|focus|active):${prefix}`) },

    /* dark: варіант */
    { pattern: new RegExp(`^dark:${prefix}`) },
  ],
};
