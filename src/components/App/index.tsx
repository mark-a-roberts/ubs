import React from "react";
import Slider from "../Slider";
import Capabilities from "../Capabilities";
import AppBox, {AppProps} from "../AppBox";

import apps from '../../data.json';

import "./App.css";


function App() {
  const min = apps.reduce( (prev, cur) => prev.spend < cur.spend ? prev : cur);
  const max = apps.reduce( (prev, cur) => prev.spend > cur.spend ? prev : cur);

    const visible = apps.filter( (app) => ((app.spend > min.spend) && (app.spend < max.spend)));

    return (
    <div>
      <h1>Pharos Coding Exercise</h1>
        <div className={'row'}>
            <div className={'col1'}>
                <Capabilities />
                <hr />
                <Slider max={max.spend} min={min.spend} />
            </div>
            <div className={'col2'}>
                <div className={'applist'}>
                    {visible.map( (app) =>
                        <AppBox appId={app.id} name={app.name} spend={app.spend} />
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
