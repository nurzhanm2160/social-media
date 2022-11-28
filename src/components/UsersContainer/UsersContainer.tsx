import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { getIsFetching } from '../../redux/reducers/usersSelectors';
import { Users } from './Users/Users';

export const UsersPage: FC = () => {
    const isFetching = useSelector(getIsFetching);

    return (
        <>
            {isFetching && <Preloader />}
            <Users />
        </>
    );
};
