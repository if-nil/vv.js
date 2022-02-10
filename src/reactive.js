import {isObject} from "./utils";

function scheduler(queue, key) {
  queue[key].forEach(fn => {
    fn()
  })
}

const createCtx = scope => {
  scope.$jobQueue = new WeakMap
  scope.effect = (name, fn) => {
    if (!scope.$jobQueue[name])
      scope.$jobQueue[name] = []
    scope.$jobQueue[name].push(fn)
  }
  return scope
}

export function reactive(scope) {
  if(!scope || !isObject(scope))
    return scope
  let proxy = new Proxy(scope, {
    get: function (target, p, receiver) {
      return target[p]
    },
    set: function (target, p, value, receiver) {
      target[p] = reactive(value) || value
      scheduler(scope.$jobQueue, p)
      return true
    }
  });
  Object.keys(scope).forEach(key => {
    scope[key] = reactive(scope[key]) || scope[key]
  })
  scope = createCtx(scope)
  return proxy
}
