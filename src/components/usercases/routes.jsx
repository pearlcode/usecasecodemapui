import React from "react";
import { Route, Switch } from "react-router-dom";
import UserCases from "./userCases";
import UserCase from './../usercase';
export default ({ userCases, match }) => (
  <div>
    <Switch>
      <Route
        path={`${match.path}/:userId`}
        component={() => <UserCase />}
      />
      <Route
        path={`${match.path}`}
        render={() => <UserCases {...{ parentUrl: match.path, userCases }} />}
      />
    </Switch>
  </div>
);
