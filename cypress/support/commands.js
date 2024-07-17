// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import SignInPage from "../integration/pageObjects/SignInPage"
import HomePage from "../integration/pageObjects/HomePage";
import MenShorts from "../integration/pageObjects/MenShorts";
import CartPage from "../integration/pageObjects/CartPage";
import CheckoutPage from "../integration/pageObjects/CheckoutPage";
import PaymentPage from "../integration/pageObjects/PaymentPage";
import RegistrationPage from "../integration/pageObjects/RegistrationPage";



// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('AddMensShortsProductToCart', (productName, size, color) => {
    const mensShorts = new MenShorts()
    mensShorts.getmensShortsProductList().each((element, index, $list) => {

        if (element.text().includes(productName)){
            cy.wrap(element).should('be.visible').click();
        }
    })

    cy.wait(4000)
    cy.selectShortsOfSize(size)
    cy.SelectColor(color)
    mensShorts.addToCartButton().click()
})



Cypress.Commands.add('GotoMensShortsEsctionUsingDropDown', () => {
    const homepage = new HomePage()
    homepage.mensDropDown().trigger('mouseover').should('be.visible')
    homepage.mensBottom().trigger('mouseover').should('be.visible')
    homepage.mensShorts().click()

})

Cypress.Commands.add('openCart', () => {
    const cartPage = new CartPage()
    cy.wait(4000)
    cartPage.cartButton().click().should('be.visible')
    cartPage.proceedToCheckoutButton().click()


})

Cypress.Commands.add('enterShippingDetails', (streetAddress, city, zip, phone) => {
    const checkoutPage = new CheckoutPage()

    checkoutPage.existingShippingAddress().then($element => {
        if ($element.length > 0) {
            checkoutPage.tableRateShipping().check().should('be.checked')
            
        } else {
            checkoutPage.streetAddress().type(streetAddress).should('be.visible')
            checkoutPage.city().type(city).should('be.visible')
            checkoutPage.selectStateOrProvince().select('43')
            checkoutPage.zipCode().type(zip)
            checkoutPage.selectCountry({ timeout: 7000 }).select('US')
            checkoutPage.phoneNumber().type(phone)
            checkoutPage.tableRateShipping().check().should('be.checked')
            checkoutPage.nextButton().click()
        }
    })
    checkoutPage.nextButton().click()

})

Cypress.Commands.add('confirmPayment', () => {

    const payment = new PaymentPage()

    payment.placeOrderButton().click()
    payment.confirmationMessage().should('have.text', 'Thank you for your purchase!')

})


Cypress.Commands.add('selectShortsOfSize', (size) => {

    const mensShorts = new MenShorts()
    if (size == 32) {
        mensShorts.selectSize32().click()
    } else if (size == 33) {
        mensShorts.selectSize33().click()
    }
    else if (size == 34) {
        mensShorts.selectSize34().click()
    }
    else if (size == 36) {
        mensShorts.selectSize36().click()
    }
})

Cypress.Commands.add('SelectColor', (color) => {

    const mensShorts = new MenShorts()
    if (color == "Red") {
        mensShorts.selectRedColor().click()
    } else if (color == "Black") {
        mensShorts.selectBlackColor().click()
    }
    else if (color == "Green") {
        mensShorts.selectGreenColor().click()
    }
    else if (color == "Blue") {
        mensShorts.selectBlueColor().click()
    }
    else if (color == "Gray") {
        mensShorts.selectGrayColor().click()
    }
})


Cypress.Commands.add('createAccount', (firstName, lastname, emailID, password) => {
    const register = new RegistrationPage()



    register.createAnAccountButton().click()
    register.enterFirstname().type(firstName)
    register.enterLastname().type(lastname)
    register.enteremailAddress().type(emailID)
    register.enterPassword().type(password)
    register.enterConfirmPassword().type(password)
    register.createAccountButton().click()
    register.successmessage().then(function (ele) {

        const WelcomeName = ele.text()
        cy.wrap(ele).should('be.visible')
        expect(WelcomeName.includes('Thank')).to.be.true

    })

})



Cypress.Commands.add('SignInWIthValidEmailAndPassword', (email, password) => {
    const signIn = new SignInPage()
    const homePage = new HomePage()

    homePage.loginButton().click()
    signIn.getCustomerLoginText().should('have.text', 'Customer Login')
    signIn.enterEmailField().type(email)
    signIn.enterPasswordField().type(password)
    signIn.signInButton().click()
    cy.wait(6000)
    signIn.SignInName().then(function (ele) {

        const WelcomeName = ele.text()
        cy.wrap(ele).should('be.visible')
        expect(WelcomeName.includes('Welcome')).to.be.true

    })

})

Cypress.Commands.add('logoutFromWebApplication', () => {
    const signIn = new SignInPage()



    signIn.signOutDropdown().click()
    cy.contains('Sign Out').click()
    cy.get('.base').should('have.text', 'You are signed out')

})

Cypress.Commands.add('saveSession', (sessionName) => {
    // Save the session
    cy.session('loginSession', (sessionName) => {
        //   cy.SignInWIthValidEmailAndPassword(email,password);
    });
});

Cypress.Commands.add('restoreSession', (email, password) => {
    // Restore the session
    cy.session('loginSession', (sessionName) => {
        //    cy.SignInWIthValidEmailAndPassword(email, password);
    }, {
        cacheAcrossSpecs: true
    });
});






//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })