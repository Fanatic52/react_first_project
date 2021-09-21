import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage, setUsers, setUsersTotalCount, toggleFollowingProgress, toggleIsFetching,
    unfollow
} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChangedClick = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChangedClick={this.onPageChangedClick}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
)(UsersContainer);