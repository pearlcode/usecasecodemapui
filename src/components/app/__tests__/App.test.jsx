import { MemoryRouter as MRouter } from 'react-router-dom';
import {
    React,
    shallow,
    render,
} from './base';

import App, { usercaseroutes } from '../app';

describe('App ', () => {
    it('renders without crashing', () => {
        const context = {};

        const router = () => (
            <MRouter initialEntries={['/usercases']} context={context} />
        );

        const wrapper = render(<App router={router} />);
        expect(wrapper).toMatchSnapshot();

        shallow(usercaseroutes({ match: { path: '/usercases' } }));
    });
});
