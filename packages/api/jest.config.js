module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  transform: {
    "^.+\\.ts$": 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
};