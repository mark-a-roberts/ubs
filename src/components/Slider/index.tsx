import React, { useState } from 'react';

interface SpendProps {
    min: number;
    max: number;
}

export default function Slider( props: SpendProps) {

    return (
        <div className={'slider'}>
            <input type={'range'} min={props.min} max={props.max}/>
        </div>
    );
}
