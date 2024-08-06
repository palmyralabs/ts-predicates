import { expect, test } from 'vitest';
import { getPredicate } from '../../../../../src/palmyra/validator/DataValidator';

test('regex success', () => {
    const actual = getPredicate({ regExp: /^[a-zA-Z]+$/ })("Example");
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('regex failure', () => {
    const v = getPredicate({ regExp: /^([1-5])$/ });
    expect(v(6)).toEqual({ valid: false, reason: "regex", value: 6 });
})


test('string-regex success', () => {
    const actual = getPredicate({ regExp: '^[a-zA-Z]+$' })("Example");
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('string -regex failure', () => {
    const v = getPredicate({ regExp: '^([1-5])$' });
    expect(v(6)).toEqual({ valid: false, reason: "regex", value: 6 });
})