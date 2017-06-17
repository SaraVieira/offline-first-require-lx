module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
		"mocha": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "flowtype",
    "compat",
    "prettier"
  ],
  "rules": {
    "no-unused-vars": ["error", { "varsIgnorePattern": "h" }],
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/no-static-element-interactions": 1,
    "compat/compat": 2,
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "*.js",
          "**/*.spec.js",
          "**/*.spec.jsx",
          "config/**/*.js",
          "bin/*"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "parser": "flow",
        "singleQuote": true,
        "trailingComma": "es5",
      }
    ],
    "flowtype/no-weak-types": [1]
  },
  "globals": {
    "DEVELOPMENT": true,
    "ENVIRONMENT": true
  }
};
