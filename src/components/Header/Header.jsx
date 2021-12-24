import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
      />

      <div className={s.loginBlock}>
        {props.isAuth 
        ? <div>props.login <button onClick={props.logout}>Log out</button> </div> 
        : <NavLink to={"/login"}>login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
