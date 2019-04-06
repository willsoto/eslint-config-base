const isProduction = process.env.NODE_ENV === 'production';
const errorIfProduction = isProduction ? 'error' : 'off';

const additionalRules = [
  './rules/best-practices',
  './rules/es6',
  './rules/style',
  './rules/variables'
].map(require.resolve);

module.exports = {
  extends: ['eslint:recommended'].concat(additionalRules),
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': errorIfProduction,
    'no-debugger': errorIfProduction
  }
};
