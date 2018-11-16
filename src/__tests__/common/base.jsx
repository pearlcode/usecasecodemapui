import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function multiMount(mountType, component, props) {
    const Component = component;
    return mountType(<Component {...props} />);
}

const shallowWithProps = (component, props = {}) => multiMount(shallow, component, props);

const mountWithProps = (component, props = {}) => multiMount(mount, component, props);

const renderWithProps = (component, props = {}) => multiMount(render, component, props);
export {
    React,
    ReactDOM,
    Enzyme,
    shallow,
    mount,
    render,
    Adapter,
    shallowWithProps,
    renderWithProps,
    mountWithProps,

};
