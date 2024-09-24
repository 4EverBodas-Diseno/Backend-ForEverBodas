Feature: Digital Invitation Creation

  Scenario: Successful creation
    Given the user is on the invitation creation section
    When the user designs and customizes the invitation
    Then the invitation should be ready to send

  Scenario: Invitation creation error
    Given the user is customizing the invitation
    When there is a failure while saving the changes
    Then the system should display an error message
