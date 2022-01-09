import {isObject} from "./utils";

export function reactive(scope) {
  if(!scope || !isObject(scope))
    return null
  let proxy = new Proxy(scope, {
    get: function (target, p, receiver) {
      console.log(`get procKey: ${p}`)
      return target[p]
    },
    set: function (target, p, value, receiver) {
      console.log(`set procKey: ${p}`)
      target[p] = reactive(value) || value
    }
  });
  Object.keys(scope).forEach(key => {
    scope[key] = reactive(scope[key]) || scope[key]
  })
  return proxy
}

