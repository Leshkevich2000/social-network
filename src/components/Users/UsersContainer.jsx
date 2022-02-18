import React from "react";
import Users from './Users'
import { connect } from "react-redux";
import { follow, unFollow, setCurrentPage, toggleIsFetching, getUsersTC, followTC, toggleIsFollowingProgress, unFollowTC } from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getTotalUsersCount, getPageSize, getUsers } from "../../redux/usersSelectors";


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
        console.log("render");
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
    console.log("mapStateToProps");
    return ({
        'users': getUsers(state),
        'pageSize': getPageSize(state),
        'totalUsersCount': getTotalUsersCount(state),
        'currentPage': getCurrentPage(state),
        'isFetching': getIsFetching(state),
        'followingInProgress': getFollowingInProgress(state),
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
