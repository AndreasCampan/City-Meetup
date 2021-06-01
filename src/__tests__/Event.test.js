import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  let createdEvent;
  beforeAll(() => {
    createdEvent = shallow(<Event />)
  });

  test('render event list', () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });

  test('render the event show more button', () => {
    expect(createdEvent.find('.collapse')).toHaveLength(1);
  });

  test('show more button should be false on render', () => {
    expect(createdEvent.state('showMore')).toBe(false);
  });

  test('if showMore is false, simulates a click showing more details', () => {
    const changeState = createdEvent.setState({showMore: true});
    createdEvent.find('.collapse').simulate('click', changeState);
    expect(createdEvent.state('showMore')).toBe(true);
  });

  test('if showMore is true, simulates a click showing less details', () => {
    const changeState = createdEvent.setState({showMore: false});
    createdEvent.find('.collapse').simulate('click', changeState);
    expect(createdEvent.state('showMore')).toBe(false);
  })
});