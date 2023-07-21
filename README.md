<p align="center">
  <img width="255.5px" height="377.5px" src="https://github.com/folz/anchors/blob/main/website/assets/anchors.png" alt="Anchors">
<p>

[Anchors](https://folz.github.io/anchors) is a library that helps you position
floating elements, like tooltips, popovers, dropdowns, and more.

## Why

Floating elements are absolutely positioned, typically anchored to another UI
element. Ensuring a floating element remains anchored next to another element
can be challenging, especially in unique layout contexts like scrolling
containers.

Absolute positioning can also cause problems when the floating element is too
close to the edge of the viewport and becomes obscured, also known as a
collision. When a collision occurs, the position must be adjusted to ensure the
floating element remains visible.

## Getting started

```shell
# npm
npm install @folz/anchors
# yarn
yarn add @folz/anchors
# pnpm
pnpm install @folz/anchors
```

You can either start by
[reading the tutorial](https://floating-ui.com/docs/tutorial), which teaches you
how to use the library by building a basic tooltip, or you can jump right into
the [API documentation](https://floating-ui.com/docs/computePosition).

### React DOM

```shell
# npm
npm install @folz/anchors-react
# yarn
yarn add @folz/anchors-react
# pnpm
pnpm install @folz/anchors-react
```

## Contributing

This project is a monorepo written in TypeScript using pnpm workspaces. The
website is using Next.js SSG and Tailwind CSS for styling.

- Fork and clone the repo
- Install dependencies in root directory with `pnpm install`
- Build initial package dist files with `pnpm run build`

### Testing

`pnpm --filter "@folz/anchors" run dev` in the root will launch the
`@floating-ui/dom` development visual tests at `http://localhost:1234`. The
playground uses React to write each test route, bundled by Vite.

Each route has screenshots taken of the page by Playwright to ensure all the
functionalities work as expected; this is an easy, reliable and high-level way
of testing the positioning logic.

Below the main container are UI controls to turn on certain state and options.
Every single combination of state is tested visually via the snapshots to cover
as much as possible.

## Credits

Anchors is a fork of [Floating UI](https://floating-ui.com/). At a high level:

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
    ```
- Anchors will probably not support React Native
  - This was the tradeoff that enabled a synchronous API.
  - Floating UI currently supports React Native.
- Anchors currently does not support Vue.
  - Anchors should be able to support Vue in the future, however.
  - Floating UI currently supports Vue.

Otherwise, Anchors will aim to keep behavior parity with Floating UI, by
cherry-picking new Floating UI changes into this repository. If you experience a
difference in behavior between Anchors and Floating UI, please open an issue.

## License

MIT
