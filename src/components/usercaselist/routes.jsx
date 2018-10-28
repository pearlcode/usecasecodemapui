import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserCaseList from './userCaseList';
import UserCase from './../usercase';
const UserCaseRoutes = ({ userCases, match }) => {


  return (
    <Switch>
      <Route path={`${match.path}/:userId`} component={() => <UserCase />} />
      <Route
        path={`${match.path}`}
        render={() => (
          <UserCaseList {...{ parentUrl: match.path, userCases }} />
        )}
      />
    </Switch>
  );
};


export default UserCaseRoutes;
