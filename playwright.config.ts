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
  reporter: process.env.CI ? "blob" : "html",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: "on-first-retry",
    testIdAttribute: "id",
  },

  projects: [
    // {
    //   name: "registerUserChrome",
    //   testMatch: /.*\.reg\.ts/,
    //   use: { ...devices["Desktop Chrome"], productData: productData.testEnv },
    // },
    // {
    //   name: "registerUserFirefox",
    //   testMatch: /.*\.reg\.ts/,
    //   use: { ...devices["Desktop Firefox"], productData: productData.testEnv },
    // },
    // {
    //   name: "registerUserWebkit",
    //   testMatch: /.*\.reg\.ts/,
    //   use: { ...devices["Desktop Safari"], productData: productData.testEnv },
    // },
    {
      name: "chromium",
      testMatch: /.*\.e2e\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        productData: productData.testEnv,
        //storageState: `playwright/.auth/chromium/user.json`,
      },
      //dependencies: ["registerUserChrome"],
    },

    {
      name: "firefox",
      testMatch: /.*\.e2e\.ts/,
      use: {
        ...devices["Desktop Firefox"],
        productData: productData.testEnv,
        //storageState: `playwright/.auth/firefox/user.json`,
      },
      //dependencies: ["registerUserFirefox"],
    },

    {
      name: "webkit",
      testMatch: /.*\.e2e\.ts/,
      use: {
        ...devices["Desktop Safari"],
        productData: productData.testEnv,
        //storageState: `playwright/.auth/webkit/user.json`,
      },
      //dependencies: ["registerUserWebkit"],
    },
  ],
});
