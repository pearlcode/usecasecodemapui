import {
  React,
  ReactDOM,
  Enzyme,
  shallow,
  mount,
  Adapter,
  shallowProps
} from "./../../../__tests__/base";

import UserCase from "./../userCase";

describe("usercase", () => {
  it("should mount", () => {
     let wrapper = shallowProps(UserCase)
      expect(wrapper).toMatchSnapshot();
  });
});
