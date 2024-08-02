import { v as s, d as e, n as t } from "../../../chunks/SimplePredicates.js";
import { hasSpecialChar as n, hasUpperCase as o, hasLowerCase as c, isPortRange as u, isFolder as l } from "../predicate/RegexPredicates.js";
const m = (r) => {
  const i = p(r);
  return (a) => i(a) ? { valid: !0 } : {
    valid: !1,
    reason: r,
    value: a
  };
}, p = (r) => {
  if (r)
    switch (r) {
      case "string":
        return t;
      case "alphabets":
        return e.isAlpha;
      case "date":
        return e.isDate;
      case "time":
        return e.isTime;
      case "number":
        return s.isNumeric;
      case "email":
        return e.isEmail;
      case "mobilePhone":
        return e.isMobilePhone;
      case "port":
        return e.isPort;
      case "ip":
        return e.isIP;
      case "fqdn":
        return e.isFQDN;
      case "folder":
        return l;
      case "portrange":
        return u;
      case "password":
        return e.isStrongPassword;
      case "hasLowerCase":
        return c;
      case "hasUpperCase":
        return o;
      case "hasSpecialChar":
        return n;
      case "float":
        return s.isFloat;
    }
  return t;
};
export {
  m as getRulePredicator
};
