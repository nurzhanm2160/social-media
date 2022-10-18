import React from 'react';

export class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        };
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    };

    deactivateEditMode = () => {
        this.setState({ editMode: false });
    };

    render() {
        return (
            <div>
                {this.state.editMode ? (
                    <div>
                        <input
                            autoFocus
                            onBlur={this.deactivateEditMode}
                            value={this.props.status}
                        />
                    </div>
                ) : (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                )}
            </div>
        );
    }
}
