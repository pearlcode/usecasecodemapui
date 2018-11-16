/* eslint-disable react/jsx-filename-extension */
import { MemoryRouter as MRouter, Route } from 'react-router-dom';
import { React, render, mount } from '../../../__tests__/common/base';
import correctData from '../../../__mockdata__/correctUsecases';
import UsecaseMain from '../usecaseMain';

const usecaseListPath = '/test/usecases';
describe('usecaseMain', () => {
    it('should render the UsecaseMain', () => {
        const wrapper = render(
            <MRouter {...{ initialEntries: [usecaseListPath] }}>
                <Route
                    path="/usecases"
                    render={({ match }) => (
                        <UsecaseMain {...{ match }} usecases={correctData} />
                    )}
                />
            </MRouter>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should show form when click new UsecaseMain', () => {
        const wrapper = mount(
            <MRouter initialEntries={[usecaseListPath]}>
                <Route
                    path={`${usecaseListPath}`}
                    render={({ match }) => (
                        <UsecaseMain {...{ match }} usecases={correctData} />
                    )}
                />
            </MRouter>,
            {
                usecases: correctData,
            },
        );

        wrapper.find('button').simulate('click');
    });
});
