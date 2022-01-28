import React from "react";
import AppBox, {AppProps} from "./AppBox";
import {IApp} from "../App"

interface AppList {
    max: IApp;
    min: IApp;
    apps: Array<IApp>;
}

export default function ApplicationList(props:AppList) {
    const apps = props.apps;
    const visible = apps.filter((app) => ((app.spend >props.min.spend) && (app.spend < props.max.spend)));
    return (
        <div className={'applist'}>
            {
                visible.map((app) =>
                    <AppBox key={app.id} appId={app.id} name={app.name} spend={app.spend}/>
                )
            }
        </div>
    )
}
