import {convertOffsetParentRelativeRectToViewportRelativeRect} from './convertOffsetParentRelativeRectToViewportRelativeRect';
import {evaluate} from './evaluate';
import {getClippingRect} from './getClippingRect';
import {getDocumentElement} from './getDocumentElement';
import {getOffsetParent} from './getOffsetParent';
import {getSideObjectFromPadding} from './getPaddingObject';
import {getScale} from './getScale';
import {isElement} from './isElement';
import {rectToClientRect} from './rectToClientRect';
import type {
  Boundary,
  Derivable,
  ElementContext,
  MiddlewareState,
  Padding,
  RootBoundary,
  SideObject,
} from './types';

export type DetectOverflowOptions = Partial<{
  /**
   * The clipping element(s) or area in which overflow will be checked.
   * @default 'clippingAncestors'
   */
  boundary: Boundary;

  /**
   * The root clipping area in which overflow will be checked.
   * @default 'viewport'
   */
  rootBoundary: RootBoundary;

  /**
   * The element in which overflow is being checked relative to a boundary.
   * @default 'floating'
   */
  elementContext: ElementContext;

  /**
   * Whether to check for overflow using the alternate element's boundary
   * (`clippingAncestors` boundary only).
   * @default false
   */
  altBoundary: boolean;

  /**
   * Virtual padding for the resolved overflow detection offsets.
   * @default 0
   */
  padding: Padding;
}>;

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
export function detectOverflow(
  state: MiddlewareState,
  options: DetectOverflowOptions | Derivable<DetectOverflowOptions> = {}
): SideObject {
  const {x, y, rects, elements, strategy} = state;

  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0,
  } = evaluate(options, state);

  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];

  const clippingClientRect = rectToClientRect(
    getClippingRect({
      element: isElement(element)
        ? element
        : element.contextElement || getDocumentElement(elements.floating),
      boundary,
      rootBoundary,
      strategy,
      // TODO
      _c: new Map(),
    })
  );

  const rect =
    elementContext === 'floating' ? {...rects.floating, x, y} : rects.reference;

  const offsetParent = getOffsetParent(elements.floating);
  const offsetScale = isElement?.(offsetParent)
    ? getScale(offsetParent) || {x: 1, y: 1}
    : {x: 1, y: 1};

  const elementClientRect = rectToClientRect(
    convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy,
    })
  );

  return {
    top:
      (clippingClientRect.top - elementClientRect.top + paddingObject.top) /
      offsetScale.y,
    bottom:
      (elementClientRect.bottom -
        clippingClientRect.bottom +
        paddingObject.bottom) /
      offsetScale.y,
    left:
      (clippingClientRect.left - elementClientRect.left + paddingObject.left) /
      offsetScale.x,
    right:
      (elementClientRect.right -
        clippingClientRect.right +
        paddingObject.right) /
      offsetScale.x,
  };
}
