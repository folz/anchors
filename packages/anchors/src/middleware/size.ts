import {type DetectOverflowOptions, detectOverflow} from '../detectOverflow';
import {evaluate} from '../evaluate';
import {getAlignment} from '../getAlignment';
import {getCssDimensions} from '../getCssDimensions';
import {getMainAxisFromPlacement} from '../getMainAxisFromPlacement';
import {getSide} from '../getSide';
import {isRTL} from '../isRTL';
import {max, min} from '../math';
import type {Derivable, Middleware, MiddlewareState} from '../types';

export type SizeOptions = Partial<
  DetectOverflowOptions & {
    /**
     * Function that is called to perform style mutations to the floating element
     * to change its size.
     * @default undefined
     */
    apply(
      args: MiddlewareState & {
        availableWidth: number;
        availableHeight: number;
      }
    ): void | Promise<void>;
  }
>;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
export const size = (
  options: SizeOptions | Derivable<SizeOptions> = {}
): Middleware => ({
  name: 'size',
  options,
  fn(state) {
    const {placement, rects, elements} = state;

    const {apply = () => {}, ...detectOverflowOptions} = evaluate(
      options,
      state
    );

    const overflow = detectOverflow(state, detectOverflowOptions);
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const axis = getMainAxisFromPlacement(placement);
    const isXAxis = axis === 'x';
    const {width, height} = rects.floating;

    let heightSide: 'top' | 'bottom';
    let widthSide: 'left' | 'right';

    if (side === 'top' || side === 'bottom') {
      heightSide = side;
      widthSide =
        alignment === (isRTL(elements.floating) ? 'start' : 'end')
          ? 'left'
          : 'right';
    } else {
      widthSide = side;
      heightSide = alignment === 'end' ? 'top' : 'bottom';
    }

    const overflowAvailableHeight = height - overflow[heightSide];
    const overflowAvailableWidth = width - overflow[widthSide];

    const noShift = !state.middlewareData.shift;

    let availableHeight = overflowAvailableHeight;
    let availableWidth = overflowAvailableWidth;

    if (isXAxis) {
      const maximumClippingWidth = width - overflow.left - overflow.right;
      availableWidth =
        alignment || noShift
          ? min(overflowAvailableWidth, maximumClippingWidth)
          : maximumClippingWidth;
    } else {
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      availableHeight =
        alignment || noShift
          ? min(overflowAvailableHeight, maximumClippingHeight)
          : maximumClippingHeight;
    }

    if (noShift && !alignment) {
      const xMin = max(overflow.left, 0);
      const xMax = max(overflow.right, 0);
      const yMin = max(overflow.top, 0);
      const yMax = max(overflow.bottom, 0);

      if (isXAxis) {
        availableWidth =
          width -
          2 *
            (xMin !== 0 || xMax !== 0
              ? xMin + xMax
              : max(overflow.left, overflow.right));
      } else {
        availableHeight =
          height -
          2 *
            (yMin !== 0 || yMax !== 0
              ? yMin + yMax
              : max(overflow.top, overflow.bottom));
      }
    }

    apply({...state, availableWidth, availableHeight});

    const nextDimensions = getCssDimensions(elements.floating);

    if (width !== nextDimensions.width || height !== nextDimensions.height) {
      return {
        reset: {
          rects: true,
        },
      };
    }

    return {};
  },
});
