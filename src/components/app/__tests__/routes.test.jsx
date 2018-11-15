import { MemoryRouter as MRouter, Route } from 'react-router-dom';
import { React, mount } from './base';

import correctData from '../../../__mockdata__/correctUserCases';
import AppRoutes, { UsercaseMainRoutes } from '../../../routes';

const userCaseListPath = '/usercases';
describe('App ', () => {
    it('/usercases/ should use UserCaseRoutes component', () => {
        const wrapper = mount(
            <MRouter {...{ initialEntries: [userCaseListPath] }}>
                <div>
                    <Route
                        path={userCaseListPath}
                        render={({ match }) => (
                            <AppRoutes {...{ match, userCases: correctData }} />
                        )}
                    />
                </div>
            </MRouter>,
        );

        expect(wrapper.find(UsercaseMainRoutes)).toHaveLength(1);
    });
});
