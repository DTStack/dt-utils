module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    testPathIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/__test__/**/(*.)+test.[jt]s?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
