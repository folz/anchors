import { type ReferenceElement, Boundary, Rect, RootBoundary, Strategy } from './types';
type _C = Map<ReferenceElement, Element[]>;
export declare function getClippingRect({ element, boundary, rootBoundary, strategy, _c, }: {
    element: Element;
    boundary: Boundary;
    rootBoundary: RootBoundary;
    strategy: Strategy;
    _c: _C;
}): Rect;
export {};
