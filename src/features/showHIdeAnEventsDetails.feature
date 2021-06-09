Feature: Show/Hide an event’s Details

Scenario: An event element is collapsed by default
  Given the user has just logged in
  When the user opens an app
  Then each event has a show more button to expand the element revealing more details

Scenario: User can expand an event to see its details
  Given that the user is on the events page
  When the user clicks on show more details button
  Then the event card expands revealing more detail

Scenario: User can collapse an event to hide its details
  Given that the user has clicked on a show more button on the event card
  When the user clicks on the hide details button on the event card
  Then revealed details hide and the expanded UI shrinks
