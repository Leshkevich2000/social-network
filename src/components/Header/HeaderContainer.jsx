
import React from "react";
import { connect } from "react-redux";
import Header from "./Header"
import { authMeTC } from "../../redux/authReducer";
import './Header.css';



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeTC();
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

export default connect(mapStateToProps, { authMeTC })(HeaderContainer);