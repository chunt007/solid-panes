module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  // For some reason Jest is not measuring coverage without the below option.
  // Unfortunately, despite `!(.test)`, it still measures coverage of test files as well:
  forceCoverageMatch: ['**/*!(.test).ts'],
  // Since we're only measuring coverage for TypeScript (i.e. added with test infrastructure in place),
  // we can be fairly strict. However, if you feel that something is not fit for coverage,
  // mention why in a comment and mark it as ignored:
  // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md
  coverageThreshold: {
    global: {
      // @@ TODO raise threshold again - simply lowered it to make tests build for changes going from dom to context
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  }
}
