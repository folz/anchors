import {getSide} from './getSide';
import type {Axis, Placement} from './types';

export function getMainAxisFromPlacement(placement: Placement): Axis {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}
