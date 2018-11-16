/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { mount, render } from '../../../__tests__/common/base';
import Routes from '../routes';
import correctData from '../../../__mockdata__/correctUsecases';
import Usecase from '../../usecase/usecase';
import UsecaseList from '../../usecaselist/usecaseList';

const usecaseListPath = '/usecases';
const usecasePath = `${usecaseListPath}/${correctData[0].id}`;

const multiMountRoute = (
    renderType,
    { initialEntries } = { initialEntries: ['/usecases'] },
) => renderType(
    <Router initialEntries={initialEntries}>
        <Route
            path={usecaseListPath}
            render={props => (
                <Routes
                    {...{
                        usecases: correctData,
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

    it('/usecases should render', () => {
        const wrapper = renderRoute({ initialEntries: [usecaseListPath] });
        expect(wrapper).toMatchSnapshot();
    });

    it('/usecases/:userId should render', () => {
        const wrapper = renderRoute({
            initialEntries: [usecasePath],
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('/usecases/:userId should be usecase component', () => {
        const wrapper = mountRoute({ initialEntries: [usecasePath] });
        expect(wrapper.find(Usecase)).toHaveLength(1);
    });

    it('/usecases should be usecase component', () => {
        const wrapper = mountRoute({ initialEntries: [usecaseListPath] });
        expect(wrapper.find(UsecaseList)).toHaveLength(1);
    });

    it('/usecases no props should throw error', () => {
        try {
            renderRoute({ initialEntries: [usecaseListPath] });
        } catch (e) {
            expectPathError(e);
        }
    });

    it('/usecases/:userId no props should throw error', () => {
        try {
            renderRoute({ initialEntries: [usecasePath] });
        } catch (e) {
            expectPathError(e);
        }
    });
});
