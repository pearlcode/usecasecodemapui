import { MemoryRouter as MRouter, Route } from 'react-router-dom';
import { React, mount } from './base';

import correctData from '../../../__mockdata__/correctUsecases';
import AppRoutes from '../routes';
import UsecaseMainRoutes from '../../usecasemain/routes';

const usecaseListPath = '/usecases';
describe('App ', () => {
    it('/usecases/ should use usecaseRoutes component', () => {
        const wrapper = mount(
            <MRouter {...{ initialEntries: [usecaseListPath] }}>
                <div>
                    <Route
                        path={usecaseListPath}
                        render={({ match }) => (
                            <AppRoutes {...{ match, usecases: correctData }} />
                        )}
                    />
                </div>
            </MRouter>,
        );

        // expect(wrapper.find())

        expect(wrapper.find(UsecaseMainRoutes)).toHaveLength(1);
    });
});
