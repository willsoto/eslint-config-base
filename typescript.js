module.exports = {
  extends: [
    require.resolve('./index'),
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/no-unused-vars': 'error'
  }
};
