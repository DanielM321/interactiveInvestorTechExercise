import { defineConfig, devices } from "@playwright/test";
import { PageObjectFixtures } from "./Fixtures/PageObjectFixtures";

export default defineConfig<PageObjectFixtures>({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
    testIdAttribute: "id",
  },

  projects: [
    {
      name: "chromium",
      testMatch: /.*\.e2e\.ts/,
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      testMatch: /.*\.e2e\.ts/,
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      testMatch: /.*\.e2e\.ts/,
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
