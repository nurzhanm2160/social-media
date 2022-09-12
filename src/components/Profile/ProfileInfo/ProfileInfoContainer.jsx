import React from 'react';
import {connect} from "react-redux";
import {instance} from "../../../api/api";
import ProfileInfo from "./ProfileInfo";
import { setUserProfile } from "../../../redux/reducers/profileReducer";

class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        instance.get('profile/' + this.props.userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <ProfileInfo profile={this.props.profile} />
    }
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userId: state.usersPage.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => dispatch(setUserProfile(profile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer);