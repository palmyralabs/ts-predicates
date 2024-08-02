import { getLengthValidator } from "./builder/LengthPredicateBuilder";
import { getRangeValidator } from "./builder/RangePredicateBuilder";
import { getRegexPredictor } from "./builder/RegexPredicateBuilder";
import { getRulePredicator } from "./builder/RulePredicateBuilder";
import { isEmpty } from "./predicate/SimplePredicates";
import { IValidatorOptions, PredicateResponse, Predicator } from "./types";

const getPredicate = (options: IValidatorOptions) => {
    let validators: Array<Predicator> = [];
    const required = options.required;

    if (options.length) {
        validators.push(getLengthValidator(options.length));
    }

    if (options.range) {
        validators.push(getRangeValidator(options.range));
    }

    if (options.regExp) {
        validators.push(getRegexPredictor(options.regExp));
    }

    if (options.rules) {
        const rules = options.rules;
        if (rules instanceof Array && rules.length > 0) {
            for (var rule of rules) {
                validators.push(getRulePredicator(rule));
            }
        } else {
            const rule: any = rules;
            validators.push(getRulePredicator(rule));
        }
    }

    return (value: any): PredicateResponse => {
        if (isEmpty(value)) {
            return required ? { valid: false, reason: "required", value } : { valid: true }
        }

        for (var validator of validators) {
            const validStatus: PredicateResponse = validator.call(null, value);
            if (!validStatus.valid)
                return validStatus;
        }
        return { valid: true };
    }
}

export { getPredicate }