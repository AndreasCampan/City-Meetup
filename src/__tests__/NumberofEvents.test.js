import React from 'react';
import { shallow } from 'enzyme';
import NumberofEvents from '../NumberofEvents';

describe('<NumberofEvents /> component', () => {

  let numberFilter;

  beforeAll(() => {
    numberFilter = shallow(<NumberofEvents />);
  });

  test('render the number of events menu', () => {
    expect(numberFilter.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render the default number of events on the page (32)', () => {
    expect(numberFilter.state('eventsToShow')).toBe(32);
  });

  test('check if input and state value are the same', () => {
    const stateNumber = numberFilter.state('eventsToShow');
    expect(numberFilter.find('#number').prop('value')).toBe(stateNumber);
  });

  test('change state when text input changes', () => {
    const eventObj = { target: { value: 16 }};
    numberFilter.find('#number').simulate('change', eventObj);
    expect(numberFilter.state('eventsToShow')).toBe(16);
  });

  test('display default of 32 events if show events is 0', () => {
    const eventObj = { target: { value: 0 }};
    numberFilter.find('#number').simulate('change', eventObj);
    expect(numberFilter.state('eventsToShow')).toBe(32);
  });

});