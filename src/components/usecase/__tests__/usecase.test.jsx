import {
    shallowWithProps,
} from '../../app/__tests__/base';

import usecase from '../usecase';

import correctData from '../../../__mockdata__/correctUsecases';

import selectById from '../../usecaselist/selectors';

describe('usecase', () => {
    it('should mount', () => {
        const wrapper = shallowWithProps(usecase, {
            usecase: selectById(1, correctData),
        });
        expect(wrapper).toMatchSnapshot();
    });
});
