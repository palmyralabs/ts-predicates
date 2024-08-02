function sn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ft = { exports: {} }, ot = { exports: {} }, dt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = l;
  function s(i) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, s(i);
  }
  function l(i) {
    var a = typeof i == "string" || i instanceof String;
    if (!a) {
      var r = s(i);
      throw i === null ? r = "null" : r === "object" && (r = i.constructor.name), new TypeError("Expected a string but received a ".concat(r));
    }
  }
  t.exports = e.default, t.exports.default = e.default;
})(dt, dt.exports);
var R = dt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, s.default)(a), a = Date.parse(a), isNaN(a) ? null : new Date(a);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ot, ot.exports);
var Xr = ot.exports, ct = { exports: {} }, _e = {}, H = {};
Object.defineProperty(H, "__esModule", {
  value: !0
});
H.farsiLocales = H.englishLocales = H.dotDecimal = H.decimal = H.commaDecimal = H.bengaliLocales = H.arabicLocales = H.alphanumeric = H.alpha = void 0;
var Y = H.alpha = {
  "en-US": /^[A-Z]+$/i,
  "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
  "bg-BG": /^[А-Я]+$/i,
  "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[A-ZÆØÅ]+$/i,
  "de-DE": /^[A-ZÄÖÜß]+$/i,
  "el-GR": /^[Α-ώ]+$/i,
  "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
  "fi-FI": /^[A-ZÅÄÖ]+$/i,
  "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
  "nb-NO": /^[A-ZÆØÅ]+$/i,
  "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[A-ZÆØÅ]+$/i,
  "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  "ru-RU": /^[А-ЯЁ]+$/i,
  "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
  "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[A-ZÅÄÖ]+$/i,
  "th-TH": /^[ก-๐\s]+$/i,
  "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
  "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[א-ת]+$/,
  fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
  bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
  eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
  "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
  "si-LK": /^[\u0D80-\u0DFF]+$/
}, V = H.alphanumeric = {
  "en-US": /^[0-9A-Z]+$/i,
  "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
  "bg-BG": /^[0-9А-Я]+$/i,
  "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[0-9A-ZÆØÅ]+$/i,
  "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
  "el-GR": /^[0-9Α-ω]+$/i,
  "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
  "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
  "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
  "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
  "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  "ru-RU": /^[0-9А-ЯЁ]+$/i,
  "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
  "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
  "th-TH": /^[ก-๙\s]+$/i,
  "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
  "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[0-9א-ת]+$/,
  fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
  bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
  eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
  "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
  "si-LK": /^[0-9\u0D80-\u0DFF]+$/
}, K = H.decimal = {
  "en-US": ".",
  ar: "٫"
}, aa = H.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
for (var Ze, tt = 0; tt < aa.length; tt++)
  Ze = "en-".concat(aa[tt]), Y[Ze] = Y["en-US"], V[Ze] = V["en-US"], K[Ze] = K["en-US"];
var na = H.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
for (var Fe, rt = 0; rt < na.length; rt++)
  Fe = "ar-".concat(na[rt]), Y[Fe] = Y.ar, V[Fe] = V.ar, K[Fe] = K.ar;
var ua = H.farsiLocales = ["IR", "AF"];
for (var at, nt = 0; nt < ua.length; nt++)
  at = "fa-".concat(ua[nt]), V[at] = V.fa, K[at] = K.ar;
var ia = H.bengaliLocales = ["BD", "IN"];
for (var Te, ut = 0; ut < ia.length; ut++)
  Te = "bn-".concat(ia[ut]), Y[Te] = Y.bn, V[Te] = V.bn, K[Te] = K["en-US"];
var la = H.dotDecimal = ["ar-EG", "ar-LB", "ar-LY"], sa = H.commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
for (var it = 0; it < la.length; it++)
  K[la[it]] = K["en-US"];
for (var lt = 0; lt < sa.length; lt++)
  K[sa[lt]] = ",";
