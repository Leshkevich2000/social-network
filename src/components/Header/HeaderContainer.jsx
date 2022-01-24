import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header"

import { setAuthUserData } from "../../redux/authReducer";

import './Header.css';


class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(res => {
            if (res.data.resultCode === 0) {
                let userId = res.data.data.id;
                let email = res.data.data.email;
                let login = res.data.data.login;
                this.props.setAuthUserData(userId, email, login);

            }
            // this.props.toggleIsFetching(false);
            // this.props.setUsers(res.data.items);

        });
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);