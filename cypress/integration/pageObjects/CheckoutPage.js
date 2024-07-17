class CheckoutPage{


    streetAddress(){
        return cy.get("div[name='shippingAddress.street.0']")
    }

    city(){
        return cy.get("input[name='city']")
    }

    selectStateOrProvince(){
        return cy.get('select[name=region_id]')
    }

    zipCode(){
        return cy.get("input[name='postcode']")
    }

    selectCountry(){
        return cy.get("select[name=country_id]")
    }

    phoneNumber(){
        return cy.get("input[name='telephone']")
    }

    tableRateShipping(){

        return cy.get(':nth-child(1) > :nth-child(1) > .radio')

        
    }

    nextButton(){
       return cy.get('button.button.action')
    }

    existingShippingAddress(){
        return cy.get('.shipping-address-item.selected-item')
    }

}

export default CheckoutPage