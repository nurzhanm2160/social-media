import React from 'react';
import {connect} from "react-redux";
import {instance} from "../../../api/api";
import ProfileInfo from "./ProfileInfo";
import { setUserProfile } from "../../../redux/reducers/profileReducer";
import withRouter from "../../hocs/withRouter";
import {setUserId} from "../../../redux/reducers/usersReducer";

class ProfileInfoContainer extends React.Component {
    componentDidMount() {

        if(!this.props.router.params.userId){
            instance.get('profile/' + this.props.userId).then(response => {
                this.props.setUserProfile(response.data)
            })
        } else {
            instance.get('profile/' + this.props.router.params.userId).then(response => {
                this.props.setUserProfile(response.data)
            })
        }

    }

    render() {
        return <ProfileInfo profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userId: state.usersPage.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => dispatch(setUserProfile(profile)),
        setUserId: (userId) => dispatch(setUserId(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileInfoContainer));