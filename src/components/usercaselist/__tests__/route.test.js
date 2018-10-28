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
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Routes from '../routes';
import correctData from '../__mockdata__/correctUserCases';

describe('routes', () => {
  it('should not error', () => {
    let wrapper = render(
      <Router initialEntries={['/usercases']}>
        <Route
          path="/usercases"
          render={({ match }) => (
            <Routes {...{ match: match, userCases: correctData }} />
          )}
        />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should show first usercase', () => {
    let wrapper = render(
      <Router initialEntries={[`/usercases/${correctData[0].id}`]}>
        <Route
          path="/usercases"
          render={({ match }) => (
            <Routes {...{ match: match, userCases: correctData }} />
          )}
        />
      </Router>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
