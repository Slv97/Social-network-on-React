import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message.jsx'

const Dialogs = (props) => {
    

    let dialogElemet = props.dialogData.map((el, i) => {
        return <DialogItem key={i} name={el.name} id={el.id} />
    });

    

    let messageElemet = props.messageData.map((el, i) => {
        return <Message key={i} id={el.id} text={el.text} />
    })

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
          {dialogElemet}
      </div>
      <div className={s.messages}>
          {messageElemet}
      </div>
    </div>
  );
};

export default Dialogs;
