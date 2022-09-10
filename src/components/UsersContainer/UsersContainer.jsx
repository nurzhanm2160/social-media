import Users from "./Users/Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/reducers/usersReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);