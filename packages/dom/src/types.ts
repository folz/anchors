import {sides} from './enums';

export type Alignment = 'start' | 'end';
export type Side = (typeof sides)[number];
export type AlignedPlacement = `${Side}-${Alignment}`;
export type Placement = Side | AlignedPlacement;
export type Strategy = 'absolute' | 'fixed';
export type Axis = 'x' | 'y';
export type Length = 'width' | 'height';

/**
 * Function option to derive middleware options from state.
 */
export type Derivable<T> = (state: MiddlewareState) => T;

export type Coords = {[key in Axis]: number};

export type SideObject = {[key in Side]: number};

export interface MiddlewareData {
  [key: string]: any;
  arrow?: Partial<Coords> & {
    centerOffset: number;
  };
  autoPlacement?: {
    index?: number;
    overflows: Array<{
      placement: Placement;
      overflows: Array<number>;
    }>;
  };
  flip?: {
    index?: number;
    overflows: Array<{
      placement: Placement;
      overflows: Array<number>;
    }>;
  };
  hide?: {
    referenceHidden?: boolean;
    escaped?: boolean;
    referenceHiddenOffsets?: SideObject;
    escapedOffsets?: SideObject;
  };
  offset?: Coords;
  shift?: Coords;
}

export interface ComputePositionConfig {
  /**
   * Where to place the floating element relative to the reference element.
   */
  placement?: Placement;
  /**
   * The strategy to use when positioning the floating element.
   */
  strategy?: Strategy;
  /**
   * Array of middleware objects to modify the positioning or provide data for
   * rendering.
   */
  middleware?: Array<Middleware | null | undefined | false>;
}

export interface ComputePositionReturn extends Coords {
  /**
   * The final chosen placement of the floating element.
   */
  placement: Placement;
  /**
   * The strategy used to position the floating element.
   */
  strategy: Strategy;
  /**
   * Object containing data returned from all middleware, keyed by their name.
   */
  middlewareData: MiddlewareData;
}

export interface MiddlewareReturn extends Partial<Coords> {
  data?: {
    [key: string]: any;
  };
  reset?:
    | true
    | {
        placement?: Placement;
        rects?: true | ElementRects;
      };
}

export type Middleware = {
  name: string;
  options?: any;
  fn: (state: MiddlewareState) => MiddlewareReturn;
};

export type Dimensions = {[key in Length]: number};

export type Rect = Coords & Dimensions;

export interface ElementRects {
  reference: Rect;
  floating: Rect;
}

export interface Elements {
  reference: ReferenceElement;
  floating: FloatingElement;
}

export interface MiddlewareState extends Coords {
  initialPlacement: Placement;
  placement: Placement;
  strategy: Strategy;
  middlewareData: MiddlewareData;
  elements: Elements;
  rects: ElementRects;
}

export type ClientRectObject = Rect & SideObject;
export type Padding = number | Partial<SideObject>;
export type Boundary = 'clippingAncestors' | Element | Array<Element> | Rect;
export type RootBoundary = 'viewport' | 'document' | Rect;
export type ElementContext = 'reference' | 'floating';

export interface NodeScroll {
  scrollLeft: number;
  scrollTop: number;
}

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */
export interface VirtualElement {
  getBoundingClientRect(): ClientRectObject;
  contextElement?: Element;
}

export type ReferenceElement = Element | VirtualElement;
export type FloatingElement = HTMLElement;
