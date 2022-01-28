import React, {createContext, useState} from "react";

export const SpendContext = createContext({
    spend: 0,
    onChange: (val: any) => {
    }
});

const logMessage = (message:any) => {
    console.log(message);
};

export const SpendContextProvider = (props:any) => {
    const [spend, setSpend] = useState(props.max.spend);

    const contextValue = {
        spend,
        onChange: setSpend,
        logMessage
    };
    return (
        <SpendContext.Provider value={contextValue}>{props.children}</SpendContext.Provider>
    );
};
