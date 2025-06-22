import UAParser from 'ua-parser-js';

import checkBrowserSupport from '..';

jest.mock('ua-parser-js');

describe('checkBrowserSupport', () => {
    const mockBrowserInfo = (name: string, version: string) => {
        (UAParser as unknown as jest.Mock).mockImplementation(() => ({
            getBrowser: () => ({ name, version }),
        }));
    };

    it('should throw an error if input is not an array', () => {
        expect(() => checkBrowserSupport(null as any)).toThrow(TypeError);
        expect(() => checkBrowserSupport({} as any)).toThrow(TypeError);
        expect(() => checkBrowserSupport('string' as any)).toThrow(TypeError);
        expect(() => checkBrowserSupport(123 as any)).toThrow(TypeError);
    });

    it('should return true for supported browser and version', () => {
        mockBrowserInfo('Chrome', '90');
        const browsers = [{ name: 'chrome', version: '80' }];
        expect(checkBrowserSupport(browsers)).toBe(true);
    });

    it('should return false for unsupported browser', () => {
        mockBrowserInfo('Firefox', '70');
        const browsers = [{ name: 'chrome', version: '80' }];
        expect(checkBrowserSupport(browsers)).toBe(false);
    });

    it('should return false for unsupported version', () => {
        mockBrowserInfo('Chrome', '70');
        const browsers = [{ name: 'chrome', version: '80' }];
        expect(checkBrowserSupport(browsers)).toBe(false);
    });

    it('should return true for multiple browsers', () => {
        mockBrowserInfo('Safari', '14');
        const browsers = [
            { name: 'chrome', version: '80' },
            { name: 'safari', version: '13' },
        ];
        expect(checkBrowserSupport(browsers)).toBe(true);
    });

    it('should return false if none of the browsers are supported', () => {
        mockBrowserInfo('Firefox', '60');
        const browsers = [
            { name: 'chrome', version: '80' },
            { name: 'safari', version: '14' },
        ];
        expect(checkBrowserSupport(browsers)).toBe(false);
    });

    it('should return true for exact version match', () => {
        mockBrowserInfo('Chrome', '80');
        const browsers = [{ name: 'chrome', version: '80' }];
        expect(checkBrowserSupport(browsers)).toBe(true);
    });

    it('should return false for exact version mismatch', () => {
        mockBrowserInfo('Chrome', '80');
        const browsers = [{ name: 'chrome', version: '81' }];
        expect(checkBrowserSupport(browsers)).toBe(false);
    });

    it('should handle mixed case browser names', () => {
        mockBrowserInfo('Chrome', '90');
        const browsers = [{ name: 'ChRoMe', version: '80' }];
        expect(checkBrowserSupport(browsers)).toBe(true);
    });

    it('should return false for unsupported browser name', () => {
        mockBrowserInfo('Edge', '90');
        const browsers = [{ name: 'chrome', version: '80' }];
        expect(checkBrowserSupport(browsers)).toBe(false);
    });

    it('should handle numeric version strings correctly', () => {
        mockBrowserInfo('Chrome', '90');
        const browsers = [{ name: 'chrome', version: 80 }];
        expect(checkBrowserSupport(browsers)).toBe(true);
    });

    it('should handle numeric version comparisons correctly', () => {
        mockBrowserInfo('Chrome', '90');
        const browsers = [{ name: 'chrome', version: 90 }];
        expect(checkBrowserSupport(browsers)).toBe(true);

        mockBrowserInfo('Chrome', '90');
        const browsers2 = [{ name: 'chrome', version: 91 }];
        expect(checkBrowserSupport(browsers2)).toBe(false);
    });
});
