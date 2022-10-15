module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:i18next/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'i18next'],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        indent: ['warn', 4],
        'react/react-in-jsx-scope': 'off',
        quotes: ['warn', 'single'],
        semi: ['error', 'always'],
        'ban-ts-comment': 'off',
        'no-unused-vars': ['warn'],
        '@typescript-eslint/ban-ts-comment': 'off',
        'prettier/prettier': 2,
        'max-len': ['error', 100, { ignoreComments: true }],
        'import/order': [
            2,
            {
                groups: ['external', 'builtin', 'index', 'sibling', 'parent', 'internal', 'type'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
        ],
    },
};
