import { ILengthOptions, PredicateGen, PredicateResponse, Predicator } from "../types";


const getLengthValidator = (o: ILengthOptions): Predicator => {
    const length = o.is;
    const minLength = o.min;
    const maxLength = o.max;

    if (length) {
        return getEqLengthValidator(length);
    } else if (minLength) {
        if (maxLength) {
            return getRangeLengthValidator(minLength, maxLength);
        } else {
            return getMinLengthValidator(minLength);
        }
    } else {
        if (maxLength) {
            return getMaxLengthValidator(maxLength);
        } else {
            throw Error("one or more parameters must be provided : is, min or max");
        }
    }
}

const getRangeLengthValidator: PredicateGen = (minLength: number, maxLength: number) => {
    return (val: string) => {
        if(invalidInput(val))
            return { valid: false, reason: 'length.invalid', value: val };
        if (val.length <= maxLength) {
            if (minLength <= val.length) {
                return { valid: true };
            } else {
                return { valid: false, reason: 'length.min', value: val.length };
            }
        } else {
            return { valid: false, reason: 'length.max', value: val.length };
        }
    }
}

const getEqLengthValidator: PredicateGen = (length: number) => {
    return (val: string): PredicateResponse => {
        if(invalidInput(val))
            return { valid: false, reason: 'length.invalid', value: val };

        if (val.length == length) {
            return { valid: true };
        } else {
            return { valid: false, reason: 'length.eq', value: val.length };
        }
    }
}

const getMinLengthValidator: PredicateGen = (minLength: number) => {
    return (val: string) => {
        if(invalidInput(val))
            return { valid: false, reason: 'length.invalid', value: val };

        if (minLength <= val.length) {
            return { valid: true };
        } else {
            return { valid: false, reason: 'length.min', value: val.length };
        }
    }
}

const getMaxLengthValidator: PredicateGen = (maxLength: number) => {
    return (val: string) => {
        if(invalidInput(val))
            return { valid: false, reason: 'length.invalid', value: val };
        
        if (val.length <= maxLength) {
            return { valid: true };
        } else {
            return { valid: false, reason: 'length.max', value: val.length };
        }
    }
}

const invalidInput = (v: string) => {
    return (null == v || undefined == v);
}

export { getLengthValidator }