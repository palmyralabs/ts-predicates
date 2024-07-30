import { BiPredicate, IPredicate } from "@palmyralabs/ts-utils";
import validator from "validator";

const isEmpty: IPredicate<any> = (data: any) => {
    if (null == data || undefined == data)
        return true;
    if (typeof (data) == 'string') {
        return (data.length == 0);
    }
    if (isNaN(data))
        return true;
    return false;
}

const isPresent: IPredicate<any> = (d: any) => {
    return !isEmpty(d);
}

const hasValue: BiPredicate<any, string> = (d: any, key: string) => {
    const k: string = Object.keys(d).find((k: string) => {
        return k == key;
    });
    if (undefined == k)
        return false;
    return !isEmpty(d[key]);
}

const noopPredicate = () => {
    return true;
}

const isNumeric = (val: any) => {
    const v = (typeof val == "number" ? val.toString() : val)
    return validator.isNumeric(v);
}

const isFloat = (val: any) => {
    const v = (typeof val == "number" ? val.toString() : val)
    return validator.isFloat(v);
}

export { isEmpty, isPresent, hasValue, noopPredicate, isNumeric, isFloat }