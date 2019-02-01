import React from 'react';
import { shallow } from 'enzyme';
import DetailedWeather from './DetailedWeather';

describe('<MoreWeather />', () => {
  test('renders', () => {
    const wrapper = shallow(<DetailedWeather />);
    expect(wrapper).toMatchSnapshot();
  });
});
