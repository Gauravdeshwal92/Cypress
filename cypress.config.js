const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
 
  env:{
    url:"https://magento.softwaretestingboard.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    
    },
    specPattern: 'cypress/integration/example/*.js'
  },
});
