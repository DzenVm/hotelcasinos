module.exports = {
  content: [],     // ← натиском змінили на порожній масив
  prefix,
  theme: { extend: {} },
  plugins: [],
  safelist: [
    { pattern: new RegExp(`^${prefix}`) },
    { pattern: new RegExp(`^sm:${prefix}`) },
    { pattern: new RegExp(`^hover:${prefix}`) },
    { pattern: new RegExp(`^dark:${prefix}`) },
  ],
};
