const g = (t) => {
  const e = t.is, n = t.min, r = t.max;
  if (e)
    return a(e);
  if (n)
    return r ? l(n, r) : i(n);
  if (r)
    return s(r);
  throw Error("one or more parameters must be provided : is, min or max");
}, l = (t, e) => (n) => n.length <= e ? t <= n.length ? { valid: !0 } : { valid: !1, reason: "length.min", value: n.length } : { valid: !1, reason: "length.max", value: n.length }, a = (t) => (e) => e.length == t ? { valid: !0 } : { valid: !1, reason: "length.eq", value: e.length }, i = (t) => (e) => t <= e.length ? { valid: !0 } : { valid: !1, reason: "length.min", value: e.length }, s = (t) => (e) => e.length <= t ? { valid: !0 } : { valid: !1, reason: "length.max", value: e.length };
export {
  g as getLengthValidator
};
