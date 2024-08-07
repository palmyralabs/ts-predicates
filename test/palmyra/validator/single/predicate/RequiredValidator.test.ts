import { expect, test } from 'vitest';
import { getPredicate } from '../../../../../src/palmyra/validator/DataValidator';


test('required_string_success', () => {
    const actual = getPredicate({ required: true })('hellostr');
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})


test('required_object_success', () => {
    const data = { 'key': '23' };
    const actual = getPredicate({ required: true })(data);
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})


test('required_object_empty', () => {
    const data = {};
    const actual = getPredicate({ required: true })(data);
    const expected = { valid: false, reason: "required", value: data }
    expect(actual).toEqual(expected);
})