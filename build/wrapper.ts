/*
 * @Author: maggot-code
 * @Date: 2021-12-29 11:34:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-29 11:34:49
 * @Description: file content
 */
export function wrapperEnv(envConfig: any): ImportMetaEnv {
    const isNumber = new RegExp(/^[0-9]*$/);
    const isBoolean = (val: any) => ['true', 'false'].includes(val);
    const toBoolean = (val: any) => val === 'true' ? true : val === 'false' ? false : false;
    const env: any = {};

    Object.keys(envConfig).forEach(name => {
        const baseName = name.replace(/\s+/g, "");
        const baseValue = envConfig[baseName].replace ? envConfig[baseName].replace(/\s+/g, "") : envConfig[baseName];
        const value = isNumber.test(baseValue) ? +baseValue : isBoolean(baseValue) ? toBoolean(baseValue) : baseValue;

        env[baseName] = value;
        process.env[baseName] = value;
    });

    return env;
}