Y["fr-CA"] = Y["fr-FR"];
V["fr-CA"] = V["fr-FR"];
Y["pt-BR"] = Y["pt-PT"];
V["pt-BR"] = V["pt-PT"];
K["pt-BR"] = K["pt-PT"];
Y["pl-Pl"] = Y["pl-PL"];
V["pl-Pl"] = V["pl-PL"];
K["pl-Pl"] = K["pl-PL"];
Y["fa-AF"] = Y.fa;
Object.defineProperty(_e, "__esModule", {
  value: !0
});
_e.default = dn;
_e.locales = void 0;
var fn = on(R), ca = H;
function on(t) {
  return t && t.__esModule ? t : { default: t };
}
function dn(t, e) {
  (0, fn.default)(t), e = e || {};
  var s = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(e.locale ? ca.decimal[e.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (t === "" || t === "." || t === "," || t === "-" || t === "+")
    return !1;
  var l = parseFloat(t.replace(",", "."));
  return s.test(t) && (!e.hasOwnProperty("min") || l >= e.min) && (!e.hasOwnProperty("max") || l <= e.max) && (!e.hasOwnProperty("lt") || l < e.lt) && (!e.hasOwnProperty("gt") || l > e.gt);
}
_e.locales = Object.keys(ca.decimal);
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(_e);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, s.default)(a) ? parseFloat(a) : NaN;
  }
  t.exports = e.default, t.exports.default = e.default;
})(ct, ct.exports);
var va = ct.exports, vt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, s.default)(a), parseInt(a, r || 10);
  }
  t.exports = e.default, t.exports.default = e.default;
})(vt, vt.exports);
var cn = vt.exports, pt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, s.default)(a), r ? a === "1" || /^true$/i.test(a) : a !== "0" && !/^false$/i.test(a) && a !== "";
  }
  t.exports = e.default, t.exports.default = e.default;
})(pt, pt.exports);
var vn = pt.exports, _t = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, s.default)(a), a === r;
  }
  t.exports = e.default, t.exports.default = e.default;
})(_t, _t.exports);
var pn = _t.exports, At = { exports: {} }, gt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = l;
  function s(i) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, s(i);
  }
  function l(i) {
    return s(i) === "object" && i !== null ? typeof i.toString == "function" ? i = i.toString() : i = "[object Object]" : (i === null || typeof i > "u" || isNaN(i) && !i.length) && (i = ""), String(i);
  }
  t.exports = e.default, t.exports.default = e.default;
})(gt, gt.exports);
var pa = gt.exports, ht = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = s;
  function s() {
    var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    for (var a in i)
      typeof l[a] > "u" && (l[a] = i[a]);
    return l;
  }
  t.exports = e.default, t.exports.default = e.default;
})(ht, ht.exports);
var W = ht.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var s = a(R), l = a(pa), i = a(W);
  function a(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var r = {
    ignoreCase: !1,
    minOccurrences: 1
  };
  function u(n, o, c) {
    return (0, s.default)(n), c = (0, i.default)(c, r), c.ignoreCase ? n.toLowerCase().split((0, l.default)(o).toLowerCase()).length > c.minOccurrences : n.split((0, l.default)(o)).length > c.minOccurrences;
  }
  t.exports = e.default, t.exports.default = e.default;
})(At, At.exports);
var _n = At.exports, St = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r, u) {
    return (0, s.default)(a), Object.prototype.toString.call(r) !== "[object RegExp]" && (r = new RegExp(r, u)), !!a.match(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(St, St.exports);
var An = St.exports, $t = { exports: {} }, mt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function i(r) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
      return typeof u;
    } : function(u) {
      return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
    }, i(r);
  }
  function a(r, u) {
    (0, s.default)(r);
    var n, o;
    i(u) === "object" ? (n = u.min || 0, o = u.max) : (n = arguments[1], o = arguments[2]);
    var c = encodeURI(r).split(/%..|./).length - 1;
    return c >= n && (typeof o > "u" || c <= o);
  }
  t.exports = e.default, t.exports.default = e.default;
})(mt, mt.exports);
var _a = mt.exports, Mt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = i(R), l = i(W);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };
  function r(u, n) {
    (0, s.default)(u), n = (0, l.default)(n, a), n.allow_trailing_dot && u[u.length - 1] === "." && (u = u.substring(0, u.length - 1)), n.allow_wildcard === !0 && u.indexOf("*.") === 0 && (u = u.substring(2));
    var o = u.split("."), c = o[o.length - 1];
    return n.require_tld && (o.length < 2 || !n.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(c) || /\s/.test(c)) || !n.allow_numeric_tld && /^\d+$/.test(c) ? !1 : o.every(function(v) {
      return !(v.length > 63 && !n.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(v) || /[\uff01-\uff5e]/.test(v) || /^-|-$/.test(v) || !n.allow_underscores && /_/.test(v));
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(Mt, Mt.exports);
var Qr = Mt.exports, yt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var s = l(R);
  function l(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var i = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", a = "(".concat(i, "[.]){3}").concat(i), r = new RegExp("^".concat(a, "$")), u = "(?:[0-9a-fA-F]{1,4})", n = new RegExp("^(" + "(?:".concat(u, ":){7}(?:").concat(u, "|:)|") + "(?:".concat(u, ":){6}(?:").concat(a, "|:").concat(u, "|:)|") + "(?:".concat(u, ":){5}(?::").concat(a, "|(:").concat(u, "){1,2}|:)|") + "(?:".concat(u, ":){4}(?:(:").concat(u, "){0,1}:").concat(a, "|(:").concat(u, "){1,3}|:)|") + "(?:".concat(u, ":){3}(?:(:").concat(u, "){0,2}:").concat(a, "|(:").concat(u, "){1,4}|:)|") + "(?:".concat(u, ":){2}(?:(:").concat(u, "){0,3}:").concat(a, "|(:").concat(u, "){1,5}|:)|") + "(?:".concat(u, ":){1}(?:(:").concat(u, "){0,4}:").concat(a, "|(:").concat(u, "){1,6}|:)|") + "(?::((?::".concat(u, "){0,5}:").concat(a, "|(?::").concat(u, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
  function o(c) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, s.default)(c), v = String(v), v ? v === "4" ? r.test(c) : v === "6" ? n.test(c) : !1 : o(c, 4) || o(c, 6);
  }
  t.exports = e.default, t.exports.default = e.default;
})(yt, yt.exports);
var we = yt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = S;
  var s = u(R), l = u(_a), i = u(Qr), a = u(we), r = u(W);
  function u(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var n = {
    allow_display_name: !1,
    allow_underscores: !1,
    require_display_name: !1,
    allow_utf8_local_part: !0,
    require_tld: !0,
    blacklisted_chars: "",
    ignore_max_length: !1,
    host_blacklist: [],
    host_whitelist: []
  }, o = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, c = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, v = /^[a-z\d]+$/, g = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, E = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, C = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, p = 254;
  function _(h) {
    var $ = h.replace(/^"(.+)"$/, "$1");
    if (!$.trim())
      return !1;
    var M = /[\.";<>]/.test($);
    if (M) {
      if ($ === h)
        return !1;
      var x = $.split('"').length === $.split('\\"').length;
      if (!x)
        return !1;
    }
    return !0;
  }
  function S(h, $) {
    if ((0, s.default)(h), $ = (0, r.default)($, n), $.require_display_name || $.allow_display_name) {
      var M = h.match(o);
      if (M) {
        var x = M[1];
        if (h = h.replace(x, "").replace(/(^<|>$)/g, ""), x.endsWith(" ") && (x = x.slice(0, -1)), !_(x))
          return !1;
      } else if ($.require_display_name)
        return !1;
    }
    if (!$.ignore_max_length && h.length > p)
      return !1;
    var P = h.split("@"), L = P.pop(), B = L.toLowerCase();
    if ($.host_blacklist.includes(B) || $.host_whitelist.length > 0 && !$.host_whitelist.includes(B))
      return !1;
    var N = P.join("@");
    if ($.domain_specific_validation && (B === "gmail.com" || B === "googlemail.com")) {
      N = N.toLowerCase();
      var F = N.split("+")[0];
      if (!(0, l.default)(F.replace(/\./g, ""), {
        min: 6,
        max: 30
      }))
        return !1;
      for (var G = F.split("."), z = 0; z < G.length; z++)
        if (!v.test(G[z]))
          return !1;
    }
    if ($.ignore_max_length === !1 && (!(0, l.default)(N, {
      max: 64
    }) || !(0, l.default)(L, {
      max: 254
    })))
      return !1;
    if (!(0, i.default)(L, {
      require_tld: $.require_tld,
      ignore_max_length: $.ignore_max_length,
      allow_underscores: $.allow_underscores
    })) {
      if (!$.allow_ip_domain)
        return !1;
      if (!(0, a.default)(L)) {
        if (!L.startsWith("[") || !L.endsWith("]"))
          return !1;
        var X = L.slice(1, -1);
        if (X.length === 0 || !(0, a.default)(X))
          return !1;
      }
    }
    if (N[0] === '"')
      return N = N.slice(1, N.length - 1), $.allow_utf8_local_part ? C.test(N) : g.test(N);
    for (var te = $.allow_utf8_local_part ? E : c, q = N.split("."), ee = 0; ee < q.length; ee++)
      if (!te.test(q[ee]))
        return !1;
    return !($.blacklisted_chars && N.search(new RegExp("[".concat($.blacklisted_chars, "]+"), "g")) !== -1);
  }
  t.exports = e.default, t.exports.default = e.default;
})($t, $t.exports);
var Aa = $t.exports, It = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = S;
  var s = r(R), l = r(Qr), i = r(we), a = r(W);
  function r(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function u(h, $) {
    return g(h) || v(h, $) || o(h, $) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(h, $) {
    if (h) {
      if (typeof h == "string") return c(h, $);
      var M = Object.prototype.toString.call(h).slice(8, -1);
      if (M === "Object" && h.constructor && (M = h.constructor.name), M === "Map" || M === "Set") return Array.from(h);
      if (M === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)) return c(h, $);
    }
  }
  function c(h, $) {
    ($ == null || $ > h.length) && ($ = h.length);
    for (var M = 0, x = new Array($); M < $; M++) x[M] = h[M];
    return x;
  }
  function v(h, $) {
    var M = h == null ? null : typeof Symbol < "u" && h[Symbol.iterator] || h["@@iterator"];
    if (M != null) {
      var x, P, L, B, N = [], F = !0, G = !1;
      try {
        if (L = (M = M.call(h)).next, $ !== 0) for (; !(F = (x = L.call(M)).done) && (N.push(x.value), N.length !== $); F = !0) ;
      } catch (z) {
        G = !0, P = z;
      } finally {
        try {
          if (!F && M.return != null && (B = M.return(), Object(B) !== B)) return;
        } finally {
          if (G) throw P;
        }
      }
      return N;
    }
  }
  function g(h) {
    if (Array.isArray(h)) return h;
  }
  var E = {
    protocols: ["http", "https", "ftp"],
    require_tld: !0,
    require_protocol: !1,
    require_host: !0,
    require_port: !1,
    require_valid_protocol: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_protocol_relative_urls: !1,
    allow_fragments: !0,
    allow_query_components: !0,
    validate_length: !0
  }, C = /^\[([^\]]+)\](?::([0-9]+))?$/;
  function p(h) {
    return Object.prototype.toString.call(h) === "[object RegExp]";
  }
  function _(h, $) {
    for (var M = 0; M < $.length; M++) {
      var x = $[M];
      if (h === x || p(x) && x.test(h))
        return !0;
    }
    return !1;
  }
  function S(h, $) {
    if ((0, s.default)(h), !h || /[\s<>]/.test(h) || h.indexOf("mailto:") === 0 || ($ = (0, a.default)($, E), $.validate_length && h.length >= 2083) || !$.allow_fragments && h.includes("#") || !$.allow_query_components && (h.includes("?") || h.includes("&")))
      return !1;
    var M, x, P, L, B, N, F, G;
    if (F = h.split("#"), h = F.shift(), F = h.split("?"), h = F.shift(), F = h.split("://"), F.length > 1) {
      if (M = F.shift().toLowerCase(), $.require_valid_protocol && $.protocols.indexOf(M) === -1)
        return !1;
    } else {
      if ($.require_protocol)
        return !1;
      if (h.slice(0, 2) === "//") {
        if (!$.allow_protocol_relative_urls)
          return !1;
        F[0] = h.slice(2);
      }
    }
    if (h = F.join("://"), h === "")
      return !1;
    if (F = h.split("/"), h = F.shift(), h === "" && !$.require_host)
      return !0;
    if (F = h.split("@"), F.length > 1) {
      if ($.disallow_auth || F[0] === "" || (x = F.shift(), x.indexOf(":") >= 0 && x.split(":").length > 2))
        return !1;
      var z = x.split(":"), X = u(z, 2), te = X[0], q = X[1];
      if (te === "" && q === "")
        return !1;
    }
    L = F.join("@"), N = null, G = null;
    var ee = L.match(C);
    if (ee ? (P = "", G = ee[1], N = ee[2] || null) : (F = L.split(":"), P = F.shift(), F.length && (N = F.join(":"))), N !== null && N.length > 0) {
      if (B = parseInt(N, 10), !/^[0-9]+$/.test(N) || B <= 0 || B > 65535)
        return !1;
    } else if ($.require_port)
      return !1;
    return $.host_whitelist ? _(P, $.host_whitelist) : P === "" && !$.require_host ? !0 : !(!(0, i.default)(P) && !(0, l.default)(P, $) && (!G || !(0, i.default)(G, 6)) || (P = P || G, $.host_blacklist && _(P, $.host_blacklist)));
  }
  t.exports = e.default, t.exports.default = e.default;
})(It, It.exports);
var gn = It.exports, Rt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = c;
  var s = l(R);
  function l(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var i = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/, a = /^([0-9a-fA-F]){12}$/, r = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/, u = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/, n = /^([0-9a-fA-F]){16}$/, o = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
  function c(v, g) {
    return (0, s.default)(v), g != null && g.eui && (g.eui = String(g.eui)), g != null && g.no_colons || g != null && g.no_separators ? g.eui === "48" ? a.test(v) : g.eui === "64" ? n.test(v) : a.test(v) || n.test(v) : (g == null ? void 0 : g.eui) === "48" ? i.test(v) || r.test(v) : (g == null ? void 0 : g.eui) === "64" ? u.test(v) || o.test(v) : c(v, {
      eui: "48"
    }) || c(v, {
      eui: "64"
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(Rt, Rt.exports);
var hn = Rt.exports, Et = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var s = i(R), l = i(we);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = /^\d{1,3}$/, r = 32, u = 128;
  function n(o) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (0, s.default)(o);
    var v = o.split("/");
    if (v.length !== 2 || !a.test(v[1]) || v[1].length > 1 && v[1].startsWith("0"))
      return !1;
    var g = (0, l.default)(v[0], c);
    if (!g)
      return !1;
    var E = null;
    switch (String(c)) {
      case "4":
        E = r;
        break;
      case "6":
        E = u;
        break;
      default:
        E = (0, l.default)(v[0], "6") ? u : r;
    }
    return v[1] <= E && v[1] >= 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Et, Et.exports);
var Sn = Et.exports, Dt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = C;
  var s = l(W);
  function l(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function i(p, _) {
    return u(p) || r(p, _) || o(p, _) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function r(p, _) {
    var S = p == null ? null : typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (S != null) {
      var h, $, M, x, P = [], L = !0, B = !1;
      try {
        if (M = (S = S.call(p)).next, _ !== 0) for (; !(L = (h = M.call(S)).done) && (P.push(h.value), P.length !== _); L = !0) ;
      } catch (N) {
        B = !0, $ = N;
      } finally {
        try {
          if (!L && S.return != null && (x = S.return(), Object(x) !== x)) return;
        } finally {
          if (B) throw $;
        }
      }
      return P;
    }
  }
  function u(p) {
    if (Array.isArray(p)) return p;
  }
  function n(p, _) {
    var S = typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (!S) {
      if (Array.isArray(p) || (S = o(p)) || _) {
        S && (p = S);
        var h = 0, $ = function() {
        };
        return { s: $, n: function() {
          return h >= p.length ? { done: !0 } : { done: !1, value: p[h++] };
        }, e: function(B) {
          throw B;
        }, f: $ };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var M = !0, x = !1, P;
    return { s: function() {
      S = S.call(p);
    }, n: function() {
      var B = S.next();
      return M = B.done, B;
    }, e: function(B) {
      x = !0, P = B;
    }, f: function() {
      try {
        !M && S.return != null && S.return();
      } finally {
        if (x) throw P;
      }
    } };
  }
  function o(p, _) {
    if (p) {
      if (typeof p == "string") return c(p, _);
      var S = Object.prototype.toString.call(p).slice(8, -1);
      if (S === "Object" && p.constructor && (S = p.constructor.name), S === "Map" || S === "Set") return Array.from(p);
      if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return c(p, _);
    }
  }
  function c(p, _) {
    (_ == null || _ > p.length) && (_ = p.length);
    for (var S = 0, h = new Array(_); S < _; S++) h[S] = p[S];
    return h;
  }
  var v = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1
  };
  function g(p) {
    return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(p);
  }
  function E(p, _) {
    for (var S = [], h = Math.min(p.length, _.length), $ = 0; $ < h; $++)
      S.push([p[$], _[$]]);
    return S;
  }
  function C(p, _) {
    if (typeof _ == "string" ? _ = (0, s.default)({
      format: _
    }, v) : _ = (0, s.default)(_, v), typeof p == "string" && g(_.format)) {
      var S = _.delimiters.find(function(q) {
        return _.format.indexOf(q) !== -1;
      }), h = _.strictMode ? S : _.delimiters.find(function(q) {
        return p.indexOf(q) !== -1;
      }), $ = E(p.split(h), _.format.toLowerCase().split(S)), M = {}, x = n($), P;
      try {
        for (x.s(); !(P = x.n()).done; ) {
          var L = i(P.value, 2), B = L[0], N = L[1];
          if (B.length !== N.length)
            return !1;
          M[N.charAt(0)] = B;
        }
      } catch (q) {
        x.e(q);
      } finally {
        x.f();
      }
      var F = M.y;
      if (F.startsWith("-"))
        return !1;
      if (M.y.length === 2) {
        var G = parseInt(M.y, 10);
        if (isNaN(G))
          return !1;
        var z = (/* @__PURE__ */ new Date()).getFullYear() % 100;
        G < z ? F = "20".concat(M.y) : F = "19".concat(M.y);
      }
      var X = M.m;
      M.m.length === 1 && (X = "0".concat(M.m));
      var te = M.d;
      return M.d.length === 1 && (te = "0".concat(M.d)), new Date("".concat(F, "-").concat(X, "-").concat(te, "T00:00:00.000Z")).getUTCDate() === +M.d;
    }
    return _.strictMode ? !1 : Object.prototype.toString.call(p) === "[object Date]" && isFinite(p);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Dt, Dt.exports);
var ga = Dt.exports, Ct = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = l(W);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = {
    hourFormat: "hour24",
    mode: "default"
  }, a = {
    hour24: {
      default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
      withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    },
    hour12: {
      default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
      withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
    }
  };
  function r(u, n) {
    return n = (0, s.default)(n, i), typeof u != "string" ? !1 : a[n.hourFormat][n.mode].test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ct, Ct.exports);
var $n = Ct.exports, xt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var s = l(R);
  function l(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = {
    loose: !1
  }, a = ["true", "false", "1", "0"], r = [].concat(a, ["yes", "no"]);
  function u(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
    return (0, s.default)(n), o.loose ? r.includes(n.toLowerCase()) : a.includes(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(xt, xt.exports);
var mn = xt.exports, Lt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = h;
  var s = l(R);
  function l($) {
    return $ && $.__esModule ? $ : { default: $ };
  }
  var i = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})", a = "(([a-zA-Z]{2,3}(-".concat(i, ")?)|([a-zA-Z]{5,8}))"), r = "([A-Za-z]{4})", u = "([A-Za-z]{2}|\\d{3})", n = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))", o = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])", c = "(".concat(o, "(-[A-Za-z0-9]{2,8})+)"), v = "(x(-[A-Za-z0-9]{1,8})+)", g = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))", E = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))", C = "(".concat(g, "|").concat(E, ")"), p = "(-|_)", _ = "".concat(a, "(").concat(p).concat(r, ")?(").concat(p).concat(u, ")?(").concat(p).concat(n, ")*(").concat(p).concat(c, ")*(").concat(p).concat(v, ")?"), S = new RegExp("(^".concat(v, "$)|(^").concat(C, "$)|(^").concat(_, "$)"));
  function h($) {
    return (0, s.default)($), S.test($);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Lt, Lt.exports);
var Mn = Lt.exports, Pt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
  function a(r) {
    if ((0, s.default)(r), !i.test(r)) return !1;
    for (var u = 0, n = 0; n < r.length; n++)
      n % 3 === 0 ? u += r[n] * 3 : n % 3 === 1 ? u += r[n] * 7 : u += r[n] * 1;
    return u % 10 === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Pt, Pt.exports);
var yn = Pt.exports, me = {};
Object.defineProperty(me, "__esModule", {
  value: !0
});
me.default = En;
me.locales = void 0;
var In = Rn(R), Ot = H;
function Rn(t) {
  return t && t.__esModule ? t : { default: t };
}
function En(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  (0, In.default)(t);
  var l = t, i = s.ignore;
  if (i)
    if (i instanceof RegExp)
      l = l.replace(i, "");
    else if (typeof i == "string")
      l = l.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else
      throw new Error("ignore should be instance of a String or RegExp");
  if (e in Ot.alpha)
    return Ot.alpha[e].test(l);
  throw new Error("Invalid locale '".concat(e, "'"));
}
me.locales = Object.keys(Ot.alpha);
var Me = {};
Object.defineProperty(Me, "__esModule", {
  value: !0
});
Me.default = xn;
Me.locales = void 0;
var Dn = Cn(R), Bt = H;
function Cn(t) {
  return t && t.__esModule ? t : { default: t };
}
function xn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  (0, Dn.default)(t);
  var l = t, i = s.ignore;
  if (i)
    if (i instanceof RegExp)
      l = l.replace(i, "");
    else if (typeof i == "string")
      l = l.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else
      throw new Error("ignore should be instance of a String or RegExp");
  if (e in Bt.alphanumeric)
    return Bt.alphanumeric[e].test(l);
  throw new Error("Invalid locale '".concat(e, "'"));
}
Me.locales = Object.keys(Bt.alphanumeric);
var Nt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = i(R), l = H;
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = /^[0-9]+$/;
  function r(u, n) {
    return (0, s.default)(u), n && n.no_symbols ? a.test(u) : new RegExp("^[+-]?([0-9]*[".concat((n || {}).locale ? l.decimal[n.locale] : ".", "])?[0-9]+$")).test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Nt, Nt.exports);
var Ln = Nt.exports, Zt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    AM: /^[A-Z]{2}\d{7}$/,
    // ARMENIA
    AR: /^[A-Z]{3}\d{6}$/,
    // ARGENTINA
    AT: /^[A-Z]\d{7}$/,
    // AUSTRIA
    AU: /^[A-Z]\d{7}$/,
    // AUSTRALIA
    AZ: /^[A-Z]{1}\d{8}$/,
    // AZERBAIJAN
    BE: /^[A-Z]{2}\d{6}$/,
    // BELGIUM
    BG: /^\d{9}$/,
    // BULGARIA
    BR: /^[A-Z]{2}\d{6}$/,
    // BRAZIL
    BY: /^[A-Z]{2}\d{7}$/,
    // BELARUS
    CA: /^[A-Z]{2}\d{6}$/,
    // CANADA
    CH: /^[A-Z]\d{7}$/,
    // SWITZERLAND
    CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
    // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
    CY: /^[A-Z](\d{6}|\d{8})$/,
    // CYPRUS
    CZ: /^\d{8}$/,
    // CZECH REPUBLIC
    DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
    // GERMANY
    DK: /^\d{9}$/,
    // DENMARK
    DZ: /^\d{9}$/,
    // ALGERIA
    EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
    // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
    ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
    // SPAIN
    FI: /^[A-Z]{2}\d{7}$/,
    // FINLAND
    FR: /^\d{2}[A-Z]{2}\d{5}$/,
    // FRANCE
    GB: /^\d{9}$/,
    // UNITED KINGDOM
    GR: /^[A-Z]{2}\d{7}$/,
    // GREECE
    HR: /^\d{9}$/,
    // CROATIA
    HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
    // HUNGARY
    IE: /^[A-Z0-9]{2}\d{7}$/,
    // IRELAND
    IN: /^[A-Z]{1}-?\d{7}$/,
    // INDIA
    ID: /^[A-C]\d{7}$/,
    // INDONESIA
    IR: /^[A-Z]\d{8}$/,
    // IRAN
    IS: /^(A)\d{7}$/,
    // ICELAND
    IT: /^[A-Z0-9]{2}\d{7}$/,
    // ITALY
    JM: /^[Aa]\d{7}$/,
    // JAMAICA
    JP: /^[A-Z]{2}\d{7}$/,
    // JAPAN
    KR: /^[MS]\d{8}$/,
    // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
    KZ: /^[a-zA-Z]\d{7}$/,
    // KAZAKHSTAN
    LI: /^[a-zA-Z]\d{5}$/,
    // LIECHTENSTEIN
    LT: /^[A-Z0-9]{8}$/,
    // LITHUANIA
    LU: /^[A-Z0-9]{8}$/,
    // LUXEMBURG
    LV: /^[A-Z0-9]{2}\d{7}$/,
    // LATVIA
    LY: /^[A-Z0-9]{8}$/,
    // LIBYA
    MT: /^\d{7}$/,
    // MALTA
    MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
    // MOZAMBIQUE
    MY: /^[AHK]\d{8}$/,
    // MALAYSIA
    MX: /^\d{10,11}$/,
    // MEXICO
    NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
    // NETHERLANDS
    NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
    // NEW ZEALAND
    PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
    // PHILIPPINES
    PK: /^[A-Z]{2}\d{7}$/,
    // PAKISTAN
    PL: /^[A-Z]{2}\d{7}$/,
    // POLAND
    PT: /^[A-Z]\d{6}$/,
    // PORTUGAL
    RO: /^\d{8,9}$/,
    // ROMANIA
    RU: /^\d{9}$/,
    // RUSSIAN FEDERATION
    SE: /^\d{8}$/,
    // SWEDEN
    SL: /^(P)[A-Z]\d{7}$/,
    // SLOVENIA
    SK: /^[0-9A-Z]\d{7}$/,
    // SLOVAKIA
    TH: /^[A-Z]{1,2}\d{6,7}$/,
    // THAILAND
    TR: /^[A-Z]\d{8}$/,
    // TURKEY
    UA: /^[A-Z]{2}\d{6}$/,
    // UKRAINE
    US: /^\d{9}$/,
    // UNITED STATES
    ZA: /^[TAMD]\d{8}$/
    // SOUTH AFRICA
  };
  function a(r, u) {
    (0, s.default)(r);
    var n = r.replace(/\s/g, "").toUpperCase();
    return u.toUpperCase() in i && i[u].test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Zt, Zt.exports);
var Pn = Zt.exports, Ft = { exports: {} }, Tt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = l(R);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, a = /^[-+]?[0-9]+$/;
  function r(u, n) {
    (0, s.default)(u), n = n || {};
    var o = n.allow_leading_zeroes === !1 ? i : a, c = !n.hasOwnProperty("min") || u >= n.min, v = !n.hasOwnProperty("max") || u <= n.max, g = !n.hasOwnProperty("lt") || u < n.lt, E = !n.hasOwnProperty("gt") || u > n.gt;
    return o.test(u) && c && v && g && E;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Tt, Tt.exports);
var jr = Tt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(jr);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, s.default)(a, {
      allow_leading_zeroes: !1,
      min: 0,
      max: 65535
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ft, Ft.exports);
var On = Ft.exports, Ut = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, s.default)(a), a === a.toLowerCase();
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ut, Ut.exports);
var Bn = Ut.exports, wt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, s.default)(a), a === a.toUpperCase();
  }
  t.exports = e.default, t.exports.default = e.default;
})(wt, wt.exports);
var Nn = wt.exports, Ht = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = l(R);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^[0-9]{15}$/, a = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
  function r(u, n) {
    (0, s.default)(u), n = n || {};
    var o = i;
    if (n.allow_hyphens && (o = a), !o.test(u))
      return !1;
    u = u.replace(/-/g, "");
    for (var c = 0, v = 2, g = 14, E = 0; E < g; E++) {
      var C = u.substring(g - E - 1, g - E), p = parseInt(C, 10) * v;
      p >= 10 ? c += p % 10 + 1 : c += p, v === 1 ? v += 1 : v -= 1;
    }
    var _ = (10 - c % 10) % 10;
    return _ === parseInt(u.substring(14, 15), 10);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ht, Ht.exports);
