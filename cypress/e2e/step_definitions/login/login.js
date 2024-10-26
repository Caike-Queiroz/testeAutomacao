import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Cenário comum para acessar a página de login
Given("I am on the login page", () => {
    cy.visit("https://www.automationexercise.com/login");
});

// Cenário comum para preencher email e senha
When("I type a valid email and a valid password", () => {

    cy.get('[data-qa="login-email"]').clear().type("teste2021@teste.com.br");
    cy.get('[data-qa="login-password"]').clear().type("teste");
    cy.get('[data-qa="login-button"]').click();
});

When("I type an invalid email or an invalid password", () => {

    cy.get('[data-qa="login-email"]').clear().type("invalid@teste.com.br");
    cy.get('[data-qa="login-password"]').clear().type("teste");
    cy.get('[data-qa="login-button"]').click();
});

// Validação para login bem-sucedido
Then("I have a successful login", () => {
    cy.get(".logo");
});

Then("I see an error message indicating invalid credentials", () => {
    cy.contains('p', 'Your email or password is incorrect!').should('be.visible');
});