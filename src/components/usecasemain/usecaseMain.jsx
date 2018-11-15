import React from 'react';
import UsecaseMainRoutes from './routes';

const UsecaseMain = props => (
    <div className="user-case-main">
        <button type="button">new usercase</button>
        <div className="section-header">usecase dashboard</div>
        <UsecaseMainRoutes {...props} />
    </div>
);

export default UsecaseMain;
