import { MemoryRouter as MRouter } from 'react-router-dom';
import {
    React,
    shallow,
    render,
} from './base';

import App, { usecaseroutes } from '../app';

describe('App ', () => {
    it('renders without crashing', () => {
        const context = {};

        const router = () => (
            <MRouter initialEntries={['/usecases']} context={context} />
        );

        const wrapper = render(<App router={router} />);
        expect(wrapper).toMatchSnapshot();

        shallow(usecaseroutes({ match: { path: '/usecases' } }));
    });
});
