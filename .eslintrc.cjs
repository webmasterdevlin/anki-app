module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    // 'plugin:jsx-a11y/recommended', if a11y is needed
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['autofix', 'react-hooks', 'sort-keys-fix'],
  rules: {
    'sort-keys-fix/sort-keys-fix': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        camelcase: 'error',
        'spaced-comment': 'error',
        quotes: ['error', 'single'],
        'no-console': 'warn',
        'no-redeclare': 'warn',
        'react/display-name': 'warn',
        'react/jsx-key': 'warn',
        'arrow-body-style': ['error', 'always'],
        'react/self-closing-comp': ['error', { component: true, html: true }],
        'autofix/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            destructuredArrayIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
            pathGroups: [
              {
                pattern: '@/**/**',
                group: 'parent',
                position: 'before',
              },
            ],
            alphabetize: { order: 'asc' },
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            patterns: ['@/**/**'],
          },
        ],
      },
    },
  ],
};
