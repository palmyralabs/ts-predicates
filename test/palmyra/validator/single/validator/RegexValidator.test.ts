import { expect, test } from 'vitest';
import { getRegexPredictor } from '../../../../../src/palmyra/validator/builder/RegexPredicateBuilder';



test('regex success', () => {
    const actual = getRegexPredictor(/^[a-zA-Z]+$/)("Example");
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('regex failure', () => {
    const v = getRegexPredictor(/^([1-5])$/);
    expect(v(6)).toEqual({ valid: false, reason: "regex", value: 6 });
})

test('string-regex success', () => {
    const actual = getRegexPredictor('^[a-zA-Z]+$')("Example");
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('string -regex failure', () => {
    const v = getRegexPredictor('^([1-5])$');
    expect(v(6)).toEqual({ valid: false, reason: "regex", value: 6 });
})

test('regex input-undefined', () => {
    const v = getRegexPredictor(/^([1-5])$/);
    expect(v(undefined)).toEqual({ valid: false, reason: "regex", value: undefined });
})

test('regex input-null', () => {
    const v = getRegexPredictor(/^([1-5])$/);
    expect(v(null)).toEqual({ valid: false, reason: "regex", value: null });
})
