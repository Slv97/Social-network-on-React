import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message.jsx";
import NewMessageContainer from "./NewMessage/NewMessageContainer";

const Dialogs = (props) => {
  let dialogElemet = props.dialogData.map((el) => {
    return <DialogItem key={el.id} name={el.name} id={el.id} img={el.img} />;
  });

  let messageElemet = props.messageData.map((el) => {
    return <Message key={el.id} id={el.id} text={el.text} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>{dialogElemet}</div>

      <div className={s.messages}>{messageElemet}</div>

      <div className={s.new_messages}>
        <NewMessageContainer store={props.store} />
      </div>
    </div>
  );
};

export default Dialogs;
