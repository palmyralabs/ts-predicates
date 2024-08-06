import isAlpha from 'validator/es/lib/isAlpha';
import isDate from 'validator/es/lib/isDate';
import isTime from 'validator/es/lib/isTime';
import isEmail from 'validator/es/lib/isEmail';
import isPort from 'validator/es/lib/isPort';
import isFQDN from 'validator/es/lib/isFQDN';
import isIP from 'validator/es/lib/isIP';


import { PredicateGen, PredicateResponse } from '../types';
import {
    isFloat, isFolder, isNumeric, isPortRange, noopPredicate
} from '../predicate';


const ruleValidators = {
    'string': noopPredicate,
    'alphabets': isAlpha,
    'date': isDate,
    'time': isTime,
    'number': isNumeric,
    'email': isEmail,
    'port': isPort,
    'ipv4': (v: string) => isIP(v, 4),
    'ipv6': (v: string) => isIP(v, 6),
    'fqdn': isFQDN,
    'folder': isFolder,
    'portRange': isPortRange,
    'float': isFloat
}


type validationRule = keyof typeof ruleValidators;


const getRulePredicator: PredicateGen = (rule: validationRule) => {
    const validator = getRuleValidator(rule);

    return (d: any): PredicateResponse => {
        if (null != d && validator(d)) {
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