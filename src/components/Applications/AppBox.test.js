import React from 'react';
import ReactDOM from 'react-dom';
import AppBox from './AppBox';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppBox spend={1234} />, div);
});
