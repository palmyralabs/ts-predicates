import { getLengthValidator as i } from "./builder/LengthPredicateBuilder.js";
import { getRulePredicator as a } from "./builder/RulePredicateBuilder.js";
const o = (e) => {
  let t = [];
  if (e.required == !0 && t.push(), e.length && t.push(i(e.length)), e.rules) {
    const r = e.rules;
    if (r instanceof Array && r.length > 0)
      for (var f of r)
        t.push(a(f));
    else {
      const l = r;
      t.push(a(l));
    }
  }
  return (r) => {
    for (var l of t) {
      const u = l.call(null, r);
      if (!u.valid)
        return u;
    }
    return { valid: !0 };
  };
};
export {
  o as getPredicate
};
