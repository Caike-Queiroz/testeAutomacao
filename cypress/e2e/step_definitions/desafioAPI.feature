Feature: DesafioAPI
    As a user of a platform
    I want to authenticate myself in the system
    So that I can access my account

Scenario: GET request to the API
Given I am making a GET request to the API
When I receive the response from this API
Then I display the content of the field name from the list structure
And I validate the status code