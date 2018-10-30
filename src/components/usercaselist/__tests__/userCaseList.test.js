import {
    React,
    ReactDOM,
    Enzyme,
    shallow,
    mount,
    Adapter,
    shallowWithProps,
    renderWithProps,
    mountWithProps,
} from './../../../__tests__/base';

import UserCaseList from '../userCaseList';
import correctData from '../../../__mockdata__/correctUserCases';

Enzyme.configure({ adapter: new Adapter() });
describe('UserCaseList ', () => {
    it('mounts properly with correct data', () => {
        let wrapper = shallowWithProps(UserCaseList, {
            userCases: correctData
        });
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('.user-cases').length).toEqual(1);

        expect(wrapper.find('li').length).toEqual(correctData.length);

        expect(
            wrapper.find('.user-case__title').contains([correctData[0].title])
        ).toEqual(true);

        expect(
            wrapper
                .find('.user-case__description')
                .contains([correctData[0].description])
        ).toEqual(true);
    });
});