var Zn = Ht.exports, kt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[\x00-\x7F]+$/;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(kt, kt.exports);
var Fn = kt.exports, Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = Hn;
Ae.fullWidth = void 0;
var Tn = Un(R);
function Un(t) {
  return t && t.__esModule ? t : { default: t };
}
var wn = Ae.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function Hn(t) {
  return (0, Tn.default)(t), wn.test(t);
}
var ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
ge.default = Kn;
ge.halfWidth = void 0;
var kn = Gn(R);
function Gn(t) {
  return t && t.__esModule ? t : { default: t };
}
var bn = ge.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function Kn(t) {
  return (0, kn.default)(t), bn.test(t);
}
var Gt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = a(R), l = Ae, i = ge;
  function a(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function r(u) {
    return (0, s.default)(u), l.fullWidth.test(u) && i.halfWidth.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Gt, Gt.exports);
var Wn = Gt.exports, bt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /[^\x00-\x7F]/;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(bt, bt.exports);
var qn = bt.exports, Kt = { exports: {} }, Wt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = s;
  function s(l, i) {
    var a = l.join("");
    return new RegExp(a, i);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Wt, Wt.exports);
var Yn = Wt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = i(R), l = i(Yn);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = (0, l.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
  function r(u) {
    return (0, s.default)(u), a.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Kt, Kt.exports);
var Vn = Kt.exports, qt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(qt, qt.exports);
var zn = qt.exports, Yt = { exports: {} }, Vt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var s = function(i, a) {
    return i.some(function(r) {
      return a === r;
    });
  };
  e.default = s, t.exports = e.default, t.exports.default = e.default;
})(Vt, Vt.exports);
var Jn = Vt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = c;
  var s = r(W), l = r(R), i = r(Jn), a = H;
  function r(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function u(v) {
    var g = new RegExp("^[-+]?([0-9]+)?(\\".concat(a.decimal[v.locale], "[0-9]{").concat(v.decimal_digits, "})").concat(v.force_decimal ? "" : "?", "$"));
    return g;
  }
  var n = {
    force_decimal: !1,
    decimal_digits: "1,",
    locale: "en-US"
  }, o = ["", "-", "+"];
  function c(v, g) {
    if ((0, l.default)(v), g = (0, s.default)(g, n), g.locale in a.decimal)
      return !(0, i.default)(o, v.replace(/ /g, "")) && u(g).test(v);
    throw new Error("Invalid locale '".concat(g.locale, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Yt, Yt.exports);
var Xn = Yt.exports, zt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(0x|0h)?[0-9A-F]+$/i;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(zt, zt.exports);
var ha = zt.exports, Jt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(0o)?[0-7]+$/i;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Jt, Jt.exports);
var Qn = Jt.exports, Xt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = i(R), l = i(va);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, u) {
    return (0, s.default)(r), (0, l.default)(r) % parseInt(u, 10) === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Xt, Xt.exports);
var jn = Xt.exports, Qt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Qt, Qt.exports);
var eu = Qt.exports, jt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var s = l(R);
  function l(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/, a = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/, r = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/, u = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
  function n(o) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return (0, s.default)(o), c ? i.test(o) || a.test(o) || r.test(o) || u.test(o) : i.test(o) || a.test(o);
  }
  t.exports = e.default, t.exports.default = e.default;
})(jt, jt.exports);
var tu = jt.exports, er = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = l(R);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i, a = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
  function r(u) {
    (0, s.default)(u);
    var n = u.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
    return n.indexOf(",") !== -1 ? i.test(n) : a.test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(er, er.exports);
var ru = er.exports, tr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(tr, tr.exports);
var au = tr.exports, ye = {};
Object.defineProperty(ye, "__esModule", {
  value: !0
});
ye.default = fu;
ye.locales = void 0;
var nu = uu(R);
function uu(t) {
  return t && t.__esModule ? t : { default: t };
}
var Ue = {
  AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
  AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
  AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  AT: /^(AT[0-9]{2})\d{16}$/,
  AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  BA: /^(BA[0-9]{2})\d{16}$/,
  BE: /^(BE[0-9]{2})\d{12}$/,
  BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
  BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
  BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
  BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  CR: /^(CR[0-9]{2})\d{18}$/,
  CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  CZ: /^(CZ[0-9]{2})\d{20}$/,
  DE: /^(DE[0-9]{2})\d{18}$/,
  DK: /^(DK[0-9]{2})\d{14}$/,
  DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
  DZ: /^(DZ\d{24})$/,
  EE: /^(EE[0-9]{2})\d{16}$/,
  EG: /^(EG[0-9]{2})\d{25}$/,
  ES: /^(ES[0-9]{2})\d{20}$/,
  FI: /^(FI[0-9]{2})\d{14}$/,
  FO: /^(FO[0-9]{2})\d{14}$/,
  FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
  GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
  GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
  GL: /^(GL[0-9]{2})\d{14}$/,
  GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
  GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
  HR: /^(HR[0-9]{2})\d{17}$/,
  HU: /^(HU[0-9]{2})\d{24}$/,
  IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
  IL: /^(IL[0-9]{2})\d{19}$/,
  IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
  IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
  IS: /^(IS[0-9]{2})\d{22}$/,
  IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
  KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
  KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
  LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
  LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  LT: /^(LT[0-9]{2})\d{16}$/,
  LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
  MA: /^(MA[0-9]{26})$/,
  MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
  ME: /^(ME[0-9]{2})\d{18}$/,
  MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
  MR: /^(MR[0-9]{2})\d{23}$/,
  MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
  MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
  MZ: /^(MZ[0-9]{2})\d{21}$/,
  NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
  NO: /^(NO[0-9]{2})\d{11}$/,
  PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  PL: /^(PL[0-9]{2})\d{24}$/,
  PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
  PT: /^(PT[0-9]{2})\d{21}$/,
  QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
  RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
  RS: /^(RS[0-9]{2})\d{18}$/,
  SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
  SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
  SE: /^(SE[0-9]{2})\d{20}$/,
  SI: /^(SI[0-9]{2})\d{15}$/,
  SK: /^(SK[0-9]{2})\d{20}$/,
  SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  TL: /^(TL[0-9]{2})\d{19}$/,
  TN: /^(TN[0-9]{2})\d{20}$/,
  TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
  UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
  VA: /^(VA[0-9]{2})\d{18}$/,
  VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  XK: /^(XK[0-9]{2})\d{16}$/
};
function iu(t) {
  var e = t.filter(function(s) {
    return !(s in Ue);
  });
  return !(e.length > 0);
}
function lu(t, e) {
  var s = t.replace(/[\s\-]+/gi, "").toUpperCase(), l = s.slice(0, 2).toUpperCase(), i = l in Ue;
  if (e.whitelist) {
    if (!iu(e.whitelist))
      return !1;
    var a = e.whitelist.includes(l);
    if (!a)
      return !1;
  }
  if (e.blacklist) {
    var r = e.blacklist.includes(l);
    if (r)
      return !1;
  }
  return i && Ue[l].test(s);
}
function su(t) {
  var e = t.replace(/[^A-Z0-9]+/gi, "").toUpperCase(), s = e.slice(4) + e.slice(0, 4), l = s.replace(/[A-Z]/g, function(a) {
    return a.charCodeAt(0) - 55;
  }), i = l.match(/\d{1,7}/g).reduce(function(a, r) {
    return Number(a + r) % 97;
  }, "");
  return i === 1;
}
function fu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (0, nu.default)(t), lu(t, e) && su(t);
}
ye.locales = Object.keys(Ue);
var rr = { exports: {} }, he = {};
Object.defineProperty(he, "__esModule", {
  value: !0
});
he.CountryCodes = void 0;
he.default = cu;
var ou = du(R);
function du(t) {
  return t && t.__esModule ? t : { default: t };
}
var Sa = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
function cu(t) {
  return (0, ou.default)(t), Sa.has(t.toUpperCase());
}
he.CountryCodes = Sa;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = i(R), l = he;
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
  function r(u) {
    (0, s.default)(u);
    var n = u.slice(4, 6).toUpperCase();
    return !l.CountryCodes.has(n) && n !== "XK" ? !1 : a.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(rr, rr.exports);
var vu = rr.exports, ar = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[a-f0-9]{32}$/;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ar, ar.exports);
var pu = ar.exports, nr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    md5: 32,
    md4: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8
  };
  function a(r, u) {
    (0, s.default)(r);
    var n = new RegExp("^[a-fA-F0-9]{".concat(i[u], "}$"));
    return n.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(nr, nr.exports);
var _u = nr.exports, ur = { exports: {} }, ir = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var s = i(R), l = i(W);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = /[^A-Z0-9+\/=]/i, r = /^[A-Z0-9_\-]*$/i, u = {
    urlSafe: !1
  };
  function n(o, c) {
    (0, s.default)(o), c = (0, l.default)(c, u);
    var v = o.length;
    if (c.urlSafe)
      return r.test(o);
    if (v % 4 !== 0 || a.test(o))
      return !1;
    var g = o.indexOf("=");
    return g === -1 || g === v - 1 || g === v - 2 && o[v - 1] === "=";
  }
  t.exports = e.default, t.exports.default = e.default;
})(ir, ir.exports);
var $a = ir.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = i(R), l = i($a);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    (0, s.default)(r);
    var u = r.split("."), n = u.length;
    return n !== 3 ? !1 : u.reduce(function(o, c) {
      return o && (0, l.default)(c, {
        urlSafe: !0
      });
    }, !0);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ur, ur.exports);
