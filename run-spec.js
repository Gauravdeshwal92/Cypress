const cypress = require('cypress');
const path = require('path');

const specs = [
  'cypress/integration/example/Registration.js',
  'cypress/integration/example/SignInAndLogout.js',
  'cypress/integration/example/AddItemToCartAndCheckout.js',
  
  // Add more spec files here in the order you want them to run
];

async function runSpecs() {
  for (const spec of specs) {
    const fullPath = path.resolve(spec);
    console.log(`Running spec: ${fullPath}`);
    await cypress.run({
      spec: fullPath,
    });
  }
}

runSpecs()
  .then(() => {
    console.log('All specs have finished running.');
  })
  .catch((err) => {
    console.error('An error occurred while running specs:', err);
  });
