const OS = require('os');

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['dist/', 'node_modules/'],
  rules: {
    'linebreak-style': ['error', OS.EOL === '\r\n' ? 'windows' : 'unix'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 0,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
