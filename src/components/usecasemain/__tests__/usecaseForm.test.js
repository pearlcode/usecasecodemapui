/* eslint-disable react/jsx-filename-extension */
import {
    React,
    mount,
} from '../../../__tests__/common/base';

import UsecaseForm from '../usecaseForm';

describe('usecaseForm', () => {
    it('should render the usecaseForm', () => {
        const wrapper = mount(<UsecaseForm />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(UsecaseForm)).toHaveLength(1);
    });
});
