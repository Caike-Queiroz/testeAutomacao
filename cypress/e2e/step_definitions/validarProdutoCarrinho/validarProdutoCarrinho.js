import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../page_objects/LoginPage";
import ProductsPage from "../../../page_objects/ProductsPage";

Given("I am already in the cart", () => {

  cy.fixture("data.json").then((data) => {
    // Loga no site, e leva o usuário um produto específico
    cy.visit("https://www.automationexercise.com/login");
    LoginPage.elements.emailInput().type(data.loginData.email);
    LoginPage.elements.passwordInput().type(data.loginData.password);
    LoginPage.elements.loginButton().click();
    cy.visit("https://www.automationexercise.com/product_details/1");
    ProductsPage.elements.addToCartButton().click(); // Adiciona o produto ao carrinho
    cy.contains("View Cart").click();
  });
});

When("I see all the products that i selected", () => {
  cy.get("#product-1");
});

Then("I can proceed to checkout", () => {
  cy.get(".check_out").click();
});