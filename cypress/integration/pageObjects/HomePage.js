class HomePage{


    loginButton(){
      return  cy.get('.panel > .header > .authorization-link > a')      
    }

    mensDropDown(){

      return cy.get('#ui-id-5')
    }

    mensTop(){

      return cy.get('#ui-id-17')
    }

    mensBottom(){

      return cy.get('#ui-id-18')
    }

    mensShorts(){
      return cy.get('#ui-id-24')
    }





}
export default HomePage;