import React from 'react';
import { shallow } from 'enzyme';
import IconWeather from './IconWeather';

describe('<Smallweather />', () => {
  test('renders', () => {
    const wrapper = shallow(<IconWeather />);
    expect(wrapper).toMatchSnapshot();
  });
});
