import {getSubObject} from "./utils";

export function _text(node, val, ctx) {
  const data = getSubObject(val, ctx)
  node.textContent = data
  // data.queue.push(
  //   () => {
  //     node.textContent = 'data'
  //   }
  // )
}