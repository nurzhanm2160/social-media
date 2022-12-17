module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
    overrides: [],
    parserOptions: {
        project: 'tsconfig.eslint.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-case-declarations': 0,
        '@typescript-eslint/consistent-type-assertions': 0,
        'react/prop-types': 0,
        'react/display-name': 0,
        '@typescript-eslint/promise-function-async': 0,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/strict-boolean-expressions': 0,
    },
};
