import { d as h, e as $, n as b, b as C, c as R } from "../../../chunks/SimplePredicates.js";
import { isFolder as q, isPortRange as z } from "../predicate/RegexPredicates.js";
function U(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h(r);
  var a = r, n = t.ignore;
  if (n)
    if (n instanceof RegExp)
      a = a.replace(n, "");
    else if (typeof n == "string")
      a = a.replace(new RegExp("[".concat(n.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else
      throw new Error("ignore should be instance of a String or RegExp");
  if (e in $)
    return $[e].test(a);
  throw new Error("Invalid locale '".concat(e, "'"));
}
function x() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  for (var t in e)
    typeof r[t] > "u" && (r[t] = e[t]);
  return r;
}
function M(r, e) {
  return L(r) || k(r, e) || D(r, e) || T();
}
function T() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function k(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var a, n, l, u, i = [], c = !0, o = !1;
    try {
      if (l = (t = t.call(r)).next, e !== 0) for (; !(c = (a = l.call(t)).done) && (i.push(a.value), i.length !== e); c = !0) ;
    } catch (s) {
      o = !0, n = s;
    } finally {
      try {
        if (!c && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return i;
  }
}
function L(r) {
  if (Array.isArray(r)) return r;
}
function N(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = D(r)) || e) {
      t && (r = t);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= r.length ? { done: !0 } : { done: !1, value: r[a++] };
      }, e: function(o) {
        throw o;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var l = !0, u = !1, i;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var o = t.next();
    return l = o.done, o;
  }, e: function(o) {
    u = !0, i = o;
  }, f: function() {
    try {
      !l && t.return != null && t.return();
    } finally {
      if (u) throw i;
    }
  } };
}
function D(r, e) {
  if (r) {
    if (typeof r == "string") return P(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return P(r, e);
  }
}
function P(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, a = new Array(e); t < e; t++) a[t] = r[t];
  return a;
}
var E = {
  format: "YYYY/MM/DD",
  delimiters: ["/", "-"],
  strictMode: !1
};
function V(r) {
  return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(r);
}
function W(r, e) {
  for (var t = [], a = Math.min(r.length, e.length), n = 0; n < a; n++)
    t.push([r[n], e[n]]);
  return t;
}
function Z(r, e) {
  if (typeof e == "string" ? e = x({
    format: e
  }, E) : e = x(e, E), typeof r == "string" && V(e.format)) {
    var t = e.delimiters.find(function(_) {
      return e.format.indexOf(_) !== -1;
    }), a = e.strictMode ? t : e.delimiters.find(function(_) {
      return r.indexOf(_) !== -1;
    }), n = W(r.split(a), e.format.toLowerCase().split(t)), l = {}, u = N(n), i;
    try {
      for (u.s(); !(i = u.n()).done; ) {
        var c = M(i.value, 2), o = c[0], s = c[1];
        if (o.length !== s.length)
          return !1;
        l[s.charAt(0)] = o;
      }
    } catch (_) {
      u.e(_);
    } finally {
      u.f();
    }
    var m = l.y;
    if (m.startsWith("-"))
      return !1;
    if (l.y.length === 2) {
      var y = parseInt(l.y, 10);
      if (isNaN(y))
        return !1;
      var w = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      y < w ? m = "20".concat(l.y) : m = "19".concat(l.y);
    }
    var g = l.m;
    l.m.length === 1 && (g = "0".concat(l.m));
    var A = l.d;
    return l.d.length === 1 && (A = "0".concat(l.d)), new Date("".concat(m, "-").concat(g, "-").concat(A, "T00:00:00.000Z")).getUTCDate() === +l.d;
  }
  return e.strictMode ? !1 : Object.prototype.toString.call(r) === "[object Date]" && isFinite(r);
}
var H = {
  hourFormat: "hour24",
  mode: "default"
}, Q = {
  hour24: {
    default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
    withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
  },
  hour12: {
    default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
    withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
  }
};
function X(r, e) {
  return e = x(e, H), typeof r != "string" ? !1 : Q[e.hourFormat][e.mode].test(r);
}
function p(r) {
  "@babel/helpers - typeof";
  return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, p(r);
}
function F(r, e) {
  h(r);
  var t, a;
  p(e) === "object" ? (t = e.min || 0, a = e.max) : (t = arguments[1], a = arguments[2]);
  var n = encodeURI(r).split(/%..|./).length - 1;
  return n >= t && (typeof a > "u" || n <= a);
}
var Y = {
  require_tld: !0,
  allow_underscores: !1,
  allow_trailing_dot: !1,
  allow_numeric_tld: !1,
  allow_wildcard: !1,
  ignore_max_length: !1
};
function I(r, e) {
  h(r), e = x(e, Y), e.allow_trailing_dot && r[r.length - 1] === "." && (r = r.substring(0, r.length - 1)), e.allow_wildcard === !0 && r.indexOf("*.") === 0 && (r = r.substring(2));
  var t = r.split("."), a = t[t.length - 1];
  return e.require_tld && (t.length < 2 || !e.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(a) || /\s/.test(a)) || !e.allow_numeric_tld && /^\d+$/.test(a) ? !1 : t.every(function(n) {
    return !(n.length > 63 && !e.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(n) || /[\uff01-\uff5e]/.test(n) || /^-|-$/.test(n) || !e.allow_underscores && /_/.test(n));
  });
}
var S = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", d = "(".concat(S, "[.]){3}").concat(S), B = new RegExp("^".concat(d, "$")), f = "(?:[0-9a-fA-F]{1,4})", G = new RegExp("^(" + "(?:".concat(f, ":){7}(?:").concat(f, "|:)|") + "(?:".concat(f, ":){6}(?:").concat(d, "|:").concat(f, "|:)|") + "(?:".concat(f, ":){5}(?::").concat(d, "|(:").concat(f, "){1,2}|:)|") + "(?:".concat(f, ":){4}(?:(:").concat(f, "){0,1}:").concat(d, "|(:").concat(f, "){1,3}|:)|") + "(?:".concat(f, ":){3}(?:(:").concat(f, "){0,2}:").concat(d, "|(:").concat(f, "){1,4}|:)|") + "(?:".concat(f, ":){2}(?:(:").concat(f, "){0,3}:").concat(d, "|(:").concat(f, "){1,5}|:)|") + "(?:".concat(f, ":){1}(?:(:").concat(f, "){0,4}:").concat(d, "|(:").concat(f, "){1,6}|:)|") + "(?::((?::".concat(f, "){0,5}:").concat(d, "|(?::").concat(f, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
function v(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return h(r), e = String(e), e ? e === "4" ? B.test(r) : e === "6" ? G.test(r) : !1 : v(r, 4) || v(r, 6);
}
var J = {
  allow_display_name: !1,
  allow_underscores: !1,
  require_display_name: !1,
  allow_utf8_local_part: !0,
  require_tld: !0,
  blacklisted_chars: "",
  ignore_max_length: !1,
  host_blacklist: [],
  host_whitelist: []
}, K = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, O = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, j = /^[a-z\d]+$/, ee = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, re = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, te = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, ae = 254;
function ne(r) {
  var e = r.replace(/^"(.+)"$/, "$1");
  if (!e.trim())
    return !1;
  var t = /[\.";<>]/.test(e);
  if (t) {
    if (e === r)
      return !1;
    var a = e.split('"').length === e.split('\\"').length;
    if (!a)
      return !1;
  }
  return !0;
}
function le(r, e) {
  if (h(r), e = x(e, J), e.require_display_name || e.allow_display_name) {
    var t = r.match(K);
    if (t) {
      var a = t[1];
      if (r = r.replace(a, "").replace(/(^<|>$)/g, ""), a.endsWith(" ") && (a = a.slice(0, -1)), !ne(a))
        return !1;
    } else if (e.require_display_name)
      return !1;
  }
  if (!e.ignore_max_length && r.length > ae)
    return !1;
  var n = r.split("@"), l = n.pop(), u = l.toLowerCase();
  if (e.host_blacklist.includes(u) || e.host_whitelist.length > 0 && !e.host_whitelist.includes(u))
    return !1;
  var i = n.join("@");
  if (e.domain_specific_validation && (u === "gmail.com" || u === "googlemail.com")) {
    i = i.toLowerCase();
    var c = i.split("+")[0];
    if (!F(c.replace(/\./g, ""), {
      min: 6,
      max: 30
    }))
      return !1;
    for (var o = c.split("."), s = 0; s < o.length; s++)
      if (!j.test(o[s]))
        return !1;
  }
  if (e.ignore_max_length === !1 && (!F(i, {
    max: 64
  }) || !F(l, {
    max: 254
  })))
    return !1;
  if (!I(l, {
    require_tld: e.require_tld,
    ignore_max_length: e.ignore_max_length,
    allow_underscores: e.allow_underscores
  })) {
    if (!e.allow_ip_domain)
      return !1;
    if (!v(l)) {
      if (!l.startsWith("[") || !l.endsWith("]"))
        return !1;
      var m = l.slice(1, -1);
      if (m.length === 0 || !v(m))
        return !1;
    }
  }
  if (i[0] === '"')
    return i = i.slice(1, i.length - 1), e.allow_utf8_local_part ? te.test(i) : ee.test(i);
  for (var y = e.allow_utf8_local_part ? re : O, w = i.split("."), g = 0; g < w.length; g++)
    if (!y.test(w[g]))
      return !1;
  return !(e.blacklisted_chars && i.search(new RegExp("[".concat(e.blacklisted_chars, "]+"), "g")) !== -1);
}
var ie = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, fe = /^[-+]?[0-9]+$/;
function ue(r, e) {
  h(r), e = e || {};
  var t = e.allow_leading_zeroes === !1 ? ie : fe, a = !e.hasOwnProperty("min") || r >= e.min, n = !e.hasOwnProperty("max") || r <= e.max, l = !e.hasOwnProperty("lt") || r < e.lt, u = !e.hasOwnProperty("gt") || r > e.gt;
  return t.test(r) && a && n && l && u;
}
function ce(r) {
  return ue(r, {
    allow_leading_zeroes: !1,
    min: 0,
    max: 65535
  });
}
const oe = {
  string: b,
  alphabets: U,
  date: Z,
  time: X,
  number: C,
  email: le,
  port: ce,
  ipv4: (r) => v(r, 4),
  ipv6: (r) => v(r, 6),
  fqdn: I,
  folder: q,
  portRange: z,
  float: R
}, ge = (r) => {
  const e = se(r);
  return (t) => t != null && e(t) ? { valid: !0 } : {
    valid: !1,
    reason: r,
    value: t
  };
}, se = (r) => {
  if (r) {
    const e = oe[r];
    if (!e)
      throw new Error("no validator found for rule " + r);
    return e || b;
  }
  return b;
};
export {
  ge as getRulePredicator
};
