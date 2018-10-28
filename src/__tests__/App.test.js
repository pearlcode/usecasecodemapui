import {
  React,
  ReactDOM,
  Enzyme,
  shallow,
  mount,
  render,
  Adapter,
  shallowProps
} from './base';

import App, {usercaseroutes} from '../App';
import { MemoryRouter as MRouter } from 'react-router-dom';

import Routes from '../components/usercaselist/routes';
import correctData from '../components/usercaselist/__mockdata__/correctUserCases';

describe('App ', () => {
  it('renders without crashing', () => {
    let context={};

    let router = () => <MRouter initialEntries={['/usercases']} context={context} />

    let wrapper = render(
        <App router={router}> </App>
    );
    expect(wrapper).toMatchSnapshot();

    shallow(usercaseroutes({match:{path:'/usercases'}}));
  });
});
