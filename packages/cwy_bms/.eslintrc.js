module.exports = {
  root: true,
  extends: ["plugin:vue/essential", "@vue/standard", "@vue/typescript"],
  globals: {
    AMap: true
  },
  overrides: [
    {
      files: "*.spec.ts",
      rules: {
        "no-unused-expressions": "off"
      }
    },
    {
      files: "*.ts",
      rules: {
        "no-useless-constructor": "off"
      }
    },
    {
      files: "*",
      rules: {
        "prefer-promise-reject-errors": "off",
        "no-throw-literal": "off"
      }
    }
  ]
};
