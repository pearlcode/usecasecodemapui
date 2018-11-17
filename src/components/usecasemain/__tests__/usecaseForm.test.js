/* eslint-disable react/jsx-filename-extension */
import {
    React,
    render,
    mount,
} from '../../../__tests__/common/base';

import UsecaseForm from '../usecaseForm';

describe('usecaseForm', () => {
    it('should render the usecaseForm', () => {
        const wrapper = render(<UsecaseForm {...{ close: jest.fn() }} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the usecaseForm', () => {
        const wrapper = mount(<UsecaseForm {...{ close: jest.fn() }} />);
        //  expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(UsecaseForm)).toHaveLength(1);
    });
    it('should click close', () => {
        const wrapper = mount(<UsecaseForm {...{ close: jest.fn() }} />);

        wrapper.find('button').simulate('click');
    });

    it('should call changeUsecaseName', () => {
        const wrapper = mount(<UsecaseForm {...{ close: jest.fn() }} />);
        // wrapper.find('input').simulate('keypress', {key: 'a'});
        //   wrapper.find('input').value = 'test';
        wrapper.find('input').simulate('change');
    });
});
