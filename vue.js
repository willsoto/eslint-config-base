module.exports = {
  extends: [require.resolve('./index'), 'plugin:vue/recommended'],
  rules: {
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 7
      }
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': ['error', 'double']
  }
};
