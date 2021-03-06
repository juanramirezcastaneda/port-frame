module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  plugins: ['filenames', '@typescript-eslint', 'prettier'],

  rules: {
    // NOTE: this is unavoidable in some third party libs like webpack
    '@typescript-eslint/camelcase': 'warn',

    '@typescript-eslint/explicit-function-return-type': 'off',
    'filenames/match-regex': [2, '^[a-z-.]+$', true],
    'no-console': 'warn',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // NOTE: TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        'default-case': 'off',
        // NOTE: 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        'no-dupe-class-members': 'off',
        // NOTE: 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
        'no-undef': 'off',
      },
    },
    {
      files: ['**/*.js'],
      parser: 'babel-eslint',
      rules: {
        // NOTE: for scenarios where we want to export a non ts file (e.g. webpack config)
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
};
