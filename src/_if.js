
export function _if(node, val, ctx) {
  const expression = `return (${val})`
  const func = new Function(expression);
  console.log(func.call(ctx.scope))
  if(func.call(ctx.scope)) {
    node.style.display = 'block'
  } else {
    node.style.display = 'none'
  }
}