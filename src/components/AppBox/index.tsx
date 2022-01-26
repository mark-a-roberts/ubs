import React from 'react';

export interface AppProps {
    appId: string;
    name: string;
    spend: number;
}

export default function AppBox(props:AppProps) {

    return (
        <div className={'appbox'}>
            <div className={'appbox-title'}>
                {props.name}
            </div>
            <div className={'appbox-body'}>
                ${props.spend}
            </div>
        </div>
    );
}
