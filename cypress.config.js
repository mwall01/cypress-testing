const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'eqfswa', // cypress dashboard project
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    execTimeout: 7000,
    pageLoadTimeout: 10000,
    viewportWidth: 1200,
    viewportHeight: 675,
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
});
