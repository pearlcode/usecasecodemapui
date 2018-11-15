import React from 'react';
import { Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';
import UsecaseList from '../usecaselist/usecaseList';
import Usecase from '../usecase';
import selectById from '../usecaselist/selectors';

const UsecaseMainRoutes = (props) => {
    const { usecases, match: rmatch } = props;
    return (
        <Switch>
            <Route
                path={`${rmatch.path}/:userId`}
                render={({ match }) => (
                    <Usecase
                        {...{
                            usecases,
                            usecase: selectById(
                                match.params.userId,
                                usecases,
                            ),
                            userId: match.params.userId,
                            match,
                        }}
                    />
                )}
            />
            <Route
                path={`${rmatch.path}`}
                render={() => <UsecaseList {...props} />}
            />
        </Switch>
    );
};

UsecaseMainRoutes.propTypes = {
    usecases: propTypes.arrayOf(propTypes.shape({})).isRequired,
    match: propTypes.shape({}).isRequired,
};

export default UsecaseMainRoutes;
