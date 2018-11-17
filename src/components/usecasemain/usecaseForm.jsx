import propTypes from 'prop-types';
import React from 'react';

class UsecaseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { usecaseName: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { close } = this.props;
        const { usecaseName } = this.state;
        return (
            <div>
                <div>New Usecase Form</div>
                <input
                    type="text"
                    name="usecaseName"
                    value={usecaseName}
                    onChange={this.handleInputChange}
                />
                <div>
                    <button
                        type="button"
                        className="usecase-form_close-button"
                        onClick={close}
                    >
cancel
                    </button>
                </div>
            </div>
        );
    }
}

UsecaseForm.propTypes = {
    close: propTypes.func.isRequired,
};

export default UsecaseForm;
