import React from 'react';
import CapabilityList from "./CapabilityList";

interface CapProps {
    apps: Array<any>;
}

/**
 * Business Capabilities navigation
 * @param props
 * @constructor
 */
export default function Capabilities(props: CapProps) {
    const apps = props.apps;
    const cap1 = new Map();

    apps.forEach((app) => {
        if (!cap1.has(app.BCAP1)) {
            cap1.set(app.BCAP1, new Map());
        }
        let cap2 = cap1.get(app.BCAP1); // get value of L2:map
        if (!cap2.has(app.BCAP2)) {
            cap2.set(app.BCAP2, new Map())
        }
        let cap3 = cap2.get(app.BCAP2);
        if (!cap3.has(app.BCAP3)) {
            cap3.set(app.BCAP3, 1);
        }
        cap2.set(app.BCAP2, cap3);
        cap1.set(app.BCAP1, cap2);
    });

    const selected = "Business Capability 1.2.2";

    return (
        <nav className={'capabilities'}>
            <h3>Capabilities</h3>
            <CapabilityList cap={cap1} selected={selected}/>
        </nav>
    );
}
