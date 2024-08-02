import validator, { isFloat, isNumeric } from 'validator';
import { PredicateGen, PredicateResponse } from '../types';
import { hasLowerCase, hasSpecialChar, hasUpperCase, isFolder, isPortRange, noopPredicate } from '../predicate';


const getRulePredicator: PredicateGen = (rule: string) => {
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


const getRuleValidator = (rule: string) => {
    if (rule) {
        switch (rule) {
            case 'string':
                return noopPredicate;
            case 'alphabets':
                return validator.isAlpha;
            case 'date':
                return validator.isDate;
            case 'time':
                return validator.isTime;
            case 'number':
                return isNumeric;
            case 'email':
                return validator.isEmail;
            case 'mobilePhone':
                return validator.isMobilePhone;
            case 'port':
                return validator.isPort;
            case 'ip':
                return validator.isIP;
            case 'fqdn':
                return validator.isFQDN;
            case 'folder':
                return isFolder;
            case 'portrange':
                return isPortRange;
            case 'password':
                return validator.isStrongPassword;
            case 'hasLowerCase':
                return hasLowerCase;
            case 'hasUpperCase':
                return hasUpperCase;
            case 'hasSpecialChar':
                return hasSpecialChar;
            case 'float':
                return isFloat;
        }
    }
    return noopPredicate;
}

export { getRulePredicator }