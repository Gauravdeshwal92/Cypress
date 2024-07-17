class PaymentPage{

    placeOrderButton(){
        return cy.get('button.action.primary.checkout')
    }

    confirmationMessage(){
        return cy.get('span.base')
    }




}

export default PaymentPage