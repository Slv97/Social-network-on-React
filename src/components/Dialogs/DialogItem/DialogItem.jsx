import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink
        className={(link) => (link.isActive ? s.active : s.item)}
        to={path}
      >
        <img className={s.avatar} src={props.img} alt="avatar" />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
