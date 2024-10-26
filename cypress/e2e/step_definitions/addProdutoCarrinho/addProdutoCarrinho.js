import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am already in specific product screen", () => {

    // Loga no site, e leva o usuário um produto específico
    cy.visit("https://www.automationexercise.com/login");
    cy.get('[data-qa="login-email"]').clear().type("teste2021@teste.com.br");
    cy.get('[data-qa="login-password"]').clear().type("teste");
    cy.get('[data-qa="login-button"]').click();
    cy.visit("https://www.automationexercise.com/product_details/1");
});

When("I click in the Add to cart button", () => {
    cy.get('.cart').click(); // Adiciona o produto ao carrinho
});

Then("I have the product added to my cart", () => {
    cy.contains('h4', 'Added!').should('be.visible'); // Checa se foi adicionado
});