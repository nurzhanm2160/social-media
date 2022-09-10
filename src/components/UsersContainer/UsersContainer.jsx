import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users/Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC} from "../../redux/reducers/usersReducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        if(this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
                .then(response => {
                    const {items, totalCount} = response.data
                    this.props.setUsers(items)
                    this.props.setTotalCount(totalCount)
            })
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`)
            .then(response => {
            const {items} = response.data
            this.props.setUsers(items)
        })
    }



    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.count)
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <Users
            pages={pages}
            users={this.props.users}
            page={this.props.page}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);