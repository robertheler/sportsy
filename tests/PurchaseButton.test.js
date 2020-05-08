import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PurchaseButton from '../client/src/components/PurchaseButton';
import StyledButton from '../client/src/components/PurchaseButton';
import StyledPath from '../client/src/components/PurchaseButton';
import 'jest-styled-components';
// json data will be used to generate props
var data = require('../db/data.json');

function setup() {
  const props = {
    color: 0,
    product: data[0]
  };
  const wrapper = shallow(<PurchaseButton color={props.color} product={props.product} isSelected={props.isSelected} handleColorChange={props.handleColorChange}/>);

  const mockEventGenerator = (str) => {
    return {
      currentTarget: {
        name: 'todo',
        value: str,
        blur: () => {}
      },
      preventDefault: () => {},
    };
  };
  return { wrapper, props, mockEventGenerator };

}

describe('Title Component Test Suite', () => {
  const { wrapper, props, mockEventGenerator } = setup();

  it('It should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('It should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('It should toggle favorited state on click' ,() => {
    wrapper.instance().state.favorite = false;
    expect(wrapper.instance().state.favorite).toBe(false);
    wrapper.instance().favorite();
    expect(wrapper.instance().state.favorite).toBe(true);
  });

  // it('It should trigger purchase when clicked', () => {
  //   wrapper.instance().purchase = jest.fn();
  //   wrapper.find('StyledButton').simulate('click', mockEventGenerator);
  //   expect(wrapper.instance().purchase).toHaveBeenCalled();
  // })

  it('It should render a filled heart if favorited', () => {
    let heart = mount(<StyledPath favorite="true"/>)
    expect(heart).toMatchSnapshot();
  });

  it('It should render an empty heart if not favorited', () => {
    let heart = shallow(<StyledPath favorite="false"/>)
    expect(heart).toMatchSnapshot();
  });

});