import React from 'react';
import UsecaseMainRoutes from './routes';

const UsecaseMain = props => (
    <div className="user-case-main">
        <div className="section-header">usecase dashboard</div>
        <UsecaseMainRoutes {...props} />
    </div>
);

export default UsecaseMain;
