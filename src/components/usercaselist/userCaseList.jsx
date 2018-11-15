import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const userCaseList = ({ userCases, match }) => (
    <div className="user-cases">
        <button type="button">new usercase</button>
        {userCases.map(usercase => (
            <li key={usercase.id} className="user-case">
                <div className="user-case__title">
                    <Link to={`${match.url}/${usercase.id}`}>
                        {usercase.title}
                    </Link>
                </div>
                <div className="user-case__description">
                    {usercase.description}
                </div>
            </li>
        ))}
    </div>
);

userCaseList.propTypes = {
    userCases: propTypes.arrayOf(propTypes.shape({})).isRequired,
    match: propTypes.shape({}).isRequired,
};

export default userCaseList;
