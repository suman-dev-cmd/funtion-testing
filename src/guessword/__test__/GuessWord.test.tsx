import React from "react";
import GuessWord from '../GuessWord';
import {shallow} from 'enzyme';
const setup =(props={})=>{
    return shallow(<GuessWord {...props} />);
}
const findByTestArr = (wrapper:any,val:any) => wrapper.find(`[data-test='${val}']`); 
describe('<GuessWord',()=>{
    test('render with out error',()=>{
        const wrapper = setup();
        const congratesComponet = findByTestArr(wrapper,"guess-component");
        expect(congratesComponet.length).toBe(1);
    });
  
})