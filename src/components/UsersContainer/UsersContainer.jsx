import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount, setUserId,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/reducers/usersReducer";
import Users from "./Users/Users";
import Preloader from "../common/Preloader/Preloader";
import {instance} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            instance.get(`users?page=${this.props.page}&count=${this.props.count}`)
                .then(response => {
                    this.props.toggleIsFetching(false)
                    const {items, totalCount} = response.data
                    this.props.setUsers(items)
                    this.props.setTotalCount(totalCount)
                })
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        instance.get(`users?page=${this.props.page}&count=${this.props.count}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                const {items} = response.data
                this.props.setUsers(items)
            })
    }

    onUserClicked = (userId) => {
        this.props.setUserId(userId)
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.count)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <>
            {this.props.isFetching && <Preloader />}
            <Users
                pages={pages}
                users={this.props.users}
                page={this.props.page}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onUserClicked={this.onUserClicked}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    setUsers,
    follow,
    unfollow,
    setTotalCount,
    setCurrentPage,
    toggleIsFetching,
    setUserId
})(UsersContainer);