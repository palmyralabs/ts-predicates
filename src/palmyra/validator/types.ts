import { IFunction } from "@palmyralabs/ts-utils"

interface IValidatorOptions {
    required?: boolean,
    range?: {
        start?: number,
        end?: number,
        negate?: boolean
    },
    length?: {
        min?: number,
        max?: number,
        negate?: boolean
    },
    regExp?: string,
    validFn?: IFunction<any, { result: boolean, status: string }>
    rules?: string[]
}

export type {IValidatorOptions}