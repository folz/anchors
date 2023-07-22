import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  // testDir: './tests',

  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  workers: process.env.CI ? 1 : undefined,
  expect: {
    toMatchSnapshot: {
      maxDiffPixels: 448,
    },
  },
  use: {
    launchOptions: {
      ignoreDefaultArgs: ['--hide-scrollbars'],
    },
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
    // {
    //   name: 'firefox',
    //   use: {...devices['Desktop Firefox']},
    // },
    // {
    //   name: 'webkit',
    //   use: {...devices['Desktop Safari']},
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: {...devices['Pixel 5']},
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {...devices['iPhone 12']},
    // },
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
  webServer: {
    command: 'pnpm run dev',
    port: 1234,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
