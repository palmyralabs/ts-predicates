import { PredicateGen, PredicateResponse } from '../types';

const getRegexPredictor: PredicateGen = (regex: string | RegExp) => {
    const regExp = getRegexValidator(regex);

    return (d: any): PredicateResponse => {
        if (regExp(d)) {
            return { valid: true }
        } else {
            return {
                valid: false, reason: "regex", value: d
            }
        }
    }
}

const getRegexValidator = (regex: string | RegExp) => {
    if (typeof regex == 'string') {
        const regExp = new RegExp(regex);
        return (value: any) => { return regExp.test(value) }
    } else
        return (value: any) => { return regex.test(value) }
}

export { getRegexPredictor }