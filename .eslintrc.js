module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:jsdoc/recommended'],
  plugins: ['import', 'prettier', 'jsdoc'],
  rules: {
    'class-methods-use-this': 'off',
  },
};
