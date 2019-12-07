import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomeContainer from "./HomeContainer";
import NewComponentContainer from "../../neko-4-new/new-1-ui/NewComponentContainer";
import TimeTrackerPage from "../../neko-5-project/pr-1-1-time-tracker/new-1-ui/TimeTrackerPage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={pageData => <NewComponentContainer data={pageData}/>}/>
            <Route exact path="/time-tracker" render={pageData => <TimeTrackerPage data={pageData}/>}/>



            <Route exact path="/dev-home" render={pageData => <HomeContainer data={pageData}/>}/>
            <Route exact path="/dev/:xxx" render={pageData => <HomeContainer data={pageData}/>}/>

            <Route render={() => <div  style={{display: 'flex', justifyContent: 'center'}}>Error Page 404</div>}/>
        </Switch>
    );
};

export default Routes;
