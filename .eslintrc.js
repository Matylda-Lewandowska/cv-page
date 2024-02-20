module.exports = {
  extends: [
    'semistandard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'block-spacing': ['error', 'always'],
    indent: ['error', 2]
  }
};
