const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.sketch.com',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,

    retries: {
      runMode: 0,
      openMode: 0,
    },

    screenshotOnRunFailure: false,
    trashAssetsBeforeRuns: true,
    video: false,
    waitForAnimations: true,
  },
});
