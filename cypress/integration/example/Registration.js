
const faker = require('faker');


describe('Create an acount feature', function () {


    before(function () {
        const newValues = {
            firstName : faker.name.firstName(),
            lastName :faker.name.lastName(),
            email : faker.internet.email(),
        };

        // Read the existing data from the fixture file
        cy.fixture('example').then((data) => {
            // Update the data with new values
            const updatedData = { ...data, ...newValues };

            // Write the updated data back to the fixture file
            cy.writeFile('cypress/fixtures/example.json', updatedData);
        });
        
            cy.visit(Cypress.env('url'));
            // cy.saveSession(sessionName);

        });


        beforeEach('should update the values in the fixture file', () => {
            // Define the new values for the keys
           

            cy.fixture('example').then(function (data) {
                this.data = data;

        })

    })

       

        it('create account with valid details', function () {

            var firstName = this.data.firstName
            var lastName = this.data.lastName
            var email = this.data.email
            var password = this.data.password
            cy.createAccount(firstName, lastName, email, password)

        })


    })
