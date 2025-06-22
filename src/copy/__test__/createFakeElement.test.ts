import createFakeElement from '../createFakeElement';

describe('createFakeElement', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'pageYOffset', {
            value: 100,
            writable: true,
        });

        document.documentElement.scrollTop = 0;
    });

    test('creates a textarea element with specified value', () => {
        const value = 'test text';
        const element = createFakeElement(value);

        expect(element.tagName.toLowerCase()).toBe('textarea');
        expect(element.value).toBe(value);
        expect(element.getAttribute('readonly')).toBe('');
    });

    test('sets correct styles in LTR mode', () => {
        document.documentElement.setAttribute('dir', 'ltr');
        const element = createFakeElement('test');

        expect(element.style.fontSize).toBe('12pt');
        expect(element.style.border).toBe('0px');
        expect(element.style.padding).toBe('0px');
        expect(element.style.margin).toBe('0px');
        expect(element.style.position).toBe('absolute');
        expect(element.style.left).toBe('-9999px');
        expect(element.style.opacity).toBe('0');
        expect(element.style.visibility).toBe('hidden');
    });

    test('sets correct styles in RTL mode', () => {
        document.documentElement.setAttribute('dir', 'rtl');
        const element = createFakeElement('test');

        expect(element.style.right).toBe('-9999px');
        expect(element.style.left).toBe('');
    });

    test('sets correct vertical position using pageYOffset', () => {
        const element = createFakeElement('test');
        expect(element.style.top).toBe('100px');
    });

    test('sets vertical position using scrollTop when pageYOffset is undefined', () => {
        Object.defineProperty(window, 'pageYOffset', {
            value: undefined,
            writable: true,
        });
        document.documentElement.scrollTop = 50;

        const element = createFakeElement('test');
        expect(element.style.top).toBe('50px');
    });

    test('handles empty string input', () => {
        const element = createFakeElement('');
        expect(element.value).toBe('');
    });
});
