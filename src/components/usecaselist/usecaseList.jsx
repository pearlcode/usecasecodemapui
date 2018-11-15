import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const usecaseList = ({ usecases, match }) => (
    <div className="user-cases">
        <button type="button">new usecase</button>
        {usecases.map(usecase => (
            <li key={usecase.id} className="user-case">
                <div className="user-case__title">
                    <Link to={`${match.url}/${usecase.id}`}>
                        {usecase.title}
                    </Link>
                </div>
                <div className="user-case__description">
                    {usecase.description}
                </div>
            </li>
        ))}
    </div>
);

usecaseList.propTypes = {
    usecases: propTypes.arrayOf(propTypes.shape({})).isRequired,
    match: propTypes.shape({}).isRequired,
};

export default usecaseList;
