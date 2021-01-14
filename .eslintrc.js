module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: [
      'error',
      'never',
    ],
    'linebreak-style': 0,
    quotes: [
      'error',
      'single',
    ],
    'react/jsx-filename-extension': [
      1, {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': 0,
  },
}
