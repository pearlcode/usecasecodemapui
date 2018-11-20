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
        const close = jest.fn();
        const wrapper = mount(<UsecaseForm {...{ close }} />);

        wrapper.find('button').simulate('click');
        expect(close.mock.calls.length).toBe(1);
    });

    it('should call changeUsecaseName', () => {
        const wrapper = mount(<UsecaseForm {...{ close: jest.fn() }} />);
        wrapper.find('input[name="name"]').simulate('change', { target: { name: 'name', value: 'test' } });
        expect(wrapper.state('name')).toEqual('test');
    });
});
