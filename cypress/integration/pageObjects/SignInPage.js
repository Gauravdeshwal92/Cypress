class SignInPage {


    getCustomerLoginText(){
     return  cy.get('.base')
    }

    enterEmailField(){
        return cy.get('#email')
    }

    enterPasswordField(){
        return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass')
    }

    signInButton(){
        return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span')
    }

    SignInName(){
      return   cy.get(':nth-child(2) > .greet > .logged-in')
    }

    signOutDropdown(){
        return cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action')
    }

}

export default SignInPage

