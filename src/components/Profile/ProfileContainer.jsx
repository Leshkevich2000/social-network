import React from "react";
import './Profile.css';
import Profile from "./Profile";
import * as axios from "axios"
import { connect } from "react-redux";
import { getUserProfileTC, setUsersProfile } from "../../redux/profileReducer";
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
// import { withRouter } from "react-router-dom"; до версии v6
import { Navigate, useMatch } from "react-router-dom"; //вместо withRoter
import Dialogs from "../Dialogs/Dialogs";
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 21492;
        }
        this.props.getUserProfileTC(userId);
    }

    render() {
        return (
            <div className='content' >
                <Profile {...this.profile} profile={this.props.profile} />
            </div>
        );
    }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});


// let WithUrlDataContainerComponent = withRouter(ProfileContainer); // с 6-й версии не поддерживается 
const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId");
    return (
        <AuthRedirectComponent {...props} match={match} />
    )
}

export default connect(mapStateToProps,
    {
        setUsersProfile: setUsersProfile,
        getUserProfileTC: getUserProfileTC
    })(ProfileMatch);

