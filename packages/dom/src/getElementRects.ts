import {getCssDimensions} from './getCssDimensions';
import {getOffsetParent} from './getOffsetParent';
import {getRectRelativeToOffsetParent} from './getRectRelativeToOffsetParent';
import {FloatingElement, ReferenceElement, Strategy} from './types';

export const getElementRects = function ({
  reference,
  floating,
  strategy,
}: {
  reference: ReferenceElement;
  floating: FloatingElement;
  strategy: Strategy;
}) {
  return {
    reference: getRectRelativeToOffsetParent(
      reference,
      getOffsetParent(floating),
      strategy
    ),
    floating: {x: 0, y: 0, ...getCssDimensions(floating)},
  };
};
