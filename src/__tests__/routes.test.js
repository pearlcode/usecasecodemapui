import {
    React,
    ReactDOM,
    Enzyme,
    shallow,
    mount,
    render,
    Adapter,
    shallowWithProps
} from './base';

import { MemoryRouter as MRouter, Route } from 'react-router-dom';
import Routes from '../components/usercaselist/routes';
import correctData from '../__mockdata__/correctUserCases';
import AppRoutes from './../routes';
const userCaseListPath = '/usercases';
describe('App ', () => {
    it('renders without crashing', () => {
        let wrapper = mount(
            <MRouter {...{ initialEntries: ['/usercases'] }}>
                <Route
                    path={userCaseListPath}
                    render={({ match }) => (
                        <AppRoutes {...{ match, userCases: correctData }} />
                    )}
                />
            </MRouter>
        );
    });
});
