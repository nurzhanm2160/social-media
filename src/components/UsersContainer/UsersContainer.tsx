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
import { UserType } from '../../type';
import { StateType } from '../../redux/reduxStore';

interface MapStatePropsType {
    users: UserType[];
    page: number;
    count: number;
    totalCount: number;
    isFetching: boolean;
}

interface MapDispatchPropsType {
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (page: number) => void;
    setUserId: (userId: number) => void;

    getUsersThunkCreator: (page: number, count: number) => void;
    getUsersTotalCountThunkCreator: () => void;
    followSuccessThunkCreator: (userId: number) => void;
    unfollowSuccessThunkCreator: (userId: number) => void;
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.page, this.props.count);
            this.props.getUsersTotalCountThunkCreator();
        }
    }

    componentDidUpdate(prevProps: PropsType): void {
        if (prevProps.page !== this.props.page) {
            this.props.getUsersThunkCreator(this.props.page, this.props.count);
        }
    }

    onUserClicked = (userId: number): void => {
        this.props.setUserId(userId);
    };

    render(): JSX.Element {
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

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        page: getPageSelector(state),
        count: getCountSelector(state),
        totalCount: getTotalCountSelector(state),
        isFetching: getIsFetching(state),
    };
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setUserId,
    getUsersThunkCreator,
    getUsersTotalCountThunkCreator,
    followSuccessThunkCreator,
    unfollowSuccessThunkCreator,
})(UsersContainer);
