import UAParser from 'ua-parser-js';

import isMacOS from '..';

jest.mock('ua-parser-js');

describe('isMacOS', () => {
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

    it('should return true when OS is Mac OS', () => {
        mockGetOS.mockReturnValue({ name: 'Mac OS', version: '13.1' });

        expect(isMacOS()).toBe(true);
        expect(mockGetOS).toHaveBeenCalled();
    });

    it('should return false when OS is not Mac OS', () => {
        mockGetOS.mockReturnValue({ name: 'Windows', version: '10' });

        expect(isMacOS()).toBe(false);
    });

    it('should return false when OS name is undefined', () => {
        mockGetOS.mockReturnValue({ name: undefined, version: '1.0' });

        expect(isMacOS()).toBe(false);
    });
});
