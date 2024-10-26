Feature: Buscar
    As a user of a platform
    I want to be able to search for products
    So that I can buy them

Scenario: Returned products
Given I am already in products screen
When I type a valid value for searching products
Then I have at least one product