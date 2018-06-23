const isProduction = process.env.NODE_ENV === 'production';
const errorIfProduction = isProduction ? 'error' : 'off';

const additionalRules = ['./rules/best-practices'].map(require.resolve);

module.exports = {
  extends: ['eslint:recommended'].concat(additionalRules),
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': errorIfProduction,
    'no-debugger': errorIfProduction
  }
};
