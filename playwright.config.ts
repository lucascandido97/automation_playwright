import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const isMainWorker = !process.env.TEST_WORKER_INDEX;

export default defineConfig({
  captureGitInfo : isMainWorker ? { commit: true, diff: true }: undefined,

  forbidOnly: !!process.env.CI,

  fullyParallel: false,

  name: 'Playwright Automation Tests',

  outputDir: './test-results/',

  preserveOutput: 'failures-only',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  quiet: !!process.env.CI,

  reportSlowTests: {
    max: 0,
    threshold: 120000,
  },

  reporter: "html",

  retries: !!process.env.CI ? 3 : 0,

  testDir: './tests',

  use: {
    baseURL: 'https://www.automationexercise.com',
    colorScheme: 'dark',
    geolocation: { longitude: -23.5505, latitude: -46.6333 },
    locale: 'en-US',
    screenshot: 'only-on-failure',
    timezoneId: 'America/Sao_Paulo',
    trace: 'on-first-retry',
  }
});
