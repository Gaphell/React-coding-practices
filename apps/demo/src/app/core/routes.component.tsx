import ProtectedRoutes from "./protected-routes.container";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/home/home.page";
import LoginPage from "../pages/auth/login.page";
import LandingPage from "../pages/landing/landing.page";
import React, { useState } from "react";
import ErrorPageComponent from "../shared/components/error/error.page";



const RoutesComponent = ({ currentUser }) => {
    const [isLoading, setLoaderState] = useState(true);
    setTimeout(() => {
        setLoaderState(false)
    }, 2000);
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <ProtectedRoutes exact path='/home' component={HomePage} isAuthenticated={currentUser} isLoading={isLoading} />
            <Route exact path='/login' render={() => currentUser ? <Redirect to={'/'} /> : <LoginPage />} />
            <Route path='/404' component={ErrorPageComponent} />
            <Route component={ErrorPageComponent} />
        </Switch>
    );
}
export default RoutesComponent;