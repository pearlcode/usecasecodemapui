import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserCaseList from './userCaseList';
import UserCase from './../usercase';
const UserCaseRoutes = props => {
    let userCases = props.userCases;
    let match = props.match;
    return (
        <Switch>
            <Route
                path={`${match.path}/:userId`}
                render={() => (
                    <UserCase {...{ userId: match.params.userId, ...props }} />
                )}
            />
            <Route
                path={`${match.path}`}
                render={() => (
                    <UserCaseList {...{ parentUrl: match.path, ...props }} />
                )}
            />
        </Switch>
    );
};

export default UserCaseRoutes;
