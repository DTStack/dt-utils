module.exports = {
    extends: [require.resolve('ko-lint-config/.eslintrc')],
    rules: {
        'no-console': 0,
        'no-param-reassign': 0, // 函数的入参再次赋值
    },
};
