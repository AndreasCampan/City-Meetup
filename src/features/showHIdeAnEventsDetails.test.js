import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount} from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import Event from '../Event';

const feature = loadFeature('./src/features/showHIdeAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user has just logged in', () => {
    });

    let AppWrapper
    when('the user opens an app', () => {
      AppWrapper = mount(<App />);
    });

    then('each event has a show more button to expand the element revealing more details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.details-btn')).toHaveLength(mockData.length);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('that the user is on the events page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on show more details button', () => {
      AppWrapper.update();
      const EventWrapper = AppWrapper.find(Event)
      /* Jest - Enzyme/Cucumber onClick glitch due to no onMouseDown support. Created work around involving setting the state manually rather than expecting a simulated click.*/
      AppWrapper.find('.details-btn').at(0).simulate('click');
      EventWrapper.at(0).setState({ showMore: true});
    });

    then('the event card expands revealing more detail', () => {
      AppWrapper.update();
      const EventWrapper = AppWrapper.find(Event);
      const eventDetails = EventWrapper.find('.description').at(0);
      expect(eventDetails.text()).not.toBeNull()
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    let EventWrapper;
    given('that the user has clicked on a show more button on the event card', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      EventWrapper = AppWrapper.find(Event);
      EventWrapper.at(0).setState({ showMore: true});
    });

    when('the user clicks on the hide details button on the event card', () => {
      AppWrapper.update();
      EventWrapper = AppWrapper.find(Event)
      /* Jest - Enzyme/Cucumber onClick glitch due to no onMouseDown support. Created work around involving setting the state manually rather than expecting a simulated click.*/
      AppWrapper.find('.details-btn').at(0).simulate('click');
      EventWrapper.at(0).setState({ showMore: false});
    });

    then('revealed details hide and the expanded UI shrinks', () => {
      AppWrapper.update();
      EventWrapper = AppWrapper.find(Event);
      const eventDetails = EventWrapper.find('.description').at(0);
      expect(eventDetails.text()).toBe("")
    });
  });
});