const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom', // running test in browser simulated dom,
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'], // because using webpack with dynamic module path
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {} // module 16 of testing-javascript
}