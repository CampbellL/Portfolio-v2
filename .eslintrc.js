module.exports = {
  extends: ['airbnb-angular'],
  parserOptions: {
    projects: ['./tsconfig.json', './tsconfig.spec.json'],
  },
  rules: {
    'max-len': [2, { code: 80, tabWidth: 4 }],
    '@typescript-eslint/no-use-before-define': 'off',
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'max-classes-per-file': 'off',
    'lines-between-class-members': 0,
    'no-empty-function': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'explicit',
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'explicit',
        parameterProperties: 'explicit',
      },
    }],
    '@typescript-eslint/no-explicit-any': 1,
    'no-return-assign': 0,
    'no-plusplus': 0,
    'no-continue': 0,
  },
};
