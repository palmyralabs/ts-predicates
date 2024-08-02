import { getLengthValidator as g } from "./builder/LengthPredicateBuilder.js";
import { getRangeValidator as d } from "./builder/RangePredicateBuilder.js";
import { getRegexPredictor as s } from "./builder/RegexPredicateBuilder.js";
import { getRulePredicator as l } from "./builder/RulePredicateBuilder.js";
import { i as n } from "../../chunks/SimplePredicates.js";
const v = (r) => {
  let t = [];
  const u = r.required;
  if (r.length && t.push(g(r.length)), r.range && t.push(d(r.range)), r.regExp && t.push(s(r.regExp)), r.rules) {
    const e = r.rules;
    if (e instanceof Array && e.length > 0)
      for (var f of e)
        t.push(l(f));
    else {
      const a = e;
      t.push(l(a));
    }
  }
  return (e) => {
    if (n(e))
      return u ? { valid: !1, reason: "required", value: e } : { valid: !0 };
    for (var a of t) {
      const i = a.call(null, e);
      if (!i.valid)
        return i;
    }
    return { valid: !0 };
  };
};
export {
  v as getPredicate
};
