import {
    React,
    ReactDOM,
    Enzyme,
    shallow,
    mount,
    Adapter,
    shallowWithProps,
    renderWithProps,
    mountWithProps
} from './../../../__tests__/base';

import { MemoryRouter as Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import UserCaseList from '../userCaseList';
import correctData from '../../../__mockdata__/correctUserCases';

const userCaseListPath = '/usercases';
const userCasePath = `${userCaseListPath}/${correctData[0].id}`;

describe('UserCaseList ', () => {
    it('mounts properly with correct data', () => {
        let wrapper = shallowWithProps(UserCaseList, {
            userCases: correctData,
            match: { url: '/usercases' }
        });
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('.user-cases').length).toEqual(1);

        expect(wrapper.find('li').length).toEqual(correctData.length);

        expect(
            wrapper.find('.user-case__title').contains([correctData[0].title])
        ).toEqual(true);

        expect(
            wrapper
                .find('.user-case__description')
                .contains([correctData[0].description])
        ).toEqual(true);
    });

    it('has 2 links to usercase/:userId', () => {
        let wrapper = mount(
            <Router {...{ initialEntries: [userCaseListPath] }}>
                <Route path={`${userCaseListPath}/:userId`}
                render={({match}) => (<UserCaseList
                    {...{match,
                        userCases: correctData
                    }}
                />)}
                />
            </Router>,
            {
                userCases: correctData
            }
        );
        const links = wrapper.find(Link);
       // expect(links).toHaveLength(correctData.length);

        links.forEach((node, i) => {
            expect(node.props().to).toEqual(
                `${userCaseListPath}/${correctData[i].id}`
            );
        });
    });
});
