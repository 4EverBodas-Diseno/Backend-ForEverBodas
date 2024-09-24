Feature: User Registration

  Scenario: Successful registration
    Given the user is on the registration page
    When the user enters valid data
    And submits the registration form
    Then the system should create a new account
    And the user receives a confirmation email

  Scenario: Failed registration
    Given the user is on the registration page
    When the user enters invalid data
    Then the system should display an error message indicating the failure
