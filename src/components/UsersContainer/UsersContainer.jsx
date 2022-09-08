import Users from "./Users/Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/usersReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);