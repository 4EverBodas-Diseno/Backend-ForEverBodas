Feature: View Attendee Summary

  Scenario: Successful summary
    Given the user is on the guest management page
    When several guests have confirmed their attendance
    Then the summary should show the total number of confirmed attendees

  Scenario: No attendance confirmations
    Given the user is on the guest management page
    When no guests have confirmed their attendance
    Then the summary should indicate that no attendees are confirmed
