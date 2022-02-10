import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { userLogin, } from "../../redux/authReducer";
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
class LoginContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <Login userId={this.props.userId} isAuth={this.props.isAuth}
                withAuthRedirect={this.props.withAuthRedirect} userLogin={this.props.userLogin} />
        );
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { userLogin, withAuthRedirect })(Login);