module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ["eslint:recommended", "plugin:astro/recommended"],

  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],

      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",

      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
