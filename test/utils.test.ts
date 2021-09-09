import assert from 'assert';
import Utils from '../src/utils';
const { convertBytes, checkExist, getCssText, trim, trimlr, isMacOs, isWindows, isMobileDevice, getParameterByName, percent, removeAllSpaces, toQfw, textOverflowExchange, exchangeOrder, isEqualArr, isEmpty } = Utils;
describe('utils.convertBytes', () => {
    test('convert byte to unit B', () => {
        const byte = 10.24;
        const expected = '10.24 B';
        const newVal = convertBytes(byte);
        expect(newVal).toEqual(expected);
    });
    test('convert byte to unit KB', () => {
        const byte = 1024;
        const expected = '1 KB';
        const newVal = convertBytes(byte);
        expect(newVal).toEqual(expected);
    });
    test('convert byte to unit MB', () => {
        const byte = 10241024;
        const expected = '9.77 MB';
        const newVal = convertBytes(byte);
        expect(newVal).toEqual(expected);
    });
    test('convert byte to unit GB', () => {
        const byte = 3029021814;
        const expected = '2.82 GB';
        const newVal = convertBytes(byte);
        expect(newVal).toEqual(expected);
    });
    test('convert byte to unit TB', () => {
        const byte = 1184380146909; // 1024 * 5;
        const expected = '1.08 TB';
        const newVal = convertBytes(byte);
        expect(newVal).toEqual(expected);
    });
    test('convert byte to unit PB', () => {
        const byte = 1125899906842624;
        const expected = '1 PB';
        const newVal = convertBytes(byte);
        expect(newVal).toEqual(expected);
    });
});
describe('utils:', () => {
    test('isMacOs=>false', () => {
        assert.strictEqual(isMacOs(), false);
    });
    test('isWindows=>false', () => {
        assert.strictEqual(isWindows(), false);
    });
    test('isMobileDevice=>false', () => {
        assert.strictEqual(isMobileDevice(), false);
    });
    test('getParameterByName()=>张三', () => {
        assert.strictEqual(getParameterByName('name', 'http://gitlab.prod.dtstack.cn?name=张三'), '张三');
    });
    test('percent(1)=>100%', () => {
        assert.strictEqual(percent(1), '100%');
    });
    test('percent(0.5)=>50%', () => {
        assert.strictEqual(percent(0.5), '50%');
    });
    test('percent(0.54321,1)=>50%', () => {
        assert.strictEqual(percent(0.54321, 1), '54.3%');
    });
    test('removeAllSpaces(\' aa bb \')=>aabb', () => {
        assert.strictEqual(removeAllSpaces(' aa bb '), 'aabb');
    });
    test('toQfw(\'123123\')=>123,123', () => {
        assert.strictEqual(toQfw('123123'), '123,123');
    });
    test('textOverflowExchange(\'my name is linhe\')=>"my name is..."', () => {
        assert.strictEqual(textOverflowExchange('my name is linhe', 10), 'my name is...');
    });
    test('exchangeOrder(\'ascend\')=>asc', () => {
        assert.strictEqual(exchangeOrder('ascend'), 'asc');
    });
    test('exchangeOrder(\'descend\')=>desc', () => {
        assert.strictEqual(exchangeOrder('descend'), 'desc');
    });
    test('isEqualArr([1,2,3],[1,2,3])=>true', () => {
        assert.strictEqual(isEqualArr(['1', '2', '3'], ['1', '2', '3']), true);
    });
    /**
   * checkExist
   */
    describe('checkExist', () => {
        test(' undefined => false ', () => {
            assert.strictEqual(checkExist(undefined), false);
        });
        test(' \'\' => false ', () => {
            assert.strictEqual(checkExist(''), false);
        });
        test(' null => false ', () => {
            assert.strictEqual(checkExist(null), false);
        });
        test(' name => false ', () => {
            assert.strictEqual(checkExist('name'), true);
        });
    });
    /**
    * getCssText
    */
    describe('getCssText', () => {
        test(' {height:\'100px\',width:\'100px\'} => height:100px;width:100px; ', () => {
            assert.strictEqual(getCssText({ height: '100px', width: '100px' }), 'height:100px;width:100px;');
        });
    });
    /**
        * trim
    */
    describe('trim', () => {
        test('\' 张三 \'=> 张三 ', () => {
            assert.strictEqual(trim(' 张三 '), '张三');
        });
        test('\' 张三\'=> 张三 ', () => {
            assert.strictEqual(trim(' 张三'), '张三');
        });
        test('\'张三 \'=> 张三', () => {
            assert.strictEqual(trim('张三 '), '张三');
        });
        test('\'张 三\'=> 张三', () => {
            assert.strictEqual(trim('张 三'), '张 三');
        });
        test('\'张 三\'=> 张 三', () => {
            assert.strictEqual(trimlr('张 三'), '张 三');
        });
    });

    describe('IsEmpty Test', () => {
        test('return true if value is empty string', () => {
            expect(isEmpty('')).toBeTruthy()
        });

        test('return true if value is null', () => {
            expect(isEmpty(null)).toBeTruthy()
        });

        test('return true if value is undefined', () => {
            expect(isEmpty(undefined)).toBeTruthy()
        });

        test('return true if value is empty array', () => {
            expect(isEmpty([])).toBeTruthy()
        });

        test('return true if value is empty object', () => {
            expect(isEmpty({})).toBeTruthy()
        });

        test('return false if value is other conditions', () => {
            expect(isEmpty('123')).toBeFalsy()
            expect(isEmpty([1])).toBeFalsy()
            expect(isEmpty({ id:1 })).toBeFalsy()
        });
    });
});