var Au = ur.exports, lr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var s = i(R), l = i(W);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
      return typeof o;
    } : function(o) {
      return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, a(n);
  }
  var r = {
    allow_primitives: !1
  };
  function u(n, o) {
    (0, s.default)(n);
    try {
      o = (0, l.default)(o, r);
      var c = [];
      o.allow_primitives && (c = [null, !1, !0]);
      var v = JSON.parse(n);
      return c.includes(v) || !!v && a(v) === "object";
    } catch {
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(lr, lr.exports);
var gu = lr.exports, sr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = i(R), l = i(W);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = {
    ignore_whitespace: !1
  };
  function r(u, n) {
    return (0, s.default)(u), n = (0, l.default)(n, a), (n.ignore_whitespace ? u.trim().length : u.length) === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(sr, sr.exports);
var hu = sr.exports, fr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function i(r) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
      return typeof u;
    } : function(u) {
      return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
    }, i(r);
  }
  function a(r, u) {
    (0, s.default)(r);
    var n, o;
    i(u) === "object" ? (n = u.min || 0, o = u.max) : (n = arguments[1] || 0, o = arguments[2]);
    var c = r.match(/(\uFE0F|\uFE0E)/g) || [], v = r.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [], g = r.length - c.length - v.length;
    return g >= n && (typeof o > "u" || g <= o);
  }
  t.exports = e.default, t.exports.default = e.default;
})(fr, fr.exports);
var Su = fr.exports, or = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    7: /^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
  };
  function a(r, u) {
    (0, s.default)(r);
    var n = i[[void 0, null].includes(u) ? "all" : u];
    return !!n && n.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(or, or.exports);
var $u = or.exports, dr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = i(R), l = i(ha);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    return (0, s.default)(r), (0, l.default)(r) && r.length === 24;
  }
  t.exports = e.default, t.exports.default = e.default;
})(dr, dr.exports);
var mu = dr.exports, cr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(Xr);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    var u = (r == null ? void 0 : r.comparisonDate) || r || Date().toString(), n = (0, s.default)(u), o = (0, s.default)(a);
    return !!(o && n && o > n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(cr, cr.exports);
var Mu = cr.exports, vr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = i(R), l = i(Xr);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
    (0, s.default)(r);
    var n = (0, l.default)(u), o = (0, l.default)(r);
    return !!(o && n && o < n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(vr, vr.exports);
var yu = vr.exports, pr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = i(R), l = i(pa);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, a(u);
  }
  function r(u, n) {
    (0, s.default)(u);
    var o;
    if (Object.prototype.toString.call(n) === "[object Array]") {
      var c = [];
      for (o in n)
        ({}).hasOwnProperty.call(n, o) && (c[o] = (0, l.default)(n[o]));
      return c.indexOf(u) >= 0;
    } else {
      if (a(n) === "object")
        return n.hasOwnProperty(u);
      if (n && typeof n.indexOf == "function")
        return n.indexOf(u) >= 0;
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(pr, pr.exports);
var Iu = pr.exports, _r = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    (0, s.default)(a);
    for (var r = a.replace(/[- ]+/g, ""), u = 0, n, o, c, v = r.length - 1; v >= 0; v--)
      n = r.substring(v, v + 1), o = parseInt(n, 10), c ? (o *= 2, o >= 10 ? u += o % 10 + 1 : u += o) : u += o, c = !c;
    return !!(u % 10 === 0 && r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(_r, _r.exports);
var ma = _r.exports, Ar = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var s = i(R), l = i(ma);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var a = {
    amex: /^3[47][0-9]{13}$/,
    dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
    // /^[25][1-7][0-9]{14}$/;
    unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
    visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
  }, r = function() {
    var n = [];
    for (var o in a)
      a.hasOwnProperty(o) && n.push(a[o]);
    return n;
  }();
  function u(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, s.default)(n);
    var c = o.provider, v = n.replace(/[- ]+/g, "");
    if (c && c.toLowerCase() in a) {
      if (!a[c.toLowerCase()].test(v))
        return !1;
    } else {
      if (c && !(c.toLowerCase() in a))
        throw new Error("".concat(c, " is not a valid credit card provider."));
      if (!r.some(function(g) {
        return g.test(v);
      }))
        return !1;
    }
    return (0, l.default)(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ar, Ar.exports);
var Ru = Ar.exports, gr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = i(R), l = i(jr);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = {
    PL: function(n) {
      (0, s.default)(n);
      var o = {
        1: 1,
        2: 3,
        3: 7,
        4: 9,
        5: 1,
        6: 3,
        7: 7,
        8: 9,
        9: 1,
        10: 3,
        11: 0
      };
      if (n != null && n.length === 11 && (0, l.default)(n, {
        allow_leading_zeroes: !0
      })) {
        var c = n.split("").slice(0, -1), v = c.reduce(function(C, p, _) {
          return C + Number(p) * o[_ + 1];
        }, 0), g = v % 10, E = Number(n.charAt(n.length - 1));
        if (g === 0 && E === 0 || E === 10 - g)
          return !0;
      }
      return !1;
    },
    ES: function(n) {
      (0, s.default)(n);
      var o = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/, c = {
        X: 0,
        Y: 1,
        Z: 2
      }, v = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"], g = n.trim().toUpperCase();
      if (!o.test(g))
        return !1;
      var E = g.slice(0, -1).replace(/[X,Y,Z]/g, function(C) {
        return c[C];
      });
      return g.endsWith(v[E % 23]);
    },
    FI: function(n) {
      if ((0, s.default)(n), n.length !== 11 || !n.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/))
        return !1;
      var o = "0123456789ABCDEFHJKLMNPRSTUVWXY", c = parseInt(n.slice(0, 6), 10) * 1e3 + parseInt(n.slice(7, 10), 10), v = c % 31, g = o[v];
      return g === n.slice(10, 11);
    },
    IN: function(n) {
      var o = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/, c = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], v = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], g = n.trim();
      if (!o.test(g))
        return !1;
      var E = 0, C = g.replace(/\s/g, "").split("").map(Number).reverse();
      return C.forEach(function(p, _) {
        E = c[E][v[_ % 8][p]];
      }), E === 0;
    },
    IR: function(n) {
      if (!n.match(/^\d{10}$/) || (n = "0000".concat(n).slice(n.length - 6), parseInt(n.slice(3, 9), 10) === 0)) return !1;
      for (var o = parseInt(n.slice(9, 10), 10), c = 0, v = 0; v < 9; v++)
        c += parseInt(n.slice(v, v + 1), 10) * (10 - v);
      return c %= 11, c < 2 && o === c || c >= 2 && o === 11 - c;
    },
    IT: function(n) {
      return n.length !== 9 || n === "CA00000AA" ? !1 : n.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1;
    },
    NO: function(n) {
      var o = n.trim();
      if (isNaN(Number(o)) || o.length !== 11 || o === "00000000000") return !1;
      var c = o.split("").map(Number), v = (11 - (3 * c[0] + 7 * c[1] + 6 * c[2] + 1 * c[3] + 8 * c[4] + 9 * c[5] + 4 * c[6] + 5 * c[7] + 2 * c[8]) % 11) % 11, g = (11 - (5 * c[0] + 4 * c[1] + 3 * c[2] + 2 * c[3] + 7 * c[4] + 6 * c[5] + 5 * c[6] + 4 * c[7] + 3 * c[8] + 2 * v) % 11) % 11;
      return !(v !== c[9] || g !== c[10]);
    },
    TH: function(n) {
      if (!n.match(/^[1-8]\d{12}$/)) return !1;
      for (var o = 0, c = 0; c < 12; c++)
        o += parseInt(n[c], 10) * (13 - c);
      return n[12] === ((11 - o % 11) % 10).toString();
    },
    LK: function(n) {
      var o = /^[1-9]\d{8}[vx]$/i, c = /^[1-9]\d{11}$/i;
      return n.length === 10 && o.test(n) ? !0 : !!(n.length === 12 && c.test(n));
    },
    "he-IL": function(n) {
      var o = /^\d{9}$/, c = n.trim();
      if (!o.test(c))
        return !1;
      for (var v = c, g = 0, E, C = 0; C < v.length; C++)
        E = Number(v[C]) * (C % 2 + 1), g += E > 9 ? E - 9 : E;
      return g % 10 === 0;
    },
    "ar-LY": function(n) {
      var o = /^(1|2)\d{11}$/, c = n.trim();
      return !!o.test(c);
    },
    "ar-TN": function(n) {
      var o = /^\d{8}$/, c = n.trim();
      return !!o.test(c);
    },
    "zh-CN": function(n) {
      var o = [
        "11",
        // 北京
        "12",
        // 天津
        "13",
        // 河北
        "14",
        // 山西
        "15",
        // 内蒙古
        "21",
        // 辽宁
        "22",
        // 吉林
        "23",
        // 黑龙江
        "31",
        // 上海
        "32",
        // 江苏
        "33",
        // 浙江
        "34",
        // 安徽
        "35",
        // 福建
        "36",
        // 江西
        "37",
        // 山东
        "41",
        // 河南
        "42",
        // 湖北
        "43",
        // 湖南
        "44",
        // 广东
        "45",
        // 广西
        "46",
        // 海南
        "50",
        // 重庆
        "51",
        // 四川
        "52",
        // 贵州
        "53",
        // 云南
        "54",
        // 西藏
        "61",
        // 陕西
        "62",
        // 甘肃
        "63",
        // 青海
        "64",
        // 宁夏
        "65",
        // 新疆
        "71",
        // 台湾
        "81",
        // 香港
        "82",
        // 澳门
        "91"
        // 国外
      ], c = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"], v = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"], g = function(M) {
        return o.includes(M);
      }, E = function(M) {
        var x = parseInt(M.substring(0, 4), 10), P = parseInt(M.substring(4, 6), 10), L = parseInt(M.substring(6), 10), B = new Date(x, P - 1, L);
        return B > /* @__PURE__ */ new Date() ? !1 : B.getFullYear() === x && B.getMonth() === P - 1 && B.getDate() === L;
      }, C = function(M) {
        for (var x = M.substring(0, 17), P = 0, L = 0; L < 17; L++)
          P += parseInt(x.charAt(L), 10) * parseInt(c[L], 10);
        var B = P % 11;
        return v[B];
      }, p = function(M) {
        return C(M) === M.charAt(17).toUpperCase();
      }, _ = function(M) {
        var x = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(M);
        if (!x) return !1;
        var P = M.substring(0, 2);
        if (x = g(P), !x) return !1;
        var L = "19".concat(M.substring(6, 12));
        return x = E(L), !!x;
      }, S = function(M) {
        var x = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(M);
        if (!x) return !1;
        var P = M.substring(0, 2);
        if (x = g(P), !x) return !1;
        var L = M.substring(6, 14);
        return x = E(L), x ? p(M) : !1;
      }, h = function(M) {
        var x = /^\d{15}|(\d{17}(\d|x|X))$/.test(M);
        return x ? M.length === 15 ? _(M) : S(M) : !1;
      };
      return h(n);
    },
    "zh-HK": function(n) {
      n = n.trim();
      var o = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/, c = /^[0-9]$/;
      if (n = n.toUpperCase(), !o.test(n)) return !1;
      n = n.replace(/\[|\]|\(|\)/g, ""), n.length === 8 && (n = "3".concat(n));
      for (var v = 0, g = 0; g <= 7; g++) {
        var E = void 0;
        c.test(n[g]) ? E = n[g] : E = (n[g].charCodeAt(0) - 55) % 11, v += E * (9 - g);
      }
      v %= 11;
      var C;
      return v === 0 ? C = "0" : v === 1 ? C = "A" : C = String(11 - v), C === n[n.length - 1];
    },
    "zh-TW": function(n) {
      var o = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        G: 16,
        H: 17,
        I: 34,
        J: 18,
        K: 19,
        L: 20,
        M: 21,
        N: 22,
        O: 35,
        P: 23,
        Q: 24,
        R: 25,
        S: 26,
        T: 27,
        U: 28,
        V: 29,
        W: 32,
        X: 30,
        Y: 31,
        Z: 33
      }, c = n.trim().toUpperCase();
      return /^[A-Z][0-9]{9}$/.test(c) ? Array.from(c).reduce(function(v, g, E) {
        if (E === 0) {
          var C = o[g];
          return C % 10 * 9 + Math.floor(C / 10);
        }
        return E === 9 ? (10 - v % 10 - Number(g)) % 10 === 0 : v + Number(g) * (9 - E);
      }, 0) : !1;
    }
  };
  function r(u, n) {
    if ((0, s.default)(u), n in a)
      return a[n](u);
    if (n === "any") {
      for (var o in a)
        if (a.hasOwnProperty(o)) {
          var c = a[o];
          if (c(u))
            return !0;
        }
      return !1;
    }
    throw new Error("Invalid locale '".concat(n, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(gr, gr.exports);
var Eu = gr.exports, hr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var s = l(R);
  function l(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var i = 8, a = 14, r = /^(\d{8}|\d{13}|\d{14})$/;
  function u(c, v) {
    return c === i || c === a ? v % 2 === 0 ? 3 : 1 : v % 2 === 0 ? 1 : 3;
  }
  function n(c) {
    var v = c.slice(0, -1).split("").map(function(E, C) {
      return Number(E) * u(c.length, C);
    }).reduce(function(E, C) {
      return E + C;
    }, 0), g = 10 - v % 10;
    return g < 10 ? g : 0;
  }
  function o(c) {
    (0, s.default)(c);
    var v = Number(c.slice(-1));
    return r.test(c) && v === n(c);
  }
  t.exports = e.default, t.exports.default = e.default;
})(hr, hr.exports);
var Du = hr.exports, Sr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
  function a(r) {
    if ((0, s.default)(r), !i.test(r))
      return !1;
    for (var u = !0, n = 0, o = r.length - 2; o >= 0; o--)
      if (r[o] >= "A" && r[o] <= "Z")
        for (var c = r[o].charCodeAt(0) - 55, v = c % 10, g = Math.trunc(c / 10), E = 0, C = [v, g]; E < C.length; E++) {
          var p = C[E];
          u ? p >= 5 ? n += 1 + (p - 5) * 2 : n += p * 2 : n += p, u = !u;
        }
      else {
        var _ = r[o].charCodeAt(0) - 48;
        u ? _ >= 5 ? n += 1 + (_ - 5) * 2 : n += _ * 2 : n += _, u = !u;
      }
    var S = Math.trunc((n + 9) / 10) * 10 - n;
    return +r[r.length - 1] === S;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Sr, Sr.exports);
var Cu = Sr.exports, $r = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var s = l(R);
  function l(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^(?:[0-9]{9}X|[0-9]{10})$/, a = /^(?:[0-9]{13})$/, r = [1, 3];
  function u(n, o) {
    (0, s.default)(n);
    var c = String((o == null ? void 0 : o.version) || o);
    if (!(o != null && o.version || o))
      return u(n, {
        version: 10
      }) || u(n, {
        version: 13
      });
    var v = n.replace(/[\s-]+/g, ""), g = 0;
    if (c === "10") {
      if (!i.test(v))
        return !1;
      for (var E = 0; E < c - 1; E++)
        g += (E + 1) * v.charAt(E);
      if (v.charAt(9) === "X" ? g += 10 * 10 : g += 10 * v.charAt(9), g % 11 === 0)
        return !0;
    } else if (c === "13") {
      if (!a.test(v))
        return !1;
      for (var C = 0; C < 12; C++)
        g += r[C % 2] * v.charAt(C);
      if (v.charAt(12) - (10 - g % 10) % 10 === 0)
        return !0;
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})($r, $r.exports);
var xu = $r.exports, mr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = "^\\d{4}-?\\d{3}[\\dX]$";
  function a(r) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, s.default)(r);
    var n = i;
    if (n = u.require_hyphen ? n.replace("?", "") : n, n = u.case_sensitive ? new RegExp(n) : new RegExp(n, "i"), !n.test(r))
      return !1;
    for (var o = r.replace("-", "").toUpperCase(), c = 0, v = 0; v < o.length; v++) {
      var g = o[v];
      c += (g === "X" ? 10 : +g) * (8 - v);
    }
    return c % 11 === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(mr, mr.exports);
var Lu = mr.exports, Mr = { exports: {} }, se = {};
Object.defineProperty(se, "__esModule", {
  value: !0
});
se.iso7064Check = Pu;
se.luhnCheck = Ou;
se.reverseMultiplyAndSum = Bu;
se.verhoeffCheck = Nu;
function Pu(t) {
  for (var e = 10, s = 0; s < t.length - 1; s++)
    e = (parseInt(t[s], 10) + e) % 10 === 0 ? 10 * 2 % 11 : (parseInt(t[s], 10) + e) % 10 * 2 % 11;
  return e = e === 1 ? 0 : 11 - e, e === parseInt(t[10], 10);
}
function Ou(t) {
  for (var e = 0, s = !1, l = t.length - 1; l >= 0; l--) {
    if (s) {
      var i = parseInt(t[l], 10) * 2;
      i > 9 ? e += i.toString().split("").map(function(a) {
        return parseInt(a, 10);
      }).reduce(function(a, r) {
        return a + r;
      }, 0) : e += i;
    } else
      e += parseInt(t[l], 10);
    s = !s;
  }
  return e % 10 === 0;
}
function Bu(t, e) {
  for (var s = 0, l = 0; l < t.length; l++)
    s += t[l] * (e - l);
  return s;
}
function Nu(t) {
  for (var e = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], s = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], l = t.split("").reverse().join(""), i = 0, a = 0; a < l.length; a++)
    i = e[i][s[a % 8][parseInt(l[a], 10)]];
  return i === 0;
}
(function(t, e) {
  function s(f) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
      return typeof d;
    } : function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, s(f);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = je;
  var l = n(R), i = u(se), a = n(ga);
  function r(f) {
    if (typeof WeakMap != "function") return null;
    var d = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
    return (r = function(m) {
      return m ? A : d;
    })(f);
  }
  function u(f, d) {
    if (f && f.__esModule) return f;
    if (f === null || s(f) != "object" && typeof f != "function") return { default: f };
    var A = r(d);
    if (A && A.has(f)) return A.get(f);
    var y = { __proto__: null }, m = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var D in f) if (D !== "default" && {}.hasOwnProperty.call(f, D)) {
      var O = m ? Object.getOwnPropertyDescriptor(f, D) : null;
      O && (O.get || O.set) ? Object.defineProperty(y, D, O) : y[D] = f[D];
    }
    return y.default = f, A && A.set(f, y), y;
  }
  function n(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function o(f) {
    return E(f) || g(f) || v(f) || c();
  }
  function c() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function v(f, d) {
    if (f) {
      if (typeof f == "string") return C(f, d);
      var A = Object.prototype.toString.call(f).slice(8, -1);
      if (A === "Object" && f.constructor && (A = f.constructor.name), A === "Map" || A === "Set") return Array.from(f);
      if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)) return C(f, d);
    }
  }
  function g(f) {
    if (typeof Symbol < "u" && f[Symbol.iterator] != null || f["@@iterator"] != null) return Array.from(f);
  }
  function E(f) {
    if (Array.isArray(f)) return C(f);
  }
  function C(f, d) {
    (d == null || d > f.length) && (d = f.length);
    for (var A = 0, y = new Array(d); A < d; A++) y[A] = f[A];
    return y;
  }
  function p(f) {
    var d = f.slice(0, 2), A = parseInt(f.slice(2, 4), 10);
    A > 40 ? (A -= 40, d = "20".concat(d)) : A > 20 ? (A -= 20, d = "18".concat(d)) : d = "19".concat(d), A < 10 && (A = "0".concat(A));
    var y = "".concat(d, "/").concat(A, "/").concat(f.slice(4, 6));
    if (!(0, a.default)(y, "YYYY/MM/DD"))
      return !1;
    for (var m = f.split("").map(function(T) {
      return parseInt(T, 10);
    }), D = [2, 4, 8, 5, 10, 9, 7, 3, 6], O = 0, Z = 0; Z < D.length; Z++)
      O += m[Z] * D[Z];
    return O = O % 11 === 10 ? 0 : O % 11, O === m[9];
  }
  function _(f) {
    var d = f.split(""), A = d.filter(function(m, D) {
      return D % 2;
    }).map(function(m) {
      return Number(m) * 2;
    }).join("").split(""), y = d.filter(function(m, D) {
      return !(D % 2);
    }).concat(A).map(function(m) {
      return Number(m);
    }).reduce(function(m, D) {
      return m + D;
    });
    return y % 10 === 0;
  }
  function S(f) {
    f = f.replace(/\W/, "");
    var d = parseInt(f.slice(0, 2), 10);
    if (f.length === 10)
      d < 54 ? d = "20".concat(d) : d = "19".concat(d);
    else {
      if (f.slice(6) === "000")
        return !1;
      if (d < 54)
        d = "19".concat(d);
      else
        return !1;
    }
    d.length === 3 && (d = [d.slice(0, 2), "0", d.slice(2)].join(""));
    var A = parseInt(f.slice(2, 4), 10);
    if (A > 50 && (A -= 50), A > 20) {
      if (parseInt(d, 10) < 2004)
        return !1;
      A -= 20;
    }
    A < 10 && (A = "0".concat(A));
    var y = "".concat(d, "/").concat(A, "/").concat(f.slice(4, 6));
    if (!(0, a.default)(y, "YYYY/MM/DD"))
      return !1;
    if (f.length === 10 && parseInt(f, 10) % 11 !== 0) {
      var m = parseInt(f.slice(0, 9), 10) % 11;
      if (parseInt(d, 10) < 1986 && m === 10) {
        if (parseInt(f.slice(9), 10) !== 0)
          return !1;
      } else
        return !1;
    }
    return !0;
  }
  function h(f) {
    return i.luhnCheck(f);
  }
  function $(f) {
    for (var d = f.split("").map(function(T) {
      return parseInt(T, 10);
    }), A = [], y = 0; y < d.length - 1; y++) {
      A.push("");
      for (var m = 0; m < d.length - 1; m++)
        d[y] === d[m] && (A[y] += m);
    }
    if (A = A.filter(function(T) {
      return T.length > 1;
    }), A.length !== 2 && A.length !== 3)
      return !1;
    if (A[0].length === 3) {
      for (var D = A[0].split("").map(function(T) {
        return parseInt(T, 10);
      }), O = 0, Z = 0; Z < D.length - 1; Z++)
        D[Z] + 1 === D[Z + 1] && (O += 1);
      if (O === 2)
        return !1;
    }
    return i.iso7064Check(f);
  }
  function M(f) {
    f = f.replace(/\W/, "");
    var d = parseInt(f.slice(4, 6), 10), A = f.slice(6, 7);
    switch (A) {
      case "0":
      case "1":
      case "2":
      case "3":
        d = "19".concat(d);
        break;
      case "4":
      case "9":
        d < 37 ? d = "20".concat(d) : d = "19".concat(d);
        break;
      default:
        if (d < 37)
          d = "20".concat(d);
        else if (d > 58)
          d = "18".concat(d);
        else
          return !1;
        break;
    }
    d.length === 3 && (d = [d.slice(0, 2), "0", d.slice(2)].join(""));
    var y = "".concat(d, "/").concat(f.slice(2, 4), "/").concat(f.slice(0, 2));
    if (!(0, a.default)(y, "YYYY/MM/DD"))
      return !1;
    for (var m = f.split("").map(function(T) {
      return parseInt(T, 10);
    }), D = 0, O = 4, Z = 0; Z < 9; Z++)
      D += m[Z] * O, O -= 1, O === 1 && (O = 7);
    return D %= 11, D === 1 ? !1 : D === 0 ? m[9] === 0 : m[9] === 11 - D;
  }
  function x(f) {
    for (var d = f.slice(0, 8).split("").map(function(D) {
      return parseInt(D, 10);
    }), A = 0, y = 1; y < d.length; y += 2)
      A += d[y];
    for (var m = 0; m < d.length; m += 2)
      d[m] < 2 ? A += 1 - d[m] : (A += 2 * (d[m] - 2) + 5, d[m] > 4 && (A += 2));
    return String.fromCharCode(A % 26 + 65) === f.charAt(8);
  }
  function P(f) {
    for (var d = f.split("").map(function(m) {
      return parseInt(m, 10);
    }), A = 0, y = 0; y < 8; y++)
      A += d[y] * Math.pow(2, 8 - y);
    return A % 11 % 10 === d[8];
  }
  function L(f) {
    var d = i.reverseMultiplyAndSum(f.split("").slice(0, 7).map(function(A) {
      return parseInt(A, 10);
    }), 8);
    return f.length === 9 && f[8] !== "W" && (d += (f[8].charCodeAt(0) - 64) * 9), d %= 23, d === 0 ? f[7].toUpperCase() === "W" : f[7].toUpperCase() === String.fromCharCode(64 + d);
  }
  var B = {
    andover: ["10", "12"],
    atlanta: ["60", "67"],
    austin: ["50", "53"],
    brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
    cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
    fresno: ["15", "24"],
    internet: ["20", "26", "27", "45", "46", "47"],
    kansas: ["40", "44"],
    memphis: ["94", "95"],
    ogden: ["80", "90"],
    philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
    sba: ["31"]
  };
  function N() {
    var f = [];
    for (var d in B)
      B.hasOwnProperty(d) && f.push.apply(f, o(B[d]));
    return f;
  }
  function F(f) {
    return N().indexOf(f.slice(0, 2)) !== -1;
  }
  function G(f) {
    for (var d = 0, A = f.split(""), y = parseInt(A.pop(), 10), m = 0; m < A.length; m++)
      d += A[9 - m] * (2 + m % 6);
    var D = 11 - d % 11;
    return D === 11 ? D = 0 : D === 10 && (D = 9), y === D;
  }
  function z(f) {
    var d = f.toUpperCase().split("");
    if (isNaN(parseInt(d[0], 10)) && d.length > 1) {
      var A = 0;
      switch (d[0]) {
        case "Y":
          A = 1;
          break;
        case "Z":
          A = 2;
          break;
      }
      d.splice(0, 1, A);
    } else
      for (; d.length < 9; )
        d.unshift(0);
    var y = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    d = d.join("");
    var m = parseInt(d.slice(0, 8), 10) % 23;
    return d[8] === y[m];
  }
  function X(f) {
    var d = f.slice(1, 3), A = f.slice(0, 1);
    switch (A) {
      case "1":
      case "2":
        d = "18".concat(d);
        break;
      case "3":
      case "4":
        d = "19".concat(d);
        break;
      default:
        d = "20".concat(d);
        break;
    }
    var y = "".concat(d, "/").concat(f.slice(3, 5), "/").concat(f.slice(5, 7));
    if (!(0, a.default)(y, "YYYY/MM/DD"))
      return !1;
    for (var m = f.split("").map(function(U) {
      return parseInt(U, 10);
    }), D = 0, O = 1, Z = 0; Z < 10; Z++)
      D += m[Z] * O, O += 1, O === 10 && (O = 1);
    if (D % 11 === 10) {
      D = 0, O = 3;
      for (var T = 0; T < 10; T++)
        D += m[T] * O, O += 1, O === 10 && (O = 1);
      if (D % 11 === 10)
        return m[10] === 0;
    }
    return D % 11 === m[10];
  }
  function te(f) {
    var d = f.slice(4, 6), A = f.slice(6, 7);
    switch (A) {
      case "+":
        d = "18".concat(d);
        break;
      case "-":
        d = "19".concat(d);
        break;
      default:
        d = "20".concat(d);
        break;
    }
    var y = "".concat(d, "/").concat(f.slice(2, 4), "/").concat(f.slice(0, 2));
    if (!(0, a.default)(y, "YYYY/MM/DD"))
      return !1;
    var m = parseInt(f.slice(0, 6) + f.slice(7, 10), 10) % 31;
    if (m < 10)
      return m === parseInt(f.slice(10), 10);
    m -= 10;
    var D = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
    return D[m] === f.slice(10);
  }
  function q(f) {
    if (f.slice(2, 4) !== "00" || f.slice(4, 6) !== "00") {
      var d = "".concat(f.slice(0, 2), "/").concat(f.slice(2, 4), "/").concat(f.slice(4, 6));
      if (!(0, a.default)(d, "YY/MM/DD"))
        return !1;
    }
    var A = 97 - parseInt(f.slice(0, 9), 10) % 97, y = parseInt(f.slice(9, 11), 10);
    return !(A !== y && (A = 97 - parseInt("2".concat(f.slice(0, 9)), 10) % 97, A !== y));
  }
  function ee(f) {
    f = f.replace(/\s/g, "");
    var d = parseInt(f.slice(0, 10), 10) % 511, A = parseInt(f.slice(10, 13), 10);
    return d === A;
  }
  function He(f) {
    var d = "".concat(f.slice(0, 4), "/").concat(f.slice(4, 6), "/").concat(f.slice(6, 8));
    return !(0, a.default)(d, "YYYY/MM/DD") || !i.luhnCheck(f.slice(0, 12)) ? !1 : i.verhoeffCheck("".concat(f.slice(0, 11)).concat(f[12]));
  }
  function ke(f) {
    return i.iso7064Check(f);
  }
  function Ge(f) {
    for (var d = f.split("").map(function(m) {
      return parseInt(m, 10);
    }), A = 8, y = 1; y < 9; y++)
      A += d[y] * (y + 1);
    return A % 11 === d[9];
  }
  function xe(f) {
    for (var d = !1, A = !1, y = 0; y < 3; y++)
      if (!d && /[AEIOU]/.test(f[y]))
        d = !0;
      else if (!A && d && f[y] === "X")
        A = !0;
      else if (y > 0 && (d && !A && !/[AEIOU]/.test(f[y]) || A && !/X/.test(f[y])))
        return !1;
    return !0;
  }
  function Le(f) {
    var d = f.toUpperCase().split("");
    if (!xe(d.slice(0, 3)) || !xe(d.slice(3, 6)))
      return !1;
    for (var A = [6, 7, 9, 10, 12, 13, 14], y = {
      L: "0",
      M: "1",
      N: "2",
      P: "3",
      Q: "4",
      R: "5",
      S: "6",
      T: "7",
      U: "8",
      V: "9"
    }, m = 0, D = A; m < D.length; m++) {
      var O = D[m];
      d[O] in y && d.splice(O, 1, y[d[O]]);
    }
    var Z = {
      A: "01",
      B: "02",
      C: "03",
      D: "04",
      E: "05",
      H: "06",
      L: "07",
      M: "08",
      P: "09",
      R: "10",
      S: "11",
      T: "12"
    }, T = Z[d[8]], U = parseInt(d[9] + d[10], 10);
    U > 40 && (U -= 40), U < 10 && (U = "0".concat(U));
    var ue = "".concat(d[6]).concat(d[7], "/").concat(T, "/").concat(U);
    if (!(0, a.default)(ue, "YY/MM/DD"))
      return !1;
    for (var ne = 0, re = 1; re < d.length - 1; re += 2) {
      var Se = parseInt(d[re], 10);
      isNaN(Se) && (Se = d[re].charCodeAt(0) - 65), ne += Se;
    }
    for (var $e = {
      // Maps of characters at odd places
      A: 1,
      B: 0,
      C: 5,
      D: 7,
      E: 9,
      F: 13,
      G: 15,
      H: 17,
      I: 19,
      J: 21,
      K: 2,
      L: 4,
      M: 18,
      N: 20,
      O: 11,
      P: 3,
      Q: 6,
      R: 8,
      S: 12,
      T: 14,
      U: 16,
      V: 10,
      W: 22,
      X: 25,
      Y: 24,
      Z: 23,
      0: 1,
      1: 0
    }, ie = 0; ie < d.length - 1; ie += 2) {
      var oe = 0;
      if (d[ie] in $e)
        oe = $e[d[ie]];
      else {
        var Be = parseInt(d[ie], 10);
        oe = 2 * Be + 1, Be > 4 && (oe += 2);
      }
      ne += oe;
    }
    return String.fromCharCode(65 + ne % 26) === d[15];
  }
  function be(f) {
    f = f.replace(/\W/, "");
    var d = f.slice(0, 2);
    if (d !== "32") {
      var A = f.slice(2, 4);
      if (A !== "00") {
        var y = f.slice(4, 6);
        switch (f[6]) {
          case "0":
            y = "18".concat(y);
            break;
          case "1":
            y = "19".concat(y);
            break;
          default:
            y = "20".concat(y);
            break;
        }
        var m = "".concat(y, "/").concat(f.slice(2, 4), "/").concat(d);
        if (!(0, a.default)(m, "YYYY/MM/DD"))
          return !1;
      }
      for (var D = 1101, O = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2], Z = 0; Z < f.length - 1; Z++)
        D -= parseInt(f[Z], 10) * O[Z];
      return parseInt(f[10], 10) === D % 11;
    }
    return !0;
  }
  function Ke(f) {
    if (f.length !== 9) {
      for (var d = f.toUpperCase().split(""); d.length < 8; )
        d.unshift(0);
      switch (f[7]) {
        case "A":
        case "P":
          if (parseInt(d[6], 10) === 0)
            return !1;
          break;
        default: {
          var A = parseInt(d.join("").slice(0, 5), 10);
          if (A > 32e3)
            return !1;
          var y = parseInt(d.join("").slice(5, 7), 10);
          if (A === y)
            return !1;
        }
      }
    }
    return !0;
  }
  function We(f) {
    return i.reverseMultiplyAndSum(f.split("").slice(0, 8).map(function(d) {
      return parseInt(d, 10);
    }), 9) % 11 === parseInt(f[8], 10);
  }
  function qe(f) {
    if (f.length === 10) {
      for (var d = [6, 5, 7, 2, 3, 4, 5, 6, 7], A = 0, y = 0; y < d.length; y++)
        A += parseInt(f[y], 10) * d[y];
      return A %= 11, A === 10 ? !1 : A === parseInt(f[9], 10);
    }
    var m = f.slice(0, 2), D = parseInt(f.slice(2, 4), 10);
    D > 80 ? (m = "18".concat(m), D -= 80) : D > 60 ? (m = "22".concat(m), D -= 60) : D > 40 ? (m = "21".concat(m), D -= 40) : D > 20 ? (m = "20".concat(m), D -= 20) : m = "19".concat(m), D < 10 && (D = "0".concat(D));
    var O = "".concat(m, "/").concat(D, "/").concat(f.slice(4, 6));
    if (!(0, a.default)(O, "YYYY/MM/DD"))
      return !1;
    for (var Z = 0, T = 1, U = 0; U < f.length - 1; U++)
      Z += parseInt(f[U], 10) * T % 10, T += 2, T > 10 ? T = 1 : T === 5 && (T += 2);
    return Z = 10 - Z % 10, Z === parseInt(f[10], 10);
  }
  function Ye(f) {
    if (f.length === 11) {
      var d, A;
      if (d = 0, // Reject known invalid CPFs
      f === "11111111111" || f === "22222222222" || f === "33333333333" || f === "44444444444" || f === "55555555555" || f === "66666666666" || f === "77777777777" || f === "88888888888" || f === "99999999999" || f === "00000000000") return !1;
      for (var y = 1; y <= 9; y++) d += parseInt(f.substring(y - 1, y), 10) * (11 - y);
      if (A = d * 10 % 11, A === 10 && (A = 0), A !== parseInt(f.substring(9, 10), 10)) return !1;
      d = 0;
      for (var m = 1; m <= 10; m++) d += parseInt(f.substring(m - 1, m), 10) * (12 - m);
      return A = d * 10 % 11, A === 10 && (A = 0), A === parseInt(f.substring(10, 11), 10);
    }
    if (
      // Reject know invalid CNPJs
      f === "00000000000000" || f === "11111111111111" || f === "22222222222222" || f === "33333333333333" || f === "44444444444444" || f === "55555555555555" || f === "66666666666666" || f === "77777777777777" || f === "88888888888888" || f === "99999999999999"
    )
      return !1;
    for (var D = f.length - 2, O = f.substring(0, D), Z = f.substring(D), T = 0, U = D - 7, ue = D; ue >= 1; ue--)
      T += O.charAt(D - ue) * U, U -= 1, U < 2 && (U = 9);
    var ne = T % 11 < 2 ? 0 : 11 - T % 11;
    if (ne !== parseInt(Z.charAt(0), 10))
      return !1;
    D += 1, O = f.substring(0, D), T = 0, U = D - 7;
    for (var re = D; re >= 1; re--)
      T += O.charAt(D - re) * U, U -= 1, U < 2 && (U = 9);
    return ne = T % 11 < 2 ? 0 : 11 - T % 11, ne === parseInt(Z.charAt(1), 10);
  }
  function Ve(f) {
    var d = 11 - i.reverseMultiplyAndSum(f.split("").slice(0, 8).map(function(A) {
      return parseInt(A, 10);
    }), 9) % 11;
    return d > 9 ? parseInt(f[8], 10) === 0 : d === parseInt(f[8], 10);
  }
  function ze(f) {
    if (f.slice(0, 4) !== "9000") {
      var d = f.slice(1, 3);
      switch (f[0]) {
        case "1":
        case "2":
          d = "19".concat(d);
          break;
        case "3":
        case "4":
          d = "18".concat(d);
          break;
        case "5":
        case "6":
          d = "20".concat(d);
          break;
      }
      var A = "".concat(d, "/").concat(f.slice(3, 5), "/").concat(f.slice(5, 7));
      if (A.length === 8) {
        if (!(0, a.default)(A, "YY/MM/DD"))
          return !1;
      } else if (!(0, a.default)(A, "YYYY/MM/DD"))
        return !1;
      for (var y = f.split("").map(function(Z) {
        return parseInt(Z, 10);
      }), m = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], D = 0, O = 0; O < m.length; O++)
        D += y[O] * m[O];
      return D % 11 === 10 ? y[12] === 1 : y[12] === D % 11;
    }
    return !0;
  }
  function Je(f) {
    if (f.length === 9) {
      if (f = f.replace(/\W/, ""), f.slice(6) === "000")
        return !1;
      var d = parseInt(f.slice(0, 2), 10);
      if (d > 53)
        return !1;
      d < 10 ? d = "190".concat(d) : d = "19".concat(d);
      var A = parseInt(f.slice(2, 4), 10);
      A > 50 && (A -= 50), A < 10 && (A = "0".concat(A));
      var y = "".concat(d, "/").concat(A, "/").concat(f.slice(4, 6));
      if (!(0, a.default)(y, "YYYY/MM/DD"))
        return !1;
    }
    return !0;
  }
  function Pe(f) {
    var d = 11 - i.reverseMultiplyAndSum(f.split("").slice(0, 7).map(function(A) {
      return parseInt(A, 10);
    }), 8) % 11;
    return d === 10 ? parseInt(f[7], 10) === 0 : d === parseInt(f[7], 10);
  }
  function Xe(f) {
    var d = f.slice(0);
    f.length > 11 && (d = d.slice(2));
    var A = "", y = d.slice(2, 4), m = parseInt(d.slice(4, 6), 10);
    if (f.length > 11)
      A = f.slice(0, 4);
    else if (A = f.slice(0, 2), f.length === 11 && m < 60) {
      var D = (/* @__PURE__ */ new Date()).getFullYear().toString(), O = parseInt(D.slice(0, 2), 10);
      if (D = parseInt(D, 10), f[6] === "-")
        parseInt("".concat(O).concat(A), 10) > D ? A = "".concat(O - 1).concat(A) : A = "".concat(O).concat(A);
      else if (A = "".concat(O - 1).concat(A), D - parseInt(A, 10) < 100)
        return !1;
    }
    m > 60 && (m -= 60), m < 10 && (m = "0".concat(m));
    var Z = "".concat(A, "/").concat(y, "/").concat(m);
    if (Z.length === 8) {
      if (!(0, a.default)(Z, "YY/MM/DD"))
        return !1;
    } else if (!(0, a.default)(Z, "YYYY/MM/DD"))
      return !1;
    return i.luhnCheck(f.replace(/\W/, ""));
  }
  function Qe(f) {
    for (var d = f.split("").map(function(D) {
      return parseInt(D, 10);
    }), A = [-1, 5, 7, 9, 4, 6, 10, 5, 7], y = 0, m = 0; m < A.length; m++)
      y += d[m] * A[m];
    return y % 11 === 10 ? d[9] === 0 : d[9] === y % 11;
  }
  var Q = {
    "bg-BG": /^\d{10}$/,
    "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
    "de-AT": /^\d{9}$/,
    "de-DE": /^[1-9]\d{10}$/,
    "dk-DK": /^\d{6}-{0,1}\d{4}$/,
    "el-CY": /^[09]\d{7}[A-Z]$/,
    "el-GR": /^([0-4]|[7-9])\d{8}$/,
    "en-CA": /^\d{9}$/,
    "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
    "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
    "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
    "es-AR": /(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,
    "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
    "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
    "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
    "fr-BE": /^\d{11}$/,
    "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
    // Conforms both to official spec and provided example
    "fr-LU": /^\d{13}$/,
    "hr-HR": /^\d{11}$/,
    "hu-HU": /^8\d{9}$/,
    "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
    "lv-LV": /^\d{6}-{0,1}\d{5}$/,
    // Conforms both to DG TAXUD spec and original research
    "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
    "nl-NL": /^\d{9}$/,
    "pl-PL": /^\d{10,11}$/,
    "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
    "pt-PT": /^\d{9}$/,
    "ro-RO": /^\d{13}$/,
    "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
    "sl-SI": /^[1-9]\d{7}$/,
    "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,
    "uk-UA": /^\d{10}$/
  };
  Q["lb-LU"] = Q["fr-LU"], Q["lt-LT"] = Q["et-EE"], Q["nl-BE"] = Q["fr-BE"], Q["fr-CA"] = Q["en-CA"];
  var j = {
    "bg-BG": p,
    "cs-CZ": S,
    "de-AT": h,
    "de-DE": $,
    "dk-DK": M,
    "el-CY": x,
    "el-GR": P,
    "en-CA": _,
    "en-IE": L,
    "en-US": F,
    "es-AR": G,
    "es-ES": z,
    "et-EE": X,
    "fi-FI": te,
    "fr-BE": q,
    "fr-FR": ee,
    "fr-LU": He,
    "hr-HR": ke,
    "hu-HU": Ge,
    "it-IT": Le,
    "lv-LV": be,
    "mt-MT": Ke,
    "nl-NL": We,
    "pl-PL": qe,
    "pt-BR": Ye,
    "pt-PT": Ve,
    "ro-RO": ze,
    "sk-SK": Je,
    "sl-SI": Pe,
    "sv-SE": Xe,
    "uk-UA": Qe
  };
  j["lb-LU"] = j["fr-LU"], j["lt-LT"] = j["et-EE"], j["nl-BE"] = j["fr-BE"], j["fr-CA"] = j["en-CA"];
  var Oe = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g, fe = {
    "de-AT": Oe,
    "de-DE": /[\/\\]/g,
    "fr-BE": Oe
  };
  fe["nl-BE"] = fe["fr-BE"];
  function je(f) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
    (0, l.default)(f);
    var A = f.slice(0);
    if (d in Q)
      return d in fe && (A = A.replace(fe[d], "")), Q[d].test(A) ? d in j ? j[d](A) : !0 : !1;
    throw new Error("Invalid locale '".concat(d, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Mr, Mr.exports);
var Zu = Mr.exports, Ie = {};
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
Ie.default = Uu;
Ie.locales = void 0;
var Fu = Tu(R);
function Tu(t) {
  return t && t.__esModule ? t : { default: t };
}
var k = {
  "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
  "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
  "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
  "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
  "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
  "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
  "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
  "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
  "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
  "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
  "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
  "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
  "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
  "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
  "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
  "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
  "ar-TN": /^(\+?216)?[2459]\d{7}$/,
  "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
  "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
  "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
  "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
  "ca-AD": /^(\+376)?[346]\d{5}$/,
  "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
  "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
  "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
  "de-LU": /^(\+352)?((6\d1)\d{6})$/,
  "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
  "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
  "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
  "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
  "en-AU": /^(\+?61|0)4\d{8}$/,
  "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
  "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
  "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
  "en-GB": /^(\+?44|0)7\d{9}$/,
  "en-GG": /^(\+?44|0)1481\d{6}$/,
  "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
  "en-GY": /^(\+592|0)6\d{6}$/,
  "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
  "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
  "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
  "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
  "en-JM": /^(\+?876)?\d{7}$/,
  "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
  "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
  "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
  "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
  "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
  "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
  "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
  "en-MU": /^(\+?230|0)?\d{8}$/,
  "en-MW": /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
  "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
  "en-NG": /^(\+?234|0)?[789]\d{9}$/,
  "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
  "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
  "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
  "en-PH": /^(09|\+639)\d{9}$/,
  "en-RW": /^(\+?250|0)?[7]\d{8}$/,
  "en-SG": /^(\+65)?[3689]\d{7}$/,
  "en-SL": /^(\+?232|0)\d{8}$/,
  "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
  "en-UG": /^(\+?256|0)?[7]\d{8}$/,
  "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  "en-ZA": /^(\+?27|0)\d{9}$/,
  "en-ZM": /^(\+?26)?09[567]\d{7}$/,
  "en-ZW": /^(\+263)[0-9]{9}$/,
  "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
  "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
  "es-BO": /^(\+?591)?(6|7)\d{7}$/,
  "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
  "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
  "es-CR": /^(\+506)?[2-8]\d{7}$/,
  "es-CU": /^(\+53|0053)?5\d{7}$/,
  "es-DO": /^(\+?1)?8[024]9\d{7}$/,
  "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
  "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
  "es-ES": /^(\+?34)?[6|7]\d{8}$/,
  "es-PE": /^(\+?51)?9\d{8}$/,
  "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
  "es-NI": /^(\+?505)\d{7,8}$/,
  "es-PA": /^(\+?507)\d{7,8}$/,
  "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
  "es-SV": /^(\+?503)?[67]\d{7}$/,
  "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
  "es-VE": /^(\+?58)?(2|4)\d{9}$/,
  "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
  "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
  "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "fr-BF": /^(\+226|0)[67]\d{7}$/,
  "fr-BJ": /^(\+229)\d{8}$/,
  "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
  "fr-CM": /^(\+?237)6[0-9]{8}$/,
  "fr-FR": /^(\+?33|0)[67]\d{8}$/,
  "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
  "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
  "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
  "fr-PF": /^(\+?689)?8[789]\d{6}$/,
  "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
  "fr-WF": /^(\+681)?\d{6}$/,
  "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
  "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  "ir-IR": /^(\+98|0)?9\d{9}$/,
  "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
  "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
  "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
  "kk-KZ": /^(\+?7|8)?7\d{9}$/,
  "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
  "lt-LT": /^(\+370|8)\d{8}$/,
  "lv-LV": /^(\+?371)2\d{7}$/,
  "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
  "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
  "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
  "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
  "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
  "nb-NO": /^(\+?47)?[49]\d{7}$/,
  "ne-NP": /^(\+?977)?9[78]\d{8}$/,
  "nl-BE": /^(\+?32|0)4\d{8}$/,
  "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
  "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
  "nn-NO": /^(\+?47)?[49]\d{7}$/,
  "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
  "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
  "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
  "pt-AO": /^(\+244)\d{9}$/,
  "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
  "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
  "ru-RU": /^(\+?7|8)?9\d{9}$/,
  "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
  "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
  "sq-AL": /^(\+355|0)6[789]\d{6}$/,
  "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
  "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
  "th-TH": /^(\+66|66|0)\d{9}$/,
  "tr-TR": /^(\+?90|0)?5\d{9}$/,
  "tk-TM": /^(\+993|993|8)\d{8}$/,
  "uk-UA": /^(\+?38|8)?0\d{9}$/,
  "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
  "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
  "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
  "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
  "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
  "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
  "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
  "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
};
k["en-CA"] = k["en-US"];
k["fr-CA"] = k["en-CA"];
k["fr-BE"] = k["nl-BE"];
k["zh-HK"] = k["en-HK"];
k["zh-MO"] = k["en-MO"];
k["ga-IE"] = k["en-IE"];
k["fr-CH"] = k["de-CH"];
k["it-CH"] = k["fr-CH"];
function Uu(t, e, s) {
  if ((0, Fu.default)(t), s && s.strictMode && !t.startsWith("+"))
    return !1;
  if (Array.isArray(e))
    return e.some(function(a) {
      if (k.hasOwnProperty(a)) {
        var r = k[a];
        if (r.test(t))
          return !0;
      }
      return !1;
    });
  if (e in k)
    return k[e].test(t);
  if (!e || e === "any") {
    for (var l in k)
      if (k.hasOwnProperty(l)) {
        var i = k[l];
        if (i.test(t))
          return !0;
      }
    return !1;
  }
  throw new Error("Invalid locale '".concat(e, "'"));
}
Ie.locales = Object.keys(k);
var yr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(0x)[0-9a-f]{40}$/i;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(yr, yr.exports);
var wu = yr.exports, Ir = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var s = i(W), l = i(R);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    var o = "\\d{".concat(n.digits_after_decimal[0], "}");
    n.digits_after_decimal.forEach(function(h, $) {
      $ !== 0 && (o = "".concat(o, "|\\d{").concat(h, "}"));
    });
    var c = "(".concat(n.symbol.replace(/\W/, function(h) {
      return "\\".concat(h);
    }), ")").concat(n.require_symbol ? "" : "?"), v = "-?", g = "[1-9]\\d*", E = "[1-9]\\d{0,2}(\\".concat(n.thousands_separator, "\\d{3})*"), C = ["0", g, E], p = "(".concat(C.join("|"), ")?"), _ = "(\\".concat(n.decimal_separator, "(").concat(o, "))").concat(n.require_decimal ? "" : "?"), S = p + (n.allow_decimal || n.require_decimal ? _ : "");
    return n.allow_negatives && !n.parens_for_negatives && (n.negative_sign_after_digits ? S += v : n.negative_sign_before_digits && (S = v + S)), n.allow_negative_sign_placeholder ? S = "( (?!\\-))?".concat(S) : n.allow_space_after_symbol ? S = " ?".concat(S) : n.allow_space_after_digits && (S += "( (?!$))?"), n.symbol_after_digits ? S += c : S = c + S, n.allow_negatives && (n.parens_for_negatives ? S = "(\\(".concat(S, "\\)|").concat(S, ")") : n.negative_sign_before_digits || n.negative_sign_after_digits || (S = v + S)), new RegExp("^(?!-? )(?=.*\\d)".concat(S, "$"));
  }
  var r = {
    symbol: "$",
    require_symbol: !1,
    allow_space_after_symbol: !1,
    symbol_after_digits: !1,
    allow_negatives: !0,
    parens_for_negatives: !1,
    negative_sign_before_digits: !1,
    negative_sign_after_digits: !1,
    allow_negative_sign_placeholder: !1,
    thousands_separator: ",",
    decimal_separator: ".",
    allow_decimal: !0,
    require_decimal: !1,
    digits_after_decimal: [2],
    allow_space_after_digits: !1
  };
  function u(n, o) {
    return (0, l.default)(n), o = (0, s.default)(o, r), a(o).test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ir, Ir.exports);
var Hu = Ir.exports, Rr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var s = l(R);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^(bc1)[a-z0-9]{25,39}$/, a = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
  function r(u) {
    return (0, s.default)(u), i.test(u) || a.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Rr, Rr.exports);
var ku = Rr.exports, Re = {};
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.isFreightContainerID = void 0;
Re.isISO6346 = Ma;
var Gu = bu(R);
function bu(t) {
  return t && t.__esModule ? t : { default: t };
}
var Ku = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/, Wu = /^[0-9]$/;
function Ma(t) {
  if ((0, Gu.default)(t), t = t.toUpperCase(), !Ku.test(t)) return !1;
  if (t.length === 11) {
    for (var e = 0, s = 0; s < t.length - 1; s++)
      if (Wu.test(t[s]))
        e += t[s] * Math.pow(2, s);
      else {
        var l = void 0, i = t.charCodeAt(s) - 55;
        i < 11 ? l = i : i >= 11 && i <= 20 ? l = 12 + i % 11 : i >= 21 && i <= 30 ? l = 23 + i % 21 : l = 34 + i % 31, e += l * Math.pow(2, s);
      }
    var a = e % 11;
    return Number(t[t.length - 1]) === a;
  }
  return !0;
}
Re.isFreightContainerID = Ma;
var Er = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
  function a(r) {
    return (0, s.default)(r), i.has(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Er, Er.exports);
var qu = Er.exports, Dr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var s = l(R);
  function l(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, a = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, r = function(o) {
    var c = o.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
    if (c) {
      var v = Number(c[1]), g = Number(c[2]);
      return v % 4 === 0 && v % 100 !== 0 || v % 400 === 0 ? g <= 366 : g <= 365;
    }
    var E = o.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number), C = E[1], p = E[2], _ = E[3], S = p && "0".concat(p).slice(-2), h = _ && "0".concat(_).slice(-2), $ = new Date("".concat(C, "-").concat(S || "01", "-").concat(h || "01"));
    return p && _ ? $.getUTCFullYear() === C && $.getUTCMonth() + 1 === p && $.getUTCDate() === _ : !0;
  };
  function u(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, s.default)(n);
    var c = o.strictSeparator ? a.test(n) : i.test(n);
    return c && o.strict ? r(n) : c;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Dr, Dr.exports);
var Yu = Dr.exports, Cr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = S;
  var s = l(R);
  function l(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var i = /[0-9]{4}/, a = /(0[1-9]|1[0-2])/, r = /([12]\d|0[1-9]|3[01])/, u = /([01][0-9]|2[0-3])/, n = /[0-5][0-9]/, o = /([0-5][0-9]|60)/, c = /(\.[0-9]+)?/, v = new RegExp("[-+]".concat(u.source, ":").concat(n.source)), g = new RegExp("([zZ]|".concat(v.source, ")")), E = new RegExp("".concat(u.source, ":").concat(n.source, ":").concat(o.source).concat(c.source)), C = new RegExp("".concat(i.source, "-").concat(a.source, "-").concat(r.source)), p = new RegExp("".concat(E.source).concat(g.source)), _ = new RegExp("^".concat(C.source, "[ tT]").concat(p.source, "$"));
  function S(h) {
    return (0, s.default)(h), _.test(h);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Cr, Cr.exports);
var Vu = Cr.exports, xr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
  function a(r) {
    return (0, s.default)(r), i.has(r.toUpperCase());
  }
  t.exports = e.default, t.exports.default = e.default;
})(xr, xr.exports);
var zu = xr.exports, Ee = {};
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
Ee.CurrencyCodes = void 0;
Ee.default = Qu;
var Ju = Xu(R);
function Xu(t) {
  return t && t.__esModule ? t : { default: t };
}
var ya = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
function Qu(t) {
  return (0, Ju.default)(t), ya.has(t.toUpperCase());
}
Ee.CurrencyCodes = ya;
var Lr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var s = i(R), l = i(W);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = /^[A-Z2-7]+=*$/, r = /^[A-HJKMNP-TV-Z0-9]+$/, u = {
    crockford: !1
  };
  function n(o, c) {
    if ((0, s.default)(o), c = (0, l.default)(c, u), c.crockford)
      return r.test(o);
    var v = o.length;
    return !!(v % 8 === 0 && a.test(o));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Lr, Lr.exports);
