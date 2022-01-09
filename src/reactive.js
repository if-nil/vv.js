import {isObject} from "./utils";

export function reactive(initialData) {
  if(!initialData || !isObject(initialData))
    return
  console.log("reactive()")
  const proxy = new Proxy(initialData, {
    get(target, p, receiver) {
      console.log(target, p)
      return target[p]
    },
    set(target, p, value, receiver) {
      target[p] = value

    }
  });
  Object.keys(initialData).forEach(key => {
    reactive(initialData[key])
  })
  return proxy
}

