Feature: Login
    As a user of a platform
    I want to authenticate myself in the system
    So that I can access my account

Scenario: Valid Login
Given I am on the login page
When I type a valid email and a valid password
Then I have a successful login

Scenario: Invalid Login
Given I am on the login page
When I type an invalid email or an invalid password
Then I see an error message indicating invalid credentials