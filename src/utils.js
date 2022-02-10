
export function isObject(obj) {
  return obj && typeof obj === 'object' && Array.isArray(obj) === false
}

export const checkAttr = (el, name) => {
  const val = el.getAttribute(name)
  if (val)
    el.removeAttribute(name)
  return val
}

export function getSubObject(str, ctx) {
  if(!str) {
    return [null, null, null]
  }
  const val = str.split('.')
  let data = ctx.scope
  let obj = ctx.scope
  let k = ''
  val.forEach((key, index) => {
    if (index === val.length - 2) {
      obj = data[key]
    }
    k = key
    data = data[key] || null
    if(!data)
      return [null, null]
  })
  return [k, data, obj]
}
