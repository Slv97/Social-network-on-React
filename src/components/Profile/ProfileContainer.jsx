import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useMatch } from "react-router-dom";
import { userProfileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : "2";

    userProfileAPI.userProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let ProfileMatch = (props) => {
  let match = useMatch("/profile/:userId");

  return <ProfileContainer {...props} match={match} />;
};

export default connect(mapStateToProps, { setUserProfile })(ProfileMatch);
