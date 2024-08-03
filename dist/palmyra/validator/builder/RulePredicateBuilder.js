import { n as s, v as a, d as t } from "../../../chunks/SimplePredicates.js";
import { isFolder as i, isPortRange as l, hasLowerCase as n, hasUpperCase as d, hasSpecialChar as p } from "../predicate/RegexPredicates.js";
const f = {
  string: s,
  alphabets: a.isAlpha,
  date: a.isDate,
  time: a.isTime,
  number: t.isNumeric,
  email: a.isEmail,
  port: a.isPort,
  ip: a.isIP,
  fqdn: a.isFQDN,
  folder: i,
  portRange: l,
  password: a.isStrongPassword,
  hasLowerCase: n,
  hasUpperCase: d,
  hasSpecialChar: p,
  float: t.isFloat
}, m = (r) => {
  const e = h(r);
  return (o) => e(o) ? { valid: !0 } : {
    valid: !1,
    reason: r,
    value: o
  };
}, h = (r) => {
  if (r) {
    const e = f[r];
    if (!e)
      throw new Error("no validator found for rule " + r);
    return e || s;
  }
  return s;
};
export {
  m as getRulePredicator
};
