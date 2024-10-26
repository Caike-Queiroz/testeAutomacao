Feature: AddProdutoCarrinho
    As a user of a platform
    I want to be able to add products to my cart
    So that I can place my order later

Scenario: Add to cart
Given I am already in specific product screen
When I click in the Add to cart button
Then I have the product added to my cart