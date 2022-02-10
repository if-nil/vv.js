
export function _click(node, val, ctx) {
  node.addEventListener('click', () => {
    const func = new Function(val);
    func.call(ctx.scope)
  })
}