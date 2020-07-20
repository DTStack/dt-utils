import assert from 'assert';
import Utils from '../src/utils';
const { checkExist,getCssText,trim } = Utils;

describe('utils:', () => {
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
            assert.strictEqual(getCssText({height:'100px',width:'100px'}), 'height:100px;width:100px;');
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
    });
});
