import React from 'react';
import { connect } from 'react-redux';
import {
    followSuccessThunkCreator,
    getUsersThunkCreator,
    getUsersTotalCountThunkCreator,
    setCurrentPage,
    setUserId,
    setUsers,
    unfollowSuccessThunkCreator,
} from '../../redux/reducers/usersReducer';
import Users from './Users/Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.page, this.props.count);
            this.props.getUsersTotalCountThunkCreator();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.page !== this.props.page) {
            this.props.getUsersThunkCreator(this.props.page, this.props.count);
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
    };

    onUserClicked = (userId) => {
        this.props.setUserId(userId);
    };

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.count);
        const pages = [];
        for (let i = 1; i <= pagesCount; i += 1) {
            pages.push(i);
        }

        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users
                    pages={pages}
                    users={this.props.users}
                    page={this.props.page}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.followSuccessThunkCreator}
                    unfollow={this.props.unfollowSuccessThunkCreator}
                    onUserClicked={this.onUserClicked}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
    };
};

export default connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setUserId,
    getUsersThunkCreator,
    getUsersTotalCountThunkCreator,
    followSuccessThunkCreator,
    unfollowSuccessThunkCreator,
})(UsersContainer);
