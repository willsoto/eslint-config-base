module.exports = {
  extends: [require.resolve('./index'), 'plugin:vue/strongly-recommended'],
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
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'never',
          component: 'never'
        },
        svg: 'never',
        math: 'never'
      }
    ]
  }
};
