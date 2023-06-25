module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'next',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ]
  }
};
