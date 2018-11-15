import { Route } from 'react-router-dom';
import React from 'react';
import { UsercaseMainRoutes } from './components/usercasemain';

export default ({ userCases }) => (
    <Route
        path="/usercases"
        render={({ match }) => (
            <UsercaseMainRoutes {...{ match }} userCases={userCases} />
        )}
    />
);

export { UsercaseMainRoutes };
