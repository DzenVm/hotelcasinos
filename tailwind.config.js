// tailwind.config.js
const prefix = process.env.HUGO_TW_PREFIX ?? "";

module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/*.{html,js}",
    "./content/**/*.{md,html}",
  ],
  prefix,
  theme: { extend: {} },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("../../tailwind-plugin/tw-theme"),
    require("../../tailwind-plugin/tw-bs-grid"),
  ],

  /* широка сітка — залишає всі базові утиліти,
     а Tailwind уже сам додасть до них `prefix` */
  safelist: [
    { pattern: /^(bg|text|p|m|px|py|pt|pb|pl|pr|grid|flex|items|justify|gap|space|rounded|shadow|w|h|max-w|min-h|container|row|col|leading|tracking|underline|list|border|ring|divide|object|overflow|z|top|bottom|left|right|inset|translate|rotate|scale|skew|opacity|duration|delay|ease|transition|cursor|select|uppercase|lowercase)-/ },

    // responsive та стан-варіанти
    { pattern: /^(sm|md|lg|xl|2xl):/ },
    { pattern: /^(hover|focus|active):/ },
    { pattern: /^dark:/ },
  ],
};
