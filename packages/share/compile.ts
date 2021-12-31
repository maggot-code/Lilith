/*
 * @Author: maggot-code
 * @Date: 2021-12-29 16:15:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-29 16:30:45
 * @Description: file content
 */
const ExpRE = /^\s*\{\{([\s\S]*)\}\}\s*$/;
const Registry = {
    silent: false,
    compile(expression: string, scope = {}) {
        if (Registry.silent) {
            try {
                return new Function('$root', `with($root) { return (${expression}); }`)(
                    scope
                )
            } catch { }
        } else {
            return new Function('$root', `with($root) { return (${expression}); }`)(
                scope
            )
        }
    },
}

export const shallowCompile = (source: any, scope: any) => {
    if (typeof source === 'string') {
        const matched = source.match(ExpRE)
        if (!matched) return source
        return Registry.compile(matched[1], scope)
    }
    return source
}