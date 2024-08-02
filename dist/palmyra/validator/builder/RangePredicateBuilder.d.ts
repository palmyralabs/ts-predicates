import { IRangeOptions, Predicator } from '../types';

declare const getRangeValidator: (o: IRangeOptions<number>) => Predicator;
export { getRangeValidator };
