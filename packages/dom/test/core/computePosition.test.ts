import {
  computePosition,
  FloatingElement,
  ReferenceElement,
} from '@floating-ui/dom';

const reference = {} as ReferenceElement;
const floating = {} as FloatingElement;
// const referenceRect = {x: 0, y: 0, width: 100, height: 100};
// const floatingRect = {x: 0, y: 0, width: 50, height: 50};
// const platform = {
//   getElementRects: () => ({
//     reference: referenceRect,
//     floating: floatingRect,
//   }),
//   getCssDimensions: () => ({width: 10, height: 10}),
// } as unknown;

test('returned data', () => {
  const {x, y, placement, strategy, middlewareData} = computePosition(
    reference,
    floating,
    {
      placement: 'top',
      middleware: [{name: 'custom', fn: () => ({data: {property: true}})}],
    }
  );

  expect(placement).toBe('top');
  expect(strategy).toBe('absolute');
  expect(x).toBe(25);
  expect(y).toBe(-50);
  expect(middlewareData).toEqual({
    custom: {
      property: true,
    },
  });
});

test('middleware', () => {
  const {x, y} = computePosition(reference, floating);

  const {x: x2, y: y2} = computePosition(reference, floating, {
    middleware: [
      {
        name: 'test',
        fn: ({x, y}) => ({x: x + 1, y: y + 1}),
      },
    ],
  });

  expect([x2, y2]).toEqual([x + 1, y + 1]);
});

test('middlewareData', () => {
  const {middlewareData} = computePosition(reference, floating, {
    middleware: [
      {
        name: 'test',
        fn: () => ({
          data: {
            hello: true,
          },
        }),
      },
    ],
  });

  expect(middlewareData.test).toEqual({hello: true});
});
