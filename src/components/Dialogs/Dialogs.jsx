import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

  return (
    <div>
      <NavLink className={link=>link.isActive ? s.active : s.item} to={path}>
        { props.name }
      </NavLink>
    </div>
  );
};

const Message = (props) => {
    return (
        <div className={s.message}> { props.text } </div>
    )
}

const Dialogs = (props) => {
    let dialogData = [
        {id: 1, name: "Lena"},
        {id: 2, name: "Leha"},
        {id: 3, name: "Andy"}
    ];

    let messageData = [
        {id: 1, text: "hi"},
        {id: 2, text:"kaka"},
        {id: 3, text:"lol"},
        {id: 4, text:"hi"},
    ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
          <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
          <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
          <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
      </div>
      <div className={s.messages}>
          <Message id={messageData[0].id} text={messageData[0].text} />
          <Message id={messageData[1].id} text={messageData[1].text} />
          <Message id={messageData[2].id} text={messageData[2].text} />
          <Message id={messageData[3].id} text={messageData[3].text} />
      </div>
    </div>
  );
};

export default Dialogs;
