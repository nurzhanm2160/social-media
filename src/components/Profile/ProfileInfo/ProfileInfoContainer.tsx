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
import { $fixMe, ProfileType } from '../../../type';
import { StateType } from '../../../redux/reduxStore';

interface PropsType {
    router: $fixMe;
    userId: number;
    profile: ProfileType;
    status: string;
    getProfileThunkCreator: (userId: number) => void;
    getStatusThunkCreator: (userId: number) => void;
    updateStatusThunkCreator: () => void;
    saveAvatarThunkCreator: () => void;
}

class ProfileInfoContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType): void {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    refreshProfile(): void {
        if (this.props.router.params.userId === undefined) {
            this.props.getProfileThunkCreator(this.props.userId);
            this.props.getStatusThunkCreator(this.props.userId);
        } else {
            this.props.getProfileThunkCreator(this.props.router.params.userId);
            this.props.getStatusThunkCreator(this.props.router.params.userId);
        }
    }

    render(): JSX.Element {
        return (
            <ProfileInfo
                owner={typeof this.props.router.params.userId === 'undefined'}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusThunkCreator}
                saveAvatar={this.props.saveAvatarThunkCreator}
            />
        );
    }
}

const mapStateToProps = (state: StateType): $fixMe => {
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
