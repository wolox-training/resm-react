import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Dashboard from './index';

configure({ adapter: new Adapter() });

describe('Dashboard', () => {
  it('first h1 text should be "Welcome to React"', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('h1').first().text()).toBe('Welcome to React');
  });
  it('parent of the logo should be a header', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('.App-logo').parent().name()).toBe('header');
  });
  it('componentDidMount is called once', () => {
    jest.spyOn(Dashboard.prototype, 'componentDidMount');
    const wrapper = shallow(<Dashboard />);
    expect(Dashboard.prototype.componentDidMount.mock.calls.length).toBe(1);
  })
});
