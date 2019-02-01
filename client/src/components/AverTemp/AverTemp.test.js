import React from 'react';
import { shallow } from 'enzyme';
import AverTemp from './AverTemp';

describe('<Avertemp />', () => {
  test('renders', () => {
    const wrapper = shallow(<AverTemp />);
    expect(wrapper).toMatchSnapshot();
  });
});
