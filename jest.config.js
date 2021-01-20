module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest':{
            isolatedModules: true, 
        },
    },
    testPathIgnorePatterns: ['/node_modules/'],
    testMatch: [
        '**/__tests__/**/(*.)+(spec|test).[jt]s?(x)',
        '**/test/**/(*.)+(spec|test).[jt]s?(x)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
