import React from 'react';
import ReactDOM from 'react-dom';
import Capabilities from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Capabilities />, div);
});
