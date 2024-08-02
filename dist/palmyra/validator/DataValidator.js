import { getLengthValidator as g } from "./builder/LengthPredicateBuilder.js";
import { getRangeValidator as i } from "./builder/RangePredicateBuilder.js";
import { getRegexPredictor as d } from "./builder/RegexPredicateBuilder.js";
import { getRulePredicator as u } from "./builder/RulePredicateBuilder.js";
const m = (r) => {
  let e = [];
  if (r.required == !0 && e.push(), r.length && e.push(g(r.length)), r.range && e.push(i(r.range)), r.regExp && e.push(d(r.regExp)), r.rules) {
    const t = r.rules;
    if (t instanceof Array && t.length > 0)
      for (var f of t)
        e.push(u(f));
    else {
      const a = t;
      e.push(u(a));
    }
  }
  return (t) => {
    for (var a of e) {
      const l = a.call(null, t);
      if (!l.valid)
        return l;
    }
    return { valid: !0 };
  };
};
export {
  m as getPredicate
};
