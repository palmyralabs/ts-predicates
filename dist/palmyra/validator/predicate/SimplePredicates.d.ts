import { BiPredicate, IPredicate } from '@palmyralabs/ts-utils';

declare const isEmpty: IPredicate<any>;
declare const isPresent: IPredicate<any>;
declare const hasValue: BiPredicate<any, string>;
declare const noopPredicate: () => boolean;
declare const isNumeric: (val: any) => boolean;
declare const isFloat: (val: any) => boolean;
export { isEmpty, isPresent, hasValue, noopPredicate, isNumeric, isFloat };
