import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ThumbNailList from '../client/src/components/ThumbNailList';

// json data will be used to generate props
var data = require('../db/data.json');

function setup() {
  const props = {
    color: 0,
    product: data[0],
    indexOfSelected: 0,
    handleClick: () => {}
  };
  const wrapper = shallow(<ThumbNailList images={props.product.colors[props.color].images} indexOfSelected={props.indexOfSelected} handleClick={props.handleClick}/>);
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