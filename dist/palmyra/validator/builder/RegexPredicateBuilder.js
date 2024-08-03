const s = (e) => {
  const t = n(e);
  return (r) => t(r) ? { valid: !0 } : {
    valid: !1,
    reason: "regex",
    value: r
  };
}, n = (e) => {
  if (typeof e == "string") {
    const t = new RegExp(e);
    return (r) => t.test(r);
  } else
    return (t) => e.test(t);
};
export {
  s as getRegexPredictor
};
