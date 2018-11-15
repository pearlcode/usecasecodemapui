import React from 'react';
import propTypes from 'prop-types';
import { UsercaseMainRoutes } from '../usercasemain/index';
import AppRoutes from '../../routes';

const userCases = [
    { id: 1, title: 'usercase 1', description: 'the first description' },
    { id: 2, title: 'usercase 2', description: 'the second description' },
];
const App = ({ router }) => {
    const PropRouter = router;

    return (
        <div className="App">
            <PropRouter>
                <AppRoutes userCases={userCases} />
            </PropRouter>
        </div>
    );
};

export const usercaseroutes = props => (
    <UsercaseMainRoutes {...props} userCases={userCases} />
);

App.propTypes = {
    router: propTypes.func.isRequired,
};

export default App;
