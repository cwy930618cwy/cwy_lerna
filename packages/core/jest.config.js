module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
  ],
  moduleFileExtensions: [
    'json',
    'js',
    'ts',
  ],
  transform: {
    "^.+\\.ts$": 'ts-jest',
  },
};