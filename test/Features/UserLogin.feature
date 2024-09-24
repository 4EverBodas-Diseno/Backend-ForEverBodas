Feature: User Login

  Scenario: Successful login
    Given the user is on the login page
    When the user enters valid credentials
    And submits the login form
    Then the user should access their account

  Scenario: Failed login
    Given the user is on the login page
    When the user enters invalid credentials
    Then the system should display an error message indicating incorrect credentials
