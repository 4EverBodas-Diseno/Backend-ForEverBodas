Feature: Filter Guests by Status

  Scenario: Successful filtering
    Given the user is on the guest management page
    When they select a status using a filter
    Then the guest list should update and show only the guests with the selected status

  Scenario: No guests match the filter
    Given the user is on the guest management page
    When they select a status using a filter but no guests match
    Then the system should display a message indicating there are no guests with that status
