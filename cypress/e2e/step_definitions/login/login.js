import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../page_objects/LoginPage";

// Cenário comum para acessar a página de login
Given("I am on the login page", () => {
  cy.visit("https://www.automationexercise.com/login");
});

// Cenário comum para preencher email e senha
When("I type a valid email and a valid password", () => {

  cy.fixture("data.json").then((data) => {
    LoginPage.elements.emailInput().type(data.loginData.email);
    LoginPage.elements.passwordInput().type(data.loginData.password);
    LoginPage.elements.loginButton().click();
  });
});

When("I type an invalid email or an invalid password", () => {
    
  LoginPage.elements.emailInput().type("invalid@teste.com.br");
  LoginPage.elements.passwordInput().type("teste");
  LoginPage.elements.loginButton().click();
});

// Validação para login bem-sucedido
Then("I have a successful login", () => {
  cy.get(".logo");
});

Then("I see an error message indicating invalid credentials", () => {
  cy.contains("p", "Your email or password is incorrect!").should("be.visible");
});