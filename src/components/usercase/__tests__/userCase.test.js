import {
  React,
  ReactDOM,
  Enzyme,
  shallow,
  mount,
  Adapter,
  shallowWithProps
} from './../../../__tests__/base';

import UserCase from './../userCase';
import correctData from '../../../__mockdata__/correctUserCases';

describe('usercase', () => {
  it('should mount', () => {
    let wrapper = shallowWithProps(UserCase);
    expect(wrapper).toMatchSnapshot();

  });
});
