import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { UserCaseRoutes } from "./components/usercases";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/usercases"
            render={({ match }) => (
              <UserCaseRoutes
                match={match}
                userCases={[
                  {
                    id: 1,
                    title: "usercase 1",
                    description: "the usercase description"
                  }
                ]}

              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
