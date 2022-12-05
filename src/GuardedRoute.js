import React from 'react';
import { Route, Navigate } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
    let user = JSON.parse(window.localStorage.getItem('loggedUser'));
    return(
        <Route {...rest} render={(props) => (
            user !== null
                ? <Component {...props} />
                : <Navigate to='/' />
        )} />
    )
}

export default GuardedRoute;