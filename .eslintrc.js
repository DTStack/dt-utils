const eslintrc = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/generic-type-naming': 0,
    '@typescript-eslint/member-ordering': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-extra-parens': 0,
    '@typescript-eslint/no-magic-numbers': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/prefer-for-of': 1,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/interface-name-prefix': [0, {
      prefixWithI: 'always'
    }], // 接口名称首字母 I
    '@typescript-eslint/member-delimiter-style': [0, {
      delimiter: 'none'
    }], // 成员分隔符
    '@typescript-eslint/semi': ['error'],
    'jest/expect-expect': ["off"],

    'space-infix-ops': ['error'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    'space-before-function-paren': ['error', 'always'], // 方法名后空格
    'semi': ['error'],
    "indent": [2, 4, { "SwitchCase": 1 }],// 缩进2
    'quotes': ['error', 'single'], // 单引号
    'no-param-reassign': 0, // 传入参数可修改
    'no-restricted-globals': ['error', 'event'], // 部分全局变量禁止直接使用
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        'allowDestructuring': true, // Allow `const { props, state } = this`; false by default
        'allowedNames': ['self'] // Allow `const self = this`; `[]` by default
      }
    ]
  },
}

module.exports = eslintrc
