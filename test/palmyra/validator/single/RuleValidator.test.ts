import { expect, test } from 'vitest';
import { getPredicate } from '../../../../src/palmyra/validator/DataValidator';

test('rule success', () => {
    const actual = getPredicate({ rules: ["email"] })("example@gmail.com");
    const expected = { valid: true }
    expect(actual).toEqual(expected);
})

test('rule failure', () => {
    const v = getPredicate({ rules: ["email"] });
    expect(v("example")).toEqual({ valid: false, reason: "email", value: "example" });
    expect(v("example@")).toEqual({ valid: false, reason: "email", value: "example@" });
    expect(v("@gmail.com")).toEqual({ valid: false, reason: "email", value: "@gmail.com" });
})

test('rule success', () => {
    const v = getPredicate({ rules: ["number"] });
    expect(v("9877505644")).toEqual({ valid: true });
    expect(v("75132000")).toEqual({ valid: true });
    expect(v("98765-09821")).toEqual({ valid: false, reason: "number", value: "98765-09821" });
    expect(v("mnbjhgbjhb")).toEqual({ valid: false, reason: "number", value: "mnbjhgbjhb" });
})

test('rule success', () => {
    const v = getPredicate({ rules: ["alphabets"] });
    expect(v("Example")).toEqual({ valid: true });
    expect(v("1230")).toEqual({ valid: false, reason: "alphabets", value: "1230" });
    expect(v("!&#")).toEqual({ valid: false, reason: "alphabets", value: "!&#" });
})

test('input-undefined', () => {
    const v = getPredicate({ rules: ["alphabets"] });
    expect(v(undefined)).toEqual({ valid: true });
})

test('input-null', () => {
    const v = getPredicate({ rules: ["alphabets"] });
    expect(v(null)).toEqual({ valid: true });
})

test('input-required-undefined', () => {
    const v = getPredicate({ rules: ["alphabets"], required: true });
    expect(v(undefined)).toEqual({ valid: false, reason: "required", value: undefined });
})

test('input-required-null', () => {
    const v = getPredicate({ rules: ["alphabets"], required: true });
    expect(v(null)).toEqual({ valid: false, reason: "required", value: null });
})