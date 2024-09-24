Feature: RSVP Confirmation

  Scenario: Successful confirmation
    Given the guests have received the invitations
    When they confirm their attendance
    Then the guest list should update automatically

  Scenario: Confirmation error
    Given a guest tries to confirm their attendance
    When there is a technical issue
    Then the system should display a message indicating the failure
