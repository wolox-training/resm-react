import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserRow from './index';

configure({ adapter: new Adapter() });

describe('UserRow', () => {
  it('button change text when state is changed', () => {
    const wrapper = mount(<UserRow user={{ id:1, name: 'James', active: true }} />);
    wrapper.setState({ isActive: false });
    expect(wrapper.find('button').text()).toBe('Activar');
  });
  xit('button change text when clicked', () => {
    const wrapper = mount(<UserRow user={{ id:1, name: 'James', active: true }} />);
  });
  xit('executing toggleActive method changes isActive state', () => {
    const wrapper = mount(<UserRow user={{ id: 1, name: 'James', active: true }} />);
  });
});
