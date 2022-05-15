module.exports = {
  env: {
    browser: true,
  },
  extends: ["./node_modules/fx-style/", "plugin:mdx/recommended"],
  ignorePatterns: ["public/**/*", "amplify/**/*", "content/examples/**/*"],
  plugins: ["sort-keys-fix"],
  settings: {
    "mdx/code-blocks": true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    "mdx/language-mapper": {},
  },
  rules: {
    "sort-keys-fix/sort-keys-fix": 0,
    "import/no-anonymous-default-export": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-sort-props": 0,
    "node/no-unpublished-require": 0,
  },
  overrides: [
    {
      files: ["*.mdx"],
      rules: {
        "prettier/prettier": 0,
        quotes: 0,
        "react/jsx-no-undef": 0,
        "prettier-fx/prettier": [
          2,
          {
            // unnecessary if you're not using `eslint-plugin-prettier`, but required if you are
            parser: "mdx",
          },
        ],
      },
    },
    {
      files: ["content/examples/*.tsx"],
      rules: {
        isolatedModules: 0,
      },
    },
  ],
};
