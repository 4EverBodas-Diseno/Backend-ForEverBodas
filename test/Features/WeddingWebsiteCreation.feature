Feature: Wedding Website Creation

  Scenario: Successful creation
    Given the user is in the wedding website creation section
    When the user customizes the design and publishes the website
    Then the website should be available for the guests

  Scenario: Publishing error
    Given the user is creating the website
    When there is an issue while publishing
    Then the system should display an error message indicating the website could not be published
