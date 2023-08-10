const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ghhmw3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
