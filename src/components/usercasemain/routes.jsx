import React from 'react';
import { Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';
import UserCaseList from '../usercaselist/userCaseList';
import UserCase from '../usercase';
import selectById from '../usercaselist/selectors';

const UsercaseMainRoutes = (props) => {
    const { userCases, match: rmatch } = props;
    return (
        <Switch>
            <Route
                path={`${rmatch.path}/:userId`}
                render={({ match }) => (
                    <UserCase
                        {...{
                            userCases,
                            userCase: selectById(
                                match.params.userId,
                                userCases,
                            ),
                            userId: match.params.userId,
                            match,
                        }}
                    />
                )}
            />
            <Route
                path={`${rmatch.path}`}
                render={() => <UserCaseList {...props} />}
            />
        </Switch>
    );
};

UsercaseMainRoutes.propTypes = {
    userCases: propTypes.arrayOf(propTypes.shape({})).isRequired,
    match: propTypes.shape({}).isRequired,
};

export default UsercaseMainRoutes;
