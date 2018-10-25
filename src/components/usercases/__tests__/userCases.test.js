import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Usercases from "../userCases";
import correctData from "../__mockdata__/correctUserCases";

Enzyme.configure({ adapter: new Adapter() });
describe("Usercases ", () => {
  it("mounts properly with correct data", () => {
    let wrapper = mountWithData({
      userCases: correctData
    });
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(".user-cases").length).toEqual(1);

    expect(wrapper.find("li").length).toEqual(correctData.length);

    expect(
        wrapper
            .find(".user-case__title").contains([correctData[0].title])).toEqual(true);

    expect(
      wrapper
        .find(".user-case__description").contains([correctData[0].description])).toEqual(true);
  });
});

const mountWithData = props => shallow(<Usercases {...props} />);
