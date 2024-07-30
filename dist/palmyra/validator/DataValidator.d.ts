import { IValidatorOptions, PredicateResponse } from './types';

declare const getPredicate: (options: IValidatorOptions) => (value: any) => PredicateResponse;
export { getPredicate };
