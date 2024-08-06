const l = (t) => {
  const e = t.start, r = t.end;
  if (r)
    return e ? n(e, r) : a(r);
  if (e)
    return s(e);
  throw Error("one or more parameters must be provided : start or end");
}, n = (t, e) => (r) => {
  if (t)
    if (e) {
      if (r >= t && r <= e)
        return { valid: !0 };
      if (r < t)
        return { valid: !1, reason: "range.start", value: r };
      if (r > e)
        return { valid: !1, reason: "range.end", value: r };
    } else
      return { valid: !1, reason: "range.end", value: r };
  else
    return { valid: !1, reason: "range.end", value: r };
}, a = (t) => (e) => e <= t ? { valid: !0 } : { valid: !1, reason: "range.end", value: e }, s = (t) => (e) => t <= e ? { valid: !0 } : { valid: !1, reason: "range.start", value: e };
export {
  l as getRangeValidator
};
