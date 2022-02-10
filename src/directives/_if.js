import {getSubObject} from "../utils";

export function _if(node, val, ctx) {
  const expression = `return (${val})`
  const func = new Function(expression);
  if(func.call(ctx.scope)) {
    node.style.display = 'block'
  } else {
    node.style.display = 'none'
  }
  const regex = /[a-zA-Z.]+/g
  const found = val.match(regex)
  found.forEach(val => {
    val = val.replace('this\.', '')
    const [key, data, obj] = getSubObject(val, ctx)
    obj.effect(key, () => {
      if(func.call(ctx.scope)) {
        node.style.display = 'block'
      } else {
        node.style.display = 'none'
      }
    })
  })
  // const [key, data, obj] = getSubObject(val, ctx)
}