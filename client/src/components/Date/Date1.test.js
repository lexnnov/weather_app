import React from 'react';
import { shallow } from 'enzyme';
import Date1 from './Date1';

describe('<Date1 />', () => {
  test('renders', () => {
    const wrapper = shallow(<Date1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
