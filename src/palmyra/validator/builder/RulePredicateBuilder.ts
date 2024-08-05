import validator, { isFloat, isNumeric } from 'validator';
import { PredicateGen, PredicateResponse } from '../types';
import { hasLowerCase, hasSpecialChar, hasUpperCase, isFolder, isPortRange, noopPredicate } from '../predicate';


const ruleValidators = {
    'string': noopPredicate,
    'alphabets': validator.isAlpha,
    'date': validator.isDate,
    'time': validator.isTime,
    'number': isNumeric,
    'email': validator.isEmail,
    'mobilePhone': validator.isMobilePhone,
    'port': validator.isPort,
    'ip': validator.isIP,
    'fqdn': validator.isFQDN,
    'folder': isFolder,
    'portRange': isPortRange,
    'password': validator.isStrongPassword,
    'hasLowerCase': hasLowerCase,
    'hasUpperCase': hasUpperCase,
    'hasSpecialChar': hasSpecialChar,
    'float': isFloat
}


type validationRule = keyof typeof ruleValidators;


const getRulePredicator: PredicateGen = (rule: validationRule) => {
    const validator = getRuleValidator(rule);

    return (d: any): PredicateResponse => {
        if (validator(d)) {
            return { valid: true }
        } else {
            return {
                valid: false, reason: rule, value: d
            }
        }
    }
}


const getRuleValidator = (rule: validationRule) => {
    if (rule) {
        const validator = ruleValidators[rule];
        if (!validator)
            throw new Error('no validator found for rule ' + rule);
        return validator ? validator : noopPredicate;
    }
    return noopPredicate;
}

export { getRulePredicator }

export type { validationRule }