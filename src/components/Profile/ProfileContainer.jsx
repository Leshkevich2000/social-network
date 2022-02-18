import React from "react";
import './Profile.css';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfileTC, setUsersProfile, getProfileStatusTC, updateProfileStatusTC } from "../../redux/profileReducer";
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
// import { withRouter } from "react-router-dom"; до версии v6
import { Navigate, useMatch } from "react-router-dom"; //вместо withRoter

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return (
            <div className='content' >
                <Profile {...this.profile} profile={this.props.profile} status={this.props.status}
                    updateProfileStatus={this.props.updateProfileStatus} />
            </div>
        );
    }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
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
        getUserProfile: getUserProfileTC,
        getProfileStatus: getProfileStatusTC,
        updateProfileStatus: updateProfileStatusTC
    })(ProfileMatch);

