module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {
    'require-await': 'off', // Disable require-await rule
    'no-async-promise-executor': 'off', // Disable no-async-promise-executor rule

    'vue/multi-word-component-names': [
      'off',
      {
        ignores: ['index']
      }
    ],
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-unnecessary-arbitrary-value': 'off'
  },
  settings: {
    tailwindcss: {
      callees: ['classnames', 'twMerge'],
      whitelist: [],
      tags: ['twMerge'],
      classRegex: ['(^class(Name)?$|^:class(Name)?$)']
    }
  }
}
