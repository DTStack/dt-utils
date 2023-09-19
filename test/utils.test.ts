import * as assert from 'assert';
import Utils from '../src/utils';

const {
    convertBytes,
    checkExist,
    getCssText,
    trim,
    trimAll,
    isMacOs,
    isWindows,
    isMobileDevice,
    getParameterByName,
    percent,
    getThousandth,
    textOverflowExchange,
    exchangeOrder,
    isEqualArr,
    isEmpty,
    isObj,
    transformArray,
    removeEmpty,
    mergeDeep,
    getFullUrlPath,
    getQueryVariable,
} = Utils;

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
        assert.strictEqual(
            getParameterByName('name', 'http://gitlab.prod.dtstack.cn?name=张三'),
            '张三'
        );
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

    test('getThousandth("")', () => {
        assert.strictEqual(getThousandth(''), '0');
    });
    test('getThousandth(null)', () => {
        assert.strictEqual(getThousandth(null), '0');
    });
    test('getThousandth(undefined)', () => {
        assert.strictEqual(getThousandth(undefined), '0');
    });
    test('getThousandth(123456)', () => {
        assert.strictEqual(getThousandth(123456), '123,456');
    });
    test("getThousandth('123456')", () => {
        assert.strictEqual(getThousandth('123456'), '123,456');
    });
    test('getThousandth(1234567)', () => {
        assert.strictEqual(getThousandth(1234567), '1,234,567');
    });
    test("getThousandth('1234567')", () => {
        assert.strictEqual(getThousandth('1234567'), '1,234,567');
    });
    test('getThousandth(1234.56789)', () => {
        assert.strictEqual(getThousandth(1234.56789), '1,234.56789');
    });
    test("getThousandth('1234.56789')", () => {
        assert.strictEqual(getThousandth('1234.56789'), '1,234.56789');
    });

    test('textOverflowExchange(\'my name is linhe\')=>"my name is..."', () => {
        assert.strictEqual(textOverflowExchange('my name is linhe', 10), 'my name is...');
    });
    test("exchangeOrder('ascend')=>asc", () => {
        assert.strictEqual(exchangeOrder('ascend'), 'asc');
    });
    test("exchangeOrder('descend')=>desc", () => {
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
        test(" '' => false ", () => {
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
        test(" {height:'100px',width:'100px'} => height:100px;width:100px; ", () => {
            assert.strictEqual(
                getCssText({ height: '100px', width: '100px' }),
                'height:100px;width:100px;'
            );
        });
    });

    /**
     * trim
     */
    describe('trim', () => {
        test("' 张三 '=> 张三 ", () => {
            assert.strictEqual(trim(' 张三 '), '张三');
        });
        test("' 张三'=> 张三 ", () => {
            assert.strictEqual(trim(' 张三'), '张三');
        });
        test("'张三 '=> 张三", () => {
            assert.strictEqual(trim('张三 '), '张三');
        });
        test("'张 三'=> 张三", () => {
            assert.strictEqual(trim('张 三'), '张 三');
        });
    });

    /**
     * trimAll
     */
    describe('trimAll', () => {
        test(' . 12 3  => .123', () => {
            assert.strictEqual(trimAll(' . 12 3 '), '.123');
        });
        test(' . 12 3 => .123', () => {
            assert.strictEqual(trimAll(' . 12 3'), '.123');
        });
        test('. 12 3 => .123', () => {
            assert.strictEqual(trimAll('. 12 3'), '.123');
        });
    });

    describe('transformArray Test', () => {
        test('return the two-dimensional array', () => {
            const arr = ['1', '2', '3', '4', '5', '6'];
            expect(transformArray(arr, 2)).toEqual([
                ['1', '2'],
                ['3', '4'],
                ['5', '6'],
            ]);
        });
    });

    describe('IsEmpty Test', () => {
        test('return true if value is empty string', () => {
            expect(isEmpty('')).toBeTruthy();
        });

        test('return true if value is null', () => {
            expect(isEmpty(null)).toBeTruthy();
        });

        test('return true if value is undefined', () => {
            expect(isEmpty(undefined)).toBeTruthy();
        });

        test('return true if value is empty array', () => {
            expect(isEmpty([])).toBeTruthy();
        });

        test('return true if value is empty object', () => {
            expect(isEmpty({})).toBeTruthy();
        });

        test('return false if value is other conditions', () => {
            expect(isEmpty('123')).toBeFalsy();
            expect(isEmpty([1])).toBeFalsy();
            expect(isEmpty({ id: 1 })).toBeFalsy();
        });
    });

    describe('isObj Test', () => {
        test('return true if value is object', () => {
            expect(isObj({})).toBeTruthy();
        });
        test('return false if value is not object', () => {
            expect(isObj('123')).toBeFalsy();
        });
    });

    describe('removeEmpty Test', () => {
        test('return null if value is not obj', () => {
            expect(removeEmpty('123')).toBeUndefined();
        });
        test('return processed data if object includes undefined', () => {
            expect(removeEmpty({ a: 'test', b: undefined, c: { d: undefined } })).toEqual({
                a: 'test',
                c: {},
            });
        });
    });
    describe('mergeDeep test', () => {
        test('basic var', () => {
            expect(mergeDeep({ a: 123, c: 321 }, { a: 'cover', b: 456 })).toEqual({
                a: 'cover',
                b: 456,
                c: 321,
            });
        });
        test('complex var', () => {
            expect(
                mergeDeep(
                    { a: 123, b: 321, innerObj: { a: 123, c: 456 } },
                    { a: 'cover', c: 456, innerObj: { a: 'cover', b: 321 } }
                )
            ).toEqual({
                a: 'cover',
                b: 321,
                c: 456,
                innerObj: { a: 'cover', b: 321, c: 456 },
            });
        });
        test('empty var', () => {
            expect(mergeDeep(null, null)).toEqual(null);
            expect(mergeDeep({ name: 1 }, null)).toEqual({ name: 1 });
            expect(mergeDeep(null, { name: 2 })).toEqual({ name: 2 });
        });
        test('_isMergeAtom case', () => {
            expect(
                mergeDeep({ a: 123, c: 321 }, { a: 'cover', b: 456, _isMergeAtom: true })
            ).toEqual({ a: 'cover', b: 456 });
        });
    });
    describe('getFullUrlPath test', () => {
        expect(getFullUrlPath('/test/getUrlPathname', { a: 1, b: 2 })).toEqual(
            '/test/getUrlPathname?a=1&b=2'
        );
        expect(getFullUrlPath('/test/getUrlPathname', { a: 1, b: undefined })).toEqual(
            '/test/getUrlPathname?a=1&b=undefined'
        );
        expect(getFullUrlPath('/test/getUrlPathname', { a: 1, b: null })).toEqual(
            '/test/getUrlPathname?a=1&b=null'
        );
        expect(getFullUrlPath('/test/getUrlPathname', { a: 1, b: '' })).toEqual(
            '/test/getUrlPathname?a=1&b='
        );
    });
    describe('getQueryVariable test', () => {
        expect(
            getQueryVariable(
                '?metaType=1&tabsKey=&tableId=1&dataSourceType=1&name=t_dtinsight_test'
            )
        ).toEqual({
            dataSourceType: '1',
            metaType: '1',
            name: 't_dtinsight_test',
            tableId: '1',
            tabsKey: '',
        });
        expect(getQueryVariable('?a=1&b=2')).toEqual({ a: '1', b: '2' });
        expect(getQueryVariable('?a=1&b=undefined')).toEqual({
            a: '1',
            b: 'undefined',
        });
        expect(getQueryVariable('?a=1&b=null')).toEqual({ a: '1', b: 'null' });
    });
});
