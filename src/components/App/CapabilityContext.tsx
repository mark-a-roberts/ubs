import React, {createContext, useState} from "react";

export const CapContext = createContext({
    capId: '',
    setCapId: (val: any) => {
    }
});

const logMessage = (message:any) => {
    console.log(message);
};

export const CapContextProvider = (props:any) => {
    const [capId, setCapId] = useState('');

    const contextValue = {
        capId,
        setCapId,
        logMessage
    };
    return (
        <CapContext.Provider value={contextValue}>{props.children}</CapContext.Provider>
    );
};