var ju = Lr.exports, Pr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[A-HJ-NP-Za-km-z1-9]*$/;
  function a(r) {
    return (0, s.default)(r), !!i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Pr, Pr.exports);
var ei = Pr.exports, Or = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var s = l(R);
  function l(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^[a-z]+\/[a-z0-9\-\+\._]+$/i, a = /^[a-z\-]+=[a-z0-9\-]+$/i, r = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
  function u(n) {
    (0, s.default)(n);
    var o = n.split(",");
    if (o.length < 2)
      return !1;
    var c = o.shift().trim().split(";"), v = c.shift();
    if (v.slice(0, 5) !== "data:")
      return !1;
    var g = v.slice(5);
    if (g !== "" && !i.test(g))
      return !1;
    for (var E = 0; E < c.length; E++)
      if (!(E === c.length - 1 && c[E].toLowerCase() === "base64") && !a.test(c[E]))
        return !1;
    for (var C = 0; C < o.length; C++)
      if (!r.test(o[C]))
        return !1;
    return !0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Or, Or.exports);
var ti = Or.exports, Br = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
  function a(r) {
    return (0, s.default)(r), r.indexOf("magnet:?") !== 0 ? !1 : i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Br, Br.exports);
var ri = Br.exports, Nr = { exports: {} }, Zr = { exports: {} }, Fr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    if ((0, s.default)(a), r) {
      var u = new RegExp("[".concat(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
      return a.replace(u, "");
    }
    for (var n = a.length - 1; /\s/.test(a.charAt(n)); )
      n -= 1;
    return a.slice(0, n + 1);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Fr, Fr.exports);
var Ia = Fr.exports, Tr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    (0, s.default)(a);
    var u = r ? new RegExp("^[".concat(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
    return a.replace(u, "");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Tr, Tr.exports);
var Ra = Tr.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = i(Ia), l = i(Ra);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, u) {
    return (0, s.default)((0, l.default)(r, u), u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Zr, Zr.exports);
var Ea = Zr.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = C;
  var s = a(Ea), l = a(Aa), i = a(R);
  function a(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function r(p, _) {
    return o(p) || n(p, _) || v(p, _) || u();
  }
  function u() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function n(p, _) {
    var S = p == null ? null : typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (S != null) {
      var h, $, M, x, P = [], L = !0, B = !1;
      try {
        if (M = (S = S.call(p)).next, _ !== 0) for (; !(L = (h = M.call(S)).done) && (P.push(h.value), P.length !== _); L = !0) ;
      } catch (N) {
        B = !0, $ = N;
      } finally {
        try {
          if (!L && S.return != null && (x = S.return(), Object(x) !== x)) return;
        } finally {
          if (B) throw $;
        }
      }
      return P;
    }
  }
  function o(p) {
    if (Array.isArray(p)) return p;
  }
  function c(p, _) {
    var S = typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (!S) {
      if (Array.isArray(p) || (S = v(p)) || _) {
        S && (p = S);
        var h = 0, $ = function() {
        };
        return { s: $, n: function() {
          return h >= p.length ? { done: !0 } : { done: !1, value: p[h++] };
        }, e: function(B) {
          throw B;
        }, f: $ };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var M = !0, x = !1, P;
    return { s: function() {
      S = S.call(p);
    }, n: function() {
      var B = S.next();
      return M = B.done, B;
    }, e: function(B) {
      x = !0, P = B;
    }, f: function() {
      try {
        !M && S.return != null && S.return();
      } finally {
        if (x) throw P;
      }
    } };
  }
  function v(p, _) {
    if (p) {
      if (typeof p == "string") return g(p, _);
      var S = Object.prototype.toString.call(p).slice(8, -1);
      if (S === "Object" && p.constructor && (S = p.constructor.name), S === "Map" || S === "Set") return Array.from(p);
      if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)) return g(p, _);
    }
  }
  function g(p, _) {
    (_ == null || _ > p.length) && (_ = p.length);
    for (var S = 0, h = new Array(_); S < _; S++) h[S] = p[S];
    return h;
  }
  function E(p) {
    var _ = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), S = {
      cc: "",
      bcc: ""
    }, h = !1, $ = p.split("&");
    if ($.length > 4)
      return !1;
    var M = c($), x;
    try {
      for (M.s(); !(x = M.n()).done; ) {
        var P = x.value, L = P.split("="), B = r(L, 2), N = B[0], F = B[1];
        if (N && !_.has(N)) {
          h = !0;
          break;
        }
        F && (N === "cc" || N === "bcc") && (S[N] = F), N && _.delete(N);
      }
    } catch (G) {
      M.e(G);
    } finally {
      M.f();
    }
    return h ? !1 : S;
  }
  function C(p, _) {
    if ((0, i.default)(p), p.indexOf("mailto:") !== 0)
      return !1;
    var S = p.replace("mailto:", "").split("?"), h = r(S, 2), $ = h[0], M = h[1], x = M === void 0 ? "" : M;
    if (!$ && !x)
      return !0;
    var P = E(x);
    return P ? "".concat($, ",").concat(P.cc, ",").concat(P.bcc).split(",").every(function(L) {
      return L = (0, s.default)(L, " "), L ? (0, l.default)(L, _) : !0;
    }) : !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Nr, Nr.exports);
var ai = Nr.exports, Ur = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var s = l(R);
  function l(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i, a = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i, r = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
  function u(n) {
    return (0, s.default)(n), i.test(n) || a.test(n) || r.test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ur, Ur.exports);
var ni = Ur.exports, wr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = c;
  var s = i(R), l = i(W);
  function i(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var a = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/, r = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/, u = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i, n = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i, o = {
    checkDMS: !1
  };
  function c(v, g) {
    if ((0, s.default)(v), g = (0, l.default)(g, o), !v.includes(",")) return !1;
    var E = v.split(",");
    return E[0].startsWith("(") && !E[1].endsWith(")") || E[1].endsWith(")") && !E[0].startsWith("(") ? !1 : g.checkDMS ? u.test(E[0]) && n.test(E[1]) : a.test(E[0]) && r.test(E[1]);
  }
  t.exports = e.default, t.exports.default = e.default;
})(wr, wr.exports);
var ui = wr.exports, De = {};
Object.defineProperty(De, "__esModule", {
  value: !0
});
De.default = si;
De.locales = void 0;
var ii = li(R);
function li(t) {
  return t && t.__esModule ? t : { default: t };
}
var fa = /^\d{3}$/, J = /^\d{4}$/, b = /^\d{5}$/, st = /^\d{6}$/, pe = {
  AD: /^AD\d{3}$/,
  AT: J,
  AU: J,
  AZ: /^AZ\d{4}$/,
  BA: /^([7-8]\d{4}$)/,
  BE: J,
  BG: J,
  BR: /^\d{5}-\d{3}$/,
  BY: /^2[1-4]\d{4}$/,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: J,
  CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: b,
  DK: J,
  DO: b,
  DZ: b,
  EE: b,
  ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
  FI: b,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HT: /^HT\d{4}$/,
  HU: J,
  ID: b,
  IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
  IL: /^(\d{5}|\d{7})$/,
  IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
  IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
  IS: fa,
  IT: b,
  JP: /^\d{3}\-\d{4}$/,
  KE: b,
  KR: /^(\d{5}|\d{6})$/,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: J,
  LV: /^LV\-\d{4}$/,
  LK: b,
  MG: fa,
  MX: b,
  MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
  MY: b,
  NL: /^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,
  NO: J,
  NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
  NZ: J,
  PL: /^\d{2}\-\d{3}$/,
  PR: /^00[679]\d{2}([ -]\d{4})?$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: st,
  RU: st,
  SA: b,
  SE: /^[1-9]\d{2}\s?\d{2}$/,
  SG: st,
  SI: J,
  SK: /^\d{3}\s?\d{2}$/,
  TH: b,
  TN: J,
  TW: /^\d{3}(\d{2})?$/,
  UA: b,
  US: /^\d{5}(-\d{4})?$/,
  ZA: J,
  ZM: b
};
De.locales = Object.keys(pe);
function si(t, e) {
  if ((0, ii.default)(t), e in pe)
    return pe[e].test(t);
  if (e === "any") {
    for (var s in pe)
      if (pe.hasOwnProperty(s)) {
        var l = pe[s];
        if (l.test(t))
          return !0;
      }
    return !1;
  }
  throw new Error("Invalid locale '".concat(e, "'"));
}
var Hr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, s.default)(a), a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Hr, Hr.exports);
var fi = Hr.exports, kr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, s.default)(a), a.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
  }
  t.exports = e.default, t.exports.default = e.default;
})(kr, kr.exports);
var oi = kr.exports, Gr = { exports: {} }, br = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, s.default)(a), a.replace(new RegExp("[".concat(r, "]+"), "g"), "");
  }
  t.exports = e.default, t.exports.default = e.default;
})(br, br.exports);
var Da = br.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = i(R), l = i(Da);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, u) {
    (0, s.default)(r);
    var n = u ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
    return (0, l.default)(r, n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Gr, Gr.exports);
var di = Gr.exports, Kr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, s.default)(a), a.replace(new RegExp("[^".concat(r, "]+"), "g"), "");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Kr, Kr.exports);
var ci = Kr.exports, Wr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var s = l(R);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    (0, s.default)(a);
    for (var u = a.length - 1; u >= 0; u--)
      if (r.indexOf(a[u]) === -1)
        return !1;
    return !0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Wr, Wr.exports);
