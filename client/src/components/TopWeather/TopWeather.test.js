import React from 'react';
import { shallow } from 'enzyme';
import TopWeather from './TopWeather';

describe('<Topweather />', () => {
  test('renders', () => {
    const wrapper = shallow(<TopWeather />);
    expect(wrapper).toMatchSnapshot();
  });
});
