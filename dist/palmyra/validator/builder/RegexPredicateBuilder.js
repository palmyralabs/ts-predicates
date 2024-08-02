const a = (e) => {
  const r = n(e);
  return (t) => r(t) ? { valid: !0 } : {
    valid: !1,
    reason: "regex",
    value: t
  };
}, n = (e) => (r) => e.test(r);
export {
  a as getRegexPredictor
};
