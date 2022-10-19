module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        '@typescript-eslint/no-shadow': 0,
        // '@typescript-eslint/no-unused-vars': 1,
        'consistent-return': 0,
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'import/prefer-default-export': 0,
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        'react/button-has-type': 0,
        'react/no-unstable-nested-components': [2, { allowAsProps: true }],
        'react/no-array-index-key': 0,
        'class-methods-use-this': 0,
        'no-param-reassign': 0,

        'prettier/prettier': 'warn',
        'react/prop-types': 0,
        'react/destructuring-assignment': 0,
        'no-case-declarations': 0,
        'default-param-last': 0,
        'react/jsx-curly-brace-presence': 0,
        'jsx-a11y/click-events-have-key-events': 'warn',
        'no-unused-vars': 'warn',
        'jsx-a11y/no-static-element-interactions': 0,
        'no-underscore-dangle': 0,
        'jsx-a11y/no-autofocus': 0,
        'array-callback-return': ['error', { allowImplicit: true }],

        'import/order': 0,
        // 'simple-import-sort/exports': 1,
        // 'simple-import-sort/imports': [
        //     1,
        //     {
        //         groups: [
        //             // External packages.
        //             ['^'],
        //             // Internal packages.
        //             ['^@'],
        //             // Side effect imports.
        //             ['^\\u0000'],
        //             // Parent imports.
        //             ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        //             // Other relative imports.
        //             ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        //             // Style imports.
        //             ['^.+\\.s?css$'],
        //         ],
        //     },
        // ],
    },
};
