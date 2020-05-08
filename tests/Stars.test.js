import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Stars from '../client/src/components/Stars';

// json data will be used to generate props
var data = require('../db/data.json');

function setup() {
  const props = {
    color: 0,
    product: data[0]
  };
  const wrapper = shallow(<Stars />);
  return { wrapper, props };
}

describe('Title Component Test Suite', () => {
  const { wrapper, props } = setup();

  it('It should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});