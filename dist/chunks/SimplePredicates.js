function b(r) {
  if (r == null) throw new TypeError("Expected a string but received a ".concat(r));
  if (r.constructor.name !== "String") throw new TypeError("Expected a string but received a ".concat(r.constructor.name));
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
}, h = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
for (var u, c = 0; c < h.length; c++)
  u = "en-".concat(h[c]), t[u] = t["en-US"], n[u] = n["en-US"];
var S = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
for (var s, l = 0; l < S.length; l++)
  s = "ar-".concat(S[l]), t[s] = t.ar, n[s] = n.ar;
var v = ["IR", "AF"];
for (var R, f = 0; f < v.length; f++)
  R = "fa-".concat(v[f]), n[R] = n.ar;
var E = ["BD", "IN"];
for (var $, A = 0; A < E.length; A++)
  $ = "bn-".concat(E[A]), t[$] = t.bn, n[$] = n["en-US"];
var m = ["ar-EG", "ar-LB", "ar-LY"], P = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
for (var o = 0; o < m.length; o++)
  n[m[o]] = n["en-US"];
for (var Z = 0; Z < P.length; Z++)
  n[P[Z]] = ",";
t["fr-CA"] = t["fr-FR"];
t["pt-BR"] = t["pt-PT"];
n["pt-BR"] = n["pt-PT"];
t["pl-Pl"] = t["pl-PL"];
n["pl-Pl"] = n["pl-PL"];
t["fa-AF"] = t.fa;
function i(r) {
  return r == null;
}
function N(r, e) {
  return b(r), new RegExp("^[+-]?([0-9]*[".concat({}.locale ? n[e.locale] : ".", "])?[0-9]+$")).test(r);
}
function L(r, e) {
  b(r), e = e || {};
  var g = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(e.locale ? n[e.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (r === "" || r === "." || r === "," || r === "-" || r === "+")
    return !1;
  var a = parseFloat(r.replace(",", "."));
  return g.test(r) && (!e.hasOwnProperty("min") || i(e.min) || a >= e.min) && (!e.hasOwnProperty("max") || i(e.max) || a <= e.max) && (!e.hasOwnProperty("lt") || i(e.lt) || a < e.lt) && (!e.hasOwnProperty("gt") || i(e.gt) || a > e.gt);
}
const I = (r) => r == null || r == null ? !0 : typeof r == "string" || r instanceof Array ? r.length == 0 : typeof r == "object" ? Object.keys(r).length == 0 : !1, U = (r) => !I(r), d = (r, e) => Object.keys(r).find((a) => a == e) == null ? !1 : !I(r[e]), D = () => !0, k = (r) => {
  const e = typeof r == "number" ? r.toString() : r;
  return N(e);
}, p = (r) => {
  const e = typeof r == "number" ? r.toString() : r;
  return L(e);
};
export {
  U as a,
  k as b,
  p as c,
  b as d,
  t as e,
  i as f,
  d as h,
  I as i,
  D as n
};
