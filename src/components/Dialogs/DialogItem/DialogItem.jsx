import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog_item}>
      <NavLink
        className={(link) => (link.isActive ? s.active : s.item)}
        to={path}
      >
        <img className={s.avatar} src={props.img} alt="avatar" />

        <span className={s.name}>{props.name}</span> 
      </NavLink>
    </div>
  );
};

export default DialogItem;
