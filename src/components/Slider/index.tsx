import React, { useState, useContext } from 'react';
import {SpendContext} from "../App/SpendContext";

interface SpendProps {
    name: string;
    min: number;
    max: number;
}

/**
 * Slider (spend range input filter)
 * @param props SpendProps
 * @constructor
 */
export default function Slider( props: SpendProps) {
    const { onChange } = useContext(SpendContext);
    const [spend, setSpend] = useState(1);

    return (
        <div className={'slider'}>
            <h3>{props.name}</h3>
            <input
                type={'range'}
                value={spend}
                onChange={e => {
                    const val = parseInt(e.target.value);
                    setSpend(val);
                    onChange(val);
                }}
                min={props.min} max={props.max}
            />
            <div className={'slider-labels'}>
                <div>${props.min}</div>
                <div>${props.max}</div>
            </div>
        </div>
    );
}
