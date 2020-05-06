import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ColorList from '../client/src/components/ColorList';

// json data will be used to generate props
var data = require('../db/data.json');

function setup() {
  const props = {
    product: data[0],
    color: 0
  };
  //const wrapper = shallow(<ColorList product={props.product} color={props.color}/>);
  const wrapper = shallow(<ColorList product={props.product} color={props.color}/>);
  return { wrapper, props };
}

describe('ColorList Component Test Suite', () => {
  const { wrapper, props } = setup();

  it('It should render', () => {
    expect(wrapper).toHaveLength(1);
  });
});

