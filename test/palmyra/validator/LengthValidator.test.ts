import { expect, test } from 'vitest';
import { getLengthValidator } from '../../../src/palmyra/validator/builder/LengthPredicateBuilder';

test('length equal-success', () => {
    const actual = getLengthValidator({ is: 8 })('hellostr');
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('length equal-failure-Less', () => {
    const v = getLengthValidator({ is: 8 });
    expect(v('hello')).toEqual({ valid: false, reason: "length.eq", value: 5 });
})

test('length equal-failure-greater', () => {
    const v = getLengthValidator({ is: 8 });
    expect(v('hello world')).toEqual({ valid: false, reason: "length.eq", value: 11 });
})


test('length minimum-success', () => {
    const actual = getLengthValidator({ min: 8 })('hellostr');
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('length minimum-failure-Less', () => {
    const v = getLengthValidator({ min: 8 });
    expect(v('hello')).toEqual({ valid: false, reason: "length.min", value: 5 });
})

test('length minimum-failure-greater', () => {
    const v = getLengthValidator({ min: 8 });
    expect(v('hello world')).toEqual({ valid: true });
})

test('length maximum-success', () => {
    const actual = getLengthValidator({ max: 8 })('hellostr');
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('length maximum-failure-Less', () => {
    const v = getLengthValidator({ max: 8 });
    expect(v('hello')).toEqual({ valid: true });
})

test('length maximum-failure-greater', () => {
    const v = getLengthValidator({ max: 8 });
    expect(v('hello world')).toEqual({ valid: false, reason: "length.max", value: 11 });
})