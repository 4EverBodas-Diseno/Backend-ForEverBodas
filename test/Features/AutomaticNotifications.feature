Feature: Automatic Notifications

  Scenario: Successful notification
    Given the user has an upcoming important date
    When the system sends an automatic notification
    Then the user should receive the notification via email and/or mobile device

  Scenario: Notification failure
    Given the user has an upcoming important date
    When they do not receive the notification at the expected time
    Then the system should alert that there was a failure in sending the notification
