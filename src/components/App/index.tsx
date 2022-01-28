import React from "react";
import Slider from "../Slider";
import Capabilities from "../Capabilities";

import apps from '../../data.json';

import "./App.css";
import "../Applications/ApplicationList";

import { SpendContextProvider } from "./SpendContext";
import { CapContextProvider } from "./CapabilityContext";
import ApplicationList from "../Applications/ApplicationList";

export interface IApp {
    id:string;
    name: string;
    spend: number;
    BCAP1: string;
    BCAP2: string;
    BCAP3: string;
}

function App() {
    const min = apps.reduce((prev, cur) => prev.spend < cur.spend ? prev : cur);
    const max = apps.reduce((prev, cur) => prev.spend > cur.spend ? prev : cur);

    // @ts-ignore
    return (
        <SpendContextProvider max={max}>
            <CapContextProvider>
                <div>
                    <h1>Pharos Coding Exercise</h1>
                    <div className={'row'}>
                        <div className={'col1'}>
                            <Capabilities apps={apps} />
                            <hr/>
                            <Slider max={max.spend} min={min.spend} name={'Spending'}/>
                        </div>
                        <div className={'col2'}>
                            <ApplicationList apps={apps} max={max} min={min}/>
                        </div>
                    </div>
                </div>
            </CapContextProvider>

        </SpendContextProvider>
    );
}

export default App;
