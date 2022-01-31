import React from "react";
import Users from './Users'
import { connect } from "react-redux";
import { follow, unFollow, setCurrentPage, toggleIsFetching, getUsersTC, followTC, toggleIsFollowingProgress, unFollowTC } from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <>
            {this.props.isFetching ?
                <Preloader /> : null}
            <Users onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followTC={this.props.followTC}
                unFollowTC={this.props.unFollowTC}
            />
        </>
    };

}

let mapStateToProps = (state) => {
    return ({
        'users': state.usersPage.users,
        'pageSize': state.usersPage.pageSize,
        'totalUsersCount': state.usersPage.totalUsersCount,
        'currentPage': state.usersPage.currentPage,
        'isFetching': state.usersPage.isFetching,
        'followingInProgress': state.usersPage.followingInProgress,
    });
};


export default connect(mapStateToProps, {
    follow: follow,
    unFollow: unFollow,
    toggleIsFetching,
    toggleIsFollowingProgress,
    setCurrentPage: setCurrentPage,
    getUsersTC: getUsersTC,
    followTC,
    unFollowTC
})(UsersContainer);
