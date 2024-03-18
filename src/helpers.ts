import { marked } from 'marked'

export function attr() {
  if (arguments.length === 0) {
    return undefined
  }
  if (arguments.length === 1) {
    // eslint-disable-next-line prefer-rest-params
    return arguments[0]
  }
  // eslint-disable-next-line prefer-rest-params
  let obj = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    if (obj == null) {
      return undefined
    }
    // eslint-disable-next-line prefer-rest-params
    obj = obj[arguments[i]]
  }
  return obj
}

export function notEmpty(obj: any) {
  if (!obj) return false
  if (Array.isArray(obj)) return obj.length > 0
}

export function render(str: string) {
  return marked.parse(str || '')
}
