import instance, { ResponseType } from './api';
import { GetUsersType } from '../type';

export const usersApi = {
    getUsers(page = 1, count = 10, term: string = '', isFriend: boolean | null = null) {
        let query;
        if (isFriend !== null) {
            query = `users?page=${page}&count=${count}&term=${term}&friend=${
                isFriend ? 'true' : 'false'
            }`;
        } else {
            query = `users?page=${page}&count=${count}&term=${term}`;
        }
        return instance.get<GetUsersType>(query).then((res) => res.data);
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then((res) => res.data);
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then((res) => res.data);
    },
};
