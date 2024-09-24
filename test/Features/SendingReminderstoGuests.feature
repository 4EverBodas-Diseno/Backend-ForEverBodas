Feature: Sending Reminders to Guests

  Scenario: Successful reminder sending
    Given the user has confirmed guests
    When the user sends a reminder
    Then the guests should receive the reminder via email

  Scenario: Reminder sending error
    Given the user is trying to send a reminder
    When there is an error in sending the message
    Then the system should display an error message indicating the failure
