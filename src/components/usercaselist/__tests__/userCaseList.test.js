/* eslint-disable react/jsx-filename-extension */
import { MemoryRouter as Router, Route, Link } from 'react-router-dom';
import {
    React,
    mount,
    shallowWithProps,
} from '../../app/__tests__/base';
import UserCaseList from '../index';
import correctData from '../../../__mockdata__/correctUserCases';

const userCaseListPath = '/usercases';

describe('UserCaseList ', () => {
    it('mounts properly with correct data', () => {
        const wrapper = shallowWithProps(UserCaseList, {
            userCases: correctData,
            match: { url: '/usercases' },
        });
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('.user-cases').length).toEqual(1);

        expect(wrapper.find('li').length).toEqual(correctData.length);

        expect(
            wrapper.find('.user-case__title').contains([correctData[0].title]),
        ).toEqual(true);

        expect(
            wrapper
                .find('.user-case__description')
                .contains([correctData[0].description]),
        ).toEqual(true);
    });

    it('has 2 links to usercase/:userId', () => {
        const wrapper = mount(
            <Router {...{ initialEntries: [userCaseListPath] }}>
                <Route
                    path={`${userCaseListPath}`}
                    render={({ match }) => (
                        <UserCaseList
                            {...{
                                match,
                                userCases: correctData,
                            }}
                        />
                    )}
                />
            </Router>,
            {
                userCases: correctData,
            },
        );
        const links = wrapper.find(Link);
        expect(links).toHaveLength(correctData.length);

        links.forEach((node, i) => {
            expect(node.props().to).toEqual(
                `${userCaseListPath}/${correctData[i].id}`,
            );
        });
    });
});
