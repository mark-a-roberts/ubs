import React from "react";
import { SpendContextProvider, SpendContext} from "../App/SpendContext";
import { CapContextProvider, CapContext} from "../App/CapabilityContext";

export interface CapProps {
    cap: Map<any, any>;
    selected?: string;
}

/**
 * Capability List
 * @param props
 * @constructor
 */
export default class CapabilityList extends React.Component<CapProps> {

    private onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
        e.preventDefault();
    }

    render() {
        const keys = Array.from(this.props.cap.keys()).sort();
        return <ul className={'capability-list'}>
            {keys.map((k) => {
                const next = this.props.cap.get(k);
                const cname = (next instanceof Map) ? 'nav-down' : '';
                return <li key={k} className={cname}>
                    <span data-id={k}
                          className={(this.props.selected === k) ? 'selected': ''}
                          onClick={this.onClick}>{k}
                    </span>
                    {(next instanceof Map) && <CapabilityList cap={next} selected={this.props.selected}/>}
                </li>;
            })}
        </ul>
    }

}
