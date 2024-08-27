import { validationRule } from "./builder/RulePredicateBuilder";


interface ILengthOptions {
    min?: number,
    max?: number,
    is?: number,
    negate?: boolean
}

interface IRangeOptions<T> {
    start?: T,
    end?: T,
    negate?: boolean
}

type Predicator = (v: string | number) => PredicateResponse;
type PredicateGen = (...args: any[]) => Predicator;

interface IValidatorOptions extends IConstraints {
    regExp?: RegExp | string,
    rules?: validationRule[]
}

interface IConstraints {
    required?: boolean,
    range?: IRangeOptions<number>,
    length?: ILengthOptions
}

interface PredicateResponse {
    valid: boolean,
    reason?: string,
    value?: any
}

export type { IValidatorOptions, IConstraints, ILengthOptions, PredicateResponse, PredicateGen, Predicator, IRangeOptions }