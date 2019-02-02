import React from 'react';
import { shallow } from 'enzyme';
import DateTemp from './DateTemp';

describe('<Date1 />', () => {
  test('renders', () => {
    const wrapper = shallow(<DateTemp />);
    expect(wrapper).toMatchSnapshot();
  });
});
