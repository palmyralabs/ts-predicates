import { getLengthValidator } from "./builder/LengthPredicateBuilder";
import { getRangeValidator } from "./builder/RangePredicateBuilder";
import { getRulePredicator } from "./builder/RulePredicateBuilder";
import { IValidatorOptions, PredicateResponse, Predicator } from "./types";

const getPredicate = (options: IValidatorOptions) => {
    let validators: Array<Predicator> = [];
    // let required = options.required;

    if (options.required == true) {
        validators.push();
    }

    if (options.length) {
        validators.push(getLengthValidator(options.length));
    }

    if (options.range) {
        validators.push(getRangeValidator(options.range));
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
        for (var validator of validators) {
            const validStatus: PredicateResponse = validator.call(null, value);
            if (!validStatus.valid)
                return validStatus;
        }
        return { valid: true };
    }
}

export { getPredicate }