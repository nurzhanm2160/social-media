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
import {
    getCountSelector,
    getIsFetching,
    getPageSelector,
    getTotalCountSelector,
    getUsersSelector,
} from '../../redux/reducers/usersSelectors';

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

    onUserClicked = (userId) => {
        this.props.setUserId(userId);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users
                    totalCount={this.props.totalCount}
                    count={this.props.count}
                    setCurrentPage={this.props.setCurrentPage}
                    users={this.props.users}
                    page={this.props.page}
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
        users: getUsersSelector(state),
        page: getPageSelector(state),
        count: getCountSelector(state),
        totalCount: getTotalCountSelector(state),
        isFetching: getIsFetching(state),
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
