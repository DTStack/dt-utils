module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            {
                tsconfig: {
                    allowJs: true,
                },
            },
        ],
    },
    transformIgnorePatterns: ['/node_modules/(?!(?:\\.pnpm/lodash-es@|lodash-es/))'],
    testPathIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/__test__/**/(*.)+test.[jt]s?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
