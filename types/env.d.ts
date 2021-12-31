/*
 * @Author: maggot-code
 * @Date: 2021-12-29 11:24:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-29 11:37:39
 * @Description: file content
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv extends Readonly<Record<string, any>> { }

interface ImportMeta {
    env: ImportMetaEnv;
}
