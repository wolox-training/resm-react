import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserList from './index';

configure({ adapter: new Adapter() });

describe('UserList', () => {
  it('shows new user when props are changed', () => {
    const users = [
      { id: 1, name: 'Jane', active: true },
      { id: 2, name: 'John', active: true },
      { id: 3, name: 'Sean', active: false }
    ];
    const wrapper = shallow(<UserList users={users} />);
    expect(wrapper.find('UserRow').length).toBe(3);
    users.push({ id: 4, name: 'Marta', active: true });
    wrapper.setProps({ users });
    expect(wrapper.find('UserRow').length).toBe(4);
  });
  xit('setProps makes componentDidUpdate to be executed', () => {
  });
});
