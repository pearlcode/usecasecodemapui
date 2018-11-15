import React from 'react';
import propTypes from 'prop-types';
import UsecaseMain from '../usecasemain';
import AppRoutes from '../../routes';

const usecases = [
    { id: 1, title: 'usecase 1', description: 'the first description' },
    { id: 2, title: 'usecase 2', description: 'the second description' },
];
const App = ({ router }) => {
    const PropRouter = router;

    return (
        <div className="App">
            <PropRouter>
                <AppRoutes usecases={usecases} />
            </PropRouter>
        </div>
    );
};

export const usecaseroutes = props => (
    <UsecaseMain {...props} usecases={usecases} />
);

App.propTypes = {
    router: propTypes.func.isRequired,
};

export default App;
