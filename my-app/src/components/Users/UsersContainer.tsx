import React, {memo} from 'react';
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPagesSize,
    getTotalUsersCount,
} from "../../redux/reducers/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pagesSize: number
    isFetching: boolean
    users: Array<UserType>
    totalUsersCount: number
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void

    requestUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let {currentPage, pagesSize} = this.props;
        this.props.requestUsers(currentPage, pagesSize);
    }

    onPageChanged = (pageNumber: number) => {
        let {pagesSize} = this.props;
        this.props.requestUsers(pageNumber, pagesSize);
    };

    render() {
        //todo totalUsersCount rename it
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                totalItemsCount={this.props.totalUsersCount}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pagesSize: getPagesSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, { follow, unfollow, requestUsers}),
)(UsersContainer);