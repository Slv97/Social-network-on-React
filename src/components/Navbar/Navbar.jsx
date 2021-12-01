import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  let classNavLink = (link) => (link.isActive ? s.active : s.item);
  let navbar = props.navbarData.map((el, i) => {
    return (
      <div>
        <NavLink className={classNavLink} to={el.path} key={i}>
          {el.name}
        </NavLink>
      </div>
    );
  });

  return (
    <div>
      <nav className={s.nav}>{navbar}</nav>
      <Friends friendsData={props.friendsData} />
    </div>
  );
};

export default Navbar;
