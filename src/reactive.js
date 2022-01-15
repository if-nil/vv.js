import {isObject} from "./utils";

function scheduler(queue) {
  queue.forEach(job => job())
}

export function reactive(scope) {
  if(!scope || !isObject(scope))
    return scope
  let proxy = new Proxy(scope, {
    get: function (target, p, receiver) {
      console.log(`get procKey: ${p}`)
      return target[p]
    },
    set: function (target, p, value, receiver) {
      console.log(`set procKey: ${target[p]}`)
      target[p] = reactive(value) || value
      scheduler(this.queue)
      return true
    },
    queue: []
  });
  Object.keys(scope).forEach(key => {
    scope[key] = reactive(scope[key]) || scope[key]
  })
  return proxy
}

