import libIsNumeric from 'validator/es/lib/isNumeric';
import libIsFloat from 'validator/es/lib/isFloat';

const isEmpty = (data: any) => {
    if (null == data || undefined == data)
        return true;
    if (typeof (data) == 'string') {
        return (data.length == 0);
    }
    if (data instanceof Array) {
        return data.length == 0;
    }
    if (typeof data == 'object') {
        return Object.keys(data).length == 0;
    }

    return false;
}


const isPresent = (d: any) => {
    return !isEmpty(d);
}

const hasValue = (d: any, key: string) => {
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
    return libIsNumeric(v);
}

const isFloat = (val: any) => {
    const v = (typeof val == "number" ? val.toString() : val)
    return libIsFloat(v);
}

export { isEmpty, isPresent, hasValue, noopPredicate, isNumeric, isFloat }