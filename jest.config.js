// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
const { pathsToModuleNameMapper } = require('ts-jest');

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  coverageDirectory: 'reports',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
      tsconfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: {
        ignoreCodes: ['TS151001']
      }
    }
  },
  // Do not ignore librairies such as ionic, ionic-native or bootstrap to transform them during unit testing.
  transformIgnorePatterns: ['node_modules/(?!(jest-test|@ng-bootstrap))']
};
