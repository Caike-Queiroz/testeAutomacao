class LoginPage {
    elements = {
       emailInput: () => cy.get('[data-qa="login-email"]'),
       passwordInput: () => cy.get('[data-qa="login-password"]'),
       loginButton: () => cy.get('[data-qa="login-button"]')
    }
}
 
export default new LoginPage();