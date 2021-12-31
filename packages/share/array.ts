/*
 * @Author: maggot-code
 * @Date: 2021-12-29 16:33:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-29 17:05:35
 * @Description: file content
 */
import { isArray } from './checkers';
import { isValid } from './isEmpty';

export const toArray = (val: any): Array<any> => isArray(val) ? val : isValid(val) ? [val] : val;