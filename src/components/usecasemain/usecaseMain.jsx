import React from 'react';
import UsecaseMainRoutes from './routes';
import UsecaseForm from './usecaseForm';

class UsecaseMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showNewUserForm: false };
        this.clickNewUsecase = this.clickNewUsecase.bind(this);
        this.clickCloseNewUsecase = this.clickCloseNewUsecase.bind(this);
        this.clickSaveNewUsecase = this.clickSaveNewUsecase.bind(this);
    }

    clickNewUsecase() {
        this.setState({ showNewUserForm: true });
    }

    clickCloseNewUsecase() {
        this.setState({ showNewUserForm: false });
    }

    clickSaveNewUsecase() {
        this.setState({ showNewUserForm: false });
    }

    render() {
        const { showNewUserForm } = this.state;
        return (
            <div className="user-case-main">
                <button className="usecase-main_close-button" type="button" onClick={() => this.clickNewUsecase()}>
                    new usercase
                </button>
                {showNewUserForm && (
                    <UsecaseForm
                        {...{
                            close: this.clickCloseNewUsecase,
                            save: this.clickSaveNewUsecase,
                        }}
                    />
                )}
                <div className="section-header">usecase dashboard</div>
                <UsecaseMainRoutes {...this.props} />
            </div>
        );
    }
}

export default UsecaseMain;
