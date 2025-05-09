/** @type {import('tailwindcss').Config} */
module.exports = {
  // Шляхи, де Tailwind шукає класи:
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/*.{html,js}",
    "./content/**/*.{md,html}",
  ],

  // ▸ Рандомний префікс прилітає з TW_PREFIX
  prefix: process.env.TW_PREFIX ?? "",

  theme: { extend: {} },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("../../tailwind-plugin/tw-theme"),
    require("../../tailwind-plugin/tw-bs-grid"),
  ],

  safelist: [
    { pattern: /^bg-/, variants: ["hover"] },
    { pattern: /^text-/, variants: ["hover"] },
  ],
};
