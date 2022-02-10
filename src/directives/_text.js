import {getSubObject} from "../utils";

export function _text(node, val, ctx) {
  const [key, data, obj] = getSubObject(val, ctx)
  node.textContent = data
  obj.effect(key, () => {
      const [key, data, obj] = getSubObject(val, ctx)
      node.textContent = data
    }
  )
}