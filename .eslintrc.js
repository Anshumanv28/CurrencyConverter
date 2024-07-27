module.exports = {
  extends: ["handlebarlabs"],
  rules: {
    "react/jsx-props-no-spreading": "off", // 'off' or 0 to show a zero warning level that means off or no warning
    "react/jsx-curly-newline": 0,
    "react/react-in-jsx-scope": "off",
    "react/style-prop-object": 0,
    // "no-named-import": "off",
    "spaced-comment": "off",
    "no-unused-vars": "off",
    // "import/extensions": "always", //since extensions are resolved automatically
  },
};
