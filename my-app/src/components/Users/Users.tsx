import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

//todo is isFetching necessary?
type PropsType = {
    pagesSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    isFetching: boolean
};

let Users: React.FC<PropsType> = ({pagesSize, totalItemsCount, currentPage, onPageChanged, users, ...props}) => {
    let usersContent = users.map(user => <User
        key={user.id}
        user={user}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow}
        follow={props.follow}/>)

    return <div>
        <Paginator
            pagesSize={pagesSize}
            totalItemsCount={totalItemsCount}
            currentPage={currentPage}
            onPageChanged={onPageChanged}/>
        {usersContent}
    </div>
}

export default Users;