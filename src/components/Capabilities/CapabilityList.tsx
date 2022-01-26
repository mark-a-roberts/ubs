import React from "react";

export interface CapProps {
    cap: Map<any, any>;
}

/**
 * Capability List
 * @param props
 * @constructor
 */
export default function CapabilityList(props: CapProps) {
    const keys = Array.from(props.cap.keys()).sort();
    return <ul>
        {keys.map( (k) => {
            const next = props.cap.get(k);
            const cname = (next instanceof Map) ? 'nav-down' : '';
            return <li key={k} className={cname}> {k}
                {(next instanceof Map) && <CapabilityList cap={next}/>}
            </li>;
        })}
    </ul>
}
