import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
describe('<App />',()=>{
  const wrapper = shallow(<App/>);
  test('render without error',()=>{
    const appComponent = wrapper.find(`[data-test="app-component"]`);
    expect(appComponent.length).toBe(1);
  });
});

