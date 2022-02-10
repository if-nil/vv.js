import {checkAttr} from "./utils";
import {_if} from "./directives/_if";
import {_click} from "./directives/_click";
import {_text} from "./directives/_text";

export const walk = (node, ctx) => {
  const type = node.nodeType
  if (type === 1) {
    handleElement(node, ctx)
  } else if (type === 3) {
    handleText(node, ctx)
  }
  walkChild(node, ctx)
}

function walkChild(node, ctx) {
  let child = node.firstChild
  while (child) {
    child = walk(child, ctx) || child.nextSibling
  }
}

function handleElement(node, ctx) {
  if (node.hasAttribute('vv.if')) {
    const val = checkAttr(node, 'vv.if')
    _if(node, val, ctx)
  } else if (node.hasAttribute('vv.click')) {
    const val = checkAttr(node, 'vv.click')
    _click(node, val, ctx)
  }
}

function handleText(node, ctx) {
  const reg = /\{\{(.+?)\}\}/
  const text = node.textContent
  if (reg.test(text)) {
    const key = RegExp.$1.trim()
    _text(node, key, ctx)
  }
}