
import React from "react";
import { connect } from "react-redux";
import Header from "./Header"
import { userLogout } from "../../redux/authReducer";
import './Header.css';



class HeaderContainer extends React.Component {
    componentDidMount() {
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

export default connect(mapStateToProps, { logout: userLogout })(HeaderContainer);