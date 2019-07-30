module.exports = {
  testPathIgnorePatterns: [
    '/ignore/',
  ],
  "projects": [
    {
      "displayName": "a",
      "testMatch": [
        "<rootDir>/a/**/*.test.js",
      ],
      // testPathIgnorePatterns: [
      //   '/ignore/',
      // ],
    },
    {
      "displayName": "b",
      "testMatch": [
        "<rootDir>/b/**/*.test.js",
      ],
    },
  ]
}
