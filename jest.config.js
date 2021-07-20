export default {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  extensionsToTreatAsEsm: ['.ts'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.[tj]sx?$': 'babel-jest'
  }
};
