import React from "react";
import Slider from "./components/Slider";
import Capabilities from "./components/Capabilities";

function App() {
  return (
    <div>
      <h1>Pharos Coding Exercise</h1>
        <div className={'col1'}>
            <Capabilities />
            <hr />
            <Slider/>
        </div>
        <div className={'col2'}>
        </div>
    </div>
  );
}

export default App;
