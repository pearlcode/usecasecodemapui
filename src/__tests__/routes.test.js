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
import UserCaseRoutes from './../routes';
const userCaseListPath = '/usercases';
describe('App ', () => {
    it('/usercases/ should use UserCaseRoutes component', () => {
        let wrapper = mount(
            <MRouter {...{ initialEntries: [userCaseListPath] }}>
                <div>
                <Route
                    path={userCaseListPath}
                    render={({ match }) => (
                        <AppRoutes {...{ match, userCases: correctData }} />
                    )}
                />
                </div>
            </MRouter>
        );

        expect(wrapper.find(UserCaseRoutes)).toHaveLength(1);
    });
});
