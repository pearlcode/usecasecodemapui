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
import Routes  from '../routes';
import correctData from '../../../__mockdata__/correctUserCases';

const parentPath = '/usercases';

const shallowRoute = () => {
    return shallowORrenderRoute(shallow);
};

const renderRoute = props => {
    return shallowORrenderRoute(render, props);
};

const shallowORrenderRoute = (
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

    it('should render usercaseList', () => {
        let wrapper = renderRoute({ initialEntries: [parentPath] });
        expect(wrapper).toMatchSnapshot();
    });

    it('should throw error', () => {
        try {
            render(
                <Router {...{ initialEntries: [parentPath] }}>
                    <Routes />
                </Router>
            );
        } catch (e) {
            expect(e.name).toEqual('TypeError');
            expect(e.message).toEqual(
                "Cannot read property 'path' of undefined"
            );
        }
    });

    it('should render usercaseList', () => {
        let wrapper = shallowRoute({ initialEntries: [parentPath] });
    });

    it('should route to usercase without error', () => {
        const wrapper = renderRoute({
            initialEntries: [`${parentPath}/${correctData[0].id}`]
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('user case should be  rendered', () => {
        const wrapper = shallow(<div><Router {...{ initialEntries: [parentPath] }}>
            <Routes />
        </Router></div>);

        console.log( wrapper.find(Route));

            const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
                console.log(route);
                const routeProps = route.props();
                pathMap[routeProps.path] = routeProps.component;
                return pathMap;
            }, {});

            console.log(pathMap);
            // { 'nurse/authorization' : NurseAuthorization, ... }

            //expect(pathMap['nurse/authorization']).toBe(NurseAuthorization);

        //expect(wrapper.get(0).attribs.class).toEqual('user-case')
    });

});
