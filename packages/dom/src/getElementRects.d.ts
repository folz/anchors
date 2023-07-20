import { FloatingElement, ReferenceElement, Strategy } from './types';
export declare const getElementRects: ({ reference, floating, strategy, }: {
    reference: ReferenceElement;
    floating: FloatingElement;
    strategy: Strategy;
}) => {
    reference: import("./types").Rect;
    floating: {
        width: number;
        height: number;
        $?: boolean | undefined;
        x: number;
        y: number;
    };
};
