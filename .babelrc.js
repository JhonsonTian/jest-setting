const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    // jest run in node and don't understand import module
    ['@babel/preset-env',{modules: isTest ? 'commonjs': false}],
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        hoist: isProd,
        sourceMap: !isProd,
        autoLabel: !isProd,
        labelFormat: '[filename]--[local]',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}