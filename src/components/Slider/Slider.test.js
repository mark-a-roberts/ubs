import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Slider min={100} max={1000} />, div);
});
