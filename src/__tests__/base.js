import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });


const shallowProps = (component, props = {}) => {
    let Component = component
    return shallow(<Component { ...props } />);
};

export { React, ReactDOM, Enzyme, shallow, mount, render, Adapter, shallowProps};

