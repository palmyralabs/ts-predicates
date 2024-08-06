import { default as isAlpha } from 'validator/es/lib/isAlpha';
import { default as isDate } from 'validator/es/lib/isDate';
import { default as isTime } from 'validator/es/lib/isTime';
import { default as isEmail } from 'validator/es/lib/isEmail';
import { default as isPort } from 'validator/es/lib/isPort';
import { default as isFQDN } from 'validator/es/lib/isFQDN';
import { PredicateGen } from '../types';

declare const ruleValidators: {
    string: () => boolean;
    alphabets: typeof isAlpha;
    date: typeof isDate;
    time: typeof isTime;
    number: (val: any) => boolean;
    email: typeof isEmail;
    port: typeof isPort;
    ipv4: (v: string) => boolean;
    ipv6: (v: string) => boolean;
    fqdn: typeof isFQDN;
    folder: (val: any) => boolean;
    portRange: (val: any) => boolean;
    float: (val: any) => boolean;
};
type validationRule = keyof typeof ruleValidators;
declare const getRulePredicator: PredicateGen;
export { getRulePredicator };
export type { validationRule };
