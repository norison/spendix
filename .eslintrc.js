// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier", "plugin:jest/recommended", "plugin:jest/style"],
  plugins: ["prettier", "jest"],
  ignorePatterns: ["/dist/*"],
  env: {
    "jest/globals": true,
  },
  rules: {
    "prettier/prettier": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
};
