import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ImageViewer from '../client/src/components/ImageViewer';

// json data will be used to generate props
var data = require('../db/data.json');

function setup() {
  const props = {
    color: 0,
    product: data[0]
  };
  const wrapper = shallow(<ImageViewer product={props.product} color={props.color}/>);
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

  it('It should correctly update state when click triggered' ,() => {
    expect(wrapper.instance().state.indexOfSelected).toBe(0);
    let index = 1;
    wrapper.instance().handleClick(index);
    expect(wrapper.instance().state.indexOfSelected).toBe(1);
  })

  it('It should correctly reset state when props change' ,() => {
    wrapper.instance().state.indexOfSelected = 1;
    expect(wrapper.instance().state.indexOfSelected).toBe(1);
    wrapper.instance().componentDidUpdate({color: "new color should trigger state change"});
    expect(wrapper.instance().state.indexOfSelected).toBe(0);
  })
});
