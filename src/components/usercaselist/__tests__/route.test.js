import {
    React,
    ReactDOM,
    Enzyme,
    shallow,
    mount,
    render,
    Adapter,
    shallowProps
} from './../../../__tests__/base';
import { MemoryRouter as Router, Route, Switch } from 'react-router';
import Routes from '../routes';
import correctData from '../../../__mockdata__/correctUserCases';
import UserCase from './../../usercase/userCase';
import UserCaseList from './../userCaseList';
const userCaseListPath = '/usercases';
const userCasePath = `${userCaseListPath}/${correctData[0].id}`;

const shallowRoute = () => {
    return multiMountRoute(shallow);
};

const renderRoute = props => {
    return multiMountRoute(render, props);
};

const mountRoute = props => {
    return multiMountRoute(mount, props);
};

const multiMountRoute = (
    shallowOrRender,
    { initialEntries } = { initialEntries: ['/usercases'] }
) => {
    return shallowOrRender(
        <Router initialEntries={initialEntries}>
            <Routes
                {...{
                    match: {
                        path: '/usercases',
                        params: { userId: correctData[1].id }
                    },
                    userCases: correctData
                }}
            />
        </Router>
    );
};

describe('routes', () => {
    beforeEach(() => {});

    it('/usercases/ should render', () => {
        let wrapper = renderRoute({ initialEntries: [userCaseListPath] });
        expect(wrapper).toMatchSnapshot();
    });

    it('/usercases/:userId should render', () => {
        const wrapper = renderRoute({
            initialEntries: [userCasePath]
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('/usercases/:userId should be UserCase component', () => {
        const wrapper = mountRoute({ initialEntries: [userCasePath] });
        expect(wrapper.find(UserCase)).toHaveLength(1);
    });

    it('/usercases/ should be UserCase component', () => {
        const wrapper = mountRoute({ initialEntries: [userCaseListPath] });
        expect(wrapper.find(UserCaseList)).toHaveLength(1);
    });

    it('/usercases/ no props should throw error', () => {
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

    const expectPathError = e => {
        expect(e.name).toEqual('TypeError');
        expect(e.message).toEqual("Cannot read property 'path' of undefined");
    };
});
