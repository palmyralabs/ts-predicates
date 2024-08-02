import { expect, test } from 'vitest';
import { getPredicate } from '../../../../src/palmyra/validator/DataValidator';

test('length equal-success', () => {
    const actual = getPredicate({ length: { is: 8 } })('hellostr');
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('length equal-failure-Less', () => {
    const v = getPredicate({ length: { is: 8 } });
    expect(v('hello')).toEqual({ valid: false, reason: "length.eq", value: 5 });
})

test('length equal-failure-greater', () => {
    const v = getPredicate({ length: { is: 8 } });
    expect(v('hello world')).toEqual({ valid: false, reason: "length.eq", value: 11 });
})


test('length minimum-success-equal', () => {
    const actual = getPredicate({ length: { min: 8 } })('hellostr');
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('length minimum-failure-Less', () => {
    const v = getPredicate({ length: { min: 8 } });
    expect(v('hello')).toEqual({ valid: false, reason: "length.min", value: 5 });
})

test('length minimum-failure-undefined', () => {
    const v = getPredicate({ length: { min: 8 } });
    expect(v(undefined)).toEqual({ valid: false, reason: "length.invalid", value: undefined });
})

test('length minimum-failure-undefined', () => {
    const v = getPredicate({ length: { min: 8 } });
    expect(v(null)).toEqual({ valid: false, reason: "length.invalid", value: null });
})

test('length minimum-success-greater', () => {
    const v = getPredicate({ length: { min: 8 } });
    expect(v('hello world')).toEqual({ valid: true });
})

test('length maximum-success-equal', () => {
    const actual = getPredicate({ length: { max: 8 } })('hellostr');
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('length maximum-success-less', () => {
    const v = getPredicate({ length: { max: 8 } });
    expect(v('hello')).toEqual({ valid: true });
})

test('length maximum-failure-greater', () => {
    const v = getPredicate({ length: { max: 8 } });
    expect(v('hello world')).toEqual({ valid: false, reason: "length.max", value: 11 });
})

test('length range success', () => {
    const v = getPredicate({ length: { min: 5, max: 8 } });
    expect(v('hello world')).toEqual({ valid: false, reason: "length.max", value: 11 });
    expect(v('hello')).toEqual({ valid: true });
    expect(v('hellostr')).toEqual({ valid: true });
    expect(v('hello ')).toEqual({ valid: true });
})

