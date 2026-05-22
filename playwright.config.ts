import { defineConfig, devices } from "@playwright/test";
import { PageObjectFixtures } from "./Fixtures/PageObjectFixtures";
import { productData } from "./data";

if (!process.env.NODE_ENV) {
  require("dotenv").config({ path: `${__dirname}//envs//.env.test` });
} else {
  require("dotenv").config({
    path: `${__dirname}//envs//.env.${process.env.NODE_ENV}`,
  });
}

export default defineConfig<PageObjectFixtures>({
  testDir: "./tests",
  timeout: 60 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "blob" : "html",
  use: {
    trace: "on-first-retry",
    testIdAttribute: "id",
  },

  projects: [
    {
      name: "setupChromium",
      testMatch: /.*\.auth\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        productData: productData.testEnv,
      },
    },
    {
      name: "setupFirefox",
      testMatch: /.*\.auth\.ts/,
      use: {
        ...devices["Desktop Firefox"],
        productData: productData.testEnv,
      },
    },
    {
      name: "setupWebkit",
      testMatch: /.*\.auth\.ts/,
      use: {
        ...devices["Desktop Safari"],
        productData: productData.testEnv,
      },
    },
    {
      name: "chromium",
      testMatch: /.*\.e2e\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        productData: productData.testEnv,
        // Use the chromium storage state file for the chromium project
        storageState: `playwright/.auth/chromium/user.json`,
      },
      dependencies: ["setupChromium"],
    },

    {
      name: "firefox",
      testMatch: /.*\.e2e\.ts/,
      use: {
        ...devices["Desktop Firefox"],
        productData: productData.testEnv,
        storageState: `playwright/.auth/firefox/user.json`,
      },
      dependencies: ["setupFirefox"],
    },

    {
      name: "webkit",
      testMatch: /.*\.e2e\.ts/,
      use: {
        ...devices["Desktop Safari"],
        productData: productData.testEnv,
        storageState: `playwright/.auth/webkit/user.json`,
      },
      dependencies: ["setupWebkit"],
    },
  ],
});
