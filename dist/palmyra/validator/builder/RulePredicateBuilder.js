import { d as h, e as P, f as F, c as M, b as U, n as p } from "../../../chunks/SimplePredicates.js";
import { isPortRange as z, isFolder as k } from "../predicate/RegexPredicates.js";
function T(r) {
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
  if (e in P)
    return P[e].test(a);
  throw new Error("Invalid locale '".concat(e, "'"));
}
function _() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  for (var t in e)
    typeof r[t] > "u" && (r[t] = e[t]);
  return r;
}
function L(r, e) {
  return O(r) || H(r, e) || q(r, e) || N();
}
function N() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var a, n, l, u, i = [], o = !0, c = !1;
    try {
      if (l = (t = t.call(r)).next, e !== 0) for (; !(o = (a = l.call(t)).done) && (i.push(a.value), i.length !== e); o = !0) ;
    } catch (s) {
      c = !0, n = s;
    } finally {
      try {
        if (!o && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (c) throw n;
      }
    }
    return i;
  }
}
function O(r) {
  if (Array.isArray(r)) return r;
}
function V(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = q(r)) || e) {
      t && (r = t);
      var a = 0, n = function() {
      };
      return { s: n, n: function() {
        return a >= r.length ? { done: !0 } : { done: !1, value: r[a++] };
      }, e: function(c) {
        throw c;
      }, f: n };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var l, u = !0, i = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var c = t.next();
    return u = c.done, c;
  }, e: function(c) {
    i = !0, l = c;
  }, f: function() {
    try {
      u || t.return == null || t.return();
    } finally {
      if (i) throw l;
    }
  } };
}
function q(r, e) {
  if (r) {
    if (typeof r == "string") return E(r, e);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? E(r, e) : void 0;
  }
}
function E(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, a = Array(e); t < e; t++) a[t] = r[t];
  return a;
}
var D = {
  format: "YYYY/MM/DD",
  delimiters: ["/", "-"],
  strictMode: !1
};
function Z(r) {
  return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(r);
}
function Q(r, e) {
  for (var t = [], a = Math.max(r.length, e.length), n = 0; n < a; n++)
    t.push([r[n], e[n]]);
  return t;
}
function W(r, e) {
  if (typeof e == "string" ? e = _({
    format: e
  }, D) : e = _(e, D), typeof r == "string" && Z(e.format)) {
    if (e.strictMode && r.length !== e.format.length) return !1;
    var t = e.delimiters.find(function(y) {
      return e.format.indexOf(y) !== -1;
    }), a = e.strictMode ? t : e.delimiters.find(function(y) {
      return r.indexOf(y) !== -1;
    }), n = Q(r.split(a), e.format.toLowerCase().split(t)), l = {}, u = V(n), i;
    try {
      for (u.s(); !(i = u.n()).done; ) {
        var o = L(i.value, 2), c = o[0], s = o[1];
        if (!c || !s || c.length !== s.length)
          return !1;
        l[s.charAt(0)] = c;
      }
    } catch (y) {
      u.e(y);
    } finally {
      u.f();
    }
    var m = l.y;
    if (m.startsWith("-"))
      return !1;
    if (l.y.length === 2) {
      var x = parseInt(l.y, 10);
      if (isNaN(x))
        return !1;
      var w = (/* @__PURE__ */ new Date()).getFullYear() % 100;
      x < w ? m = "20".concat(l.y) : m = "19".concat(l.y);
    }
    var d = l.m;
    l.m.length === 1 && (d = "0".concat(l.m));
    var A = l.d;
    return l.d.length === 1 && (A = "0".concat(l.d)), new Date("".concat(m, "-").concat(d, "-").concat(A, "T00:00:00.000Z")).getUTCDate() === +l.d;
  }
  return e.strictMode ? !1 : Object.prototype.toString.call(r) === "[object Date]" && isFinite(r);
}
var X = {
  hourFormat: "hour24",
  mode: "default"
}, Y = {
  hour24: {
    default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
    withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
    withOptionalSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?$/
  },
  hour12: {
    default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
    withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/,
    withOptionalSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9])(?::([0-5][0-9]))? (A|P)M$/
  }
};
function j(r, e) {
  return e = _(e, X), typeof r != "string" ? !1 : Y[e.hourFormat][e.mode].test(r);
}
function B(r) {
  return Object.prototype.toString.call(r) === "[object RegExp]";
}
function I(r, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    if (r === a || B(a) && a.test(r))
      return !0;
  }
  return !1;
}
function S(r) {
  "@babel/helpers - typeof";
  return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, S(r);
}
function b(r, e) {
  h(r);
  var t, a;
  S(e) === "object" ? (t = e.min || 0, a = e.max) : (t = arguments[1], a = arguments[2]);
  var n = encodeURI(r).split(/%..|./).length - 1;
  return n >= t && (typeof a > "u" || n <= a);
}
var G = {
  require_tld: !0,
  allow_underscores: !1,
  allow_trailing_dot: !1,
  allow_numeric_tld: !1,
  allow_wildcard: !1,
  ignore_max_length: !1
};
function C(r, e) {
  h(r), e = _(e, G), e.allow_trailing_dot && r[r.length - 1] === "." && (r = r.substring(0, r.length - 1)), e.allow_wildcard === !0 && r.indexOf("*.") === 0 && (r = r.substring(2));
  var t = r.split("."), a = t[t.length - 1];
  return e.require_tld && (t.length < 2 || !e.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(a) || /\s/.test(a)) || !e.allow_numeric_tld && /^\d+$/.test(a) ? !1 : t.every(function(n) {
    return !(n.length > 63 && !e.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(n) || /[\uff01-\uff5e]/.test(n) || /^-|-$/.test(n) || !e.allow_underscores && /_/.test(n));
  });
}
function $(r) {
  "@babel/helpers - typeof";
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $(r);
}
var R = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", g = "(".concat(R, "[.]){3}").concat(R), J = new RegExp("^".concat(g, "$")), f = "(?:[0-9a-fA-F]{1,4})", K = new RegExp("^(" + "(?:".concat(f, ":){7}(?:").concat(f, "|:)|") + "(?:".concat(f, ":){6}(?:").concat(g, "|:").concat(f, "|:)|") + "(?:".concat(f, ":){5}(?::").concat(g, "|(:").concat(f, "){1,2}|:)|") + "(?:".concat(f, ":){4}(?:(:").concat(f, "){0,1}:").concat(g, "|(:").concat(f, "){1,3}|:)|") + "(?:".concat(f, ":){3}(?:(:").concat(f, "){0,2}:").concat(g, "|(:").concat(f, "){1,4}|:)|") + "(?:".concat(f, ":){2}(?:(:").concat(f, "){0,3}:").concat(g, "|(:").concat(f, "){1,5}|:)|") + "(?:".concat(f, ":){1}(?:(:").concat(f, "){0,4}:").concat(g, "|(:").concat(f, "){1,6}|:)|") + "(?::((?::".concat(f, "){0,5}:").concat(g, "|(?::").concat(f, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
function v(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h(r);
  var t = ($(e) === "object" ? e.version : arguments[1]) || "";
  return t ? t.toString() === "4" ? J.test(r) : t.toString() === "6" ? K.test(r) : !1 : v(r, {
    version: 4
  }) || v(r, {
    version: 6
  });
}
var ee = {
  allow_display_name: !1,
  allow_underscores: !1,
  require_display_name: !1,
  allow_utf8_local_part: !0,
  require_tld: !0,
  blacklisted_chars: "",
  ignore_max_length: !1,
  host_blacklist: [],
  host_whitelist: []
}, re = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, te = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, ae = /^[a-z\d]+$/, ne = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, le = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, ie = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, fe = 254;
function ue(r) {
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
function oe(r, e) {
  if (h(r), e = _(e, ee), e.require_display_name || e.allow_display_name) {
    var t = r.match(re);
    if (t) {
      var a = t[1];
      if (r = r.replace(a, "").replace(/(^<|>$)/g, ""), a.endsWith(" ") && (a = a.slice(0, -1)), !ue(a))
        return !1;
    } else if (e.require_display_name)
      return !1;
  }
  if (!e.ignore_max_length && r.length > fe)
    return !1;
  var n = r.split("@"), l = n.pop(), u = l.toLowerCase();
  if (e.host_blacklist.length > 0 && I(u, e.host_blacklist) || e.host_whitelist.length > 0 && !I(u, e.host_whitelist))
    return !1;
  var i = n.join("@");
  if (e.domain_specific_validation && (u === "gmail.com" || u === "googlemail.com")) {
    i = i.toLowerCase();
    var o = i.split("+")[0];
    if (!b(o.replace(/\./g, ""), {
      min: 6,
      max: 30
    }))
      return !1;
    for (var c = o.split("."), s = 0; s < c.length; s++)
      if (!ae.test(c[s]))
        return !1;
  }
  if (e.ignore_max_length === !1 && (!b(i, {
    max: 64
  }) || !b(l, {
    max: 254
  })))
    return !1;
  if (!C(l, {
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
  if (e.blacklisted_chars && i.search(new RegExp("[".concat(e.blacklisted_chars, "]+"), "g")) !== -1)
    return !1;
  if (i[0] === '"' && i[i.length - 1] === '"')
    return i = i.slice(1, i.length - 1), e.allow_utf8_local_part ? ie.test(i) : ne.test(i);
  for (var x = e.allow_utf8_local_part ? le : te, w = i.split("."), d = 0; d < w.length; d++)
    if (!x.test(w[d]))
      return !1;
  return !0;
}
var ce = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, se = /^[-+]?[0-9]+$/;
function ge(r, e) {
  h(r), e = e || {};
  var t = e.allow_leading_zeroes === !1 ? ce : se, a = !e.hasOwnProperty("min") || F(e.min) || r >= e.min, n = !e.hasOwnProperty("max") || F(e.max) || r <= e.max, l = !e.hasOwnProperty("lt") || F(e.lt) || r < e.lt, u = !e.hasOwnProperty("gt") || F(e.gt) || r > e.gt;
  return t.test(r) && a && n && l && u;
}
function me(r) {
  return ge(r, {
    allow_leading_zeroes: !1,
    min: 0,
    max: 65535
  });
}
const de = {
  string: p,
  alphabets: T,
  date: W,
  time: j,
  number: U,
  email: oe,
  port: me,
  ipv4: (r) => v(r, 4),
  ipv6: (r) => v(r, 6),
  fqdn: C,
  folder: k,
  portRange: z,
  float: M
}, _e = (r) => {
  const e = ve(r);
  return (t) => t != null && e(t) ? { valid: !0 } : {
    valid: !1,
    reason: r,
    value: t
  };
}, ve = (r) => {
  if (r) {
    const e = de[r];
    if (!e)
      throw new Error("no validator found for rule " + r);
    return e || p;
  }
  return p;
};
export {
  _e as getRulePredicator
};
