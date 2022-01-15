
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
  const val = str.split('.')
  let data = ctx.scope
  val.forEach(key => {
    data = data[key] || null
    if(!data)
      return null
  })
  return data
}
