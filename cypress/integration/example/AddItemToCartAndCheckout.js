


describe('Adding item to cart', function () {

    before(function () {
     //   cy.restoreSession();
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })
    this.beforeEach(function(){
        cy.visit(Cypress.env('url'));
        cy.SignInWIthValidEmailAndPassword(this.data.loginEmail, this.data.loginPassword)
    })



    it('Add mens Shorts of size 32 and gray color To cart and checkout', function () {
        var streetAddress = this.data.streetAddress
        var city = this.data.city
        var phone= this.data.phoneNumber
        var zip = this.data.zipCode

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        var shortSize = this.data.size
        var shortColor = this.data.color
        var mensProductName = this.data.menShortsProduct

        cy.GotoMensShortsEsctionUsingDropDown()
        mensProductName.forEach(function (productName) {

            cy.AddMensShortsProductToCart(productName, shortSize, shortColor)

        })

       cy.openCart()
       cy.enterShippingDetails(streetAddress,city,zip,phone)
       cy.confirmPayment()

    })




})