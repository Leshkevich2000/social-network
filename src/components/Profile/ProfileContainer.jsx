import React from "react";
import './Profile.css';
import Profile from "./Profile";
import * as axios from "axios"
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profileReducer";
// import { withRouter } from "react-router-dom"; до версии v6
import { useMatch } from "react-router-dom"; //вместо withRoter
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 21492;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(res => {
            this.props.setUsersProfile(res.data);
        });
    }

    render() {
        return (
            <div className='content' >
                <Profile {...this.profile} profile={this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


// let WithUrlDataContainerComponent = withRouter(ProfileContainer); // с 6-й версии не поддерживается 
const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId");
    return (
        <ProfileContainer {...props} match={match} />
    )
}

export default connect(mapStateToProps, { setUsersProfile: setUsersProfile })(ProfileMatch);

