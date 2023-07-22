import {FloatingDelayGroup} from '@floating-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart,
  Edit,
  Heart,
  Share,
} from 'react-feather';

import Anchors from '../assets/anchors.png';
import {Button} from '../lib/components/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogTrigger,
} from '../lib/components/Dialog';
import {ComboboxDemo} from '../lib/components/Home/Combobox';
import {
  Menu,
  MenuItem,
} from '../lib/components/Home/DropdownMenu';
import {PopoverDemo} from '../lib/components/Home/Popover';
import {
  Arrow,
  Flip,
  Placement,
  Shift,
  Size,
  Virtual,
} from '../lib/components/Home/PositioningDemos';
import {SelectDemo} from '../lib/components/Home/Select';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../lib/components/Tooltip';

function HomePage() {
  return (
    <>
      <Head>
        <title>
          Anchors — Create tooltips, popovers, dropdowns, and
          more.
        </title>
      </Head>
      <div className="flex flex-col gap-16 sm:gap-24">
        <header className="font-satoshi">
          <div className="container mx-auto max-w-screen-lg px-4 pt-4 sm:px-8 sm:pt-8 md:pt-16">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8 md:items-center">
              <Image
                {...Anchors}
                alt="Anchors"
                className="h-1/3 w-1/3"
              />

              <div className="flex flex-col items-center gap-8 sm:items-stretch">
                <div className="text-center text-xl leading-relaxed text-purple-200 dark:prose-invert sm:text-left lg:text-2xl">
                  <h1 className="inline bg-gradient-to-r from-[#e06c75] via-[#fac570] to-[#67cce5] bg-clip-text text-6xl font-bold text-transparent">
                    Anchors
                  </h1>
                  <span>
                    {' '}
                    is a library to position{' '}
                    <Tooltip noRest>
                      <TooltipTrigger asChild>
                        <strong
                          tabIndex={0}
                          role="button"
                          className="darkLfrom-blue-500 relative cursor-default font-semibold decoration-purple-300/70"
                          style={{
                            textDecorationLine: 'underline',
                            textUnderlineOffset: 8,
                            textDecorationThickness: 1,
                          }}
                        >
                          floating elements
                        </strong>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="p-2 text-lg">
                          A <strong>floating element</strong> is
                          one that floats on top of the UI
                          without disrupting the flow of content,
                          like this one!
                        </div>
                      </TooltipContent>
                    </Tooltip>{' '}
                    in robust and configurable ways.
                  </span>
                </div>

                <div className="relative">
                  <span className="pointer-events-none absolute m-4 select-none">
                    ${' '}
                  </span>
                  <input
                    className="border-1 rounded border-black bg-gray-800 p-4 pl-10 font-mono shadow-md"
                    onClick={(event) => {
                      event.target.select();
                      navigator?.clipboard?.writeText(
                        event.target.value
                      ) ?? document.execCommand('copy');
                    }}
                    readOnly
                    value="npm i @folz/anchors"
                  />
                </div>

                <div className="relative flex flex-row items-center justify-start gap-8">
                  <Link
                    href="/docs/getting-started"
                    className="hover:saturate-110 flex items-center gap-2 whitespace-nowrap rounded bg-gradient-to-br from-red-200 via-violet-200 to-cyan-300 px-4 py-3 font-semibold text-gray-800 shadow-lg transition hover:shadow-xl hover:brightness-110 sm:text-lg"
                  >
                    Get Started
                  </Link>
                  <a
                    href="https://github.com/floating-ui/floating-ui"
                    className="flex items-center gap-2 rounded border border-gray-50 bg-gray-900 px-4 py-3 font-semibold text-gray-50 opacity-90 shadow-lg transition hover:opacity-100 hover:shadow-xl sm:text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      focusable="false"
                      fill="currentColor"
                    >
                      <path
                        d="M12.006 2a10 10 0 00-3.16 19.489c.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341a2.648 2.648 0 00-1.11-1.463c-.908-.62.068-.608.068-.608a2.1 2.1 0 011.532 1.03 2.13 2.13 0 002.91.831 2.137 2.137 0 01.635-1.336c-2.22-.253-4.555-1.11-4.555-4.943a3.865 3.865 0 011.03-2.683 3.597 3.597 0 01.098-2.647s.84-.269 2.75 1.026a9.478 9.478 0 015.007 0c1.909-1.294 2.747-1.026 2.747-1.026a3.592 3.592 0 01.1 2.647 3.859 3.859 0 011.027 2.683c0 3.842-2.338 4.687-4.566 4.935a2.387 2.387 0 01.68 1.852c0 1.336-.013 2.415-.013 2.743 0 .267.18.578.688.48A10.001 10.001 0 0012.006 2z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="font-satoshi flex flex-col items-stretch gap-8">
          <div className="container mx-auto flex max-w-screen-lg flex-col items-start gap-4 px-4 sm:px-8">
            <div>
              <h2 className="inline-block bg-gradient-to-r from-[#e06c75] via-[#fac570] to-[#67cce5] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                Robust Anchor Positioning
              </h2>
            </div>
            <p className="prose text-left text-xl dark:prose-invert lg:text-2xl lg:leading-normal">
              Position any floating element next to any other
              anchor element. Use{' '}
              <strong>placement strategies</strong> to customize
              the position of tooltips, popovers, dropdowns, and
              more to your heart's content.{' '}
            </p>
            <p className="text-md text-left dark:prose-invert lg:text-lg">
              (
              <span className="bg-gradient-to-r from-[#e06c75] via-[#fac570] to-[#67cce5] bg-clip-text font-bold text-transparent">
                Anchors
              </span>{' '}
              deals with the tricky bits for you: it handles
              scroll overflow, CSS offsets, positioning contexts,
              and more, powered by Floating UI's constraint
              engine.)
            </p>
          </div>
          <div className="container mx-auto grid max-w-screen-xl max-w-screen-xl gap-8 md:px-4 lg:grid-cols-2">
            <Placement />
            <Shift />
            <Flip />
            <Size />
            <Arrow />
            <Virtual />
          </div>

          <div className="font-satoshi container mx-auto flex max-w-screen-lg flex-col items-start gap-4 px-4 sm:px-8">
            <div>
              <h2 className="inline-block bg-gradient-to-r from-[#e06c75] via-[#fac570] to-[#67cce5] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                Interactions for React
              </h2>
            </div>
            <p className="prose text-left text-xl dark:prose-invert lg:text-2xl lg:leading-relaxed">
              Build your own floating UI patterns with React.
              From simple tooltips to select menus, you have full
              control while ensuring{' '}
              <strong>fully accessible</strong> UI experiences.
            </p>
          </div>

          <div className="container mx-auto grid max-w-screen-xl gap-8 dark:text-black sm:grid-cols-2 md:px-4 lg:grid-cols-3">
            <div className="flex h-[18rem] flex-col justify-between bg-white p-10 text-center shadow dark:bg-gray-700 dark:text-gray-100 sm:h-[19rem] sm:rounded-lg md:h-[18rem]">
              <FloatingDelayGroup
                delay={{open: 1000, close: 150}}
                timeoutMs={200}
              >
                <div>
                  <h3 className="mb-6 text-3xl font-bold">
                    Tooltips
                  </h3>
                  <p>
                    Floating elements that display information
                    related to an anchor element on hover or
                    focus.
                  </p>
                </div>
                <div className="flex justify-center gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        aria-label="Like"
                        className="rounded-full p-3 hover:text-red-500 dark:hover:text-red-300"
                      >
                        <Heart size={26} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Like</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        aria-label="Share"
                        className="rounded-full p-3 hover:text-blue-500 dark:hover:text-blue-300"
                      >
                        <Share size={26} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Share</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        aria-label="Stats"
                        className="rounded-full p-3 hover:text-orange-500 dark:hover:text-orange-300"
                      >
                        <BarChart size={26} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Stats</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        aria-label="Edit"
                        className="rounded-full p-3 hover:text-green-500 dark:hover:text-green-300"
                      >
                        <Edit size={26} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Edit</TooltipContent>
                  </Tooltip>
                </div>
              </FloatingDelayGroup>
            </div>

            <div className="flex h-[18rem] flex-col justify-between bg-white p-10 text-center shadow dark:bg-gray-700 dark:text-gray-100 sm:h-[19rem] sm:rounded-lg md:h-[18rem]">
              <div>
                <h3 className="mb-6 text-3xl font-bold">
                  Popovers
                </h3>
                <p>
                  Floating elements that display an anchored
                  interactive dialog on click.
                </p>
              </div>
              <div className="flex justify-center gap-1">
                <PopoverDemo />
              </div>
            </div>

            <div className="flex h-[18rem] flex-col justify-between bg-white p-10 text-center shadow dark:bg-gray-700 dark:text-gray-100 sm:h-[19rem] sm:rounded-lg md:h-[18rem]">
              <div>
                <h3 className="mb-6 text-3xl font-bold">
                  Select Menus
                </h3>
                <p>
                  Floating elements that display a list of
                  options to choose from on click.
                </p>
              </div>
              <div className="flex justify-center gap-1">
                <SelectDemo />
              </div>
            </div>

            <div className="flex h-[18rem] flex-col justify-between bg-white p-10 text-center shadow dark:bg-gray-700 dark:text-gray-100 sm:h-[19rem] sm:rounded-lg md:h-[18rem]">
              <div>
                <h3 className="mb-6 text-3xl font-bold">
                  Comboboxes
                </h3>
                <p>
                  Floating elements that combine an input and a
                  list of searchable options to choose from.
                </p>
              </div>
              <div className="flex justify-center gap-1">
                <ComboboxDemo />
              </div>
            </div>

            <div className="flex h-[18rem] flex-col justify-between bg-white p-10 text-center shadow dark:bg-gray-700 dark:text-gray-100 sm:h-[19rem] sm:rounded-lg md:h-[18rem]">
              <div>
                <h3 className="mb-6 text-3xl font-bold">
                  Dropdown Menus
                </h3>
                <p>
                  Floating elements that display a list of
                  buttons that perform an action.
                </p>
              </div>
              <div className="flex justify-center gap-1">
                <Menu label="Edit balloon">
                  <MenuItem label="Inflate" />
                  <MenuItem label="Deflate" />
                  <MenuItem label="Tie" disabled />
                  <Menu label="Pop with">
                    <MenuItem label="Knife" />
                    <MenuItem label="Pin" />
                    <MenuItem label="Fork" />
                    <MenuItem label="Sword" />
                  </Menu>
                  <Menu label="Change color to">
                    <MenuItem label="Blue" />
                    <MenuItem label="Red" />
                    <MenuItem label="Green" />
                  </Menu>
                  <Menu label="Transform">
                    <MenuItem label="Move" />
                    <MenuItem label="Rotate" />
                    <MenuItem label="Resize" />
                  </Menu>
                </Menu>
              </div>
            </div>

            <div className="flex h-[18rem] flex-col justify-between bg-white p-10 text-center shadow dark:bg-gray-700 dark:text-gray-100 sm:h-[19rem] sm:rounded-lg md:h-[18rem]">
              <div>
                <h3 className="mb-6 text-3xl font-bold">
                  Dialogs
                </h3>
                <p>
                  Floating windows overlaid on the UI, rendering
                  content underneath them inert.
                </p>
              </div>
              <div className="flex justify-center gap-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Delete balloon</Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-lg bg-white p-6">
                    <DialogHeading className="mb-2 text-2xl font-bold">
                      Delete balloon
                    </DialogHeading>
                    <DialogDescription>
                      Are you sure you want to delete?
                    </DialogDescription>
                    <div className="mt-4 flex gap-2">
                      <DialogClose className="w-full cursor-default rounded-lg bg-red-500 p-2 text-white transition-colors hover:bg-red-600">
                        Confirm
                      </DialogClose>
                      <DialogClose className="w-full cursor-default rounded-lg bg-gray-300 p-2 transition-colors hover:bg-slate-200">
                        Cancel
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="container mx-auto max-w-screen-xl px-4 text-center sm:px-8">
            <Link
              href="/docs/react"
              className="inline-block rounded-md bg-rose-500 p-6 font-semibold text-gray-50 transition-colors hover:bg-pink-500 dark:bg-rose-600 sm:text-xl"
            >
              Use Anchors with React{' '}
              <ArrowRight
                className="relative top-[-1px] inline-block"
                size={20}
              />
            </Link>
          </div>

          <div className="container mx-auto flex max-w-screen-lg flex-col items-start gap-4 px-4 sm:px-8 ">
            <div>
              <h2 className="inline-block bg-gradient-to-r from-[#e06c75] via-[#fac570] to-[#67cce5] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                Tree-shakeable & Platform-agnostic
              </h2>
            </div>
            <p className="font-satoshi prose text-left text-xl dark:prose-invert lg:text-2xl lg:leading-relaxed">
              In addition to official bindings for the web and
              for React DOM, Anchors also supports{' '}
              <code className="p-0">
                <span className="text-cyan-600 dark:text-cyan-300">
                  &lt;
                </span>
                <span className="text-red-600 dark:text-red-400">
                  canvas
                </span>
                <span className="text-cyan-600 dark:text-cyan-300">
                  &gt;
                </span>
              </code>
              , and each module is{' '}
              <a
                href="https://bundlejs.com/?q=%40floating-ui%2Fdom&treeshake=%5B%7B%0A++computePosition%2Cshift%2ClimitShift%2Cflip%2Chide%2Coffset%2Carrow%2CautoPlacement%2Csize%2Cinline%2CautoUpdate%0A%7D%5D&config=%7B%22compression%22%3A%22brotli%22%7D"
                className="font-semibold text-rose-600 underline decoration-rose-500/80 decoration-2 underline-offset-4 transition-colors hover:text-gray-1000 hover:decoration-gray-1000 dark:text-rose-300 dark:decoration-rose-300/80 dark:hover:text-gray-50 dark:hover:decoration-gray-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                fully tree-shakeable
              </a>{' '}
              by your bundler:
            </p>
            <div className="font-code grid items-center self-center">
              <div className="text-md mx-auto flex flex-col pr-4 text-center sm:pr-20 sm:text-lg md:pr-40 md:text-xl">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <code className="flex-1 text-right text-blue-600 dark:text-blue-400">
                    computePosition
                    <span className="text-cyan-500 dark:text-cyan-200">
                      ()
                    </span>
                  </code>
                  <span className="text-md text-left text-gray-600 [font-variant-numeric:tabular-nums] dark:text-gray-400">
                    <span className="invisible">+</span>0.6 kB
                  </span>
                </div>
                {[
                  {name: 'shift', size: '0.6 kB'},
                  {name: 'limitShift', size: '0.2 kB'},
                  {name: 'flip', size: '0.8 kB'},
                  {name: 'hide', size: '0.2 kB'},
                  {name: 'offset', size: '0.1 kB'},
                  {name: 'arrow', size: '0.5 kB'},
                  {name: 'autoPlacement', size: '0.4 kB'},
                  {name: 'size', size: '0.3 kB'},
                  {name: 'inline', size: '0.6 kB'},
                  {name: 'autoUpdate', size: '0.3 kB'},
                ].map(({name, size}) => (
                  <div
                    className="mb-2 flex items-center justify-center gap-2"
                    key={name}
                  >
                    <code className="flex-1 text-right text-blue-600 dark:text-blue-400">
                      {name}
                      <span className="text-cyan-500 dark:text-cyan-200">
                        ()
                      </span>
                    </code>
                    <span className="text-md text-left text-green-700 [font-variant-numeric:tabular-nums] dark:text-green-400">
                      +{size}
                    </span>
                  </div>
                ))}
                <div className="mb-2 flex items-center justify-center gap-3">
                  <code className="flex-1 text-right text-gray-600 dark:text-gray-400">
                    DOM platform
                  </code>
                  <span className="text-md text-left text-yellow-700 [font-variant-numeric:tabular-nums] dark:text-yellow-400">
                    +2.5 kB
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="font-satoshi container mx-auto flex max-w-screen-lg flex-col items-start gap-4 px-4 sm:px-8">
            <div>
              <h2 className="inline-block bg-gradient-to-r from-[#e06c75] via-[#fac570] to-[#67cce5] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                Contribute to Anchors
              </h2>
            </div>
            <p className="prose text-left text-xl dark:prose-invert lg:text-2xl lg:leading-relaxed">
              Anchors is free and open source, proudly sponsored
              by the following organizations — consider joining
              them on{' '}
              <a
                className="font-semibold text-rose-600 underline decoration-rose-500/80 decoration-2 underline-offset-4 transition-colors hover:text-gray-1000 hover:decoration-gray-1000 dark:text-rose-300 dark:decoration-rose-300/80 dark:hover:text-gray-50 dark:hover:decoration-gray-50"
                href="https://opencollective.com/floating-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Collective
              </a>
              .
            </p>
          </div>

          <div className="font-satoshi container mx-auto flex max-w-screen-lg flex-col items-start gap-4 px-4 sm:px-8">
            <div>
              <h2 className="inline-block bg-gradient-to-r from-[#e06c75] via-[#fac570] to-[#67cce5] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                Install
              </h2>
            </div>
            <p className="font-satoshi prose text-left text-xl dark:prose-invert lg:text-2xl lg:leading-relaxed">
              Start playing via your package manager or CDN.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow dark:bg-gray-700 dark:text-gray-100">
                <h3 className="mb-4 text-2xl font-bold">
                  Package Manager
                </h3>
                <p className="text-lg">
                  Install with npm, Yarn, or pnpm.
                </p>
                <Link
                  href="/docs/getting-started"
                  className="mt-4 flex items-center gap-2 text-xl font-semibold text-rose-600 dark:text-rose-300"
                >
                  Get started <ArrowRight />
                </Link>
              </div>
              <div className="rounded-lg bg-white p-8 shadow dark:bg-gray-700 dark:text-gray-100">
                <h3 className="mb-4 text-2xl font-bold">CDN</h3>
                <p className="text-lg">
                  Install with the jsDelivr CDN.
                </p>
                <Link
                  href="/docs/getting-started#cdn"
                  className="mt-4 flex items-center gap-2 text-xl font-semibold text-rose-600 dark:text-rose-300"
                >
                  Get started <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="font-satoshi">
          <div className="bg-gray-50 py-8 px-4 text-center shadow dark:border-t dark:border-gray-800 dark:bg-transparent dark:text-gray-500 sm:px-8">
            <div className="container mx-auto flex flex-col gap-3 px-4 sm:px-8">
              <p>
                <strong className="font-semibold">
                  © {new Date().getFullYear()} • MIT License
                </strong>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
