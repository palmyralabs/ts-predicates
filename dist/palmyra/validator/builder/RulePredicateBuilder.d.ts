import { isFloat, isNumeric } from 'validator';
import { PredicateGen } from '../types';

declare const ruleValidators: {
    string: () => boolean;
    alphabets: typeof import('validator').isAlpha;
    date: typeof import('validator').isDate;
    time: typeof import('validator').isTime;
    number: typeof isNumeric;
    email: typeof import('validator/lib/isEmail').default;
    port: typeof import('validator').isPort;
    ip: typeof import('validator').isIP;
    fqdn: typeof import('validator/lib/isFQDN').default;
    folder: (val: any) => boolean;
    portRange: (val: any) => boolean;
    password: typeof import('validator').isStrongPassword;
    hasLowerCase: (val: any) => boolean;
    hasUpperCase: (val: any) => boolean;
    hasSpecialChar: (val: any) => boolean;
    float: typeof isFloat;
};
type validationRule = keyof typeof ruleValidators;
declare const getRulePredicator: PredicateGen;
export { getRulePredicator };
export type { validationRule };
