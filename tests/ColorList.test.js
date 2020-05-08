import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ColorList from '../client/src/components/ColorList';

// json data will be used to generate props
var data = require('../db/data.json');

function setup() {
  const props = {
    product: data[0],
    color: 0,
    handleColorChange: jest.fn()
  };
  //const wrapper = shallow(<ColorList product={props.product} color={props.color}/>);
  const wrapper = shallow(<ColorList product={props.product} color={props.color} handleColorChange={props.handleColorChange}/>);
  return { wrapper, props };
}

describe('ColorList Component Test Suite', () => {
  const { wrapper, props } = setup();

  it('It should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('It should trigger the props color change handler', () => {
    wrapper.instance().handleColorChange(0);
    expect(props.handleColorChange).toHaveBeenCalled();
  });
});