var vi = Wr.exports, qr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = c;
  var s = l(W);
  function l(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var i = {
    // The following options apply to all email addresses
    // Lowercases the local part of the email address.
    // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
    // The domain is always lowercased, as per RFC 1035
    all_lowercase: !0,
    // The following conversions are specific to GMail
    // Lowercases the local part of the GMail address (known to be case-insensitive)
    gmail_lowercase: !0,
    // Removes dots from the local part of the email address, as that's ignored by GMail
    gmail_remove_dots: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    gmail_remove_subaddress: !0,
    // Conversts the googlemail.com domain to gmail.com
    gmail_convert_googlemaildotcom: !0,
    // The following conversions are specific to Outlook.com / Windows Live / Hotmail
    // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
    outlookdotcom_lowercase: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    outlookdotcom_remove_subaddress: !0,
    // The following conversions are specific to Yahoo
    // Lowercases the local part of the Yahoo address (known to be case-insensitive)
    yahoo_lowercase: !0,
    // Removes the subaddress (e.g. "-foo") from the email address
    yahoo_remove_subaddress: !0,
    // The following conversions are specific to Yandex
    // Lowercases the local part of the Yandex address (known to be case-insensitive)
    yandex_lowercase: !0,
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: !0
  }, a = ["icloud.com", "me.com"], r = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"], u = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"], n = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
  function o(v) {
    return v.length > 1 ? v : "";
  }
  function c(v, g) {
    g = (0, s.default)(g, i);
    var E = v.split("@"), C = E.pop(), p = E.join("@"), _ = [p, C];
    if (_[1] = _[1].toLowerCase(), _[1] === "gmail.com" || _[1] === "googlemail.com") {
      if (g.gmail_remove_subaddress && (_[0] = _[0].split("+")[0]), g.gmail_remove_dots && (_[0] = _[0].replace(/\.+/g, o)), !_[0].length)
        return !1;
      (g.all_lowercase || g.gmail_lowercase) && (_[0] = _[0].toLowerCase()), _[1] = g.gmail_convert_googlemaildotcom ? "gmail.com" : _[1];
    } else if (a.indexOf(_[1]) >= 0) {
      if (g.icloud_remove_subaddress && (_[0] = _[0].split("+")[0]), !_[0].length)
        return !1;
      (g.all_lowercase || g.icloud_lowercase) && (_[0] = _[0].toLowerCase());
    } else if (r.indexOf(_[1]) >= 0) {
      if (g.outlookdotcom_remove_subaddress && (_[0] = _[0].split("+")[0]), !_[0].length)
        return !1;
      (g.all_lowercase || g.outlookdotcom_lowercase) && (_[0] = _[0].toLowerCase());
    } else if (u.indexOf(_[1]) >= 0) {
      if (g.yahoo_remove_subaddress) {
        var S = _[0].split("-");
        _[0] = S.length > 1 ? S.slice(0, -1).join("-") : S[0];
      }
      if (!_[0].length)
        return !1;
      (g.all_lowercase || g.yahoo_lowercase) && (_[0] = _[0].toLowerCase());
    } else n.indexOf(_[1]) >= 0 ? ((g.all_lowercase || g.yandex_lowercase) && (_[0] = _[0].toLowerCase()), _[1] = "yandex.ru") : g.all_lowercase && (_[0] = _[0].toLowerCase());
    return _.join("@");
  }
  t.exports = e.default, t.exports.default = e.default;
})(qr, qr.exports);
var pi = qr.exports, Yr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
  function a(r) {
    return (0, s.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Yr, Yr.exports);
var _i = Yr.exports, Vr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var s = l(R);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    "cs-CZ": function(u) {
      return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(u);
    },
    "de-DE": function(u) {
      return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(u);
    },
    "de-LI": function(u) {
      return /^FL[- ]?\d{1,5}[UZ]?$/.test(u);
    },
    "en-IN": function(u) {
      return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(u);
    },
    "es-AR": function(u) {
      return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(u);
    },
    "fi-FI": function(u) {
      return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(u);
    },
    "hu-HU": function(u) {
      return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(u);
    },
    "pt-BR": function(u) {
      return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(u);
    },
    "pt-PT": function(u) {
      return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(u);
    },
    "sq-AL": function(u) {
      return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(u);
    },
    "sv-SE": function(u) {
      return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(u.trim());
    },
    "en-PK": function(u) {
      return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(u.trim());
    }
  };
  function a(r, u) {
    if ((0, s.default)(r), u in i)
      return i[u](r);
    if (u === "any") {
      for (var n in i) {
        var o = i[n];
        if (o(r))
          return !0;
      }
      return !1;
    }
    throw new Error("Invalid locale '".concat(u, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Vr, Vr.exports);
var Ai = Vr.exports, zr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = E;
  var s = i(W), l = i(R);
  function i(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var a = /^[A-Z]$/, r = /^[a-z]$/, u = /^[0-9]$/, n = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/, o = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: !1,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
  };
  function c(C) {
    var p = {};
    return Array.from(C).forEach(function(_) {
      var S = p[_];
      S ? p[_] += 1 : p[_] = 1;
    }), p;
  }
  function v(C) {
    var p = c(C), _ = {
      length: C.length,
      uniqueChars: Object.keys(p).length,
      uppercaseCount: 0,
      lowercaseCount: 0,
      numberCount: 0,
      symbolCount: 0
    };
    return Object.keys(p).forEach(function(S) {
      a.test(S) ? _.uppercaseCount += p[S] : r.test(S) ? _.lowercaseCount += p[S] : u.test(S) ? _.numberCount += p[S] : n.test(S) && (_.symbolCount += p[S]);
    }), _;
  }
  function g(C, p) {
    var _ = 0;
    return _ += C.uniqueChars * p.pointsPerUnique, _ += (C.length - C.uniqueChars) * p.pointsPerRepeat, C.lowercaseCount > 0 && (_ += p.pointsForContainingLower), C.uppercaseCount > 0 && (_ += p.pointsForContainingUpper), C.numberCount > 0 && (_ += p.pointsForContainingNumber), C.symbolCount > 0 && (_ += p.pointsForContainingSymbol), _;
  }
  function E(C) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    (0, l.default)(C);
    var _ = v(C);
    return p = (0, s.default)(p || {}, o), p.returnScore ? g(_, p) : _.length >= p.minLength && _.lowercaseCount >= p.minLowercase && _.uppercaseCount >= p.minUppercase && _.numberCount >= p.minNumbers && _.symbolCount >= p.minSymbols;
  }
  t.exports = e.default, t.exports.default = e.default;
})(zr, zr.exports);
var gi = zr.exports, Ce = {};
function Jr(t) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Jr(t);
}
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.default = Ii;
Ce.vatMatchers = void 0;
var oa = $i(R), hi = Si(se);
function Ca(t) {
  if (typeof WeakMap != "function") return null;
  var e = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
  return (Ca = function(i) {
    return i ? s : e;
  })(t);
}
function Si(t, e) {
  if (t && t.__esModule) return t;
  if (t === null || Jr(t) != "object" && typeof t != "function") return { default: t };
  var s = Ca(e);
  if (s && s.has(t)) return s.get(t);
  var l = { __proto__: null }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in t) if (a !== "default" && {}.hasOwnProperty.call(t, a)) {
    var r = i ? Object.getOwnPropertyDescriptor(t, a) : null;
    r && (r.get || r.set) ? Object.defineProperty(l, a, r) : l[a] = t[a];
  }
  return l.default = t, s && s.set(t, l), l;
}
function $i(t) {
  return t && t.__esModule ? t : { default: t };
}
var mi = function(e) {
  var s = e.match(/^(AU)?(\d{11})$/);
  if (!s)
    return !1;
  var l = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  e = e.replace(/^AU/, "");
  for (var i = (parseInt(e.slice(0, 1), 10) - 1).toString() + e.slice(1), a = 0, r = 0; r < 11; r++)
    a += l[r] * i.charAt(r);
  return a !== 0 && a % 89 === 0;
}, Mi = function(e) {
  var s = function(i) {
    var a = i.pop(), r = [5, 4, 3, 2, 7, 6, 5, 4], u = (11 - i.reduce(function(n, o, c) {
      return n + o * r[c];
    }, 0) % 11) % 11;
    return a === u;
  };
  return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(e) && s(e.match(/\d/g).map(function(l) {
    return +l;
  }));
}, yi = function(e) {
  var s = e.match(/^(PT)?(\d{9})$/);
  if (!s)
    return !1;
  var l = s[2], i = 11 - hi.reverseMultiplyAndSum(l.split("").slice(0, 8).map(function(a) {
    return parseInt(a, 10);
  }), 9) % 11;
  return i > 9 ? parseInt(l[8], 10) === 0 : i === parseInt(l[8], 10);
}, da = Ce.vatMatchers = {
  /**
   * European Union VAT identification numbers
   */
  AT: function(e) {
    return /^(AT)?U\d{8}$/.test(e);
  },
  BE: function(e) {
    return /^(BE)?\d{10}$/.test(e);
  },
  BG: function(e) {
    return /^(BG)?\d{9,10}$/.test(e);
  },
  HR: function(e) {
    return /^(HR)?\d{11}$/.test(e);
  },
  CY: function(e) {
    return /^(CY)?\w{9}$/.test(e);
  },
  CZ: function(e) {
    return /^(CZ)?\d{8,10}$/.test(e);
  },
  DK: function(e) {
    return /^(DK)?\d{8}$/.test(e);
  },
  EE: function(e) {
    return /^(EE)?\d{9}$/.test(e);
  },
  FI: function(e) {
    return /^(FI)?\d{8}$/.test(e);
  },
  FR: function(e) {
    return /^(FR)?\w{2}\d{9}$/.test(e);
  },
  DE: function(e) {
    return /^(DE)?\d{9}$/.test(e);
  },
  EL: function(e) {
    return /^(EL)?\d{9}$/.test(e);
  },
  HU: function(e) {
    return /^(HU)?\d{8}$/.test(e);
  },
  IE: function(e) {
    return /^(IE)?\d{7}\w{1}(W)?$/.test(e);
  },
  IT: function(e) {
    return /^(IT)?\d{11}$/.test(e);
  },
  LV: function(e) {
    return /^(LV)?\d{11}$/.test(e);
  },
  LT: function(e) {
    return /^(LT)?\d{9,12}$/.test(e);
  },
  LU: function(e) {
    return /^(LU)?\d{8}$/.test(e);
  },
  MT: function(e) {
    return /^(MT)?\d{8}$/.test(e);
  },
  NL: function(e) {
    return /^(NL)?\d{9}B\d{2}$/.test(e);
  },
  PL: function(e) {
    return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(e);
  },
  PT: yi,
  RO: function(e) {
    return /^(RO)?\d{2,10}$/.test(e);
  },
  SK: function(e) {
    return /^(SK)?\d{10}$/.test(e);
  },
  SI: function(e) {
    return /^(SI)?\d{8}$/.test(e);
  },
  ES: function(e) {
    return /^(ES)?\w\d{7}[A-Z]$/.test(e);
  },
  SE: function(e) {
    return /^(SE)?\d{12}$/.test(e);
  },
  /**
   * VAT numbers of non-EU countries
   */
  AL: function(e) {
    return /^(AL)?\w{9}[A-Z]$/.test(e);
  },
  MK: function(e) {
    return /^(MK)?\d{13}$/.test(e);
  },
  AU: mi,
  BY: function(e) {
    return /^(УНП )?\d{9}$/.test(e);
  },
  CA: function(e) {
    return /^(CA)?\d{9}$/.test(e);
  },
  IS: function(e) {
    return /^(IS)?\d{5,6}$/.test(e);
  },
  IN: function(e) {
    return /^(IN)?\d{15}$/.test(e);
  },
  ID: function(e) {
    return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(e);
  },
  IL: function(e) {
    return /^(IL)?\d{9}$/.test(e);
  },
  KZ: function(e) {
    return /^(KZ)?\d{12}$/.test(e);
  },
  NZ: function(e) {
    return /^(NZ)?\d{9}$/.test(e);
  },
  NG: function(e) {
    return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(e);
  },
  NO: function(e) {
    return /^(NO)?\d{9}MVA$/.test(e);
  },
  PH: function(e) {
    return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(e);
  },
  RU: function(e) {
    return /^(RU)?(\d{10}|\d{12})$/.test(e);
  },
  SM: function(e) {
    return /^(SM)?\d{5}$/.test(e);
  },
  SA: function(e) {
    return /^(SA)?\d{15}$/.test(e);
  },
  RS: function(e) {
    return /^(RS)?\d{9}$/.test(e);
  },
  CH: Mi,
  TR: function(e) {
    return /^(TR)?\d{10}$/.test(e);
  },
  UA: function(e) {
    return /^(UA)?\d{12}$/.test(e);
  },
  GB: function(e) {
    return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(e);
  },
  UZ: function(e) {
    return /^(UZ)?\d{9}$/.test(e);
  },
  /**
   * VAT numbers of Latin American countries
   */
  AR: function(e) {
    return /^(AR)?\d{11}$/.test(e);
  },
  BO: function(e) {
    return /^(BO)?\d{7}$/.test(e);
  },
  BR: function(e) {
    return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(e);
  },
  CL: function(e) {
    return /^(CL)?\d{8}-\d{1}$/.test(e);
  },
  CO: function(e) {
    return /^(CO)?\d{10}$/.test(e);
  },
  CR: function(e) {
    return /^(CR)?\d{9,12}$/.test(e);
  },
  EC: function(e) {
    return /^(EC)?\d{13}$/.test(e);
  },
  SV: function(e) {
    return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(e);
  },
  GT: function(e) {
    return /^(GT)?\d{7}-\d{1}$/.test(e);
  },
  HN: function(e) {
    return /^(HN)?$/.test(e);
  },
  MX: function(e) {
    return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(e);
  },
  NI: function(e) {
    return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(e);
  },
  PA: function(e) {
    return /^(PA)?$/.test(e);
  },
  PY: function(e) {
    return /^(PY)?\d{6,8}-\d{1}$/.test(e);
  },
  PE: function(e) {
    return /^(PE)?\d{11}$/.test(e);
  },
  DO: function(e) {
    return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(e);
  },
  UY: function(e) {
    return /^(UY)?\d{12}$/.test(e);
  },
  VE: function(e) {
    return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(e);
  }
};
function Ii(t, e) {
  if ((0, oa.default)(t), (0, oa.default)(e), e in da)
    return da[e](t);
  throw new Error("Invalid country code: '".concat(e, "'"));
}
(function(t, e) {
  function s(w) {
    "@babel/helpers - typeof";
    return s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(ae) {
      return typeof ae;
    } : function(ae) {
      return ae && typeof Symbol == "function" && ae.constructor === Symbol && ae !== Symbol.prototype ? "symbol" : typeof ae;
    }, s(w);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var l = I(Xr), i = I(va), a = I(cn), r = I(vn), u = I(pn), n = I(_n), o = I(An), c = I(Aa), v = I(gn), g = I(hn), E = I(we), C = I(Sn), p = I(Qr), _ = I(ga), S = I($n), h = I(mn), $ = I(Mn), M = I(yn), x = de(me), P = de(Me), L = I(Ln), B = I(Pn), N = I(On), F = I(Bn), G = I(Nn), z = I(Zn), X = I(Fn), te = I(Ae), q = I(ge), ee = I(Wn), He = I(qn), ke = I(Vn), Ge = I(zn), xe = I(jr), Le = de(_e), be = I(Xn), Ke = I(ha), We = I(Qn), qe = I(jn), Ye = I(eu), Ve = I(tu), ze = I(ru), Je = I(au), Pe = de(ye), Xe = I(vu), Qe = I(pu), Q = I(_u), j = I(Au), Oe = I(gu), fe = I(hu), je = I(Su), f = I(_a), d = I($u), A = I(mu), y = I(Mu), m = I(yu), D = I(Iu), O = I(ma), Z = I(Ru), T = I(Eu), U = I(Du), ue = I(Cu), ne = I(xu), re = I(Lu), Se = I(Zu), $e = de(Ie), ie = I(wu), oe = I(Hu), Be = I(ku), ea = Re, Pa = I(qu), Oa = I(Yu), Ba = I(Vu), Na = I(he), Za = I(zu), Fa = I(Ee), Ta = I(ju), Ua = I(ei), wa = I($a), Ha = I(ti), ka = I(ri), Ga = I(ai), ba = I(ni), Ka = I(ui), ta = de(De), Wa = I(Ra), qa = I(Ia), Ya = I(Ea), Va = I(fi), za = I(oi), Ja = I(di), Xa = I(ci), Qa = I(Da), ja = I(vi), en = I(pi), tn = I(_i), rn = I(Ai), an = I(gi), nn = I(Ce);
  function ra(w) {
    if (typeof WeakMap != "function") return null;
    var ae = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap();
    return (ra = function(et) {
      return et ? le : ae;
    })(w);
  }
  function de(w, ae) {
    if (w && w.__esModule) return w;
    if (w === null || s(w) != "object" && typeof w != "function") return { default: w };
    var le = ra(ae);
    if (le && le.has(w)) return le.get(w);
    var ce = { __proto__: null }, et = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var ve in w) if (ve !== "default" && {}.hasOwnProperty.call(w, ve)) {
      var Ne = et ? Object.getOwnPropertyDescriptor(w, ve) : null;
      Ne && (Ne.get || Ne.set) ? Object.defineProperty(ce, ve, Ne) : ce[ve] = w[ve];
    }
    return ce.default = w, le && le.set(w, ce), ce;
  }
  function I(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var un = "13.12.0", ln = {
    version: un,
    toDate: l.default,
    toFloat: i.default,
    toInt: a.default,
    toBoolean: r.default,
    equals: u.default,
    contains: n.default,
    matches: o.default,
    isEmail: c.default,
    isURL: v.default,
    isMACAddress: g.default,
    isIP: E.default,
    isIPRange: C.default,
    isFQDN: p.default,
    isBoolean: h.default,
    isIBAN: Pe.default,
    isBIC: Xe.default,
    isAbaRouting: M.default,
    isAlpha: x.default,
    isAlphaLocales: x.locales,
    isAlphanumeric: P.default,
    isAlphanumericLocales: P.locales,
    isNumeric: L.default,
    isPassportNumber: B.default,
    isPort: N.default,
    isLowercase: F.default,
    isUppercase: G.default,
    isAscii: X.default,
    isFullWidth: te.default,
    isHalfWidth: q.default,
    isVariableWidth: ee.default,
    isMultibyte: He.default,
    isSemVer: ke.default,
    isSurrogatePair: Ge.default,
    isInt: xe.default,
    isIMEI: z.default,
    isFloat: Le.default,
    isFloatLocales: Le.locales,
    isDecimal: be.default,
    isHexadecimal: Ke.default,
    isOctal: We.default,
    isDivisibleBy: qe.default,
    isHexColor: Ye.default,
    isRgbColor: Ve.default,
    isHSL: ze.default,
    isISRC: Je.default,
    isMD5: Qe.default,
    isHash: Q.default,
    isJWT: j.default,
    isJSON: Oe.default,
    isEmpty: fe.default,
    isLength: je.default,
    isLocale: $.default,
    isByteLength: f.default,
    isUUID: d.default,
    isMongoId: A.default,
    isAfter: y.default,
    isBefore: m.default,
    isIn: D.default,
    isLuhnNumber: O.default,
    isCreditCard: Z.default,
    isIdentityCard: T.default,
    isEAN: U.default,
    isISIN: ue.default,
    isISBN: ne.default,
    isISSN: re.default,
    isMobilePhone: $e.default,
    isMobilePhoneLocales: $e.locales,
    isPostalCode: ta.default,
    isPostalCodeLocales: ta.locales,
    isEthereumAddress: ie.default,
    isCurrency: oe.default,
    isBtcAddress: Be.default,
    isISO6346: ea.isISO6346,
    isFreightContainerID: ea.isFreightContainerID,
    isISO6391: Pa.default,
    isISO8601: Oa.default,
    isRFC3339: Ba.default,
    isISO31661Alpha2: Na.default,
    isISO31661Alpha3: Za.default,
    isISO4217: Fa.default,
    isBase32: Ta.default,
    isBase58: Ua.default,
    isBase64: wa.default,
    isDataURI: Ha.default,
    isMagnetURI: ka.default,
    isMailtoURI: Ga.default,
    isMimeType: ba.default,
    isLatLong: Ka.default,
    ltrim: Wa.default,
    rtrim: qa.default,
    trim: Ya.default,
    escape: Va.default,
    unescape: za.default,
    stripLow: Ja.default,
    whitelist: Xa.default,
    blacklist: Qa.default,
    isWhitelisted: ja.default,
    normalizeEmail: en.default,
    toString,
    isSlug: tn.default,
    isStrongPassword: an.default,
    isTaxID: Se.default,
    isDate: _.default,
    isTime: S.default,
    isLicensePlate: rn.default,
    isVAT: nn.default,
    ibanLocales: Pe.locales
  };
  e.default = ln, t.exports = e.default, t.exports.default = e.default;
})(ft, ft.exports);
var Ri = ft.exports;
const xa = /* @__PURE__ */ sn(Ri), La = (t) => t == null || t == null ? !0 : typeof t == "string" ? t.length == 0 : isNaN(t) ? !0 : t instanceof Array ? t.length == 0 : typeof t == "object" ? Object.keys(t).length == 0 : !1, Ei = (t) => !La(t), Di = (t, e) => Object.keys(t).find((l) => l == e) == null ? !1 : !La(t[e]), Ci = () => !0, xi = (t) => {
  const e = typeof t == "number" ? t.toString() : t;
  return xa.isNumeric(e);
}, Li = (t) => {
  const e = typeof t == "number" ? t.toString() : t;
  return xa.isFloat(e);
};
export {
  Ei as a,
  xi as b,
  Li as c,
  xa as d,
  Di as h,
  La as i,
  Ci as n,
  Ri as v
};
