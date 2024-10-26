Feature: ValidarProdutoCarrinho
    As a user of a platform
    I want to validate the products that added to my cart
    So that I can confirm my order

Scenario: Validate products added
Given I am already in the cart
When I see all the products that i selected
Then I can proceed to checkout