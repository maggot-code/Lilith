/*
 * @Author: maggot-code
 * @Date: 2021-12-29 16:18:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-29 17:00:17
 * @Description: file content
 */
export const getType = (obj: any) => Object.prototype.toString.call(obj);

export const isType = <T>(type: string | Array<string>) => (obj: unknown): obj is T => getType(obj) === `[object ${type}]`;

export const isFunc = (val: any): val is Function => typeof val === `function`;

export const isArray = Array.isArray;

export const isPlainObj = isType<object>('Object');

export const isString = isType<string>('String');

export const isBoolean = isType<boolean>('Boolean');

export const isNumber = isType<number>('Number');

export const isMap = (val: any): val is Map<any, any> => val && val instanceof Map;

export const isSet = (val: any): val is Set<any> => val && val instanceof Set;

export const isWeakMap = (val: any): val is WeakMap<any, any> => val && val instanceof WeakMap;

export const isWeakSet = (val: any): val is WeakSet<any> => val && val instanceof WeakSet;

export const isFile = (val: any): val is File => val && val instanceof File;

export const isNumberLike = (index: any): index is number => isNumber(index) || /^\d+$/.test(index);

export const isObject = (val: unknown): val is object => typeof val === `object`;

export const isRegExp = isType<RegExp>('RegExp');