Feature: Digital Invitation Sending

  Scenario: Successful sending
    Given the user has the email addresses of the guests
    When the user sends the invitations
    Then the guests should receive the invitations by email

  Scenario: Invitation sending error
    Given the user has incorrect emails in their list
    When they try to send the invitations
    Then the system should display an error message with the invalid emails
