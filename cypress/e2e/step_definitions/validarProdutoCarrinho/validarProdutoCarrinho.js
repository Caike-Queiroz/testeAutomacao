import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am already in the cart", () => {

    // Loga no site, e leva o usuário um produto específico
    cy.visit("https://www.automationexercise.com/login");
    cy.get('[data-qa="login-email"]').clear().type("teste2021@teste.com.br");
    cy.get('[data-qa="login-password"]').clear().type("teste");
    cy.get('[data-qa="login-button"]').click();
    cy.visit("https://www.automationexercise.com/product_details/1");
    cy.get('.cart').click(); // Adiciona o produto ao carrinho
    cy.contains('View Cart').click();
});

When("I see all the products that i selected", () => {
    cy.get("#product-1");
});

Then("I can proceed to checkout", () => {
    cy.get('.check_out').click();
});