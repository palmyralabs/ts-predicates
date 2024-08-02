import { PredicateGen, PredicateResponse } from '../types';


const getRegexPredictor: PredicateGen = (regex: string) => {
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


const getRegexValidator = (regex) => {
    return (value: any) => { return regex.test(value) }
}

export { getRegexPredictor }