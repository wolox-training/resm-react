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
  it('setProps makes componentDidUpdate to be executed', () => {
    jest.spyOn(UserList.prototype, 'componentDidUpdate');
    const users = [
      { id: 1, name: 'Jane', active: true },
      { id: 2, name: 'John', active: true },
      { id: 3, name: 'Sean', active: false }
    ];
    const wrapper = shallow(<UserList users={users} />);
    users.push({ id: 4, name: 'Marta', active: true });
    wrapper.setProps({ users });
    expect(UserList.prototype.componentDidUpdate.mock.calls.length).toBe(1);
    users.push({ id: 5, name: 'Alejandra', active: true });
    wrapper.setProps({ users });
    expect(UserList.prototype.componentDidUpdate.mock.calls.length).toBe(2);
  });
});
