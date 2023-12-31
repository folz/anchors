<p align="center">
  <img width="255.5px" height="377.5px" src="https://github.com/folz/anchors/blob/main/website/assets/anchors.png" alt="Anchors">
<p>

[Anchors](https://folz.github.io/anchors) is a utility library for position
anchoring. It helps you create floating element interactions like tooltips,
popovers, and dropdowns, using the time-tested position solver of Floating UI.

```tsx
import React from 'react';
import {computePosition, roundByDPR, shift} from '@folz/anchors';
import {useAtomValue} from 'jotai';
import {mouseCoords$} from './atoms';

/**
 * A layout component anchored to track the mouse cursor position.
 */
export const Mousetip = (props: Props) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const mouseCoords = useAtomValue(mouseCoords$);

  React.useLayoutEffect(() => {
    if (!ref.current) return;

    const {x, y} = computePosition(mouseCoords, ref.current, {
      placement: 'top',
      middleware: [shift({crossAxis: true})],
    });

    Object.assign(ref.current.style, {
      top: `0px`,
      left: `0px`,
      transform: `translate(${roundByDPR(x)}px, ${roundByDPR(y)}px)`,
    });
  }, [mouseCoords]);

  return <span ref={ref}>{props.children}</span>;
};

type Props = React.PropsWithChildren<{}>;
```

<details>
<summary><code>export const mouseCoords$ = </code></summary>

```tsx
import {atom} from 'jotai';
import {radEventListener} from 'rad-event-listener';

export const mouse$ = atom({x: 0, y: 0});
mouse$.onMount = (setAtom) =>
  radEventListener(window, 'mousemove', ({clientX: x, clientY: y}) => {
    setAtom({x, y});
  });

export const mouseCoords$ = atom((get) => {
  const {x, y} = get(mouse$);

  return {
    getBoundingClientRect() {
      return {width: 0, height: 0, x, y, left: x, right: x, top: y, bottom: y};
    },
  };
});
```

</details>

## Why

Anchoring a floating element's onto another element means the floating element's
position should be relative to the position of that other UI element. On the
web, implementing this is....challenging.

Anchors deals with the tricky bits for you, giving you useful positioning
utilities built on Floating UI that handle scrolling, overflow, positioning,
layout, and much more.

## Install

```shell
npm install @folz/anchors
npm install @folz/anchors-react
# or
yarn add @folz/anchors
yarn add @folz/anchors-react
# or
pnpm install @folz/anchors
pnpm install @folz/anchors-react
```

You can either start by
[reading the Floating UI tutorial](https://floating-ui.com/docs/tutorial), which
teaches you how to use the library by building a basic tooltip, or you can jump
right into the
[Floating UI API documentation](https://floating-ui.com/docs/computePosition).
To translate to Anchors APIs, you'll mostly need to replace `await`s and
`Promise`s in examples with a synchronous equivalent.

Anchors-specific documentation is coming soon™.

## Contributing

This project is a monorepo written in TypeScript using pnpm workspaces. The
website is using Next.js SSG and Tailwind CSS for styling.

- Fork and clone the repo
- Install dependencies in root directory with `pnpm install`
- Build initial package dist files with `pnpm run build`

### Testing

`pnpm --filter "@folz/anchors" run dev` in the root will launch the
`@folz/anchors` development visual tests at `http://localhost:1234`. The
playground uses React to write each test route, bundled by Vite.

Each route has screenshots taken of the page by Playwright to ensure all the
functionalities work as expected; this is an easy, reliable and high-level way
of testing the positioning logic.

Below the main container are UI controls to turn on certain state and options.
Every single combination of state is tested visually via the snapshots to cover
as much as possible.

## Credits

Anchors is a fork of [Floating UI](https://github.com/floating-ui/floating-ui).
At a high level:

- Anchors is synchronous:
  ```ts
  const {x, y, ...rest} = computePosition({
    /* ... */
  });
  ```
- Floating UI is asynchronous:

  ```ts
  computePosition({
    /* ... */
  }).then(({x, y, ...rest}) => {
    /* ... */
  });

  // or

  const {x, y, ...rest} = await computePosition({
    /* ... */
  });
  ```

- Anchors removes Floating UI's "platform" abstraction. It targets DOM APIs
  directly
- Anchors will probably not support React Native
  - Floating UI currently supports React Native
  - Removing React Native was the tradeoff that enabled a synchronous API
    - This also meant we could remove some abstraction layers, which means
      Anchors runs less code per `computePosition()`
    - _(This is pretty much the main difference between the projects.)_
- Anchors currently does not support Vue
  - Floating UI currently supports Vue
  - Anchors should be able to support Vue in the future

## Behavior parity with Floating UI

Anchors will aim to keep behavior parity with Floating UI by cherry-picking new
Floating UI changes into this repository. If you experience a difference in
behavior between Anchors and Floating UI, please open an issue.

## License

MIT
