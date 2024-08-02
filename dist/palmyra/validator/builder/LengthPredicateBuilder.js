const g = (n) => {
  const e = n.is, t = n.min, r = n.max;
  if (e)
    return a(e);
  if (t)
    return r ? i(t, r) : s(t);
  if (r)
    return u(r);
  throw Error("one or more parameters must be provided : is, min or max");
}, i = (n, e) => (t) => l(t) ? { valid: !1, reason: "length.invalid", value: t } : t.length <= e ? n <= t.length ? { valid: !0 } : { valid: !1, reason: "length.min", value: t.length } : { valid: !1, reason: "length.max", value: t.length }, a = (n) => (e) => l(e) ? { valid: !1, reason: "length.invalid", value: e } : e.length == n ? { valid: !0 } : { valid: !1, reason: "length.eq", value: e.length }, s = (n) => (e) => l(e) ? { valid: !1, reason: "length.invalid", value: e } : n <= e.length ? { valid: !0 } : { valid: !1, reason: "length.min", value: e.length }, u = (n) => (e) => l(e) ? { valid: !1, reason: "length.invalid", value: e } : e.length <= n ? { valid: !0 } : { valid: !1, reason: "length.max", value: e.length }, l = (n) => n == null || n == null;
export {
  g as getLengthValidator
};
