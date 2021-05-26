import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DiscoCruiser from "./Games/DiscoCruiser";

export default function Games({ unityCtx }) {
    let { path, url } = useRouteMatch();
    return <Switch>
        <Route exact path={path}>
            <h2>Games</h2>
            <DiscoCruiser></DiscoCruiser>
            <ul>
                <li>
                    <Link to={`${url}/disco-cruiser`}>DiscoCruiser</Link>
                </li>
            </ul>
        </Route>
        <Route path={`${url}/disco-cruiser`}>
            <DiscoCruiser unityCtx={unityCtx}></DiscoCruiser>
        </Route>
    </Switch>
}