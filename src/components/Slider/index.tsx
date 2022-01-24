import React, { useState } from 'react';

export default function Slider() {

    return (
        <div className={'slider'}>
            <input type={'range'} min={0} max={100}/>
        </div>
    );
}
