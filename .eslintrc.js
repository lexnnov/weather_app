module.exports = {
    "extends": "airbnb-base",
    "rules": {
      'import/extensions': ['error', 'always', { 'ignorePackages': true }],
      "no-underscore-dangle": 0,
      "no-console": "off",
      "max-len": ["error", { "code": 140 }],
      "prefer-destructuring": ["error", {"object": false, "array": false}],
      "no-param-reassign": [2, { "props": false }],
      "no-throw-literal": "off",
      "import/no-cycle:": 'off',
      "consistent-return": "off",
      "one-var": ["off", "always"]
    }
};
