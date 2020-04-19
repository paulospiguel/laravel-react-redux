module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "prettier", "react-hooks"],
    rules: {
        strict: 0,
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".jsx", ".js"] },
        ],
        "import/prefer-default-export": "off",
        "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
        "import/no-extraneous-dependencies": "off",
        "jsx-a11y/label-has-for": [
            2,
            {
                required: {
                    every: ["id"],
                },
            },
        ],
        camelcase: "off",

        /*  "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn", */
    },
};
/* eslint-disable jsx-a11y/label-has-associated-control */
