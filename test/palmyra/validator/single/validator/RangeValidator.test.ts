import { expect, test } from 'vitest';
import { getRangeValidator } from '../../../../../src/palmyra/validator/builder/RangePredicateBuilder';

test('range start-success', () => {
    const actual = getRangeValidator({ start: 10 })(10);
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('range start-failure', () => {
    const v = getRangeValidator({ start: 10 });
    expect(v(9)).toEqual({ valid: false, reason: "range.start", value: 9 });
})

test('range end-success', () => {
    const actual = getRangeValidator({ end: 100 })(98);
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('range end-failure', () => {
    const v = getRangeValidator({ end: 100 });
    expect(v(101)).toEqual({ valid: false, reason: "range.end", value: 101 });
})

test('range start-end-success', () => {
    const v = getRangeValidator({ start: 1001, end: 1099 });
    expect(v(1100)).toEqual({ valid: false, reason: "range.end", value: 1100 });
    expect(v(90)).toEqual({ valid: false, reason: "range.start", value: 90 });
    expect(v(1020)).toEqual({ valid: true });
    expect(v(1098)).toEqual({ valid: true });
    expect(v(1001)).toEqual({ valid: true });
})

test('range input-undefined', () => {
    const v = getRangeValidator({ start: 8 });
    expect(v(undefined)).toEqual({ valid: false, reason: "range.start", value: undefined });
})

test('range input-null', () => {
    const v = getRangeValidator({ start: 8 });
    expect(v(null)).toEqual({ valid: false, reason: "range.start", value: null  });
})
