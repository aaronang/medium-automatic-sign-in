module.exports = {
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    browser: true
  },
  rules: {
    "prettier/prettier": "error"
  }
};
