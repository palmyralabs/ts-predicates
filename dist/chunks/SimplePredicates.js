function S(r) {
  "@babel/helpers - typeof";
  return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, S(r);
}
function R(r) {
  var e = typeof r == "string" || r instanceof String;
  if (!e) {
    var a = S(r);
    throw r === null ? a = "null" : a === "object" && (a = r.constructor.name), new TypeError("Expected a string but received a ".concat(a));
  }
}
var t = {
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
}, n = {
  "en-US": ".",
  ar: "٫"
}, b = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
for (var u, o = 0; o < b.length; o++)
  u = "en-".concat(b[o]), t[u] = t["en-US"], n[u] = n["en-US"];
var g = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
for (var c, f = 0; f < g.length; f++)
  c = "ar-".concat(g[f]), t[c] = t.ar, n[c] = n.ar;
var h = ["IR", "AF"];
for (var y, s = 0; s < h.length; s++)
  y = "fa-".concat(h[s]), n[y] = n.ar;
var p = ["BD", "IN"];
for (var l, $ = 0; $ < p.length; $++)
  l = "bn-".concat(p[$]), t[l] = t.bn, n[l] = n["en-US"];
var m = ["ar-EG", "ar-LB", "ar-LY"], v = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
for (var A = 0; A < m.length; A++)
  n[m[A]] = n["en-US"];
for (var Z = 0; Z < v.length; Z++)
  n[v[Z]] = ",";
t["fr-CA"] = t["fr-FR"];
t["pt-BR"] = t["pt-PT"];
n["pt-BR"] = n["pt-PT"];
t["pl-Pl"] = t["pl-PL"];
n["pl-Pl"] = n["pl-PL"];
t["fa-AF"] = t.fa;
function P(r, e) {
  return R(r), new RegExp("^[+-]?([0-9]*[".concat({}.locale ? n[e.locale] : ".", "])?[0-9]+$")).test(r);
}
function I(r, e) {
  R(r), e = e || {};
  var a = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(e.locale ? n[e.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (r === "" || r === "." || r === "," || r === "-" || r === "+")
    return !1;
  var i = parseFloat(r.replace(",", "."));
  return a.test(r) && (!e.hasOwnProperty("min") || i >= e.min) && (!e.hasOwnProperty("max") || i <= e.max) && (!e.hasOwnProperty("lt") || i < e.lt) && (!e.hasOwnProperty("gt") || i > e.gt);
}
const E = (r) => r == null || r == null ? !0 : typeof r == "string" || r instanceof Array ? r.length == 0 : typeof r == "object" ? Object.keys(r).length == 0 : !1, L = (r) => !E(r), N = (r, e) => Object.keys(r).find((i) => i == e) == null ? !1 : !E(r[e]), D = () => !0, U = (r) => {
  const e = typeof r == "number" ? r.toString() : r;
  return P(e);
}, k = (r) => {
  const e = typeof r == "number" ? r.toString() : r;
  return I(e);
};
export {
  L as a,
  U as b,
  k as c,
  R as d,
  t as e,
  N as h,
  E as i,
  D as n
};
