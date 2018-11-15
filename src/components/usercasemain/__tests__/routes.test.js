/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { mount, render } from '../../app/__tests__/base';
import Routes from '../routes';
import correctData from '../../../__mockdata__/correctUserCases';
import UserCase from '../../usercase/userCase';
import UserCaseList from '../../usercaselist/userCaseList';

const userCaseListPath = '/usercases';
const userCasePath = `${userCaseListPath}/${correctData[0].id}`;

const multiMountRoute = (
    renderType,
    { initialEntries } = { initialEntries: ['/usercases'] },
) => renderType(
    <Router initialEntries={initialEntries}>
        <Route
            path={userCaseListPath}
            render={props => (
                <Routes
                    {...{
                        userCases: correctData,
                        ...props,
                    }}
                />
            )}
        />
    </Router>,
);

const renderRoute = props => multiMountRoute(render, props);

const mountRoute = props => multiMountRoute(mount, props);


describe('routes', () => {
    const expectPathError = (e) => {
        expect(e.name).toEqual('TypeError');
        expect(e.message).toEqual("Cannot read property 'path' of undefined");
    };

    beforeEach(() => {});

    it('/usercases should render', () => {
        const wrapper = renderRoute({ initialEntries: [userCaseListPath] });
        expect(wrapper).toMatchSnapshot();
    });

    it('/usercases/:userId should render', () => {
        const wrapper = renderRoute({
            initialEntries: [userCasePath],
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('/usercases/:userId should be UserCase component', () => {
        const wrapper = mountRoute({ initialEntries: [userCasePath] });
        expect(wrapper.find(UserCase)).toHaveLength(1);
    });

    it('/usercases should be UserCase component', () => {
        const wrapper = mountRoute({ initialEntries: [userCaseListPath] });
        expect(wrapper.find(UserCaseList)).toHaveLength(1);
    });

    it('/usercases no props should throw error', () => {
        try {
            renderRoute({ initialEntries: [userCaseListPath] });
        } catch (e) {
            expectPathError(e);
        }
    });

    it('/usercases/:userId no props should throw error', () => {
        try {
            renderRoute({ initialEntries: [userCasePath] });
        } catch (e) {
            expectPathError(e);
        }
    });
});
