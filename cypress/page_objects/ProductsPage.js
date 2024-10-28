class ProductsPage {
    elements = {
        searchProductInput: () => cy.get("#search_product"),
        submitSearchButton: () => cy.get("#submit_search"),
        addToCartButton: () => cy.get(".cart")
    }
}

export default new ProductsPage();