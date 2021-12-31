/*
 * @Author: maggot-code
 * @Date: 2021-12-29 16:39:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-29 16:54:40
 * @Description: file content
 */
import {
    isBoolean,
    isNumberLike,
    isString,
    isFunc,
    isArray,
    isFile,
    isMap,
    isSet,
    isPlainObj,
    isObject
} from './checkers';

const has = Object.prototype.hasOwnProperty

export const isValid = (val: any) => val !== undefined && val !== null;

export const isVoid = (val: any) => val === undefined || val === null;

export const isEmpty = (val: any, strict = false): boolean => {
    if (isVoid(val)) return true;

    if (isBoolean(val)) return false;

    if (isNumberLike(val)) return false;

    if (isString(val)) return val.length === 0;

    if (isFunc(val)) return val.length === 0;

    if (isArray(val) && val.length === 0) return true;

    if (isFile(val) || isMap(val) || isSet(val)) return val.size === 0;

    if (isPlainObj(val) || isObject(val)) {
        for (const key in val) if (has.call(val, key)) return false;

        return true;
    }

    return false;
}
