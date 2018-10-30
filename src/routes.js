import { UserCaseRoutes } from './components/usercaselist';
import { Route } from 'react-router-dom';
import React from 'react';

export default props => {
    const userCases = props.userCases;
    return (
        <Route
            path={'/usercases'}
            render={({ match }) => (
                <UserCaseRoutes {...{...props, match}} userCases={userCases} />
            )}
        />
    );
};
