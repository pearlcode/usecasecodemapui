import { Route } from 'react-router-dom';
import React from 'react';
import { UsecaseMainRoutes } from './components/usecasemain';

export default ({ usecases }) => (
    <Route
        path="/usecases"
        render={({ match }) => (
            <UsecaseMainRoutes {...{ match }} usecases={usecases} />
        )}
    />
);

export { UsecaseMainRoutes };
