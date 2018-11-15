import React from 'react';
import propTypes from 'prop-types';

const UseCase = ({ usecase }) => (
    <div className="user-case">
usecase
        {usecase.id}
    </div>
);

UseCase.propTypes = {
    usecase: propTypes.shape({}).isRequired,
};

export default UseCase;
