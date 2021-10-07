import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({pageSize, totalUsersCount, currentPage, onPageChanged, ...props}) => {
    let usersContent = props.users.map(user => <User
        key={user.id}
        user={user}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow}
        follow={props.follow}/>)
    return <div>
        <Paginator
            pageSize={pageSize}
            totalCount={totalUsersCount}
            currentPage={currentPage}
            onPageChanged={onPageChanged}/>
        {usersContent}
    </div>
}

export default Users;