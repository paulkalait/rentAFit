import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe("Test rendering for the home component", () => { 
    test('renders home page', () => {
        const component = renderer.create(<Home />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        
     })
})