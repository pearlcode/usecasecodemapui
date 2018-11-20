import propTypes from 'prop-types';
import React from 'react';

class UsecaseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { close, save } = this.props;
        const { name } = this.state;
        return (
            <div>
                <div>New Usecase Form</div>
                <input
                    placeholder="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleInputChange}
                />
                <div>
                    <textarea placeholder=" description" name="description" onChange={this.handleInputChange} />
                </div>
                <div>
                    <button
                        type="button"
                        className="usecase-form_close-button"
                        onClick={close}
                    >
cancel
                    </button>

                    <button
                        type="button"
                        className="usecase-form-save-button"
                        onClick={save}
                    >
                        save
                    </button>
                </div>
            </div>
        );
    }
}

UsecaseForm.propTypes = {
    close: propTypes.func.isRequired,
    save: propTypes.func.isRequired,
};

UsecaseForm.defaultProps = {
};

export default UsecaseForm;
