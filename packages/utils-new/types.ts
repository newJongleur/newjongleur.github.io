import { isVNode } from 'vue'
import {
  isArray,
  isFunction,
  isObject,
  isString,
  isDate,
  isPromise,
  isSymbol,
  toRawType,
} from '@vue/shared'
import { isBoolean, isNumber } from '@vueuse/core'

export {
  isArray,
  isFunction,
  isObject,
  isString,
  isDate,
  isPromise,
  isSymbol,
  isBoolean,
  isNumber,
  isVNode,
}

export const isUndefined = (val: any): val is undefined => val === undefined
export const isHTMLElement = (val: unknown) => toRawType(val).startsWith('HTML')

export const isEmpty = (val: unknown) =>
  (!val && val !== 0) ||
  (isArray(val) && val.length === 0) ||
  (isObject(val) && !Object.keys(val).length)
