import React from "react";
import Users from './Users'
import * as axios from 'axios';
import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC } from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import { getUsers, updateUsers } from "../../API/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.items);
                this.props.setUsersTotalCount(res.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        updateUsers(pageNumber, this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.items);
            });
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
                unFollow={this.props.unFollow} />
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

    });
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setUsersTotalCount: (totalUsersCount) => {
//             dispatch(setUsersTotalCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// };

export default connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setUsersTotalCount: setUsersTotalCountAC,
    toggleIsFetching: toggleIsFetchingAC
})(UsersContainer);
