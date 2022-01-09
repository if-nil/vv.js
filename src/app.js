import {reactive} from "./reactive";

const bindMethods = scope => {
  Object.keys(scope).forEach(key => {
    if (typeof scope[key] === 'function') {
      console.log('func')
      scope[key] = scope[key].bind(scope)
    }
  })
}

export default class {
  constructor(initialData) {
    this.proxyData = reactive(initialData)
    // bindMethods(this.proxyData)
  }
}