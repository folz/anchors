<p align="center">
  <img src="https://github.com/folz/anchors/blob/master/website/assets/anchors.png" alt="Anchors">
<p>

[Anchors](https://folz.github.io/anchors) is a library to position floating
elements in robust and configurable ways. It lets you create tooltips, popvers,
dropdowns, and more.

It is a fork + rewrite of [Floating UI](https://floating-ui.com/). At a high
level:

- Anchors is synchronous; Floating UI is asynchronous
  - You write `const {x, y, ...rest} = computePosition({ ... });`
  - Compare to Floating UI's API of
    `computePosition({ ... }).then(({x, y, ...rest}) => ...);`
- Anchors will probably not support React Native; Floating UI does.
  - This was the tradeoff it made to gain a synchronous API.
- Anchors currently does not support Vue; Floating UI does.
  - Anchors should be able to support Vue in the future, however.
- Otherwise, Anchors seeks to maintain behavior parity with Floating UI
  - By cherry-picking new PRs from Floating UI into the Anchors repository

## Why

Floating elements are absolutely positioned, typically anchored to another UI
element. Ensuring a floating element remains anchored next to another element
can be challenging, especially in unique layout contexts like scrolling
containers.

Absolute positioning can also cause problems when the floating element is too
close to the edge of the viewport and becomes obscured, also known as a
collision. When a collision occurs, the position must be adjusted to ensure the
floating element remains visible.

## Install

To install Anchors, you can use a package manager like npm or a
[CDN](https://floating-ui.com/docs/getting-started#cdn). There are different
versions available for different platforms.

### Vanilla

Use on the web with vanilla JavaScript.

```shell
# npm
npm install @folz/anchors
# or
yarn add @folz/anchors
# or
pnpm install @folz/anchors
```

You can either start by
[reading the tutorial](https://floating-ui.com/docs/tutorial), which teaches you
how to use the library by building a basic tooltip, or you can jump right into
the [API documentation](https://floating-ui.com/docs/computePosition).

### React

Use with [React DOM](https://floating-ui.com/docs/react) or
[React Native](https://floating-ui.com/docs/react-native).

#### React DOM

```shell
# Positioning + interactions
npm install @floating-ui/react

# Positioning only (smaller size)
npm install @floating-ui/react-dom
```

### Canvas or other platforms

If you're targeting a platform other than the vanilla DOM (web), React, or React
Native, you can create your own
[Platform](https://floating-ui.com/docs/platform). This allows you to support
things like Canvas/WebGL, or other platforms that can run JavaScript.

```shell
npm install @floating-ui/core
```

## Contributing

This project is a monorepo written in TypeScript using npm workspaces. The
website is using Next.js SSG and Tailwind CSS for styling.

- Fork and clone the repo
- Install dependencies in root directory with `npm install`
- Build initial package dist files with `npm run build`

### Testing grounds

#### DOM

`npm -w packages/dom run dev` in the root will launch the `@floating-ui/dom`
development visual tests at `http://localhost:1234`. The playground uses React
to write each test route, bundled by Vite.

Each route has screenshots taken of the page by Playwright to ensure all the
functionalities work as expected; this is an easy, reliable and high-level way
of testing the positioning logic.

Below the main container are UI controls to turn on certain state and options.
Every single combination of state is tested visually via the snapshots to cover
as much as possible.

## License

MIT
