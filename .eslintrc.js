module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        indent: ["warn", 4],
        "react/react-in-jsx-scope": "off",
        quotes: ["warn", "double"],
        semi: ["error", "always"],
        "ban-ts-comment": "off",
        "no-unused-vars": ["warn"],
        "@typescript-eslint/ban-ts-comment": "off",
    },
};
