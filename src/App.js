import React, { Component } from 'react';

import { UserCaseRoutes } from './components/usercaselist';
import AppRoutes from './routes';
class App extends Component {
    render() {
        let PropRouter = this.props.router;
        return (
            <div className="App">
                <PropRouter>
                    <AppRoutes userCases={userCases} />
                </PropRouter>
            </div>
        );
    }
}

const userCases = [
    { id: 1, title: 'usercase 1', description: 'the first description' },
    { id: 2, title: 'usercase 2', description: 'the second description' }
];

export const usercaseroutes = props => (
    <UserCaseRoutes {...props} userCases={userCases} />
);
export default App;
