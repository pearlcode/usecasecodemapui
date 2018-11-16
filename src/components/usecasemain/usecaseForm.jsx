import propTypes from 'prop-types';
import React from 'react';

const UsecaseForm = props => (
    <div>
        <div>New Usecase Form</div>

        <button type="button" className="usecase-form_close-button" onClick={() => props.clickCloseNewUsecase()}>cancel</button>
    </div>
);


UsecaseForm.propTypes = {
    clickCloseNewUsecase: propTypes.func.isRequired,
};

export default UsecaseForm;
