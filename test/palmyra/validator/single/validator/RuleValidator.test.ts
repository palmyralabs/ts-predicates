import { expect, test } from 'vitest';
import { getRulePredicator } from '../../../../../src/palmyra/validator/builder/RulePredicateBuilder';

test('rule success', () => {
    const actual = getRulePredicator("email")("example@gmail.com");
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('rule failure', () => {
    const v = getRulePredicator("email");
    expect(v("example")).toEqual({ valid: false, reason: "email", value: "example" });
    expect(v("example@")).toEqual({ valid: false, reason: "email", value: "example@" });
    expect(v("@gmail.com")).toEqual({ valid: false, reason: "email", value: "@gmail.com" });
})

test('rule success', () => {
    const v = getRulePredicator("number");
    expect(v("9877505644")).toEqual({ valid: true });
    expect(v("75132000")).toEqual({ valid: true });
    expect(v("98765-09821")).toEqual({ valid: false, reason: "number", value: "98765-09821" });
    expect(v("mnbjhgbjhb")).toEqual({ valid: false, reason: "number", value: "mnbjhgbjhb" });
})

test('rule success', () => {
    const v = getRulePredicator("alphabets");
    expect(v("Example")).toEqual({ valid: true });
    expect(v("1230")).toEqual({ valid: false, reason: "alphabets", value: "1230" });
    expect(v("!&#")).toEqual({ valid: false, reason: "alphabets", value: "!&#" });
})

test('rule input-undefined', () => {
    const v = getRulePredicator("alphabets");
    expect(v(undefined)).toEqual({ valid: false, reason: "alphabets", value: undefined });
})

test('rule input-null', () => {
    const v = getRulePredicator("alphabets");
    expect(v(null)).toEqual({ valid: false, reason: "alphabets", value: null });
})