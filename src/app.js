import {reactive} from "./reactive";
import {walk} from "./walk";

const bindMethods = scope => {
  Object.keys(scope).forEach(key => {
    if (typeof scope[key] === 'function') {
      scope[key] = scope[key].bind(scope)
    }
  })
}

export default class {
  constructor(initialData) {
    if (!initialData) {
      throw "empty parameters"
    }
    this.scope = reactive(initialData)
    this.el = document.querySelector(`[vv]`) ||
      document.documentElement
    this.effect = null
    walk(this.el, this)
  }
}