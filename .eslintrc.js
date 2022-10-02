module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'arrow-body-style': 'off',
    'no-undef': 'off',
    'max-len': 'off'
  }
};
