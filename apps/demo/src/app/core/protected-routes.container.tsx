import React from 'react';
import { Redirect, Route } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, isAuthenticated, ...rest }) => {
    return <Route {...rest} render={props => isAuthenticated
        ? (<Component {...props}  {...rest} />)
        : (<Redirect to={{ pathname: "/404" }} />)
    } />
}

export default ProtectedRoutes;