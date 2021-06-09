Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 events will be listed by default
  Given that a user is on the main page
  When the user doesn’t specify a number of desired events to see
  Then the default number of events, 32, will be displayed on the main page

Scenario: User can change the number of events they want to see
  Given that a user is on the main page 
  When the user changes the default value of events showed to 8
  Then the page will only display 8 events
