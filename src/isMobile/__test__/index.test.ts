import isMobile from '../index';

describe('isMobile', () => {
    let userAgentGetter;

    beforeEach(() => {
        userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
    });

    it('should return false if navigator is undefined', () => {
        expect(isMobile()).toBe(false);
    });

    it('should return false if window is undefined', () => {
        userAgentGetter.mockReturnValue('Mozilla/5.0');
        expect(isMobile()).toBe(false);
    });

    it('should return true for Android mobile user agent', () => {
        userAgentGetter.mockReturnValue('Mozilla/5.0 (Linux; Android 10; Pixel 3 XL)');
        expect(isMobile()).toBe(true);
    });

    it('should return true for iPhone user agent', () => {
        userAgentGetter.mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X)');
        expect(isMobile()).toBe(true);
    });

    it('should return true for iPad user agent', () => {
        userAgentGetter.mockReturnValue('Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X)');
        expect(isMobile()).toBe(true);
    });

    it('should return true for Windows Phone user agent', () => {
        userAgentGetter.mockReturnValue('Mozilla/5.0 (Windows Phone 10.0; Android 6.0)');
        expect(isMobile()).toBe(true);
    });

    it('should return false for desktop user agent', () => {
        userAgentGetter.mockReturnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64)');
        expect(isMobile()).toBe(false);
    });

    it('should return false for unknown user agent', () => {
        userAgentGetter.mockReturnValue('Unknown User Agent');
        expect(isMobile()).toBe(false);
    });

    it('should return true for other mobile user agents', () => {
        const mobileUserAgents = [
            'Opera Mini',
            'Opera Mobi',
            'BlackBerry',
            'IEMobile',
            'Mobile Safari',
            'Nokia',
            'Kindle',
            'Silk',
            'SonyEricsson',
        ];

        mobileUserAgents.forEach((agent) => {
            userAgentGetter.mockReturnValue(agent);
            expect(isMobile()).toBe(true);
        });
    });

    it('should return false for non-mobile user agents', () => {
        const nonMobileUserAgents = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
            'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0',
        ];

        nonMobileUserAgents.forEach((agent) => {
            userAgentGetter.mockReturnValue(agent);
            expect(isMobile()).toBe(false);
        });
    });
});
