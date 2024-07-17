class RegistrationPage{



    createAnAccountButton(){

     // return  cy.get('.panel > .header > :nth-child(4) > a')

     return cy.contains('a','Create an Account')
    }

    enterFirstname(){
        return  cy.get('#firstname')
    }
    enterLastname(){
        return  cy.get('#lastname')
    }
    enteremailAddress(){
        return cy.get('#email_address')
    }
    enterPassword(){
        return  cy.get('#password')
    }
    enterConfirmPassword(){
        return  cy.get('#password-confirmation')
    }
    createAccountButton(){
        return  cy.get('button.submit')
    }

    successmessage(){

        return cy.get('.message-success > div')
    }
    
    
}

export default RegistrationPage