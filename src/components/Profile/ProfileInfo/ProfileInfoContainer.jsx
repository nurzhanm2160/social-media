import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { getProfileThunkCreator } from '../../../redux/reducers/profileReducer';
import withRouter from '../../hocs/withRouter';

class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        if (!this.props.router.params.userId) {
            this.props.getProfileThunkCreator(this.props.userId);
        } else {
            this.props.getProfileThunkCreator(this.props.router.params.userId);
        }
    }

    render() {
        return <ProfileInfo profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userId: state.usersPage.userId,
    };
};

export default connect(mapStateToProps, {
    getProfileThunkCreator,
})(withRouter(ProfileInfoContainer));
