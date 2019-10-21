module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'vue/script-indent': [
            'error',
            4,
            {
                'baseIndent': 0,
                'switchCase': 1,
                'ignores': []
            }
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                'attribute': 1,
                'baseIndent': 1,
                'closeBracket': 0,
                'alignAttributesVertically': true,
                'ignores': []
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
