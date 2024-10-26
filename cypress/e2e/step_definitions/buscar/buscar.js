import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am already in products screen", () => {

    // Loga no site, e leva o usuário a página de produtos
    cy.visit("https://www.automationexercise.com/login");
    cy.get('[data-qa="login-email"]').clear().type("teste2021@teste.com.br");
    cy.get('[data-qa="login-password"]').clear().type("teste");
    cy.get('[data-qa="login-button"]').click();
    cy.get('.navbar-nav').contains('a', 'Products').click();
});

When("I type a valid value for searching products", () => {

    // Pesquisa um valor válido
    cy.get('#search_product').clear().type("shirt");
    cy.get('#submit_search').click();
});

Then("I have at least one product", () => {
    // Checa se aparece algum produto 
    cy.contains('p', 'Men Tshirt').should('be.visible');
});