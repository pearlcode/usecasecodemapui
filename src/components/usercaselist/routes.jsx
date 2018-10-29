import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserCaseList from './userCaseList';
import UserCase from './../usercase';
const UserCaseRoutes = props => {
    let userCases = props.userCases;
    let match = props.match;

    const Uc = UserCaseWrap(props);

    return (
        <Switch>
            <Route
                path={`${match.path}/:userId`}
                component={Uc}
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

const UserCaseWrap = (props) => {
    let userCases = props.userCases;
    let match = props.match;
    return () => (<UserCase {...{ userId: match.params.userId, ...props }} />);
};


export default UserCaseRoutes;
