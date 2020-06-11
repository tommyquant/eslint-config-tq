module.exports = {
    'extends': [
        'plugin:react/recommended'
    ],
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        'jsx-quotes': [
            'error',
            'prefer-double'
        ]
    }
};
