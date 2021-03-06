import React from 'react';
import propTypes from 'prop-types';

const UseCase = ({ usecase }) => (
    <div className="user-case">
        <span>usecase </span>
        <span>{usecase.id}</span>
    </div>
);

UseCase.propTypes = {
    usecase: propTypes.shape({}).isRequired,
};

export default UseCase;
