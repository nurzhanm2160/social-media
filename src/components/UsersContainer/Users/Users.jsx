import React from 'react';
import axios from "axios";
import styles from './Users.module.css'

class Users extends React.Component {

    componentDidMount() {
        if(this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then(response => {
                const {items, totalCount} = response.data
                this.props.setUsers(items)
                this.props.setTotalCount(totalCount)
            })
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then(response => {
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

        return (
            <div>
                {pages.map((item, index) => {
                    return <span
                        className={item === this.props.page ? styles.activePage : ""}
                        key={index}
                        onClick={() => this.onPageChanged(item)}
                    >
                        {item}
                    </span>
                })}
                {this.props.users.map(user => {
                    return (<div key={user.id}>
                        <span>
                            <div>
                                <img
                                    src={user.photos.small ? user.photos.small : "data:image/png;base64,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"}
                                    alt="UserAvatar"/>
                            </div>
                            <div>
                                {user.followed ? <button onClick={() => this.props.follow(user.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.unfollow(user.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                        </span>
                    </div>)
                })}
            </div>
        )
    }
}

export default Users;