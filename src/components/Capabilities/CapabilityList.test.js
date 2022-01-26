import React from 'react';
import ReactDOM from 'react-dom';
import CapabilityList from './CapabilityList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CapabilityList cap={[]} />, div);
});
