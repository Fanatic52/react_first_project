import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/reducers/users-reducer";
import {useSelector} from "react-redux";
import {getTotalUsersCount} from "../../redux/reducers/users-selectors";

//todo is isFetching necessary?
type PropsType = {
    pagesSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    isFetching: boolean
};

let Users: React.FC<PropsType> = ({pagesSize, totalItemsCount, currentPage, onPageChanged, users, ...props}) => {
    const totalUsersCount= useSelector(getTotalUsersCount);

    let usersContent = users.map(user => <User
        key={user.id}
        user={user}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow}
        follow={props.follow}/>)

    return <div>
        <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
        <Paginator
            pagesSize={pagesSize}
            totalItemsCount={totalItemsCount}
            currentPage={currentPage}
            onPageChanged={onPageChanged}/>
        {usersContent}
    </div>
}

export default Users;