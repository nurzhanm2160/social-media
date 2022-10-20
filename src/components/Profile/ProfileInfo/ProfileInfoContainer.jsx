import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    saveAvatarThunkCreator,
    updateStatusThunkCreator,
} from '../../../redux/reducers/profileReducer';
import withRouter from '../../hocs/withRouter';

class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    refreshProfile() {
        if (!this.props.router.params.userId) {
            this.props.getProfileThunkCreator(this.props.userId);
            this.props.getStatusThunkCreator(this.props.userId);
        } else {
            this.props.getProfileThunkCreator(this.props.router.params.userId);
            this.props.getStatusThunkCreator(this.props.router.params.userId);
        }
    }

    render() {
        return (
            <ProfileInfo
                owner={!this.props.router.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusThunkCreator}
                saveAvatar={this.props.saveAvatarThunkCreator}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userId: state.usersPage.userId,
        status: state.profilePage.status,
    };
};

export default connect(mapStateToProps, {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    saveAvatarThunkCreator,
})(withRouter(ProfileInfoContainer));
