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

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {
        return <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
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

let mapStateToProps = (state) => {
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
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers }),
)(UsersContainer);