import React from 'react';

export class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    };

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    };

    onChangeStatus = (e) => {
        this.setState({
            status: e.target.value,
        });
    };

    render() {
        console.log(this.state.status);
        return (
            <div>
                {this.state.editMode ? (
                    <div>
                        <input
                            autoFocus
                            onChange={this.onChangeStatus}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                        />
                    </div>
                ) : (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {!this.state.status ? '-----' : this.state.status}
                        </span>
                    </div>
                )}
            </div>
        );
    }
}
