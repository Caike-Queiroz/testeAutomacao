import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let response;
let actualListName;

Given('I am making a GET request to the API', () => {
    return cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a').then((res) => {
        response = res; // Salva a resposta para uso posterior
    });
});

When('I receive the response from this API', () => {
  actualListName = response.body.list.name;
});

Then('I display the content of the field name from the list structure', () => {
  cy.log(actualListName);
});

Then('I validate the status code', () => {
  expect(response.status).to.eq(200);
});