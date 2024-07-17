

describe('Sign -in feature', function () {


    before(function(){
           cy.fixture('example').then(function (data) {
            this.data = data;
            cy.visit(Cypress.env('url'));
           // cy.saveSession(sessionName);
            
            })
          });
    

    it('Sign in using valid email id', function () {
     //   cy.saveSession(sessionName);
     //   cy.restoreSession(sessionName);
        cy.SignInWIthValidEmailAndPassword(this.data.loginEmail, this.data.loginPassword)
        cy.logoutFromWebApplication()

    })


})
