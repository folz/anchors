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
                <div className="text-center text-xl text-purple-200 dark:prose-invert sm:text-left lg:text-2xl leading-relaxed lg:leading-relaxed">
                  <h1 className="inline bg-gradient-to-r from-[#e06c75] via-[#fac570] to-[#67cce5] bg-clip-text text-6xl font-bold text-transparent">
                    Anchors
                  </h1>{' '}
                  is a utility library for position anchoring.{' '}
                  <span className="prose dark:prose-invert text-lg">
                    It helps you create{' '}
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
                    like tooltips, popovers, and dropdowns, built
                    on Floating UI's time-tested position solver.
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
                    href="https://github.com/folz/anchors"
                    className="flex items-center gap-2 rounded border border-gray-50 bg-gray-900 px-4 py-3 font-semibold text-gray-50 opacity-90 shadow-lg transition hover:opacity-100 hover:shadow-xl sm:text-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      focusable="false"
                      fill="currentColor"
                      aria-label="GitHub"
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
                Simple, Robust Anchoring
              </h2>
            </div>
            <p className="prose text-left text-xl dark:prose-invert lg:text-2xl lg:leading-normal">
              Anchor any floating element onto any other element.
              Use <strong>placement strategies</strong> to
              customize the position and behavior of tooltips,
              popovers, dropdowns, and more to your heart's
              content.
            </p>
            <p className="text-md text-left dark:prose-invert lg:text-lg">
              (
              <span className="bg-gradient-to-r from-[#e06c75] via-[#fac570] to-[#67cce5] bg-clip-text font-bold text-transparent">
                Anchors
              </span>{' '}
              deals with the tricky bits for you – it correctly
              handles scrolling, overflow, positioning, layout,
              and much more.)
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
                  © 2023 • MIT License
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
