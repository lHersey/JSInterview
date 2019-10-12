module.exports = {
  roots: ['<rootDir>/tests'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
  moduleFileExtensions: ['js'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['node_modules', 'lib'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50,
    },
  },
};
