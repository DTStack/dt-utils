import UAParser from 'ua-parser-js';

import isWindows from '../index';

// 模拟 UAParser
jest.mock('ua-parser-js');

describe('isWindows', () => {
    let mockGetOS: jest.Mock;

    beforeEach(() => {
        mockGetOS = jest.fn();
        (UAParser as unknown as jest.Mock).mockImplementation(() => ({
            getOS: mockGetOS,
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return true for Windows OS', () => {
        mockGetOS.mockReturnValue({ name: 'Windows' });
        expect(isWindows()).toBe(true);
    });

    it('should return false for macOS', () => {
        mockGetOS.mockReturnValue({ name: 'macOS' });
        expect(isWindows()).toBe(false);
    });

    it('should return false for Linux', () => {
        mockGetOS.mockReturnValue({ name: 'Linux' });
        expect(isWindows()).toBe(false);
    });

    it('should return false for Android', () => {
        mockGetOS.mockReturnValue({ name: 'Android' });
        expect(isWindows()).toBe(false);
    });

    it('should return false for iOS', () => {
        mockGetOS.mockReturnValue({ name: 'iOS' });
        expect(isWindows()).toBe(false);
    });

    it('should return false for other unknown OS', () => {
        mockGetOS.mockReturnValue({ name: 'Unknown OS' });
        expect(isWindows()).toBe(false);
    });
});
