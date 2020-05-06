import React from 'react';
import { shallow } from 'enzyme';
import Color from '../client/src/components/Color';

// json data will be used to generate props
var data = require('../db/data.json');

function setup() {
  const props = {
    url: data[0].colors[0].images[0],
  };
  const wrapper = shallow(<Color url={props.url}/>);
  return { wrapper, props };
}

describe('Color Component Test Suite', () => {
  const { wrapper, props } = setup();

  it('It should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('It should set correct background from url', () => {
    expect(wrapper).toMatchSnapshot();
  });
});