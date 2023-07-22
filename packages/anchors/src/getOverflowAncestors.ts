import {getParentNode} from './getParentNode';
import {getWindow} from './getWindow';
import {isHTMLElement, isLastTraversableNode, isOverflowElement} from './is';

type OverflowAncestors = Array<Element | Window | VisualViewport>;

export function getOverflowAncestors(
  node: Node,
  list: OverflowAncestors = []
): OverflowAncestors {
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === node.ownerDocument?.body;
  const win = getWindow(scrollableAncestor);

  if (isBody) {
    return list.concat(
      win,
      win.visualViewport || [],
      isOverflowElement(scrollableAncestor) ? scrollableAncestor : []
    );
  }

  return list.concat(
    scrollableAncestor,
    getOverflowAncestors(scrollableAncestor)
  );
}

function getNearestOverflowAncestor(node: Node): HTMLElement {
  const parentNode = getParentNode(node);

  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument
      ? node.ownerDocument.body
      : (node as Document).body;
  }

  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }

  return getNearestOverflowAncestor(parentNode);
}
