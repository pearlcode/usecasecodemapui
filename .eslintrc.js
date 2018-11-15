module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 201
    },
    "plugins": ["prettier"],
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true,
        "jest": true
    },
    "rules": {
        "quotes": [2, "single", { "avoidEscape": true }],
        // Indent with 4 spaces
        "indent": ["error", 4],
        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 4],
        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 4],
        //"prettier/prettier": "error",
        "no-console":["warn"]
    },
    "overrides": [
        {
            "files": [ "*.js" ],
            "excludedFiles": "coverage/*1"
           /* "rules": {
                "quotes": [ 2, "single" ]
            }
           */
        }
    ],
    "extends": [ "prettier", "airbnb"],
};