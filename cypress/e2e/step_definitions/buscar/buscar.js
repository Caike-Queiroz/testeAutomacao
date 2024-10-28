import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../page_objects/LoginPage";
import ProductsPage from "../../../page_objects/ProductsPage";

Given("I am already in products screen", () => {

  cy.fixture("data.json").then((data) => {
    cy.visit("https://www.automationexercise.com/login");
    LoginPage.elements.emailInput().type(data.loginData.email);
    LoginPage.elements.passwordInput().type(data.loginData.password);
    LoginPage.elements.loginButton().click();
    cy.get(".navbar-nav").contains("a", "Products").click();
  });
});

When("I type a valid value for searching products", () => {

  // Pesquisa um valor válido
  ProductsPage.elements.searchProductInput().clear().type("shirt");
  ProductsPage.elements.submitSearchButton().click();
});

Then("I have at least one product", () => {
  // Checa se aparece algum produto
  cy.contains("p", "Men Tshirt").should("be.visible");
});