import { Route } from 'react-router-dom';
import React from 'react';
import UsecaseMain from '../usecasemain/index';

export default ({ usecases }) => (
    <Route
        path="/usecases"
        render={({ match }) => (
            <UsecaseMain {...{ match }} usecases={usecases} />
        )}
    />
);

export { UsecaseMain };
