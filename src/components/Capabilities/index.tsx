import React, { ReactNode } from 'react';

interface CapProps {
    children: ReactNode;
}

/**
 * Business Capabilities navigation
 * @param props
 * @constructor
 */
export default function Capabilities(props: CapProps) {

    return (
        <nav className={'capabilities'}>
            {props.children}
        </nav>
    );
}
