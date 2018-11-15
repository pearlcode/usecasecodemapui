import {
    shallowWithProps,
} from '../../app/__tests__/base';

import UserCase from '../userCase';

import correctData from '../../../__mockdata__/correctUserCases';

import selectById from '../../usercaselist/selectors';

describe('usercase', () => {
    it('should mount', () => {
        const wrapper = shallowWithProps(UserCase, {
            userCase: selectById(1, correctData),
        });
        expect(wrapper).toMatchSnapshot();
    });
});
