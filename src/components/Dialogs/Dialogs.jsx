import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message.jsx';
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {    

    let dialogElemet = props.dialogData.map((el, i) => {
        return <DialogItem key={i} name={el.name} id={el.id} img={el.img} />
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

      <div className={s.new_messages}>
          <NewMessage />
      </div>
    </div>
  );
};

export default Dialogs;
