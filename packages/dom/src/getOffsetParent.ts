import {getComputedStyle} from './getComputedStyle';
import {getParentNode} from './getParentNode';
import {getWindow} from './getWindow';
import {
  isContainingBlock,
  isHTMLElement,
  isLastTraversableNode,
  isTableElement,
} from './is';
import {getNodeName} from './node';

function getTrueOffsetParent(element: Element): Element | null {
  if (
    !isHTMLElement(element) ||
    getComputedStyle(element).position === 'fixed'
  ) {
    return null;
  }

  return element.offsetParent;
}

function getContainingBlock(element: Element) {
  let currentNode: Node | null = getParentNode(element);

  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }

  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
export function getOffsetParent(element: Element): Element | Window {
  const window = getWindow(element);

  if (!isHTMLElement(element)) {
    return window;
  }

  let offsetParent = getTrueOffsetParent(element);

  while (
    offsetParent &&
    isTableElement(offsetParent) &&
    getComputedStyle(offsetParent).position === 'static'
  ) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (
    offsetParent &&
    (getNodeName(offsetParent) === 'html' ||
      (getNodeName(offsetParent) === 'body' &&
        getComputedStyle(offsetParent).position === 'static' &&
        !isContainingBlock(offsetParent)))
  ) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
