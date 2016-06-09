import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';

import Nostra from './Nostra';

describe('<Nostra />',  () => {

  it('renders', () => {
    const wrapper = render(<Nostra />);
    expect(wrapper.text()).to.contain("Get Fortune");
  });


});