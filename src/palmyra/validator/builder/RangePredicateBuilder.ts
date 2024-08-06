import { IRangeOptions, PredicateGen, PredicateResponse, Predicator } from "../types";


const getRangeValidator = (o: IRangeOptions<number>): Predicator => {
    const startRange = o.start;
    const endRange = o.end;

    if (endRange) {
        if (startRange) {
            return getStartAndEndRangeValidator(startRange, endRange);
        } else {
            return getEndRangeValidator(endRange);
        }
    } else {
        if (startRange) {
            return getStartRangeValidator(startRange);
        } else {
            throw Error("one or more parameters must be provided : start or end");
        }
    }
}

const getStartAndEndRangeValidator: PredicateGen = (startRange: number, endRange: number) => {
    return (val: number): PredicateResponse => {
        if (startRange) {
            if (endRange) {
                if (val >= startRange && val <= endRange) {
                    return { valid: true };
                } else if (val < startRange) {
                    return { valid: false, reason: 'range.start', value: val };
                }
                else if (val > endRange) {
                    return { valid: false, reason: 'range.end', value: val };
                }
            } else {
                return { valid: false, reason: 'range.end', value: val };
            }
        } else {
            return { valid: false, reason: 'range.end', value: val };
        }
    }
}

const getEndRangeValidator: PredicateGen = (endRange: number) => {
    return (val: number): PredicateResponse => {
        if (val <= endRange) {
            return { valid: true };
        } else {
            return { valid: false, reason: 'range.end', value: val };
        }
    }
}

const getStartRangeValidator: PredicateGen = (startRange: number) => {
    return (val: number): PredicateResponse => {
        if (startRange <= val) {
            return { valid: true };
        } else {
            return { valid: false, reason: 'range.start', value: val };
        }
    }
}

export { getRangeValidator }