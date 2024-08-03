

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

interface IValidatorOptions {
    required?: boolean,
    range?: IRangeOptions<number>,
    length?: ILengthOptions,
    regExp?: RegExp | string,    
    rules?: string[]
}

interface PredicateResponse {
    valid: boolean,
    reason?: string,
    value?: any
}

export type { IValidatorOptions, ILengthOptions, PredicateResponse, PredicateGen, Predicator, IRangeOptions }