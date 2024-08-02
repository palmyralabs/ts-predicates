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


test('range start-success', () => {
    const actual = getPredicate({ range: { start: 10 } })(10);
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('range start-failure', () => {
    const v = getPredicate({ range: { start: 10 } });
    expect(v(9)).toEqual({ valid: false, reason: "range.start", value: 9 });
})

test('range end-success', () => {
    const actual = getPredicate({ range: { end: 100 } })(98);
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('range end-failure', () => {
    const v = getPredicate({ range: { end: 100 } });
    expect(v(101)).toEqual({ valid: false, reason: "range.end", value: 101 });
})

test('range start-end-success', () => {
    const v = getPredicate({ range: { start: 1001, end: 1099 } });
    expect(v(1100)).toEqual({ valid: false, reason: "range.end", value: 1100 });
    expect(v(90)).toEqual({ valid: false, reason: "range.start", value: 90 });
    expect(v(1020)).toEqual({ valid: true });
    expect(v(1098)).toEqual({ valid: true });
    expect(v(1001)).toEqual({ valid: true });
})

test('regex success', () => {
    const actual = getPredicate({ regExp: /^[a-zA-Z]+$/ })("Example");
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('regex failure', () => {
    const v = getPredicate({ regExp: /^([1-5])$/ });
    expect(v(6)).toEqual({ valid: false, reason: "regex", value: 6 });
})