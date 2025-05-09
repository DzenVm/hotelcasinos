const prefix = process.env.HUGO_TW_PREFIX ?? "";

safelist: [
  { pattern: new RegExp(`^${prefix}`) },                // усе з префіксом
  { pattern: new RegExp(`^dark:${prefix}`) },           // dark:
  { pattern: new RegExp(`^(sm|md|lg|xl|2xl):${prefix}`) } // responsive
],
