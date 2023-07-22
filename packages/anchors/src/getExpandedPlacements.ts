import {getOppositeAlignmentPlacement} from './getOppositeAlignmentPlacement';
import {getOppositePlacement} from './getOppositePlacement';
import type {Placement} from './types';

export function getExpandedPlacements(placement: Placement): Array<Placement> {
  const oppositePlacement = getOppositePlacement(placement);

  return [
    getOppositeAlignmentPlacement(placement),
    oppositePlacement,
    getOppositeAlignmentPlacement(oppositePlacement),
  ];
}
