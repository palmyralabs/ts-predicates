import { v as s, a as e, n as t } from "../../../chunks/SimplePredicates.js";
const c = (r) => {
  const i = n(r);
  return (a) => i(a) ? { valid: !0 } : {
    valid: !1,
    reason: r,
    value: a
  };
}, n = (r) => {
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
        return isFolder;
      case "portrange":
        return isPortRange;
      case "password":
        return e.isStrongPassword;
      case "hasLowerCase":
        return hasLowerCase;
      case "hasUpperCase":
        return hasUpperCase;
      case "hasSpecialChar":
        return hasSpecialChar;
      case "float":
        return s.isFloat;
    }
  return t;
};
export {
  c as getRulePredicator
};
