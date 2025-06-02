import { isObject } from '@peacepieceuix-compatibility/utils/object';

export const toValues = (value: any, name?: string) => {
    if (name) {
        return isObject(value) && Object.hasOwn(value, name) ? value : { [name]: value };
    }

    return value;
};
