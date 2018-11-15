import React from 'react';
import propTypes from 'prop-types';

const UseCase = ({ userCase }) => (
    <div className="user-case">
Usercase
        {userCase.id}
    </div>
);

UseCase.propTypes = {
    userCase: propTypes.shape({}).isRequired,
};

export default UseCase;
