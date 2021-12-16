import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useMatch } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : "2";

    this.props.getUserProfile(userId);
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let ProfileMatch = (props) => {
  let match = useMatch("/profile/:userId");

  return <AuthRedirectComponent {...props} match={match} />;
};

export default compose(connect(mapStateToProps, { getUserProfile }))(
  ProfileMatch
);

