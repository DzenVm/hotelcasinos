/** @type {import('tailwindcss').Config} */

// ① Зчитуємо префікс
const prefix = process.env.HUGO_TW_PREFIX ?? "";
console.log("TAILWIND-DEBUG prefix =", JSON.stringify(prefix));

module.exports = {
  // → Вимикаємо purge для debug
  content: [],

  // → Встановлюємо префікс
  prefix,

  theme: { extend: {} },
  plugins: [],

  // → Грубий safelist, щоб будь-які префіксовані класи лишалися
  safelist: [
    { pattern: new RegExp(`^${prefix}`) },
    { pattern: new RegExp(`^sm:${prefix}`) },
    { pattern: new RegExp(`^hover:${prefix}`) },
    { pattern: new RegExp(`^dark:${prefix}`) },
  ],
};

// ② Перевіряємо довжину safelist
console.log("TAILWIND-DEBUG safelist count =", module.exports.safelist.length);
