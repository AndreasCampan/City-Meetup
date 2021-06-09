import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 events will be listed by default', ({ given, when, then }) => {

    let AppWrapper;
    given('that a user is on the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user doesn’t specify a number of desired events to see', () => {
    });

    then('the default number of events, 32, will be displayed on the main page', () => {
      AppWrapper.update();
      // In this test mockdata only has 10 entries
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length)
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {

    let AppWrapper;
    given('that a user is on the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user changes the default value of events showed to 8', () => {
      AppWrapper.update();
      AppWrapper.find('#number').simulate('change', { target: { value: 8 } });
    });

    then('the page will only display 8 events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(AppWrapper.state('eventsToShow'))
    });
  });

});