import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../page_objects/LoginPage";
import ProductsPage from "../../../page_objects/ProductsPage";

Given("I am already in specific product screen", () => {
  cy.fixture("data.json").then((data) => {
    // Loga no site, e leva o usuário um produto específico
    cy.visit("https://www.automationexercise.com/login");
    LoginPage.elements.emailInput().type(data.loginData.email);
    LoginPage.elements.passwordInput().type(data.loginData.password);
    LoginPage.elements.loginButton().click();
    cy.visit("https://www.automationexercise.com/product_details/1");
  });
});

When("I click in the Add to cart button", () => {
  ProductsPage.elements.addToCartButton().click(); // Adiciona o produto ao carrinho
});

Then("I have the product added to my cart", () => {
  cy.contains("h4", "Added!").should("be.visible"); // Checa se foi adicionado
});