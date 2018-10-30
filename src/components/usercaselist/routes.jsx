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
                render={({ match }) => (
                    <UserCase
                        {...{
                            userCases,
                            userCase: findUserCase(userCases, match.params.userId),
                            userId: match.params.userId,
                            ...props
                        }}
                    />
                )}
            />
            <Route
                path={`${match.path}`}
                render={() => (
                    <UserCaseList { ...props } />
                )}
            />
        </Switch>
    );
};

export const findUserCase = (userCases, id) => {
    return userCases.find(u => u.id === parseInt(id));
};

export default UserCaseRoutes;
