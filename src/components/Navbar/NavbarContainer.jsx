import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    navbarData: state.sidebar.navbarData,
    friendsData: state.sidebar.friendsData,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
