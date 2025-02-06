export default {
  extends: ['stylelint-config-recommended', 'stylelint-config-idiomatic-order'],
  plugins: ['stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'no-descending-specificity': null,
    'prettier/prettier': [true, { singleQuote: false }],
  },
  ignoreFiles: ['**/*.{mjs,ts,tsx}'],
};
