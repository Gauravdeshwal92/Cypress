class CartPage{


    cartButton(){

        return cy.get('.showcart')
    }

    proceedToCheckoutButton(){

        return cy.get('#top-cart-btn-checkout')
    }


}
export default CartPage