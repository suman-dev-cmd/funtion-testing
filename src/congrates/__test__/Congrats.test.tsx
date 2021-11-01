import React from "react";
import Congrats from "../Congrats";
import {shallow} from 'enzyme';
const setup =(props={})=>{
    return shallow(<Congrats {...props} />);
}
const findByTestArr = (wrapper:any,val:any) => wrapper.find(`[data-test='${val}']`); 
describe('<Congrats',()=>{
    test('render with out error',()=>{
        const wrapper = setup();
        const congratesComponet = findByTestArr(wrapper,"congrates-component");
        expect(congratesComponet.length).toBe(1);
    });
    test('renders no test when `success` prop is false',()=>{
        const wrapper = setup({success:false});
        const component = findByTestArr(wrapper,'congrates-component');
        expect(component.text()).toBe('');
    });
    test('renders non-empty congrats message when `success` prop is true',()=>{
        const wrapper = setup({success:true});
        const message = findByTestArr(wrapper,'congrats-message');
        expect(message.text().length).not.toBe(0);
    });
  
})