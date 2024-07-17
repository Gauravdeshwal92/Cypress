class MenShorts{

    getmensShortsProductList(){

        return cy.get('.product-item-link')

    }

    addToCartButton(){
        return cy.get('.action.tocart.primary')
    }

    selectSize32(){
        return cy.get("div[aria-label='32']")
    }
    selectSize33(){
        return cy.get("div[aria-label='33']")
    }
    selectSize34(){
        return cy.get("div[aria-label='34']")
    }
    selectSize36(){
        return cy.get("div[aria-label='36']")
    }
    selectGrayColor(){
        return cy.get("div[aria-label='Gray']")
    }
    selectBlueColor(){
        return cy.get("div[aria-label='Blue']")
    }
    selectBlackColor(){
        return cy.get("div[aria-label='BLack']")
    }
    selectRedColor(){
        return cy.get("div[aria-label='Red']")
    }
    selectGreenColor(){
        return cy.get("div[aria-label='Green']")
    }




}

export default MenShorts