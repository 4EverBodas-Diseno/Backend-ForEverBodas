Feature: Password Recovery

  Scenario: Successful recovery
    Given the user is on the password recovery page
    When the user enters their email and follows the steps
    Then the system should send an email with instructions to recover the password

  Scenario: Failed recovery
    Given the user is on the password recovery page
    When the user enters an unregistered email
    Then the system should display an error message indicating no associated account was found
