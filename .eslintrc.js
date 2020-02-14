module.exports = {
  extends: [
    'kentcdodds',
    'kentcdodds/import',
    'kentcdodds/jest',
    'kentcdodds/react',
  ],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    'import/named': 'off',
  },
  settings: {'import/resolver': 'node'},
  overrides: [  // path resolve manage by webpack
    {
      files: ['**/src/**'],
      settings: {'import/resolver': 'webpack'},
    },
  ],
}
