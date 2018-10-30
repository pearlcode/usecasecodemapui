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

import { selectUserCase } from './../../usercaselist/selectors';

describe('usercase', () => {
    it('should mount', () => {
        let wrapper = shallowWithProps(UserCase, {
            userCase: selectUserCase(correctData, 1)
        });
        expect(wrapper).toMatchSnapshot();
    });
});
