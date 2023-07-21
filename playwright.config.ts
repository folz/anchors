import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
  workers: 4,
  fullyParallel: true,
  use: {
    launchOptions: {
      ignoreDefaultArgs: ['--hide-scrollbars'],
    },
  },
  webServer: {
    command: 'npm -w packages/dom run dev',
    port: 1234,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
