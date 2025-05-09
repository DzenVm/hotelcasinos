/** @type {import('tailwindcss').Config} */

const prefix = process.env.HUGO_TW_PREFIX ?? "";
console.log("TAILWIND-DEBUG  prefix =", prefix);

module.exports = {
  // Шлях, де Tailwind сканує класи
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/*.{html,js}",
    "./content/**/*.{md,html}",
  ],

  // Додаємо префікс до ВСІХ утиліт
  prefix,

  theme: { extend: {} },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("../../tailwind-plugin/tw-theme"),
    require("../../tailwind-plugin/tw-bs-grid"),
  ],

  /* -------------  SAFELIST ------------- *
   * Purge не «бачить» утиліт, бо вони всередині {{ partial "tw" }}
   * Тому залишаємо ВСІ класи з поточним префіксом.
   */
  safelist: [
    // власне утиліта
    { pattern: new RegExp(`^${prefix}[a-z0-9_/:-]+`) },

    // responsive-варіанти
    { pattern: new RegExp(`^(sm|md|lg|xl|2xl):${prefix}[a-z0-9_/:-]+`) },

    // стани hover / focus / active
    { pattern: new RegExp(`^(hover|focus|active):${prefix}[a-z0-9_/:-]+`) },

    // dark:
    { pattern: new RegExp(`^dark:${prefix}[a-z0-9_/:-]+`) },
  ],
};
