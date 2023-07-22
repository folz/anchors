import {type Padding, type SideObject} from './types';

export function getSideObjectFromPadding(padding: Padding): SideObject {
  return typeof padding !== 'number'
    ? {top: 0, right: 0, bottom: 0, left: 0, ...padding}
    : {top: padding, right: padding, bottom: padding, left: padding};
}
