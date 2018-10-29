import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { UserCaseRoutes } from './components/usercaselist';
import { } from 'react-router-dom';
class App extends Component {
  render() {

    let PropRouter = this.props.router;
    return (
      <div className="App">
        <PropRouter>
          <Route
              path={"/usercases"}
              render={usercaseroutes} />
        </PropRouter>
      </div>
    );
  }
}

const userCases = [
    {  id: 1, title: "usercase 1", description: "the first description" },
    { id: 2, title: "usercase 2", description: "the second description" }
];

export const usercaseroutes = (props) => <UserCaseRoutes {...props} userCases={userCases}></UserCaseRoutes>;
export default App;
