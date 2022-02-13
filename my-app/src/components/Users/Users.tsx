import React, {useEffect} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/reducers/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPagesSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/reducers/users-selectors";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";

type PropsType = {};

type QueryParamType = { term?: string; page?: string; friend?: string };
export let Users: React.FC<PropsType> = () => {
    const users = useSelector(getUsers)
    const totalUsersCount= useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPagesSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const parsed: QueryParamType = queryString.parse(history.location.search.substr(1)) as QueryParamType

        let actualPage = !!parsed.page
            ? Number(parsed.page)
            : currentPage

        let actualFilter = !!parsed.term
            ? {
                ...filter,
                term: parsed.term as string,
                friend: parsed.friend === "null" ? null : parsed.friend === "true"
            }
            : filter

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamType = {}

        if (!!filter.term)
            query.term = filter.term
        if (!!filter.friend)
            query.friend = String(filter.friend)
        if (currentPage !== 1)
            query.page = String(currentPage)

        history.push({
            pathname: "/users",
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter : FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }

    let usersContent = users.map(user => <User
        key={user.id}
        user={user}
        followingInProgress={followingInProgress}
        unfollow={unfollowUser}
        follow={followUser}/>)

    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <Paginator
            pagesSize={pageSize}
            totalItemsCount={totalUsersCount}
            currentPage={currentPage}
            onPageChanged={onPageChanged}/>
        {usersContent}
    </div>
}