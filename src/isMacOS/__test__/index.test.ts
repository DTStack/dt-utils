import UAParser from 'ua-parser-js';

import isMacOS from '../index';

jest.mock('ua-parser-js');

describe('isMacOS', () => {
    it('should return true for macOS', () => {
        (UAParser as unknown as jest.Mock).mockImplementation(() => ({
            getOS: () => ({ name: 'macOS' }),
        }));

        expect(isMacOS()).toBe(true);
    });

    it('should return false for other OS', () => {
        (UAParser as unknown as jest.Mock).mockImplementation(() => ({
            getOS: () => ({ name: 'Windows' }),
        }));

        expect(isMacOS()).toBe(false);
    });
});
