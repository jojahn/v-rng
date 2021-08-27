module.exports = {
  root: true,
  rules: {
    "no-unused-vars": "warn",
    "vue/no-unused-vars": "warn",
    "no-undef": "warn"
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
};
