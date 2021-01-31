import React from 'react';
import { BurgerBuilder } from "./BurgerBuilder";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

configure({adapter: new Adapter()});

describe('<BurgerBuilder/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={()=>{}} onInitPrice={() => {}}/>);
    })
    it('should NOT render <BuildControls/> when receiving no ingredients', () => {
        wrapper.setProps({ingredients: null});
        expect(wrapper.find(BuildControls)).toHaveLength(0);
    })
    it('should render <BuildControls/> when receiving ingredients', () => {
        wrapper.setProps({ingredients: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
});