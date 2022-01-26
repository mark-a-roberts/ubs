import React, {useState, createContext} from "react";
import Slider from "../Slider";
import Capabilities from "../Capabilities";
import CapabilityList from "../Capabilities/CapabilityList";

import AppBox from "../AppBox";

import apps from '../../data.json';

import "./App.css";

export const AppContext = createContext({
    spend: 0, onChange: (val: any) => {
    }
});



function App() {
    const min = apps.reduce((prev, cur) => prev.spend < cur.spend ? prev : cur);
    const max = apps.reduce((prev, cur) => prev.spend > cur.spend ? prev : cur);
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
    })


    const [spend, setSpend] = useState(max.spend);
    const visible = apps.filter((app) => ((app.spend > min.spend) && (app.spend < spend)));

    // @ts-ignore
    return (
        <AppContext.Provider value={{spend, onChange: setSpend}}>
            <div>
                <h1>Pharos Coding Exercise</h1>
                <div className={'row'}>
                    <div className={'col1'}>
                        <Capabilities>
                            <CapabilityList cap={cap1}/>
                        </Capabilities>
                        <hr/>
                        <Slider max={max.spend} min={min.spend} name={'Spending'}/>
                    </div>
                    <div className={'col2'}>
                        <div className={'applist'}>
                            {visible.map((app) =>
                                <AppBox key={app.id} appId={app.id} name={app.name} spend={app.spend}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
